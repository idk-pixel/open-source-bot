const Discord = require("discord.js");
const { Message } = require('discord.js');
const Client = require("../structures/Client");
const ccManager = require("../database/models/cc");
module.exports = {
  name: `cc`,
  description: `Creates a custom command`,
  category: `util`,
  /**
   * @param {Message} message
   * @param {Client} client
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    if(!message.member.permissions.has('MANAGE_MESSAGES')) {return message.reply('You do not have enough permissions!')};
    if(!args[0]) {
        return message.reply('You did not specify a command');
    }
    if(!args[1]) {
        return message.reply('You did not specify the content for the command!');
    }

    await ccManager.findOne({Guild: message.guild.id, Command: arg[0]}, (err, data) => {
        if(err) throw err;
        if(!data) {
            await ccManager.create({ Guild: message.guild.id, Command: args[0], Content: args[1] });
            await message.channel.send(`Created command ${args[0]} with content of ${args[1]}`);
        } else {
            data.Content = args[0]
            data.save()
            message.channel.send(`Changed the content to ` + args[1]);
        }
    })
  }
};
