//Jangan diubah
const tokenBaChat = '1418347140:AAHDFo8_fbIEU3F9CM02MGPzaeorwLQqhRc';
const { Telegraf } = require('telegraf')
const bot = new Telegraf(tokenBaChat)

bot.start((ctx) => {
    //Meminta user untuk memilih bahasa
    ctx.telegram.sendMessage(ctx.chat.id, '🌏 Please select a language 🌏',{
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

//Help [Revisi]
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
    ctx.telegram.sendMessage(ctx.chat.id, 'Selamat Datang! di chat bot Kampus Universitas AMIKOM Yogyakarta 🥰 \n\n Silahkan pilih menu yang sudah di sediakan dibawah', {
        reply_markup: {
            inline_keyboard:[
                //Baris Button-1
                [
                    {text: "Bank Soal", callback_data: "bank_soal"},
                    {text: "Akreditasi", callback_data: "akreditasi"},
                    {text: "Beasiswa", callback_data: "beasiswa"}
                ],
                //Baris Button-2
                [{text: "Help", callback_data: "help"}]
            ]
        }
    })
})

bot.action('akreditasi', (ctx) => {
    ctx.deleteMessage()
    //Meminta user untuk memilih bahasa
    ctx.telegram.sendMessage(ctx.chat.id, 'Berdasarkan SK Nomor :\n487/SK/BAN-PT/Akred/PT/XII/2018.\nakreditasi Universitas Amikom adalah B', {
        reply_markup: {
            inline_keyboard:[
                [
                    {text: "Kembali", callback_data: "indonesia"}
                ],
                [{text: "Help", callback_data: "help"}]
            ]
        }
    })
})

bot.action('bank_soal', (ctx) => {
    ctx.deleteMessage()
    //Meminta user untuk memilih bahasa
    ctx.telegram.sendMessage(ctx.chat.id, 'Bank Soal dapat diakses melalui link berikut :', {
        reply_markup: {
            inline_keyboard:[
                [
                    {text: "HMIF", url: "banksoal.hmifamikom.org"},
                    {text: "MIMMSI", url: "http://himmsi.org/Akademik/banksoal"}
                ],
                [{text: "Kembali", callback_data: "indonesia"}]
            ]
        }
    })
})

bot.action('beasiswa', (ctx) => {
    ctx.deleteMessage()
    //Meminta user untuk memilih bahasa
    ctx.telegram.sendMessage(ctx.chat.id,
        'Universitas Amikom Yogyakarta Memiliki 5 Jenis Beasiswa yaitu :\n- Kartu Indonesia Pintar (KIP)\n- Prestasi Akademik\n- Prestasi Olahraga\n- Prestasi Seni Budata\n- Pemimpin Muda\n\nInfo lengkap dapat diakses melalui button dibawah'
        , {
        reply_markup: {
            inline_keyboard:[
                [
                    {text: "HMIF", url: "https://home.amikom.ac.id/beasiswa/"}
                ],
                [{text: "Kembali", callback_data: "indonesia"}]
            ]
        }
    })
})




/* ENGLISH LANGUAGE COMMAND START FROM HERE */
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