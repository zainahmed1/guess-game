var userNumber = 100;
var counter = 0;
var maxTries = 1;
var randomNumbers = Math.floor(Math.random() * userNumber) + 1;
while (attempts = randomNumbers) {
    let attempts = prompt("Number To Daalo Mama ");
    counter += 1;
    if (counter > maxTries) {
        document.write("You Have No More");
        break
    }
    if (attempts == randomNumbers) {
        document.write("Congratulation You Still Your Life Again");
        document.write(" The Random Number Was" + randomNumbers);
        document.write(" It Took You" + counter);
    }
}
// let userNumber = 100;
// let counter = 0;
// let maxTries = 1;
// let randomNumbers = Math.floor(Math.random() * userNumber) + 1;
// function guess(Number) {
//     let attempts = randomNumbers;
//     if (name > 0) {
//         alert("Please Enter Number");

//     }
//     else if (counter >= maxTries) {
//         alert("You Have No More");

//     }
//     else if (attempts == randomNumbers) {
//         alert("Congratulation You Still Your Life Again");
//         alert(" The Random Number Was"+ randomNumbers );
//         alert("It Took You" + counter );

//     }
    // else if(){
    //     alert(" The Random Number Was" + randomNumbers );
    // }
// }