import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    name: string;
    bio: string;
}

const initialState: UserState = {
    name: '',
    bio: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setBio: (state, action: PayloadAction<string>) => {
            state.bio = action.payload;
        },
    },
});

export const { setName, setBio } = userSlice.actions;
export default userSlice.reducer;
