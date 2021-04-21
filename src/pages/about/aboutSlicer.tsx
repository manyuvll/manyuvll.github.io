import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface AboutState {
    isOpened: boolean
}

const initialState: AboutState = {
    isOpened: true
}

const aboutSlice = createSlice({
    name: 'about',
    initialState,
    reducers: {
        openAbout: (state) => {
            state.isOpened = !state.isOpened
        },
        openAboutByItem: (state) => {
            state.isOpened = true
        }
    }

})

export const { openAbout, openAboutByItem } = aboutSlice.actions;
export const selectAboutIsOpened = (state: RootState) => state.about.isOpened;

export default aboutSlice.reducer;
