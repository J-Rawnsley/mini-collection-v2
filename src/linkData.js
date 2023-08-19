import book from "./images/book.png";
// import cafe from "./images/cafe.png";
import calculator from "./images/calculator.png";
// import cat from "./images/cat.png";
import romanV from "./images/romanV.png";
import palindromeImg from "./images/exchange.png";
import mouse from "./images/mouse.png";
import music from "./images/music.png";
// import newspaper from "./images/newspaper.png";
import tributeImg from "./images/tribute.png";
import weatherImg from "./images/weather.png"
import flashcardImg from "./images/flashcard.png"

const tecdoc = "./collection/tec-doc-2/tec-doc-2.html";
const palindrome = "./collection/palindrome/index.html";
const roman = "./collection/roman/index.html";
const clickCounter = "./collection/click-counter/index.html";
const tribute = "./collection/tribute/build-a-tribute-page.html";
const underConstruction =
  "./collection/under_construction/under_construction.html";
// const guardian = "./collection/guardian/guardian.html";
const weather = "https://jrawnsley-weather.netlify.app/"
const flashcardURL = "https://flashcard-hint-generator.netlify.app/"

const itemLinks = [
  {
    name: "Technical Documentation Page",
    img: book,
    link: tecdoc,
    imgDesc: "a stylised book icon",
  },
  /*   {
    name: "Cafe Menu",
    img: cafe,
    link: underConstruction,
    imgDesc: "placeholder",
  }, */
  {
    name: "Calculator",
    img: calculator,
    link: "https://casijoe-calculator.netlify.app/",
    imgDesc: "a stylised calculator icon",
  },
  /*   {
    name: "Cat Photo App",
    img: cat,
    link: underConstruction,
    imgDesc: "placeholder",
  }, */
  {
    name: "Roman Numeral Converter",
    img: romanV,
    link: roman,
    imgDesc: "a picture of a letter V representing a roman numeral",
  },
  {
    name: "Palindrome Checker",
    img: palindromeImg,
    link: palindrome,
    imgDesc: "an icon with arrows pointing left and right",
  },
  {
    name: "Click counter",
    img: mouse,
    link: clickCounter,
    imgDesc: "a computer mouse icon",
  },

  {
    name: "Drum Machine",
    img: music,
    link: underConstruction,
    imgDesc: "a double quaver music note icon",
  },

  // {
  //   name: "Newspaper Front Page",
  //   img: newspaper,
  //   link: guardian,
  //   imgDesc: "a stylised newspaper icon",
  // },
  {
    name: "Tribute Page",
    img: tributeImg,
    link: tribute,
    imgDesc: "a stylised icon of a person wearing a suit",
  },
  {
    name: "Weather App",
    img: weatherImg,
    link: weather,
    imgDesc: "an icon with a sun and a cloud",
  },
  {
    name: "Flashcard Hint Generator",
    img: flashcardImg,
    link: flashcardURL,
    imgDesc: "a square with a pencil, representing a flashcard used fo language learning",
  }
];

export default itemLinks;
