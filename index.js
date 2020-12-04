const tokenBaChat = '1418347140:AAHDFo8_fbIEU3F9CM02MGPzaeorwLQqhRc';





const { Telegraf } = require('telegraf')

const bot = new Telegraf(tokenBaChat)











bot.start((ctx) => {
    //Meminta user untuk memilih bahasa
    ctx.telegram.sendMessage(ctx.chat.id, '🌏',{
        reply_markup: {
            inline_keyboard:[
                [
                    {text: "Bahasa Indonesia", callback_data: "indonesia"},
                    {text: "English", callback_data: "english"}
                ],
                [{text: "Help", callback_data: "help"}]
            ]
        }
    })
})





bot.action('help', (ctx) => {
    ctx.deleteMessage()
    //Memberi tahu seluruh command yang ada
    ctx.telegram.sendMessage(ctx.chat.id, 'Command', {
        reply_markup: {
            inline_keyboard:[
                [
                    {text: "Bahasa Indonesia", callback_data: "indonesia"},
                    {text: "English", callback_data: "english"}
                ],
                [{text: "Help", callback_data: "help"}]
            ]
        }
    })
})








/*bot.help((ctx) => ctx.reply('Contact our developers plz! Or type\n/cmd'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.command('cmd', (ctx) => ctx.reply('/start /help'))*/





/* BAHASA INDONESIA START COMMAND FROM THIS */
bot.action('indonesia', (ctx) => {
    ctx.deleteMessage()
    //Meminta user untuk memilih bahasa
    ctx.telegram.sendMessage(ctx.chat.id, 'Selamat Datang! di chat bot Kampus Universitas AMIKOM Yogyakarta 🥰', {
        reply_markup: {
            inline_keyboard:[
                [
                    {text: "Bahasa Indonesia", callback_data: "indonesia"},
                    {text: "English", callback_data: "english"}
                ],
                [{text: "Help", callback_data: "help"}]
            ]
        }
    })
})






/* ENGLISH LANGUAGE START COMMAND FROM THIS */
bot.action('english', (ctx) => {
    ctx.deleteMessage()
    //Meminta user untuk memilih bahasa
    ctx.telegram.sendMessage(ctx.chat.id, 'Welcome! to bot Universitas AMIKOM Yogyakarta. 🥰', {
        reply_markup: {
            inline_keyboard:[
                [
                    {text: "Bahasa Indonesia", callback_data: "indonesia"},
                    {text: "English", callback_data: "english"}
                ],
                [{text: "Help", callback_data: "help"}]
            ]
        }
    })
})



















bot.launch()