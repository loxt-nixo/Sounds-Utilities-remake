const { PermissionsBitField, EmbedBuilder } = require('discord.js')
const config = require('../config.json')
const prefix = config.prefix

const channelSlowmodes = new Map();

module.exports = {
    name: 'messageCreate',
    async execute (msg, client) {
        if (msg.author.bot) return;
        if (!msg.content.startsWith(prefix)) return;
        if (!msg.member.permissions.has(PermissionsBitField.Flags.ManageChannels)) {
            msg.reply(`you are not allowed to use this command!`)
            return;
        }

        const args = msg.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        if (command === 'sm') { 
            const slowtime = args[0];
            if (!slowtime || isNaN(slowtime)) {
                const channel = msg.channel;
                const currentSlowmode = channelSlowmodes.get(channel.id);
                if (currentSlowmode !== undefined) {
                    msg.reply(`The current slowmode is **${currentSlowmode}** seconds`);
                } else {
                    msg.reply(`The current slowmode is **0** seconds`);
                }
            } else {
                const number = parseInt(slowtime, 10);
                const channel = msg.channel;
                channelSlowmodes.set(channel.id, number);
                await channel.setRateLimitPerUser(number);

                if (number === 0) {
                    await msg.reply(`Slowmode has been turned off, good luck!`)
                } else {
                await msg.reply({ content: `Slowmode set to \`${number}\` seconds.` });
                }
            }
        }
    }};