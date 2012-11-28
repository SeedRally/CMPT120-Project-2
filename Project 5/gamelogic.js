/*
* gamelogic.js
*/

var playerHasFox      = false;  
var playerHasKnapsack = false;
var playerHasKey      = false;
var playerHasSpatula  = false;
var playerHasMap      = false;

function init() {
  locationZero();
}    

function displayInventory() {
  var message = "You have: ";
  updateDisplay(message + inv);
}

function itemMap() {
  if (playerHasMap === false) {
    playerHasMap = true;
    inv[2] = "Map";
    message = "This map is so cool!";
    updateDisplay(message);
  } else alreadyTookItem();
}

function itemSpatula() {
  if (playerHasSpatula === false) {
    playerHasSpatula = true;
    inv[3] = "Spatula";
    message = "You take the spatula! Wonder why it's here...";
    updateDisplay(message);
  } else alreadyTookItem();
}

function itemFox() { 
  if (playerHasFox === false) {
    playerHasFox = true;
    inv[0] = "Fox";
    message = "After a long and possibly pointless struggle, you take the fox.";
    updateDisplay(message);
  } else alreadyTookItem();
}

function itemKnapsack() {
  if (playerHasKnapsack === false) {
    playerHasKnapsack = true;
    inv[1] = "Knapsack";
    message = "You took the knapsack! Maybe you can store other items in it...";
    updateDisplay(message);
    document.getElementById("invBtn").disabled = false;
  } else alreadyTookItem();
}