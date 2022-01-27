const { on_off_antlink } = require("../../db/vars/var.js")




const antlink = async (id,conn,state, chatUpdate,num_cll) => {

const numero_user_a = num_cll
const numero_user = numero_user_a.replace("@s.whatsapp.net","")
let adms = []

   const isGroup = id.endsWith('@g.us');
        const groupMetadata = isGroup ? await conn.groupMetadata(id) : ''
        const users = isGroup ? groupMetadata.participants : ''

for(let i of users) {
            i.isAdmin ? adms.push(i.jid) : ''
        }
adms.forEach(async(num,ind)=>{

if((num.replace("@s.whatsapp.net","")) == numero_user){

    on_off_antlink(id,conn,state)

}
})
}


module.exports = { antlink }