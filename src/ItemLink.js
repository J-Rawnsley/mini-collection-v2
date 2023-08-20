const ItemLink = (props) => {
  const { name, img, imgDesc, link } = props;
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
        <a href={link}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </a>
      </div>
    </div>
  );
};
export default ItemLink;
