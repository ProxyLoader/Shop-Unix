const express = require('express')
const app = express();
const port = 3000
app.get('/', (req, res) => res.send('Unix - Giveaway'))

app.listen(port, () =>
console.log('Connected')
           
);


const Discord = require('discord.js');
const client = new Discord.Client();

const { MessageEmbed } = require("discord.js");
let prefix = "-" // this can be any prefix you want
const embedTitle = "Unix - Shop"

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
  client.user.setActivity("⚡｜" + prefix + "help");
});

client.on("message", async message => {
    const args = message.content.trim().split(/ +/);
  
  if(message.content.startsWith(prefix + "shop")){
    const stock = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle(embedTitle + " | Explain")
    .setDescription("**Welcome to stock page here you can see what we sell**")
    .addField("🤖 AntiBot (Protection)", "**Make your sever secure by adding this bot, that bot will help you to block bad messages (working with id)**")
    .addField("🌌 System - Bot", "**Contains moderation command  such as (eg, ban)**")
    .addField("💡 Suggestion - Bot", "**Make your members suggest**")
    .addField("🎉Giveaways - Bot", "**Too start doing giveaways**")
    .addField("🧀 Say-Bot", "**Simple bot**")
    .addField("💬 Chilling-Bot" , "**Make your members start chilling with robot**")
      .addField("💳 Tax-Bot", "**Will calculate to you the tax of probot**")
      .addField("Auto-Roles", "**When a members join the bot will give them automaticly an role**")
      .addField("AntiSPAM", "**Full limited block detect every spam**")
      
      .addField("Next" , "**To go to commands page react with ✨**")
    .setFooter("ByteBuf#3270")
    message.channel.send(stock).then(msg =>{
      msg.react("✨")

      let nextFilter = (reaction, user) =>
      reaction.emoji.name == "✨" && user.id == message.author.id;
      let next = msg.createReactionCollector(nextFilter)

      next.on("collect", v =>{
        const commands = new MessageEmbed()
        .setTitle(embedTitle + " | Commands")
        .setColor("RANDOM")
        .setDescription("**Welcome to commands page see bots commands**")
        .addField("AntiBot (Protection)", "**{prefix}start && stop**")
        .addField("System - Bot", "**A loot of commands use .help**")
        .addField("Suggestion - Bot", "**{prefix}suggest**")
        .addField("Giveaways - Bot", "**{prefix}giveaway [time] [winners] [#channel] [prize]**")
        .addField("Say - Bot", "**{prefix}say [message]**")
        .addField("Chilling - Bot", "**No command provided! specify a channel**")
        .addField("Auto-Roles", "**No command provided! give id of role**")
          .addField("Tax-Bot", "**{prefix}wa <number> || {prefix}tax <number>**")
          .addField("Anti-Spam", "**{prefix}spam**")
          
        .addField("Next", "**To go to price page react with 💫**")
        msg.edit(commands).then(m =>{
          m.react("💫")
          let priceFilter = (reaction, user) =>
            reaction.emoji.name == "💫" && user.id == message.author.id;
          let priceR = m.createReactionCollector(priceFilter)

          priceR.on("collect", v =>{
            const price = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(embedTitle + " | Price")
            .setDescription("**Welcome to last page, price page**")
            .addField("AntiBot (Protection)", "**5264**")
            .addField("System - Bot", "**6316**")
            .addField("Suggestion - Bot", "**5264**")
            .addField("Giveaway - Bot", "**5264**")
            .addField("Say - Bot" , "**527**")
            .addField("Chilling - Bot", "**5264**")
            .addField("Auto-Roles", "**1053**")
            .addField("Tax-Bot", "**6316**")
            .addField("Anti-Spam", "**6316**")
            .addField("Coin ?", "**Using probot credits!**")
            .setFooter("©️ All rights reserved!")
            m.edit(price)
          })
        })
      })
      
    })
  } else if(message.content.startsWith(prefix + "request")){
    let requestName = args.slice(1).join(" ")

    if(!requestName) return message.reply("Usage " + prefix + "request {BOT_NAME}").then(m => {


            setTimeout(function(){
        m.delete()
        message.delete()
}, 1500);
      
    })

    const requestEmbed = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle(embedTitle)
    .setDescription("We recived a bot request from: **" + message.author.username + "** see details!")
    .addField("RequestType",  "**" + requestName + "**")
    .addField("Details!", "**You can accept or reject or warn by react with reaction below!**")
    .setFooter("ByteBuf#3270")
    
    client.channels.cache.get("995711033777852447").send(requestEmbed).then(r =>{
      r.react("✅")
      r.react("❌")

      let yesFilter = (reaction, user) =>
        reaction.emoji.name == "✅" && user.id == "957710600811708526"
              let yes = r.createReactionCollector(yesFilter)
      let noFilter = (reaction, user) =>
        reaction.emoji.name == "❌" && user.id == "957710600811708526"
      let no = r.createReactionCollector(noFilter)
      
      yes.on("collect", m =>{
            setTimeout(function(){
              r.delete()
}, 1500); 
        const acceptedEmbed = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription("✅ | **" + message.author.username + " request accepted for building: " +  requestName + " by: @ByteBuf#3270**")
         r.edit(acceptedEmbed)
        const acceptedRequest = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription("**Your request was accepted for building: " + requestName+ " contact @ByteBuf#3270**")
        message.author.send(acceptedRequest)
        const authorId = message.author.id
        client.channels.cache.get("987314644458827826").send(":white_check_mark: | <@" + authorId + "> **Your request for building: " + requestName + " was accepted contact <@957710600811708526>**")        
      })

      no.on("collect", o =>{
        const rejectEmbed = new MessageEmbed()
        .setColor("RANDOM")
        .setDescription("❌ | **" + message.author.username + " request rejected for building: " +  requestName + "**")
        r.edit(rejectEmbed)

                const authorId = message.author.id
        
                client.channels.cache.get("987314644458827826").send(":x: | <@" + authorId + "> **Your request ejected! for building**: " + requestName);
        message.author.send(":x: | **Your request rejected for " + requestName + "**")
    

            setTimeout(function(){
              r.delete()
              
}, 1500); 


      });

      
    })
    
    message.channel.send(":white_check_mark: | Your request was sented to developers! make sure you open direct messages").then(m =>{
      setTimeout(function(){
        m.delete()
        message.delete()
}, 1500);
    })
    
  } else if(message.content.startsWith(prefix + "help")){
    const helpCommand = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle(embedTitle)
    .setDescription("**" + prefix + "shop - to explain to you the bots and price \n" + prefix + "request - to send a request for bot**")

    message.channel.send(helpCommand)
  }
  
});

client.login(process.env.TOKEN);
