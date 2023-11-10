const afkS = require("../Schemas/afkSchema");

module.exports = {
  name: "messageCreate",
  async execute(msg, client) {
    if (msg.author.bot) return;

    const check = await afkS.findOne({ Guild: msg.guild.id, User: msg.author.id });
    if (check) {
      const PingedUser = msg.mentions.users.first();
      if (!PingedUser) return;

      if(PingedUser) {
      const data = await afkS.findOne({
        Guild: msg.guild.id,
        User: PingedUser.id,
      });
      if (!data) return;

      const PingedID = msg.guild.members.cache.get(PingedUser.id);
      const AFKMSG = data.Reason;

      if (msg.content.includes(PingedUser)) {
        const m = await msg.reply(
          `${PingedID.user.tag} is afk with the reason ${AFKMSG}`
        );
        setTimeout(() => {
          m.delete();
          msg.delete();
        }, 4000);
      }
    }
    }
  },
};
