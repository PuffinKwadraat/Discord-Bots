const config = require("../Other/config.js");

module.exports = {
  name: "testbigannouncements",
  aliases: config.aliases.aliasestestabannouncements,
  cooldown: config.cooldown.cooldowntestannouncements,
  permissions: config.permissions.permissiontestannouncements,
  description: "Test announce something using the bot.",
  async execute(message, args, cmd, client, Discord) {
    const channel = client.channels.cache.find(channel => channel.id === config.base.basebottestingthreechannelid)
    const messageArgs = args.join(' ');

    const newEmbed = new Discord.MessageEmbed()
      .setColor(config.base.basecolor)
      .setTitle("New Announcement")
      .setImage(config.embed.embedimage)
      .addFields(
        {
          name: `**---**`,
          value: `${messageArgs}`,
        })
      .setFooter(config.embed.embedfooter)
    channel.send(newEmbed).then((msg) => {
        message.channel.send(`Test Announcement sent in <#${config.base.basebottestingthreechannelid}>.`)
    });
  },
};