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
  ],
});

client.on("messageCreate", async (message) => {

  if (message.content.startsWith(`${config.prefix}ping`)) {
    const firstPingReply = await message.reply({
      content: "🎉 Calculating the Bot's Ping...",
      fetchReply: true,
    });

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
      .setTimestmap();

    setTimeout(function () {
      message.channel.sendTyping();
       firstPingReply.edit({ content: "\u200B", embeds: [pingEmbed] });
    }, 6000);
  }
});
client.on("ready", async () => {
  //Status of your bot; also you can change "idle" with: 'dnd', "online"
  client.user.setPresence({
    status: "idle",
    activities: [{ name: "Nothing...", type: ActivityType.Watching }],
  });

  //Join to a Voice Channel
  setInterval(() => {
    const voiceChannel = client.channels.cache.get(config.voiceChannelId)
    joinVoiceChannel({
      channelId: voiceChannel.id,
      guildId: voiceChannel.guild.id,
      selfDeaf: true, // Also you change it to true for deafen in Voice Channel
      adapterCreator: voiceChannel.guild.voiceAdapterCreator,
    });
  }, 15000);

  console.log(`Logged in as ${client.user.tag}\nGitHub: https://github.com/masihdev1 | Don't forget to ⭐`);
});

client.login(config.botToken);
