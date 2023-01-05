import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
    isAdmin: boolean,
}

const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        isAdmin: false,
    },
    reducers: {
        setAdmin: (state: IInitialState, action: PayloadAction<boolean>) => {
            state.isAdmin = action.payload
        },
    }
});

export default adminSlice.reducer;
export const { setAdmin } = adminSlice.actions;