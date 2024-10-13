require("dotenv").config();
const { Client, IntentsBitField, Collection, ActivityType } = require("discord.js");
const fs = require("fs");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.GuildMessageReactions,
    IntentsBitField.Flags.GuildEmojisAndStickers,
  ],
});

// Create a collection to store commands
client.commands = new Collection();

// Load all command files
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

// Bot is ready
client.on("ready", (c) => {
  console.log(`✅ ${c.user.tag} is online.`);

  //Bot's activity status
  client.user.setActivity({
    name: "Quidditch",
    type: ActivityType.Competing,
  });
});

// Handle slash command interactions
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    interaction.reply({
      content: "There was an error executing that command!",
      ephemeral: true,
    });
  }
});

client.login(process.env.TOKEN);
//the .env file handles all the tokens flow in and out
