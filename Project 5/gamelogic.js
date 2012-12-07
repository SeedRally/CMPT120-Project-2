/*
* gamelogic.js
*/

var playerHasFox       = false;  
var playerHasKnapsack  = false;
var playerHasKey       = false;
var playerHasSpatula   = false;
var playerHasMap       = false;
var playerHasInventory = false; 
var talkedToBooch      = false; 



function init() {
  locationZero();
}    

function lookAtItem(name) {
/*  var str = document.getElementById("txtCommand");
  var itemIndex = inv[name];
  switch (name) {
    case "FOX"      : itemIndex = 0;
      break;
    case "KNAPSACK" : itemIndex = 1;
      break;
    case "MAP"      : itemIndex = 2; 
      break;
    case "SPATULA"  : itemIndex = 3;
      break;
    default        : itemIndex = -1; 
  }
  
  if (itemIndex >= 0) {
    updateDisplay("You see..." + inv[name].description);
  } else {
      updateDisplay("You have no such item.");
    }
     
   var str = document.getElementById("txtCommand");
   var n   = str.split(" ");
   n[0] = "FOX";
   n[1] = "KNAPSACK"; 
   n[2] = "MAP";
   n[3] = "SPATULA";
*/
}
function randomSpeeches(min, max) {
  var speech = Math.floor(Math.random() * (max - min + 1)) + min;
  
  switch (speech) {
  case 1 : 
    updateDisplay("Just find my breeches, okay?");
    break;
  case 2 : 
    updateDisplay("Hey! If you need help, type 'help'.");
    break;
  case 3 :
    updateDisplay("Remember when you find my breeches or any other item, you can give them to me. Use the 'give' command.");
    break;
  case 4 :
    updateDisplay("I've been worried about my FOX, Gerald. Tomorrow's his birthday and I promised him we'd go to Chucky Cheese's.");
    break;
  default :
    updateDisplay("ARGHHHHHHHHHHHHHHHHHHHH!");
  }
}

function talkBooch() {
  if ((talkedToBooch === false) && (myLocation === 9)) {
    talkedToBooch = true;
    var message = "Booch: Hello there! The name's Booch. I've been looking around for my breeches. Have you seen them? If you can find them, I'll reward you handsomely.";
    updateDisplay(message);
  } else if ((talkedToBooch === true) && (myLocation === 9)) {
      randomSpeeches(1,4); 
  } else {
      updateDisplay("There's no one here!"); 
  }
}

function displayInventory() {
  var message = "You have: ";
  updateDisplay(message + inv);
}

function itemMap() {
  if (playerHasMap === false) {
    playerHasMap = true;
    inventory[2] = "Map";
    message = "This map is so cool!";
    updateDisplay(message);
  } else alreadyTookItem();
}

function itemSpatula() {
  if (playerHasSpatula === false) {
    playerHasSpatula = true;
    inventory[3] = "Spatula";
    message = "You take the spatula! Wonder why it's here...";
    updateDisplay(message);
  } else {
      alreadyTookItem();
    }
}

function itemFox() { 
  if (playerHasFox === false) {
    playerHasFox = true;
    inventory[0] = "Fox";
    message = "After a long and possibly pointless struggle, you take the fox.";
    updateDisplay(message);
  } else {
      alreadyTookItem();
    }
}


function itemKnapsack() {
  if (playerHasKnapsack === false) {
    playerHasKnapsack  = true;
    playerHasInventory = true; 
    inventory[1] = "Knapsack";
    message = "You took the knapsack! Maybe you can store other items in it...";
    updateDisplay(message);
    document.getElementById("invBtn").disabled = false;
  } else alreadyTookItem();
}