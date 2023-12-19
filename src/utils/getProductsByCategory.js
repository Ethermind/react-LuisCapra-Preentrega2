import products from "../data/products.json"

const getProductsByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products.filter(product => product.category === categoryId))
        }, 1000)
    })
}

export default getProductsByCategory
