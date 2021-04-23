import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import startButtonReducer from '../features/navbar/startButton/startButtonSlice';
import pagesSlice from '../pages/pagesSlicer'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    startButton: startButtonReducer,
    pages: pagesSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
