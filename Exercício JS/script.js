


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
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text =`Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML=''


    } else {
        window.alert('Valor invalido ou já encontrado na lista')

    }
    num.value=''
    num.focus()

    
    }

    function finalizar(){

        if (valores.length == 0) {

            window.alert('Adicione valores antes de finalizar')
        } else{ 

           let tot = valores.length
           let maior = valores[0]
           let menor = valores [0]
           let soma = 0
           let media = 0

           for( let pos in valores){
            soma += valores[pos]

            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
           }
           media = soma / tot
           res.innerHTML = ''
           res.innerHTML += `<p> Ao todo temos ${tot} números cadastrados. </p>`
           res.innerHTML += ` <p> O maior valor informado foi ${maior}. </p>`
           res.innerHTML += ` <p> O menor valor informado foi ${menor}. </p>`
           res.innerHTML += ` <p> A soma dos valores é ${soma}. </p>`
           res.innerHTML += ` <p> A média dos valores é igual a  ${media}. </p>`
    }

    }
        
           





