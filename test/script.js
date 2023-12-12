const animationElement = document.querySelector(".animation");

animationElement.style.position = "absolute";

function startAnimation() {
    let startTimeV = Date.now();
    let startTimeH = Date.now()
    let typeV = ""
    let typeH = ""

    function animate() {
        let currentTime = Date.now();
        let elapsedTimeV = currentTime - startTimeV;
        let elapsedTimeH = currentTime - startTimeH

        // Calculer les positions horizontale et verticale à l'instant donné
        let horizontalPosition = ((elapsedTimeH) / 31410)*100; // 31410 ms correspond à 31.41s
        let verticalPosition = ((elapsedTimeV) / 14140)*100; // 14140 ms correspond à 14.14s

        // Appliquer les positions au style de l'élément
        if (verticalPosition > 99 ){
            startTimeV = Date.now() 
            typeV === "" ? typeV = "-": typeV = ""; 

        }
        if (horizontalPosition > 99){
            startTimeH = Date.now() 
            typeH === "" ? typeH = "-": typeH = ""; 
        }
        if (typeV === "-"){
            verticalPosition = 100 - verticalPosition
        }
        if (typeH === "-"){
            horizontalPosition = 100 - horizontalPosition
        }
        animationElement.style.left = `${horizontalPosition}%`;
        animationElement.style.top = `${verticalPosition}%`;

        console.log(startTimeH, startTimeV, verticalPosition, horizontalPosition);
        // Répéter l'animation
        requestAnimationFrame(animate);
    }

    // Démarrer l'animation
    animate();
}

// Démarrer l'animation lorsque la page est chargée
window.addEventListener("load", startAnimation);


window.addEventListener("scroll", () => {
  // Obtenez la position de défilement verticale
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  // Changez la couleur de fond lorsque l'utilisateur fait défiler la page au-delà de 200 pixels
  if (scrollPosition > 200) {
    animationElement.classList.add = "changeColor1";
  } else {
    animationElement.classList.remove = "changeColor1";
  }
});
