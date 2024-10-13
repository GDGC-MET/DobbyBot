module.exports = {
    name: "info",
    description: "Replies with basic bot information",
    execute(interaction) {
      interaction.reply(
        `Hi, This bot was created by user : an5hul .\nThis is a fun experimental bot, and may be risky at times if not used wisely !`
      );
    },
  };
  