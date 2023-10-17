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
     async function purge() {
     msg.delete();
     
     if (isNaN(args[0])) {

msg.channel.send({embed: {
    color: 0xff0000,
    title: `:no_entry: Invalid argument!`,
    description: "Usage: `v.nuke <amount of messages to delete>`"
    }
});
return;
}

     const fetched = await msg.channel.fetchMessages({limit: args[0]});

     msg.channel.bulkDelete(fetched)
        .catch(error => msg.channel.send({embed: {
            color: 0xff0000,
            title: `:x: Error!`,
            description: error
            }
        })
        )

        msg.channel.send({embed: {
            color: 0x00ff00,
            title: `:white_check_mark: Success!`,
            description: "Purged " + fetched.size + " messages!"
            }
        });
     }

     purge();

        console.log(`Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
        };
      config: {}