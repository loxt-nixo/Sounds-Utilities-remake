const config = require('../config.json')
const prefix = config.prefix

module.exports = {
    name: 'messageCreate',
    async execute (msg, client) {
        if (msg.author.bot) return;
        if (!msg.content.startsWith(prefix)) return;

        const args = msg.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        if (command === 'mod') { 
            const userMention = msg.mentions.users.first();
            if (userMention) {
                var foundUser = msg.guild.members.cache.get(userMention.id)
            } else {
                var foundUser = msg.guild.members.cache.get(args[0])
            }
            const modID = Math.floor(Math.random() * 1000) + 1;

            if (!foundUser) {
                await msg.reply(`no user found`)
                return;
            }
            await foundUser.setNickname(`Moderated Nickname ${modID}`)
            await msg.reply(`Moderated name to \`Moderated Nickname ${modID}\`.`)
        }
    }};