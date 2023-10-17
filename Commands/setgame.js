exports.run = (client, msg, args) => {

    let game = args.join(" ")

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
        client.user.setActivity(`${game}`)
        msg.channel.send({embed: {
            color: 0x00ff00,
            title: `:white_check_mark: Success!`,
            description: `Changed game status to **${game}**`,
            }
        });
    }

config: {}
