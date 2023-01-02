import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IContacts } from '../../types/interfaces';

interface IInitialState {
    contacts: IContacts;
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: {} as IContacts,
    },
    reducers: {
        setContacts: (state: IInitialState, action: PayloadAction<IContacts>) => {
            state.contacts = action.payload;
        },
    }
});

export default contactsSlice.reducer;
export const { setContacts } = contactsSlice.actions;