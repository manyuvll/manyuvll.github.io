import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { Page, ABOUT } from './pagesTypes'


export interface pagesState {
    pagesState: Map<string, Page>
}

const initialState: pagesState = {
    pagesState: new Map<string, Page>().set(ABOUT.title, {
        title: ABOUT.title,
        icon: ABOUT.icon,
        isOpened: true,
        isMinimized: false
    })
}

const pagesSlice = createSlice({
    name: 'pages',
    initialState,
    reducers: {
        openPage: (state, action: PayloadAction<Page>) => {
            state.pagesState.set(action.payload.title, action.payload)
        },
        closePage: (state, action: PayloadAction<string>) => {
            state.pagesState.delete(action.payload)
        },
        minimizePage: (state, action: PayloadAction<string>) => {
            const page = state.pagesState.get(action.payload)
            if (page) page.isMinimized = true
        },
        maximizePage: (state, action: PayloadAction<string>) => {
            const page = state.pagesState.get(action.payload)
            if (page) page.isMinimized = false
        }
    }
})

export const { openPage, closePage, minimizePage, maximizePage} = pagesSlice.actions;
export const selectAllPages = (state: RootState) => state.pages.pagesState.values;
export const selectAboutPage = (state: RootState) => state.pages.pagesState.get(ABOUT.title);

export default pagesSlice.reducer;
