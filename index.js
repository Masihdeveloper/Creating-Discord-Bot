/* 
Make Online your Bot in Discord.js V14
Hope you Enjoy, Made with 💜 by Masih#0258
Github: https://github.com/Masihdev1 | Don't forget to ⭐
Website: https://masihdev.tk/
Copyright Masih 2024 All Right Reserved!
*/

const {
  Client,
  GatewayIntentBits,
  EmbedBuilder,
  ActivityType,
} = require("discord.js");
const { joinVoiceChannel } = require("@discordjs/voice");
const config = require("./config.json");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildPresences
  ],
});

client.on("ready", async () => {
  async function status() {
    const guild = client.guilds.cache.get(config.guildId);
    const members = await guild.members.fetch({ withPresences: true });
    const onlineMembersSize = members.filter(
      (m) =>
        m.presence?.status === "online" ||
        m.presence?.status === "idle" ||
        m.presence?.status === "dnd"
    ).size;
       const activeMiceSize = members.filter(m=> m.voice.channel).size
    const activityName = [
      `${guild.name}`,
      `${guild.memberCount} Members`,
      `${onlineMembersSize} Online`,
      `${activeMiceSize} Active Mics`,
    ];
    const activityType = [
      ActivityType.Competing,
      ActivityType.Watching,
      ActivityType.Watching,
      ActivityType.Listening,
    ];
       const allStatus = ["online", "idle", "dnd"]
       
    const random = Math.floor(Math.random() * activityName.length);
    client.user.setPresence({
      status: allStatus[random],
      activities: [{ name: activityName[random], type: activityType[random] }],
    });
     }
    setInterval(status, 15000)
    
  //Join to a Voice Channel
 function joinVoice(){
    const voiceChannel = client.channels.cache.get(config.voiceChannelId)
    joinVoiceChannel({
      channelId: voiceChannel.id,
      guildId: voiceChannel.guild.id,
      selfDeaf: true, // Also you change it to true for deafen in Voice Channel
      adapterCreator: voiceChannel.guild.voiceAdapterCreator,
    });
 }
    setInterval(joinVoice, 20000)

  console.log(`Logged in as ${client.user.tag}\nGitHub: https://github.com/masihdev1 | Don't forget to ⭐`);
});

client.on("messageCreate", async (message) => {

  if (message.content.startsWith(`${config.prefix}ping`)) {
      const pingEmbed = new EmbedBuilder()
    .setTitle(client.user.username + " - Pong!")
      .setThumbnail(
        client.user.displayAvatarURL({
          dynamic: true,
          size: 4096,
          format: "png",
        })
      )
      .addFields(
        {
          name: `🛰 Message Ping:`,
          value: `**__${Date.now() - message.createdTimestamp}ms__**`,
        },
        {
          name: `📊 API Latency:`,
          value: `**__${Math.round(client.ws.ping)}ms__**`,
        },
        {
          name: `⏳ Uptime:`,
          value: `<t:${Math.round(
            client.readyTimestamp / 1000
          )}:f> | <t:${Math.round(client.readyTimestamp / 1000)}:R>`,
        }
      )
      .setColor(`${message.guild.members.me.displayHexColor}`)

      .setFooter({
        text: `Requested by ${message.author.username}`,
        iconURL: message.author.displayAvatarURL({
          dynamic: true,
          size: 4096,
          format: "png",
        }),
      })
      .setTimestamp();

      
      message.channel.sendTyping();
      message.reply({ embeds: [pingEmbed], allowedMentions: {
              repliedUser: true,
            }
                    });
           message.react("✅");
      }
});

client.login(config.botToken);
