let animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll)
  function animOnScroll() {
    for (let i = 0; i < animItems.length; i++) {
      let animItem = animItems[i];
      let animItemHeight = animItem.offsetHeight;
      let animItemOffset = offset(animItem).top;
      let animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if ((window.scrollY > animItemOffset - animItemPoint) && window.scrollY < (animItemOffset + animItemHeight)) {
        animItem.classList.add('active');
      } else {
        if (!animItem.classList.contains('anim-no-hide')) {
          animItem.classList.remove('active');
        }

        //а если мы хотим чтоб анимация сохранялась при скролле вверх и вниз, то оставляем просто
        // else {animItem.classList.remove('active');}
      }
    }
  }
  function offset(elem) {
    let rect = elem.getBoundingClientRect();
    let scrollLeft = window.scrollX || document.documentElement.scrollLeft;
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    }
  }
  animOnScroll();
}


// window.scrollX = pageXOffset
// window.scrollY  = pageYOffset