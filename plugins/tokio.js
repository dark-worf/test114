let handler = async m => m.reply(`
ā *test-botto :* a whatsapp bot\n\nš *URL :* https://github.com/dark-worf/test114
`.trim()) // repository
handler.help = ['tokio']
handler.tags = ['info']
handler.command = /^tokio|repo$/i

module.exports = handler
