import Projects from "./projects.js";

//live sites
const TSM = new Projects(
  "Two Stroke Motors band website",
  "Designed & developed a splash page for Two Stroke Motors",
  "images/twoStrokeTile.svg",
  "Two Stroke Motors Logo",
  "two-stroke-motors.html"
);

const RF = new Projects(
  "Rogan Finance",
  "Designed & developed branding & website for Rogan Finance",
  "images/rfTile.svg",
  "Rogan Finance logo",
  "two-stroke-motors.html"
);

//wp sites
const DH = new Projects(
  "Duncan Hatch portfolio site",
  "Designed & built a portfolio website for animator Duncan Hatch.",
  "images/duncanHatchArtTile.png",
  "Duncan Hatch Artwork - Never Skip Leg Day",
  "two-stroke-motors.html"
);

const TBH = new Projects(
  "Told By Her Portfolio",
  "Designed & built a portfolio website for author Mitchka Herard",
  "images/duncanHatchArtTile.png",
  "Told by Hee logo",
  "two-stroke-motors.html"
);

const PJ = new Projects(
  "Phatt James Band Website",
  "Designed & built a pband website for Phatt James",
  "images/phattTile.svg",
  "Phatt James Logo",
  "two-stroke-motors.html"
);

export const liveProjects = [TSM, RF];
export const wpProjects = [DH, TBH, PJ];
export const experiments = [];
