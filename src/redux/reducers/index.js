import { combineReducers } from "redux";
import { productReducer, selectedProduct } from "./productReducer";

const reducer = combineReducers({
    allProducts: productReducer,
    selectedProduct: selectedProduct
})

export default reducer;