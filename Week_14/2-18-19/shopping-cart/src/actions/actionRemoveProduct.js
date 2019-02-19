const actionRemoveProduct = (product) => {
    return {
        type: "REMOVE_PRODUCT",
        data: {
            productName: product.productName,
            productPrice: product.productPrice
        }
    };
}

export default actionRemoveProduct;