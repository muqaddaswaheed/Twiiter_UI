// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Local storage as default storage

// Persist config for redux-persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['tweets', 'follow'], // Add slices that you want to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serializableCheck for redux-persist
    }),
});

const persistor = persistStore(store); // Create persistor

export { store, persistor }; // Export both store and persistor
