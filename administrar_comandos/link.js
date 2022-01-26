

module.exports = antlink = async (message) => {

const isUrl = new RegExp(/(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?/img)
let links_gerais = message.match(isUrl) ? message.match(isUrl).length : 0
if(links_gerais == 0) return true

}