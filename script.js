let typed = new Typed(".typing",{
    strings:["","Frontend Developer", "Backend Devloper", "Full Stack Devloper", "web Desginer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})

//  loder

var loader = document.getElementById("pre-loader");

window.addEventListener("load", function(){
     setTimeout(function(){
        loader.style.display = "none";
     }, 1500);
})