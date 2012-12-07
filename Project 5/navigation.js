 // Direction constants used in the move function and 
 // the button-click even handlers
var NORTH      = 0; 
var SOUTH      = 1;
var EAST       = 2;
var WEST       = 3;
var clear      = ""; 
var score  = 0;
var checkLocOne   = false;
var checkLocTwo   = false;
var checkLocThree = false;
var checkLocFour  = false;
var checkLocFive  = false;
var checkLocSix   = false;
var checkLocSeven = false;
var checkLocEight = false;
var checkLocNine  = false;
var checkLocTen   = false;
      
var cannotGo = "You cannot go that way!";
var myLocation = 0;
  
  function increment_score() {
    score = score + 5;
  }
      
  // this shows the score to the user
  function get_score() {
    updateDisplay("Your score is " + score);
  }
     
  // this updates the textarea 
  function updateDisplay(message) {
    message = message;
    var ta = document.getElementById("taGame");
    ta.value = ">:" + " " + message + "\n" + ta.value;
  }
      
  // when user types "clear" textarea is...well, cleared.
  function clearTextArea() {
    var textArea = document.getElementById("taGame");
    textArea.value = ">: " + "";
  }


  function cannotDoThat() {
    updateDisplay("You can't do that!");
  }
  
  function alreadyTookItem() {
    updateDisplay("That item has already been taken!");
  }
  
  function invalid_response() {
    var message = "I do not understand that command.";
    updateDisplay(message);
  }
      
  function helpMenu() {
    var message = "Welcome to the Help Menu!"; 
    var cmdExamples = "The game inputs are directed with one to two-word commands. "
                    +  "Examples: 'N', 'S', 'E', or 'W' for directions"
                    +  " 'score', 'clear', 'inventory', 'take [ item ]'.";
                    +  "Also, just try some commands that might make sense, it's likely they will work."
    updateDisplay(message + "\n" + cmdExamples);
  }
      
      
  function btn_enter_click() {
    var txt = document.getElementById("txtCommand");
    updateDisplay(txt.value);
  switch ( txt.value.toUpperCase() ) {
    case "N" : 
        move(NORTH);
        break;
    case "S" :  
        move(SOUTH);
        break;
    case "E" :  
        move(EAST);
        break;
    case "W" : 
        move(WEST);
        break;
    case "SCORE" : 
        get_score();
        break;
    case "CLEAR" : 
        clearTextArea();
        break;
   case "HELP" : 
        helpMenu();
        break;
   case "LOOK" : 
        lookAtItem(); 
        break;   
   case "INVENTORY" :
// create an if/else construct to lock/unlock the inventory
        if (playerHasKnapsack === true) {
          displayInventory();
        } else updateDisplay("You currently do not have an inventory!");
        break;
   case "TALK MAN" :
        talkBooch();
        break;
   case "TAKE SPATULA" :
        if ( (playerHasInventory === true) && (myLocation === 10) ) {
         itemSpatula(); 
        } else cannotDoThat();
        break;
   case "TAKE MAP" :
        if ((playerHasInventory === true) && (myLocation === 8)) {
          itemMap();
        } else cannotDoThat();
        break;
   case "TAKE KNAPSACK" :
        if (myLocation === 7) {
          itemKnapsack();
        } else cannotDoThat();
        break;
   case "TAKE FOX" :
        if ((playerHasInventory === true) && (myLocation === 0)) {
          itemFox();  
        } else cannotDoThat();
        break;
    default : 
        invalid_response();
  }
    txt.value="";
    
  } 