const baseURL = "https://binhawkins42.github.io/wdd230/";
const url = "https://binhawkins42.github.io/wdd230/chamber/data/members.json";
const businesses = document.querySelector('.members');

async function getMembersData() {
    const responce = await fetch(url);
    const data = await responce.json();
    displayMembers(data.members);
}

getMembersData();

const displayMembers = (members) => {
    members.forEach((members) => {

      let card = document.createElement('section');
      let fullName = document.createElement('h3'); 
      let address = document.createElement('p');
      let phone = document.createElement('p');
      let website = document.createElement('a')
      let logo = document.createElement('img');
  
      logo.setAttribute('src', members.imageurl);
      logo.setAttribute('alt', `logo for ${members.name}`); 
      logo.setAttribute('loading', 'lazy');
      logo.setAttribute('width', '150');
      logo.setAttribute('height', 'auto');
      
      fullName.textContent = `${members.name}`; 

      address.textContent = `${members.address}`;

      phone.textContent = `${members.phonenumber}`;

      website.setAttribute('herf', members.url );


  
      card.appendChild(logo);
      card.appendChild(fullName); 
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(website);

  
      businesses.appendChild(card);
    });
  }