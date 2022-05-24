import { createAction } from '@reduxjs/toolkit';

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const getContactsRequest = createAction('contacts/getContactsRequest');
export const getContactsSuccess = createAction('contacts/getContactsSuccess');
export const getContactsError = createAction('contacts/getContactsError');

export const removeContactRequest = createAction(
  'contacts/removeContactsRequest'
);
export const removeContactSuccess = createAction(
  'contacts/removeContactsSuccess'
);
export const removeContactError = createAction('contacts/removeContactsError');

export const findContact = createAction('findContact');
