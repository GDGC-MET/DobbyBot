const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
  name: "quote",
  description: "Get an inspirational quote",
  async execute(interaction) {
    try {
      // Send a "thinking" response while we fetch the quote
      await interaction.deferReply();

      // Fetch a random quote from ZenQuotes API
      const response = await fetch('https://zenquotes.io/api/quotes');
      const quotes = await response.json();

      // Select a random quote
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

      // Reply with the quote
      await interaction.editReply(`"${randomQuote.q}" — ${randomQuote.a}`);
    } catch (error) {
      console.error('Error fetching quote:', error);
      await interaction.editReply('Sorry, I couldn’t fetch a quote at this moment.');
    }
  },
};
