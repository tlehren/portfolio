import { liveProjects, wpProjects } from "./data.js";

//Adds project tiles to the "live sites" section
const liveProjectContent = liveProjects.map((liveProject) => {
  let projectsArticle = document.createElement("article");
  projectsArticle.classList.add("project-item", "grid");

  projectsArticle.innerHTML = `
  <img src=${liveProject.image} alt="${liveProject.alt}">
  <div>
    <h3>${liveProject.title}</h3>
    <p>${liveProject.description}</p>
    <div>
      <a href=${liveProject.link1} class="btn" target="_blank">View Live Site</a>
      <a href=${liveProject.link2} class="btn btn-2" target="_blank">View Code</a>
    </div>
  </div>
`;

  return projectsArticle;
});

const liveProjectGrid = document.querySelector(".live .append");

liveProjectContent.forEach((projectGridItem) => {
  liveProjectGrid.append(projectGridItem);
});

//Adds project tiles to the "wordpress sites" section
const wpProjectContent = wpProjects.map((wpProject) => {
  let projectsArticle = document.createElement("article");
  projectsArticle.classList.add("project-item", "grid");

  projectsArticle.innerHTML = `
  <img src=${wpProject.image} alt="${wpProject.alt}">
  <div>
    <h3>${wpProject.title}</h3>
    <p>${wpProject.description}</p>
    <div>
      <a href=${wpProject.link1} class="btn" target="blank">View Live Site</a>
    </div>
  </div>
`;

  return projectsArticle;
});

const wpProjectGrid = document.querySelector(".wp .append");

wpProjectContent.forEach((projectGridItem) => {
  wpProjectGrid.append(projectGridItem);
});
