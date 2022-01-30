const { on_off_bemvindo } = require("../../db/vars/var.js")
const { getAdms } = require("../../util/utils")

const boas_vindas = async (id,conn,state, chatUpdate,num_cll) => {
const adms = await getAdms(id,conn)
const isAdm = adms.includes(num_cll)
if(isAdm) on_off_bemvindo(id,conn,state)
}

module.exports = { boas_vindas }