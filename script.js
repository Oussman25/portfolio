const logo = document.querySelector(".logo h1");
const burgerMenuBars = document.querySelectorAll(".bar");
const section = document.querySelector("section");
const pagePresentation = document.querySelector("#pagepresentation");
const pageCompetences = document.querySelector("#pagecompetences");
const pageProjet = document.querySelector("#pageprojet");
const pageContact = document.querySelector("#pagecontact");
const selecteurs = document.querySelectorAll(".selecteur a");
const selecteursHover = document.querySelectorAll(".selecteur a:hover");

function mettreAJourClasses(scrollPosition, hauteur1, hauteur2, hauteur3) {
  if (scrollPosition < hauteur1) {
    logo.classList.remove("colorChange1");
    logo.textContent = "[OUSSMAN]";
    burgerMenuBars.forEach(bar => bar.classList.remove("bgColorChange1"));
    selecteurs.forEach(selecteur => selecteur.classList.remove("bdColorChange1"));
    selecteursHover.forEach(selecteur => selecteur.classList.remove("bgColorChange1"));
  } else {
    logo.classList.add("colorChange1");
    logo.textContent = "[O]";
    burgerMenuBars.forEach(bar => bar.classList.add("bgColorChange1"));
    selecteurs.forEach(selecteur => selecteur.classList.add("bdColorChange1"));
    selecteursHover.forEach(selecteur => selecteur.classList.add("bgColorChange1"));
  }

  if (scrollPosition < hauteur2) {
    logo.classList.remove("colorChange2");
    burgerMenuBars.forEach(bar => bar.classList.remove("bgColorChange2"));
    selecteurs.forEach(selecteur => selecteur.classList.remove("bdColorChange2"));
    selecteursHover.forEach(selecteur => selecteur.classList.remove("bgColorChange2"));
  } else {
    logo.classList.add("colorChange2");
    burgerMenuBars.forEach(bar => bar.classList.add("bgColorChange2"));
    selecteurs.forEach(selecteur => selecteur.classList.add("bdColorChange2"));
    selecteursHover.forEach(selecteur => selecteur.classList.add("bgColorChange2"));
  }

  if (scrollPosition < hauteur3) {
    logo.classList.remove("colorChange3");
    burgerMenuBars.forEach(bar => bar.classList.remove("bgColorChange3"));
    selecteurs.forEach(selecteur => selecteur.classList.remove("bdColorChange3"));
    selecteursHover.forEach(selecteur => selecteur.classList.remove("bgColorChange3"));
  } else {
    logo.classList.add("colorChange3");
    burgerMenuBars.forEach(bar => bar.classList.add("bgColorChange3"));
    selecteurs.forEach(selecteur => selecteur.classList.add("bdColorChange3"));
    selecteursHover.forEach(selecteur => selecteur.classList.add("bgColorChange3"));
  }
}

function limiter(func, limit) {
  let lastFunc;
  let lastRan;
  return function() {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

window.addEventListener("scroll", limiter(() => {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  const hauteurPage1 = pagePresentation.offsetHeight - 50;
  const hauteurPage2 = hauteurPage1 + pageCompetences.offsetHeight;
  const hauteurPage3 = hauteurPage2 + pageProjet.offsetHeight;

  mettreAJourClasses(scrollPosition, hauteurPage1, hauteurPage2, hauteurPage3);
}, 100));

function defilementDoux(elementCible) {
  window.scrollTo({
    top: elementCible.offsetTop,
    behavior: 'smooth'
  });
}

console.log(section.offsetHeight);

const burgerMenu = document.querySelector('.burger-menu');
const contenu = document.querySelector('.content');

burgerMenu.addEventListener('click', function () {
  this.classList.toggle('active');
  contenu.classList.toggle('active');
});
