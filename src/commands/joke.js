const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports = {
  name: "quote",
  description: "Replies with a random quote",
  async execute(interaction) {
    try {
      // Send a "thinking" response while we fetch the quote
      await interaction.deferReply();

      // Fetch a random quote from the Quotable API
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();

      if (data.content && data.author) {
        // Format the quote
        const quote = `"${data.content}"\n\n- ${data.author}`;

        // Create an embed for the quote
        const quoteEmbed = {
          color: 0x0099ff,
          title: 'Random Quote',
          description: quote,
          footer: {
            text: 'Powered by Quotable API',
          },
        };

        // Reply with the quote embed
        await interaction.editReply({ embeds: [quoteEmbed] });
      } else {
        await interaction.editReply('Sorry, I couldn\'t fetch a quote at the moment. Please try again later.');
      }
    } catch (error) {
      console.error('Error fetching quote:', error);
      await interaction.editReply('An error occurred while fetching the quote. Please try again later.');
    }
  },
};