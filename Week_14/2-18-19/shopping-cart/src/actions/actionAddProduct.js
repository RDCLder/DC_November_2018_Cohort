const actionAddProduct = (product) => {
    return {
        type: "ADD_PRODUCT",
        data: {
            productName: product.productName,
            productPrice: product.productPrice
        }
    };
}

export default actionAddProduct;