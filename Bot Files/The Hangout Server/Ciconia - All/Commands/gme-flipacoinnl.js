// Kop of munt

const config = require("../other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
  name: "kopofmunt",
  aliases: config.aliases.aliasesflipacoinnl,
  cooldown: config.cooldown.cooldownflipacoinnl,
  permissions: config.permissions.permissionflipacoinnl,
  description: "Kop of munt!",
  async execute(message, args, cmd, client, Discord) {
    try {
      if (!args[0]) {
        return message.channel.send("Please also choose your winning side.");
      }
      const list = ["kop", "munt"];
      const fac = [`Kop!`, `Munt!`];
      const random = fac[Math.floor(Math.random() * fac.length)];

      if (!list.includes(args[0].toLowerCase())) {
        return message.channel.send(`\`${args[0]}\` is geen geldige parameter.`);
      }
      message.channel.send(random);

      var lowerrandom = random.toLowerCase();

      if (lowerrandom.substring(0, 4) == args[0]) {
        console.log(`I chose ${random}.`);
        return message.channel.send("Je hebt gewonnen! - 🟢");
      } else if (lowerrandom.substring(0, 4) != args[0]) {
        console.log(`I chose ${random}.`);
        return message.channel.send(`Je hebt verloren! - 🔴`);
      }
    } catch (err) {
      console.log(err)
      message.channel.send(`Error executing command. EC: \`${config.errorcodes.err16}\`.`)
    }
  },
};
