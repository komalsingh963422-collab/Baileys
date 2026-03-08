const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys")

async function startSock() {
const { state, saveCreds } = await useMultiFileAuthState("auth")

const sock = makeWASocket({
auth: state,
printQRInTerminal: true
})

sock.ev.on("creds.update", saveCreds)
}

startSock()


