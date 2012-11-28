// Item protoype 

var Item = function(_id, _name, _description) {
  // Attributes
  this.id          = _id;
  this.name        = _name;
  this.description = _description;

  // Behaviors
  this.toString = function() {
    return this.name; 
  }
}


var inventoryCache = [];
