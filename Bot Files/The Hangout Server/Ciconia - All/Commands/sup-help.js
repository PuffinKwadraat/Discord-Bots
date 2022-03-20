// Laat allerlei thema's zien waar je op kan stemmen zodat hij je informatie geeft.
// Moet herschreven worden ivm inefficientie.
// Ik vind dit stem systeem minder 'goed'. Args is beter.

const config = require("../Other/config.js"); // Vaste variabelen opgeslagen

module.exports = {
  name: "help",
  aliases: config.aliases.aliaseshelp,
  cooldown: config.cooldown.cooldownhelp,
  permissions: config.permissions.permissionhelp,
  description: "Advanced Help - Stage 1",
  async execute(message, args, cmd, client, Discord) {
    try {
      const command =
        client.commands.get(cmd) ||
        client.commands.find((a) => a.aliases && a.aliases.includes(cmd));
      console.log(`${message.author.username} used this command: || ${command.name} ||`) // Log wanneer iemand deze cmd gebruikt.
      const channel = "848939517603479553";
      const ApplyEmoji = "🔴";
      const RanksRolesEmoji = "🟠";
      const GitHubEmoji = "🟡";
      const AboutEmoji = "🟢";
      const BotEmoji = "🔵";
      const ServersEmoji = "🟣";
      const RulesEmoji = "🟤";
      const StatsEmoji = "⚫";
      const EventsEmoji = "⚪";

      async function execute(file, args) {
        const f = require(file)
        if (!f) throw new Error("Invalid file name.")
        return f.execute(args)
      }

      let embed = new Discord.MessageEmbed()
        .setColor(config.base.basecolor)
        .setTitle(config.embeds.titlehelp)
        .setImage(config.embed.embedimage)
        .setFooter(config.embed.embedfooter)
        .setDescription(
          `${config.embeds.descriptionhelp}\n\n` +
          `${ApplyEmoji} - For information about becoming a staff member.\n` +
          `${RanksRolesEmoji} - For information about our roles and ranks on our Discord and Minecraft servers.\n` +
          `${GitHubEmoji} - For support with how to read things that are GitHub exlusive (updates etc.), or how to become a GitHub Collaborator.\n` +
          `${AboutEmoji} - For general information about stuff.\n` +
          `${BotEmoji} - For information about this bot you are talking to right now!\n` +
          `${ServersEmoji} - For information about our servers we have, and how to join them.\n` +
          `${RulesEmoji} - For a list of rules.\n` +
          `${StatsEmoji} - For stats about servers we run (Minecraft or Discord).\n` +
          `${EventsEmoji} - For information about Events, and about how to join them.`
        );

      let messageEmbed = await message.channel.send(embed);
      messageEmbed.react(ApplyEmoji);
      messageEmbed.react(RanksRolesEmoji);
      messageEmbed.react(GitHubEmoji);
      messageEmbed.react(AboutEmoji);
      messageEmbed.react(BotEmoji);
      messageEmbed.react(ServersEmoji);
      messageEmbed.react(RulesEmoji);
      messageEmbed.react(StatsEmoji);
      messageEmbed.react(EventsEmoji);

      client.on("messageReactionAdd", async (reaction, user) => {
        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();
        if (user.bot) return;
        if (!reaction.message.guild) return;

        if (reaction.message.channel.id == channel) {
          if (reaction.emoji.name === ApplyTeamEmoji) {
            message.channel.send("Test")
          }
        } else {
          return;
        }
      });
    } catch (err) {
      console.log(err)
      message.channel.send(`Error executing command. EC: \`${config.errorcodes.err3}\`.`)
    }
  },
};