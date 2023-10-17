const Discord = require("discord.js");
const config = require("../Configuration/auth.json");

exports.run = (client, msg, args) => {
  client.config = config;

    msg.channel.send({embed: {
        color: 0xDCA741,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        fields: [
          {
            name: ":link: Links",
            value: "[Support Server]() \n[Twitter]() \n[GitHub Repository]()",
            inline: true
          },
          {
            name: ":repeat: Versions",
            value: `**Venus:** ${config.version} \n**Discord.js:** v${Discord.version} \n**Node.js:** ${process.version}`,
            inline: true
          },
          {
            name: ":busts_in_silhouette: Developers",
            value: "",
           inline: true
          },
        ],
        footer: {
          text: `Serving ${client.guilds.size} servers with ${client.users.size} users.`
            }
        }
    });
    console.log(`Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
    };
  config: {}
