const { on_off_antfake } = require("../../db/vars/var.js")
const { veriAdm } = require("../../util/utils")



const antfake = async (id,conn,state, chatUpdate,num_cll) => {
let isAdm = await veriAdm(id,conn,num_cll)
if(isAdm) on_off_antfake(id,conn,state)
}


module.exports = { antfake }