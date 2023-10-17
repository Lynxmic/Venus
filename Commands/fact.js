const rf = require('random-facts');

exports.run = (client, msg, args) => {
     
    msg.channel.send({embed: {
        color: 0x00ff00,
        title: `:dolphin: Alright, here's your fun fact`,
        description: rf.randomFact(),
        }
    });
    console.log(`Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
    };
  config: {}
