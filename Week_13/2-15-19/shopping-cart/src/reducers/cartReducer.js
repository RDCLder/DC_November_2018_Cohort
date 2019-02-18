function cartReducer(state, action) {

    // State Undefined
    if (state === undefined) {
        return {
            totalCost: 0,
            productCart: [
                {
                    productName: "Oranges",
                    productPrice: 1
                }
            ]
        };
    }
    // End of State Undefined

    // Switch Statement
    switch (action.type) {
        case "addProduct":
            return {
                ...state,
                totalCost: state.totalCost + parseInt(action.data.productPrice),
                productCart: state.productCart.concat({
                    productName: action.data.productName,
                    productPrice: action.data.productPrice
                })
            };
        case "deleteProduct":
            return {
                ...state,
                totalCost: state.totalCost - parseInt(action.data.productPrice),
                productCart: state.productCart.filter((product) => {
                    return product.productName !== action.data.productName
                })
            };
        default:
            return state;
    }
    // End of Switch Statement

}

export default cartReducer;