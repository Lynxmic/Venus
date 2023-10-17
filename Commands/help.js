const Discord = require("discord.js");
const config = require("../Configuration/auth.json");

exports.run = (client, msg, args) => {
    client.config = config;

let embed = new Discord.RichEmbed()
       
.setAuthor(client.user.username, client.user.avatarURL)
.setColor("#DCA741")
.setDescription("Here you can see the commands for " + client.user.username + "! \nThe bot uses `" + config.prefix + "` as a command prefix \n[] = Optional arguments, <> = Required arguments")
.addField(`:information_source: Informational Commands`, "```help \nping \nstats \ninfo \nuptime \ninvite```")
.addField(`:game_die: Fun Commands`, "```8ball <question> \nrps \nroll \nflipcoin \ncat \ndog \nfact \ncowsay <something to say>```")
.addField(`:tools: Moderation Commands`, "```embed <something to say> \nnuke <amount of message>```")
.addField(`:grey_question: Misc Commands`, "```weather <location> \nsay <something to say> \navatar [user mention] \nprofile [user mention] \nserverinfo \nbug <bug report> \nfeature <feature>```")

msg.author.send(embed);
msg.channel.send({embed: {
        color: 0xDCA741,
        title: `Check DMs :mailbox:`,
        }
    });
}
config: {}

