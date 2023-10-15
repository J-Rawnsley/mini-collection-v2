// defines the item-link React element. The page will display this element once for each item being linked to

const ItemLink = (props) => {
  // data for each element passed in through props
  const { name, img, imgDesc, link, projectDesc } = props;

  // js function returning placeholder text if a description of the project is not included in input data. Used during development.
  const description = () => {
    if (projectDesc) {
      return projectDesc
    }
    else return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  }

// return statement defines the HTML layout within each item link and arranges how data from properties for each item is displayed
  return (
    <div className="item-link">
      <div className="left-side">
        <a href={link}>
          <img className="item-link-image" src={img} alt={imgDesc} />
        </a>
        <a href={link}>
          <h4 className="item-link-text">{name}</h4>
        </a>
      </div>

      <div className="right-side">
        <a href={link}>{description()}</a>
      </div>
    </div>
  );
};
export default ItemLink;
