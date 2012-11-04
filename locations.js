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
         message = message + " [" + myLocation + "]";
         var ta = document.getElementById("taGame");
         ta.value = ">:" + " " + message + "\n" + ta.value;
      }
      
      // when user types "clear" textarea is...well, cleared.
      function clearTextArea() {
         var textArea = document.getElementById("taGame");
         textArea.value = ">: " + "";
      }
      
      function startingLocation() {
        myLocation = 0;
        var message = "You are at the starting location.";
        updateDisplay(message);
      }
      
      function locationOne() {
        myLocation = 1;
        var message = "You see nothing but water and trees.";
        updateDisplay(message);
        if (scoreLocOne===0) {
          scoreLocOne = scoreLocOne + 1;
          increment_score();
        } 
      }
      
      function locationTwo() {
        myLocation = 2;
        var message = "There is a big forested hill which will take about 2 days to hack though. You should probably go another way.";
        updateDisplay(message);
        if (scoreLocTwo===0) {
          scoreLocTwo = scoreLocTwo + 1;
          increment_score();
        } 
      }
      
      function locationThree() {
        myLocation = 3;
        var message = "You see nothing but water and trees. There's definitely nothing this way.";
        updateDisplay(message);
        if (scoreLocThree===0) {
          scoreLocThree = scoreLocThree + 1;
          increment_score();
        } 
      }
      
      function locationFour() {
        myLocation = 4;
        var message = "To go this way you will have to swim across the Hudson. And let's be honest, you're not physically fit enough to do it...";
        updateDisplay(message);
        if (scoreLocFour===0) {
          scoreLocFour = scoreLocFour + 1;
          increment_score();
        } 
      }
      
      function locationFive() {
        myLocation = 5;
        var message = "This is the second message for NORTH.";
        updateDisplay(message);
        if (scoreLocFive===0) {
          scoreLocFive = scoreLocFive + 1;
          increment_score();
        } 
      }
      
      function locationSix() {
        myLocation = 6;
        var message = "Seriously dude, there's nothing over here.";
        updateDisplay(message);
        if (scoreLocSix===0) {
          scoreLocSix = scoreLocSix + 1;
          increment_score();
        } 

      }
      
      
      function north_btn() {
            if (myLocation===0) {
              locationOne();
              north = true;
              document.getElementById("eastBtn").disabled = true;
              document.getElementById("westBtn").disabled = true;
              } else if (myLocation===1) {
                locationFive();
                north = false;
                } else if (myLocation===6) {
                  locationThree();
                } else if (myLocation===3) {
                  startingLocation();
              document.getElementById("eastBtn").disabled = false;
              document.getElementById("westBtn").disabled = false;
                } else if (north===false) {
                  updateDisplay(cannotGo);
                  }
      }    
      
      function south_btn() {
            if (myLocation===0) {
              locationThree();
              south = true;
              document.getElementById("eastBtn").disabled = true;
              document.getElementById("westBtn").disabled = true;
             }  else if (myLocation===3) {
                  locationSix();
                  south = false;
                  document.getElementById("eastBtn").disabled = true;
                  document.getElementById("westBtn").disabled = true;
             } else if (myLocation===1) {
                  startingLocation();
                  document.getElementById("eastBtn").disabled = false;
                  document.getElementById("westBtn").disabled = false;
             } else if (myLocation===5) {
                  locationOne();
             } else if (south===false) {
                  updateDisplay(cannotGo);
             }
      }
      
      function east_btn() {
            if (myLocation===0) {
              locationTwo();
              document.getElementById("northBtn").disabled = true;
              document.getElementById("southBtn").disabled = true;
              document.getElementById("eastBtn").disabled  = true;
              east = true;
            }   else if (myLocation===4) {
                  startingLocation();
                  document.getElementById("southBtn").disabled = false;
                  document.getElementById("northBtn").disabled = false;
                  document.getElementById("westBtn").disabled  = false;
              }   else if (east===true) {
                    updateDisplay(cannotGo);
              }
      }
      
      function west_btn() {
            if (myLocation===0) {
              locationFour();
              west = true;
              document.getElementById("northBtn").disabled = true;
              document.getElementById("southBtn").disabled = true;
              document.getElementById("westBtn").disabled  = true;
              } else if (myLocation===2) {
                  startingLocation();
                  document.getElementById("southBtn").disabled = false;
                  document.getElementById("northBtn").disabled = false;
                  document.getElementById("eastBtn").disabled = false;
              } else if (west===true) {
                  updateDisplay(cannotGo);
              } 
      }
      
      function invalid_response() {
        var message = "I do not understand that command.";
        updateDisplay(message);
      }
      
      function helpMenu() {
        var message = "Welcome to the Help Menu!"; 
        var helpMessage = ">: Types of Input: \n     N, S, E, or W for directions \n     score \n     clear";
        updateDisplay(message + "\n" + helpMessage);
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
        default : 
            invalid_response();
      }
        txt.value="";
      } 
