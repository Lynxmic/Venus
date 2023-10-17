exports.run = async (client, msg, args) => {
    let bug = args.join(" ");
    const review = await client.channels.find('id', '').send({embed: {
            color: 0xDCA741,
            title: ":bug: Bug report",
            description: bug,
            footer: {
                icon_url: msg.author.avatarURL,
                text: `Sent by ${msg.author.tag}`
            }
        }
    });
    review.react(`✅`);
    review.react(`❌`);
    msg.channel.send({embed: {
        color: 0x00ff00,
       title: ":white_check_mark: Success!",
       description: "Your bug report has been sent to the support server.",
        }
    });
    console.log(`Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
};
config: {}