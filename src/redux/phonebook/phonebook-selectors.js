import { createSelector } from '@reduxjs/toolkit';

export const getFilterSelector = state => state.contacts.filter;
export const getContactsSelector = state => state.contacts.items;
export const getLoadingSelector = state => state.contacts.isLoading;

export const getFilteredContacts = createSelector(
  [getFilterSelector, getContactsSelector],
  (filter, contacts) => {
    const filterToLowerCase = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterToLowerCase)
    );
  }
);
