'use strict';
function addscrollevent(intro,contact) {
  intro.addEventListener('click', ()=> {
    window.scrollTo(0,intro_container.getBoundingClientRect().y);
    console.log(intro_container.getBoundingClientRect().y);
    console.log(window.scrollY);
  }); 
  contact.addEventListener('click', ()=> {
    window.scroll(0,document.body.scrollHeight);
  });
}
const intro_container = document.querySelector('.intro');


const intro_btn = document.querySelector('#intro.nav-menu-item');
const contact_btn = document.querySelector('#contact.nav-menu-item');
addscrollevent(intro_btn,contact_btn);

const menu_btn = document.querySelector('.menu-btn');
const header = document.querySelector('.header');
const menu_wide = document.createElement('menu_wide');
menu_wide.setAttribute('class', 'menu-wide');
const intro_btn2 = intro_btn.cloneNode(true);
const contact_btn2 = contact_btn.cloneNode(true);
addscrollevent(intro_btn2, contact_btn2);
intro_btn2.setAttribute('class', 'menu-wide-item');
contact_btn2.setAttribute('class', 'menu-wide-item');
menu_wide.appendChild(intro_btn2);
menu_wide.appendChild(contact_btn2);
document.body.insertBefore(menu_wide, header);
console.log(menu_wide);
menu_btn.addEventListener('click', ()=>{
  eventhandler();
});
function eventhandler() {
  menu_wide.classList.toggle('show');
}
window.addEventListener('resize', ()=>{
  let media = window.matchMedia("screen and (min-width: 800px)");
  if (media.matches) {
    (menu_wide.className == 'menu-wide show') && menu_wide.classList.remove('show');
  }
});
