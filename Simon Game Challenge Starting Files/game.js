var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];


function nextSequence() {

    // Pick a random number between 0 and 3.
    var randomNumber = Math.floor(Math.random() * 4);
    
    // My version: Match the color in the array using index and Assign the color value
    // ChatGPT: Select a color from the buttonColours array using the randomNumber as the index,
    // and assign it to randomChosenColour
    var randomChosenColour = buttonColours[randomNumber];

    // Add randomChoseColour to gamePattern array
    gamePattern.push(randomChosenColour);

    // My version: give an effect using jquery and id
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    // My version: Play each audio file according to randomCHosenColour
    // ChatGPT: Create a new audio object for the sound file corresponding to the randomChosenColour and play it
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}

// When user click any button which has btn class, it execute the function.
// The Clicked button assign to userChoseColor and add it to userClickedPattern.
$(".btn").on("click", function() {
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    
    alert(userClickedPattern);
});

// wrong button sound
    // var wrong = new Audio("./sounds/wrong.mp3");
    // wrong.play();

// Press A key to start the game
// document.addEventListener("keydown", function(event) {
//     if (event.key === "A" || event.key === "a") {
//         nextSequence();
//     } 
// });

// After pressing A key, this function will execute
// flash effect 