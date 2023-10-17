exports.run = (client, msg, args) => {

msg.channel.send({embed: {
    color: 0xDCA741,
    title: `:wave: Hi!`,
    }
});
console.log(`Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
};
config: {}