document.querySelector(".fadeLayer").addEventListener("click", showMenu)

document.querySelector(".menu-button").addEventListener("click", showMenu)

document.querySelector(".close-button").addEventListener("click", showMenu)


function showMenu(){
    let menu = document.querySelector("nav.jSNav")
    menu.classList.toggle("show")  
    
    let layer = document.querySelector(".fadeLayer")
    layer.classList.toggle("visible")  
}