let randomNumber = parseInt(Math.random() * 100);
let trySelf = 0;
let sound = new Audio("sound/Aww Sound Effect.mp3");
let sound2 = new Audio("sound/Kids Saying Yay [Sound Effect].mp3")
function easyLevel() {
    let jokerNumber = document.querySelector("input").value;
    trySelf++;
    if (jokerNumber == false) {
        alert("Joker Says Enter Your Number");
    } else {
        if (jokerNumber > randomNumber) {
            sound.play();
            alert("Joker Says To Big");
        } else if (jokerNumber < randomNumber) {
            sound.play();
            alert("You Coming Soon To Beat Joker Score");
        }
        else if (jokerNumber == randomNumber) {
            sound2.play();
            alert(" Joker Says Congratulation Finally You Guess  Your Right " + trySelf + " times");
            
        }
    }
}

let mediumRandomNumber = parseInt(Math.random() * 200);
let mediumTrySelf = 0;
let sound3 = new Audio("sound/wah wah sound effect.mp3");
let sound4 = new Audio("sound/Audience Clapping - Sound Effect.mp3")
function mediumLevel() {
    let jokerNumber = document.querySelector("input").value;
    mediumTrySelf++;
    if (jokerNumber == false) {
        alert("Joker Says Enter Your Number");

    } else {
        if (jokerNumber > mediumRandomNumber) {
            sound3.play();
            alert("Joker Says To Big");
        } else if (jokerNumber < mediumRandomNumber) {
            sound3.play();
            alert(" You Coming Soon To Beat Joker Score");
        }
        else if (jokerNumber == mediumRandomNumber) {
            sound4.play();
            alert(" Congratulation Finally You Beat Joker " + mediumTrySelf + " times");
        }
    }
}
let hardRandomNumber = parseInt(Math.random() * 420);
let hardTrySelf = 0
let sound5 = new Audio("sound/Female Evil Laugh Sound Effect.mp3");
let sound6 = new Audio("sound/Gun reload and shot soundmost of the youtubers use.mp3")
function hardLevel() {
    let jokerNumber = document.querySelector("input").value;
    hardTrySelf++;
    if (jokerNumber == false) {
        alert("Joker Says Enter Your Number");
    } else {
        if (jokerNumber > hardRandomNumber) {
            sound5.play();
            alert("Joker Says To Big");
        } else if (jokerNumber < hardRandomNumber) {
            sound5.play();
            alert("You Coming Soon To Beat Joker Score");
        }
        else if (jokerNumber == hardRandomNumber) {
            sound6.play();
            alert("  Congratulation Finally You Guess  Your Right " + hardTrySelf + " times");
        }
    }
}
function goToEasyMode() {
    window.location = "index2.html"
}
function goToMediumMode() {
    window.location = "medium.html"
}
function goToHardMode() {
    window.location = "hard.html"
}
