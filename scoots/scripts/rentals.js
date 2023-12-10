const baseURL = "https://binhawkins42.github.io/wdd230/";
const url = "https://binhawkins42.github.io/wdd230/scoots/data/rentals.json";
const businesses = document.querySelector('.card');

async function getMembersData() {
    const responce = await fetch(url);
    const data = await responce.json();
    displayMembers(data);
}

getMembersData();

const displayMembers = (data) => {
    data.forEach((data) => {

      let card = document.createElement('section');
      let fullName = document.createElement('h3'); 
      let riders = document.createElement('p');
      let cc = document.createElement('p');
      let image = document.createElement('img');
  
      image.setAttribute('src', data.imageurl);
      image.setAttribute('alt', `logo for ${data.name}`); 
      image.setAttribute('loading', 'lazy');
      image.setAttribute('width', '150');
      image.setAttribute('height', 'auto');
      
      fullName.textContent = `${data.name}`; 

      riders.textContent = `${data.riders}`;

      cc.textContent = `${data.CC}`;



  
      card.appendChild(image);
      card.appendChild(fullName); 
      card.appendChild(riders);
      card.appendChild(cc);

  
      businesses.appendChild(card);
    });
  }