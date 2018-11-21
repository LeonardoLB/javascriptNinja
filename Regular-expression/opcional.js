var text = ' 1 00 World of Warcraft é um jogo on - line, (MMORPG) da 12 produtora Blizzard lançado em 2004. O jogo se passa no mundo fantástico de Azeroth, introduzido no primeiro jogo da série, Warcraft: Orcs & Humans em 1994.'

//ele vai casar com dois numeros e o terceiro é opcional
console.log( text.match( /\d\d\d?/g ) )

// vai casar com um esapço em branco seguido de um caracter
console.log( text.match( /\s\d?/g ) )

//se tem mais de um item dos digitos seguidos
console.log( text.match( /\d+/g ) )

// todas os caracteres alfanumeros seguidos
console.log( text.match( /\w+/g ) )

//qualquer caracter seguido
console.log( text.match( /\w*/g ) )

//se url for valida o console vai ter conteudo
url = 'http://google.com.br'
// url = 'https://goo.com'
// url = 'http://a.b.c'
// verificação
// ve se tem o http://
// qualquer caracter alfanumero, ponto, qualquer carcter alfa numerico, ponto e novamente
// qualquer caracter alfanumero.
console.log( url.match( /https?:\/\/\w+\.com[.br]?/g ) )



url = 'https://www.microsoft.com/pt-br/software-download/windows10ISO'
url2 = 'https://www.gooogle.com.br:80/pt/videoplay?docid=67886647838476478=en#57f4839mh'
url3 = 'http://cavicon.com.br/'
url4 = 'https://engage.bz/platform/?competitionId=0#/competitions'

console.log(url2.match( /https?:\/\/(\w+)\.(\w+)\.com(\.br)?(:\d+)?(\/)?(\w+)?(\/)?(\w+)?(\?)?(\w+[=])?(\w+\d+=)?(\w+[#]\w+)?/g ) )
console.log(url.match( /https?:\/\/(\w+)\.(\w+)\.com(\.br)?(:\d+)?(\/)?(\w+-)?(\/)?(\w+)?(\?)?(\w+[=])?(\w+\d+=)?(\w+[#]\w+)?/g ) )
console.log( url3.match( /https?:\/\/(\w+)\.(\w+)\.com(\.br)?(:\d+)?(\/)?(\w+-)?(\/)?(\w+)?(\?)?(\w+[=])?(\w+\d+=)?(\w+[#]\w+)?/g ) )
console.log( url4.match( /https?:\/\/(\w+)\.(\w+)\.com(\.br)?(:\d+)?(\/)?(\w+-)?(\/)?(\w+)?(\?)?(\w+[=])?(\w+\d+=)?(\w+[#]\w+)?/g ) )
