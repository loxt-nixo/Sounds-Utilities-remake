module.exports = (client) => {
    client.prefixHandler = async (commandsFolder, path) => {
        for (const file of commandsFolder) {
            const event = require(`../commands/${file}`);
            if (event.once) {
                client.once(event.name, (...args) => event.execute(...args, client));
            } else {
                client.on(event.name, (...args) => event.execute(...args, client));
            }
        }
    };
}