let randomNumber = parseInt(Math.random() * 100);
let trySelf = 0
function easyLevel() {
    let jokerNumber = document.querySelector("input").value;
    trySelf++;
    if (jokerNumber == false) {
        alert("Joker Says Enter Your Number");
    } else {
        if (jokerNumber > randomNumber) {
            alert("Joker Says To Big");
        } else if (jokerNumber < randomNumber) {
            alert("You Coming Soon To Beat Joker Score");
        }
        else if (jokerNumber == randomNumber) {
            alert(" Joker Says Congratulation Finally You Guess  Your Right " + trySelf + "times");
        }
    }
}

let mediumRandomNumber = parseInt(Math.random() * 200);
let mediumTrySelf = 0;
function mediumLevel() {
    let jokerNumber = document.querySelector("input").value;
    mediumTrySelf++;
    if (jokerNumber == false) {
        alert("Joker Says Enter Your Number");

    } else {
        if (jokerNumber > mediumRandomNumber) {
            alert("Joker Says To Big");
        } else if (jokerNumber < mediumRandomNumber) {
            alert(" You Coming Soon To Beat Joker Score");
        }
        else if (jokerNumber == mediumRandomNumber) {
            alert(" Congratulation Finally You Beat Joker" + mediumTrySelf + "times");
        }
    }
}
let hardRandomNumber = parseInt(Math.random() * 420);
let hardTrySelf = 0
function hardLevel() {
    let jokerNumber = document.querySelector("input").value;
    hardTrySelf++;
    if (jokerNumber == false) {
        alert("Joker Says Enter Your Number");
    } else {
        if (jokerNumber > hardRandomNumber) {
            alert("Joker Says To Big");
        } else if (jokerNumber < hardRandomNumber) {
            alert("You Coming Soon To Beat Joker Score");
        }
        else if (jokerNumber == hardRandomNumber) {
            alert("  Congratulation Finally You Guess  Your Right " + hardTrySelf + "times");
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
