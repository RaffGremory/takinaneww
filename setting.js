const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.Api = {
	ampibi: 'https://ampibismm.my.id',
}

// Apikey Website Api
global.ApiKey = 'JdxsJ995HQif3t6fSJ5chbniuX7Dl1' //JIKA INGIN MENDAPATKAN KOMISI DAFTAR DI HTTPS://AMPIBISMM.MY.ID UNTUK MENDAPATKAN APIKEY!

global.smm = {
  nomor : '6285601773297',
  atasnama : 'Takina inoue'
}

// Other
global.owner = ['6285601773297',"6281332093398"]
global.premium = ['6281332093398']
global.profilebio = ['6285601773297'] // ini ganti nomor lu ntar bisa nampilin pp lu
global.sponsor = '6281332093398'
global.packname = 'Takinaa :3'
global.footer = '© 2022 Takina inoue'
global.author = 'Owner : Raff.\nIg1 : @raff.gremory\nIg2 : @raff.gremory'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.act = {
		wait: 'please wait a moment, -takina- processing data...',
		den:'*DAFTAR dulu b-baka!! >:(*\n\n*.reg* <name>\n*To Regis/Login*',
		proc:'Tiiiiittt😴 -takina-',
		error:'Error :(',
		success:'Success bang! ^_^',
		repiar:'maintenance -takina-',
		botadm:'Jadiin Takina admin dulu!🥺',
		admin:'Khusus admin-chan ',
		done:'Done! -takina-',
		gc:'Only Group Allowed',
		owner:'Only Ayangku! >:('
}

global.thumb = fs.readFileSync('./lib/crizzy.jpg')
global.crizzy = { url: "https://e.top4top.io/p_2474lmc0t2.jpg"}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})