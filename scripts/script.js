import { liveProjects, wpProjects } from "./data.js";

//Adds project tiles to the "live sites" section
const liveProjectContent = liveProjects.map((liveProject) => {
  let projectsArticle = document.createElement("article");
  projectsArticle.classList.add("project-item");

  projectsArticle.innerHTML = `
  <a href=${liveProject.link}><img src=${liveProject.image} alt="${liveProject.alt}"></a>
<h3>${liveProject.title}</h3>
<p>${liveProject.description}</p>
<a href=${liveProject.link} class = "link">View case study</a>
`;

  return projectsArticle;
});

const liveProjectGrid = document.querySelector(".live .grid");

liveProjectContent.forEach((projectGridItem) => {
  liveProjectGrid.append(projectGridItem);
});

//Adds project tiles to the "wordpress sites" section
const wpProjectContent = wpProjects.map((wpProject) => {
  let projectsArticle = document.createElement("article");
  projectsArticle.classList.add("project-item");

  projectsArticle.innerHTML = `
  <a href=${wpProject.link}><img src=${wpProject.image} alt="${wpProject.alt}"></a>
<h3>${wpProject.title}</h3>
<p>${wpProject.description}</p>
<a href=${wpProject.link} class = "link">View case study</a>
`;

  return projectsArticle;
});

const wpProjectGrid = document.querySelector(".wp .grid");

wpProjectContent.forEach((projectGridItem) => {
  wpProjectGrid.append(projectGridItem);
});

//dark mode
const button = document.querySelector(".darkmode");
const main = document.querySelector(".main");

button.addEventListener("click", () => {
  main.classList.toggle("dark-bg");
});
