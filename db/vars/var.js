const { MessageType } = require('@adiwajshing/baileys')
const tb = require('terminal-banner').terminalBanner;
const fs = require("fs")




var objinf = []
var objativos = []

const updatelocal = async() =>{
  fs.readFile('./db/vars/grpsInf.json', 'utf-8', function (err, data1) {
    if(err) throw err;
    let res = JSON.parse(data1)
  if(res[0]===undefined) return
  for(let a=0;a<res.length;a++){
  objinf.push(res[a])
  }
});


fs.readFile('./db/vars/grpsativo.json', 'utf-8', function (err, data2) {
  if(err) throw err;
  let res = JSON.parse(data2)
if(res[0]===undefined) return
for(let a=0;a<res.length;a++){
objativos.push(res[a])
}
});


}
const savelocalativo = async(id) =>{
  console.log("entrou")
  for(let a=0;a<objativos.length;a++){
    if(objativos[a]===id){
      objativos.splice(a, 1); 
    }
  }

  objativos.push(id)

  fs.unlink('./db/vars/grpsativo.json', function(err) {
    if(err) throw err
  console.log("removido")
  })
  
  let newjson = JSON.stringify(objativos)
  console.log(newjson)
  fs.writeFile('./db/vars/grpsativo.json', newjson,{enconding:'utf-8',flag: 'w+'}, function (err) {
    if (err) throw err;
    console.log('criado');
  });


}
const savelocalinf = async(id,newobj,cod) =>{
for(let a=0;a<objinf.length;a++){
  if(objinf[a].id===id){
    objinf.splice(a, 1); 
  }
}
objinf.push(newobj)

fs.unlink('./db/vars/grpsInf.json', function(err) {
  if(err) throw err
console.log("removido")
})

let newjson = JSON.stringify(objinf)

fs.writeFile('./db/vars/grpsInf.json', newjson,{enconding:'utf-8',flag: 'w+'},  function (err) {
  if (err) throw err;
});
}




const on_off_bemvindo = async(id,conn,state) =>{
 



if(state=="off"){



if(objinf[0]===undefined){
  savelocalinf(id,{
    id:id,
    vars:{
      antlink:false,
      boasvindas:false
    }
  })
}

let idGroup = []

  for(let a=0;a<objinf.length;a++){
    idGroup.push(objinf[a].id)
  }

let dadosGrpExist = idGroup.includes(id)

if(dadosGrpExist){
  for(let a=0;a<objinf.length;a++){
    if(objinf[a].id===id){
      let antlink = objinf[a].vars.antlink
      let boasvindas = objinf[a].vars.boasvindas

      let newobj = {
        id: id,
        vars:{
          antlink: antlink,
          boasvindas: !boasvindas
        }
      }
      console.log(newobj)
      savelocalinf(id,newobj)      

    }
  }
}else{

  let newobj = {
    id: id,
    vars:{
      antlink: false,
      boasvindas: false
    }
  }
  console.log(newobj)
  savelocalinf(id,newobj)    

}
  
  await conn.sendMessage (id, 'Boas Vindas: OFF', MessageType.text)


    }else if(state=="on"){


      if(objinf[0]===undefined){
        savelocalinf(id,{
          id:id,
          vars:{
            antlink:false,
            boasvindas:true
          }
        })
      }
    
let idGroup = []

for(let a=0;a<objinf.length;a++){
  idGroup.push(objinf[a].id)
}

let dadosGrpExist = idGroup.includes(id)

if(dadosGrpExist){
for(let a=0;a<objinf.length;a++){
  if(objinf[a].id===id){
    let antlink = objinf[a].vars.antlink
    let boasvindas = objinf[a].vars.boasvindas

    let newobj = {
      id: id,
      vars:{
        antlink: antlink,
        boasvindas: !boasvindas
      }
    }
    console.log(newobj)
    savelocalinf(id,newobj)      

  }
}
}else{

let newobj = {
  id: id,
  vars:{
    antlink: false,
    boasvindas: true
  }
}
console.log(newobj)
savelocalinf(id,newobj)    

}

      await conn.sendMessage (id, 'Boas Vindas: ON', MessageType.text)
    }
  }


const on_off_antlink = async(id,conn,state) =>{
  console.log(objinf)
  if(state=="off"){

    if(objinf[0]===undefined){
      savelocalinf(id,{
        id:id,
        vars:{
          antlink:false,
          boasvindas:false
        }
      })
    }


    let idGroup = []

    for(let a=0;a<objinf.length;a++){
      idGroup.push(objinf[a].id)
    }
    
    let dadosGrpExist = idGroup.includes(id)
    
    if(dadosGrpExist){
    for(let a=0;a<objinf.length;a++){
      if(objinf[a].id===id){
        let antlink = objinf[a].vars.antlink
        let boasvindas = objinf[a].vars.boasvindas
    
        let newobj = {
          id: id,
          vars:{
            antlink: !antlink,
            boasvindas: boasvindas
          }
        }
        console.log(newobj)
        savelocalinf(id,newobj)      
    
      }
    }
    }else{
    
    let newobj = {
      id: id,
      vars:{
        antlink: false,
        boasvindas: false
      }
    }
    console.log(newobj)
    savelocalinf(id,newobj)    
    
    }
  
   
  await conn.sendMessage (id, 'Anti Link: OFF', MessageType.text)



    }else if(state=="on"){


      if(objinf[0]===undefined){
        savelocalinf(id,{
          id:id,
          vars:{
            antlink:true,
            boasvindas:false
          }
        })
      }

      let idGroup = []

      for(let a=0;a<objinf.length;a++){
        idGroup.push(objinf[a].id)
      }
      
      let dadosGrpExist = idGroup.includes(id)
      
      if(dadosGrpExist){
      for(let a=0;a<objinf.length;a++){
        if(objinf[a].id===id){
          let antlink = objinf[a].vars.antlink
          let boasvindas = objinf[a].vars.boasvindas
      
          let newobj = {
            id: id,
            vars:{
              antlink: !antlink,
              boasvindas: boasvindas
            }
          }
          console.log(newobj)
          savelocalinf(id,newobj)      
      
        }
      }
      }else{
      
      let newobj = {
        id: id,
        vars:{
          antlink: true,
          boasvindas: false
        }
      }
      console.log(newobj)
      savelocalinf(id,newobj)    
      
      }
      await conn.sendMessage (id, 'Anti Link: ON', MessageType.text)

    }
  }


  const grpusandobot = async(id,conn) =>{
 
      savelocalativo(id)
    

   
    console.log(objativos)


  }



  updatelocal()
console.log(objinf)

module.exports = { grpusandobot , objinf , objativos , on_off_bemvindo , on_off_antlink }