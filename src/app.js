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

  let pronounRandom = [];
  let adjRandom = [];
  let nounRandom = [];
  let extRandom = [];
  let generator = [];
  const warning = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < ext.length; l++) {
          pronounRandom = randomWords(pronoun);
          adjRandom = randomWords(adj);
          nounRandom = randomWords(noun);
          extRandom = randomWords(ext);
          generator = [
            pronoun[pronounRandom] +
              adj[adjRandom] +
              noun[nounRandom] +
              ext[extRandom]
          ];
          console.log(generator);
          warning.push([
            pronoun[pronounRandom] +
              adj[adjRandom] +
              noun[nounRandom] +
              ext[extRandom]
          ]);
        }
      }
    }
  }

  let element = document.getElementById("generator");
  element.innerHTML = generator;

  let elementTwo = document.getElementById("warning");
  elementTwo.textContent = `${warning.length} combinaciones posibles`;
};
