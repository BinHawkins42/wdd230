const msToDay = 84600000;

let theDateToday = Date.now();
let lastVisit = Number(window.localStorage.getItem('visitDate')) || Date.now();
let numDays = (theDateToday - lastVisit) / msToDays;
const visitsDisplay = document.querySelector('.visits');
let numDaysRound = Math.round(numDays);

if (numDays >= 2) {
    visitsDisplay.textContent = `you last visited ${numDaysRound} days ago.`;
} else {
    if (numDays >= 1) {
        visitsDisplay.textContent = `you last visited ${numDaysRound} days ago.`;
    } else {
        if (numDays > 0) {
            visitsDisplay.textContent = `back so soon! Awsome!`;
        } else {
            visitsDisplay.textContent = `welcome! Let is know if you have any questions.`;
        }
}
}

localStorage.setItem('visitDate',theDateToday);

document.getElementsByClassName("output").innerHTML = visitsDisplay;