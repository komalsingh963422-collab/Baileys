import makeWASocket, { useMultiFileAuthState } from "@whiskeysockets/baileys"
import QRCode from "qrcode-terminal"

async function start() {

const { state, saveCreds } = await useMultiFileAuthState("auth")

const sock = makeWASocket({
auth: state
})

sock.ev.on("connection.update", (update) => {
const { qr, connection } = update

if (qr) {
QRCode.generate(qr, { small: true })
}

if (connection === "open") {
console.log("WhatsApp connected")
}

})

sock.ev.on("creds.update", saveCreds)

}

start()
