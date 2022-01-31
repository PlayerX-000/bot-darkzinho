const showBanner = require('node-banner');
const { exec } = require('child_process')
const inquirer = require('inquirer');
const { insert_root , busca_root } = require("../db/query/query_dono")
const tb = require('terminal-banner').terminalBanner




const apresentacao = async() => {

  const bd_root = await busca_root()
  console.log("aki1")
console.log(bd_root)

  if(bd_root === undefined || bd_root.length === 0){
    setTimeout(async()=>{
    await exec('clear')
    await showBanner('BOT Darkzinho', 'O bot de WhatsApp mais foda.');
    },3000)
    
    setTimeout(async function dadosad(){
     
    const nome = await inquirer.prompt({
    type: 'selectLine',
    message: 'Qual seu Nome?',
    name: 'line'
    }).then(async(nome)=>{
   
    const numero = await inquirer.prompt({
    type: 'selectLine',
    message: 'Qual seu Nunero? (Ex: 5512988935859):',
    name: 'line2'
    }).then(async(numero)=>{
   
    const idade = await inquirer.prompt({
    type: 'selectLine',
    message: 'Qual sua Idade?',
    name: 'line3'
    }).then(async(idade)=>{
   
   tb(`
   nome: ${nome.line} 
   numero: ${numero.line2}
   idade: ${idade.line3}
   `)
   
   const confirm = await inquirer.prompt({
     type: 'confirm',
     message: 'Os dados estão corretos?',
     name: 'line'
   }).then(async(resposta)=>{
   if(resposta.line===true){
     const nome_c = nome.line
     const tel_c = numero.line2
     const idade_c = idade.line3
   insert_root(nome_c,tel_c,idade_c)
   
   setTimeout(()=>{
    rodand()},3000)

   }else if(resposta.line===false){
    apresentacao()
   }
   })})})})
   },4000)
  }else{
    setTimeout(()=>{
      rodand()},3000)
  }
   }




   
   async function rodand(){
   await exec('console.clear()')
   await showBanner(`
   BOT Darkzinho
   `, 'Executando....');
   }

   module.exports={ apresentacao }