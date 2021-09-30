'use strict';
const header = document.querySelector('.header');
const intro_container = document.querySelector('.intro');
const intro_btn = document.querySelector('#intro.nav-menu-item');
const contact_btn = document.querySelector('#contact.nav-menu-item');

const menu_wide = document.querySelector('.menu-wide');
const menu_wide_intro_btn = document.querySelector('#intro.menu-wide-item');
const menu_wide_contact_btn = document.querySelector('#contact.menu-wide-item');
const menu_btn = document.querySelector('.menu-btn');

const projects_menu = document.querySelector('.projects-menu');
const main_items = document.querySelectorAll('.main-item'); 

Addscroll(intro_btn,contact_btn);
Addscroll(menu_wide_intro_btn,menu_wide_contact_btn);

projects_menu.addEventListener('click', (e)=>{
  Filterdisplay(e);
});
menu_btn.addEventListener('click', ()=>{
  menu_wide.classList.toggle('show');
});
window.addEventListener('resize', ()=>{
  let media = window.matchMedia("screen and (min-width: 800px)");
  if (media.matches) {
    (menu_wide.className == 'menu-wide show') && menu_wide.classList.remove('show');
  }
});


function Addscroll(intro,contact) {
  intro.addEventListener('click', ()=> {
    window.scrollTo(0,intro_container.getBoundingClientRect().y+window.pageYOffset);
  }); 
  contact.addEventListener('click', ()=> {
    window.scroll(0,document.body.scrollHeight);
  });
}
function Filterdisplay(e) {
  const target = e.target.dataset.id ;
  if(!target) {
    return;
  }
  else {
    main_items.forEach(item => {
      const id_array = item.dataset.id.split(" ");
      if(!id_array.includes(target)) {
        item.style.display = 'none';
      }
      else {
        item.style.display = 'inline';
      }
    })
  }
}


