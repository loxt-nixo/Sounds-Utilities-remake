module.exports = (client) => {
    client.eventHandler = async (eventsFolder, path) => {
        for (const file of eventsFolder) {
            const event = require(`../events/${file}`);
            if (event.once) {
                client.once(event.name, (...args) => event.execute(...args, client));
            } else {
                client.on(event.name, (...args) => event.execute(...args, client));
            }
        }
    };
}