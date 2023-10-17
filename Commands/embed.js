const Discord = require("discord.js");

exports.run = (client, msg, args) => {
   if(!msg.member.roles.some(r=>["Staff"].includes(r.name)) )
    return  msg.channel.send({embed: {
        color: 0xff0000,
        title: `:x: Error!`,
        description: `You don't have permission to use this command!`,
        footer: {
            text: `To use this command, you need to be "Staff".`
              }
    }
});
    let text = args.join(" ");
    msg.delete(),
msg.channel.send({embed: {
    color: 0xDCA741,
    author: {
        name: msg.author.username,
        icon_url: msg.author.avatarURL
      },
description: text,
    }
});
console.log(`Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
};
config: {}