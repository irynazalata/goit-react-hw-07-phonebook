import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.loading;

const getContacts = state => state.contacts;

const getFilter = state => state.filter;

const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter),
    );
  },
);

const getContactById = createSelector(
  [(_, contactId) => contactId, getContacts],
  (contactId, contacts) => {
    return contacts.find(contact => contact.id === contactId);
  },
);

export default {
  getLoading,
  getContacts,
  getFilter,
  getFilteredContacts,
  getContactById,
};
