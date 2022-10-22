/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#excuse").innerHTML = generarexcusa();
};
const generarexcusa = () => {
  let pronoun = ["A", "The"];
  let subject = ["cat", "dog", "mice", "little kid"];
  let action = ["took", "ate", "threw", "stole"];
  let possetion = [
    "my homework",
    "the pages of my book",
    "the food",
    "my phone"
  ];
  let when = ["last night", "Friday Night", "yesterday."];
  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subjIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let whenIndex = Math.floor(Math.random() * when.length);
  return (
    pronoun[proIndx] +
    " " +
    subject[subjIndex] +
    " " +
    action[actionIndex] +
    " " +
    possetion[possetionIndex] +
    " " +
    when[whenIndex]
  );
};
