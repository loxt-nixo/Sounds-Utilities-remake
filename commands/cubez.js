const config = require('../config.json')
const prefix = config.prefix

module.exports = {
    name: 'messageCreate',
    async execute (msg, client) {
        if (msg.author.bot) return;
        if (!msg.content.startsWith(prefix)) return;

        const args = msg.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        if (command === 'cubez') {
            await msg.reply(`https://tenor.com/view/happy-cat-gif-26283306`)
        }
    }};