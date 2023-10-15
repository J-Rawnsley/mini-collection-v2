import ItemLink from "./ItemLink";
import itemLinks from "./linkData.js";

//takes data for projects to be included, then creates a grid of items, using the "ItemLink" JSX function to format each item.
// filters the data array to only include items where "included" is set to "true". Then passes the data for each into a new instance of the "ItemLink" JSX element to be displayeed within the grid.
const innerJSX = (data) =>
  data.filter(item => item.included).map((item) => {
    return (
      <ItemLink
        name={item.name}
        img={item.img}
        link={item.link}
        imgDesc={item.imgDesc}
        projectDesc={item.projectDesc}
      />
    );
  });

// returns the formatted data as a section element with classes for styling
const Linkbox = () => {
  return (
    <section className="linkbox main-element">{innerJSX(itemLinks)}</section>
  );
};

export default Linkbox;
