(function () {

    'use strict'

    var div = document.querySelector('div')
    var counter = 0;

    setInterval(() => {
        counter++
        div.style = "height: 100px; background-color: #FF"+counter+"0"+counter+"F"
        div.style.width = '100px'
    }, 2000);


})()
