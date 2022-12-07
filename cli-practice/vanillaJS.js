// prompt testing
/*
let person = prompt("Please enter your name", "Harry Potter");
if (person===null) {
    confirm("r uh sure?")
}
else
console.log("hey! " + person)
console.log("decision decision, all of them wrong! Uni uni wts the con!")
*/
// console.log(1+1, "1+1")

// Exercise 03: Wiring button click
// Reference Btn

/*
let btn= document.querySelector('#btn-first');
let btnEvent= btn.addEventListener("click", clicked);
function clicked(){
    console.log("Clicked Baby!");
};
*/

//ex04: wiring textarea input

// let heading =document.querySelector('#heading');
let txtAr = document.querySelector('#textarea');
let btn= document.querySelector('#btn-first');
// let txtarVal = txtAr.value;
let btnEvent= btn.addEventListener("click", clicked);

function clicked(){
    console.log(txtAr.value);
};






