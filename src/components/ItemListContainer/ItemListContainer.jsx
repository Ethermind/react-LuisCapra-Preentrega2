import { useEffect, useState } from "react";
import getProducts from "../../utils/getProducts";
import ItemView from "./ItemView";
import { useParams } from "react-router-dom";
import getProductsByCategory from "../../utils/getProductsByCategory";

const ItemListContainer = ({ children }) => {
    const [items, setItems] = useState([]);
    const {categoryId} = useParams()

    useEffect(() => {
        if(categoryId){
            getProductsByCategory(categoryId).then((data) => {
                setItems(data);
            });
        } else {
            getProducts().then((data) => {
                setItems(data);
            });
        }
    }, [categoryId]);

    return (
        <section>
            <h2>Productos</h2>
            <hr></hr>
            <div className="flex flex-wrap justify-start gap-10 items-stretch">
                {items.length === 0 ? (
                    <span className="text-4xl">CARGANDO</span>
                ) : (
                    items.map((item) => <ItemView key={item.id} item={item}></ItemView>)
                )}
            </div>
        </section>
    )
}

export default ItemListContainer
