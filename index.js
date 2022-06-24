const {
  WAConnection,
  MessageType,
  Presence,
  Mimetype,
  GroupSettingChange,
  MessageOptions,
  WALocationMessage,
  WA_MESSAGE_STUB_TYPES,
  ReconnectMode,
  ProxyAgent,
  waChatKey,
  mentionedJid,
  processTime,
  ChatModification,

} = require('@adiwajshing/baileys');
//--

//--File js
const {color, bgcolor} = require('./lib/color');
const P = require('pino');
const {bahasa} = require('./src/bahasa');
const {negara} = require('./src/kodenegara');
const {wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, clos } = require('./lib/functions');
const {fetchJson} = require('./lib/fetcher');
const {recognize} = require('./lib/ocr');

//--

//--Pakage Npm
const fs = require('fs');
const moment = require('moment-timezone');
const {exec} = require('child_process');
const kagApi = require('@kagchi/kag-api');
const fetc = require('node-fetch');
const tiktod = require('tiktok-scraper');
const ffmpeg = require('fluent-ffmpeg');
const {removeBackgroundFromImageFile} = require('remove.bg');
const imgbb = require('imgbb-uploader');
const lolis = require('lolis.life');
const loli = new lolis();
const speed = require('performance-now');
const cd = 4.32e+7 ;
const crypto = require('crypto');
const qrcode = require("qrcode-terminal");
const axios = require('axios');
const WSF = require('wa-sticker-formatter');
const prompt = require('prompt-sync')();
//--

//--File json bot
const welkom = JSON.parse(fs.readFileSync('./data/welkom.json'));
const up = JSON.parse(fs.readFileSync('./data/settings.json'));
const samih = JSON.parse(fs.readFileSync('./data/simi.json'))
//--

//--File json temp
const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./temp/vid.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
//--File json user
  /*const _limit = JSON.parse(fs.readFileSync('./datauser/limit.json'));
const uang = JSON.parse(fs.readFileSync('./datauser/uang.json'));*/
const _registered = JSON.parse(fs.readFileSync('./datauser/registered.json'));
const antilink = JSON.parse(fs.readFileSync('./datauser/antilink.json'))
const nsfw = JSON.parse(fs.readFileSync('./datauser/nsfw.json'))
//--

//--File json data
const trut = JSON.parse(fs.readFileSync('./data/truth.json'));
const dare = JSON.parse(fs.readFileSync('./data/dare.json'));
const fak = JSON.parse(fs.readFileSync('./data/fakta.json'));
//--


//--Setting
prefix = up.prefix
//const limitawal = up.limit;
const memberlimit = up.memberlimit;
const cr = up.cr;
//const hargalimit = up.hargalimit;
const NamaBot = up.NamaBot;
const Ig = up.Ig;
const Wa1 = up.Wa1;
const Wa2 = up.Wa2;
const Etinosa = up.Etinosa;
//const Pulsa = up.Pulsa;
//const Dana = up.Dana;
const blocked = [];
const ownerNumber = up.ownerNumber;
//--

//--Apikey
BarBarKey = up.BarBarKey;
vKey = up.Vhtearkey;
viKey = up.Vinzapi
meKey = up.Itsmeikyapi
lolKey = up.LolHumanKey
xTeam= up.xTeam
//--

//--Kontak
const vcard = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ 'FN:Son Of Man\n' // Nama
+ 'ORG:EtinBot;\n' // Nama bot
+ 'TEL;type=CELL;type=VOICE;waid=2348092733026:+234 809-273-3026\n' // Nomor bot
+ 'END:VCARD' 


//--Datauser

/*const getLimit = (sender) => {
  let position = false
  Object.keys(limit).forEach ((i) => {
if (limit[position].id === sender) {
  position = i
}
  })
  if (position !== false) {
return limit[position].limit
  }
}
*/
const getRegisteredRandomId = () => {
  return _registered[Math.floor(Math.random() * _registered.length)].id
}

const addRegisteredUser = (userid, sender, age, time, serials) => {
  const obj = {
id: userid,
name: sender,
age: age,
time: time,
serial: serials
  }
  _registered.push(obj)
  fs.writeFileSync('./datauser/registered.json', JSON.stringify(_registered))
}

const createSerial = (size) => {
  return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const checkRegisteredUser = (sender) => {
  let status = false
  Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
  status = true
}
  })
  return status
}


/*const addATM = (sender) => {
  const obj = {
id: sender, uang: 0
  }
  uang.push(obj)
  fs.writeFileSync('./datauser/uang.json',
JSON.stringify(uang))
}

const addKoinUser = (sender, amount) => {
  let position = false
  Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
  position = i
}
  })
  if (position !== false) {
uang[position].uang += amount
fs.writeFileSync('./datauser/uang.json', JSON.stringify(uang))
  }
}

const checkATMuser = (sender) => {
  let position = false
  Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
  position = i
}
  })
  if (position !== false) {
return uang[position].uang
  }
}

const bayarLimit = (sender, amount) => {
  let position = false
  Object.keys(_limit).forEach((i) => {
if (_limit[i].id === sender) {
  position = i
}
  })
  if (position !== false) {
_limit[position].limit -= amount
fs.writeFileSync('./datauser/limit.json', JSON.stringify(_limit))
  }
}

const confirmATM = (sender, amount) => {
  let position = false
  Object.keys(uang).forEach((i) => {
if (uang[i].id === sender) {
  position = i
}
  })
  if (position !== false) {
uang[position].uang -= amount
fs.writeFileSync('./datauser/uang.json', JSON.stringify(uang))
  }
}

const limitAdd = (sender) => {
  let position = false
  Object.keys(_limit).forEach((i) => {
if (_limit[i].id == sender) {
  position = i
}
  })
  if (position !== false) {
_limit[position].limit += 1
fs.writeFileSync('./datauser/limit.json', JSON.stringify(_limit))
  }
}
*/

//--Waktu
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var second = Math.floor(seconds % 60);
  return `${pad(hours)}:${pad(minutes)}:${pad(second)}`;
}
//--


