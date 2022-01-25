import Projects from "./projects.js";

//live sites
const TSM = new Projects(
  "Two Stroke Motors",
  "Two Stroke Motors is an Indie-Folk band based out of Burlington, VT. I was asked by the band to create a website in anticipation of their upcoming album release with the goal of creating a central repository for all their content and social media presence.<br><br>I ended up designing a compact splash page, which gives users quick access to all of Two Stroke Motor's content & social profiles while capturing the band's straight ahead musical style.",
  "images/tsmScreen.png",
  "Two Stroke Motors Logo",
  "https://www.twostrokemotorsband.com/",
  "https://github.com/tlehren/TwoStrokeMotors"
);

const RF = new Projects(
  "Rogan Finance",
  "Rogan Finance is a Canadian based meme crypto currency. The concept behind the coin is that the owner's uncle is good friends with UFC personality Joe Rogan and that Rogan himself will be imminently endorsing the coin on his podcast.<br><br> Working closely with the Rogan Finance team I helped to develop a brand identity and website that features dramatic images of Rogan as well as a plethora of tongue-in-cheek copy. We went with a black, white, and gold color scheme to give off the vibe of cheap luxury to further push the gag. ",
  "images/rfScreen.png",
  "Rogan Finance logo",
  "https://rogan.finance/",
  "https://github.com/BenHagel/RoganCoin"
);

//wp sites
const DH = new Projects(
  "Duncan Hatch",
  "Duncan Hatch is a Boston based artist, animator, and illustrator. He has worked on a wide variety of projects for museums like The Smithsonian Natural History Museum and for bands such as Pigeons Playing Ping Pong and Galactic. He has animated television commercials, educational media, music videos, and a short film which received a Vimeo Staff Pick.<br><br>Duncan's animation style is bold, whimsical, and super psychedelic. His art really does most of the talking, so I made sure to leave plenty of whitespace for the galleries to breathe. My favorite design element is the animated character on both the home and about pages.",
  "images/dhScreen.png",
  "Duncan Hatch Artwork - Never Skip Leg Day",
  "https://duncanhatchart.com/"
);

const TBH = new Projects(
  "Told By Her",
  "Told By Her is the featured creative work of Boston based writer & director Mitchka Herard. It is her goal as a writer to transport people to the worlds she creates as a means for them to escape the struggles of everyday life. She believes that readers and viewers alike will relate to her work and hopes that it will ultimately help them find their way to self discovery as well.<br><br> The goal with this project was to cleanly present Mitchka's various projects in order to effectively communicate her brand message. Using the power of WordPress I was able to organize Mitchka's dynamic content in a way that is accessible to her fans. ",
  "images/tbhScreen.png",
  "Told by Her logo",
  "https://toldbyher.com/"
);

const PJ = new Projects(
  "Phatt James",
  "Phatt James is a melodic grunge rock band based out of Bridgeport, Connecticut. Their music is bold, punchy, and vibrant. When setting out to design their site I wanted to capture that same essence. The band has a striking logo which I used that as a fixed background image throughout the site. The site also features 3rd party integrations with Spotify to display the band's latest music and Bandsintown to display their upcoming shows.  ",
  "images/pjScreen.png",
  "Phatt James Logo",
  "https://phattjames.com/"
);

export const liveProjects = [TSM, RF];
export const wpProjects = [DH, TBH, PJ];
