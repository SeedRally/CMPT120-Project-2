/*
*  locations.js
*/

var currentLocationX = 2; 
var currentLocationY = 4; 

function locationZero() {
  myLocation = 0;
  updateDisplay("You are about a mile WEST of the bank of the Hudson River. Type 'help' if you're stuck. [0]");
  if (!playerHasFox) {
  updateDisplay("You notice there is a small fox nearby.");
  } else {
      updateDisplay("There are claw marks on the ground...");
    }
}

    
function locationOne() {
  myLocation = 1;
  updateDisplay("There are nothing but trees around you. However, to the NORTH you see what appears to be a hiking trail. [1]");
  if (!checkLocOne) {
    checkLocOne = true;
    increment_score();
  } 
}
    
function locationTwo() {
  myLocation = 2;
  updateDisplay("To go this way you will have to swim across the Hudson. And let's be honest, you're not physically fit enough to do it... [2]");
  if (!checkLocTwo) {
    checkLocTwo = true;
    increment_score();
  } 
}

function locationThree() {
  myLocation = 3;
  updateDisplay("You see nothing but water and trees. There's definitely nothing this way. [3]");
  if (!checkLocThree) {
    checkLocThree = true;
    increment_score();
  } 
}
    
function locationFour() {
  myLocation = 4;
  updateDisplay("There is a big forested hill which will take about 2 days to hack though. You should probably go another way. [4]");
  if (!checkLocFour) {
    checkLocFour = true;
    increment_score();
  } 
}

function locationFive() {
  myLocation = 5;
  updateDisplay("You hike up the trail and come to an opening. You see a house to the EAST. [5]");
  if (!checkLocFive) {
    checkLocFive = true;
    increment_score();
  } 
}
    
function locationSix() {
  myLocation = 6;
  updateDisplay("Seriously dude, there's nothing over here. [6]");
  if (!checkLocSix) {
    checkLocSix = true;
    increment_score();
  } 
}

function locationSeven() {
  myLocation = 7;
  updateDisplay("Okay okay, fine. You find yourself standing before a small cabin. [7]");
  if (!playerHasKnapsack) {
    updateDisplay("The door has been left open and you see a knapsack.");
  } else {};
  if (!checkLocSeven) {
    checkLocSeven = true;
    increment_score();
  } 
}

function locationEight() {
  myLocation = 8;
  updateDisplay("This is location eight. ");
  if (!checkLocEight) {
    checkLocEight = true;
    increment_score();
  } 
}
function locationNine() {
  myLocation = 9;
  updateDisplay("This is location nine.");
  if (!checkLocNine) {
    checkLocNine = true;
    increment_score();
  } 
}
function locationTen() {
  myLocation = 10;
  updateDisplay("This is location ten.");
  if (!checkLocTen) {
    checkLocTen = true;
    increment_score();
  } 
}
