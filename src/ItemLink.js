const ItemLink = (props) => {
  const { name, img, imgDesc, link } = props;
  return (
    <div className="item-link">
      <a href={link}>
        <img className="item-link-image" src={img} alt={imgDesc} />
      </a>
      <a href={link}>
        <h4 className="item-link-text">{name}</h4>
      </a>
    </div>
  );
};
export default ItemLink;
