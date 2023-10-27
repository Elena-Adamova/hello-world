'use strict';

// console.log("I am in the HTML");
// alert("Welcome to my page!");


// while loop

// structure: while(this is true){execute this code};

// FOR loop structure: 
// for(initial value; condition must be true; increment/decrement){
//     code to execute
// }

function getName (){
    const usersName = prompt("What is your name");
    return usersName;
}

function greetUser(){
    document.write("Hi " + theirName + "! Welcome to my page!");
}

function specialMessage(usersName){
    // if (!usersName ){
    //     usersName = prompt("Come on, please tell me your name");
    // }

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



function rateMyPage(msg = ""){
    let rating = Number(prompt("How many stars would you rate my page? 1-5 \n" + msg));

    if (isNaN(rating) || rating < 1) {
        return rateMyPage(theirName + " ,please, digits only 1-5!");
    }

    document.write("My Page Rating From "+ theirName +": ");

    for (let i = 1; i <= 5; i++) {
        if (i>rating) {
            document.write("&#9734;");
        } else {
            document.write("&#9733;");
        }
       
    }
}
