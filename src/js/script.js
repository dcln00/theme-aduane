let menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
let menu_links = document.querySelectorAll('.menu-link');
var clicked = false;

function disableScroll() {
  document.getElementsByTagName('html')[0].style.overflowY = "hidden";
}

function enableScroll() {
  document.getElementsByTagName('html')[0].style.overflowY = "scroll";
}

menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
    if(clicked) {
      enableScroll();
      clicked=false;
    } else {
      disableScroll();
      clicked=true;
    };

    for (i = 0; i < menu_links.length; i++) {
        
        ['animate__animated', 'animate__fadeInUp'].map(v=> menu_links[i].classList.toggle(v) )
        
      }
});

let remove_Classes = function removeClasses() {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
  if(clicked) {
    enableScroll();
    clicked=false;
  } else {
    disableScroll();
    clicked=true;
  };

  for (i = 0; i < menu_links.length; i++) {
        
    ['animate__animated', 'animate__fadeInUp'].map(v=> menu_links[i].classList.toggle(v) )
    
  }
};

for (i = 0; i < menu_links.length; i++) {
  menu_links[i].addEventListener('click', remove_Classes, false)
}
