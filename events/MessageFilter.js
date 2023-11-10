const badwords = require('../badwords.json')

module.exports = {
    name: 'messageCreate',
    async execute (msg, client) {
        if (badwords.words.some(w => `${msg.content.toLowerCase()}`.includes(`${w}`))) {
            await msg.delete()
            await msg.author.send(`Dont send bad words!`)
        }
    }}