const deleteProduct = (item) => {
    return {
        type: "deleteProduct",
        data: {
            productName: item.productName,
            productPrice: item.productPrice
        }
    }
}

export default deleteProduct;