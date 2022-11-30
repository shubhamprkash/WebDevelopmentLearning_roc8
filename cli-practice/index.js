// ex01: output your name
// console.log("\nName somthing\n")

// ex02: read the name of your user
/*
const readline = require("readline-sync");
var userName = readline.question('\nMind typing your name? ');
console.log('\nHey ' + userName + '!\n');
*/


// ex03: ex03: welcome your user
//A program to take a string. And add "Welcome" to it. Then console it.

// const input= require('readline-sync');
// let user = input.question('Enter Your Name: ')
// console.log('Welcome ' + user + "! ")

// ex04: do it all together
// A program to take your's name. Then welcome them.
/*
const input= require('readline-sync');
let user = input.question('Enter Your Name: ')
console.log('Welcome ' + user + "! ")


// ex05: print right/wrong if greater than 25
// Ask your user if your age is greater than 25 (or any number) and console right/wrong based on the answer.

let age=input.question("Hey "+user + '! How old are you? ');
if(age >= 25){
    console.log("Ok, you are an adult. Nice!")
}
else{
    console.log("Wow! You are very young.")
}
console.log(age);

//ex06: increment score if the right answer
//Ask your user if your hometown is Bokaro (or your city) 
// and this time increment a variable based on the right answer.
// Also, console the score this time.
let score = 0;
let bengaloreCondi = input.question(' Is your hometown Bengaluru ? (yes/no) ' );
if(bengaloreCondi == "yes" || bengaloreCondi == "Yes" ){
    score++;
    console.log("Time to party out bro!");
}
else 
    console.log("Ok! Nvm then. And score is: "+ score )

*/
// ex07: function to add two numbers
// Take two numbers and add them. Put this entire thing in a function add() and return the result.
 /*  
function add(num1, num2)
{
    return num1 + num2;
}

let result=add (10, 10);
console.log(result)
*/

//ex08: function to check the answer

/*
var input=require('readline-sync')
function quickQuick(question, answer)
{
    let userAnswer=input.question(question)
    if(answer==userAnswer)
    {
        console.log("GG! Right answer.");
    }
    else
        console.log("Nice Try! Wrong answer!")
}

quickQuick("2+2? ","4");

*/

//ex09: print your name 5 times
//print your name 5 times by calling console.log()
// use for loop to do this
// BONUS (optional): Print the number with your name

/*
let name="Shubham Prakash";
let i=0;
for(i=0;i<5;i++)
{
    console.log(name+" "+(i+1)+"x")
}

*/

// homework: star pattern
// a program to take input number from user and print stars like this. 
// The below pattern will be printed when the user enters 5.
/*
let input=require('readline-sync');
let num=input.question("Enter a number: ")
for(i=0;i<num;i++){
    for(j=0;j<i;j++){
        console.log("*")
    }
    console.log("\n")
}
*/
//chalange accpted
/*
for(let i=1; i<=5; i++){
    console.log("*".repeat(i));
 }
 */

 //ex10: list grocery items to buy
 /*
 challenge
 prepare a list of grocery items to buy.
 add 5 items
 print the first item on the list.
 print the third item on the list.
 print the last item on the list.
*/
/*
let array=["itemone", "itemtwo", "itemthree", "itemfour"]
console.log(array[0],array[2], array[3])

// ex11: print every item on the list
// Take the list you made in the last exercise.
//  Now, use a for loop to print every item.

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}
*/

// ex12: club info about a superhero together
// Create two objects and put information about two superheros: superman and batman. 
// Get familiarity with the syntax. 
// Read and understand what's written in understanding section.
/*
let superman={
    origin: "Alien",
    mother: "alive",
    weakness: "Kryptonite"
}

let batman = {
    origin : "earth",
    mother: "dead",
    weakness: "ego"
}
*/