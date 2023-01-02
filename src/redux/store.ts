import { configureStore, combineReducers } from '@reduxjs/toolkit';
import newsSlice from './slices/newsSlice';
import contactsSlice from './slices/contactsSlice';

const rootReducer = combineReducers({
    news: newsSlice,
    contacts: contactsSlice,
});

export const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;