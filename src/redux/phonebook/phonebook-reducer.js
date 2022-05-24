// import { combineReducers } from 'redux';
import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { findContact } from './phonebook-actions';
import { addContact, getContacts, removeContact } from './phonebook-operations';
import isLoadingReducer from 'redux/loader/loader-reducer';

const itemsReducer = createReducer([], {
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [getContacts.fulfilled]: (_, { payload }) => payload,
  [removeContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
  [findContact]: (_, { payload }) => payload,
});

const errorReducer = createReducer(null, {
  [addContact.pending]: () => null,
  [addContact.fulfilled]: () => null,
  [addContact.rejected]: (_, { payload }) => payload,
  [getContacts.pending]: () => null,
  [getContacts.fulfilled]: () => null,
  [getContacts.rejected]: (_, { payload }) => payload,
  [removeContact.pending]: () => null,
  [removeContact.fulfilled]: () => null,
  [removeContact.rejected]: (_, { payload }) => payload,
});

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  error: errorReducer,
  isLoading: isLoadingReducer,
});
