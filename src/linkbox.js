import ItemLink from "./ItemLink"
import book from "./images/book.png"
import cafe from "./images/cafe.png"
import calculator from "./images/calculator.png"
import cat from "./images/cat.png"
import convert from "./images/convert.png"

const itemLinks = [
    {
        name: "Technical Documentation Page",
        img: book,
        link: "#",
        imgDesc: "placeholder"

    },
    {
        name: "Cafe Menu",
        img: cafe,
        link: "#",
        imgDesc: "placeholder"

    },
    {
        name: "Calculator",
        img: calculator,
        link: "#",
        imgDesc: "placeholder"

    },
    {
        name: "Cat Photo App",
        img: cat,
        link: "#",
        imgDesc: "placeholder"

    },
    {
        name: "Roman Numeral Converter",
        img: {convert},
        link: "#",
        imgDesc: "placeholder"

    }
]

const innerJSX = (data) => data.map(item => {
      return  <ItemLink name={item.name} img={item.img} link={item.link} imgDesc={item.imgDesc}/>
  })
  

const Linkbox = () => {
  return <>
    {innerJSX(itemLinks)}
  </>
}


export default Linkbox
