import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { INews } from '../../types/interfaces';

interface INewsState {
    news: Array<INews>,
    currentNews: INews,
}

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        news: [] as Array<INews>,
        currentNews: {} as INews,
    },
    reducers: {
        setAllNews: (state: INewsState, action: PayloadAction<Array<INews>>) => {
            state.news = action.payload;
        },
        setOneNews: (state: INewsState, action: PayloadAction<INews>) => {
            state.news.push(action.payload);
        },
        editNews: (state: INewsState, action: PayloadAction<INews>) => {
            state.news.map((news: INews) => news.id === action.payload.id ? action.payload : news);
        },
        removeNews: (state: INewsState, action: PayloadAction<INews['id']>) => {
            state.news.filter((news: INews) => news.id !== action.payload);
        },
        setCurrentNews: (state: INewsState, action: PayloadAction<INews>) => {
            state.currentNews = action.payload;
        },
        removeCurrentNews: (state: INewsState, action: PayloadAction<INews>) => {
            state.currentNews = action.payload;
        }
    }
});

export default newsSlice.reducer;
export const { setAllNews, setOneNews, editNews, removeNews, setCurrentNews, removeCurrentNews } = newsSlice.actions;