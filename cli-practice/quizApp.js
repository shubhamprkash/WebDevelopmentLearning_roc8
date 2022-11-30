const rls=require('readline-sync');
 
//user intro and sys init

console.log("\n 🔥 Welcome to the dunguns of Mystry\n");
let userName = rls.question("Whats your name child? ");
let score = 0;
let highestUser = 'Shubham'

//gretings

console.log("\nWelcome " + userName + " ! The greed of fame awaits your arrival!!\n \n Let the challenge begin: ☠ 😈\n");

// play function

function game(question, answer){
    let corAns = rls.question(question+"\n");
    if (corAns === answer) {
        console.log("woow! You are well knowledged!\n");
        score ++ ;
    }
    else{
        console.log("Wrong! Pay attention my child.\n");
        score --;
    }
    console.log(" Score : "+ score+"\n")
}


// quiz Question list (more of a array of objects honestly!)

let quizQues = [
    {
        question: "2+2 ",
        answer: "4"
    },
    {
        question: "1+1",
        answer: "2"
    },
    {
        question: "3+3",
        answer: "6"
    },
    {
        question: "1+2",
        answer: "3"
    },
    {
        question: "5+2",
        answer: "7"
    },
    {
        question: "1+1",
        answer: "2"
    },


]

//main question runner

for (let i = 0; i < quizQues.length; i++) {
    game(quizQues[i].question, quizQues[i].answer);
    
}

console.log("\nYour final Score is : "+score)

//high score logic (kindoff)

if(score >= quizQues.length){
    highestUser=rls.question("Kudos!! You High scored!!\n Enter yor name save in topFraggers list!")
}

console.log("\nTop scored by : "+highestUser+" | Score: "+score++)