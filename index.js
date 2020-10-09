const { Base } = require('discord.js');
const mongoBase = require('./database/connect');
const BaseClient = require('./structures/Client');
const client = new BaseClient();
const configuration = require('./bot_config.json');
client.start(configuration, `./commands`)
mongoBase.start();