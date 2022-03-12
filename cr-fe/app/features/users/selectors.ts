import { RootState } from '../../store';
import { createSelector } from '@reduxjs/toolkit';

export const selectUsers = (state: RootState) => state.users;

export const usersSelector = createSelector(selectUsers, (state) => state);
