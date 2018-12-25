(function () {

    'use strict'

    var ajax = new XMLHttpRequest()

    ajax.open( 'GET' , 'http://localhost:8000/pessoa/kley' )
    ajax.send()
    ajax.addEventListener('readystatechange', function () {
        if (ajax.readyState === 4 && ajax.status === 200 ) {
            console.log( ajax.response )
        }
    }, false)

})()
