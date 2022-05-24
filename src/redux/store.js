import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from './phonebook/phonebook-reducer';
import isLoading from './loader/loader-reducer';

export const store = configureStore({
  reducer: {
    contacts: phonebookReducer,
    isLoading,
  },
});
