
let todaysDate = new Date().toLocaleDateString('en-US');

let copyright_date = `© ${todaysDate}`;

document.getElementById("copyright-date").innerHTML = copyright_date;

document.getElementById("lastmodified").innerHTML = new Date(document.lastModified)






