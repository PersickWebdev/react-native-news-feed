import { configureStore, combineReducers } from '@reduxjs/toolkit';
import newsSlice from './slices/newsSlice';
import contactsSlice from './slices/contactsSlice';
import adminSlice from './slices/adminSlice';

const rootReducer = combineReducers({
    news: newsSlice,
    contacts: contactsSlice,
    admin: adminSlice
});

export const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;