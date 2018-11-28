(function (win, doc) {

    'use strict'

    function Myfunction(name, lastname) {

        this.name = name
        this.lastname = lastname

    }


    Myfunction.prototype.fullname = function () {

        return this.name + ' ' + this.lastname

    }

    var leo = new Myfunction('leo','bufalo');

    console.log( leo.fullname() )

    Myfunction.prototype.age = 22

    console.log( leo.age )

})()
