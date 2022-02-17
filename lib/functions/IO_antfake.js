const { objinf } = require("../../db/vars/var")



module.exports = antfake_v = async (id,numero_cll) => {



for(let a=0;a<objinf.length;a++){
  if(objinf[a].id===id && objinf[a].vars.antfake===true){


 
    const ddd = numero_cll.substr(0, 2)

if(ddd !== "55"){
    return true
}else{
    return false
}



}
}

}

