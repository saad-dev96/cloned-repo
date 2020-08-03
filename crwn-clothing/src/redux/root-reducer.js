import { combineReducers } from 'redux';
import {persisReducer, persistReducer} from 'redux-persist'
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import storage from 'redux-persist/lib/storage';
import directoryReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: 'cart' //no user because firebase handles it
}


const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer, //[persisted]
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer); //ROOT REDUCER MODIFIED WITH PERSIST