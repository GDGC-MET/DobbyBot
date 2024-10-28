const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports = {
  name: "joke",
  description: "Tells a random joke!",
  async execute(interaction) {
    try {
      // Send a "thinking" response while we fetch the joke
      await interaction.deferReply();

      // Fetch a random joke from the Official Joke API
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();

      // Format the joke
      const joke = `${data.setup}\n\n${data.punchline}`;

      // Reply with the joke
      await interaction.editReply(`Here's a joke for you:\n\n${joke}`);
    } catch (error) {
      console.error('Error fetching joke:', error);
      await interaction.editReply('Sorry, I couldn\'t think of a joke right now. Try again later!');
    }
  },
};
