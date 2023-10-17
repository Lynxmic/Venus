const Discord = require("discord.js");
const weather = require("weather-js");

exports.run = (client, msg, args) => {

    weather.find({search: args.join(" "), degreeType: "C"}, function(err, result) {
      if (err) msg.channel.send(err);

      if (result.length === 0) {
          msg.channel.send({embed: {
            color: 0xff0000,
            title: `:x: Error!`,
            description: `Invalid location! Please enter a valid location!`,
            }
        });
        return;
        
      }

      var current = result[0].current;
      var location = result[0].location;

msg.channel.send({embed: {
    color: 0xDCA741,
    title: `:white_sun_small_cloud: ${current.observationpoint} | ${current.temperature}°${location.degreetype}`,
    description: `Feels like  ${current.feelslike}°${location.degreetype}`,
    thumbnail: {
        url: current.imageUrl
         },
      fields: [{
        name: ":black_circle: Currently",
        value: `${current.skytext}`,
        inline: true
      },
      {
        name: ":droplet: Humidity",
        value: `${current.humidity}%`,
        inline: true
      },
      {
        name: ":clock3: Timezone",
        value: `GMT${location.timezone}`,
        inline: true
      },
      {
        name: ":wind_chime: Winds",
        value: `${current.winddisplay}`,
        inline: true
      },
    ],
    footer: {
      icon_url: "http://logok.org/wp-content/uploads/2014/07/MSN-logo-butterfly-880x660.png",
      text: `Powered by MSN Weather`
        }
    }
});

    });
console.log(`Treating ${msg.content} by ${msg.author.tag} from ${msg.guild} as a command.`);
};
config: {}