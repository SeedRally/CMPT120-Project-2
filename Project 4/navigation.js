var score  = 0;
 // Direction constants used in the move function and 
 // the button-click even handlers
var north      = false; 
var south      = false;
var east       = false;
var west       = false;
var clear      = ""; 
var scoreLocOne   = 0;
var scoreLocTwo   = 0;
var scoreLocThree = 0;
var scoreLocFour  = 0;
var scoreLocFive  = 0;
var scoreLocSix   = 0;
var scoreLocSeven = 0;
var scoreLocEight = 0;
var scoreLocNine  = 0;
var scoreLocTen   = 0;
      
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
  
  function north_btn() {
    if (myLocation===0) {
      locationOne();
      document.getElementById("eastBtn").disabled = true;
      document.getElementById("westBtn").disabled = true;
      document.getElementById("southBtn").disabled = false;
      document.getElementById("northBtn").disabled = false;
      } else if (myLocation===1) {
         locationFive();
         north = true;
         document.getElementById("eastBtn").disabled = false;
         document.getElementById("northBtn").disabled = true;
         document.getElementById("westBtn").disabled = true;
         document.getElementById("southBtn").disabled = false;
      } else if (myLocation===6) {
         locationThree();
         document.getElementById("eastBtn").disabled = false;
         document.getElementById("northBtn").disabled = false;
         document.getElementById("westBtn").disabled = true;
         document.getElementById("southBtn").disabled = false;
      } else if (myLocation===7) {
         locationSix();
         document.getElementById("eastBtn").disabled = true;
         document.getElementById("northBtn").disabled = false;
         document.getElementById("westBtn").disabled = true;
         document.getElementById("southBtn").disabled = false;
      } else if (myLocation===10) {
         locationNine();
         document.getElementById("northBtn").disabled = true;
         document.getElementById("westBtn").disabled = false;
         document.getElementById("southBtn").disabled = false;
         document.getElementById("eastBtn").disabled = true;
      } else if (myLocation===3) {
         locationZero();
         document.getElementById("eastBtn").disabled = false;
         document.getElementById("westBtn").disabled = false;
         document.getElementById("northBtn").disabled = false;
         document.getElementById("southBtn").disabled = false;
      } else if (north===true) {
         updateDisplay(cannotGo);
      }
  }    
      
  function south_btn() {
    if (myLocation===0) {
      locationThree();
      document.getElementById("westBtn").disabled = true;
      document.getElementById("eastBtn").disabled = false;
      document.getElementById("southBtn").disabled = false;
      document.getElementById("northBtn").disabled = false;
    } else if (myLocation===3) {
       locationSix();
       document.getElementById("eastBtn").disabled = true;
       document.getElementById("westBtn").disabled = true;
       document.getElementById("northBtn").disabled = false;
       document.getElementById("southBtn").disabled = false;
      } else if (myLocation===6) {
         locationSeven();
         document.getElementById("southBtn").disabled = true;
         document.getElementById("eastBtn").disabled = true;
         document.getElementById("westBtn").disabled = true;
         document.getElementById("northBtn").disabled = false;
      } else if (myLocation===1) {
         locationZero();
         document.getElementById("eastBtn").disabled = false;
         document.getElementById("westBtn").disabled = false;
         document.getElementById("northBtn").disabled = false;
         document.getElementById("southBtn").disabled = false;
      } else if (myLocation===5) {
         locationOne();
         document.getElementById("northBtn").disabled = false;
         document.getElementById("eastBtn").disabled = true;
         document.getElementById("westBtn").disabled = true;
         document.getElementById("southBtn").disabled = false;
      } else if (myLocation===9) {
         locationTen();
         document.getElementById("eastBtn").disabled = true;
         document.getElementById("westBtn").disabled = true;
         document.getElementById("southBtn").disabled = true;
         document.getElementById("northBtn").disabled = false;
      } else if (south===true) {
         updateDisplay(cannotGo);
      }
  }
      
  function east_btn() {
    if (myLocation===0) {
      locationTwo();
      document.getElementById("northBtn").disabled = true;
      document.getElementById("southBtn").disabled = true;
      document.getElementById("eastBtn").disabled  = true;
      document.getElementById("westBtn").disabled = false;
    } else if (myLocation===3) {
        locationEight();
        document.getElementById("westBtn").disabled = false;
        document.getElementById("southBtn").disabled = true;
        document.getElementById("eastBtn").disabled  = true;
        document.getElementById("northBtn").disabled = true;
     } else if (myLocation===5) {
         locationNine();
         document.getElementById("northBtn").disabled = true;
         document.getElementById("eastBtn").disabled  = true;
         document.getElementById("westBtn").disabled = false;
         document.getElementById("southBtn").disabled = false;
      }  else if (myLocation===4) {
         locationZero();
         document.getElementById("southBtn").disabled = false;
         document.getElementById("northBtn").disabled = false;
         document.getElementById("westBtn").disabled  = false;
         document.getElementById("eastBtn").disabled = false;
      } else if (east===true) {
         updateDisplay(cannotGo);
        }
  }
      
  function west_btn() {
    if (myLocation===0) {
      locationFour();
      document.getElementById("northBtn").disabled = true;
      document.getElementById("southBtn").disabled = true;
      document.getElementById("westBtn").disabled  = true;
      document.getElementById("eastBtn").disabled = false;
    } else if (myLocation===2) {
       locationZero();
         document.getElementById("eastBtn").disabled = false;
         document.getElementById("westBtn").disabled = false;
         document.getElementById("northBtn").disabled = false;
         document.getElementById("southBtn").disabled = false;
      } else if (myLocation===8) {
        locationThree();
        document.getElementById("northBtn").disabled = false;
        document.getElementById("southBtn").disabled = false;
        document.getElementById("eastBtn").disabled = false;
        document.getElementById("westBtn").disabled = true;
      } else if (myLocation===9) {
        locationFive(); 
        document.getElementById("westBtn").disabled = true;
        document.getElementById("eastBtn").disabled = false;
        document.getElementById("northBtn").disabled = true;
        document.getElementById("southBtn").disabled = false;
      } else if (west===true) {
         updateDisplay(cannotGo);
       } 
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
        north_btn();
        break;
    case "S" : 
        south_btn();
        break;
    case "E" : 
        east_btn();
        break;
    case "W" : 
        west_btn();
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
   case "TAKE KNAPSACK" :
        if (myLocation === 7) {
          itemKnapsack();
        } else cannotDoThat();
        break;
   case "TAKE FOX" :
        if (myLocation === 0) {
          itemFox(); // write a for-loop so that the fox can only be taken once? 
        } else cannotDoThat();
        break;
    default : 
        invalid_response();
  }
    txt.value="";
  } 
