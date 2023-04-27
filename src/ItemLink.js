

const ItemLink = (props) => {
    const {name, img, imgDesc, link} = props
    return (
        <div>
            <a href={link}><h4>{name}</h4></a>
            <a href={link}><img src={img} alt={imgDesc}/></a>
        </div>
    )
}
export default ItemLink