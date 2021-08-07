 const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setTitle(`**Hydra Music  Commands**`)
    .setThumbnail("https://media.discordapp.net/attachments/836335449504612423/866284679652442162/image0.gif")
    .setColor("RANDOM")
   .setAuthor("Prefix [ $ ]","")
    .setDescription(` 
\ help
List of all commands
• ────── emoji_102 ────── •
☢◢User Commands
+invite - +ping 
+stats - +support
+hosting - +docs
+howtohost - +djs

• ────── RAES ────── •
☢◢Music Commands
+addprevious - +addsimilar 
+autoplay - +join
+jump - +loob 
+loobqueue - +lyrics
+move - +moveme 
+nowplaying - +pause
+play(p) - +playlist
+playsc - +play skip 
+queue - +radio
+search - +shuffle 
+stop - +volume 
────── Sixo ────── •
+8ball - +delete
+fact - +joke
+kiss - +meme
+rip - +shit
+say - +purge
• ────── RAES ────── •
+addbotchat - +adddj
+prefix - +removebotchat 
+reset - settings - +setup 
+toggledjoinly - +toggleplaymssnge

• ────── emoji_97 ────── •
☢◢Moderator Commands
+avatar - +botinfo - +help
+invite - +ping - +reactions
+serverinfo - +stats - +userinfo 
+uptime - +ban - +kick 
+embed - +slawmode
+unmute - +mute
+unwarn - +warn - +warnings 

• ────── FILTER────── •
☢◢Owner Commands
+bassboost - +cleareq 
+clearfilter - +equalizer 
• ────── emoji_107 ────── •
☢◢Links
Invite ("")    Support ("")
`)
    
    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);


};
