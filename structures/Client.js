const { Client, Collection } = require("discord.js");
const { stdout } = require("process");
class OpenSourceBot extends Client {
  constructor() {
    super({
      disableMentions: `everyone`,
    });
    this.commands = new Collection()
    this.aliases = new Collection();
    this.discord = require('discord.js');
    this.fs = require('fs');
    this.path = require('path');
  }

  commandHandler(path) {
    this.fs.readdirSync(this.path.normalize(path)).map((f) => {
        const File = require(this.path.join(__dirname, `..`, path, f));
        this.commands.set(File.name, File);
        console.log('Loaded command ' + File.name);
    })
  }

  getCommand(cmd) {
    return this.commands.has(cmd) ? this.commands.get(cmd) : false;
  }

  start(configuration, path) {
    this.login(configuration.token);
    this.commandHandler(path);
    this.on('ready', function() {
        console.log("I am ready!");     
    })
    this.on('message', async function(message) {
        const args = message.content.slice(configuration.bot_prefix.length).trim().split(/ + /g);
        const cmd = args.shift().toLowerCase()
        const command = this.getCommand(cmd);
        if(command){
            try {
                command.run(this, message, args);
            } catch (err) {
                console.log(err);
                message.channel.send('error, please give error to github issues.')
            }
        }
    })
  }
}

module.exports = OpenSourceBot