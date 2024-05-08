import './style.css';
import homeSection from './home.js';
import menuSection from './menu.js';
import aboutSection from './about.js';
import instagramIcon from './metadata/instagram.svg';

const header = document.querySelector('header');
const headerNav = header.querySelector('nav');
const headerNavBtns = headerNav.querySelectorAll('button');
const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const aboutBtn = document.getElementById('aboutBtn');

homeBtn.textContent = "Home";
menuBtn.textContent = "Menu"; 
aboutBtn.textContent = "About";

function clearElement(elementID) {
  let element = document.getElementById(elementID);
  
  while(element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function handleHeaderNav() {
  menuSection(); // home section - default
  menuBtn.classList.add("selected");

  headerNavBtns.forEach(button => {
    button.addEventListener('click', function() {
      if (button.id === "homeBtn") {
        clearElement('content');
        homeSection();
        homeBtn.classList.add('selected');
        menuBtn.classList.remove('selected');
        aboutBtn.classList.remove('selected');
      } else if (button.id === "menuBtn") {
        clearElement('content');
        menuSection();
        homeBtn.classList.remove('selected');
        menuBtn.classList.add('selected');
        aboutBtn.classList.remove('selected');
      } else if (button.id === "aboutBtn") {
        clearElement('content');
        aboutSection();
        homeBtn.classList.remove('selected');
        menuBtn.classList.remove('selected');
        aboutBtn.classList.add('selected');
      }
    });
  });
}
handleHeaderNav();


const instaBtn = document.getElementById('instagramBtn');
const instaImg = document.createElement('img');
instaImg.src = instagramIcon;
instaBtn.appendChild(instaImg);
instaBtn.addEventListener('click', function() {
  window.open('https://www.instagram.com/romansnyc/', '_self');
});

const jobBoardBtn = document.getElementById('jobBoardBtn');
jobBoardBtn.textContent = "Work With Us";
jobBoardBtn.addEventListener('click', function() {
  window.open('https://www.romansnyc.com/work-with-us/#/form', '_self');
})