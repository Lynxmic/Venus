const Discord = require("discord.js");

exports.run = (client, msg, args) => {

responses = [
        "Tails",
        "Heads",
    ];

    const Discord = require("discord.js");

        msg.channel.send({embed: {
            color: 0xDCA741,
           title: ":moneybag: Flipping a coin...",
           description: "You flipped **" + (responses[Math.floor(Math.random() * responses.length)]) + "**",
            }
        });

        console.log(`Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
}
  config: {}
