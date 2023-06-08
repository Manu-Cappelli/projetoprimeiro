function toggleMode() {
    const html = document.documentElement
   html.classList.toggle("ligth")

// pegar a tag img
const img = document.querySelector("#profile img")

//substituir a imagem
if(html.classList.contains("light")) {
  // se estiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/manudeoculos.png")
} else {
// se tiver sem light mode, manter a imagem normal
  img.setAttribute("src", "./assets/avatar.png")
}

}