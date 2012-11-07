/*
* gamelogic.js
*/

var playerHasFox      = false;  
var playerHasKnapsack = false;
var playerHasKey      = false;


function init() {
  locationZero();
}    

function displayInventory() {
  var message = "Inventory: ";
  if (playerHasFox) {
    message = message + "Fox, ";
  } 
  updateDisplay(message);
}

function itemFox() { 
  if (playerHasFox === false) {
    playerHasFox = true;
    message = "After a long and possibly pointless struggle, you take the fox.";
    updateDisplay(message);
  } else alreadyTookItem();
}

function itemKnapsack() {
  if (playerHasKnapsack === false) {
    playerHasKnapsack = true;
    message = "You took the knapsack! Maybe you can store other items in it...";
    updateDisplay(message);
    document.getElementById("invBtn").disabled = false;
  } else alredyTookItem();
}