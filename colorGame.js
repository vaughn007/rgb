var numSquares = 6; //keep track of mold easy or hard so thde right number of squares will be displayed
var colors = [];
var pickedColor; 
var square = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");


init(); //everthing that need to run when page load

function init() {
   setUpModeButton();
   setUpSquares();

reset(); //rest screen

}

function setUpModeButton() {
     //set up mode button eventlisterns 
    for (let i = 0; i < modeButton.length; i++) {
        modeButton[i].addEventListener("click", function () {
            modeButton[0].classList.remove("selected");
            modeButton[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            
            reset(); //pick colors
        });
        
    }
}

function setUpSquares() {
    //add colors to squares
for (let i = 0; i < square.length; i++) {
    //add click listener to squares 
  square[i].addEventListener("click", function() {
      //grab clolor of clicked square
      let clickColor = this.style.backgroundColor; //this is for square clicked
      //compare color to picked color
      if (clickColor === pickedColor) {
          messageDisplay.textContent = "correct!";
          resetButton.textContent = "Play Again?"
          changeColors(clickColor); //pas
          h1.style.backgroundColor = clickColor;
      } else {
        this.style.backgroundColor = "#232323"; //fadeout when wrong
        messageDisplay.textContent = "Try Again";
      }
  });
}

}




function reset() {
    colors = generrateRandomColors(numSquares); //generrateRandomColors(6)
    //pick new random color from array
    pickedColor = pickedColorSquare();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = ""; //will set messageDisplay to nothing ""
    resetButton.textContent = "New Colors" //the words New Colors will display and not play again


    //change clors of squares
    for (let i = 0; i < square.length; i++) {
        if (colors[i]) { // there is a cololr that match
            square[i].style.display = "block";//reshow. make sjure it visable first 
            square[i].style.backgroundColor = colors[i]; 
        } else {
            square[i].style.display = "none"; //hide when no clor is there
        }
        
    }
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function () {
    reset();
    
});


function changeColors(colors) {
    //loop through all squares
    for (let i = 0; i < square.length; i++) {
         //change each color to match given clor that was picked
         square[i].style.backgroundColor = colors;
        
    }
   
    
}


function pickedColorSquare() {
    //pick ramdom number
    let random = Math.floor(Math.random() * colors.length);  //random will pick number betwwen 0-1 but dont include 1
    return colors[random]; //get elemement from array
}

function generrateRandomColors(num) {
    //make array
    let arr = [];
    //add num random colors to array. repeat num times
    for (let i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor()); //push randomColor() into array  
    }
    //return array
    return arr;
}


  function randomColor() {
    //pick a red 0-255
    let r = Math.floor(Math.random() * 256);
    //pick a green 0-255
    let g = Math.floor(Math.random() * 256);
    //pick a blue 0-255
    let b = Math.floor(Math.random() * 256);
    //"rgb(r, g, b)"
   return "rgb(" + r + ", " + g + ", " + b + ")"; //one random color
    
}

 