//--Whatsapp start connect
const starts = async (astro = new WAConnection()) => {
  astro.logger.level = 'warn'
  astro.version = [2, 2142, 12]
  astro.browserDescription = [ 'Astro Bot-md', 'Chrome', '3.0' ]
  console.log(banner.string)
  astro.on('qr', () => {
      console.log(color('[','white'), color('!','red'), color(']','white'), color(' Astro Bots-Md Version '))
  })

  fs.existsSync('./session.json') && astro.loadAuthInfo('./session.json')
  astro.on('connecting', () => {
      start('2', 'Connecting...')
  })
  astro.on('open', () => {
      success('2', 'Connected To Astro Server')
  })
  await astro.connect({timeoutMs: 30*1000})
      fs.writeFileSync('Astro.json', JSON.stringify(astro.base64EncodedAuthInfo(), null, '\t'))

 

	astro.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
		try {
			const mdata = await astro.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				teks = `Hi dearie @${num.split('@')[0]}
WELCOME  TO *${mdata.subject}* 
────────────────
┏━━━━━━━━━━━━━━━━━━━━
──────〘  *Intro* 〙───────
━━━━━━━━━━━━━━━━━━━━
├➸ *Name* :
├➸ *Age* :
├➸ *Location* :
├➸ *A picture of you* :
├➸ *Gender* :
┗━━━━━━━━━━━━━━━━━━━━

Type ${prefix}verify To Start Using Bot.`
				astro.sendMessage(mdata.id, teks, MessageType.text, { contextInfo: {"mentionedJid": [num]}})
			} else if (anu.action == 'remove') {
				num = anu.participants[0]
				teks = `Goodbye @${num.split('@')[0]}👋`
				astro.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

	astro.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	astro.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('Africa/Lagos').format('DD/MM HH:mm:ss')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
      var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
      const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()			
      const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			const isCmd = body.startsWith(prefix)
      const is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
			mess = {
  wait: 'wait....',
  success: 'Done!!',
  Public: '*☒* features in private mode now only owner can use the bot',
  ferr: 'There was an error! OR Owner is fixing!!',
  limitend: 'Sorry your limit has run out, please make a repeat purchase.',
  error: {
  stick: 'Please try again later',
  Iv: 'Link Error'
  },
  only: {
    group: 'This command can only be used by the owner of the group',
    ownerG: 'This command can only be used in group!',
    ownerB: 'This command only Owner carter can use!',
    admin: 'This command can only be used by group admins!',
    Badmin: 'Make Bot As Admin First!',
    banned: `Sorry you were banned in for using unlisted commands contact support for help.`,
    daftarB: `You haven't registered in our database!\n\nPlease register by typing:\n*${prefix}register* name | age`
  }
}
      const totalchat = await astro.chats.all()
			const botNumber = astro.user.jid
			const ownerNumber = [`${up.ownerNumber}@s.whatsapp.net`] // replace this with your number
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await astro.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
			const isOwner = ownerNumber.includes(sender)
			const isSimi = isGroup ? samih.includes(from): false
      const isRegister = checkRegisteredUser(sender)
      const isAntiLink = isGroup ? antilink.includes(from) : false
      const q = args.join(' ')
      const tescuk = ["0@s.whatsapp.net"]
			let pushname = astro.contacts[sender] != undefined ? astro.contacts[sender].vname || astro.contacts[sender].notify: undefined
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			
//--Balasan bot
			const reply = (teks) => {
				astro.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				astro.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? astro.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : astro.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
			const costum = (pesan, tipe, target, target2) => {
      astro.sendMessage(from, pesan, tipe, {quoted: {key: {fromMe: false, participant: `${target}`, ...(from ? {
  remoteJid: from
}: {})
  }, message: {
conversation: `${target2}`
  }}})
}
const sendPtt = (teks) => {
  astro.sendMessage(from, audio, mp3, {
quoted: mek
  })
}
			
//--MessageType
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedText = type === 'extendedTextMessage' && content.includes('textMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

//--Colors
      colors = ['red','white','black','blue','yellow','green']

//--Console log grup
			if (!isGroup && isCmd) console.log('\x1b[1;37m>', time, color(command), 'from', color(pushname), 'args :', (args.length))
			
//--Console log chat pribadi
			if (isCmd && isGroup) console.log('\x1b[1;37m>', time, color(command), 'from', (groupName), 'args :', color(args.length))

//---Metadata stiker
			function addMetadata(packname, author) {	
				if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}

//----limit
/*
 const= (sender) => {
  let position = false
 for (let i of _limit) {
if (i.id === sender) {
  let limits = i.limit
  if (limits >= limitawal) {
position = true
return true
  } else {
_limit
position = true
return false
  }
}
  }
  if (position === false) {
const obj = {
  id: sender,
  limit: 1
}
_limit.push(obj)
fs.writeFileSync('./datauser/limit.json', JSON.stringify(_limit))
return false
  }
}*/

//--check limit user
/*const checkLimit = (sender) => {
      let found = false
     for (let lmt of _limit) {
     if (lmt.id === sender) {
      limitCounts = limitawal - lmt.limit
     if (limitCounts <= 0) return astro.sendMessage(from, `Maaf limit kamu telah habis, silahkan lakukan pembelian ulang`, text,{ quoted: mek})
      astro.sendMessage(from, `〘  *Limit* 〙
Sisa limit anda : *${limitCounts}*
_Penggunaan limit hanya pada fitur-fitur tertentu_`, text, { quoted : mek})
      found = true
                                }
                        }
      if (found === false) {
      let obj = { id: sender, limit: 1 }
      _limit.push(obj)
     fs.writeFileSync('./datauser/limit.json', JSON.stringify(_limit))
     astro.sendMessage(from, `〘  *Limit* 〙
Sisa limit anda : *${limitCounts}*
_Penggunaan limit hanya pada fitur-fitur tertentu_`, text, { quoted : mek})
                        }
                }

//--Balance
if (isRegister && isGroup) {
  const checkATM = checkATMuser(sender)
  try {
if (checkATM === undefined) addATM(sender)
const uangsaku = Math.floor(Math.random() * 10) + 90
addKoinUser(sender, uangsaku)
  } catch (err) {
console.error(err)
  }
}
*/

//--Member limit
if (isGroup) {
  try {
const getmemex = groupMembers.length
if (getmemex >= memberlimit) {
  astro.sendMessage(from, `Sorry, the number of member requirements must have exceeded ${memberlimit}, GOODBYE 👋🏻`, text)

  setTimeout(() => {
astro.groupLeave(from) // ur cods
  }, 1000) // 1000 = 1s,
}
  } catch {
console.error(err)
  }
}
if (messagesC.includes("://chat.whatsapp.com/")){
		        if (!isGroup) return
		        if (!isAntiLink) return
		        if (isGroupAdmins) return reply('because you are a group admin, bots wont kick you')
		        astro.updatePresence(from, Presence.composing)
		        if (messagesC.includes("#personadmin")) return reply("#admin permission recieved")
		        var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		        reply(`Sorry! Grouplink detected  ${sender.split("@")[0]} You will be kicked from the group in another 1 second`)
		        setTimeout( () => {
			        astro.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		        }, 1000)
          }
            /*setTimeout( () => {
			        astro.updatePresence(from, Presence.composing)
			        reply("1 Second")
		        }, 1000)
		        setTimeout( () => {
			        astro.updatePresence(from, Presence.composing)
		                reply("2 Seconds")
		        }, 3000)
		        setTimeout( () => {
			        astro.updatePresence(from, Presence.composing)
			        reply("3 Seconds")
		        }, 2000)
		        setTimeout( () => {
			        astro.updatePresence(from, Presence.composing)
			        reply("4 Seconds")
		        }, 1000)
		        setTimeout( () => {
			        astro.updatePresence(from, Presence.composing)
			        reply("5 Seconds")
		        }, 0)*/
	        



//--Other Function
const apakah = ['Yes',
  'No',
  'Maybe']
const bisakah = ['I can',
  'Cannot',
  'Maybe']
const kapankah = ['More day',
  'Another Week',
  'More Moon',
  'Another Year']



//--Auto respon
if(budy.match('Bot')){
result = fs.readFileSync(`./temp/stick/emm.webp`)
  astro.sendMessage(from, result, sticker, {
quoted: mek
  })
}

//--End auto respon 1

//--Auto respon 2
switch(is) {
  case 'bot':
buf = fs.readFileSync(`./temp/audio/onichan.mp3`)
astro.sendMessage(from, buf, audio, {
  mimetype: 'audio/mp4', quoted: mek, ptt: true
})
break
case ':':
hasil = `Do You Mean: ${prefix}help`
reply(hasil)
break
}

			switch(command) {
case 'help':
  case 'menu':
case '?':
   if (!isGroup) return reply(mess.only.group)
   uptime = process.uptime()
  let pp = './src/astro.jpg'
  const Menu = {
text: `   (❤️ω❤️)Konnichiwa👋 I'm Astro^ℂ𝕙𝕒𝕟!

╭────────────┈
│🚀 ᴜꜱᴇʀ: *${pushname}*
│🎗️ ɴᴀᴍᴇ: *future (◍•ᴗ•◍)*
│🏮 ᴘʀᴇꜰɪx: *${prefix}*
╰────────────┈
🧣 ɪꜰ ʏᴏᴜ ʜᴀᴠᴇ ᴀɴʏ ɪꜱꜱᴜᴇꜱ ᴡɪᴛʜ ᴛʜᴇ ʙᴏᴛ ᴏʀ ᴀɴʏ ᴇʀʀᴏʀ ᴛʜᴇɴ ᴄᴏɴᴛᴀᴄᴛ ʙᴏᴛ ᴏᴡɴᴇʀ. ᴛʏᴘᴇ " ${prefix}ᴏᴡɴᴇʀ " ᴛᴏ ᴄᴏɴᴛᴀᴄᴛ ᴏᴡɴᴇʀ!

━━━❰ 𝗚𝗲𝗻𝗲𝗿𝗮𝗹 ❱━━━
├➸ *${prefix}Simi (Text)*
├➸_Simsimi Chat_
├➸ *${prefix}Info*
├➸ _Information about Bot_
├➸ *${prefix}Owner*
 _Information about Bot_
├➸ *${prefix}Donation*
 _Donation Info_
├➸ *${prefix}Ping*
 _Check the speed of response_
━━━❰ 𝗪𝗲𝗲𝗯𝘀 ❱━━━

シ︎ *${prefix}Kusonime (Query)*
 _Searching anime info on kusonime_
├➸ *${prefix}Neonime (Query)*
 _Searching anime info on neonime_
├➸ *${prefix}Charnime (Query)*
 _Searching anime character info_
├➸ *${prefix}Wait*
 _Detect anime info from image_
├➸ *${prefix}Anime*
 _Searching anime images_
├➸ *${prefix}Loli*
 _Searching loli anime images_
├➸ *${prefix}Neko*
 _Searching neko anime images_

━━━❰ 𝗙𝘂𝗻 ❱━━━

├➸ *${prefix}Alay (Text)*
 _Alay Fonts_
├➸ *${prefix}Alay2 (Text)*
 _Alay Fonts_
├➸ *${prefix}Reverse (Text)*
 _Reversing the spelling of sentences_
├➸ *${prefix}Hilih (Choose Text)*
 _Change vowels to i_
├➸ *${prefix}Namae (NameText)*
 _Nama ninpushnameu_
├➸ *${prefix}Pantun*
 _Random poetry_
├➸ *${prefix}Bucin*
 _Random Caption_
├➸ *${prefix}Bijak*
 _Random Motivational quotes_
├➸ *${prefix}Chatprank (Text1/Text2)*
 _Ex : ${prefix}Chatprank hi sir/Yes dear_
├➸ *${prefix}Itsme*
 _Show my profile_
├➸ *${prefix}Fml*
 _Quotes Fuck My Life_
├➸ *${prefix}Asupan*
 _timeline Refresher Video_
├➸ *${prefix}Tagme*
 _Auto tag_
├➸ *${prefix}Fitnah (Tag target|text1|text2)*
 _Fake reply chat bot_

━━━❰ 𝗠𝗲𝗱𝗶𝗮 ❱━━━

✵ ${prefix}listvn*
 _Show list of VN_
├➸ *${prefix}listimg*
 _Show list of Images_
├➸ *${prefix}liststik*
 _Show list of stickers_
├➸ *${prefix}listvid*
 _show list of videos_
├➸ *${prefix}Tupai (Reply audio)*
 _Turns voice into chipmunk_
├➸ *${prefix}Slow (Reply audio)*
 _Change speed(slower)_
├➸ *${prefix}Gemuk (Reply audio)*
 _Change speed(faster)_
├➸ *${prefix}Bass (Reply audio)*
 _Increase audio bass_
├➸ *${prefix}Wanted (Foto)*
 _Make a WANTED poster from photos_
├➸ *${prefix}Drawing (Foto)*
 _Filter foto pencil sketch_

━━━❰ 𝗨𝘁𝗶𝗹𝘀 ❱━━━

𖣘 *${prefix}Stiker*
 _Make stickers from pictures/video_
├➸ *${prefix}Triggered*
 _Create triggered stickers_
├➸ *${prefix}Wasted*
 _Make wasted stickers_
├➸ *${prefix}Ttp (Text)*
 _Create stickers from text_
├➸ *${prefix}Toimg*
 _Turn stickers into pictures_
├➸ *${prefix}Tomp3*
 _Converts video to audio_
├➸ *${prefix}Play (Text)*
 _play a song_
├➸ *${prefix}Tts (Text)*
 _Text to sound_
├➸ *${prefix}Igstalk (username)*
 _Stalking Instagram_
├➸ *${prefix}Timer (time)*
 _Stopwatch_
├➸ *${prefix}Wame*
 _make link wa.me_
├➸ *${prefix}Nulis (Text)*
 _Writing books_
├➸ *${prefix}Ocr*
 _Copy text in pictures_
├➸ *${prefix}Wait*
 _Anime info from anime drawings_

━━━❰ 𝗠𝗼𝗱𝗿𝗮𝘁𝗶𝗼𝗻 ❱━━━

├➸ ${prefix}Closegc*
 _Close Group_
├➸ *${prefix}Opengc*
 _Open Group_
├➸ *${prefix}Promote*
 _Promote admin_
├➸ *${prefix}Demote*
 _Demote admin_
├➸ *${prefix}Setname*
 _Set Group Name_
├➸ *${prefix}Setdesk*
 _Change group description_
├➸ *${prefix}Add*
 _Add member_
├➸ *${prefix}Kick*
 _Remove member_
├➸ *${prefix}Tagall*
 _Tag All members_
├➸ *${prefix}Linkgc*
 _Display group link_
├➸ *${prefix}Leave*
 _Remove Bot_
├➸ *${prefix}Notif*
 _Notify all members_
├➸ *${prefix}Welcome*
 _On/off welcome_
├➸ *${prefix}Delete (tag Message)*
 _Delete Bot Messages_
├➸ *${prefix}antilinkgroup*
 _Remove spammers_

━━━❰ 𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝘃𝗲 ❱━━━

ꕥ ${prefix}ᴄᴀʟᴄᴜʟᴀᴛᴏʀ
ꕥ ${prefix}ᴄᴏᴠɪᴅ
ꕥ ${prefix}ᴅᴇꜰɪɴᴇ
ꕥ ${prefix}ᴇʟᴇᴍᴇɴᴛꜱ
ꕥ ${prefix}ɢɪᴛʜᴜʙ
ꕥ ${prefix}ᴜʀʙᴀɴᴅɪᴄᴛɪᴏɴᴀʀʏ
ꕥ ${prefix}ᴡᴇᴀᴛʜᴇr
╭────────────────
│ future-𝔹𝕠𝕥𝕥𝕠
│ ©999-officals
╰────────────────
` ,

contextInfo: {
  mentionedJid: [sender]
}
  }
  astro.sendMessage(from, Menu, text, {
quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Made By Astro", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABERERESERMVFRMaHBkcGiYjICAjJjoqLSotKjpYN0A3N0A3WE5fTUhNX06MbmJiboyiiIGIosWwsMX46/j///8BERERERIRExUVExocGRwaJiMgICMmOiotKi0qOlg3QDc3QDdYTl9NSE1fToxuYmJujKKIgYiixbCwxfjr+P/////CABEIADoAUQMBIgACEQEDEQH/xAAsAAEAAwEBAQAAAAAAAAAAAAAAAgMFBAYBAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAADwYAAAAAEo2EoeggYctbsPMX7XIZPycABZWNvLoHTfnjTo4x0c4AAAAAAAf//EAC0QAAMAAgEDAwIDCQAAAAAAAAECAwQRAAUSMRMhImGSFCCRJEBBQlBRUmOx/9oACAEBAAE/AP3dFLsqjW2IA2QB+p5PHvUoJxdy7FU7VJ7iPcgcM6AMxRtKwVjrwT4B4Y2Hdub/ABRXb28K2tE/Q74+Nead7yZV+BHcNbDglSPodcKsp0wIOgf14mLeisyKCFAJII/ipf8A4vCrKFJBAYbH1Hj8kXWdFdpJUD+RywB+0g8z8N4dXtiQgHxlo5STuyy2qbbmXTHxhjt2SZ6I4yISuzy/17IZudWImmKoT0bvH9pkHc+DpAQxbma/bTqUE2hwEAlUO/eQjiXMARsnTUvAX/EZxgS7vtUQIAF03OjXcdSxJnbLS0kPzddbPbsFCOUFQQKBge1dBv8AEjY/JJ1m4ZpJQDfwbYB+0g8yOvXybpZ8eHm21AfTesgRuXrOpUpjzj9ELnf3luWyTe+Tek0L2ZmPkBSx3teX6lW4uTKS0v7Wou9v7huY/VDj+l24sG9K5vLff8GOv7NzEy/wl43WEneWivd3a7g2w3sRzKyGybeqyKnwRAq70AihB5/on//EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQIBAT8AR//EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQMBAT8AR//Z", "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==" } } } })
  break

  case 'helpx':
case '?':
   if (!isGroup) return reply(mess.only.group)
   uptime = process.uptime()
  const help = {
text: `   (❤️ω❤️)Konnichiwa👋 ${pushname} I'm future!

(❤️ω❤️)Konnichiwa👋 ${pushname} I'm future!!

1. Bot Prefixes ─ (:)
2. Don't Call Bot To Avoid Blocking.
3. Don't Spam Bot/Admin in Pm & Groups !
4. Use !help index number to see the commands in the category.

      ┏━━━━━━━━━━━━━━┓
    ─❁┈[ Commands List ]┈❁─
      ┗━━━━━━━━━━━━━━┛
┌──────────────────
├──❁┈[ User Side ]┈❁───
├─────────────────
│➸ Index No. :- 1 
│➸ Usage :- !Help 1
│➸ Info :- User Commands
│➸ Commands :- 16
├─────────────────
├──❁┈[ Bot Side ]┈❁────
├─────────────────
│➸ Index No. :- 2
│➸ Usage :- !Help 2
│➸ Info :- Bot Commands
│➸ Commands :- Noo :v
├─────────────────
├─❁┈[ Anime Side ]┈❁───
├─────────────────
│➸ Index No. :- 3
│➸ Usage :- !Help 3
│➸ Info :- Anime cmds
│➸ Commands :- Noo :v
├─────────────────
├─❁┈[ Random Cmd ]┈❁─
├─────────────────
│➸ Index No. :- 4
│➸ Usage :- !Help 4
│➸ Info :- Random Cmds
│➸ Commands :- Noo :v
├─────────────────
├─❁┈[ Game Side ]┈❁───
├─────────────────
│➸ Index No. :- 5
│➸ Usage :- !Help 5
│➸ Info :- Games cmds
│➸ Commands :- Noo :v
├─────────────────
├─❁┈[ Admin Side ]┈❁───
├─────────────────
│➸ Index No. :- 6
│➸ Usage :- !Help 6
│➸ Info :- Random cmds
│➸ Commands :- Noo :v
├─────────────────
├─❁┈[ Owner Side ]┈❁───
├─────────────────
│➸ Index No. :- 7
│➸ Usage :- !Help 7
│➸ Info :- Owner cmds
│➸ Commands :- Noo :v
├─────────────────
├──❁┈[ Pro Side ]┈❁────
├─────────────────
│➸ Index No. :- 8
│➸ Usage :- !Help 8
│➸ Info :- Pro User Cmds
│➸ Commands :- Noo :v
├─────────────────
├─❁┈[ Hentai Side ]┈❁───
├─────────────────
│➸ Index No. :- 9
│➸ Usage :- !Help 9
│➸ Info :- Hentai cmds
│➸ Commands :- Noo :v 
├─────────────────
├─❁┈[ astro legon Side ]┈❁─
├─────────────────
│➸ Index No. :- 10
│➸ Usage :- !Help 10
│➸ Info :- Astro Admin Cmds
│➸ Commands :- Noo :v
└───❁┈[ Astrp Bᴏᴛ ]┈❁─────

` ,

contextInfo: {
  mentionedJid: [sender]
}
  }
  astro.sendMessage(from, help, text, {
quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Made By Astro", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABERERESERMVFRMaHBkcGiYjICAjJjoqLSotKjpYN0A3N0A3WE5fTUhNX06MbmJiboyiiIGIosWwsMX46/j///8BERERERIRExUVExocGRwaJiMgICMmOiotKi0qOlg3QDc3QDdYTl9NSE1fToxuYmJujKKIgYiixbCwxfjr+P/////CABEIADoAUQMBIgACEQEDEQH/xAAsAAEAAwEBAQAAAAAAAAAAAAAAAgMFBAYBAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAADwYAAAAAEo2EoeggYctbsPMX7XIZPycABZWNvLoHTfnjTo4x0c4AAAAAAAf//EAC0QAAMAAgEDAwIDCQAAAAAAAAECAwQRAAUSMRMhImGSFCCRJEBBQlBRUmOx/9oACAEBAAE/AP3dFLsqjW2IA2QB+p5PHvUoJxdy7FU7VJ7iPcgcM6AMxRtKwVjrwT4B4Y2Hdub/ABRXb28K2tE/Q74+Nead7yZV+BHcNbDglSPodcKsp0wIOgf14mLeisyKCFAJII/ipf8A4vCrKFJBAYbH1Hj8kXWdFdpJUD+RywB+0g8z8N4dXtiQgHxlo5STuyy2qbbmXTHxhjt2SZ6I4yISuzy/17IZudWImmKoT0bvH9pkHc+DpAQxbma/bTqUE2hwEAlUO/eQjiXMARsnTUvAX/EZxgS7vtUQIAF03OjXcdSxJnbLS0kPzddbPbsFCOUFQQKBge1dBv8AEjY/JJ1m4ZpJQDfwbYB+0g8yOvXybpZ8eHm21AfTesgRuXrOpUpjzj9ELnf3luWyTe+Tek0L2ZmPkBSx3teX6lW4uTKS0v7Wou9v7huY/VDj+l24sG9K5vLff8GOv7NzEy/wl43WEneWivd3a7g2w3sRzKyGybeqyKnwRAq70AihB5/on//EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQIBAT8AR//EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQMBAT8AR//Z", "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==" } } } })
  break

  case 'help6':
