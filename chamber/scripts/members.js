
const baseURL = "https://binhawkins42.github.io/wdd230/";
const url = "https://binhawkins42.github.io/wdd230/chamber/data/members.json";
const businesses = document.querySelector('.grid');

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
      let address = document.createElement('p');
      let phone = document.createElement('p');
      let website = document.createElement('a')
      let logo = document.createElement('img');
  
      logo.setAttribute('src', data.imageurl);
      logo.setAttribute('alt', `logo for ${data.name}`); 
      logo.setAttribute('loading', 'lazy');
      logo.setAttribute('width', '150');
      logo.setAttribute('height', 'auto');
      
      fullName.textContent = `${data.name}`; 

      address.textContent = `${data.address}`;

      phone.textContent = `${data.phonenumber}`;

      website.setAttribute('href', data.url );
      website.textContent = `${data.name} website`;


  
      card.appendChild(logo);
      card.appendChild(fullName); 
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(website);

  
      businesses.appendChild(card);
    });
  }

// const baseURL = "https://binhawkins42.github.io/wdd230/";
// const url = "https://binhawkins42.github.io/wdd230/chamber/data/members.json";
// const businesses = document.querySelector('.grid');

// async function getMembersData() {
//     const responce = await fetch(url);
//     const data = await responce.json();
//     displayMembers(data);
// }

// getMembersData();

// function displayMembers(data){
   

//       let card = document.createElement('section');
//       let fullName = document.createElement('h3'); 
//       let address = document.createElement('p');
//       let phone = document.createElement('p');
//       let website = document.createElement('a')
//       let logo = document.createElement('img');
  
//       logo.setAttribute('src', data.imageurl);
//       logo.setAttribute('alt', `logo for ${date.name}`); 
//       logo.setAttribute('loading', 'lazy');
//       logo.setAttribute('width', '150');
//       logo.setAttribute('height', 'auto');
      
//       fullName.textContent = `${data.name}`; 

//       address.textContent = `${data.address}`;

//       phone.textContent = `${data.phonenumber}`;

//       website.setAttribute('href', data.url );
//       website.textContent = `${data.name} website`;


  
//       card.appendChild(logo);
//       card.appendChild(fullName); 
//       card.appendChild(address);
//       card.appendChild(phone);
//       card.appendChild(website);

  
//       businesses.appendChild(card);
//     };



const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".grid");


gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); 

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
