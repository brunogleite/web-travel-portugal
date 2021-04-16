/*const translate = document.querySelectorAll(".translate");
const big_title = document.querySelectorAll(".main-title");
const header = document.querySelectorAll(".lisbon-main")

let header_height = header.offsetHeight;
console.log(header_height)

window.addEventListener("scroll", () =>{
    let scroll = window.pageYOffset;
    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`
    })


})*/


//when we mouseover the region it shows another page


//when we click on algarve , adicionamos uma classlist de active e aparece a background do algarve e as informaceos
const algarve = document.querySelector("#PT-08");
const secondBg = document.querySelector(".second");
const regions = document.querySelector(".region-number");
const footerDetails = document.querySelector(".details");




algarve.addEventListener("click", ()=>{
    algarve.style.fill = "rgba(0, 0, 0, 0.9)"
    footerDetails.classList.add(".show");
    secondBg.classList.add("active") // adicionamos a classe responsavel por mudar o background
    regions.innerHTML = "31"
})