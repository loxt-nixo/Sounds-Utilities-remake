const config = require('../config.json')
const prefix = config.prefix

module.exports = {
    name: 'messageCreate',
    async execute (msg, client) {
        if (msg.author.bot) return;
        if (!msg.content.startsWith(prefix)) return;

        const args = msg.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        if (command === 'ping') { 
            const pingMSG = await msg.reply(`taking a Roundtrip...`)
            const msgEdit = Date.now()-pingMSG.createdTimestamp;
            await pingMSG.edit(`Pong! (Roundtrip took: ${msgEdit}ms. Heartbeat: ${client.ws.ping}ms.)`)
        }
    }};