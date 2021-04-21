import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import startButtonReducer from '../features/navbar/startButton/startButtonSlice';
import aboutReducer from '../pages/about/aboutSlicer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    startButton: startButtonReducer,
    about: aboutReducer
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
