import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let iconsArray = ["♦", "♥", "♠", "♣"]
  let iconArraySelected = iconsArray[Math.floor(Math.random() * iconsArray.length)]
  document.querySelector(".icons").innerHTML = iconArraySelected
  document.querySelector(".iconBottom").innerHTML = iconArraySelected

  let numberArray = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
  document.querySelector("#number").innerHTML = numberArray[Math.floor(Math.random() * numberArray.length)]

  if (iconArraySelected == "♦" || iconArraySelected == "♥") {
    document.querySelector(".icons").style.color = "red";
    document.querySelector(".iconBottom").style.color = "red";
    document.querySelector("#number").style.color = "red";
  }
}





