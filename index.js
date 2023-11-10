const { Client, GatewayIntentBits, ActivityType, EmbedBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, Events, Partials, ChannelType, PermissionsBitField, Permissions, MessageManager, Embed, Collection, ButtonBuilder, ActionRowBuilder, ButtonStyle } = require('discord.js');
const fs = require('fs');
const config = require('./config.json')
const badwords = require('./badwords.json')
const prefix = config.prefix
const clientId = config.clientId
require('events').EventEmitter.defaultMaxListeners = Infinity; 

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages, GatewayIntentBits.DirectMessageTyping, GatewayIntentBits.DirectMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildVoiceStates], partials: [Partials.Message, Partials.Channel, Partials.Reaction] });

const handlers = fs.readdirSync("./handlers").filter(file => file.endsWith(".js"));
const commandsFolder = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
const eventsFolder = fs.readdirSync("./events").filter(file => file.endsWith(".js"));

(async () => {
    for (file of handlers) {
        require(`./handlers/${file}`)(client);
    }
    client.eventHandler(eventsFolder, "./events");
    client.prefixHandler(commandsFolder, "./commands");
    client.login(config.token)
})();

process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on("uncaughtException", (err) => {
    console.log("Uncaught Exception:", err);
});

process.on("uncaughtExceptionMonitor", (err, origin) => {
    console.log("Uncaught Exception Monitor", err, origin);
});