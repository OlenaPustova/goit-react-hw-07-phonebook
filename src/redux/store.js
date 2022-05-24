import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from './phonebook/phonebook-reducer';

export const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
  },
});
