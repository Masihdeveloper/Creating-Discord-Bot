const { Client, Intents } = require("discord.js");

const client = new Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION", "USER", "GUILD_MEMBER"],
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.DIRECT_MESSAGES,
  ],
});

require("dotenv").config();

client.on("messageCreate", async (message) => {
  const prefix = process.env.PREFIX;
  if (message.content.startsWith(`${prefix}ping`)) {
    const { MessageEmbed } = require("discord.js");
    const ms = require("ms");
    const Pings = await message.reply({
      content: "<a:emoji_23:951619520307548240> Calculating the Bot's Ping...",
      fetchReply: true,
    });

    const ping = Date.now() - message.createdTimestamp;

    const PingEmbed = new MessageEmbed()
      .setColor(`${message.guild.me.displayHexColor}`)
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
          name: `🛰Message Ping:`,
          value: `**__${ping}ms__**`,
        },
        {
          name: `📊API Latency:`,
          value: `**__${Math.round(client.ws.ping)}ms__**`,
        },
        {
          name: `⏳Uptime:`,
          value: `<t:${Math.round(
            client.readyTimestamp / 1000
          )}:f> | <t:${Math.round(client.readyTimestamp / 1000)}:R>`,
        }
      )
      .setTimestamp()
      .setFooter({
        text: `Requested by ${message.author.username}`,
        iconURL: message.author.displayAvatarURL({
          dynamic: true,
          size: 4096,
          format: "png",
        }),
      });

    let time = "6s";
    setTimeout(function () {
      message.channel.sendTyping();
      Pings.edit({ content: "\u200B", embeds: [PingEmbed] });
    }, ms(time));
  }
});
client.on("ready", async () => {
  //Status of your bot; also you can change "idle" with: 'dnd', "online"
   client.user.setPresence({
      status: "idle",
    });
  console.log(`${client.user.username} ready!`);
});

client.login(process.env.TOKEN);
