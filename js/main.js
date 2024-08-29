//document.getElementById("count-el").innerText = 6

let count = 0;
let newCount =0;
let mySave = 0;
let list = "";
let lion = "I\'d like to see the \"Lion King\".   \\";
console.log(lion)
let myWelcome = "Welcome guys!"
let mySave2 = "";


function increment() {
    count += 1;
    console.log(count);
    let insideFunction = 3;  //only lives inside scope of function
    document.getElementById("count-el").innerText = count          // document.getElementById("count-el")    =>   <h2 id="count-el">0</h2>      innerText => 0
}
//  increment();
//---------------------------------------------------------------

// function myCounter() {
//     count = count + 1;
//     document.getElementById("count-el2").innerText = count;
//     console.log(count)
// }

// below 2 functions old
// function myListFunction() {
//     list = document.getElementById("count-el").innerText;
//     // console.log(list);
//     list = document.getElementById("count-el2").innerText + "-" + list;
//     document.getElementById("count-el2").innerText = list;
//     // console.log(list);
// }

// function mySaveFunction() {
//     mySave = document.getElementById("count-el").innerText;
//     document.getElementById("save-el").innerText = mySave;
//     myListFunction() 
// }

function mySaveFunction() {
    mySave2 = document.getElementById("count-el").innerText;
    // console.log("test here " + mySave2);
    document.getElementById("save-el").innerText = mySave2;
    list = document.getElementById("count-el").textContent + " - " + list;
    document.getElementById("count-el2").innerText = list;
    count = 0;
    document.getElementById("count-el").textContent = count;

    // console.log("test here: " + list);
}





function myWelcomeFunction() {
    document.getElementById("welcome-el").innerText = myWelcome;
}

myWelcomeFunction();

//---------------