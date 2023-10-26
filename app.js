'use strict';

// console.log("I am in the HTML");
// alert("Welcome to my page!");

function getName (){
    const usersName = prompt("What is your name");
    return usersName;
}

function greetUser(){
    document.write("Hi " + theirName + "! Welcome to my page!");
}

function specialMessage(usersName){
    if (!usersName ){
        usersName = prompt("Come on, please tell me your name");
    }

    if (usersName == "Kassie"){
        document.write("Hiya teach!");
    } else if (usersName.toLowerCase() === "oleg"){
        document.write("You are the best!");
    } else if (usersName.toLowerCase() === "leo") {
        document.write("Hello my son!");
    } else {
        document.write("Glad to have you here!");
    }
}

// const usersName = prompt("What is your name?");
// console.log(usersName);

// const city = prompt("Where are you from?");
// console.log(city);


// string concatenation
// document.write("Hi " + usersName + "! " + city + " is a really cool! But now welcome to page about my favorite city");

// if (this is true) {execute this code}

// if (usersName == 'Kassie'){
    // alert('Hiya teach!');
// }
// else {
    // alert('Glad to have you here!');
// }




