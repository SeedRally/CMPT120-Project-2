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
        retVal = "Location: " + this.id             + "\n" +
                 "Name: " + this.name               + "\n" +
                 "Description: " + this.description + "\n";
                 
        return retVal; 
      
    }
    
}

// initialize an empty array
var locations  = new Array();

locations[0]   = new Location(0,  "Location 0", "This is location number ZERO."   null);
locations[1]   = new Location(1,  "Location 1", "This is location number ONE.",   null);
locations[2]   = new Location(2,  "Location 2", "This is location number TWO.",   null); 
locations[3]   = new Location(3,  "Location 3", "This is location number THREE.", null); 
locations[4]   = new Location(4,  "Location 4", "This is location number FOUR.",  null);
locations[5]   = new Location(5,  "Location 5", "This is location number FIVE.",  null);
locations[6]   = new Location(6,  "Location 6", "This is location number SIX.",   null);
locations[7]   = new Location(7,  "Location 7", "This is location number SEVEN.", null);
locations[8]   = new Location(8,  "Location 8", "This is location number EIGHT.", null);
locations[9]   = new Location(9,  "Location 9", "This is location number NINE.",  null);
locations[10]  = new Location(10, "Location 10", "This is location number TEN.",  null);


// the -1 numbers are locations you can't go to 
var nav = [        //  N   S   E   W
          /* 0 */    [ 1,  3,  2,  4],
          /* 1 */    [ 5,  1, -1, -1],
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
   
          
