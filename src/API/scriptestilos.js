document.getElementById("btn-menu").addEventListener("click",mostrar);
nav= document.getElementById("nav");
// nav2= document.getElementById("nav2");
 
function mostrar(){

    nav.classList.toggle('nav1');
    nav.classList.toggle('nav2');

    // nav.style.left = "0px";
    // nav.style.backgroundColor = "red";

}

export default mostrar