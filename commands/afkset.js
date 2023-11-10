const config = require('../config.json');
const prefix = config.prefix;
const afkS = require('../Schemas/afkSchema')

module.exports = {
    name: 'messageCreate',
    async execute(msg, client) {
        if (msg.author.bot) return;
        if (!msg.content.startsWith(prefix)) return;

        const args = msg.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        if (command === 'afk') {
            const AFKreason = args.length > 0 ? args.join(' ') : 'AFK';
            const data = await afkS.findOne({ Guild: msg.guild.id, User: msg.author.id })
            if (data) {
                await msg.reply(`You are already afk with the reason ${data.Reason}`)
            } else {
                await afkS.create({ Guild: msg.guild.id, User: msg.author.id, Reason: AFKreason })
                await msg.reply(`You are now AFK. **${AFKreason}**`);
            }
        }
    },
};
