const Discord = require("discord.js");
var cowsay = require("cowsay");

exports.run = (client, msg, args) => {

    let text = args.join(" ");

    msg.channel.send("```" + cowsay.say({
        text : text
    }) + "```")
    console.log(`Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
}
  config: {}