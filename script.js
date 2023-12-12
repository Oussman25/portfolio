const colorChange1 = document.querySelector('.colorChange1')
const logo =  document.querySelector(".logo h1")
const section = document.querySelector("section")

const pagepresentation = document.querySelector("#pagepresentation")
const pagecompetences = document.querySelector("#pagecompetences")
const pageprojet = document.querySelector("#pageprojet")
const pagecontact = document.querySelector("#pagecontact")

window.addEventListener("scroll", () => {
  // Obtenez la position de défilement verticale
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  const pageheight1 = section.offsetHeight - 50
  const pageheight2 = pageheight1 + section.offsetHeight
  const pageheight3 = pageheight2 + section.offsetHeight

  // if (scrollPosition > 0 ) {
  //   smoothScrolling(pagecompetences);
  // }
  if (scrollPosition < pageheight1) {
    logo.classList.remove("colorChange1");
    logo.textContent = "[OUSSMAN]"
  }
  if (scrollPosition > pageheight1) {
    logo.classList.add("colorChange1");
    logo.textContent = "[O]"
  } 
  if (scrollPosition < pageheight2) {
    logo.classList.remove("colorChange2");
  }
  if (scrollPosition > pageheight2 ) {
    logo.classList.add("colorChange2");
  }
  if (scrollPosition < pageheight3) {
    logo.classList.remove("colorChange3");
  }
  if (scrollPosition > pageheight3 ) {
    logo.classList.add("colorChange3");
  }
});

function smoothScrolling(targetElement) {
  window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
  });
}

console.log(section.offsetHeight);

const burgerMenu = document.querySelector('.burger-menu');
const content = document.querySelector('.content');

burgerMenu.addEventListener('click', function () {
    this.classList.toggle('active');
    content.classList.toggle('active');
});
