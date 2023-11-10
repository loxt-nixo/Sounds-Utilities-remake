const config = require('../config.json')
const prefix = config.prefix

module.exports = {
    name: 'messageCreate',
    async execute (msg, client) {
        if (msg.author.bot) return;
        if (!msg.content.startsWith(prefix)) return;

        const args = msg.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        if (command === 'uwu') { 

            let message = [
                {
                    content: `take me home 'n' pet me`
                },
                {
                    content: `kissies 'n'n lickies your neck`
                },
                {
                    content: `pounces on you`
                },
                {
                    content: `uwu you so warm`
                },
                {
                    content: `rawr x3 nuzzles`
                },
                {
                    content: `I hope daddy likies`
                },
                {
                    content: `PLEASE ADOPT ME`
                }
            ]

            let random = Math.floor(Math.random() * message.length);

            await msg.reply(message[random].content)

        }
    }};