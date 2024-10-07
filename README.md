# DobbyBot

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/DobbyBot.git
    cd DobbyBot
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

### Configuration

1. Create a `.env` file in the root directory of the project:
    ```sh
    touch .env
    ```

2. Add your Discord bot token and client ID to the `.env` file:
    ```env
    TOKEN=your-discord-bot-token
    CLIENT_ID=your-discord-client-id
    ```

### Running the Bot

Start the bot using the following command:
```sh
node index.js
```

### Usage

Once the bot is running, you can invite it to your Discord server using the client ID and start interacting with it.

### Contributing

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

### Acknowledgments

- [Discord.js](https://discord.js.org/) - A powerful JavaScript library for interacting with the Discord API
- [dotenv](https://www.npmjs.com/package/dotenv) - A zero-dependency module that loads environment variables from a `.env` file