case '?':
   if (!isGroup) return reply(mess.only.group)
   uptime = process.uptime()
  const help6 = {
text: `   (❤️ω❤️)Konnichiwa👋 ${pushname} I'm Astro^ℂ𝕙𝕒𝕟!

(❤️ω❤️)Konnichiwa👋 ${pushname} I'm Astro^ℂ𝕙𝕒𝕟!!

1. Bot Prefixes ─ (:)
2. Don't Call Bot To Avoid Blocking.
3. Don't Spam Bot/Admin in Pm & Groups !
4. Use !help index number to see the commands in the category.

      ┏━━━━━━━━━━━━━━┓
    ─❁┈[ Commands List ]┈❁─
      ┗━━━━━━━━━━━━━━┛
┌──────────────────
├──❁┈[ Admin Side ]┈❁───
├─────────────────
├➸ ${prefix}Closegc*
├➸ _Close Group_
├➸ *${prefix}Opengc*
├➸ _Open Group_
├➸ *${prefix}Promote*
├➸ _Promote admin_
├➸ *${prefix}Demote*
├➸ _Demote admin_
├➸ *${prefix}Setname*
├➸ _Set Group Name_
├➸ *${prefix}Setdesk*
├➸ _Change group description_
├➸ *${prefix}Add*
├➸ _Add member_
├➸ *${prefix}Kick*
├➸ _Remove member_
├➸ *${prefix}Tagall*
├➸ _Tag All members_
├➸ *${prefix}Linkgc*
├➸ _Display group link_
├➸ *${prefix}Leave*
├➸ _Remove Bot_
├➸ *${prefix}ping*
├➸ _Notify all members_
├➸ *${prefix}Welcome*
├➸ _On/off welcome_
├➸ *${prefix}Delete (tag Message)*
├➸ _Delete Bot Messages_
├➸ *${prefix}antilinkgroup*
├➸ _Remove spammers_
└───❁┈[ Astro Bᴏᴛ ]┈❁─────
` ,

contextInfo: {
  mentionedJid: [sender]
}
  }
  astro.sendMessage(from, help6, text, {
quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Made By Astro", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABERERESERMVFRMaHBkcGiYjICAjJjoqLSotKjpYN0A3N0A3WE5fTUhNX06MbmJiboyiiIGIosWwsMX46/j///8BERERERIRExUVExocGRwaJiMgICMmOiotKi0qOlg3QDc3QDdYTl9NSE1fToxuYmJujKKIgYiixbCwxfjr+P/////CABEIADoAUQMBIgACEQEDEQH/xAAsAAEAAwEBAQAAAAAAAAAAAAAAAgMFBAYBAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAADwYAAAAAEo2EoeggYctbsPMX7XIZPycABZWNvLoHTfnjTo4x0c4AAAAAAAf//EAC0QAAMAAgEDAwIDCQAAAAAAAAECAwQRAAUSMRMhImGSFCCRJEBBQlBRUmOx/9oACAEBAAE/AP3dFLsqjW2IA2QB+p5PHvUoJxdy7FU7VJ7iPcgcM6AMxRtKwVjrwT4B4Y2Hdub/ABRXb28K2tE/Q74+Nead7yZV+BHcNbDglSPodcKsp0wIOgf14mLeisyKCFAJII/ipf8A4vCrKFJBAYbH1Hj8kXWdFdpJUD+RywB+0g8z8N4dXtiQgHxlo5STuyy2qbbmXTHxhjt2SZ6I4yISuzy/17IZudWImmKoT0bvH9pkHc+DpAQxbma/bTqUE2hwEAlUO/eQjiXMARsnTUvAX/EZxgS7vtUQIAF03OjXcdSxJnbLS0kPzddbPbsFCOUFQQKBge1dBv8AEjY/JJ1m4ZpJQDfwbYB+0g8yOvXybpZ8eHm21AfTesgRuXrOpUpjzj9ELnf3luWyTe+Tek0L2ZmPkBSx3teX6lW4uTKS0v7Wou9v7huY/VDj+l24sG9K5vLff8GOv7NzEy/wl43WEneWivd3a7g2w3sRzKyGybeqyKnwRAq70AihB5/on//EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQIBAT8AR//EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQMBAT8AR//Z", "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==" } } } })
  break

  case 'help7':
