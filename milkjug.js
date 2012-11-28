/*
* milkjug.js
*/

// milk jug prototype
function milkJug(_maxVol, _color, _brand, _type) {
    this.color        = _color;
    this.brand        = _brand;
    this.type         = _type;
    this.maxVol       = _maxVol;
    this.currentVol   = _maxVol;


  milkJug.isEmpty = function () {
     return milkJug.currentVol === 0;
  }
   
  milkJug.sayVolume = function () {
    alert(this.currentVol);
    
  } 
  milkJug.drink = function () {
    this.currentVol = 0;  
  }

}

var goodMilk         = new milkJug ("FULL", "White", "Shop Rite", "1%");
var milkVolumeTeller = goodMilk.isEmpty; //Dan: This only gets the value of isEmpty at call time
// Why not just call isEmpty so you always get the current value?

milkJug.sayVolume(); // alerts volume of milk, Empty or Full
milkVolumeTeller(); // alerts undefined 
alert(milkVolumeTeller === goodMilk.sayVolume); // alert ?
alert(milkVolumeTeller === milkJug.sayVolume); // alerts ?





// display the goodMilk properties

function tester() {
  updateDisplay(goodMilk)
} 