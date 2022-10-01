let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let links = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})

links.addEventListener('click', function(){
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
})