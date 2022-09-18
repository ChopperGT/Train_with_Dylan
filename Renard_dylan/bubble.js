const compteur = document.querySelector("h1");
let compt = 0;
const bubbleMaker = () => {
  const bubble = document.createElement("span"); // j'ai crée un span
  bubble.classList.add("bubble"); // je lui dit qu'il va avoir la class bubble (pour mettre dans le css)
  document.body.appendChild(bubble); // body aura un enfant qui sera un span (j'ai injecter mon span a mon body)
  //console.log(Math.random()*100 +100); //Produit un chifre random entre 0 ET 1 on met *100 pour soit entre 0 ET 100 et + 100 pour mêtre un minimum

  //*********random la taille */
  const size = Math.random() * 200 + 100 + "px";
  // console.log(size);
  bubble.style.height = size;
  bubble.style.width = size;
  //**********fin la taille */

  //***random position******/
  bubble.style.top = Math.random() * 100 + 50 + "%"; //elle sera a minimum 50 % du haut comme ça elle viendra du bas
  bubble.style.left = Math.random() * 100 + "%";
  //****fin random position******/

  /****mouvement de la bulle*****/
  const plusMinus = Math.random() > 0.5 ? 1 : -1; // je déclare une constante qui prendra la valeu 1 ou -1 si math random est supérieur a 0.5 ou inféreiur à 0.5
  // que on peut pas injecter a keyframe on a mis des variable de position dedans
  bubble.style.setProperty("--left", Math.random() * 100 * +plusMinus + "%");
  /***fin du mouve :) */

  /****click qui va tuer bubble** */
  bubble.addEventListener("click", () => {
    compt++;
    compteur.textContent = compt;
    bubble.remove();
    console.log(compt);
  });

  //*****enleve la bulle au bout de 8s ***/
  setTimeout(() => {
    bubble.remove();
  }, 8000);
  //******fin la bulle est enlever***** */
};
/***creer plein de bulle dans a chaque 0.s***/
setInterval(bubbleMaker, 300);
