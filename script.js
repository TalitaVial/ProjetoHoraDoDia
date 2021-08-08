function slid() {
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `<p>Agora são ${hora} horas.<p>`
if (hora >= 0 && hora < 12) {
  img.src= "Fotomanha.jpg"
  document.body.style.background = '#e5c077'
} else if (hora >= 12 && hora < 18) {
  img.src="Fototarde.jpg"
  document.body.style.background = '#9e7f68'
} else {
  img.src= "Fotonoite.jpg"
  document.body.style.background = '#727375'
}
}


