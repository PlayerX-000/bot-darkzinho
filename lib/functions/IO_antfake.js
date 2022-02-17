const { objinf } = require("../../db/vars/var")



module.exports = antfake_v = async (id,message) => {
let grp_lk = []


for(let a=0;a<objinf.length;a++){
  if(objinf[a].id===id){
    grp_lk.push(objinf[a].id)



  const grpPerm_lk = grp_lk.includes(`${id}`)===true
if(objinf[a].vars.antfake===true && grpPerm_lk===true){
const numero = message.participant
const ddd = numero.substr(0, 2)
if(ddd !== "55"){
    return true
}else{
    return false
}
}
}
}

}

