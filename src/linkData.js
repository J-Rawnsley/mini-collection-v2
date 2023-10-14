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
    projectDesc: "A calculator app built using React. For this project, I learned some basics of React JS, and challenged myself to build a calculator without following any tutorials or guides. In this app, if you input a sum followed by another operator button (rather than equals), it will calculate and display the answer to the first sum before carrying out the next operation on the result. This is known as 'immediate logic' and is by design, because the app is designed to behave exactly like the simple hardware calculators we used as kids. Just like those old-school calculators, this one will also repeat the same operation when the equals button is repeatedly pressed.",
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
    projectDesc: "A React app, which gets and displays the weather. For this project, I used the 'fetch' method to get waether data from openweathermap.org. The app displays current weather for 32 toowns and cities in the UK.",
    included: true
  },
  {
    name: "Flashcard Hint Generator",
    img: flashcardImg,
    link: flashcardURL,
    imgDesc: "a square with a pencil, representing a flashcard used for language learning",
    projectDesc: "A flashcard is a double-sided piece of paper (or digital equivalent) with a fact (e.g. a word) on one side, and a question or hint on the other. For language learners, they are a great way to learn and remember vocabulary, but thinking of suitable questions or hints for a large number of words can be time-consuming. That's why I created this app. It uses Words API to get hints for any word or words entered. If multiple words are entered, the app will check whether an example sentence is available for that word, and if so it will make a cloze-deletion question. If there is no sentence available, the app will provide a definition as a clue. If only a single word is entered, the app will give a choice of cloze-deletion and definition hints for that word.",
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
