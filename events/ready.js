const { ActivityType } = require("discord.js");
const mongoose = require("mongoose");
const config = require('../config.json')
const mongodbURL = config.mongodbUrl;

module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    console.log(`[Bot] ${client.user.tag} is ready!`);

    setInterval(() => {
        let status = [
          {
            name: `Sound's Videos`,
            type: ActivityType.Watching,
          },
          {
            name: `for rule breakers`,
            type: ActivityType.Watching,
          },
          {
            name: `giveaways`,
            type: ActivityType.Watching,
          },
          {
            name: `the mods in the closet`,
            type: ActivityType.Watching,
          },
          {
            name: `🎵 Music #1 [Stereo]`,
            type: ActivityType.Listening,
          },
          {
            name: `discord.gg/sound`,
            type: ActivityType.Playing,
          },
          {
            name: `**membercount** members`,
            type: ActivityType.Watching,
          },
          {
            name: `everything go wrong`,
            type: ActivityType.Watching,
          },
          {
            name: `the news`,
            type: ActivityType.Listening,
          },
          {
            name: `Spotify`,
            type: ActivityType.Listening,
          },
          {
            name: `#general chat`,
            type: ActivityType.Watching,
          },
          {
            name: `Minecraft`,
            type: ActivityType.Playing,
          },
          {
            name: `with my dog`,
            type: ActivityType.Playing,
          },
          {
            name: `everyone`,
            type: ActivityType.Watching,
          },
          {
            name: `COVID-19`,
            type: ActivityType.Watching,
          },
          {
            name: `out for staff apps`,
            type: ActivityType.Watching,
          },
          {
            name: `Walker walking`,
            type: ActivityType.Streaming,
            url: 'https://www.twitch.tv/discord',
          }, 
          {
            name: `the world burn`,
            type: ActivityType.Watching,
          },
          {
            name: `Simon Says`,
            type: ActivityType.Playing,
          },
          {
            name: `latest COVID-19 info`,
            type: ActivityType.Playing,
          },
          {
            name: `smooth jazz`,
            type: ActivityType.Listening,
          },          
          {
            name: `no`,
            type: ActivityType.Playing,
          },
        ];
        let random = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[random]);
      }, `2500`);

    if (!mongodbURL) {
        console.log('[Database] No MongoDB Url provided')
        return;
    }

    mongoose.set("strictQuery", false);

    await mongoose.connect(mongodbURL || "", {
      //keepAlive: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    if (mongoose.connect) {
      mongoose.set("strictQuery", true);
      console.log("[Database] Connected to the Database");
    }
  },
};