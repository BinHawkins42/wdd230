const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const responce = await fetch(url);
    const data = await responce.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophets) => {

      let card = document.createElement('section');
      let fullName = document.createElement('h2'); 
      let portrait = document.createElement('img');
  
      
      fullName.textContent = `${prophets.name} ${prophets.lastname}`; 
      
      portrait.setAttribute('src', prophets.imageurl);
      portrait.setAttribute('alt', `Portrait of ${prophets.name} ${prophets.lastname}`); 
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
     
      card.appendChild(fullName); 
      card.appendChild(portrait);
  
      cards.appendChild(card);
    });
  }