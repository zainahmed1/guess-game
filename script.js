// var userNumber = 100;
// var counter = 0;
// var maxTries = 1;
// var randomNumbers = Math.floor(Math.random() * userNumber) + 1;
// while (attempts = randomNumbers) {
//     let attempts = prompt("Number To Daalo Mama ");
//     counter += 1;
//     if (counter > maxTries) {
//         document.write("You Have No More");
//         break
//     }
//     if (attempts == randomNumbers) {
//         document.write("Congratulation You Still Your Life Again");
//         document.write(" The Random Number Was" + randomNumbers);
//         document.write(" It Took You" + counter);
//     }
// }

function easyLevel() {
    let jokerNumber = document.querySelector("input").value;
    let trySelf=0
    trySelf+1;
    let randomNumber = parseInt(Math.random() * 100);
    if (jokerNumber == false) {
        alert("Joker Says Enter Your Number");
    } else {
        if (jokerNumber > randomNumber) {
            alert("Joker Says To Big");
        } else if (jokerNumber < randomNumber) {
            alert("You Coming Soon To Beat Joker Score");
        } 
        else if (jokerNumber == randomNumber) {
            alert(" Joker Says Congratulation Finally You Guess  Your Right"+trySelf+ "times");
        }
}
}
function mediumLevel() {
    let jokerNumber = document.querySelector("input").value;
    let trySelf = 0;
    trySelf+1;
    let randomNumber = parseInt(Math.random() * 200);
    if (jokerNumber == false) {
        alert("Joker Says Enter Your Number");
    } else {
        if (jokerNumber > randomNumber) {
            alert("Joker Says To Big");
        } else if (jokerNumber < randomNumber) {
            alert(" You Coming Soon To Beat Joker Score");
        } 
        else if (jokerNumber == randomNumber) {
            alert(" Congratulation Finally You Beat Joker"+ trySelf+ "times");
        }
}
}
function hardLevel() {
    let jokerNumber = document.querySelector("input").value;
    let trySelf=0
    trySelf+1;
    let randomNumber = parseInt(Math.random() * 420);
    if (jokerNumber == false) {
        alert("Joker Says Enter Your Number");
    } else {
        if (jokerNumber > randomNumber) {
            alert("Joker Says To Big");
        } else if (jokerNumber < randomNumber) {
            alert("You Coming Soon To Beat Joker Score");
        } 
        else if (jokerNumber == randomNumber) {
            alert("  Congratulation Finally You Guess  Your Right "+trySelf+"times");
        }
}
}
// else if(){
//     alert(" The Random Number Was" + randomNumbers );
// }

// let attempt;
// let aNumber;

// function easy() {
//     attempt = 0;
//     aNumber = parseInt(Math.random() * 500);
//     document.getElementById('#levels').classList.remove('showLevels');
//     document.getElementById('#levels').classList.add('hideLevels');
// }

// function medium() {
//     attempt = 0;
//     aNumber = parseInt(Math.random() * 1000);
//     document.getElementById('#levels').classList.remove('showLevels');
//     document.getElementById('#levels').classList.add('hideLevels');
// }

// function hard() {
//     attempt = 0;
//     aNumber = parseInt(Math.random() * 5000);
//     document.getElementById('#levels').classList.remove('showLevels');
//     document.getElementById('#levels').classList.add('hideLevels');
// }

// function showLevels() {
//     document.getElementById('#levels').classList.remove('hideLevels');
//     document.getElementById('#levels').classList.add('showLevels');

// }

// function check() {
//     let userNumber = parseInt(document.getElementById("input").value);
//     attempt++;
//     if (attempt < 11) {
//         if (userNumber < aNumber) {
//             document.getElementById('#result').innerHTML = "Try Bigger..";
//         } else if (userNumber > aNumber) {
//             document.getElementById('#result').innerHTML = "Try Smaller..";
//         } else {
//             document.getElementById('#result').innerHTML = "Congratulations!! You did it in " + attempt + ' times';
//         }

//     } else {
//         alert('Joker Win You Lost Joker Smart With You');
//     }
// }
// function easyLevel() {
//     let enterNumber = document.querySelector("input").innerHTML
//     let trySelf = 0;
//     trySelf+1;
//     let guessNumber = parseInt(Math.random() * 101);
//     if (enterNumber = false) {
//         alert("please enter the number for best result");
//     } else {
//         if (enterNumber > guessNumber) {
//             alert("too big");
//         } else if (enterNumber < guessNumber) {
//             alert("too small");
//         } else if (enterNumber === guessNumber) {
//             alert("Congratulation Finally You guess after Try" + trySelf + "times");
//         }
// }
// }