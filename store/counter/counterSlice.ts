import { CounterResponse } from '@/applications/counter/interfaces/CounterResponse';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
    count: number,
    isReady: boolean
}

const DEFAULT_INITIAL_VALUE = 1;
const initialState: CounterState = {
    count: DEFAULT_INITIAL_VALUE,
    isReady: false
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addOne: (state) => {
            state.count++;
        },
        substractOne: (state) => {
            if (state.count === 0) return;
            state.count--;
        },
        resetCount: (state, action: PayloadAction<number>) => {
            if (action.payload < 0) action.payload = 0;
            state.count = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchInitialData.pending, (state) => {
                state.isReady = false;
            })
            .addCase(fetchInitialData.fulfilled, (state, action) => {
                state.isReady = true;
                state.count = action.payload;
            })
            .addCase(fetchInitialData.rejected, (state, action) => {
                state.isReady = true;
                state.count = action.payload as number;
            });
    },
});

export const fetchInitialData = createAsyncThunk('counter/getInitialData', async (_, { rejectWithValue }) => {
    try {
        const response: CounterResponse = await fetch('/api/counter').then(res => res.json());
        return response.count;
    } catch (err) {
        return rejectWithValue(DEFAULT_INITIAL_VALUE)
    }
});

export const { addOne, substractOne, resetCount } = counterSlice.actions;

export default counterSlice.reducer;