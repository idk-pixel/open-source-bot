const { Message, MessageEmbed } = require("discord.js");
const Client = require("../structures/Client");
const expressjs = require("../expressjs");
module.exports = {
  name: `ping`,
  description: `Pings the bot`,
  category: `util`,
    /**
   * @param {Message} message
   * @param {Client} client
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const ping_message = await message.channel.send('Pinging the bot for this guild...');
    await ping_message.edit(
      new MessageEmbed(
        {
          title: `Pong!`,
          description: `Client WS Ping: ${client.ws.ping}\n\n Message Edit: ${ping_message.createdAt - message.createdAt}`
        }
      )
    )
  }
};
