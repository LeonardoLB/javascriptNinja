(function (doc) {
    log = console.log

    'use strict'

    var small = doc.querySelector('small')
    var section = doc.querySelector('section')

    log( small.parentNode )
    log( small.parentElement )

    log( section.childNodes )
    log( section.childElementCount )
    log( section.firstChild )
    log( section.children )

})(document)
