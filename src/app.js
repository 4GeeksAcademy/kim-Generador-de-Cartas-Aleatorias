import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
              //   0    1    2    3    4    5    6    7    8     9    10   11   12
  const suits = [
    { name: "heart", symbol: "♥" },
    { name: "spade", symbol: "♠" },
    { name: "club", symbol: "♣" },
    { name: "diamond", symbol: "♦" }
  ];

  const randomValue = values[Math.floor(Math.random() * values.length)];
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];

  const card = document.getElementById("card");
  const value = document.getElementById("value");
  const topSuit = document.getElementById("top-suit");
  const bottomSuit = document.getElementById("bottom-suit");

  card.className = "card " + randomSuit.name;
  value.textContent = randomValue;
  topSuit.textContent = randomSuit.symbol;
  bottomSuit.textContent = randomSuit.symbol;
};

