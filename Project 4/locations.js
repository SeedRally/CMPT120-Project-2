/*
*  locations.js
*/

function locationZero() {
//  myLocation = 0;
//  updateDisplay("You are about a mile WEST of the bank of the Hudson River. Type 'help' if you're stuck. [0]");
//  if (!playerHasFox) {
//  updateDisplay("You notice there is a small fox nearby.");
//  } else {
//      updateDisplay("There are claw marks on the ground...");
//    }
}

    
function locationOne() {
  myLocation = 1;
  west = true;
  east = true;
  updateDisplay("There are nothing but trees around you. However, to the NORTH you see what appears to be a hiking trail. [1]");
  if (scoreLocOne===0) {
    scoreLocOne = scoreLocOne + 1;
    increment_score();
  } 
}
    
function locationTwo() {
  myLocation = 2;
  east = true;
  north = true;
  south = true;
  updateDisplay("To go this way you will have to swim across the Hudson. And let's be honest, you're not physically fit enough to do it... [2]");
  if (scoreLocTwo===0) {
    scoreLocTwo = scoreLocTwo + 1;
    increment_score();
  } 
}

function locationThree() {
  myLocation = 3;
  west = true;
  updateDisplay("You see nothing but water and trees. There's definitely nothing this way. [3]");
  if (scoreLocThree===0) {
    scoreLocThree = scoreLocThree + 1;
    increment_score();
  } 
}
    
function locationFour() {
  myLocation = 4;
  north = true;
  south = true;
  west = true;
  updateDisplay("There is a big forested hill which will take about 2 days to hack though. You should probably go another way. [4]");
  if (scoreLocFour===0) {
    scoreLocFour = scoreLocFour + 1;
    increment_score();
  } 
}

function locationFive() {
  myLocation = 5;
  north = true;
  west = true;
  updateDisplay("You hike up the trail and come to an opening. You see a house to the EAST. [5]");
  if (scoreLocFive===0) {
    scoreLocFive = scoreLocFive + 1;
    increment_score();
  } 
}
    
function locationSix() {
  myLocation = 6;
  east = true;
  west = true;
  updateDisplay("Seriously dude, there's nothing over here. [6]");
  if (scoreLocSix===0) {
    scoreLocSix = scoreLocSix + 1;
    increment_score();
  } 
}
// TODO: add 4 more locations. go into a house and be able to get an item to help on quest. maybe add puzzle/riddle element.  
function locationSeven() {
  myLocation = 7;
  east = true;
  west = true;
  south = true;
  updateDisplay("Okay okay, fine. You find yourself standing before a small cabin. [7]");
  if (!playerHasKnapsack) {
    updateDisplay("The door has been left open and you see a knapsack.");
  } else {};
  if (scoreLocSeven===0) {
    scoreLocSeven = scoreLocSeven + 1;
    increment_score();
  } 
}

function locationEight() {
  myLocation = 8;
  north = true;
  south = true;
  east = true;
  updateDisplay("This is location eight. ");
  if (scoreLocEight===0) {
    scoreLocEight = scoreLocEight + 1;
    increment_score();
  } 
}
function locationNine() {
  myLocation = 9;
  north = true;
  east = true;
  updateDisplay("This is location nine.");
  if (scoreLocNine===0) {
    scoreLocNine = scoreLocNine + 1;
    increment_score();
  } 
}
function locationTen() {
  myLocation = 10;
  east = true;
  west = true;
  south = true;
  updateDisplay("This is location ten.");
  if (scoreLocTen===0) {
    scoreLocTen = scoreLocTen + 1;
    increment_score();
  } 
}

