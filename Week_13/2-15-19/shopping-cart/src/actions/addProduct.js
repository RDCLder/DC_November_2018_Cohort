
const addProduct = (item) => {
    return {
        type: "addProduct",
        data: {
            productName: item.productName,
            productPrice: item.productPrice
        }
    }
}

export default addProduct;