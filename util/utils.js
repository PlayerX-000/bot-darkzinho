const getData=()=>{
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    return `Data: ${dia}/${mes}/${ano}`
  }

const getHorario=()=>{
    const data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();
    var seg = data.getSeconds();
    return `Horario: ${hora}:${min}:${seg}`
  }

const veriAdm = async (id,conn,numero) => {
    const users = await getUsers(id,conn)

    const adms = [];
        for(let i of users) {
            i.isAdmin ? adms.push(i.jid) : ''
        }
    const isAdm = adms.includes(numero)
    console.log(isAdm)
        return isAdm
  }

const getUsers = async (id , conn) => {
    const isGroup = id.endsWith('@g.us');
    const groupMetadata = isGroup ? await conn.groupMetadata(id) : ''
    const users = isGroup ? groupMetadata.participants : ''
    return users
  }

const getAdms = async (id , conn) => {
    const isGroup = id.endsWith('@g.us');
    const groupMetadata = isGroup ? await conn.groupMetadata(id) : ''
    const users = isGroup ? groupMetadata.participants : ''
    const adms = [];
    for(let i of users) {
        i.isAdmin ? adms.push(i.jid) : ''
    }
    return adms
  }

  const getRand_start0 =  (num) => {
  return (Math.floor(Math.random() * num));
  }

  const getRand_start1 =  (num) => {
  return (Math.floor(Math.random() * num) + 1);
  }

  const getDadosGrp =  async(id,conn) => {
    return await conn.groupMetadata(id) 
    }

  module.exports = {
    veriAdm,
    getData,
    getHorario,
    getUsers,
    getAdms,
    getRand_start0,
    getRand_start1,
    getDadosGrp
}