import { configureStore } from "@reduxjs/toolkit"; // archivo de configuracion, es una funcion que recibe un objeto llamado reducer
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

import appReducer from "./AppReducer";

const persistConfig = {
    key: "state",
    storage,
    blacklist: ["message"],
};

const persistedReducer = persistReducer(persistConfig, appReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
            },
        }),
});

export const persistor = persistStore(store);
