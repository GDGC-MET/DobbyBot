require("dotenv").config();

const { Client, IntentsBitField, ActivityType } = require("discord.js");

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
// on hone ke baad , console log krega, sirf console(to the terminal)
client.on("ready", (c) => {
  console.log(`✅ ${c.user.tag} is online.`);

  //Bot's activity status
  client.user.setActivity({
    name: "Quidditch",
    type: ActivityType.Competing,
  });
});

// bot won't trigger itself, return here just returns
client.on("messageCreate", (message) => {
  //if author is bot, reply nhi dega ye
  if (message.author.bot) {
    return;
  }

  if (message.content === "hello") {
    message.reply("hi");
  }

  if (message.content == "hi") {
    message.reply("hello");
  }

  if (message.content == "bye") {
    message.reply("Bye, CYA!");
  }
});

//interaction with slash commands

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "info") {
    interaction.reply(
      "Hi, This bot was created by user : an5hul .\nThis is a fun experimental bot, and may be risky at times if not used wisely !"
    );
  }

  if (interaction.commandName === "ping") {
    interaction.reply(
      `🍾Latency is ${
        Date.now() - interaction.createdTimestamp
      }ms. API Latency is ${Math.round(client.ws.ping)}ms`
    );
  }

  if (interaction.commandName === "help") {
    interaction.reply(
      "Dobby is always present in service of master! \n all the commands are listed with required description."
    );
  }

  if (interaction.commandName === "length") {
    let usrinpt = interaction.options.get("yourtext");

    let main_usrinpt = usrinpt.value;

    let lengthofstringnum = main_usrinpt.length;

    let lengthofstringstr = lengthofstringnum.toString();
    interaction.reply(
      "The length of text you entered was **" +
        lengthofstringstr +
        "** Characters."
    ); //return .length of the string recieved
  }
});

client.login(process.env.TOKEN);
//the .env file handles all the tokens flow in and out
