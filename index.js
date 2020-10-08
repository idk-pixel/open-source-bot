const { Base } = require('discord.js');
const BaseClient = require('./structures/Client');
const client = new BaseClient();
const configuration = require('./bot_config.json');
client.start(configuration, `./commands`)