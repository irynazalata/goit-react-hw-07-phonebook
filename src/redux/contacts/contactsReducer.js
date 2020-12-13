import { createReducer } from '@reduxjs/toolkit';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contactsAction';

const addContact = (state, action) => {
  return [...state, action.payload];
};

const deleteContact = (state, action) => {
  return state.filter(contact => contact.id !== action.payload);
};

const contactReducer = createReducer([], {
  [fetchContactsSuccess]: (state, action) => action.payload,
  [addContactSuccess]: addContact,
  [deleteContactSuccess]: deleteContact,
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

export { contactReducer, loading };
