//loops through all buttons and adds event listeners
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  //selects class drum and adds a function that reacts to the objects being clicked
  //function can be specified separately also
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    this.style.color = "green";
    //creating a new html audio element
    var buttonInnerHTML = this.innerHTML;
    //sends button pressed to the function makeSound
    makeSound(buttonInnerHTML);

  });
}

//detecting keyboard press
document.addEventListener("keydown", function(event) {

  makeSound(event.key);

});
//use keydown instead of keypress
function makeSound(key) {
  //checks button clicked and plays corresponding sound
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
      //default case is necessary but highly unlikely to be used
      // it would log the button thats not included in the cases
    default:
      console.log(buttonInnerHTML);

  }
}
