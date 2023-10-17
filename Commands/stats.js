const Discord = require("discord.js");

exports.run = (client, msg, args) => {

    function format(seconds){
        function pad(s){
          return (s < 10 ? '0' : '') + s;
        }
        var hours = Math.floor(seconds / (60*60));
        var minutes = Math.floor(seconds % (60*60) / 60);
        var seconds = Math.floor(seconds % 60);
      
        return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
      }
      
      var uptime = process.uptime();

    msg.channel.send({embed: {
        color: 0xDCA741,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        fields: [{
            name: "Servers",
            value: `${client.guilds.size}`,
            inline: true
          },
          {
            name: "Users",
            value: `${client.users.size}`,
            inline: true
          },
          {
            name: "Channels",
            value: `${client.channels.size}`,
            inline: true
          },
          {
            name: "Shards",
            value: `1`,
            inline: true
          },
          {
            name: "Memory Usage",
            value: (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + `MB`,
            inline: true
          },
          {
            name: "Uptime",
            value: `${format(uptime)}`,
            inline: true
          },
        ],
        }
    });
    console.log(`Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
    };
  config: {}
