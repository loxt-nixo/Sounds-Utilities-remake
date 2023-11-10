const config = require('../config.json')
const prefix = config.prefix
const { EmbedBuilder } = require('discord.js')

module.exports = {
    name: 'messageCreate',
    async execute (msg, client) {
        if (msg.author.bot) return;
        if (!msg.content.startsWith(prefix)) return;

        const args = msg.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        function formatNumber(number) {
            if (number < 1000) {
              return number;
            }
          
            const stringNumber = number.toString();
          
            const parts = stringNumber.split('');

            for (let i = stringNumber.length - 3; i >= 0; i -= 3) {
              parts.splice(i + 1, 0, ',');
            }
          
            const formattedNumber = parts.join('');
          
            return formattedNumber;
          }

        let humans = formatNumber(msg.guild.memberCount);
        let humansWithoutBotsUnfomated = (msg.guild.memberCount-1);
        let humansWithoutBotsformated = formatNumber(humansWithoutBotsUnfomated)


        if (command === 'membercount') { 
            const embed = new EmbedBuilder()
            .setAuthor({ name: 'Member Count', iconURL: client.user.avatarURL() })
            .setDescription(`There are **${humans}** members in this server.\n**Humans:** ${humansWithoutBotsformated} \n**Bots:** 1`)
            .setColor("10b981")

            await msg.reply({ embeds: [embed] })

        }
    }};
