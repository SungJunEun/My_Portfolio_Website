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