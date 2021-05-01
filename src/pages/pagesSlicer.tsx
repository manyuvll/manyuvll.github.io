import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { Page, ABOUT, CURRICULUM, CONTACTME } from './pagesTypes'


export interface pagesState {
    pages: Array<Page>
}

const initialState: pagesState = {
    pages: [ABOUT]
}

const pagesSlice = createSlice({
    name: 'pages',
    initialState,
    reducers: {
        openPage: (state, action: PayloadAction<Page>) => {
            if(state.pages.length === 0) state.pages.push(action.payload)
            else if (state.pages.some(page => page.title === action.payload.title)) {
                state.pages = state.pages.map(page => page.title === action.payload.title ? {...page, isMinimized: false, zIndex: Math.max(...state.pages.map(page => page.zIndex), 0) + 1} : page)
            } else {
                state.pages.push({...action.payload, isMinimized: false, zIndex: Math.max(...state.pages.map(page => page.zIndex), 0)  + 1})
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
        },
        focusPage: (state, action: PayloadAction<string>) => {
            state.pages = state.pages.map(page => page.title === action.payload ? {...page, isMinimized: false, zIndex: Math.max(...state.pages.map(page => page.zIndex), 0)} : page)
        }
    }
})

export const { openPage, closePage, minimizePage, maximizeOrMinimizePage, focusPage } = pagesSlice.actions;
export const selectAllPages = (state: RootState) => state.pages.pages;

export const selectAboutPage = (state: RootState) => state.pages.pages.filter(value => value?.title === ABOUT.title).pop();
export const selectAboutPageZIndex = (state: RootState) => state.pages.pages.filter(value => value?.title === ABOUT.title).pop()?.zIndex;

export const selectCurriculumPage = (state: RootState) => state.pages.pages.filter(value => value?.title === CURRICULUM.title).pop();
export const selectCurriculumPageZIndex = (state: RootState) => state.pages.pages.filter(value => value?.title === CURRICULUM.title).pop()?.zIndex;

export const selectContactMePage = (state: RootState) => state.pages.pages.filter(value => value?.title === CONTACTME.title).pop();
export const selectContactMePageZIndex = (state: RootState) => state.pages.pages.filter(value => value?.title === CONTACTME.title).pop()?.zIndex;

export default pagesSlice.reducer;
