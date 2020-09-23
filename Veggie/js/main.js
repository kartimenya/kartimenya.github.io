
const menuIcon = document.getElementsByClassName('menu__icon')[0],
      menuBbody = document.getElementsByClassName('menu__body')[0]

menuIcon.addEventListener('click', () =>{
  menuIcon.classList.toggle("active");
  menuBbody.classList.toggle("active");
});
