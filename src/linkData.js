import book from "./images/book.png";
// import cafe from "./images/cafe.png";
import calculator from "./images/calculator.png";
// import cat from "./images/cat.png";
import romanV from "./images/romanV.png";
import palindromeImg from "./images/exchange.png";
import mouse from "./images/mouse.png";
import music from "./images/music.png";
import newspaper from "./images/newspaper.png";
import tributeImg from "./images/tribute.png";

const tecdoc = "./collection/tec-doc-2/tec-doc-2.html";
const palindrome = "./collection/palindrome/index.html";
const roman = "./collection/roman/index.html";
const clickCounter = "./collection/click-counter/index.html";
const tribute = "./collection/tribute/build-a-tribute-page.html";
const underConstruction =
  "./collection/under_construction/under_construction.html";
const guardian = "./guardian/guardian.html";

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
    link: underConstruction,
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

  {
    name: "Newspaper Front Page",
    img: newspaper,
    link: guardian,
    imgDesc: "a stylised newspaper icon",
  },
  {
    name: "Tribute Page",
    img: tributeImg,
    link: tribute,
    imgDesc: "a stylised icon of a person wearing a suit",
  },
];

export default itemLinks;
