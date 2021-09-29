'use strict';
const header = document.querySelector('.header');
const intro_container = document.querySelector('.intro');

const intro_btn = document.querySelector('#intro.nav-menu-item');
const contact_btn = document.querySelector('#contact.nav-menu-item');
addscrollevent(intro_btn,contact_btn);

function addscrollevent(intro,contact) {
  intro.addEventListener('click', ()=> {
    window.scrollTo(0,intro_container.getBoundingClientRect().y+window.pageYOffset);
  }); 
  contact.addEventListener('click', ()=> {
    window.scroll(0,document.body.scrollHeight);
  });
}

const menu_wide = document.createElement('menu_wide');
menu_wide.setAttribute('class', 'menu-wide');

const intro_btn2 = intro_btn.cloneNode(true);
intro_btn2.setAttribute('class', 'menu-wide-item');
const contact_btn2 = contact_btn.cloneNode(true);
contact_btn2.setAttribute('class', 'menu-wide-item');
addscrollevent(intro_btn2, contact_btn2);

menu_wide.appendChild(intro_btn2);
menu_wide.appendChild(contact_btn2);
document.body.insertBefore(menu_wide, header);

const menu_btn = document.querySelector('.menu-btn');
menu_btn.addEventListener('click', ()=>{
  menu_wide.classList.toggle('show');
});

window.addEventListener('resize', ()=>{
  let media = window.matchMedia("screen and (min-width: 800px)");
  if (media.matches) {
    (menu_wide.className == 'menu-wide show') && menu_wide.classList.remove('show');
  }
});
