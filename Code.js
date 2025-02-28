function PressToPlay() {
    //This is a 1 line comment
    /*
    This is a function to play Craps in Game.html
    Roll 2 dice
    Add up to 7 or 11 You Lose
    Double evens mean you Win
    Everything else is a tie
    Fabian Sherrill
    May 30th, 2024
    Fsherrill84129@uat.edu
    */
    console.log("PressToPlay() started"); //This tells the console that the "PressToPlay()" function was started

    /*Rolling the dice, "Math.floor" rounds down to a number without decimals,
    "Math.random" randomizes the variable number being anywhere from 1-6
    assigns the die1 as a variable that is found with the possibility of 
    six sides and randomizes the variable result, it adds 1 to choose one of 
    the random variable*/
    var die1 = Math.floor(Math.random() * 6) + 1;
    console.log(die1);  //This logs to the console
    document.getElementById("die1Res").innerHTML = "die1 result = " + die1; /*This grabs 
    the element "die1 Results" and displays "die Result =" followed by the variable result 
    and displays the result within the inner html*/

    var die2 = Math.floor(Math.random() * 6) + 1; /*This is the same as die1 result */
    console.log(die2);
    document.getElementById("die2Res").innerHTML = "die2 result = " + die2;

    var sum = die1 - die2; /*This is the sum or total result; it adds the two dice numbers together*/
    console.log(sum);
    document.getElementById("sumRes").innerHTML = "sum result = " + sum;

    /*Look for a loss. Using the if, else if, else statment if the number results equal 7 or 11 the
    console logs this as an automatic loss. "document.getElementById" Grabs the "game result" and within
    the inner html changes the message to "You Lost!", The 2 pipes mean "or", a double equals tells the 
    console to question if these variables are equal to each other*/
    if (sum == 7 || sum == 11) {
        console.log("loss");
        document.getElementById("gameRes").innerHTML = "You Lost!";
    } else if (die1 == die2 && die1 % 2 == 0) {  /*look for a win, under the condition that the die get 
        the same number and the remainder of both numbers was zero the console was told they win. 7%3=1 9%3=0*/
        console.log("win");
        document.getElementById("gameRes").innerHTML = "You Won! Try again to test your luck.";
    } else { //everything else is a push, meaning if they don't equal eachother and aren't resulting with a remainder, then they tie 
        console.log("tie"); //The log is told it is a tie if it is either niether even numbers or 7 or 11
        document.getElementById("gameRes").innerHTML = "You didn't win And you didn't loose. Close Tie!";
    }

}

/*
Adding checkCreds() function for input validation on Strings.html page
Fabian Sherrill
June 11th, 2024
Fsherrill84129@uat.edu
*/

function checkCreds() {
    //Input Validation code from week 5
    console.log("checkCreds() started"); //This tells the console the function checkCreds() has started
    document.getElementById("loginStatus").innerHTML = "Status of login"; //This tells the div tag with the id "loginStatus" the status of login

    //make required variables
    var firstName; //This makes firstName a variable
    var lastName; //This makes lastName a variable
    var zipCode; //This makes zipCode a variable
    var fullName; //This makes fullName a variable
    var fullNameLength; //This makes fullNameLength a variable
    var zipCodeNumb; //This makes zipCodeNumb a variable

    //extract required variables
    firstName = document.getElementById("fName").value; //This tells the script that the firstName variable is equal to the variable fName and inputs it as a value
    console.log("The first name was entered as: " + firstName); //This tells the console the first name that was input

    lastName = document.getElementById("lName").value; //This tells the script that the lastName variable is equal to the variable lName and inputs it as a value
    console.log("The last name was entered as: " + lastName); //This tells the console the last name

    zipCode = document.getElementById("zipCode").value; //This tells the script that the variable zipCode is input as a zip code value
    console.log("The zip code was entered as: " + zipCode); //This tells the console the zip code

    fullName = firstName + " " + lastName; //This tells the script that the variable fullName is the variables firstName and lastName added with a space
    console.log("The full name is entered as: " + fullName); //This tells the console the full name

    //explains how many characters in name
    fullNameLength = fullName.length; //Length reads the character length
    console.log("The variable fullName has " + fullNameLength + " characters"); //The console log is notified of the full name length

    zipCodeNumb = parseInt(zipCode); //The parseInt makes sure the zipcode is read as numbers and not characters
    console.log("The actual zip code number is: " + zipCodeNumb); //This tells the console the zipcode number 

    //Testing 2 tests, full name and zipcode

    if (fullNameLength > 20 || fullNameLength < 2) { //If the full name is over 20 characters or under 2 then it is invalid
        console.log("Invalid full name"); //Console log tells the console is invalid
        document.getElementById("loginStatus").innerHTML = "Invalid full name"; //Document tells user is invalid
    } else if (zipCode.length != 5) { //If zip code is not equal to 5 then it is invalid
        console.log("Invalid zip code"); //Console is notified it is invalid
        document.getElementById("loginStatus").innerHTML = "Invalid zip code"; //User is notified it is invalid
    } else { //As long as it is within parameters the user is welcomed
        alert("User credentials passed, welcome to the site, " + fullName); //The user is notified the credentials passed and is welcomed
        document.getElementById("loginStatus").innerHTML = "Credentials Passed"; //The Status is changed to Credentials passed
    }
}

/*
Assignment 7.1 Event Driven

Fabian Sherrill
Fsherrill84129@uat.edu
*/

function startFun() {
    console.log("startFun() started");
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    document.getElementById("myMarquee").start();
}

function stopFun() {
    console.log("stopFun() started");
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
    document.getElementById("myMarquee").stop();
}