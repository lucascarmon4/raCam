const btn = document.querySelector("#btns");
const select = document.querySelector(".select");

const modelo3d = document.getElementById("img3d");
const modeloVideo = document.getElementById("videomp4");


let video = false;

btn.addEventListener("click", () => {
    select.classList.toggle('active');
    if (select.classList.contains('active')) {
        select.style.animation = 'animate .5s forwards;';
        video = false;
    } else {
        select.style.animation = 'animateReverse .5s forwards;';
        video = true;
    } 
    if (video) {
        modelo3d.setAttribute("scale", "0 0 0");
        modeloVideo.setAttribute("scale", "1 1 1");
    } else {
        modeloVideo.setAttribute("scale", "0 0 0");
        modelo3d.setAttribute("scale", "1 1 1");
    }    
    const controlador = modeloVideo.getComponent('controlador');
    controlador.tick();

});





