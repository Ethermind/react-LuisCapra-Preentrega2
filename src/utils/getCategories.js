import products from "../data/categories.json"

const getCategories = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 100)
    })
}

export default getCategories
