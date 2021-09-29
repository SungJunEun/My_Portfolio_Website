'use strict';
const intro = document.querySelector('.intro');
const intro_y = intro.getBoundingClientRect().y+ window.pageYOffset;

const intro_btn = document.querySelector('#intro.nav-menu-item');
intro_btn.addEventListener('click', ()=> {
  window.scroll(0,intro_y);
});

const contact_btn = document.querySelector('#contact.nav-menu-item');
contact_btn.addEventListener('click', ()=> {
  window.scroll(0,document.body.scrollHeight);
});

const menu_btn = document.querySelector('.menu-btn');
const header = document.querySelector('.header');
const menu_wide = document.createElement('menu_wide');
menu_wide.setAttribute('class', 'menu-wide');
const intro_btn2 = intro_btn.cloneNode(true);
const contact_btn2 = contact_btn.cloneNode(true);
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
  menu_wide.classList.toggle('menu-wide-show');
}
