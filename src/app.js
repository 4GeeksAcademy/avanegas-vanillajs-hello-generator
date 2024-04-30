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

  let generator = [];
  let newGenerator = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < ext.length; l++) {
          generator.push(pronoun[i] + adj[j] + noun[k] + ext[l]);
        }
      }
    }
  }
  newGenerator = generator[Math.floor(Math.random() * 32)];

  let element = document.getElementById("generator");
  element.innerHTML = newGenerator;

  let elementTwo = document.getElementById("warning");
  elementTwo.textContent = `${generator.length} combinaciones posibles`;
};
