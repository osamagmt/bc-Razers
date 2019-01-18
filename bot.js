const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "-";


client.on("message", async message => {
    var command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
        if(!message.channel.guild) return;
            var args = message.content.split(" ").slice(1).join(" ");
            if(command == "bc") {
                if(!message.member.hasPermission("ADMINISTRATOR")) {
                    return message.channel.send("**للأسف لا تمتلك صلاحية `ADMINISTRATOR`**");
                }
                    if(!args) {
                        return message.reply("**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**");
                    }
                        message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟\nمحتوى البرودكاست: \`${args}\`**`).then(m => {
                            m.react("✅")
                            .then(() => m.react("❌"));

                            let yesFilter = (reaction, user) => reaction.emoji.name == "✅" && user.id == message.author.id;
                            let noFiler = (reaction, user) => reaction.emoji.name == "❌" && user.id == message.author.id;

                            let yes = m.createReactionCollector(yesFilter);
                            let no = m.createReactionCollector(noFiler);

                            yes.on("collect", v => {
                                m.delete();
                                    message.channel.send(`:ballot_box_with_check: | Done ... The Broadcast Message Has Been Sent For ${message.guild.memberCount} Members`).then(msg => msg.delete(5000));
                                        message.guild.members.forEach(member => {
                                            let bc = new Discord.RichEmbed()
                                            .setColor("RANDOM")
                                            .setThumbnail(message.author.avatarURL)
                                            .setTitle("Broadcast")
                                            .addField("Server", message.guild.name)
                                            .addField("Sender", message.author.username)
                                            .addField("Message", args);

                                            member.sendEmbed(bc);
                                        });
                        });
                        no.on("collect", v => {
                            m.delete();
                            message.channel.send("**Broadcast Canceled.**").then(msg => msg.delete(3000));
                        });
                            
                        });
            }
            if(command == "bco") {
                if(!message.member.hasPermission("ADMINISTRATOR")) {
                    return message.channel.send("**للأسف لا تمتلك صلاحية `ADMINISTRATOR`**");
                }
                    if(!args) {
                        return message.reply("**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**");
                    }
                        message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟\nمحتوى البرودكاست: \`${args}\`**`).then(m => {
                            m.react("✅")
                            .then(() => m.react("❌"));

                            let yesFilter = (reaction, user) => reaction.emoji.name == "✅" && user.id == message.author.id;
                            let noFiler = (reaction, user) => reaction.emoji.name == "❌" && user.id == message.author.id;

                            let yes = m.createReactionCollector(yesFilter);
                            let no = m.createReactionCollector(noFiler);

                            yes.on("collect", v => {
                                m.delete();
                                    message.channel.send(`:ballot_box_with_check: | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.filter(r => r.presence.status !== "offline").size} Members`).then(msg => msg.delete(5000));
                                        message.guild.members.filter(r => r.presence.status !== "offline").forEach(member => {
                                            let bco = new Discord.RichEmbed()
                                            .setColor("RANDOM")
                                            .setThumbnail(message.author.avatarURL)
                                            .setTitle("Broadcast")
                                            .addField("Server", message.guild.name)
                                            .addField("Sender", message.author.username)
                                            .addField("Message", args);

                                            member.sendEmbed(bco);
                                        });
                        });
                        no.on("collect", v => {
                            m.delete();
                            message.channel.send("**Broadcast Canceled.**").then(msg => msg.delete(3000));
                        });
                            
                        });
            }
});

// ========================================== [ OTHER COMMANDS ] ====================================



client.on("message", async message => {
    if(message.content.startsWith(prefix + "help")) {
        let help = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail(message.author.avatarURL)
            .setDescription(`**__برودكاست بوت | Version 1.1__ 

            برودكاست عادي : ${prefix}bc
            برودكاست للأونلاين فقط : ${prefix}bco
            **`);
            message.channel.sendEmbed(help); 
    }
});
const adminprefix = "-";
const developers = ["495279843047374863" , "474200581163057153"];


 client.on('message', message => {                 
                      if (!message.content.startsWith(adminprefix)) return;
                      var args = message.content.split(' ').slice(1);
                      var argresult = args.join(' ');
      if (!developers.includes(message.author.id)) return;
                    if (message.content.startsWith(adminprefix + 'ply')) {
      if (!developers.includes(message.author.id)) return;
                    client.user.setGame(argresult);
                        message.channel.sendMessage(`**${argresult}** : تم تغيير الحالة`)
                    } else
                    
                     
                    if (message.content.startsWith(adminprefix + 'st')) {
      if (!developers.includes(message.author.id)) return;
                    client.user.setGame(argresult, "http://twitch.tv/SMILE");
                        message.channel.sendMessage(`**${argresult}** :تم تغيير الحالة الى ستريمنج`)
                    } else
                    
                    if (message.content.startsWith(adminprefix + 'setname')) {
      if (!developers.includes(message.author.id)) return;
                      client.user.setUsername(argresult).then
                          message.channel.sendMessage(`**${argresult}** : تم تغير الأسم`)
                      return message.reply("**لا تستطيع تغير الأسم الا بعد ساعتين**");
                    } else
if (message.content.startsWith(adminprefix + 'setavatar')) {
      if (!developers.includes(message.author.id)) return;
                    client.user.setAvatar(argresult);
                        message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
                    } else
                    
                    
                    if (message.content.startsWith(adminprefix + 'wt')) {
      if (!developers.includes(message.author.id)) return;
                        client.user.setActivity(argresult, {type : 'watching'});
                     message.channel.sendMessage(`**${argresult}** : تم تغيير الووتشينق الى`)
                    }
                     });



client.on("error", function(err) {
 return console.log(err);
});

client.login(process.env.BOT_TOKEN);
