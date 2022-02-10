const Users = require("../../../db/models/users")
const Donos = require("../../../db/models/dono")
const {getUsers} = require("../../../util/utils")
const { veriAdm } = require("../../../util/utils")
var crypto = require("crypto");
var nomerandom = crypto.randomBytes(20).toString('hex');

const cadastro_geral= async(id,conn,comple,cht,numero_cll)=>{

if(!await veriAdm(id,conn,numero_cll)) return console.log("n e adm")
 

const dono = await Donos.findAll()
const numeroDono = dono[0].dataValues.tel
const users = await getUsers(id,conn)
let usuario = []

for(let a=0;a<users.length;a++){
const numero = (users[a].jid).replace("@s.whatsapp.net","")

if(numero!==numeroDono){

usuario.push({
tel:numero
})

}
}

for(let a=0;a<usuario.length;a++){
setTimeout(function(){
cad(nomerandom,usuario[a].tel)
},1000*(a+1))
}



    

}

async function cad(nome,tel){
try{
 await Users.create({
        nome: nome,
        tel: tel,
        nivel: 1,
        xp: 1,
        comandos: 1,
        mensagens: 1,
        atk: 1,
        def: 1,
        vida: 10,
        vidaMax: 10
        
        })
        .then(function(){
            tb("cadastro feito com SUCESSO")
            console.clear()
        })
        }catch{
        console.log("erro ao inserir")
        }
}
module.exports={cadastro_geral}