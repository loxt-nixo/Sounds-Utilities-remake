const config = require('../config.json')
const prefix = config.prefix

module.exports = {
    name: 'messageCreate',
    async execute (msg, client) {
        if (msg.author.bot) return;
        if (!msg.content.startsWith(prefix)) return;

        const args = msg.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        if (command === 'warm') { 
            const userMention = msg.mentions.users.first();
            if (userMention) {
                var foundUser = msg.guild.members.cache.get(userMention.id)
            } else {
                var foundUser = msg.guild.members.cache.get(args[0])
            }

            if (!foundUser) {
                await msg.reply(`no user to warm :(`)
                return;
            }
            await msg.reply(`Warmed **${foundUser.user.username}**!1!!!1!1`)
        }
    }};