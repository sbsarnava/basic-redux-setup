import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";

import { persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
    cart: cartReducer
})

const rootPersistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['cart']
}



export default persistReducer(rootPersistConfig, rootReducer)
