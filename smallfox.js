/*
*   smallfox.js
*/

// small fox prototype
function smallFox (_type, _aggressiveness) {
    this.type     = _type;
    this.isAngry  = _aggressiveness;

// TODO: take this alert out before submitting project 4
// once the webpage has loaded, small fox has been instantiated
//alert("small fox instantiated"); 
}

smallFox.sayHello = function () {
 alert("hello, i am a fox."); 
}

var docileFox = new smallFox ("Red Fox", "Docile");

// display the docileFox attributes 
//alert("The small Fox is " + docileFox.isAngry); // docileFox is docile

// call the smallFox sayHello method. 
docileFox.updateDisplay(); // hello

