const afkS = require('../Schemas/afkSchema')

module.exports = {
    name: 'messageCreate',
    async execute (msg) {
        if (msg.author.bot) return;

        const CheckIFAfk = await afkS.findOne({ Guild: msg.guild.id, User: msg.author.id })
        if (CheckIFAfk) {
            await afkS.deleteMany({ Guild: msg.guild.id, User: msg.author.id });
            const backmsg = await msg.reply(`Welcome back 👋`)
            setTimeout(() => {
                backmsg.delete();
              }, 4000);
        }
    }  
}
