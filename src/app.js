/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let ext = [".com", ".net", ".us", ".io"];

  let randomWords = array => {
    return Math.floor(Math.random() * array.length);
  };

  let generator = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < ext.length; l++) {
          const pronounRandom = randomWords(pronoun);
          const adjRandom = randomWords(adj);
          const nounRandom = randomWords(noun);
          const extRandom = randomWords(ext);
          generator.push([
            pronoun[pronounRandom] +
              adj[adjRandom] +
              noun[nounRandom] +
              ext[extRandom]
          ]);
        }
      }
    }
  }
  console.log(`${generator.length} combinaciones posibles`);
  console.log(generator);

  let element = document.getElementById("excuse");
  element.innerHTML = excuse;
};
