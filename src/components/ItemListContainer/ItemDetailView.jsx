import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import getProducts from "../../utils/getProducts";
import NavBar from "../NavBar/NavBar";

const ItemDetailView = () => {
    const [item, setItem] = useState(null);
    const { itemId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getProducts().then((items) => {
            setItem(items.find(item => item.id === itemId))
        }
        )
    }, [])

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <>
            <header>
                <NavBar />
            </header>
            {
                item && (
                    <article className="w-80">
                        <h3 className="text-2xl font-semibold">{item.name}</h3>
                        <img src={item.img} alt={item.name} />
                        <p className="text-xl font-bold">Precio: ${item.price}</p>
                        <p>{item.description}</p>
                        <Link onClick={handleBack}>Volver</Link>
                    </article>
                )
            }
        </>
    )
}

export default ItemDetailView
