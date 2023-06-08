function toggleMode() {
    const html = document.documentElement

   html.classList.toggle("ligth")

const img = document.querySelector("#profile img")

if(html.classList.contains("light")) {
    img.setAttribute("src", "./assets/manudeoculos.png")
} else {

  img.setAttribute("src", "./assets/avatar.png")
}

}