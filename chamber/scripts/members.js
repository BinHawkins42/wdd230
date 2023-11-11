const url = '../data/members.json';
const members = document.querySelector('.members');

async function getMembersData() {
    const responce = await fetch(url);
    const data = await responce.json();
    displayMembers(data.members);
}

getMembersData();

const displayMembers = (Members) => {
    Members.forEach((Members) => {

      let card = document.createElement('section');
      let fullName = document.createElement('h3'); 
      let address = document.createElement('p');
      let phone = document.createElement('p');
      let website = document.createElement('a')
      let logo = document.createElement('img');
  
      logo.setAttribute('src', prophets.imageurl);
      logo.setAttribute('alt', `logo for ${menbers.name}`); 
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

  
      Members.appendChild(card);
    });
  }