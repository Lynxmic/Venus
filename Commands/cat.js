exports.run = async (client, msg, args) => {

    const superagent = require("superagent");
    
    let {body} = await superagent
    .get('https://aws.random.cat/meow')

    msg.channel.send({embed: {
        color: 0xDCA741,
        title: `:cat: Meow...`,
        image: {
            url: body.file
        },
        footer: {
           text: `Generated by random.cat`
       }
    }
});
    console.log(`Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
}
  config: {}

