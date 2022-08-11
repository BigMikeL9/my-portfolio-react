import BankitApp from "../assets/img/bankit-app.jpg";
import BankitWeb from "../assets/img/bankit-website.jpg";
import CountryStats from "../assets/img/country-states.jpg";
import GuessNumber from "../assets/img/guess-the-number-name.jpg";
import KardioDev from "../assets/img/kardio-dev-app.jpg";
import PigGame from "../assets/img/the-pig-game.jpg";
import Tours from "../assets/img/tours.jpg";
import FenkoHotel from "../assets/img/fenko-hotel.jpg";
import NexterHomes from "../assets/img/nexter-homes.jpg";
import Freelance from "../assets/img/freelance.jpg";
import Fresco from "../assets/img/fresco.jpg";
import Wallee from "../assets/img/wallee.jpg";
import SimonGame from "../assets/img/simon-game.jpg";
import DiceGame from "../assets/img/dice-game.jpg";
import SanitizingEg from "../assets/img/sanitizingeg.jpg";

// -------------------------------------------------------------------
/* REMEMBER -> still need to add React apps 

    - Food order app 
    - expense tracker
    
*/
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
    id: "nlm-dreamanatomy",
    type: "website",
    images: {
      overview: NlmDreamAnatomy,
      development: null,
      prototyping: NlmDreamAnatomy_Prototype,
      challenges: null,
    },
    altText:
      "An image of the National Library of Medicine - Dream Anatomy Exhibition.",
    title: "National Library of Medicine - Dream Anatomy",
    role: "Development",
    stack: "HTML / CSS / JavaScript",
    overview:
      "A website I developed for the National Library of Medicine as part of their Exhibition program.",
    details: {
      overview: `The National Library of Medicine - Exhibition Program was created with the goal of producing online exhibitions that stimulate enthusiasm for history and encourage people to learn about medicine, themselves, and their communities. Since 1996, NLM have presented inspiring stories about people, science and medicine, and history drawn from the renowned collection of the National Library of Medicine.

      Drawn mainly from the collections of the National Library of Medicine, Dream Anatomy shows off the anatomical imagination of the human body made possible by the printing press, from 1500 to the present.
      `,
      development: `The Dream Anatomy exhibition was designed by Astriata's design team and developed by myself. The Website features multiple sections with each containing sub-sections that contain assets. The user can horizontally navigate through these assets using the mouse wheel, arrow keys, the tab key or through a custom built scroll bar at the bottom of the exhibition. The scroll bar contains bullets which represents the start of sub-sections in each section. I used Swiper package to horizontally navigate between assets in each section. Built-in Intersection Observer API to trigger multiple functionalities such as section transitions and lazy-loading images in assets. The Exhibition follows best accessibility practices and is compatible with screen readers. It was created using Vanilla JavaScript, HTML, and Sass.`,
      prototyping: `During the prototyping phase, I tested multiple packages to see which would be most suitable with the project's navigation requirements. One of them was the GSAP package which I used to build the prototype. After building the prototype, I decided that Swiper would be a better choice since its core features revolved around sliders and slider functionalities, like events that gets triggered when a slider is at the start or end, or dynamically generating slides in sections, which was useful since the layout of the exhibition changed on tablet and mobile screens. All of these Swiper features and ease of use made it the better choice. `,
      challenges: `Navigation between sections and assets in different sections was definitely one of the challenges I faced during development, either it be through thumbnails in the gallery section (last section of the exhibition) or through unique URL parameters. Scrolling to a section and then triggering an event to swiper to scroll to the target asset in that section was my go to solution to tackle this challenge. Exhibition loading speed was also definitely a concern since the website had a lot of content. Lazy-loading images as well as dynamically generating assets and thumbnails asynchronously, was the best solution in my opinion to improve the page loading speed. Another challenge and to which Alex (Astiata's Backend Developer) helped me tackle, was the logic to dynamically position the scrollbar bullets in relation to the position of their corresponding sub-sections' positions, in each section.`,
    },
    url: "https://www.nlm.nih.gov/exhibition/dream-anatomy/astriata-exhibition.html",
  },

  {
    id: "bankit-app",
    type: "Web-Application",
    images: {
      overview: BankitApp,
      development: null,
      prototyping: null,
      challenges: null,
    },
    altText:
      "An image of Bankit App Web-Application . A website that advertises the Bankit App.",
    title: "Bankit App",
    role: "Development",
    stack: "HTML / CSS / JavaScript",
    overview: "Landing page that advertises the Bankit App",
    details: {
      overview: `A Web Application where users can track their deposits, withdrawals, request loans, transfer money and even delete their accounts.`,
      development: `This App utilizes a lot of Modern ES6+ Array methods and tools inorder to manipulate multiple users account data. Some of the methods used to manipulate these Data Structures include destructuring, Spread and Rest operators, map(), filter() and reduce() methods, Nullish (??) and Optional Chaining (?.) operators, Short-Circuiting operators (&& and ||), and much more.`,
      prototyping: null,
      challenges: null,
    },
    url: `http://bankitapp.mikelkamel.com/`,
    github: `https://github.com/BigMikeL9/Bankit-App`,
  },

  {
    id: "kardio-dev",
    type: "Web-Application",
    images: {
      overview: KardioDev,
      development: null,
      prototyping: null,
      challenges: null,
    },
    altText:
      "An image of Kardio-Dev Web Application. A workout tracker Application.",
    title: "Kardio Dev",
    role: "Development",
    stack: "HTML / CSS / JavaScript",
    overview: "A Workout Tracker Web Application",
    details: {
      overview: `A Fully Responsive Workout Tracker Web Application that uses multiple APIs in order to track and locally save the User's workouts Input Data. APIs used in this App include a Geolocation API which pinpoints the user's workout location, and a Local Storage API which saves the user's workout input data to the browser's Local Storage. 
      `,
      development: null,
      prototyping: null,
      challenges: null,
    },
    url: `http://kardiodev.mikelkamel.com/`,
    github: `https://github.com/BigMikeL9/Kardio-Dev-App`,
  },

  {
    id: "fresco",
    type: "web-application",
    images: {
      overview: Fresco,
      development: null,
      prototyping: null,
      challenges: null,
    },
    altText: "An image of the Fresco Web-Application. A food ordering app.",
    title: "Fresco",
    role: "Development",
    stack: "HTML / CSS / JavaScript ",
    overview: "A food ordering web-application created with ReactJS",
    details: {
      overview: `A food ordering app where users can order food from a provided menu. The menu is fetched from a database. Upon order confirmation, the order is sent to a different database to be processed 🍜. This app utilizes the ReactJS built in ContextAPI to manage and update the app-wide state which controls the cart's functionality.`,
      development: null,
      prototyping: null,
      challenges: null,
    },
    url: `http://fresco.mikelkamel.com/`,
    github: `https://github.com/BigMikeL9/react-food-order-app`,
  },

  {
    id: "country-stats",
    type: "Web-Application",
    images: {
      overview: CountryStats,
      development: null,
      prototyping: null,
      challenges: null,
    },
    altText:
      "An image of Country Stats Web Application. A Fully Responsive Web Application that displays information about countries.",
    title: "Country Stats",
    role: "Development",
    stack: "HTML / CSS / JavaScript",
    overview:
      "A Web Application that displays information about countries and their neighbors.",
    details: {
      overview: `A Fully Responsive Web Application that displays information about countries and their neighbors, depending on user's input.
      `,
      development: `This simple Web Application utilizes Promises, Fetch API, and Async/Await to create and chain multiple AJAX Calls in order to fetch the client's requested data Asynchronously from a Third-Party API. Response data is then used to render information about the specified country and its neighbors.`,
      prototyping: null,
      challenges: null,
    },
    url: `http://countrystats.mikelkamel.com/`,
    github: `https://github.com/BigMikeL9/Country_Stats`,
  },

  {
    id: "wallee",
    type: "web-application",
    images: {
      overview: Wallee,
      development: null,
      prototyping: null,
      challenges: null,
    },
    altText:
      "An image of the Expensio Web-Application. An expense tracker app.",
    title: "Wallee",
    role: "Development",
    stack: "HTML / CSS / JavaScript ",
    overview: "An expense tracker web application built with ReactJS.",
    details: {
      overview: `An expense tracker web application where users can add, delete, and sort their monthly expenses.`,
      development: null,
      prototyping: null,
      challenges: null,
    },
    url: `http://wallee.mikelkamel.com/`,
    github: `https://github.com/BigMikeL9/react-expense-tracker-app/tree/main/react-expense-tracker`,
  },

  {
    id: "bankit-website",
    type: "website",
    images: {
      overview: BankitWeb,
      development: null,
      prototyping: null,
      challenges: null,
    },
    altText: "An image of Bankit. A website that advertises the Bankit App.",
    title: "Bankit Website",
    role: "Development",
    stack: "HTML / CSS / JavaScript",
    overview: "Landing page that advertises the Bankit App",
    details: {
      overview: `A Fully Responsive landing page that advertises the Bankit App. Where users can explore all the App's features and services, and even sign-up an account to the Bankit Web Application.. 
      `,
      development: `This landing page features multiple DOM Manipulation and DOM Traversing techniques through Capturing and Bubbling, by using the Event Delegation event handling pattern. Featured techniques include smooth scrolling and hover animations to child elements through their parent element, lazy loading images, content reveal on scroll through the Intersection Observer API, a tab and slider components along with multiple other techniques that brings the page to life.`,
      prototyping: null,
      challenges: null,
    },
    url: `http://bankit.mikelkamel.com/`,
    github: `https://github.com/BigMikeL9/Bankit-Website`,
  },

  {
    id: "guess-number-game",
    type: "Web-Application",
    images: {
      overview: GuessNumber,
      development: null,
      prototyping: null,
      challenges: null,
    },
    altText: "An image of the Guess the Number Game Web Application.",
    title: "Guess the Number Game",
    role: "Development",
    stack: "HTML / CSS / JavaScript",
    overview: "Guess the correct number to win 🎉",
    details: {
      overview: `A Game where players tries to guess a randomly generated number to win, and then attempt to beat their current high score by guessing the number in the least amount of rounds. PS. Check Console 😉.
      `,
      development: null,
      prototyping: null,
      challenges: null,
    },
    url: `http://guessthenumber.mikelkamel.com/`,
    github: `https://github.com/BigMikeL9/Guess-the-Number-Game`,
  },

  {
    id: "pig-game",
    type: "Web-Application",
    images: {
      overview: PigGame,
      development: null,
      prototyping: null,
      challenges: null,
    },
    altText: "An image of the Pig game Web Application.",
    title: "Pig Game",
    role: "Development",
    stack: "HTML / CSS / JavaScript",
    overview: "A dice game 🎲",
    details: {
      overview: `A game where players take turns to roll a single die as many times as they wish, adding all roll results to a running total, but losing their gained score for the turn if they roll a 1. First to collect 100 points wins 🥇.
      `,
      development: null,
      prototyping: null,
      challenges: null,
    },
    url: `http://piggame.mikelkamel.com/`,
    github: `https://github.com/BigMikeL9/The-Pig-Game`,
  },

  {
    id: "nexter-website",
    type: "website",
    images: {
      overview: NexterHomes,
      development: null,
      prototyping: null,
      challenges: null,
    },
    altText:
      "An image of Nexter Website. Luxury real estate marketplace website. Where users can find their dream home. 🏡",
    title: "Nexter",
    role: "Development",
    stack: "HTML / CSS",
    overview: "A website that utilizes CSS Grid Layout",
    details: {
      overview: `A Fully Responsive luxury real estate marketplace website. Where users can find their dream home 🏡. This landing page was built completely using CSS Grid Layouts inorder to tackle some of the most advanced CSS Grid Layout techniques. 
      `,
      development: null,
      prototyping: null,
      challenges: null,
    },
    url: `http://bankit.mikelkamel.com/`,
    github: `https://github.com/BigMikeL9/Nexter`,
  },

  {
    id: "tour-website",
    type: "website",
    images: {
      overview: Tours,
      development: null,
      prototyping: null,
      challenges: null,
    },
    altText:
      "An image of Tours Website. A website that advertises a Touring Agency.",
    title: "Tours",
    role: "Development",
    stack: "HTML / CSS",
    overview: "A website that advertises a Touring Agency",
    details: {
      overview: `A website that advertises a Tour Agency, that was built using HTML, CSS, SCSS with implementation of BEM and SMACCS methodologies.
      `,
      development: null,
      prototyping: null,
      challenges: null,
    },
    url: `http://bankit.mikelkamel.com/`,
    github: `https://github.com/BigMikeL9/tour_website`,
  },

  {
    id: "fenko-website",
    type: "website",
    images: {
      overview: FenkoHotel,
      development: null,
      prototyping: null,
      challenges: null,
    },
    altText: "An image of Fenko Website. An All-in one booking App.",
    title: "Fenko",
    role: "Development",
    stack: "HTML / CSS",
    overview: "A website that utilizes CSS FlexBox Techniques",
    details: {
      overview: `An All-in one booking App where users can book a Hotel, a flight, a car, and a tour, all from one platform 🌅. This landing was build completely using CSS Flex-Box and practices some of the most modern responsive techniques using FlexBox.
      `,
      development: null,
      prototyping: null,
      challenges: null,
    },
    url: `http://bankit.mikelkamel.com/`,
    github: `https://github.com/BigMikeL9/Fenko`,
  },

  {
    id: "freelance",
    type: "Website",
    images: {
      overview: Freelance,
      development: null,
      prototyping: null,
      challenges: null,
    },
    altText:
      "An image of Freelance Website. A Fully Responsive Website that advertises different services being offered by the great Mikel Kamel.",
    title: "Freelance",
    role: "Development",
    stack: "HTML / CSS ",
    overview: "Freelancing website created by the great Mikel Kamel.",
    details: {
      overview: `One of my first ever Websites. It was created specifically for freelancing which advertises the different services is used to offer back in the day.
      `,
      development: null,
      prototyping: null,
      challenges: null,
    },
    url: `http://freelance.mikelkamel.com/`,
    github: `https://github.com/BigMikeL9/Freelance-Website`,
  },
];

export default worksData;
