import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice'
// Redux Persist
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistStorage = {
    key: "root",
    version: 0,
    storage,
};

const rootReducer = combineReducers({
    user: authSlice,
});

const persistedReducer = persistReducer(persistStorage, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({ 
            serializableCheck: false 
        }),
    devTools: true
});

export default store