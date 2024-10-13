module.exports = {
    name: "help",
    description: "Replies with help message",
    execute(interaction) {
      interaction.reply(
        `Dobby is always present in service of master! \n all the commands are listed with required description.`
      );
    },
  };