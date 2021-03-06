arr = [1, 2, 3, 4, 5]

var reduce = arr.reduce( function ( acumulado, atual, index, array ) {
    return acumulado + atual
} )

/*

(1) ->  0 + 1 = 1
(2) ->  1 + 2 = 3
(3) ->  3 + 3 = 6
(4) ->  6 + 4 = 10
(5) ->  10 + 5 = 15

*/

console.log( reduce )


arr2 = ['l','e','o','n','a','r','d','o']

var reduce = arr2.reduce(function (acumulado, atual, index, array) {
    return acumulado + atual
})

/*

(1) ->  0 + l = l
(2) ->  l + e = le
(3) ->  le + o = leo
(4) ->  leo + n = leon

......

*/

console.log(reduce)
