(function (win, doc) {
    'use strict'

    // instancia objeto para realizar a requisição
    var ajax = new XMLHttpRequest()

    // abre a requisição com o tipo e o caminho do arquivo
    // aparece no network da pagina
    ajax.open('get', '/')
    ajax.open('get', 'main.js')

    //
    ajax.send()

    // pode ser feito assim para escutar a mudança
    ajax.onreadystatechange = function() {

    }

    // ou

    ajax.addEventListener( 'readystatechange', function () {

        console.log( 'terminou requisição' )
        console.log( ajax.readyState )
        console.log( ajax.status )

    }, false )


    // readyState,
    // 0: não enviado, requisão não realizada (b.o no open)
    // 1: apos abrir a conexão (conexão aberta, o executado o open)
    // 2: headers recebidos, cabeçalhos da conexão (oq esta sendo recebido, infos sobre arquivos)
    // 3: Carregando o conteudo/corpo do request
    // 4: concluido com sucesso, incluiu a requisição com sucesso

})(window, document)
