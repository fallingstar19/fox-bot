const Discord = require('discord.js');

const config = require("./config.json")

const bot = new Discord.Client();

const prefix = 'n!';

const fs = require('fs');

var commandsList = fs.readFileSync('./commands.txt', 'utf8');


const fortunes = [
  ':8ball: | Yes',
  ':8ball: | No',
  ':8ball: | Maybe',
  ':8ball: | Perhaps, perhaps not',
  ':8ball: | Improbable',
  ':8ball: | Anything worth doing always starts as a bad idea',
  ':8ball: | Hard to say',
  ':8ball: | Obviously not',
  ':8ball: | Of course you will',
];

bot.on('ready', () => {
  bot.user.setPresence({game: {name: 'n!help', type: 0}});
});

bot.on('message', (message) => {
  if (message.author.equals(bot.user)) return;
  if (!message.content.startsWith(prefix)) return;
  const args = message.content.substring(prefix.length).split(' ');
  switch (args[0].toLowerCase()) {
    case 'impossible':
      message.channel.sendMessage('I believe you meant *improbable*');
      break;
    case 'advice':
      message.channel.sendMessage("I hope you weren't looking to me to be the voice of reason. I keep to a strict diet of ill-advised enthusiasm and heartfelt regret.");
      break;
    case 'name':
      message.channel.sendMessage('Nikolai. But I’ve also been known to answer to ‘sweetheart’ or ‘handsome’.');
      break;
    case '8ball':
      if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
      else message.channel.sendMessage("Can't read nonsense");
      break;
    case 'help':
      message.channel.send(commandsList);
      break;
    case 'delicacy':
      message.channel.sendMessage(':cookie: | but ***you*** are the true delicacy');
      break;
   
  }
});
bot.login(config.token);

