let plus1 = 1;
let plus2 = 2;
let plus3 = 3;
let homeScore = 0;
let guestScore = 0;
let homeScoreResult = document.getElementById("home-score-result");
let guestScoreResult = document.getElementById("guest-score-result");

function homePlusOne() {
    homeScore += plus1;
    homeScoreResult.innerText = homeScore;
    console.log(homeScore);
}

function homePlusTwo() {
    homeScore += plus2;
    homeScoreResult.innerText = homeScore;
    console.log(homeScore);
}

function homePlusThree() {
    homeScore += plus3;
    homeScoreResult.innerText = homeScore;
    console.log(homeScore);
}

function guestPlusOne() {
    guestScore += plus1;
    guestScoreResult.innerText = guestScore;
}

function guestPlusTwo() {
    guestScore += plus2;
    guestScoreResult.innerText = guestScore;
}

function guestPlusThree() {
    guestScore += plus3;
    guestScoreResult.innerText = guestScore;
}

function newGame() {
    guestScoreResult.innerText = 0;
    homeScoreResult.innerText = 0;
}