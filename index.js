const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.once('ready', () => {
	console.log('Ready!');
});

const { prefix } = config;

client.on('message', message => {
	if (message.content === prefix + 'ping') {
		message.channel.send('Pong.');
	} else if (message.content === prefix + 'beep') {
		message.channel.send('Boop.');
	} else if (message.content === prefix + 'server') {
		message.channel.send('Guild name: ' + message.guild.name + '\nTotal members: ' + message.guild.memberCount);
	} else if (message.content === prefix + 'user-info') {
		message.channel.send('Your username: ' + message.author.username + '\nYour ID: ' + message.author.id);
	}
	if (message.content === '/help') {
		message.channel.send
		(':warning: sorry we are working in commands :warning: .');
	}
     
if (message.content === 'سلام عليكم') {
	message.channel.send('وعليكم السلام');
}
});
client.login(config.token);