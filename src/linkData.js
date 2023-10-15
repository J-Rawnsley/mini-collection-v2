// this file contains all the project information and can easily be updated when projects are added or deleted

// import images
import book from "./images/book.png";
import cafe from "./images/cafe.png";
import calculator from "./images/calculator.png";
import cat from "./images/cat.png";
import romanV from "./images/romanV.png";
import palindromeImg from "./images/exchange.png";
import mouse from "./images/mouse.png";
import music from "./images/music.png";
import newspaper from "./images/newspaper.png";
import tributeImg from "./images/tribute.png";
import weatherImg from "./images/weather.png"
import flashcardImg from "./images/flashcard.png"

// set urls for item links
const tecdoc = "./collection/tec-doc-2/tec-doc-2.html";
const palindrome = "./collection/palindrome/index.html";
const roman = "./collection/roman/index.html";
const clickCounter = "./collection/click-counter/index.html";
const tribute = "./collection/tribute/build-a-tribute-page.html";
const underConstruction =
  "./collection/under_construction/under_construction.html";
const guardian = "./collection/guardian/guardian.html";
const weather = "https://jrawnsley-weather.netlify.app/"
const flashcardURL = "https://flashcard-app-v2.netlify.app/"

//data used for creating the grid of project links. Only items where "included" is set to "true" will be included in the site.
const itemLinks = [
 {
    name: "Cafe Menu",
    img: cafe,
    link: underConstruction,
    imgDesc: "placeholder",
    included: false
  },
  {
    name: "Calculator",
    img: calculator,
    link: "https://casijoe-calculator.netlify.app/",
    imgDesc: "a stylised calculator icon",
    projectDesc: "For this project, I learned some basics of React JS, and challenged myself to build a calculator without following any tutorials or guides. In this app, if you input a sum followed by another operator button (rather than equals), it will calculate and display the answer to the first sum before carrying out the next operation on the result. This is known as 'immediate logic' and is by design, because the app is designed to behave exactly like common hardware calculators used in non-scientific settings. Just like common hardware calculators, this one will also keep applying the same operation when the equals button is repeatedly pressed.",
    included: true
  },
  {
    name: "Cat Photo App",
    img: cat,
    link: underConstruction,
    imgDesc: "placeholder",
    included: false
  },
  {
    name: "Roman Numeral Converter",
    img: romanV,
    link: roman,
    imgDesc: "a picture of a letter V representing a roman numeral",
    projectDesc: "This is one of my early projects, which converts numbers into roman numerals, and roman numerals back into numbers.",
    included: false
  },
  {
    name: "Palindrome Checker",
    img: palindromeImg,
    link: palindrome,
    imgDesc: "an icon with arrows pointing left and right",
    projectDesc: "This is a tech doc page",
    included: false
  },
  {
    name: "Click counter",
    img: mouse,
    link: clickCounter,
    imgDesc: "a computer mouse icon",
    projectDesc: "This is a tech doc page",
    included: false
  },

  {
    name: "Drum Machine",
    img: music,
    link: underConstruction,
    imgDesc: "a double quaver music note icon",
    projectDesc: "This is a tech doc page",
    included: false
  },

  {
    name: "Newspaper Front Page",
    img: newspaper,
    link: guardian,
    imgDesc: "a stylised newspaper icon",
    included: false
  },
  {
    name: "Tribute Page",
    img: tributeImg,
    link: tribute,
    imgDesc: "a stylised icon of a person wearing a suit",
    included: false
  },
  {
    name: "Weather App",
    img: weatherImg,
    link: weather,
    imgDesc: "an icon with a sun and a cloud",
    projectDesc: "This project uses the 'fetch' method to get weather data from openweathermap.org, and displays current weather for 32 towns and cities in the UK. Of course, being limited to certain UK locations means that it's not as useful as other weather apps. But it helped me to build on skills such as using state and effect hooks in React, modular programmning with reusable components, and making 3rd party API calls. The secret API key is hidden using a Netlify function to avoid a security risk.",
    included: true
  },
  {
    name: "Flashcard Hint Generator",
    img: flashcardImg,
    link: flashcardURL,
    imgDesc: "a square with a pencil, representing a flashcard used for language learning",
    projectDesc: "A flashcard is a double-sided piece of paper (or digital equivalent) with a fact (e.g. a word) on one side, and a question or hint on the other. It's a great way for learners of English to study and remember vocabulary, but thinking of suitable questions or hints for lots of words can be time-consuming. This app intends to speed up the process by instantly and intelligently generating useful hints for multiple words at the same time. It uses the Free Dictionary API, searching for example sentences that can be used as cloze-deletion hints, and using word definitions to create hints where no example sentences are available.",
    included: true
  },
  {
    name: "Technical Documentation Page",
    img: book,
    link: tecdoc,
    imgDesc: "a stylised book icon",
    projectDesc: "This is a copy of a single page from the PyTest technical documentation website. I created it to learn about responsive web design using HTML and CSS.",
    included: true
  },
];

export default itemLinks;
