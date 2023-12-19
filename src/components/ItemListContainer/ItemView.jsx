import { Link } from "react-router-dom"

const ItemView = ({item}) => {
    return (
        <article className="w-80">
            <Link to={`/item/${item.id}`}>
                <h3 className="text-2xl font-semibold">{item.name}</h3>
                <h4>{item.category}</h4>
                <img src={item.img} alt={item.name} />
                <p className="text-xl font-bold">Precio: ${item.price}</p>
                <p>{item.description}</p>
            </Link>
        </article>
    )
}

export default ItemView
