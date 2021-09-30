'use strict';
const header = document.querySelector('.header');
const intro_container = document.querySelector('.intro');
const intro_btn = document.querySelector('#intro.nav-menu-item');
const contact_btn = document.querySelector('#contact.nav-menu-item');
const menu_wide = document.querySelector('.menu-wide');
const menu_wide_intro_btn = document.querySelector('#intro.menu-wide-item');
const menu_wide_contact_btn = document.querySelector('#contact.menu-wide-item');
const menu_btn = document.querySelector('.menu-btn');

addscrollevent(intro_btn,contact_btn);
addscrollevent(menu_wide_intro_btn,menu_wide_contact_btn);

menu_btn.addEventListener('click', ()=>{
  menu_wide.classList.toggle('show');
});
window.addEventListener('resize', ()=>{
  let media = window.matchMedia("screen and (min-width: 800px)");
  if (media.matches) {
    (menu_wide.className == 'menu-wide show') && menu_wide.classList.remove('show');
  }
});

function addscrollevent(intro,contact) {
  intro.addEventListener('click', ()=> {
    window.scrollTo(0,intro_container.getBoundingClientRect().y+window.pageYOffset);
  }); 
  contact.addEventListener('click', ()=> {
    window.scroll(0,document.body.scrollHeight);
  });
}



