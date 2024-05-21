"using strict";

///////////////////////////////////////////////////////////
// Make updating the copyright year section up to date

const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent =currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work


const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click",function(){
  headerEl.classList.toggle("nav-open");
});