case '?':
   if (!isGroup) return reply(mess.only.group)
   uptime = process.uptime()
  const help7 = {
text: `   (❤️ω❤️)Konnichiwa👋 ${pushname} I'm Astro^ℂ𝕙𝕒𝕟!

(❤️ω❤️)Konnichiwa👋 ${pushname} I'm Astro^ℂ𝕙𝕒𝕟!!

1. Bot Prefixes ─ (:)
2. Don't Call Bot To Avoid Blocking.
3. Don't Spam Bot/Admin in Pm & Groups !
4. Use !help index number to see the commands in the category.

      ┏━━━━━━━━━━━━━━┓
    ─❁┈[ Commands List ]┈❁─
      ┗━━━━━━━━━━━━━━┛
┌──────────────────
├──❁┈[ Admin Side ]┈❁───
├─────────────────
├➸ ${prefix}Closegc*
├➸ _Close Group_
├➸ *${prefix}Opengc*
├➸ _Open Group_
├➸ *${prefix}Promote*
├➸ _Promote admin_
├➸ *${prefix}Demote*
├➸ _Demote admin_
├➸ *${prefix}Setname*
├➸ _Set Group Name_
├➸ *${prefix}Setdesk*
├➸ _Change group description_
├➸ *${prefix}Add*
├➸ _Add member_
├➸ *${prefix}Kick*
├➸ _Remove member_
├➸ *${prefix}Tagall*
├➸ _Tag All members_
├➸ *${prefix}Linkgc*
├➸ _Display group link_
├➸ *${prefix}Leave*
├➸ _Remove Bot_
├➸ *${prefix}ping*
├➸ _Notify all members_
├➸ *${prefix}Welcome*
├➸ _On/off welcome_
├➸ *${prefix}Delete (tag Message)*
├➸ _Delete Bot Messages_
├➸ *${prefix}antilinkgroup*
├➸ _Remove spammers_
└───❁┈[ Astro Bᴏᴛ ]┈❁─────
` ,

contextInfo: {
  mentionedJid: [sender]
}
  }
  astro.sendMessage(from, help7, text, {
quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "Made By Astro", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABERERESERMVFRMaHBkcGiYjICAjJjoqLSotKjpYN0A3N0A3WE5fTUhNX06MbmJiboyiiIGIosWwsMX46/j///8BERERERIRExUVExocGRwaJiMgICMmOiotKi0qOlg3QDc3QDdYTl9NSE1fToxuYmJujKKIgYiixbCwxfjr+P/////CABEIADoAUQMBIgACEQEDEQH/xAAsAAEAAwEBAQAAAAAAAAAAAAAAAgMFBAYBAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAADwYAAAAAEo2EoeggYctbsPMX7XIZPycABZWNvLoHTfnjTo4x0c4AAAAAAAf//EAC0QAAMAAgEDAwIDCQAAAAAAAAECAwQRAAUSMRMhImGSFCCRJEBBQlBRUmOx/9oACAEBAAE/AP3dFLsqjW2IA2QB+p5PHvUoJxdy7FU7VJ7iPcgcM6AMxRtKwVjrwT4B4Y2Hdub/ABRXb28K2tE/Q74+Nead7yZV+BHcNbDglSPodcKsp0wIOgf14mLeisyKCFAJII/ipf8A4vCrKFJBAYbH1Hj8kXWdFdpJUD+RywB+0g8z8N4dXtiQgHxlo5STuyy2qbbmXTHxhjt2SZ6I4yISuzy/17IZudWImmKoT0bvH9pkHc+DpAQxbma/bTqUE2hwEAlUO/eQjiXMARsnTUvAX/EZxgS7vtUQIAF03OjXcdSxJnbLS0kPzddbPbsFCOUFQQKBge1dBv8AEjY/JJ1m4ZpJQDfwbYB+0g8yOvXybpZ8eHm21AfTesgRuXrOpUpjzj9ELnf3luWyTe+Tek0L2ZmPkBSx3teX6lW4uTKS0v7Wou9v7huY/VDj+l24sG9K5vLff8GOv7NzEy/wl43WEneWivd3a7g2w3sRzKyGybeqyKnwRAq70AihB5/on//EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQIBAT8AR//EABQRAQAAAAAAAAAAAAAAAAAAAED/2gAIAQMBAT8AR//Z", "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==" } } } })
  break


//--Cek limit user
/*case 'ceklimit':
   if (!isGroup) return reply(mess.only.group)       
   
  checkLimit(sender)
  break

//---cek saldo user
case 'ceksaldo':
   if (!isGroup) return reply(mess.only.group)         
   
  uangkau = checkATMuser(sender)
  hasil = `〘  *ATM* 〙
╔════════════════════
╠≽️ *Name* : *${pushname}*
╠≽️ *money* : *Rp.${uangkau}.-*
╠≽️ *Number* : *${sender.split("@")[0]}*
╚════════════════════`
  reply(hasil)
  break

  */
case 'antilinkgroup':
if (!isGroup) return reply(mess.only.group)         

if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return ('Please wait')
let valueAnti= prompt('type 1 to activate and 0 to deactivate')
if (Number(valueAnti) === act) {
if (isAntiLink) return reply('Anti Group link is now activated')
antilink.push(from)
fs.writeFileSync('./datauser/antilink.json', JSON.stringify(antilink))
reply('Successfully activated anti group link in this group ✔️')
astro.sendMessage(from,`Attention to all active anti group link members. If you send a group link, you will be kicked from the group`, text)
} else if (Number(valueAnti) === deact) {
if (!isantilink) return reply('Anti group link mode has been disabled')
var ini = anti.indexOf(from)
antilink.splice(ini, 1)
fs.writeFileSync('./datauser/antilink.json', JSON.stringify(antilink))
reply('Successfully deactivate anti group link in this group ✔️')
} else {
reply('1 to activate, 0 to deactivate')
}
break
case 'firetext':
	if (args.length < 1) return reply(mess.blank)
  if (!isGroup) return reply(mess.only.group)         
  
                                        if (isLimit(sender)) return reply(ind.limitend(pusname))
					tels = body.slice(7)
					if (tels.ength > 10) return reply('The text is long, should not exceed 9 characters')
					reply(mess.wait)
					anu = await fetchJson(`https://zeksapi.herokuapp.com/api/tlight?text=${tels}&apikey=vinzapi`, {method: 'get'})
					buff = await getBuffer(anu.result)
					astro.sendMessage(from, buff, image, {quoted: mek})
                                        await limitAdd(sender)
	break
  case 'ceksaldo':
    case 'bank':
   if (!isGroup) return reply(mess.only.group)         
   
  uangkau = checkuangkauuser(sender)
  hasil = `〘  *ATM* 〙
╔════════════════════
╠≽️ *Name* : *${pushname}*
╠≽️ *money* : *Rp.${uangkau}.-*
╠≽️ *Number* : *${sender.split("@")[0]}*
╚════════════════════`
  reply(hasil)
  break
  case '3dtext':
                data = await await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${body.slice(8)}`)
                 if (!isGroup) return reply(mess.only.group)         
                 
                if (isLimit(sender)) return reply(ind.limitend(pusname))
                astro.sendMessage(from, data, image, {quoted: mek, caption: body.slice(8)})
                await limitAdd(sender)
break
					case 'slow':
					low = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					slo = await astro.downloadAndSaveMediaMessage(low)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${slo} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(slo)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						astro.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'tupai':
					pai = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					tup = await astro.downloadAndSaveMediaMessage(pai)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${tup} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(tup)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						astro.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'gemuk':
					muk = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					gem = await astro.downloadAndSaveMediaMessage(muk)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(gem)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						astro.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
				break
				case 'bass':                 
					ass = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo

					bas = await astro.downloadAndSaveMediaMessage(ass)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${bas} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(bas)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						astro.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
						fs.unlinkSync(ran)
					})
					break

//--Info bot
				case 'info':
  me = astro.user
  uptime = process.uptime()
  teks = `*‣ Bot Name* : ${me.name}
  ‣ *Bot Name* : @${me.jid.split('@')[0]}
  ‣ *Owner* : Son of Man
  ‣ *Prefix* : ${prefix}
  ‣ *Total Block Contact* : ${blocked.length}
  ‣ *The bot is active on* : ${kyun(uptime)}
  ‣ *Total User* : ${_registered.length} User
  ‣ *Total Chat* : ${totalchat.length}`
  buffer = await getBuffer(me.imgUrl)
  astro.sendMessage(from, buffer, image, {
caption: teks, contextInfo: {
  mentionedJid: [me.jid]}})
  break

//---Kecepatan respon
  case 'speed':
if (!isRegister) return reply(mess.only.userB)
const timestamp = speed();
const latensi = speed() - timestamp
astro.updatePresence(from, Presence.composing)
uptime = process.uptime()
astro.sendMessage(from, `*Bot response*\n‣ *Speed* : ${latensi.toFixed(4)} _Second_\n\n*Info bot*\n‣ *Total chat* : ${totalchat.length}\n‣ *Total User* : ${_registered.length}\n‣ *Block* : ${blocked.length}\n‣ *Online* : ${kyun(uptime)}`, text, {
  quoted: mek
})
break

//---donasi
//case 'donasi':
//astro.updatePresence(from, Presence.composing)
// if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

//hasil = `Bantu donasi agar bot bisa terus berjalan.

//اتَّقوا النَّارَ ولو بشقِّ تمرةٍ ، فمن لم يجِدْ فبكلمةٍ طيِّبةٍ
_//“stay away from the fire of hell, even if only by giving alms a date palm (a little). If you don't have it, then you can say thayyibah” [HR. Bukhari 6539, Muslim 1016]_

//*Pulsa :* _${Pulsa}_
//*Dana :* _${Dana}_
//*Etinosa :* _${Etinosa}_`,
//astro.sendMessage(from, hasil, text, {
 // quoted: mek
//})
//break

//--arti nama
case 'arti':
if (args.length < 1) return reply('*☒* Input text')
astro.updatePresence(from, Presence.composing)
 if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

teks = body.slice(6)
try {
data = await fetchJson(`https://scrap.terhambar.com/nama?n=${teks}`)
hasil = `Name : *${teks}*\n${data.result.arti}`
reply(hasil)

} catch {
  reply(mess.ferr)
}
break

//---couple pasangan
case 'couple':
astro.updatePresence(from, Presence.composing)
 if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

if (!q.includes(' & ')) return  reply('Sorry text format is wrong')
const aku = q.substring(0, q.indexOf(' &') - 0)
const kamu = q.substring(q.lastIndexOf('& ') + 1)
try {
data = await fetchJson(`https://arugaz.herokuapp.com/api/jodohku?nama=${aku}&pasangan=${kamu}`, {
  method: 'get'
})
yoi = `‣ *Name* : ${aku}
‣ *Google* : ${kamu}
‣ *Positive* : ${data.positif}
‣ *Negative* : ${data.negatif}`
astro.sendMessage(from, yoi, text, {
  quoted: mek
})

} catch {
  reply(mess.ferr)
}
break

//---Zodiak harian
case 'zodiak':
if (args.length < 1) return reply('*☒* Input zodiac')
astro.updatePresence(from, Presence.composing)
 if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

teks = body.slice(8)
try {
data = await fetchJson(`https://api.vhtear.com/zodiak?query=${teks}&apikey=${vKey}`)
hasil = `Zodiak : *${data.result.zodiak}*\n Today's Forecast : *${data.result.ramalan}*\n${data.result.inspirasi}`
reply(hasil)

} catch {
  reply(mess.ferr)
}
break

//--pencarian pinterest
  case 'img':
 if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       


if (args.length < 1) return reply('*☒* Input query')
tels = body.slice(5)
astro.updatePresence(from, Presence.composing)
reply(mess.wait)
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${tels}`, {
  method: 'get'
})
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
astro.sendMessage(from, pok, image, {
  quoted: mek, caption: `Successfully took a picture : *${tels}*`
})

} catch {
  reply(mess.ferr)
}
break

//--Pencarian pinterest
case 'pinterest':
tels = body.slice(11)
 if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       


if (args.length < 1) return reply('*☒* Input query')
astro.updatePresence(from, Presence.composing)
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${tels}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
astro.sendMessage(from, pok, image, {
  quoted: mek, caption: `Successfully took a picture : *${tels}*`
})

} catch {
  reply(mess.ferr)
}
break

case 'listonline':
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
			    let online = [...Object.keys(astro.chats.get(ido).presences), astro.user.jid]
			    astro.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join`\n`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				break



//--pinterest anime neko
case 'neko':
 if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       


astro.updatePresence(from, Presence.composing)
uk = ["anime neko"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
astro.sendMessage(from, pok, image, {
  quoted: mek, caption: `This ?`
})

} catch {
  reply(mess.ferr)
}
break

//--Pinteres anime loli
  case 'loli':
 if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       


astro.updatePresence(from, Presence.composing)
uk = ["anime loli"]
nk = uk[Math.floor(Math.random() * uk.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
astro.sendMessage(from, pok, image, {
  quoted: mek, caption: `This ?`
})

} catch {
  reply(mess.ferr)
}
break


//--Pinterest Twitter
  case 'twit':
 if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       


astro.updatePresence(from, Presence.composing)
tw = ["Twitter funny",
"Daily Twitter",
"Underestimate Twitter",
"funny tweets"]
nk = tw[Math.floor(Math.random() * tw.length)]
try {
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
astro.sendMessage(from, pok, image, {
  quoted: mek
})

} catch {
  reply(mess.ferr)
}
break

  //
  case 'anime':
 if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       


astro.updatePresence(from, Presence.composing)
am = ["anime tumblr",
  "wallpaper anime hd",
  "anime aestethic",
  "anime hd"]
nk = am[Math.floor(Math.random() * am.length)]
data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
  method: 'get'
})
reply(mess.wait)
n = JSON.parse(JSON.stringify(data));
nimek = n[Math.floor(Math.random() * n.length)];
pok = await getBuffer(nimek)
astro.sendMessage(from, pok, image, {
  quoted: mek, caption: `wow you !`
})

break

//--Pinterest wallpaper
  case 'wp':
case 'wallpaper':
   if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

  
  astro.updatePresence(from, Presence.composing)
  pw = ["wallpaper aestethic",
"wallpaper tumblr",
"funny wallpaper",
"wallpaper"]
  nk = pw[Math.floor(Math.random() * pw.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  astro.sendMessage(from, pok, image, {
quoted: mek, caption: `why not ?`
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

//--Pinterest cecan
case 'cecan':
   if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

  
  tels = body.slice(5)
  astro.updatePresence(from, Presence.composing)
  ty = ["ulzhang girl",
"beautiful girl",
"hijab girl",
"Beautiful russian girl",
"Beautiful japanese girl",
"Indonesian"]
  nk = ty[Math.floor(Math.random() * ty.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  astro.sendMessage(from, pok, image, {
quoted: mek, caption: `How ?`
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

//--Pinterest quotes
case 'quotes':
   if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

  
  tels = body.slice(5)
  astro.updatePresence(from, Presence.composing)
  qt = ["quotes ",
"quotes aestethic"]
  nk = qt[Math.floor(Math.random() * qt.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  astro.sendMessage(from, pok, image, {
quoted: mek, caption: `Poor Single`
  })
  
  } catch {
    reply(mess.ferr)
  }
  break



//--Pinterest cogan
case 'cogan':
   if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

  
  astro.updatePresence(from, Presence.composing)
  uk = ["ulzhang boy","cool guy","handsome guy","dude","Nigga"]
  nk = uk[Math.floor(Math.random() * uk.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  astro.sendMessage(from, pok, image, {
quoted: mek, caption: `wow! handsome dude`
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

//--Pinterest cyberpunk
case 'cyberpunk':
   if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

  
  astro.updatePresence(from, Presence.composing)
  co = ["anime cyberpunk","photography cyberpunk","American cyberpunk"]
  nk = co[Math.floor(Math.random() * co.length)]
  try {
  data = await fetchJson(`https://api.fdci.se/sosmed/rep.php?gambar=${nk}`, {
method: 'get'
  })
  reply(mess.wait)
  n = JSON.parse(JSON.stringify(data));
  nimek = n[Math.floor(Math.random() * n.length)];
  pok = await getBuffer(nimek)
  astro.sendMessage(from, pok, image, {
quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

case 'jadian':
   if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

  
  if (args.length < 1) return astro.sendMessage(from, `Enter the date-month-year`, text, {
quoted: mek
  })
  if (!q.includes('-')) return  reply('Enter the date-month-year correctly\n*format : 09-09-2009*')
  pc = body.slice(9)
  teks1 = pc.split("-")[0];
  teks2 = pc.split("-")[1];
  teks3 = pc.split("-")[2];
  reply(mess.wait)
  try {
  iya = await fetchJson(`http://lolhuman.herokuapp.com/api/jadian/${teks1}/${teks2}/${teks3}?apikey=${lolKey}`, {
method: 'get'
  })
  hasil = `‣ *Characteristics* : ${iya.result.karakteristik}\n‣ *Description* : ${iya.result.deskripsi}`
  astro.sendMessage(from, hasil, text, {
quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break


case 'asupan':
  
 if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

try {
data = await fetchJson(`https://api.itsmeikyxsec404.xyz/asupan?apikey=${meKey}`)
reply(mess.wait)
hasil = await getBuffer(data.result)
astro.sendMessage(from, hasil, video, {
  caption: 'Here please', quoted: mek
})

} catch {
  reply(mess.ferr)
}
break

case 'weton':
   if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

  
  if (args.length < 1) return astro.sendMessage(from, `Enter the date-month-year`, text, {
quoted: mek
  })
  if (!q.includes('-')) return  reply('Enter the date-month-year correctly\n*Format : 09-09-2009*')
  pc = body.slice(7)
  teks1 = pc.split("-")[0];
  teks2 = pc.split("-")[1];
  teks3 = pc.split("-")[2];
  reply(mess.wait)
  try {
  iya = await fetchJson(`http://lolhuman.herokuapp.com/api/weton/${teks1}/${teks2}/${teks3}?apikey=${lolKey}`, {
method: 'get'
  })
  hasil = `${iya.result.weton}\n\ncharacteristics: ${iya.result.karakter}\n Question: ${iya.result.pekerjaan}\n Fortune : ${iya.result.rejeki}\nMatch : ${iya.result.jodoh}`
  reply(hasil)

  break }
  
  catch {
    reply(mess.ferr)
  }
  break

case 'seberapagay':
   if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

  
  if (args.length < 1) return astro.sendMessage(from, '*☒* Enter Question', text, {
quoted: mek
  })
  teks = body.slice(13)
  try{
  astro.updatePresence(from, Presence.composing)
  data = await fetchJson(`https://arugaz.herokuapp.com/api/howgay`)
  hasil = `*Gay Detected*\n‣ Target : *${args[0]}*\n‣ Percentage : *${data.persen}%*\n*${data.desc}*`
  reply(hasil)
}
  catch {
  reply(mess.ferr)
  }
  break

case 'seberapabucin':
   if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

  
  if (args.length < 1) return astro.sendMessage(from, '*☒* Enter target name', text, {
quoted: mek
  })
  teks = body.slice(15)
  try {
  astro.updatePresence(from, Presence.composing)
  data = await fetchJson(`https://arugaz.herokuapp.com/api/howbucins`)
  hasil = `*Status Detected*\n‣ Target : *${args[0]}*\n‣ Percentage : *${data.persen}%*\n*${data.desc}*`
  reply(hasil)
  
  } catch {
    reply(mess.ferr)
  }
  break

//--searching lirik
case 'lirik':
  if (args.length < 1) return reply('Enter query')
   if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

  
  astro.updatePresence(from, Presence.composing)
  tels = body.slice(7)
  try {
  anu = await fetchJson(`http://scrap.terhambar.com/lirik?word=${tels}`, {
method: 'get'
  })
  reply(anu.result.lirik)
  
  } catch {
    reply(mess.ferr)
  }
  break

case 'namae':
  if (args.length < 1) return reply('*☒* Input Name')
astro.updatePresence(from, Presence.composing)
 if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       


teks = body.slice(7) 
try {
data = await fetchJson(`https://api.terhambar.com/ninja?nama=${teks}`)
hasil = `*Your Ninja*\n*${data.result.ninja}*`
reply(hasil)

} catch {
  reply(mess.ferr)
}
break

case 'alay':
  if (args.length < 1) return reply('*☒* Enter text')
astro.updatePresence(from, Presence.composing)
 if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       


teks = body.slice(6)
try {
data = await fetchJson(`https://api.terhambar.com/bpk?kata=${teks}`)
reply(data.text)

} catch {
  reply(mess.ferr)
}
break


case 'gplaystore':
astro.updatePresence(from, Presence.composing)
 if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       


goo = body.slice(12)
try {
data = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=${viKey}&q=${goo}`, {
method: 'get'
  })

teks = '*Google Play Store*\n\n'
				for (let i of data.result) {
					teks += `        ────────────────\n\n‣ *Name* : ${i.title}\n‣ *Developer* : ${i.developer}\n‣ *Rating* : ${i.rating}\n‣ *Link* : ${i.url}\n\n`
				}
				teks += `        ────────────────`
reply(teks.trim())

} catch {
  reply(mess.ferr)
}

break
case 'bijak':
astro.updatePresence(from, Presence.composing)
 if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       


try {
data = await fetchJson(`http://lolhuman.herokuapp.com/api/random/katabijak?apikey=${lolKey}`)
reply(data.result)

} catch {
  reply(mess.ferr)
}
break

case 'pantun':

astro.updatePresence(from, Presence.composing)
 if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       


try {
data = await fetchJson(`http://lolhuman.herokuapp.com/api/random/pantun?apikey=${lolKey}`)
reply(data.result)

} catch {
  reply(mess.ferr)
}
break

case 'bucin':
case 'gombal':

  astro.updatePresence(from, Presence.composing)
   if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

  
  try {
  data = await fetchJson(`http://lolhuman.herokuapp.com/api/random/bucin?apikey=${lolKey}`)
  reply(data.result)
  
  } catch {
    reply(mess.ferr)
  }
  break

case 'charnime':
  teks = body.slice(10)
  astro.updatePresence(from, Presence.composing)
   if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

  
  if (args.length < 1) return reply('*☒* Enter name of anime character')
  try {
  data = await fetchJson(`http://lolhuman.herokuapp.com/api/character?apikey=${lolKey}&query=${teks}`)
  buf = await getBuffer(data.result.image.large)
  hasil = `‣ *Name* : ${data.result.name.full} *(${data.result.name.native})*\n‣ *Description* : ${data.result.description}`
  astro.sendMessage(from, buf, image, {
caption: hasil, quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

case 'textgen':
  teks = body.slice(9)
  if (args.length < 1) return reply('*☒* Enter text')
  astro.updatePresence(from, Presence.composing)
   if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

  
  try {
  data = await fetchJson(`https://api.arugaz.my.id/api/random/text/fancytext?text=${teks}`)
  reply(data.result)
  
  } catch {
    reply(mess.ferr)
  }
  break


case 'kusonime':
  teks = body.slice(6)
  astro.updatePresence(from, Presence.composing)
   if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

  
  if (args.length < 1) return reply('*☒* Enter the name of the name')
  try {
  data = await fetchJson(`https://st4rz.herokuapp.com/api/kuso?q=${teks}`)
  hasil = `‣ *title* : ${data.title}\n‣ *Info* : ${data.info}\n‣ *Synopsis* : ${data.sinopsis}\n‣ *Link download* :\n${data.link_dl}`
  buf = await getBuffer(data.thumb)
  astro.sendMessage(from, buf, image, {
quoted: mek, caption: hasil
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

case 'igstalk':
yolo = body.slice(9)
 if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       


if (args.length < 1) return reply('*☒* Enter username')
try {
hmm = await fetchJson(`http://lolhuman.herokuapp.com/api/stalkig/${yolo}?apikey=${lolKey}`)
reply(mess.wait)
buffer = await getBuffer(hmm.result.photo_profile)
hasil = `‣ *Username* : ${hmm.result.username}\n‣ *Fullname* : ${hmm.result.fullname}\n‣ *Pengikut* : ${hmm.result.followers}\n‣ *Mengikuti* : ${hmm.result.following}\n‣ *Bio* : ${hmm.result.bio}\n‣ *Link* : https://www.instagram.com/${hmm.result.username}\n‣ Follow : ${Ig}`
astro.sendMessage(from, buffer, image, {
  quoted: mek, caption: hasil
})

} catch {
  reply(mess.ferr)
}
break


case 'apakah':
  if (args.length < 1) return reply('*☒* Enter Question')
  astro.updatePresence(from, Presence.composing)
  random = apakah[Math.floor(Math.random() * (apakah.length))]
  hasil = `is : *${body.slice(8)}*\n\nAnswer : *${random}*`
  reply(hasil)
  break

//bisakah
case 'bisakah':
  if (args.length < 1) return reply('*☒* Enter a Question')
  astro.updatePresence(from, Presence.composing)
   if (!isGroup) return reply(mess.only.group)                               
   
  random = bisakah[Math.floor(Math.random() * (bisakah.length))]
  hasil = `when : *${body.slice(9)}*\n\nQuestion : *${random}*`
  reply(hasil)
  break

case 'rate':
  if (args.length < 1) return reply('*☒* Enter Question')
  astro.updatePresence(from, Presence.composing)
   if (!isGroup) return reply(mess.only.group)      
   
  random = `${Math.floor(Math.random() * 100)}`
  hasil = `Rating : *${body.slice(6)}*\n\nQuestion : *${random}%*`
  reply(hasil)
  break

case 'kapankah':
  if (args.length < 1) return reply('*☒* Enter Question')
  astro.updatePresence(from, Presence.composing)
   if (!isGroup) return reply(mess.only.group)                             
   
  random = kapankah[Math.floor(Math.random() * (kapankah.length))]
  random2 = `${Math.floor(Math.random() * 8)}`
  hasil = `Can : *${body.slice(10)}*\n\nAnswer : *${random2} ${random}*`
  reply(hasil)
  break

case 'kapan':
  if (args.length < 1) return reply('*☒* Enter Question')
  astro.updatePresence(from, Presence.composing)
   if (!isGroup) return reply(mess.only.group)       
   
  random = kapankah[Math.floor(Math.random() * (kapankah.length))]
  random2 = `${Math.floor(Math.random() * 8)}`
  hasil = `When : *${body.slice(7)}*\n\nAnswer : *${random2} ${random}*`
  reply(hasil)
  break

case 'setppgc':
 if (!isGroup) return reply(mess.only.group)         
 
 if (!isGroup) return reply(mess.only.group)       
 
 if (!isGroupAdmins) return reply(mess.only.admin)
 if (!isBotGroupAdmins) return reply(mess.only.Badmin)
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
reply(mess.wait)
const media = await astro.downloadAndSaveMediaMessage(encmedia)
await astro.updateProfilePicture (from, media)
reply('*☉* Change the group profile photo')
break

case 'triggered':
					case 'ger':
 if (!isRegister) return reply(mess.only.userB)
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           reply(mess.wait)
         owgi = await astro.downloadAndSaveMediaMessage(ger)
           anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
        teks = `${anu.display_url}`
         ranp = getRandom('.gif')
        rano = getRandom('.webp')
        anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
       exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
                                                fs.unlinkSync(ranp)
                                                if (err) return reply(mess.error.stick)
                                                nobg = fs.readFileSync(rano)
                                                astro.sendMessage(from, nobg, sticker, {quoted: mek})
                                                fs.unlinkSync(rano)
                                        })
                                    
                                             } else {
                                                 reply('Use a photo!')
                                          }
                                             break


case 'tourl':
 if (!isRegister) return reply(mess.only.userB)
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           reply(mess.wait)
         owgi = await astro.downloadAndSaveMediaMessage(ger)
           anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
        teks = `${anu.display_url}`
reply(teks)
}
break

//---stiker wasted
case 'wasted':
  case 'was':
if (!isRegister) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await astro.downloadAndSaveMediaMessage(ger)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  teks = `${anu.display_url}`
  ranp = getRandom('.gif')
  rano = getRandom('.webp')
  anu1 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
  exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
nobg = fs.readFileSync(rano)
astro.sendMessage(from, nobg, sticker, {
  quoted: mek
})
fs.unlinkSync(rano)
  })

} else {
  reply('Use a photo!')
}
break

case 'drawing':
if (!isRegister) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await astro.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehe = await getBuffer(`https://videfikri.com/api/textmaker/pencil/?urlgbr=${anu.display_url}`)
 astro.sendMessage(from, hehe, image, {quoted:mek})
} else {
  reply('Dont add anything to the command')
}
break


case 'wanted':
if (!isRegister) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await astro.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehe = await getBuffer(`https://videfikri.com/api/textmaker/wanted/?urlgbr=${anu.display_url}&text1=Dicari&text2=${tels}`)
 astro.sendMessage(from, hehe, image, {quoted:mek})
} else {
  reply('Dont add anything to the command')
}
break

case 'gtav':
if (!isRegister) return reply(mess.only.userB)
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
  ted = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: mek
  reply(mess.wait)
  owgi = await astro.downloadAndSaveMediaMessage(ted)
  tels = body.slice(7)
  anu = await imgbb("08579d070df9a07cb1c2ee565aece767", owgi)
  hehe = await getBuffer(`https://videfikri.com/api/textmaker/gtavposter/?urlgbr=${anu.display_url}`)
 astro.sendMessage(from, hehe, image, {quoted:mek})
} else {
  reply('Dont add anything to the command')
}
break

//--list kodebahasa
case 'kodebahasa':
astro.sendMessage(from, bahasa(prefix, sender), text, {
  quoted: mek
})
break

//--list kode negara
case 'kodenegara':
astro.sendMessage(from, negara(prefix, sender), text, {
  quoted: mek
})
break

//--link wame
case 'wa.me':
case 'wame':
  astro.updatePresence(from, Presence.composing)
  options = {
text: `Link WhatsApp-Mu : *wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*api.whatsapp.com/send?phone=${sender.split("@")[0]}*`,
contextInfo: {
  mentionedJid: [sender]
}
  }
  astro.sendMessage(from, options, text, {
quoted: mek
  })
  break

//---quoted fuck my life
case 'fml':
   if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

  
  try {
data = await fetchJson(`https://api.zeks.xyz/api/fml`)
 if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

hasil = data.result
reply(hasil)

} catch {
  reply(mess.ferr)
}
break

//--translate semua bahasa
  case 'tl':
     if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

  
if (args.length < 1) return astro.sendMessage(from, '*☒* Enter text/code language', text, {
  quoted: mek
})
var pc = body.slice(4)
nomor = pc.split("/")[0];
pesan = pc.split("/")[1];
try {
data = await fetchJson(`https://api-translate.azharimm.tk/translate?engine=google&text=${nomor}&to=${pesan}`)
 if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

hasil = `*Translate* :\n${data.data.result}`
reply(hasil)

} catch {
  reply(mess.ferr)
}
break

//---membalikan kalimat
  case 'reverse':
     if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

  
if (args.length < 1) return astro.sendMessage(from, '*☒* Enter Text', text, {
  quoted: mek
})
var pc = body.slice(9)
try {
data = await fetchJson(`https://videfikri.com/api/hurufterbalik/?query=${pc}`)
 if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

hasil = data.result.kata
reply(hasil)

} catch {
  reply(mess.ferr)
}
break



//--fake reply
case 'fitnah':
if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
var gh = body.slice(7)
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
var replace = gh.split("|")[0];
var target = gh.split("|")[1];
var bot = gh.split("|")[2];
astro.sendMessage(from, `${bot}`, text, {
  quoted: {
key: {
  fromMe: false, participant: `${mentioned}`, ...(from ? {
remoteJid: from
  }: {})
}, message: {
  conversation: `${target}`
}}})
break

//--Kejujuran
case 'truth':
const ttrth = trut[Math.floor(Math.random() * trut.length)]
astro.sendMessage(from, `‣ *TRUTH*\n${ttrth}`, text, {
  quoted: mek
})
break

//---Tantangan
  case 'dare':
const der = dare[Math.floor(Math.random() * dare.length)]
astro.sendMessage(from, `‣ *DARE*\n${der}`, text, {
  quoted: mek
})
break


//--notifikasi grup
  case 'notif':

if (!isGroupAdmins) return reply(mess.only.admin)
astro.updatePresence(from, Presence.composing)
if (!isGroup) return reply(mess.only.group)         

if (!isGroup) return reply(mess.only.group)    
teks = `Notification form @${sender.split("@")[0]}\n*Message : ${body.slice(7)}*`
group = await astro.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: mek
}
await astro.sendMessage(from, options, text)
break

