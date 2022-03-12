import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { counterReducer } from '@features/counter';
import { usersReducer } from '@features/users';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
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
