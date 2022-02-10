module.exports = {
  name: '!response',
  description: 'Ping!',
  execute(msg, args) {

    console.log('entered block')
   
    const Discord = require('discord.js');
    const client = new Discord.Client();
    const { MessageActionRow, MessageSelectMenu } = require('discord.js');

  

    client.on('interactionCreate', async interaction => {
      if (!interaction.isCommand()) return;
    
      if (interaction.commandName === 'aword') {
        console.log('said aword')
        const row = new MessageActionRow()
          .addComponents(
            new MessageSelectMenu()
              .setCustomId('select')
              .setPlaceholder('Nothing selected')
              .setMinValues(2)
              .setMaxValues(3)
              .addOptions([
                {
                  label: 'Select me',
                  description: 'This is a description',
                  value: 'first_option',
                },
                {
                  label: 'You can select me too',
                  description: 'This is also a description',
                  value: 'second_option',
                },
                {
                  label: 'I am also an option',
                  description: 'This is a description as well',
                  value: 'third_option',
                },
              ]),
          );
    
        await interaction.reply({ content: 'Pong!', components: [row] });
      }
    });

}
};

