const Discord = require('discord.js');
const bot = new Discord.Client();
const ffmpeg = require('ffmpeg');

bot.setMaxListeners(0);

const user = ['205388894445764608', '141145760010993664', '201136286851923968', '792124901283725333'];

bot.on('voiceStateUpdate', async (oldState, newState) => {
	const victim = newState.member.user.id;
	try {
		if (oldState == newState) return;
		if (newState.member.user.bot) return;
		if (!user.find(id => id === victim)) return;
		await oldState?.channel.leave();
		const connection = await newState?.channel.join();
		await connection.play('./sound.mp3');
	} catch (error) {
		console.log(error);
		//console.log('Oops this is fast!');
	}
});

bot.login();
