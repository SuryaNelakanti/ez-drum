// Not sure why i am not using Number, but most likely it is better practice to iterate through defined class

for(var i=0;i<document.querySelectorAll(".drum").length;i++){

    document.querySelectorAll("button")[i].addEventListener("click",function(){
        play(this.innerHTML);
})

}

// If you define variable outsi(de it plays through the full file before playing it again(the audio variables)
function play(letter){
    switch(letter){
        case 'w':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            animateMe(letter);
            break;
        case 'a':
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            animateMe(letter);
            break;
        case 's':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            animateMe(letter);
            break;
        case 'd':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            animateMe(letter);
            break;
        case 'j':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            animateMe(letter);
            break;
        case 'k':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            animateMe(letter);
            break;
        case 'l':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            animateMe(letter);
            break;                     
    default:
        console.log("other key pressed");        
    }
}


document.addEventListener("keydown",function(event){
    play(event.key);
})

function animateMe(className){
    var classClicked = document.querySelector("."+className);
    classClicked.classList.add("pressed");
    unAnimateMe(classClicked);
}

function unAnimateMe(className){
    setTimeout(function(){
        className.classList.remove("pressed");
    },200);
}