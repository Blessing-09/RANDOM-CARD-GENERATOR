import "bootstrap";
import "./style.css";


// import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function() {

const $ = selector => document.querySelector(selector);
let $upperMain = $(".upper-main");
let $middlesMain = $(".middle-main");
let $lowerMain = $(".lower-main");
let $btnCard = $("#btn-card");

if($btnCard) {

$btnCard.addEventListener('click', function() {

let figureArray = ["♠︎", "♣︎", "♥︎", "♦︎"];
let middleArray = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let colorArray = ["#bf0a1c", "#1a1a1a"];

let generateRandomValues = (values) => {
  let randomValues = Math.floor(Math.random()*values.length);
  return values[randomValues];
}

  let randomFigure = generateRandomValues(figureArray);
  let randomMiddle = generateRandomValues(middleArray);
    $upperMain.innerText = randomFigure;
    $lowerMain.innerText = randomFigure;
    $middlesMain.innerText =randomMiddle;

    let randomColor = generateRandomValues(colorArray);
      $middlesMain.style.color = randomColor;
      $upperMain.style.color = randomColor;
      $lowerMain.style.color = randomColor;
      $btnCard.style.color = randomColor;
  
});
}
else {
  console.log("Error: Button not found");
}
 }

  //  $middlesMain.style.textShadow = ` 0 10px 0px rgba(155, 15, 15, 0.3)`;
  //  $upperMain.style.textShadow = ` 0 10px 0px rgba(155, 15, 15, 0.3)`;
  //  $lowerMain.style.textShadow = ` 0 10px 0px rgba(155, 15, 15, 0.3)`;

// function changeColor(element) {
//   let randomColor = generateRandomValues(colorArray);
//   element.style.color = randomColor;
//   element.style.textShadow = "0px 0px 10px " + randomColor;
// }
//   changeColor()