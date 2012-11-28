/*
*   LocationObject.js
*/

// Location Prototype
function Location(_id, _name, _description, _item) {
   // Attributes
    this.id           = _id;
    this.name         = _name;
    this.description  = _description;
    this.item         = _item;
    
  // Behaviors   
    this.toString = function() {
        var retVal = "";
        retVal = "Name: " + this.name               + "\n" +
                 "Description: " + this.description + "\n" +
                 "Item: " +     this.item + "\n";   
                 
        return retVal; 
      
    }
    
}



var locationArray = new Array(); 

// the negative numbers are locations you can't go to 
var nav = [       //  N   S   E   W
                  //   0   1   2   3
          /* 0 */    [ 1,  3,  2,  4],
          /* 1 */    [ 5,  0, -1, -1],
          /* 2 */    [-1, -1, -1,  0],
          /* 3 */    [ 0,  6,  8, -1],
          /* 4 */    [-1, -1,  0, -1],
          /* 5 */    [-1,  1,  9, -1],
          /* 6 */    [ 3,  7, -1, -1],
          /* 7 */    [ 6, -1, -1, -1],
          /* 8 */    [-1, -1, -1,  3],
          /* 9 */    [-1, 10, -1,  5],
          /*10 */    [ 9, -1, -1, -1],   
          ]
          
var inv = new Array();
 
function item (_id, _name, _description) {
  // Attributes
  this.id           = _id;
  this.name         = _name;
  this.description  = _description;
  
  // Behaviors
  this.toString = function() {
    var retVal = ""; 
    retVal = "Location Found: "    + "\n" +
             "Name: "              + "\n" +
             "Description: "       + "\n";
             
      return retVal; 
  }
}   

  function instantiateItems() {
    Fox       = new item("0", "Red Fox", "Soft and dangerous");
    Knapsack  = new item("1", "Knapsack", "You put things in it."); 
    Map       = new item("2", "Map", "It's brand new. Like it's super shiny.");
    Spatula   = new item("3", "Spatula", "There's some crusty stuff on it. It looks pretty good.");
  
    inv[0] = Fox;
    inv[1] = Knapsack;
    inv[2] = Map; 
    inv[3] = Spatula;
  
  }

  function instantiateLocations() {
    Loc0  = new Location("0",  "Location 0", "This is location number ZERO.",  "There's a small fox nearby.");
    Loc1  = new Location("1",  "Location 1", "This is location number ONE.",   null);
    Loc2  = new Location("2",  "Location 2", "This is location number TWO.",   null);
    Loc3  = new Location("3",  "Location 3", "This is location number THREE.", null); 
    Loc4  = new Location("4",  "Location 4", "This is location number FOUR.",  null);
    Loc5  = new Location("5",  "Location 5", "This is location number FIVE.",  null); 
    Loc6  = new Location("6",  "Location 6", "This is location number SIX.",   null); 
    Loc7  = new Location("7",  "Location 7", "This is location number SEVEN.", "There's a cabin. The door is open and you see a Knapsack."); 
    Loc8  = new Location("8",  "Location 8", "This is location number EIGHT.", "Item time! It's a map!"); 
    Loc9  = new Location("9",  "Location 9", "This is location number NINE.",  "There's an item here! Your lucky day! It's a spatula!"); 
    Loc10 = new Location("10", "Location 10", "This is location number TEN.",  null); 
    
  
    locationArray[0]  = Loc0;
    locationArray[1]  = Loc1;
    locationArray[2]  = Loc2;
    locationArray[3]  = Loc3;
    locationArray[4]  = Loc4;
    locationArray[5]  = Loc5;
    locationArray[6]  = Loc6;
    locationArray[7]  = Loc7;
    locationArray[8]  = Loc8;
    locationArray[9]  = Loc9;
    locationArray[10] = Loc10;
  }

function move(direction) {
  var newLocation = nav[myLocation][direction];
  if (newLocation !== -1) {
     myLocation = newLocation;
     alreadyVisited();
     instantiateLocations();
     updateDisplay(locationArray[myLocation]);
  } else {
      updateDisplay(cannotGo);
    }
}

function alreadyVisited() {
  switch ( myLocation ) {
    case 0: 
      checkLocZero = true;
        break;
    case 1:
      if (!checkLocOne) {
        checkLocOne = true;
        increment_score();
      } 
        break;
    case 2: 
      if (!checkLocTwo) {
        checkLocTwo = true;
        increment_score();
      } 
        break;
    case 3: 
      if (!checkLocThree) {
        checkLocThree = true;
        increment_score();
      } 
        break;
    case 4: 
      if (!checkLocFour) {
        checkLocFour = true;
        increment_score();
      } 
        break; 
    case 5: 
      if (!checkLocFive) {
        checkLocFive = true;
        increment_score();
      } 
        break;
    case 6:
      if (!checkLocSix) {
        checkLocSix = true;
        increment_score();
      } 
        break;
    case 7: 
      if (!checkLocSeven) {
        checkLocSeven = true;
        increment_score();
      } 
        break;
    case 8: 
      if (!checkLocEight) {
        checkLocEight = true;
        increment_score();
      } 
        break;
    case 9: 
      if (!checkLocNine) {
        checkLocNine = true;
        increment_score();
      } 
        break; 
    case 10: 
      if (!checkLocTen) {
        checkLocTen = true;
        increment_score();
      } 
        break;
  }
}



