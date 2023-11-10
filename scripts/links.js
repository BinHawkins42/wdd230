const baseURL = "https://binhawkins42.github.io/wdd230/";
const linksURL = "https://binhawkins42.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  }
  
  getLinks();

  const displaylinks = (lessons) => {
    lessons.forEach( (lessons) => {

        let lessons = document.createElement('ol')
        let week = document.createElement('p');
        let url = document.createElement('a');
        let title = document.createElement('p');
      
      lesson.setAttribute();

        week.textContent = `${lessons.lesson}`;

        url.setAttribute('herf', `${lessons.url}`);
        
        title.textContent = `${lessons.title}`;
     
      line.appendChild(week); 
      line.appendChild(url);
      line.appendChild(title);
  
      lessons.appendChild(line);
    });
  }