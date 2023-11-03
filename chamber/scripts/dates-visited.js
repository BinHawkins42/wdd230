const today = Date.now();

localStorage.setItem('dateVisited', today);

const lastVisit = localStorage.getItem('dateVisited');

const numberOfDays = lastVisit + Date.now();

if (numberOfDays = 1) {
    let output = "Welcome! Let us know if you have any questions";
}
else if (numberOfDays = 2) {
    let output = "Back so soon! Awesome!";
}

else if (numberOfDays < 2 ) {
    let output = "welcome back it has been" + numberOfDays;
 }

document.getElementById("output").innerHTML = output;
