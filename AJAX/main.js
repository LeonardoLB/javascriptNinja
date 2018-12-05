(function (win, doc) {
    'use strict'

    // instancia objeto para realizar a requisição
    var ajax = new XMLHttpRequest()

    // abre a requisição com o tipo e o caminho do arquivo
    ajax.open('get', '/')
    ajax.open('get', 'main.js')

    //
    ajax.send()

})(window, document)
