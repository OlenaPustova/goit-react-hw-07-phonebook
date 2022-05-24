import { createReducer } from '@reduxjs/toolkit';

import {
  addContact,
  getContacts,
  removeContact,
} from 'redux/phonebook/phonebook-operations';

const isLoadingReducer = createReducer(false, {
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [getContacts.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [getContacts.rejected]: () => false,
  [removeContact.pending]: () => true,
  [removeContact.fulfilled]: () => false,
  [removeContact.rejected]: () => false,
});

export default isLoadingReducer;
