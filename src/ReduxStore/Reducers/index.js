import { combineReducers } from "redux";
import tableReducer from "./tableReducer";
import filterReducer from "./filterReducer";
import orderReducer from "./orderReducer";

const rootReducer = combineReducers({
    table_Reducer : tableReducer,
    filter_Reducer : filterReducer,
    order_Reducer : orderReducer
})

export default rootReducer;