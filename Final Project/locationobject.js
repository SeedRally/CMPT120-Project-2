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
        retVal = "Name: "           + this.name        + "\n" +
                 ">: Location: "    + this.id          + "\n" +
                 ">: Description: " + this.description + "\n" +
                 ">: Item: "        + this.item        + "\n";   
                 
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
          
var itemArray = new Array();
 
function item (_id, _name, _description, _locationFound) {
  // Attributes
  this.id            = _id;
  this.name          = _name;
  this.description   = _description;
  this.locationFound = _locationFound;
  
  // Behaviors
  this.toString = function() {
    var retVal = ""; 
    retVal = "Location Found: " + this.locationFound    + "\n" +
             "Name: "           + this.name             + "\n" +
             "Description: "    + this.description      + "\n";
             
      return retVal; 
  }
}   

  function instantiateItems() {
    Fox       = new item("0", "Red Fox", "Soft and dangerous");
    Knapsack  = new item("1", "Knapsack", "You put things in it."); 
    Map       = new item("2", "Map", "It's brand new. Like it's super shiny.");
    Spatula   = new item("3", "Spatula", "There's some crusty stuff on it. It looks pretty good.");
    Breeches  = new item("4", "Breeches", "They are breeches. On the tag it says: 'PROPERTY OF BOOCH'.");

    itemArray[0] = Fox;
    itemArray[1] = Knapsack;
    itemArray[2] = Map; 
    itemArray[3] = Spatula;
    itemArray[4] = Breeches;
  
  }
  
  var inventory = new Array(); // allocate five-element array
    
  

  function instantiateLocations() {
    Loc0  = new Location("0",  "START LOCATION", "You are about a mile WEST of the bank of the Hudson River. Type 'help' if you're stuck.",  "There's a small fox nearby.");
    Loc1  = new Location("1",  "BEGINNING OF TRAIL", "There are nothing but trees around you. However, to the NORTH you see what appears to be a hiking trail.",   "Nothing here!");
    Loc2  = new Location("2",  "RIVER FRONT", "To go this way you will have to swim across the Hudson. And let's be honest, you're not physically fit enough to do it...",   "Nothing here!");
    Loc3  = new Location("3",  "NORTH STREET", "You see nothing but water and trees. There's definitely nothing this way.", "Nothing here!"); 
    Loc4  = new Location("4",  "FOREST", "There is a big forested hill which will take about 2 days to hack though. You should probably go another way.",  "There are a pair of breeches. The inside tag says: 'PROPERTY OF BOOCH.'");
    Loc5  = new Location("5",  "END OF TRAIL", "You hike up the trail and come to an opening. You see a house to the EAST.",  "Nothing here!"); 
    Loc6  = new Location("6",  "SOUTH STREET", "Seriously dude, there's nothing over here.", "Nothing here!"); 
    Loc7  = new Location("7",  "CABIN", "Okay okay, fine. You find yourself standing before a small cabin. The door is open and you see a Knapsack.", "Knapsack!"); 
    Loc8  = new Location("8",  "RIVER DOCKS", "You are now at the RIVER DOCKS. There are no boats so you won't be able to go anywhere. However you see something stuck in the wood", "Item time! It's a map!"); 
    Loc9  = new Location("9",  "HOUSE", "You are at the HOUSE. There is a MAN standing outside watering flowers",  "Nothing here!"); 
    Loc10 = new Location("10", "FRONT OF HOUSE", "You are now in the front yard of the HOUSE. You see a swingset and notice something is under the slide.",  "There's an item here! Your lucky day! It's a spatula!"); 
    
  
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



