// commands/ping.js
module.exports = {
    name: "ping",
    description: "Replies with Pong!",
    execute(interaction) {
      interaction.reply(
        `🍾Latency is ${
          Date.now() - interaction.createdTimestamp
        }ms. API Latency is ${Math.round(interaction.client.ws.ping)}ms`
      );
    },
  };
  