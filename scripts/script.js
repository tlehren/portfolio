import {liveProjects, wpProjects} from "./data.js";


//Adds project tiles to the "live sites" section
const liveProjectContent = liveProjects.map((liveProject) => {
  let projectsArticle = document.createElement("article");
  projectsArticle.classList.add("project-item");

  projectsArticle.innerHTML = `
  <a href=${liveProject.link}><img src=${liveProject.image} alt=""></a>
<h3>${liveProject.title}</h3>
<p>${liveProject.description}</p>
<a href=${liveProject.link}><button class="btn">View case study</button></a>
`;

  return projectsArticle;
});

const liveProjectGrid = document.querySelector(".live .grid");

liveProjectContent.forEach((projectGridItem) => {
  liveProjectGrid.append(projectGridItem);
});

//Adds project tiles to the "live sites" section
const wpProjectContent = wpProjects.map((wpProject) => {
  let projectsArticle = document.createElement("article");
  projectsArticle.classList.add("project-item");

  projectsArticle.innerHTML = `
  <a href=${wpProject.link}><img src=${wpProject.image} alt=""></a>
<h3>${wpProject.title}</h3>
<p>${wpProject.description}</p>
<a href=${wpProject.link}><button class="btn">View case study</button></a>
`;

  return projectsArticle;
});

const wpProjectGrid = document.querySelector(".wp .grid");

wpProjectContent.forEach((projectGridItem) => {
  wpProjectGrid.append(projectGridItem);
});


