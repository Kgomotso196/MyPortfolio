const menu = document.querySelector('.hamItems');
const mobNav = document.querySelector('.mobileNav');
const ham = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.closeBtn');
const hide = document.querySelector('.footerSocialIconsContainer');

menu.classList.add('invisible');

ham.addEventListener('click', () => {
  menu.classList.remove('invisible');
  mobNav.classList.add('invisible');
  hide.classList.add('invisible');
});

closeBtn.addEventListener('click', () => {
  mobNav.classList.remove('invisible');
  menu.classList.add('invisible');
  hide.classList.remove('invisible');
});

menu.addEventListener('click', () => {
  menu.classList.add('invisible');
  mobNav.classList.remove('invisible');
  hide.classList.remove('invisible');
});
