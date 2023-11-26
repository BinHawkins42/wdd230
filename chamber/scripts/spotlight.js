document.addEventListener('DOMContentLoaded', () => {
const baseURL = "https://binhawkins42.github.io/wdd230/";
const membersUrl = "https://binhawkins42.github.io/wdd230/chamber/data/members.json";
const spotlightContainer = document.getElementById("spotlight");

async function getMembersData(Url) {
    try {
        const response = await fetch(Url);
        const data = await response.json();
        displaySpotlightMembers(data.members);
    } catch (error) {
        console.error('Error fetching or processing data:', error);
    }
}

function getRandomMembers(data, count) {
    const shuffledMembers = data.sort(() => 0.5 - Math.random());
    return shuffledMembers.slice(0, count);
}

function displaySpotlightMembers(members) {
    const spotlightMembers = getRandomMembers(members, 3);

    spotlightMembers.forEach(members => {
        const card = createSpotlightCard(members);
        spotlightContainer.appendChild(card);
    });
}

function createSpotlightCard(members) {
   

      let card = document.createElement('div');
      card.classList.add('spotlight');

      let fullName = document.createElement('h3'); 
      let address = document.createElement('p');
      let phone = document.createElement('p');
      let website = document.createElement('a')
      let logo = document.createElement('img');
      let level = document.createElement('h3')
  
      logo.setAttribute('src', members.imageurl);
      logo.setAttribute('alt', `logo for ${members.name}`); 
      logo.setAttribute('loading', 'lazy');
      logo.setAttribute('width', '150');
      logo.setAttribute('height', 'auto');
      
      fullName.textContent = `${members.name}`; 

      address.textContent = `${members.address}`;

      phone.textContent = `${members.phonenumber}`;

      website.setAttribute('href', members.url );
      website.textContent = `${members.name} website`;

      level.textContent = `${members.level}`;
  
      card.appendChild(logo);
      card.appendChild(fullName); 
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(website);
      card.appendChild(level);

  
      return card;
 
  }

getMembersData(membersUrl);
});
// const businesses = document.querySelector('.cards');
// const randomIndex = document.querySelector('.spotlight');




// // const getRandomMembers = () => {
// //     const randomMembers = [];
// //     while (randomMembers.length < 3) {
// //       const randomMember = getRandomMember();
// //       // Avoid duplicates
// //       if (!randomMembers.some( member => member === randomMember)) {
// //         randomMembers.push(randomMember);
// //       }
// //     }
// //     return randomMembers;
// //   };

// async function getMembersData() {
//     const responce = await fetch(urlSpot);
//     const data = await responce.json();
//     displayMembers(data.members);
// }

// const getRandomMember = () => {
//     const randomIndex = Math.floor(Math.random() * businesses);
//     return  randomIndex;
//   };

// const displayMembers = (members) => {
//     members.forEach((members) => {

//       let card = document.createElement('section');
//       let fullName = document.createElement('h3'); 
//       let address = document.createElement('p');
//       let phone = document.createElement('p');
//       let website = document.createElement('a')
//       let logo = document.createElement('img');
//       let level = document.createElement('h3')
  
//       logo.setAttribute('src', members.imageurl);
//       logo.setAttribute('alt', `logo for ${members.name}`); 
//       logo.setAttribute('loading', 'lazy');
//       logo.setAttribute('width', '150');
//       logo.setAttribute('height', 'auto');
      
//       fullName.textContent = `${members.name}`; 

//       address.textContent = `${members.address}`;

//       phone.textContent = `${members.phonenumber}`;

//       website.setAttribute('href', members.url );
//       website.textContent = `${members.name} website`;

//       level.textContent = `${members.level}`;
  
//       card.appendChild(logo);
//       card.appendChild(fullName); 
//       card.appendChild(address);
//       card.appendChild(phone);
//       card.appendChild(website);
//       card.appendChild(level);

  
//       businesses.appendChild(card);
//     });
//   }

//   getMembersData();





 