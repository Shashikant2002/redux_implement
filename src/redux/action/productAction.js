import { ProductConstance } from "../constance/productConstance";
const { SET_PRODUCTS, SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCT } = ProductConstance;

export const setProduct = (products) => {
    return {
        type: SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (products) => {
    return {
        type: SELECTED_PRODUCT,
        payload: products
    }
}

export const removeSelectedProduct = (products) => {
    return {
        type: REMOVE_SELECTED_PRODUCT,
    }
}
