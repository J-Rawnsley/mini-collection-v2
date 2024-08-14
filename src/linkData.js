// this file contains all the project information and can easily be updated when projects are added or deleted

// import images
import book from './images/book.png';
import cafe from './images/cafe.png';
import calculator from './images/calculator.png';
import cat from './images/cat.png';
import romanV from './images/romanV.png';
import palindromeImg from './images/exchange.png';
import mouse from './images/mouse.png';
import music from './images/music.png';
import newspaper from './images/newspaper.png';
import tributeImg from './images/tribute.png';
import weatherImg from './images/weather.png';
import flashcardImg from './images/flashcard.png';
import readingImg from './images/readingBook.png';
import toDoListImg from './images/toDoList.png';
import laptopImg from './images/laptopCode.png'

// set urls for item links
const tecdoc = './collection/tec-doc-2/tec-doc-2.html';
const palindrome = './collection/palindrome/index.html';
const roman = './collection/roman/index.html';
const clickCounter = './collection/click-counter/index.html';
const tribute = './collection/tribute/build-a-tribute-page.html';
const underConstruction =
	'./collection/under_construction/under_construction.html';
const guardian = './collection/guardian/guardian.html';
const weather = 'https://jrawnsley-weather.netlify.app/';
const flashcardURL = 'https://flashcard-app-v2.netlify.app/';
const library = 'https://local-library-tutorial-production-1f23.up.railway.app';
const todoLink = 'https://todo-list-production-f7bd.up.railway.app';

//data used for creating the grid of project links. Only items where "included" is set to "true" will be included in the site.
const itemLinks = [
	{
		name: 'Cafe Menu',
		img: cafe,
		link: underConstruction,
		imgDesc: 'placeholder',
		included: false,
	},
	{
		name: 'Calculator',
		img: calculator,
		link: 'https://casijoe-calculator.netlify.app/',
		imgDesc: 'a stylised calculator icon',
		projectDesc: 'Original work. An "Immediate Logic" calcultor that mimics classic hardware calculators. Built with React JS',
		included: true,
	},
	{
		name: 'Cat Photo App',
		img: cat,
		link: underConstruction,
		imgDesc: 'placeholder',
		included: false,
	},
	{
		name: 'Roman Numeral Converter',
		img: romanV,
		link: roman,
		imgDesc: 'a picture of a letter V representing a roman numeral',
		projectDesc:
			'An early project, which converts numbers into roman numerals, and roman numerals back into numbers. Vanilla JS',
		included: true,
	},
	{
		name: 'Palindrome Checker',
		img: palindromeImg,
		link: palindrome,
		imgDesc: 'an icon with arrows pointing left and right',
		projectDesc: 'Checks whether a word  or sentence is a palindrome (the same forward and backwards). Vanilla JS',
		included: true,
	},
	{
		name: 'Click counter',
		img: mouse,
		link: clickCounter,
		imgDesc: 'a computer mouse icon',
		projectDesc: 'This is a tech doc page',
		included: false,
	},

	{
		name: 'Drum Machine',
		img: music,
		link: underConstruction,
		imgDesc: 'a double quaver music note icon',
		projectDesc: 'This is a tech doc page',
		included: false,
	},

	{
		name: 'Newspaper Front Page',
		img: newspaper,
		link: guardian,
		imgDesc: 'a stylised newspaper icon',
		included: false,
	},
	{
		name: 'Tribute Page',
		img: tributeImg,
		link: tribute,
		imgDesc: 'a stylised icon of a person wearing a suit',
		included: false,
	},
	{
		name: 'Weather App',
		img: weatherImg,
		link: weather,
		imgDesc: 'an icon with a sun and a cloud',
		projectDesc:
			"UK weather app that calls the openweathermap.org API to display current weather for 32 towns and cities in the UK. Built with React, making use of Netlify's serverless functions to handle secrets",
		included: true,
	},
	{
		name: 'Flashcard Hint Generator',
		img: flashcardImg,
		link: flashcardURL,
		imgDesc:
			'a square with a pencil, representing a flashcard used for language learning',
		projectDesc:
			'A langauge learning app that calls the Free Dictionary API. Click through to the readme on Github for explanation / instructions. Uses vanilla JS with async functions, styled with bootstrap',
      included: true,
	},
	{
		name: 'Technical Documentation Page',
		img: laptopImg,
		link: tecdoc,
		imgDesc: 'a stylised book icon',
		projectDesc:
			'A copy of a single static page from the PyTest technical documentation website. I created it to learn about responsive web design using HTML and CSS.',
		included: true,
	},
	{
		name: 'Local Library Database',
		img: readingImg,
		link: library,
		imgDesc: 'a stylised icon showing a person reading',
		projectDesc:
			'A full-stack application created using Node & Express JS, hosted on Railway. I created this project by following a tutorial, which contained a number of challenges that helped me to understand node/express development',
		included: true,
	},
	{
		name: 'To-do List',
		img: toDoListImg,
		link: todoLink,
		imgDesc: 'a list icon with ticks',
		projectDesc:
			'Another full-stack app, this time all my own work. Created with Node & Express and hosted on Railway. Simple but functional.',
		included: true,
	},
];

export default itemLinks;
