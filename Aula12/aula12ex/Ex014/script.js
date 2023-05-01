
function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')

var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas`


if (hora >= 0 && hora < 12) {
    img.src = 'fotomanha.png'
    document.body.style.background = '#e2cd9f'
    //bom dia
}
else if (hora >= 12 && hora < 18) {
    document.body.style.background = '#fed269'
    img.src = 'fototarde.png'
    //boa tarde
}
else {
    
    img.src = 'fotonoite.png'
    document.body.style.background = '#1a1613'
    //boa noite
}
}

