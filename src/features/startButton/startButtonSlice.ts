import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface StartButtonState {
    isClicked: Boolean
}

const initialState: StartButtonState = {
    isClicked: false
}

const startButtonSlice = createSlice({
    name: 'startButton',
    initialState,
    reducers: {
        click: (state) => {
            state.isClicked = !state.isClicked
        }
    }

})

export const { click } = startButtonSlice.actions;
export const selectIsClicked = (state: RootState) => state.startButton.isClicked;

export default startButtonSlice.reducer;
