(function (doc) {

    'use strict'

    var main = doc.querySelector('.main')
    var lua = doc.querySelector('.lua')
    var sol = doc.querySelector('.sol')

    // nome da classe
    main.className
    // todas as classes de main
    main.classList
    // pega o id do elemento
    main.id

    console.log( main.getAttribute('class') )
    console.log( lua.getAttribute('data-type') )
    console.log( sol.getAttribute('data-type') )

    // setando um novo atributo
    sol.setAttribute('data-power', 'fire')
    console.log(sol.getAttribute('data-power'))

})(document)
