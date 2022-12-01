// hamburger menu
var menuBtn = document.querySelector('.menu-btn');
var menu = document.querySelector('.nav-link');

menuBtn.addEventListener('click', activeClass);

function activeClass(){
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
}

// for navbar
const activeLi = document.querySelectorAll(".links");
const section = document.querySelectorAll("section");

function activeMenu (){
  let lengths = section.length;
  while(--len && window.scrollY + 97 < section[lengths].offsetTop) {}
  activeLi.forEach(ltx => ltx.classList.remove("active"));
}
activeMenu();
window.addEventListener("scroll", activeMenu);