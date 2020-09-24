const menuBurger = document.getElementsByClassName('menu__burger')[0],
      menuBbody = document.getElementsByClassName('menu__body')[0]

menuBurger.addEventListener('click', () =>{
  menuBurger.classList.toggle("active");
  menuBbody.classList.toggle("active");
});

document.body.addEventListener('click', (e) =>{
  let path = e.path;
  if (!path.includes(menuBurger) && !path.includes(menuBbody)){
    menuBbody.classList.remove("active");
    menuBurger.classList.remove("active");
  }
});
