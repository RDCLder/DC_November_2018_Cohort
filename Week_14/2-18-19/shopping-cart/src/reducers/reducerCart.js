function reducerCart(state, action) {

    if (state === undefined) {
        return {
            totalCost: 0,
            productCart: []
        };
    }

    switch (action.type) {
        case "ADD_PRODUCT":
            return {
                ...state,
                totalCost: state.totalCost + Number(action.data.productPrice),
                productCart: state.productCart.concat({
                    productName: action.data.productName,
                    productPrice: action.data.productPrice
                })
            };
        case "REMOVE_PRODUCT":
            return {
                ...state,
                totalCost: state.totalCost - Number(action.data.productPrice),
                productCart: state.productCart.filter(product => {
                    return product.productName !== action.data.productName
                })
            };
        default:
            return state;
    }

};

export default reducerCart;