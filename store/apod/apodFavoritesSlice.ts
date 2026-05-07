import { SimpleApod } from '@/applications/apod/interfaces/SimpleApod';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ApodFavoriteState {
    [key: string]: SimpleApod
}

const initialState: ApodFavoriteState = {}

const apodFavoritesSlice = createSlice({
    name: "apodFavorites",
    initialState,
    reducers: {
        toggleFavorite: (state, action: PayloadAction<SimpleApod>) => {
            const apod = action.payload;
            const date = apod.date;
            if (!!state[date]) {
                delete state[date];
                return;
            }
            state[date] = apod;
        }
    }
});

export const { toggleFavorite } = apodFavoritesSlice.actions

export default apodFavoritesSlice.reducer