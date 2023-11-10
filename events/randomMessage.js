const { EmbedBuilder } = require('discord.js');
const config = require('../config.json');
const prefix = config.prefix
const cooldowns = new Set();

module.exports = {
    name:'messageCreate',
    async execute (msg) {

    if (msg.content.startsWith(prefix)) return;
    if (!msg.inGuild() || cooldowns.has(msg.guild.id) || msg.author.bot) return;
    if (msg.channel.id !== '1163478980112945152') return;

    let message = [
        {
            content: `Your cool message 1`
        },
        {
            content: `your cool message 2`
        },
        {
            content: `your cool message 3`
        }
    ]

    let random = Math.floor(Math.random() * message.length);

    const embed = new EmbedBuilder()
    .setColor("Random")
    .setDescription(message[random].content)

    cooldowns.add(msg.guild.id);

    await msg.channel.send({ embeds: [embed] })

    setTimeout(() => {
        cooldowns.delete(msg.guild.id);
      }, 60000);
    }
}
