const alert = document.querySelector('.weather_alert')

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.49&lon=-86.94&appid=ffbdc82e21c26c6f1453aa3a21f77a5a&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displaybannerResults(data);
    } else {
        throw Error (await response.text());
    }
} catch (error) {
    console.log(error);
}
}

apiFetch();

function displaybannerResults(data) {
        alert.innerHTML = `the weather in Cozumel is ${data.weather[0].description} with no worning`;
}

function hideBanner() {
    const banner = document.querySelector('.banner');
    banner.style.display = 'none';
}

function closeBanner() {
    hideBanner();
}

const closeButton = document.querySelector('.close_banner');
if (closeButton) {
    closeButton.addEventListener('click', closeBanner);
}

