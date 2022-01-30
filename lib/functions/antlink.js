const { on_off_antlink } = require("../../db/vars/var.js")
const { veriAdm } = require("../../util/utils")



const antlink = async (id,conn,state, chatUpdate,num_cll) => {
let isAdm = await veriAdm(id,conn,num_cll)
if(isAdm) on_off_antlink(id,conn,state)
}


module.exports = { antlink }