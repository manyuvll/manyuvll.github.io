import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface AboutState {
    isOpened: boolean
    isVisible: boolean
}

const initialState: AboutState = {
    isOpened: true,
    isVisible: true
}

const aboutSlice = createSlice({
    name: 'about',
    initialState,
    reducers: {
        closeAbout: (state) => {
            state.isOpened = false
            state.isVisible = false
        },
        openAboutByItem: (state) => {
            state.isOpened = true
            state.isVisible = true
        },
        minimize: (state) => {
            state.isVisible = false
        }
    }

})

export const { closeAbout, openAboutByItem, minimize } = aboutSlice.actions;
export const selectAboutIsOpened = (state: RootState) => state.about.isOpened;

export default aboutSlice.reducer;
