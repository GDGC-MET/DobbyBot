module.exports = {
    name: "length",
    description: "Replies with the length of the text followed",
    execute(interaction) {
    let usrinpt = interaction.options.get("yourtext");
    let main_usrinpt = usrinpt.value;
    let lengthofstringnum = main_usrinpt.length;
    let lengthofstringstr = lengthofstringnum.toString();

      interaction.reply(
        "The length of text you entered was **" +
        lengthofstringstr +
        "** Characters."
      );  //return .length of the string recieved
    },
  };