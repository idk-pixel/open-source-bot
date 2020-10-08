const { throws } = require("assert");
const { Collection } = require("discord.js");
const Discord = require("discord.js");
const fs = require("fs");
const path = require("path");
const client = new Discord.Client({
  disableMentions: `everyone`,
});


/* Collections */
client.commands = new Collection();
client.aliases = new Collection();

const getCommand = (cmd) => {
    return this.commands.has(cmd) ? this.commands.get(cmd) : false;
}

client.on("ready", () => {
  fs.readFileSync(path.normalize(path)).map((f) => {
    const File = require(path.join(__dirname, `..`, `./commands`, f));
    client.commands.set(File.name, File);
    if(File.aliases) {
        File.aliases.map((alias) => client.aliases.set(alias, File));
    }
  });
});
