const dayOne = document.querySelector('#dayone');
const dayTwo = document.querySelector('#daytwo');
const dayThree = document.querySelector('#daythree'); 

const urlforcast = 'https://api.openweathermap.org/data/2.5/forecast?lat=36.70&lon=-93.21&appid=faededabba2864043af1c01ff62e7c13&units=imperial'; 

async function apiFetch() {
    try {
        const response = await fetch(urlforcast);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
    } else {
        throw Error (await response.text());
    }
  } catch (error) {
    console.log(error);
  }
  }

  apiFetch();

  function displayResults(data) {
    dayOne.innerHTML = `${data.list[0].dt_txt} | ${data.list[0].main.temp}&deg;F`;
    dayTwo.innerHTML = `${data.list[12].dt_txt} | ${data.list[12].main.temp}&deg;F`;
    dayThree.innerHTML = `${data.list[14].dt_txt} | ${data.list[14].main.temp}&deg;F`;
  }