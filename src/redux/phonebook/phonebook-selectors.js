import { createSelector } from '@reduxjs/toolkit';

export const getFilterSelector = state => state.contacts.filter;
export const getContactsSelector = state => state.contacts.items;
export const getLoadingSelector = state => state.isLoading;

export const getFilteredContacts = createSelector(
  [getFilterSelector, getContactsSelector],
  (filter, contacts) => {
    const filterToLowerCase = filter.toLowerCase();
    console.log('getfiltered');
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterToLowerCase)
    );
  }
);
