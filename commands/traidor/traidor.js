const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('traicao')
		.setDescription('O que acontece com os traidores?'),
	async execute(interaction) {
		await interaction.reply('Todos morrem a facadas ou vão para a fazenda.');
	},
};