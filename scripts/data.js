import Projects from "./projects.js";

const TSM = new Projects(
  "Two Stroke Motors",
  "Designed & developed a splash page for Two Stroke Motors",
  "images/twoStrokeTile.svg",
  "two-stroke-motors.html"
);

const DH = new Projects(
  "Duncan Hatch portfolio site",
  "Designed & built a portfolio website for animator Duncan Hatch using Elementor & WordPress.",
  "images/duncanHatchArtTile.png",
  "two-stroke-motors.html"
);



export const liveProjects = [TSM];
export const wpProjects = [DH];

