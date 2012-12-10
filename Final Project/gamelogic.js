/*
* gamelogic.js
*/

var playerHasFox       = false;  
var playerHasKnapsack  = false;
var playerHasKey       = false;
var playerHasSpatula   = false;
var playerHasMap       = false;
var playerHasBreeches  = false; 
var playerHasInventory = false; 
var talkedToBooch      = false; 

var endOfGame          = false; 


function init() {
  locationZero();
}    

// this is to win the game 
// you have to give all items to NPC Booch
// store other items in a new boochArray? 
// when the array is filled that is when you win the game? 
// use a for...in loop? 

boochArray = new Array(); 

function winGame() {
 // items needed to win game
 // fox, spatula, map, breeches
 // when all of these are in boochArray, the game is won. 
 var message = "Booch: I still need moar items!";
 switch (boochArray.length) {
  case 1: 
    updateDisplay(message);
    break;
  case 2:
    updateDisplay(message);
    break;   
  case 3: 
    updateDisplay(message);
    break;
  case 4: 
    updateDisplay("Congrats: YOU HAVE WON THE GAME! All items in the game have been given Booch. But more importantly, his breeches!");
    break;
  default : 
    updateDisplay("");
 }
}
function giveItem() {
  var message = "All items in your knapsack have been given to Booch!";
  switch (inventory.length) {
    // user has nothing at all 
    case 0 : 
      updateDisplay("You need an inventory to do that...");
      break;
    // user should only have knapsack
    case 1 : 
      updateDisplay("You can't give anything! Go find some items."); 
      break;
    // user has one item in inventory
/*    case 2 : 
      boochArray = inventory.slice(1,2);
      inventory.splice(1,2);
      updateDisplay(message);
      winGame(); 
      break; 
    // user has two items in inventory
    case 3 : 
      boochArray = inventory.slice(1,3);
      inventory.splice(1,3);
      updateDisplay(message); 
      winGame();
      break;
    //user has three items in inventory
    case 4 : 
      boochArray = inventory.slice(1,4);
      inventory.splice(1,4);
      updateDisplay(message); 
      winGame();
      break;
*/    // user has four items in inventory
    case 5 : 
      boochArray = inventory.slice(1,5);
      inventory.splice(1,5);
      updateDisplay(message);
      winGame();  
      break;
    // user has five items in inventory
    case 6 : 
      boochArray = inventory.slice(1,6);
      inventory.splice(1,6);
      updateDisplay(message);
      winGame();  
      break;
    default : 
      updateDisplay("Go get more items!"); 
  }
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
  updateDisplay(message + inventory);
}

function itemMap() {
  if (playerHasMap === false) {
    playerHasMap = true;
    inventory.push("Map");
    message = "This map is so cool!";
    updateDisplay(message);
  } else alreadyTookItem();
}

function itemBreeches() {
  if (playerHasBreeches === false) {
    playerHasBreeches = true;
    inventory.push("Breeches");
    message = "You took the breeches! Better 'give' them to Booch."; 
    updateDisplay(message);
  } else {
     alreadyTookItem(); 
    }
}
function itemSpatula() {
  if (playerHasSpatula === false) {
    playerHasSpatula = true;
    inventory.push("Spatula");
    message = "You take the spatula! Wonder why it's here...";
    updateDisplay(message);
  } else {
      alreadyTookItem();
    }
}

function itemFox() { 
  if (playerHasFox === false) {
    playerHasFox = true;
    inventory.push("Fox");
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
    inventory[0] = "Knapsack";
    message = "You took the knapsack! Maybe you can store other items in it...";
    updateDisplay(message);
    document.getElementById("invBtn").disabled = false;
  } else alreadyTookItem();
}