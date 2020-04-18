import { createStore, combineReducers } from 'redux'
import { act } from 'react-dom/test-utils';

const initialForm = {
    name: "",
    weigth: 0,
    img: ""
}
const formReducer = (data = initialForm, action) => {
    switch (action.type) {
        case "CHANGE_NAME": return { ...data, name: action.name }
        case "CHANGE_PRICE": return { ...data, price: action.price }
        case "CHANGE_IMG": return { ...data, img: action.img }
        //...data mean ==> each [name: "", weigth: 0, img: ""]
    }
    return data; //less than return itSelf
}

const productReducer = (products = [], action) => {
    switch (action.type) {
        case "GET_products": return action.products
        case "ADD_PRODUCT": return [...products, action.product];
        case "DELETE_PRODUCT" : return products.filter( product => +product.id !== +action.id )
        case "UPDATE_PRODUCT" : return products.map(product => {
            if (+product.id === +action.id ){
                return action.product
            }
            else
                return product 
        })
    }
    return products; //less than return itSelf
}

const rootReducer = combineReducers({
    products:productReducer,
    form:formReducer,
})
export const store = createStore(rootReducer);