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
            displayResultsforcast(data);
    } else {
        throw Error (await response.text());
    }
  } catch (error) {
    console.log(error);
  }
  }

  apiFetch();

  function displayResultsforcast(data) {
        const dateStringOne = `${data.list[5].dt_text}`;
        const dateObjectOne = new Date(dateStringOne); 
        const dayOfWeekNumber = dateObjectOne.getUTCDay();
        const dayOfWeekOne = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayOfWeekNameOne = dayOfWeekOne[dayOfWeekNumber];
    dayOne.innerHTML = dayOfWeekNameOne | `${data.list[5].main.temp}&deg;F`;
        const dateStringTwo = `${data.list[12].dt_text}`;
        const dateObjectTwo = new Date(dateStringTwo); 
        const dayOfWeekNumberTwo = dateObjectTwo.getUTCDay();
        const dayOfWeekTwo = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayOfWeekNameTwo = dayOfWeekTwo[dayOfWeekNumberTwo];
    dayTwo.innerHTML = dayOfWeekNameTwo | ` ${data.list[12].main.temp}&deg;F`;
        const dateStringThree = `${data.list[18].dt_text}`;
        const dateObjectThree = new Date(dateStringThree); 
        const dayOfWeekNumberThree = dateObjectThree.getUTCDay();
        const dayOfWeekThree = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayOfWeekNameThree = dayOfWeekThree[dayOfWeekNumberThree];
    dayThree.innerHTML = dayOfWeekNameThree | `${data.list[18].main.temp}&deg;F`;
  }