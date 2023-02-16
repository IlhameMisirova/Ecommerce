import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducer/cartSlice";
import { persistStore, 
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

import { combineReducers } from "@reduxjs/toolkit";
 
const persistConfig = {
  key: 'root',
  storage,
}

const reducer=combineReducers({
    cart:cartSlice
})
 
const persistedReducer = persistReducer(persistConfig, reducer)
 

export const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    
})
export const persistor=persistStore(store)