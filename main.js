const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = "-";

client.once("ready", () => {
  console.log("Yash is online!");
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);

  const command = args.shift().toLowerCase();

  if (command === "ping") {
    message.channel.send("pong!");
  } else if (command == "youtublue") {
    message.channel.send(
      "https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw"
    );
  } else if (command == "ismart") {
    message.channel.send(
      "Yash is smarter.Yash is smarter.Yash is smarter.Yash is smarter.Yash is smarter.Yash is smarter.Yash is smarter.Yash is smarter.Yash is smarter.Yash is smarter.Yash is smarter."
    );
  } else if (command == "saybye") {
    message.channel.send("Ok,bye. Dank Memer Fuckin sucks!");
  }
});

client.login("NzU2NDI5Nzc2ODk3NTcyODg0.X2RuIA.dc7dtgLkK2rGjFiny2FAl2osgOw");
