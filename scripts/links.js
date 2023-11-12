const baseURL = "https://binhawkins42.github.io/wdd230/";
const linksURL = "https://binhawkins42.github.io/wdd230/data/links.json";
const weekly_links = document.querySelector('#lessons');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
  }
  
  getLinks();

  const displayLinks = (lessons) => {
    lessons.forEach( (lessons) => {

        let activity = document.createElement('ol');
        let week = document.createElement('p');
        let url = document.createElement('a');

        week.textContent = `${lessons.lesson}`;

        url.setAttribute('href',`${lessons.links.url}`);
        url.textContent = `${lessons.links.title}`;
        
     
        activity.appendChild(week); 
        activity.appendChild(url);
  
        weekly_links.appendChild(activity);
    });
  }