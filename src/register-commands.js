require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType, ApplicationCommandType } = require('discord.js');


//commands !!
//This file must be executed once, to register the commands to the discord's server and portal, alongwith the servers the bot is in, whenever a change is made here, the file must be executed.
const commands = [
  {
    name: 'info',
    description: 'Replies with basic bot information',
  },
  {
    name: 'ping',
    description: 'Replies with current bot ping',
  },
  {
    name: 'help',
    description: 'Replies with help, Dobby can do',
  }, 
  {
    name: 'length', 
    description: 'Replies with the length of the text followed',
    options: [
      {
        name: 'yourtext',
        description: 'the text whose length you want to find out ',
        type: ApplicationCommandOptionType.String,
        required : true, 
      }
    ]
  }, 

];
// commands lie above here careful


const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Registering slash commands...');

    await rest.put(
      Routes.applicationCommands(
        process.env.CLIENT_ID,

      ),
      { body: commands }
    );

    console.log('Slash commands were registered successfully!');
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
})();

//to be addded commands -  search(using google search), flip a coin, minigames  like this