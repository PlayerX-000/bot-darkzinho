const {getRand_start1} = require("../../util/utils") 
const { MessageType } = require('@adiwajshing/baileys')

const caracoroa = async(id,conn) => {
    const res = getRand_start1(100)
    if (res<50){
    await conn.sendMessage(id,"COROA", MessageType.text)
    }else{
        await conn.sendMessage(id,"COROA", MessageType.text)
    }
}
module.exports={caracoroa}