const menuBtn = document.getElementsByClassName('menu__btn')[0],
  menuBbody = document.getElementsByClassName('menu__body')[0],
  btnCloser = document.getElementsByClassName('menu__body-close')[0]

menuBtn.addEventListener('click', () => {
  menuBbody.classList.add("_active");
});

btnCloser.addEventListener('click', () => {
  menuBbody.classList.remove("_active");
});

document.body.addEventListener('click', (e) => {
  let path = e.path;
  if (!path.includes(menuBbody) && !path.includes(menuBtn)) {
    menuBbody.classList.remove("_active");
  }
});
