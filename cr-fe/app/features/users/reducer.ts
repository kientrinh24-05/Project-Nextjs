import { createReducer } from '@reduxjs/toolkit';
import { fetchUsers } from './actions';

export type UsersState = {
  data: { users: any };
  loading: boolean;
  error: boolean;
};

const initialState: UsersState = {
  data: { users: [] },
  loading: false,
  error: false,
};

export const usersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data.users = payload.data;
    })
    .addCase(fetchUsers.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
});

export default usersReducer;
