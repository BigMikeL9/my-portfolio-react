import BankitApp from "../assets/img/bankit-app.jpg";
import BankitWeb from "../assets/img/bankit-website.jpg";
import CountryStates from "../assets/img/country-states.jpg";
import SimonGame from "../assets/img/simon-game.jpg";
import GuessNumber from "../assets/img/guess-the-number-name.jpg";
import KardioDev from "../assets/img/kardio-dev-app.jpg";
import PigGame from "../assets/img/the-pig-game.jpg";
import Tours from "../assets/img/tours.jpg";
import FenkoHotel from "../assets/img/fenko-hotel.jpg";
import NexterHomes from "../assets/img/nexter-homes.jpg";
import Freelance from "../assets/img/freelance.jpg";
import DiceGame from "../assets/img/dice-game.jpg";
import SanitizingEg from "../assets/img/sanitizingeg.jpg";

// -------------------------------------------------------------------
// REMEMBER -> still need to add React apps
// -------------------------------------------------------------------

import NlmDreamAnatomy from "../assets/img/nlm-dream-anatomy.jpg";
import NlmDreamAnatomy_Prototype from "../assets/img/nlm-dream-anatomy-protoype.jpg";
import Aahrpp from "../assets/img/aahrpp.jpg";
import Nceed from "../assets/img/nceed-eating-disorder.jpg";
import NapeoAnnualConference from "../assets/img/napeo-annual-conference.jpg";
import Clc from "../assets/img/clc-trade-center.jpg";

// NOTE: 'images' property can have nested 'overview, development, prototyping & challenges' properties just like 'details' property. And will show that image before its corresponding text.
// If any if the nested potteries inside 'details' property have empty stings, then they will not be rendered.

const worksData = [
  {
    id: "bankit-website",
    type: "website",
    images: {
      overview: BankitWeb,
      development: BankitWeb,
      prototyping: BankitWeb,
      challenges: null,
    },
    altText: "An image of Bankit. A website that advertises the Bankit App.",
    title: "Bankit Website",
    stack: "HTML / CSS / JavaScript",
    details: {
      overview: `A Fully Responsive landing page that advertises the Bankit App. Where users can explore all the App's features and services, and even sign-up an account to the Bankit Web Application. 
      `,
      development: `This landing page features multiple DOM Manipulation and DOM Traversing techniques through Capturing and Bubbling, by using the Event Delegation event handling pattern. Featured techniques include smooth scrolling and hover animations to child elements through their parent element, lazy loading images and sections reveal on scroll through the Intersection Observer API, a tab and slider components and multiple other techniques that brings the page to life. This landing page was created using HTML5, CSS3, and`,
      prototyping: `Add prototyping details hereAdd prototyping details hereAdd prototyping details hereAdd prototyping details hereAdd prototyping details hereAdd prototyping details hereAdd prototyping details hereAdd prototyping details hereAdd prototyping details here`,
      challenges: null,
    },
    url: `http://bankit.mikelkamel.com/`,
    role: "Development",
    overview: "Landing page that advertises the Bankit App",
  },

  {
    id: "bankit-app",
    type: "website",
    images: {
      overview: BankitApp,
      development: BankitApp,
      prototyping: BankitApp,
      challenges: BankitApp,
    },
    altText: "An image of Bankit. A website that advertises the Bankit App.",
    title: "Bankit Website",
    stack: "HTML / CSS / JavaScript",
    details: {
      overview: `A Fully Responsive landing page that advertises the Bankit App. Where users can explore all the App's features and services, and even sign-up an account to the Bankit Web Application. 
      `,
      development: `This landing page features multiple DOM Manipulation and DOM Traversing techniques through Capturing and Bubbling, by using the Event Delegation event handling pattern. Featured techniques include smooth scrolling and hover animations to child elements through their parent element, lazy loading images and sections reveal on scroll through the Intersection Observer API, a tab and slider components and multiple other techniques that brings the page to life. This landing page was created using HTML5, CSS3, and`,
      prototyping: `Add prototyping details hereAdd prototyping details hereAdd prototyping details hereAdd prototyping details hereAdd prototyping details hereAdd prototyping details hereAdd prototyping details hereAdd prototyping details hereAdd prototyping details here`,
      challenges: null,
    },
    url: `http://bankit.mikelkamel.com/`,
    role: "Development",
    overview: "Landing page that advertises the Bankit App",
  },
];

export default worksData;
