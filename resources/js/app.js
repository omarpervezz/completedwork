const pushbar = new Pushbar({
  blur: true,
  overlay: true,
});

//open a pushbar
pushbar.open("mypushbar1");
//close all pushbars
pushbar.close();

// mobile menu sab collpase
const collpaseMenu = document.getElementById('collapse_menu');
const expandCollapse = collpaseMenu.querySelector('.collpaseMenu');
console.log(expandCollapse)
const mobileMenuC = document.querySelector('#mobile-sub-menu');


collpaseMenu.addEventListener(('click'),  () => {
  mobileMenuC.classList.toggle('collapseMobileMenu');
  expand.classList.add('rotate');
  
})