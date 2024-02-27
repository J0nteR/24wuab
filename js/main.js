document.querySelector(".fadeLayer").addEventListener("click", showMenu)

document.querySelector(".menu-button").addEventListener("click", showMenu)


/*
function fade(){
    alert('Du tryckte på fade');

}
*/

function menu(){
    alert('Du tryckte på menu');

}

function showMenu(){
    console.log("funkar")
    let menu = document.querySelector("nav.jSNav")
    menu.classList.toggle("show")  
    
    let layer = document.querySelector(".fadeLayer")
    layer.classList.toggle("visible")  
}