/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const btn = document.querySelector("button");
btn.addEventListener("click", function hola() {
  const pronoun = ["the", "our"];
  const adj = ["great", "big"];
  const noun = ["jogger", "racoon"];
  const dom = [".com", ".net", ".io"];
  var result = "";

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < dom.length; l++) {
          result = result + pronoun[i] + adj[j] + noun[k] + dom[l] + "<br>";
          document.getElementById("ListaDom").innerHTML = result;
        }
      }
    }
  }
});
