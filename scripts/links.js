const baseURL = "https://binhawkins42.github.io/wdd230/";
const linksURL = "https://binhawkins42.github.io/wdd230/data/links.json";
const weekly_links = document.querySelector('#lessons');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.lessons);
  }
  
  const displayLinks = (lessons) => {
    lessons.forEach((lesson) => {

        let activity = document.createElement('ol');
        let week = document.createElement('li');       
        week.textContent = `${lesson.lesson}`;
        activity.appendChild(week); 

        lesson.links.forEach((links) => { 
          let url = document.createElement('a'); 
          url.setAttribute('href',`${links.url}`);
          url.textContent = `${links.title}`;
          activity.appendChild(url);
        });
        weekly_links.appendChild(activity);
    });
  }

  getLinks();