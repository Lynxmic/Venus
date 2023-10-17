const Discord = require("discord.js");

exports.run = (client, msg, args) => {

    msg.channel.send({embed: {
        color: 0xDCA741,
        description: `:link: **[Click to invite me](https://discordapp.com/oauth2/authorize?&client_id=${client.user.id}&scope=bot&permissions=8)** \n \n:grey_question: [Support Server]() (for help)`,
        }
    });
    console.log(`Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
    };
  config: {}