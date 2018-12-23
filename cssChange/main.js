(function () {

    'use strict'

    var div = document.querySelector('div')
    var counter = 0;

    setInterval(() => {
        counter++
        div.style = "width: 100px; height: 100px; background-color: #FF"+counter+"0"+counter+"F"
    }, 2000);

})()
