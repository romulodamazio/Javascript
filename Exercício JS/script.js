


/* function analisador() {

var num = document.getElementById('txtn')
var tab = document.getElementById('seltab')

if (num.value.length == 0) {

    window.alert('Por favor, digite um número')
} else {

    var n = Number(num.value)
    var c = 1
    tab.innerHTML = ''

    while ( c <= 10) {

        let item = document.createElement('option')
        item.text = ` ${n} x ${c} = ${n*c}`
        tab.appendChild(item)
        c++        
    }

}



} */


var num = document.getElementById('fnum')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []



function isNumero(n) {

    if(Number(n) >= 1 && Number(n) <=100) {
        return true
    } else {
        return false
    }
}


function inLista( n,l) {

if (l.indexOf(Number(n)) != -1) {
    return true
} else {
    return false
}

}
function adicionar() {

    if (isNumero(num.value) && !inLista(num.value, valores)){


    } else {
        window.alert('Valor invalido ou já encontrado na lista')
    }

    
    }





