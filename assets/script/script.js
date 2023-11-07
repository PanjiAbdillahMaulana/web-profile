// responsif navbar menggunakan burger menu untuk layar hp
const menuToggle = document.querySelector('.menu-toggle .input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide')
});


// slider foto untuk article wisata
var slideIndex = 1;
showSlide(slideIndex);

function plusSlide(n){
    showSlide(slideIndex += n);
}

function showSlide(n){
    var i;
    var slides = document.getElementsByClassName("img-slide");
    if(n>slides.length){
        slideIndex = 1;
    }if(n<1){
        slideIndex = slides.length
    }
    for (i = 0; i<slides.length;i++){
        slides[i].style.display= "none";
    }
    slides[slideIndex-1].style.display="block";
}