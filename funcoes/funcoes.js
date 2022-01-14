const { MessageType } = require('@adiwajshing/baileys')
    

/*-----------------------------------------------------------------------*/

    const help = async (id,conn) => {
        const brincadeiras = [
            {title: 'JOGO: ROLETA RUSSA ', description: "!roleta_russa", rowId:"rowid1"},
            {title: 'JOGO: CARA OU COROA ', description: "!cara_coroa", rowId:"rowid2"},
            {title: 'JOGO: DESCUBRA O PERSONAGEM ', description: "!adivinhe_o_personagem", rowId:"rowid3"}
           ]

        const administracao = [
            {title: 'APENAS ADM`s PODEM FALAR ', description: "!fechar_grupo", rowId:"rowid1"},
            {title: 'TODOS OS MEMBROS PODEM FALAR ', description: "!abrir_grupo", rowId:"rowid2"},
            {title: 'ATIVAR BOAS-VINDAS A MEMBROS NOVOS ', description: "!boas_vindas", rowId:"rowid4"}
           ]
           
           const sections = [
        {
            title: "BRINCADEIRAS ", rows: brincadeiras
        },{
            title: "COMANDOS ADMINISTRATIVOS ", rows: administracao
        }
        
        ]
           
           const button = {
            buttonText: 'LISTAS DE COMANDOS',
            description: "Aqui você encontrara categorias de comandos com seus respectivos comandos",
            sections: sections,
            listType: 1
           }
           
           const sendMsg = await conn.sendMessage(id, button, MessageType.listMessage)
    }

/*-----------------------------------------------------------------------*/

    const criador = async (id,conn) => {
        const buttons = [
            {buttonId: 'id1', buttonText: {displayText: 'OK'}, type: 1}
          ]
          
          const buttonMessage = {
              contentText: "Darkzinho_itachi esta me criando",
              footerText: 'ctt: +55 (12)99113-0663',
              buttons: buttons,
              headerType: 1
          }
          
          const sendMsg = await conn.sendMessage(id, buttonMessage, MessageType.buttonsMessage)
    }


    const ban = async (id,conn) => {
        const sentMsg  = await conn.sendMessage (id, 'Em desenvolvimento...', MessageType.text)
    }


    const adm_grupo = async (id, conn) => {

        const isGroup = id.endsWith('@g.us');
        const groupMetadata = isGroup ? await conn.groupMetadata(id) : ''
        const users = isGroup ? groupMetadata.participants : ''

     adms = [];
        for(let i of users) {
            i.isAdmin ? adms.push(i.jid) : ''
        }
        const sentMsg  = await conn.sendMessage (id, adms, MessageType.text)
    }


/*-----------------------------------------------------------------------*/

    module.exports = { criador , help , ban , adm_grupo }