let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:Sant  🇦🇱;;\nFN:Sant  🇦🇱\nORG:Sant  🇦🇱\nTITLE:\nitem1.TEL;waid=50588586015:50588586015\nitem1.X-ABLabel:Sant  🇦🇱\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:Sant  🇦🇱\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'おDanịel.xyz⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