//--jawaban BRANLy
  case 'brainly':
 if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

  
if (args.length < 1) return astro.sendMessage(from, '*☒* Enter Question', text, {
  quoted: mek
})
teks = body.slice(9)
try {
astro.updatePresence(from, Presence.composing)
data = await fetchJson(`https://api.vhtear.com/branly?query=${teks}&apikey=${vKey}`)
hasil = data.result.data
reply(hasil)
} catch {
  reply(mess.ferr)
}
break

  //pencarian wiki
  case 'wiki':
     if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       


if (args.length < 1) return reply('Enter query')
tels = body.slice(6)
try {
anu = await fetchJson(`https://tobz-api.herokuapp.com/api/wiki?q=${tels}&apikey=BotWeA`, {
  method: 'get'
})
reply(anu.result)

} catch {
  reply(mess.ferr)
}
break


//--Goolge Image

case 'google':
   if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       


  if (args.length < 1) return reply('*☒* Enter text')
  goo = body.slice(7)
  try {
  pint = await getBuffer(`http://lolhuman.herokuapp.com/api/gimage?apikey=${lolKey}&query=${goo}`, {
method: 'get'
  })
  astro.updatePresence(from, Presence.composing)
  reply(mess.wait)
  astro.sendMessage(from, pint, image, {
caption: '*Google Image*\n\n*Search result : '+goo+'*', quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

case 'alay2':
  if (!isRegister) return reply(mess.only.userB)
  if (args.length < 1) return reply('*☒* Enter text')
  goo = body.slice(7)
  try { 
  pint = await fetchJson(`http://lolhuman.herokuapp.com/api/upperlower?apikey=${lolKey}&text=${goo}`, {
method: 'get'
  })
  astro.updatePresence(from, Presence.composing)
  hasil = pint.result
  astro.sendMessage(from, hasil, text, {
quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

//---Neonime search
case 'neonime':
 if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       


astro.updatePresence(from, Presence.composing)
reply(mess.wait)
if (args.length < 1) return reply(`*☒* Enter title of anime`)
teks = body.slice(9)
try {
data = await fetchJson(`https://api.zeks.xyz/api/neonimesearch?q=${teks}&apikey=${viKey}`, {
  method: 'get'
})
teks = '••••••••••••••••••••••\n'
for (let i of data.result) {
  teks += `‣ *Title* : ${i.title}\n‣ *link* : ${i.link}\n••••••••••••••••••••••\n`
}
reply(teks.trim())
if (data.message) return reply(`Sorry anime info *${teks} not found`)

} catch {
  reply(mess.ferr)
}
break

//---Ganti nama grup
  case 'setname':
if (!isGroup) return reply(mess.only.group)         

if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
let idgrup = `${from.split("@s.whatsapp.net")[0]}`;
astro.groupUpdateSubject(idgrup, `${body.slice(9)}`)
astro.sendMessage(from, '*☉* Renaming the group', text, {
  quoted: mek
})
break

//--ganti desk
  case 'setdesk':
if (!isGroup) return reply(mess.only.group)         

if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
astro.groupUpdateDescription(from, `${body.slice(9)}`)
astro.sendMessage(from, '*☉* Change the description', text, {
  quoted: mek
})
break



//--random meme
case 'meme':
  astro.updatePresence(from, Presence.composing)
   if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       


try {
  beh = await fetchJson(`https://api.zeks.xyz/api/memeindo?apikey=${viKey}`)
  pint = await getBuffer(beh.result)
  reply(mess.wait)
  astro.sendMessage(from, pint, image, {
quoted: mek
  })
  
} catch {
  reply(mess.ferr)
}
  break

//--tagme
case 'tagme':
 if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

const tagme = {
  text: `@${sender.split("@")[0]} Hi bro`,
  contextInfo: {
mentionedJid: [sender]
  }
}
astro.sendMessage(from, tagme, text)
break

case 'kbbi':
  astro.updatePresence(from, Presence.composing)
  if (args.length < 1) return reply(`*☒* Enter text\nExample : ${prefix}kbbi manusia`)
   if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

  
  tels = body.slice(6)
  try {
  data = await fetchJson(`https://tobz-api.herokuapp.com/api/kbbi?kata=${tels}&apikey=BotWeA`)
  if (data.error) return reply(data.error)
  hasil = `INDONESIA DICTIONARY\n\n${data.result}`
  reply(hasil)
  
  } catch {
    reply(mess.ferr)
  }
  break


  case 'chatprank':
astro.updatePresence(from, Presence.composing)
 if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       


if (args.length < 1) return reply(`*☒* Enter Text\nExample : ${prefix}chatprank p/unten`)
tels = body.slice(11)
var teks1 = tels.split("/")[0];
var teks2 = tels.split("/")[1];
hasil = `${teks1}͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${teks2}`
astro.sendMessage(from, hasil, text, {
  quoted: mek
})
break

//--searching chord
case 'chord':
  if (args.length < 1) return reply('Enter query')
   if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

  
  astro.updatePresence(from, Presence.composing)
  tels = body.slice(7)
  try {
  anu = await fetchJson(`https://tobz-api.herokuapp.com/api/chord?q=${tels}&apikey=${tKey}`, {
method: 'get'
  })
  reply(anu.result)
  
  } catch {
    reply(mess.ferr)
  }
  break

//--jadwaltv now
case 'jadwaltvnow':
   if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

    
  astro.updatePresence(from, Presence.composing)
  reply(mess.wait)
  try {
  anu = await fetchJson(`http://api-melodicxt-2.herokuapp.com/api/jadwaltvnow?&apiKey=administrator`, {
method: 'get'
  })
  reply(anu.result.jadwalTV)
  
  } catch {
    reply(mess.ferr)
  }
  break

//--jadwaltv ch
case 'jadwaltv':
   if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

  
  ch = body.slice(10)
  if (args.length < 1) return reply('*☒* Enter name of channel ')
  astro.updatePresence(from, Presence.composing)
  reply(mess.wait)
  try {
  anu = await fetchJson(`https://mhankbarbar.tech/api/jdtv?ch=${ch}&apiKey=${BarBarKey}`, {
method: 'get'
  })
  n = JSON.parse(JSON.stringify(anu.result));
  hasil = `*Jadwal Tv* : ${ch} hari ini\n${n}`
  reply(hasil)
  
  } catch {
    reply(mess.ferr)
  }
  break

//--mini map
case 'map':
   if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

  
  if (args.length < 1) return reply('*☒* Enter name area')
  daerah = body.slice(5)
  try {
  data = await fetchJson(`https://mnazria.herokuapp.com/api/maps?search=${daerah}`)
  reply(mess.wait)
  hasil = await getBuffer(data.gambar)
  astro.sendMessage(from, hasil, image, {
quoted: mek, caption: `Results of *${daerah}*`
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

//--pencarian surah Al-Qur'an
case 'alquran':
  astro.updatePresence(from, Presence.composing)
   if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

  
  if (args.length < 1) return reply('*☒* Masukan nomor surah 1-114')
  if (isNaN(args.length < 1)) return await reply('Gunakan nomor surah')
  tels = body.slice(9)
  try {
  data = await fetchJson(`https://api.zeks.xyz/api/quran?no=${tels}&apikey=${viKey}`, {
method: 'get'
  })
  teks = `
  〘  *${data.surah}*  〙
  Adalah surah ke ${data.no} dalam Al-Qur'an dengan jumlah ayat (${data.jumlah_ayat} ayat)
  ──────────────────────

  `
  for (let i of data.ayat) {
teks += `*(${i.number})* ${i.text}\n*(${i.number})* ${i.translation_id}\n••••••••••••••••••••••••••••••••••••••••••••••\n`
  }
  reply(teks.trim())
  
  } catch {
    reply(mess.ferr)
  }
  break

//--Cerpen
case 'cerpen':
 if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

astro.updatePresence(from, Presence.composing)

try {
data = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`)
hasil = `*SHORT STORY*\n‣ Title : *${data.result.title}*\n‣ Author : *${data.result.pengarang}}*\n${data.result.cerpen}`
reply(hasil)

} catch {
  reply(mess.ferr)
}
break

//---kontak pemilik bot
case 'owner':
  case 'creator':
astro.sendMessage(from, {
  displayname: "astro", vcard: vcard
}, MessageType.contact, {
  quoted: mek
})
break


//---Random ayat Alquran
case 'ngaji':
   if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

  
  try {
  anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {
method: 'get'
  })
  quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`
  astro.sendMessage(from, quran, text, {
quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

//--tafsir Alquran
case 'tafsir':
   if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

  
  if (args.length < 1) return reply('Masukan query')
  teks = body.slice(8)
  try {
  astro.updatePresence(from, Presence.composing)
  data = await fetchJson(`http://api-melodicxt-2.herokuapp.com/api/tafsir-quran?query=${teks}&apiKey=${Mkey}`)
  hasil = `*${data.result.query}*\n\n${data.result.ayat}\n\n*Terjemahan* :\n${data.result.terjemahan_ayat}\n\n*Tafsir* : ${data.result.tafsir_jalalayn}`
  reply(hasil)
  
  } catch {
    reply(mess.ferr)
  }
  break

//---Jadwal solat
case 'sholat':
  loc = body.slice(7)
   if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

  
  if (args.length < 1) return reply('Enter name of area')
  try {
  anu = await fetchJson(`https://mhankbarbar.tech/api/jadwalshalat?daerah=${loc}&apiKey=${BarBarKey}`, {
method: 'get'
  })
  mbteks = `*SHALAT*\area : ${loc}\n‣ *Ashar* : ${anu.Ashar}\n‣ *Dhuha* : ${anu.Dhuha}\n‣ *Dzuhur* : ${anu.Dzuhur}\n‣ *Imsyak* : ${anu.Imsyak}\n‣ *Isya* : ${anu.Isya}\n‣ *Maghrib* : ${anu.Maghrib}\n‣ *Subuh* : ${anu.Subuh}`
  astro.sendMessage(from, mbteks, text, {
quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

//--info cuaca
case 'cuaca':
   if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

  
  if (args.length < 1) return reply('Enter name of area')
  tels = body.slice(7)
  try {
  anu = await fetchJson(`https://freerestapi.herokuapp.com/api/v1/cuaca?p=${tels}`, {
method: 'get'
  })
  hasil = `‣ *The place* : ${anu.hasil.Nama}\n‣ *weather* : ${anu.hasil.Cuaca}\n‣ *Wind* : ${anu.hasil.Angin}\n‣ *Temperature* : ${anu.hasil.Suhu}\n‣ *Humidity* : ${anu.hasil.Kelembaban}\n‣ *Description* : ${anu.hasil.Keterangan}`
  astro.sendMessage(from, hasil, text, {
quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

//--info gempa
//informasi gempa terkini
case 'infogempa':
   if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

  
  astro.updatePresence(from, Presence.composing)
  try {
  anu = await fetchJson(`https://docs-jojo.herokuapp.com/api/infogempa`, {
method: 'get'
  })
  hasil = `‣ *Depth* : ${anu.kedalaman}\n‣ *coordinate* : ${anu.koordinat}\n‣ *Location* : ${anu.lokasi}\n‣ *Magnitude* : ${anu.magnitude}\n‣ *Potential* : ${anu.potensi}\n‣ *Time* : ${anu.waktu}`
  buffer = await getBuffer(anu.map)
  astro.sendMessage(from, buffer, image, {
caption: hasil, quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

//---Buy limit
/*case 'buylimit':
  if (args.length < 1) return reply(`Berapa limit yang mau di beli? Pastikan saldo ATM cukup juga! \n\nCara cek saldo : ${prefix}Ceksaldo`)
   if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

  payout = body.slice(10)
  const koinPerlimit = hargalimit
  const total = koinPerlimit * payout
  if (checkATMuser(sender) <= total) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
  if (checkATMuser(sender) >= total) {
confirmATM(sender, total)
bayarLimit(sender, payout)
await reply(`〘  *NOTA PEMBAYARAN*  〙\n\n‣ *Pengirim* : Admin\n‣ *Penerima* : ${pushname}\n‣ *Nominal pembelian* : ${body.slice(10)} \n‣ *Harga limit* : ${koinPerlimit}/limit\n‣ *Sisa saldo* : ${checkATMuser(sender)}\n\nProses berhasil dengan nomer pembayaran \n${createSerial(15)}`)
  }
  break

//--transfer
case 'transfer':
  if (!isGroup) return reply(mess.only.group)         
   if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

  if (args.length < 1) return reply(`Silahkan ulangi dengan
*${prefix}Transfer Tag target|Jumlah transfer*`)
  if (!q.includes('|')) return  reply('Maaf format teks salah')
  const tujuan = q.substring(0, q.indexOf('|') - 1)
  const jumlah = q.substring(q.lastIndexOf('|') + 1)
  if (isNaN(jumlah)) return await reply('Jangan tambahan tanda apapun !')
  if (jumlah < 5000) return reply(`minimal transfer Rp.5000`)

  if (checkATMuser(sender) <= jumlah) return reply(`Maaf uang kamu belum mencukupi. silahkan kumpulkan dan transfer lagi nanti`)
  if (checkATMuser(sender) >= jumlah) {
const tujuantf = `${tujuan.replace("", '')}@s.whatsapp.net`
fee = 0.005 *  jumlah
hasiltf = jumlah - fee
addKoinUser(tujuantf, hasiltf)
confirmATM(sender, jumlah)
addKoinUser('6282223014661@s.whatsapp.net', fee)
await reply(`〘  *TRANSFER*  〙
  Pengiriman saldo telah sukses
  ‣ *Dari* : ${sender.split("@")[0]}
  ‣ *Ke* : ${tujuan}
  ‣ *Jumlah transfer* : Rp.${jumlah},-
  ‣ *Biaya admin* : Rp.${fee},-`)
  }
  
  break
*/
case 'itsme':
   if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

  try {
ppimg = await astro.getProfilePicture(`${sender.split('@')[0]}@c.us`)
  } catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  }
  teks = `‣ *Name* : ${pushname}
  ‣ *Number* : ${sender.split("@")[0]}
  ‣ *Link* : wa.me/${sender.split("@")[0]}`
  its = await getBuffer (ppimg)
  astro.sendMessage(from, its, image, {
quoted: mek, caption: teks
  })
  
  break

case 'play':
   if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

  
  if (args.length < 1) return reply('Enter Song title')
  reply(mess.wait)
  play = body.slice(6)
  try {
  anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${play}&apikey=apivinz`)
  if (anu.error) return reply(anu.error)
  infomp3 = `*Audio Found*\n‣ *Title* : ${anu.result.title}\n‣ *Source* : ${anu.result.source}\n‣ *Size* : ${anu.result.size}\n\n_Sending files please wait if the audio does not appear download itself here_\n‣ *Link* : ${anu.result.url_audio}
  `
  buffer = await getBuffer(anu.result.thumbnail)
  lagu = await getBuffer(anu.result.url_audio)
  astro.sendMessage(from, buffer, image, {
quoted: mek, caption: infomp3
  })
  astro.sendMessage(from, lagu, audio, {
mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break


case 'ytmp3':
   if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

  
  reply(mess.wait)
  play = body.slice(7)
  if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Incorrect link format, use youtube link')
  try {
  anu = await fetchJson(`https://api.zeks.xyz/api/ytmp3/2?url=${play}&apikey=${viKey}`)
  infomp3 = `*Audio Found!!!*\n‣ Title : ${anu.result.title}\n‣ Source : ${anu.result.source}\n‣ size : ${anu.result.size}\n\n_Sending files please wait_\n\n_If the video doesn't appear download it yourself using the link below_\n‣ *link* : ${anu.result.link}`
  buffer = await getBuffer(anu.result.thumb)
  lagu = await getBuffer(anu.result.link)
  astro.sendMessage(from, buffer, image, {
quoted: mek, caption: infomp3
  })
  astro.sendMessage(from, lagu, audio, {
mimetype: 'audio/mp4', filename: `${anu.result.title}.mp3`, quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

case 'ytmp4':
   if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

  
  reply(mess.wait)
  play = body.slice(7)
  try {
  anu = await fetchJson(`https://api.zeks.xyz/api/ytmp4?url=${play}&apikey=${viKey}`)
  if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Incorrect link format, use youtube link')
  if (anu.error) return reply(anu.error)
  infomp3 = `*Video Found*\n‣ *Title* : ${anu.result.title}\n‣ *Source* : ${anu.result.source}\n‣ *Size* : ${anu.result.size}\n\n_Sending files please wait_\n\n_If the video doesn't appear download it yourself using the link below_\n‣ *link* : ${anu.result.url_video}`
  buffer = await getBuffer(anu.result.thumbnail)
  lagu = await getBuffer(anu.result.url_video)
  astro.sendMessage(from, buffer, image, {
quoted: mek, caption: infomp3
  })
  astro.sendMessage(from, lagu, video, {
mimetype: 'video/mp4', filename: `${anu.result.title}.mp4`, quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break


//---Youtube search
				case 'ytsearch':
					if (args.length < 1) return reply('Enter query')
					try {
					anu = await fetchJson(`https://mhankbarbar.tech/api/ytsearch?q=${body.slice(10)}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					teks = '=================\n'
					for (let i of anu.result) {
						teks += `*Title* : ${i.title}\n*Id* : ${i.id}\n*Published* : ${i.publishTime}\n*Duration* : ${i.duration}\n*Views* : ${h2k(i.views)}\n=================\n`
					}
					reply(teks.trim())
					
					} catch {
					  reply(mess.ferr)
					}
					break

//--download pinterest
case 'pin':
   if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

  
    if(!isUrl(args[0]) && !args[0].includes('pin')) return reply('Format link salah, gunakan link pinterest')
  reply(mess.wait)
  play = body.slice(5)
  try {
  anu = await fetchJson(`https://scrap.terhambar.com/pin?url=${play}`)
  if (anu.error) return reply(anu.error)
  n = JSON.parse(JSON.stringify(anu.result.data));
  lagu = await getBuffer(anu.result)
  astro.sendMessage(from, lagu, video, {
mimetype: 'video/mp4', filename: `${anu.result}.mp4`, quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

case 'fb':
   if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

  
  reply(mess.wait)
  if(!isUrl(args[0]) && !args[0].includes('facebook')) return reply('Incorrect link format, use Facebook link')
  play = body.slice(4)
  try {
  anu = await fetchJson(`https://mhankbarbar.tech/api/epbe?url=${play}&apiKey=${BarbarKey}`)
  if (anu.error) return reply(anu.error)
  infomp3 = `*Video Found*\n‣ *Title* : ${anu.title}\n‣ *Published* : ${anu.published}\n‣ *size* : ${anu.filesize}\n\n_Sending files please wait_\n\n_If the video doesn't appear download it yourself using the link below_\n‣ *link* : ${anu.result}`
  lagu = await getBuffer(anu.result)
  astro.sendMessage(from, lagu, video, {
mimetype: 'video/mp4', filename: `${anu.result.title}.mp4`, quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

case 'ig':
   if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

  
  reply(mess.wait)
    if(!isUrl(args[0]) && !args[0].includes('instagram')) return reply('Incorrect link format, use Instagram link')
  play = body.slice(4)
  try {
  anu = await fetchJson(`http://lolhuman.herokuapp.com/api/instagram?apikey=${lolKey}&url=${play}`)
  lagu = await getBuffer(anu.result)
  astro.sendMessage(from, lagu, video, {
mimetype: 'video/mp4', filename: `Imlexa.mp4`, quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break


//joox download
case 'joox':
   if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

  
  if (args.length < 1) return reply('Enter Music Title')
  tels = body.slice(6)
  try {
  data = await fetchJson(`https://tobz-api.herokuapp.com/api/joox?q=${tels}&apikey=BotWeA`, {
method: 'get'
  })
  infomp3 = `*Song Found!!!*\nTitle : ${data.result.judul}\nAlbum : ${data.result.album}\n Published: ${data.result.dipublikasi}`
  buffer = await getBuffer(data.result.thumb)
  lagu = await getBuffer(data.result.mp3)
  astro.sendMessage(from, buffer, image, {
quoted: mek, caption: infomp3
  })
  astro.sendMessage(from, lagu, audio, {
mimetype: 'audio/mp4', filename: `${data.result.title}.mp3`, quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

case 'scdl':
     if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

  
  if (args.length < 1) return reply('Enter soundcloud link')
  tels = body.slice(6)
  try {
  data = await fetchJson(`http://lolhuman.herokuapp.com/api/soundcloud?apikey=${lolKey}&url=${tels}`, {
method: 'get'
  })
  lagu = await getBuffer(data.result)
  astro.sendMessage(from, lagu, audio, {
mimetype: 'audio/mp4', filename: `${data.title}.mp3`, quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

case 'tik':
  if (args.length < 1) return reply('*☒* Enter link')
   if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

  
  if (!isUrl(args[0]) && !args[0].includes('vt.tiktok')) return reply(mess.error.Iv)
  try {
  anu = await fetchJson(`https://api.arugaz.my.id/api/media/tiktok?url=${args[0]}`, {
method: 'get'
  })
  if (anu.error) return reply(anu.error)
  teks = `*Name* : ${anu.result.nameInfo}\n*Caption* : ${anu.result.textInfo}\n\n_Sending files please wait_`
  thumb = await getBuffer(anu.result.image)
  astro.sendMessage(from, thumb, image, {
quoted: mek, caption: teks
  })
  buffer = await getBuffer(anu.result.mp4direct)
  astro.sendMessage(from, buffer, video, {
mimetype: 'video/mp4', filename: `${anu.nameInfo}.mp4`, quoted: mek
  })
  
  } catch {
    reply(mess.ferr)
  }
  break

/*

				case 'tiktok':
				  case 'tik':
					if (args.length < 1) return reply('Urlnya mana um?')
					if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/tiktok?url=${args[0]}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buffer = await getBuffer(anu.result)
					astro.sendMessage(from, buffer, video, {quoted: mek})
					break
*/

//--block user
				case 'blocklist':
					teks = 'This is list of blocked numbers :\n'
					for (let block of blocked) {
						teks += `~> @${block.split('@')[0]}\n`
					}
					teks += `Total : ${blocked.length}`
					astro.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": blocked}})
					break

//--read text on image
				case 'ocr':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await astro.downloadAndSaveMediaMessage(encmedia)
						reply(mess.wait)
						await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							.catch(err => {
								reply(err.message)
								fs.unlinkSync(media)
							})
					} else {
						reply('Just an image, please')
					}
					break

//---textpro
				case 'textpro':
					if (args.length < 1) {
						return reply('Choose the theme, 1 - 162')
					} else if (args[0].toLowerCase() === 'list') {
						teks = await fetchText('https://mhankbarbar.tech/api/textpro/listtheme')
						teks = teks.replace(/<br>/g, '\n')
						return reply(teks)
					} else if (args.length < 2) {
						return reply('The text too, please')
					}
					reply(mess.wait)
					anu = `https://mhankbarbar.tech/api/textpro?pack=${args[0]}&text=${body.slice(1+args[0].length+1)}&apiKey=${BarBarKey}`
					voss = await fetc(anu)	
					ftype = require('file-type')	
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
						astro.sendMessage(from, await getBuffer(anu), image, { caption: mess.success, quoted: mek })
					} else {
						reply('An error occurred, please choose another theme')
					}
					break

//ephoto
				case 'ephoto':
					if (args.length < 1) {
						return reply('Choose the theme please, 1 - 216')
					} else if (args[0].toLowerCase() === 'list') {
						teks = await fetchText('https://mhankbarbar.tech/api/ephoto/listtheme')
						teks = teks.replace(/<br>/g, '\n')
						return reply(teks)
					} else if (args.length < 2) {
						return reply('The text too, please')
					}
					reply(mess.wait)
					anu = `https://mhankbarbar.tech/api/ephoto?pack=${args[0]}&text=${body.slice(2+args[0].length+1)}&apiKey=${BarBarKey}`
					voss = await fetc(anu)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					//console.log(vuss)
					if (vuss !== undefined) {
						astro.sendMessage(from, await getBuffer(anu), image, { caption: mess.success, quoted: mek })
					} else {
						reply('An error occurred, please choose another theme')
					}
					break

//--harta tahta
				case 'tahta':
					if (args.length < 1) return reply('The text, please')
					anu = `https://mhankbarbar.tech/api/htahta?text=${args.join(' ')}&apiKey=${BarBarKey}`
					voss = await fetc(anu)
					teks = body.slice(7)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					if (vuss !== undefined) {
						astro.sendMessage(from, await getBuffer(anu), image, { quoted: mek, caption: `*Harta Tahta ${teks}*` })
					} else {
						reply('An error occured')
					}
					break

//--stiker maker
case 'stiker':
				case 'sticker':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await astro.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.error.stick)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('BOT', 'authorname')} ${ran} -o ${ran}`, async (error) => {
									//if (error) return reply(mess.error.stick)
									astro.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
								/*client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await astro.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(mess.wait)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(`❌ Failed, to suucesfully convert ${tipe} the stiker`)
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('BOT', 'authorname')} ${ran} -o ${ran}`, async (error) => {
									//if (error) return reply(mess.error.stick)
									astro.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
								/*client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)*/
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await astro.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(mess.wait)
						keyrmbg = 'Your-ApiKey'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply('Failed, an error occurred, please try again later.')
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(mess.error.stick)
								exec(`webpmux -set exif ${addMetadata('BOT', 'authorname')} ${ranw} -o ${ranw}`, async (error) => {
									//if (error) return reply(mess.error.stick)
									astro.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
									fs.unlinkSync(ranw)
								})
								//client.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
							})
						})
					/*} else if ((isMedia || isQuotedImage) && colors.includes(args[0])) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await client.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.on('start', function (cmd) {
								console.log('Started :', cmd)
							})
							.on('error', function (err) {
								fs.unlinkSync(media)
								console.log('Error :', err)
							})
							.on('end', function () {
								console.log('Finish')
								fs.unlinkSync(media)
								client.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=${args[0]}@0.0, split [a][b]; [a] palettegen=reserve_transparent=off; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)*/
					} else {
						reply(`Send pictures with captions ${prefix}sticker or image tag that has been sent`)
					}
					break
//-- temp
			case 'gets':
			  
				var itsme = `0@s.whatsapp.net`
				var split = `${cr}`
				var selepbot = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				namastc = body.slice(6)
				try {
				result = fs.readFileSync(`./temp/stick/${namastc}.webp`)
				astro.sendMessage(from, result, sticker, selepbot)
				} catch {
				  reply('Pack is not registered')
				}
				break
			
			
			  case 'getstik':
				var itsme = `0@s.whatsapp.net`
				var split = `${cr}`
				var selepbot = {
					contextInfo: {
						participant: itsme,
						quotedMessage: {
							extendedTextMessage: {
								text: split,
							}
						}
					}
				}
				namastc = body.slice(9)
				try {
				result = fs.readFileSync(`./temp/stick/${namastc}.webp`)
				astro.sendMessage(from, result, sticker, selepbot)
				} catch {
				  reply('Pack is not registered')
				}
				break
			
			
			
			case 'liststik':
				teks = '*Sticker list :*\n\n'
				for (let awokwkwk of setiker) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${setiker.length}*\nUse commands\n*${prefix}getstik (pack name)*\nto pick up the sticker`
				astro.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
				break
			
			case 'totaluser':
				teks = '*Total User :*\n\n'
				for (let i of _registered) {
					teks += `[${id.toString()}]\`\`\` @${i.split('@')[0]}`
				}
				teks += `\n*Total : ${_registered.length}`
				astro.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": _registered} })
				break

			case 'addstik':
				if (!isQuotedSticker) return reply('Reply the sticker')
				if (!isOwner) return reply(mess.only.ownerB)
				svst = body.slice(9)
				if (!svst) return reply('What is the name of the sticker?')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await astro.downloadMediaMessage(boij)
				setiker.push(`${svst}`) 
				fs.writeFileSync(`./temp/stick/${svst}.webp`, delb)
				fs.writeFileSync('./temp/stik.json', JSON.stringify(setiker))
				astro.sendMessage(from, `Successfully Added Sticker\n Check this way ${prefix}liststik`, MessageType.text, { quoted: mek })
				break

			case 'addvn':
				if (!isQuotedAudio) return reply('Reply VN')
				if (!isOwner) return reply(mess.only.ownerB)
				svst = body.slice(7)
				if (!svst) return reply('Whats the audio name')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await astro.downloadMediaMessage(boij)
				audionye.push(`${svst}`)
				fs.writeFileSync(`./temp/audio/${svst}.mp3`, delb)
				fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
				astro.sendMessage(from, `Successfully Added Audio\n Check this way ${prefix}listvn`, MessageType.text, { quoted: mek })
				break

			case 'getvn':
				namastc = body.slice(7)
				try {
				buffer = fs.readFileSync(`./temp/audio/${namastc}.mp3`)
				astro.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek, ptt: true })
				} catch {
				  reply('Pack is not registered')
				}
				break

			case 'listvn':
			case 'vnlist':
				teks = '*List Vn:*\n\n'
				for (let awokwkwk of audionye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${audionye.length}*\nUse Commands\n*${prefix}getvn (pack name)*\nto retrieve VN`
				astro.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
				break

			case 'addimg':
				if (!isQuotedImage) return reply('Reply the image')
				if (!isOwner) return reply(mess.only.ownerB)
				svst = body.slice(8)
				if (!svst) return reply('Whats the image name')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await astro.downloadMediaMessage(boij)
				imagenye.push(`${svst}`)
				fs.writeFileSync(`./temp/foto/${svst}.jpeg`, delb)
				fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
				astro.sendMessage(from, `Successfully Added video\nCheck this way ${prefix}listimage`, MessageType.text, { quoted: mek })
				break

			case 'getimg':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/foto/${namastc}.jpeg`)
				astro.sendMessage(from, buffer, image, { quoted: mek, caption: `Result From Database : ${namastc}.jpeg` })
				} catch {
				  reply('Pack not registered')
				}
				break
				
			case 'listimg':
				teks = '*List Image :*\n\n'
				for (let awokwkwk of imagenye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${imagenye.length}*\nUse commands\n*${prefix}getimg (pack name)*\nto take a picture`
				astro.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
				break

			case 'addvid':
			  if (!isOwner) return reply(mess.only.ownerB)
				if (!isQuotedVideo) return reply('Reply the video')
				svst = body.slice(8)
				if (!svst) return reply('Name the video')
				boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
				delb = await astro.downloadMediaMessage(boij)
				videonye.push(`${svst}`)
				fs.writeFileSync(`./temp/video/${svst}.mp4`, delb)
				fs.writeFileSync('./temp/vid.json', JSON.stringify(videonye))
				astro.sendMessage(from, `Successfully Added video\nCheck this way ${prefix}listvid`, MessageType.text, { quoted: mek })
				break

			case 'getvid':
				namastc = body.slice(8)
				try {
				buffer = fs.readFileSync(`./temp/video/${namastc}.mp4`)
				astro.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: mek })
				} catch {
				  reply('Pack not registered')
				}
				break

			case 'listvid':
				teks = '*List Video :*\n\n'
				for (let awokwkwk of videonye) {
					teks += `- ${awokwkwk}\n`
				}
				teks += `\n*Total : ${videonye.length}*\nUse commands\n*${prefix}getvid (pack name)*\nto retrieve video`
				astro.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": videonye } })
				break


//----caklontong
  case 'caklontong':

anu = await fetchJson(`https://api.vhtear.com/funkuis&apikey=${vKey}`, {method: 'get'}, {
  headers: {
    'Content-Type': 'application/json'
  }
})
 if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

yup = anu.result.soal
jawab = anu.result.jawaban
alasam = anu.result.desk
setTimeout(() => {
  astro.sendMessage(from, `‣ *Answer* : ${jawab}\n‣ *Information* : ${alasam}`, text, {
quoted: mek
  }) // ur cods
}, 30000) // 1000 = 1s,
setTimeout(() => {
  astro.sendMessage(from, '_10 more seconds_', text) // ur cods
}, 20000) // 1000 = 1s,
setTimeout(() => {
  astro.sendMessage(from, '_20 more seconds_…', text) // ur cods
}, 10000) // 1000 = 1s,
setTimeout(() => {
  astro.sendMessage(from, text) // ur cods
}, 1000) // 1000 = 1s,
setTimeout(() => {

  astro.sendMessage(from, yup, text, {
quoted: mek
  }) // ur cods
}, 0) // 1000 = 1s,
break

//--stiker to video
  case 'tovid':
astro.updatePresence(from,
  Presence.composing)
 if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

if (!isQuotedSticker) return reply('*☒* Reply the sticker')
reply(mess.wait)
anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
anum = await astro.downloadAndSaveMediaMessage(anumedia)
ran = getRandom('.webp')
exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
  fs.unlinkSync(anum)
  if (err) return reply('Failed when converting stickers to video')
  buffer = fs.readFileSync(ran)
  astro.sendMessage(from, buffer, video, {
quoted: mek, caption: 'WHAT THE HELL..'
  })
  fs.unlinkSync(ran)
})
break

//--mp4 to mp3
  case 'tomp3':
astro.updatePresence(from,
  Presence.composing)
 if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

if (!isQuotedVideo) return reply('*☒* Reply video')
reply(mess.wait)
mitri = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
duh = await astro.downloadAndSaveMediaMessage(mitri)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${duh} ${ran}`, (err) => {
  fs.unlinkSync(duh)
  if (err) return reply('*☒* Failed when converting video to mp3')
  buffer = fs.readFileSync(ran)
  astro.sendMessage(from, buffer, audio, {
mimetype: 'audio/mp4', quoted: mek
  })
  fs.unlinkSync(ran)
})
break

//---random fakta
case 'fakta':
fakta = body.slice(1)
 if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

if (isLimit(sender)) return reply(ind.limitend(pushname))
const keh = fak[Math.floor(Math.random() * fak.length)]
astro.sendMessage(from, 'Fact : '+ keh, text, {
  quoted: mek
})
break

//--Tebak gambar
  case 'tebakgambar':

anu = await fetchJson(`https://api.vhtear.com/tebakgambar&apikey=${vKey}`, {
  method: 'get'
})
 if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

buffer = await getBuffer(anu.result.soalImg)
jawab = anu.result.jawaban
setTimeout(() => {
  astro.sendMessage(from, `*➸ Answer :* ${jawab}`, text, {
quoted: mek
  }) // ur cods
}, 30000) // 1000 = 1s,
setTimeout(() => {
  astro.sendMessage(from, '_10 more seconds_', text) // ur cods
}, 20000) // 1000 = 1s,
setTimeout(() => {
  astro.sendMessage(from, '_20 more seconds_…', text) // ur cods
}, 10000) // 1000 = 1s,
setTimeout(() => {
  astro.sendMessage(from, text) // ur cods
}, 1000) // 1000 = 1s,
setTimeout(() => {

  astro.sendMessage(from, buffer, image, {
quoted: mek, caption: 'OMG!'
  }) // ur cods
}, 0) // 1000 = 1s,
break


//--google voice
				case 'tts':
					if (args.length < 1) return astro.sendMessage(from, 'Whats the language code please?', text, {quoted: mek})
					const gtts = require('./lib/gtts')(args[0])
					if (args.length < 2) return astro.sendMessage(from, 'Enter text please', text, {quoted: mek})
					dtt = body.slice(8)
					ranm = getRandom('.mp3')
					dtt.length > 600
					? reply('Text too long')
					: gtts.save(ranm, dtt, function() {
						astro.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
						fs.unlinkSync(ranm)
					})
					break

//-- Setting prefix
				case 'setprefix':
					if (args.length < 1) return
					if (!isOwner) return reply(mess.only.ownerB)
				  prefix = args[0]
					up.prefix = prefix
					fs.writeFileSync('./data/settings.json', JSON.stringify(up, null, '\t'))
					reply(`The prefix has been successfully changed to : ${prefix}`)
					break


case 'block':
  astro.updatePresence(from, Presence.composing)
  if (!isGroup) return reply(mess.only.group)         
  
  if (!isOwner) return reply(mess.only.ownerB)
  astro.blockUser (`${body.slice(8)}@c.us`, "add")
  astro.sendMessage(from, `Block number, Command Received`, text, {
quoted: mek
  })
  break

//ban
case 'set-ban':
  astro.updatePresence(from, Presence.composing)
  if (!isGroup) return reply(mess.only.group)         
  
  if (!isOwner) return reply(mess.only.ownerB)
  astro.blockUser (`${body.slice(8)}@c.us`, "add")
  astro.sendMessage(from, `Sorry ${pushname} you were banned in ${groupName} for using unlisted commands contact support for help.`, text, {
quoted: mek
  })
  break

  //unban
  case 'del-ban':
    astro.updatePresence(from, Presence.composing)
    if (!isGroup) return reply(mess.only.group)         
    
    if (!isOwner) return reply(mess.only.ownerB)
    astro.blockUser (`${body.slice(8)}@c.us`, "add")
    astro.sendMessage(from, `Unlisted has been set to 0 welcome back ${pushname}`, text, {
  quoted: mek
    })
    break
  
//membuka blokir
case 'unblock':
  if (!isGroup) return reply(mess.only.group)         
  
  if (!isOwner) return reply(mess.only.ownerB)
  astro.blockUser (`${body.slice(9)}@c.us`, "remove")
  astro.sendMessage(from, `Unlock number, Command Received`, text)
  break


//--Hilih maker
				case 'hilih':
					if (args.length < 1) return reply('Enter text')
					try {
					anu = await fetchJson(`https://mhankbarbars.herokuapp.com/api/hilih?teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					} catch {
					  reply(mess.ferr)
					}
					break

				case 'tiktokstalk':
					try {
						if (args.length < 1) return astro.sendMessage(from, 'Usernamenya mana um?', text, {quoted: mek})
						let { user, stats } = await tiktod.getUserProfileInfo(args[0])
						reply(mess.wait)
						teks = `*ID* : ${user.id}\n*Username* : ${user.uniqueId}\n*Nickname* : ${user.nickname}\n*Followers* : ${stats.followerCount}\n*Followings* : ${stats.followingCount}\n*Posts* : ${stats.videoCount}\n*Luv* : ${stats.heart}\n`
						buffer = await getBuffer(user.avatarLarger)
						astro.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
					} catch (e) {
						console.log(`Error :`, color(e,'red'))
						reply('Possibly an invalid username')
					}
					break
				case 'nulis':
				case 'tulis':
					if (args.length < 1) return reply('What do you want to write?')
					teks = body.slice(7)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/nulis?text=${teks}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					astro.sendMessage(from, buff, image, {quoted: mek, caption: mess.success})
					break
				case 'url2img':
					tipelist = ['desktop','tablet','mobile']
					if (args.length < 1) return reply('What type?')
					if (!tipelist.includes(args[0])) return reply('Type desktop|tablet|mobile')
					if (args.length < 2) return reply('Whats the URL')
					if (!isUrl(args[1])) return reply(mess.error.Iv)
					reply(mess.wait)
					anu = await fetchJson(`https://mhankbarbar.tech/api/url2image?tipe=${args[0]}&url=${args[1]}&apiKey=${BarBarKey}`, {method: 'get'})
					if (anu.error) return reply(anu.error)
					buff = await getBuffer(anu.result)
					astro.sendMessage(from, buff, image, {quoted: mek})
					break



				case 'ttp':
				 if (!isGroup) return reply(mess.only.group)         
                       
                       
                       
                       

					if (args.length < 1) return reply('Wheres the text?')
					ranp = getRandom('.png')
					rano = getRandom('.webp')
					teks = body.slice(5).trim()
					anu = await fetchJson(`http://mhankbarbar.tech/api/text2image?text=${teks}&apiKey=${BarBarKey}`, {method: 'get'},  {
            headers: {
              'Content-Type': 'application/json'
            }
          })
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						exec(`webpmux -set exif ${addMetadata('EtinBot', 'Son of Man')} ${rano} -o ${rano}`, async (error) => {
						//	if (error) return reply(mess.error.stick)
							astro.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
							fs.unlinkSync(rano)
						})
					})
					
					break
          case 'attp':
				 if (!isGroup) return reply(mess.only.group)         
         
					if (args.length < 1) return reply('Wheres the text?')
				//	ranp = getRandom('.png')
					rano = getRandom('attp.webp')
					teks = body.slice(5).trim()
					anu = await fetchJson(`http://xteam.xyz/api/attp', text=${teks}&apiKey=${xTeam}`, {method: 'get'},  {
            headers: {
              'Content-Type': 'application/json'
            }
          })
					if (anu.error) return reply(anu.error)
					exec(`wget ${anu.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(mess.error.stick)
						exec(`webpmux -set exif ${addMetadata('EtinBot', 'Son of Man')} ${rano} -o ${rano}`, async (error) => {
						//	if (error) return reply(mess.error.stick)
							astro.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
							fs.unlinkSync(rano)
						})
					})
          break

//---Tagall member
				case 'tagall':
astro.updatePresence(from, Presence.composing)
if (!isGroup) return reply(mess.only.group)         

if (!isGroup) return reply(mess.only.group)       
if (!isGroupAdmins) return reply(mess.only.admin)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim(): ''
teks += `  Total : ${groupMembers.length}\n`
for (let mem of groupMembers) {
  teks += ` @${mem.jid.split('@')[0]}\n`
  members_id.push(mem.jid)
}
mentions('〘  *TAGALL* 〙\n┏━━━━━━━━━━━━━━━━━━━━\n┠⊷'+teks+'━━━━━━━━━━━━━━━━━━━━\n────✪ *SON OF MAN ✪────\n┗━━━━━━━━━━━━━━━━━━━━', members_id, true)
break


//clear all chat
				case 'clearall':
					if (!isOwner) return reply('Who are you?')
					anu = await astro.chats.all()
					astro.setMaxListeners(25)
					for (let _ of anu) {
						astro.deleteChat(_.jid)
					}
					reply('Successfully deleted all chats :)')
					break
				case 'bc':
					if (!isOwner) return reply('Who are you?')
					if (args.length < 1) return reply('.......')
					anu = await astro.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await astro.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							astro.sendMessage(_.jid, buff, image, {caption: `*${body.slice(4)}*`})
						}
						reply('broadcast Successful')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*${body.slice(4)}*`)
						}
						reply('broadcast Successful')
					}
					break

//--menaikan jabatan
      case 'promote':
        case 'p':
					if (!isGroup) return reply(mess.only.group)         
          
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Promotion Successful\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						astro.groupRemove(from, mentioned)
					} else {
						mentions(`Promotion Successful @${mentioned[0].split('@')[0]} is now an Admin!`, mentioned, true)
						astro.groupMakeAdmin(from, mentioned)
					}
					break

  //ganti nama grup
  case 'setname':
if (!isGroup) return reply(mess.only.group)         

if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
idgrup = `${from.split("@s.whatsapp.net")[0]}`;
astro.groupUpdateSubject(idgrup, `${body.slice(9)}`)
astro.sendMessage(from, 'Give Me A Name!!', text, {
  quoted: mek
})
break

  //ganti desk
  case 'setdesk':
if (!isGroup) return reply(mess.only.group)         

if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
astro.groupUpdateDescription(from, `${body.slice(9)}`)
astro.sendMessage(from, 'Enter Group Description', text, {
  quoted: mek
})
break

//--menurunkan jabatan
				case 'demote':
          case 'd':
					if (!isGroup) return reply(mess.only.group)         
          
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Demoted Succesfully\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						astro.groupRemove(from, mentioned)
					} else {
						mentions(`Demoted Successfully @${mentioned[0].split('@')[0]} is now an ordinary Group Member!`, mentioned, true)
						astro.groupDemoteAdmin(from, mentioned)
					}
					break

//--menambah member
				case 'add':
					if (!isGroup) return reply(mess.only.group)         
          
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (args.length < 1) return reply('Enter number')
					if (args[0].startsWith('08')) return reply('Use the country code please')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						astro.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Failed to add target, maybe because its private')
					}
					break

//--mengeluarkan member
				case 'kick':
					if (!isGroup) return reply(mess.only.group)         
          
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (!isBotGroupAdmins) return reply(mess.only.Badmin)
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Orders received, issued :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						astro.groupRemove(from, mentioned)
					} else {
						mentions(`Orders received, issued : @${mentioned[0].split('@')[0]}`, mentioned, true)
						astro.groupRemove(from, mentioned)
					}
					break

//--list admin grup
				case 'listadmins':
				  case 'listadmin':
				    case 'adminlist':
					if (!isGroup) return reply(mess.only.group)         
          
					teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break

//--ganti pp bot
case 'setppbot':
  astro.updatePresence(from, Presence.composing)
  if (!isOwner) return reply(mess.only.ownerB)
  const botpp = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contxtInfo: mek
  const cuk = await astro.downloadAndSaveMediaMessage(botpp)
  await astro.updateProfilePicture(botNumber, cuk)
  reply('Thanks for the new profile😗')
  break

//event
/*case 'event':
  if (!isGroup) return reply(mess.only.group)         
  if (!isOwner) return reply(mess.only.ownerB)
  if (args.length < 1) return reply('ketik 1 untuk mengaktifkan')
  if (Number(args[0]) === 1) {
if (isEventon) return reply('*SUDAH AKTIF* !!!')
event.push(from)
fs.writeFileSync('./datauser/event.json', JSON.stringify(event))
reply('*☉]* Mengaktifkan *EVENT* di group ini*')
  } else if (Number(args[0]) === 0) {
event.splice(from, 1)
fs.writeFileSync('./datauser/event.json', JSON.stringify(event))
reply('*☉* Menonaktifkan *EVENT* di group ini*')
  } else {
reply(ind.satukos())
  }
  break
*/
//--Mengambil link grup
    case 'linkgroup':
    case 'linkgc':
      case 'gclink':
        if (!isGroup) return reply(mess.only.group)         
        
        if (!isGroupAdmins) return reply(mess.only.admin)
        if (!isBotGroupAdmins) return reply(mess.only.Badmin)
        linkgc = await astro.groupInviteCode(from)
        reply('https://chat.whatsapp.com/'+linkgc)
                    break

//--Mengeluarkan bot
      case 'leave':
      if (!isGroup) return reply(mess.only.group)         
      
      if (isGroupAdmins || isOwner) {
      astro.groupLeave(from)
                    } else {
      reply(mess.only.admin)
                    }
                    break

//--Convert stiker to image
				case 'toimg':
					if (!isQuotedSticker) return reply('Reply the sticker')
					 if (!isGroup) return reply(mess.only.group)         
           
					reply(mess.wait)
					imgmed = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					medimg = await astro.downloadAndSaveMediaMessage(imgmed)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${medimg} ${ran}`, (err) => {
						fs.unlinkSync(medimg)
						if (err) return reply('Gagal')
						buffer = fs.readFileSync(ran)
						astro.sendMessage(from, buffer, image, {quoted: mek, caption: 'Ini ?'})
						fs.unlinkSync(ran)
					})
					break


//--arti mimpi
  case 'artimimpi':
aruga = body.slice(11)
 if (!isGroup) return reply(mess.only.group)         
 
if (args.length < 1) return reply(`What dream is it?\nexample: ${prefix}artimimpi ular`)
try {
anu = await fetchJson(`https://videfikri.com/api/primbon/artimimpi/?mimpi=${aruga}`, {
  method: 'get'
})
reply(anu.result.artimimpi)

} catch {
  reply('Looks like the feature is having an error')
}
break

//--Simsimi talk
				case 'simi':
					if (args.length < 1) return reply(`Hi ${pushname}`)
					teks = body.slice(6)
					try { 
					anu = await fetchJson(`https://simsumi.herokuapp.com/api?text=${teks}`, {method: 'get'})
					if (anu.error) return reply('Simi doesnt know you')
					reply(anu.success)
					} catch {
					  reply(mess.ferr)
					}
					break

case 'bot':
					if (args.length < 1) return reply(`Yeah I'm Here :v`)
					teks = body.slice(5)
					try { 
					anu = await fetchJson(`https://simsumi.herokuapp.com/api?text=${teks}`, {method: 'get'})
					if (anu.error) return reply('Bot doesnt know you')
					reply(anu.success)
					} catch {
					  reply(mess.ferr)
					}
					break

//--Verifkasi
case 'verify':
case 'daftar':
  case 'register':
if (isRegister) return reply('You have registered before.')
const namaUser = `${pushname}`
const umurUser = `${sender}`
const serialUser = createSerial(20)
veri = sender
if (isGroup) {
  addRegisteredUser(sender, namaUser, umurUser, time, age, serialUser)
  hasil = `
  ┌──❁┈[ REGISTRATION ]┈❁───
  ├➸ Successsfully registered with the data:
  ├➸ *Name*: ${pushname}
  ├➸ *ID*:${serialUser}
  ├➸ *Time registered*: ${time}
  ├➸ *Age*:${age}
  ├➸ Consider to read *.rules* first.
  └─────❁┈[ Astro Whatsapp Bᴏᴛ ]┈❁─────
  
  
  ❁┈[ We Hope-You've A Great-Time ]┈❁`
reply(hasil)
  console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
} else {
  addRegisteredUser(sender, namaUser, umurUser, time, serialUser)
  hasil = `
  ┌──❁┈[ REGISTRATION ]┈❁───
  ├➸ Successsfully registered with the data:
  ├➸ *Name*:  ${name}
  ├➸ *Age*:  ${age}
  ├➸ *ID*:  ${userId}
  ├➸ *serial*: ${serial}
  ├➸ *Time registered*: ${time}
  ├➸ Consider to read *.rules* first.
  └─────❁┈[ Astro Whatsapp Bᴏᴛ ]┈❁─────
  
  
  ❁┈[ We Hope-You've A Great-Time ]┈❁
      
  Note:
  Don't share your *serial* to anyone!`
reply(hasil)
  console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(namaUser, 'cyan'), 'Age:', color(umurUser, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
}
tm = `Type *${prefix}help okay~`
reply(tm)
break

//--report issue
case 'report':
                if (!isRegistered) return await astro.reply(from, eng.notRegistered(), id)
                if (!q) return await astro.reply(from, eng.emptyMess(), id)
                if (limit.isLimit(sender.id, _limit, limitCount, isPremium, isOwner)) return await astro.reply(from, eng.limit(), id)
                limit.addLimit(sender.id, _limit, isPremium, isOwner)
                const lastReport = daily.getLimit(sender.id, _daily)
                if (lastReport !== undefined && cd - (Date.now() - lastReport) > 0) {
                    const time = ms(cd - (Date.now() - lastReport))
                    await astro.reply(from, eng.daily(time), id)
                } else {
                    if (isGroupMsg) {
                        await astro.sendText(ownerNumber, `*── 「 REPORT 」 ──*\n\n*From*: ${pushname}\n*ID*: ${sender.id}\n*Group*: ${(name || formattedTitle)}\n*Message*: ${q}`)
                        await astro.reply(from, eng.received(pushname), id)
                    } else {
                        await astro.sendText(ownerNumber, `*── 「 REPORT 」 ──*\n\n*From*: ${pushname}\n*ID*: ${sender.id}\n*Message*: ${q}`)
                        await astro.reply(from, eng.received(pushname), id)
                    }
                    daily.addLimit(sender.id, _daily)
                }
            break

//--grup semua peserta
case 'closegc':
  case 'c':
  astro.updatePresence(from, Presence.composing)
  if (!isGroup) return reply(mess.only.group)         
  
  if (!isGroupAdmins) return reply(mess.only.admin)
  if (!isBotGroupAdmins) return reply(mess.only.Badmin)
  var nomor = mek.participant
  const close = {
text: `Now-Only~Admin_Can-Msg!`,
contextInfo: {
  mentionedJid: [nomor]
}
  }
  astro.groupSettingChange (from, GroupSettingChange.messageSend, true);
  reply(close)
  break

//--grup hanya admin
case 'opengc':
  case 'bukagc':
    case 'o':
astro.updatePresence(from, Presence.composing)
if (!isGroup) return reply(mess.only.group)         

if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
open = {
  text: `Now~Everyone_Can-Msg!`,
  contextInfo: {
mentionedJid: [sender]
  }
}
astro.groupSettingChange (from, GroupSettingChange.messageSend, false)
astro.sendMessage(from, open, text, {
  quoted: mek
})
break

//---mengahapus pesan bot
case 'delete':
  case 'del':
 if (!isGroup)return reply(mess.only.group)
 if (!isGroup) return reply(mess.only.group)       
 
if (!isGroupAdmins)return reply(mess.only.admin)
try {
astro.deleteMessage(from, {
  id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true
})
} catch {
  reply('Can only delete messages from me')
}
break

//--ganteng cekkkk
  case 'gantengcek':
    case 'handsome':
if (args.length < 1) return reply('Enter Name')
ganteng = body.slice(12)
const gan = ['10',
  '30',
  '20',
  '40',
  '50',
  '60',
  '70',
  '62',
  '74',
  '83',
  '97',
  '100',
  '29',
  '94',
  '75',
  '82',
  '41',
  '39']
const teng = gan[Math.floor(Math.random() * gan.length)]
astro.sendMessage(from, 'Handsome : *'+ganteng+'*\n\nQuestion : '+ teng+'%', text, {
  quoted: mek
})
break

//--Cantik cekk
  case 'cantikcek':
    case 'beatiful':
if (args.length < 1) return reply('Enter Name')
cantik = body.slice(12)
const can = ['10',
  '30',
  '20',
  '40',
  '50',
  '60',
  '70',
  '62',
  '74',
  '83',
  '97',
  '100',
  '29',
  '94',
  '75',
  '82',
  '41',
  '39']
const tik = can[Math.floor(Math.random() * can.length)]
astro.sendMessage(from, 'Beautiful *'+cantik+'*\n\nQuestion : '+ tik+'%', text, {
  quoted: mek
})
break

 

				case 'welcome':
					if (!isGroup) return reply(mess.only.group)         
          
					if (!isGroupAdmins) return reply(mess.only.admin)
					if (args.length < 1) return ('Please Wait')
          let valueWel= prompt('type 1 to activate and 0 to deactivate')
					if (Number(valueWel) === 1) {
        
						if (isWelkom) return reply('Already active')
						welkom.push(from)
						fs.writeFileSync('./data/welkom.json', JSON.stringify(welkom))
						reply('Successfully activated the welcome feature in this group')
					} else if (Number(valueWel) === 0) {
						welkom.splice(from, 1)
						fs.writeFileSync('./data/welkom.json', JSON.stringify(welkom))
						reply('Successfully deactivating the welcome feature in this group')
					} else {
						reply('1 to activate, 0 to deactivate')
					}
                                      break
				case 'clone':
					if (!isGroup) return reply(mess.only.group)         
          
					if (!isOwner) return reply(mess.only.ownerB)
					if (args.length < 1) return reply('Tag target')
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await astro.getProfilePicture(id)
						buffer = await getBuffer(pp)
						astro.updateProfilePicture(botNumber, buffer)
						mentions(`Profile photo successfully updated using profile photo @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('Operation Failed')
					}
					break
				case 'wait':
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						reply(mess.wait)
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						media = await astro.downloadMediaMessage(encmedia)
						await wait(media).then(res => {
							astro.sendMessage(from, res.video, video, {quoted: mek, caption: res.teks.trim()})
						}).catch(err => {
							reply(err)
						})
					} else {
						reply('Use a picture')
					}
					break


				default:
				if (body.startsWith(`${prefix}${command}`)) {
  reply(`       𝐁𝐀𝐊𝐀!! You'r using unlisted command's, Type ${prefix}help to check the listed command's.

  🚫 𝐔𝐍𝐋𝐈𝐒𝐓𝐄𝐃 𝐖𝐀𝐑𝐍𝐈𝐍𝐆 🚫.`)
				}
					if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						return //console.log(color('[WARN]','red'), 'Unregistered Command from', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'green'))
		}
	})
}
starts()
