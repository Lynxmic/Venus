exports.run = (client, msg, args) => {

msg.channel.send(`Please wait until we check the bot's latency...`).then(function(m) {
        m.edit({embed: {
            color: 0xDCA741,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            description: `:ping_pong: Pong!`,
            footer: {
              text: `This took me ${m.createdTimestamp - msg.createdTimestamp}ms | Heartbeat: ${Math.round(client.ping)}ms`
                }
            }
        });
    console.log(`Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
    })
};
  config: {}
