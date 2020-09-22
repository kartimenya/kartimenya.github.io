const menuBtn = document.getElementsByClassName('menu__btn')[0],
      menuBbody = document.getElementsByClassName('menu__body')[0],
      btnCloser = document.getElementsByClassName('menu__body-close')[0],
      popup = document.getElementsByClassName('sorting-label__popup')[0],
      sortingLabel = document.getElementById('sorting-label')

menuBtn.addEventListener('click', () =>{
  menuBbody.classList.add("_active");
});

btnCloser.addEventListener('click', () =>{
  menuBbody.classList.remove("_active");
});

sortingLabel.addEventListener('click', () =>{
  popup.classList.toggle ("_open");
  sortingLabel.classList.toggle ("_open");
});

document.body.addEventListener('click', (e) =>{
  let path = e.path;
  if (!path.includes(sortingLabel)) {
    popup.classList.remove ("_open");
    sortingLabel.classList.remove ("_open");
  }if (!path.includes(menuBbody) && !path.includes(menuBtn)){
    menuBbody.classList.remove("_active");
  }
});
