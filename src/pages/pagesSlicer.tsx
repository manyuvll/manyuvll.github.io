import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { Page, ABOUT } from './pagesTypes'


export interface pagesState {
    pages: Array<Page>
}

const initialState: pagesState = {
    pages: []
}

const pagesSlice = createSlice({
    name: 'pages',
    initialState,
    reducers: {
        openPage: (state, action: PayloadAction<Page>) => {
            const isAlreadyOpened = state.pages.find(page => page.title === action.payload.title)
            if(!isAlreadyOpened) {
                 state.pages.push(action.payload)
            } else {
                isAlreadyOpened.isMinimized = false
            }
        },
        closePage: (state, action: PayloadAction<string>) => {
            state.pages = state.pages.filter(page => page?.title !== action.payload)
        },
        minimizePage: (state, action: PayloadAction<string>) => {
            state.pages = state.pages.map(page => page.title === action.payload ? {...page, isMinimized: true } : page)
        },
        maximizeOrMinimizePage: (state, action: PayloadAction<string>) => {
            state.pages = state.pages.map(page => page.title === action.payload ? {...page, isMinimized: !page.isMinimized } : page)
        }
    }
})

export const { openPage, closePage, minimizePage, maximizeOrMinimizePage} = pagesSlice.actions;
export const selectAllPages = (state: RootState) => state.pages.pages;
export const selectAboutPage = (state: RootState) => state.pages.pages.filter(value => value?.title === ABOUT.title).pop();

export default pagesSlice.reducer;
