const initialState = []

const orderReducer = (state = initialState , action) => {
    switch(action.type){
        case "ADDORDER":
            return [...state,action.payload]
        default:
            return state
    }
};

export default orderReducer;