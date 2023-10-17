const Discord = require("discord.js");
const config = require("../Configuration/auth.json");

exports.run = (client, msg, args) => {

client.config = config;

   let maintainers = ["", "", ""]; 
     if(!maintainers.includes(msg.author.id)) return msg.channel.send({embed: {
        color: 0xff0000,
        title: `:x: Error!`,
        description: `You don't have permission to use this command!`,
        footer: {
            text: `To use this command, you need to be "Bot Developer".`
              }
    }
});
        client.user.setActivity("Type " + config.prefix + "help | " + config.version, { type: 'STREAMING', url: `https://twitch.tv/twitch` })
        msg.channel.send({embed: {
            color: 0x00ff00,
            title: `:white_check_mark: Success!`,
            description: `Reset game status`,
            }
        });
    }

config: {}