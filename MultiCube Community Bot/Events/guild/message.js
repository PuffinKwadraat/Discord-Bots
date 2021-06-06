require('dotenv').config();
module.exports = (Discord, client, message) => {
//Core
    const prefix = process.env.PREFIX;

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

//Aliases
    const command = client.commands.get(cmd) ||
                    client.commands.find(a => a.aliases && a.aliases.includes(cmd));

//Perms
    const validPermissions = [
        "CREATE_INSTANT_INVITE",
        "KICK_MEMBERS",
        "BAN_MEMBERS",
        "ADMINISTRATOR",
        "MANAGE_CHANNELS",
        "MANAGE_GUILD",
        "ADD_REACTIONS",
        "VIEW_AUDIT_LOG",
        "PRIORITY_SPEAKER",
        "STREAM",
        "VIEW_CHANNEL",
        "SEND_MESSAGES",
        "SEND_TTS_MESSAGES",
        "MANAGE_MESSAGES",
        "EMBED_LINKS",
        "ATTACH_FILES",
        "READ_MESSAGE_HISTORY",
        "MENTION_EVERYONE",
        "USE_EXTERNAL_EMOJIS",
        "VIEW_GUILD_INSIGHTS",
        "CONNECT",
        "SPEAK",
        "MUTE_MEMBERS",
        "DEAFEN_MEMBERS",
        "MOVE_MEMBERS",
        "USE_VAD",
        "CHANGE_NICKNAME",
        "MANAGE_NICKNAMES",
        "MANAGE_ROLES",
        "MANAGE_WEBHOOKS",
        "MANAGE_EMOJIS",
    ]

    if(!command) return;      
    if(command.hasOwnProperty('permissions')){
      let invalidPerms = []
      for(const perm of command.permissions){
          if(!validPermissions.includes(perm)){
              return console.log(`Missing permissions! ${perm}`);
              }
          if(!message.member.hasPermission(perm)){
            invalidPerms.push(perm);
              }
            }
        if (invalidPerms.length){
          return message.channel.send(`To perform this command, you need these permissions: \`${invalidPerms}\``);
            }
          }

//Error Checking
    try {
        command.execute(message, args, cmd, client, Discord);
    } catch (err){
        message.reply("There was an error trying to execute the specified command! Check the console to see what is wrong.");
        console.log(err);
    }
}