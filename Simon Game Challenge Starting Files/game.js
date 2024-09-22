var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

// When user click any button which has btn class, it execute the function.
// The Clicked button assign to userChoseColor and add it to userClickedPattern.
$(".btn").click(function() {
    
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    
    playSound(userChosenColour);
    animatePress(userChosenColour);

});


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

    playSound(randomChosenColour);
    level++;

    }


function playSound(name) {
    // My version: Play each audio file according to randomCHosenColour
    // ChatGPT: Create a new audio object for the sound file corresponding to the randomChosenColour and play it
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

}

function animatePress(currentColour) {
    
    $("#" + currentColour).addClass("pressed");
    
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

// Detect any keypress in the body
// In order to check the pressed key is "A", I need to use event as a parameter.
$(document).keypress(function () {
    if (!started) {
        nextSequence();

        // If the user pressed "A" key, the title will be changed by it's level.
        // it's my version using JavaScript
        //document.getElementById("level-title").innerHTML = "Level " + level;
        
        // Using Jquery
        $("#level-title").text("Level " + level);
        started = true;
    }
    });