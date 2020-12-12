import { createAction } from '@reduxjs/toolkit';

const addContactRequest = createAction('ADD_CONTACT_REQUEST');
const addContactSuccess = createAction('ADD_CONTACT_SUCCESS');
const addContactError = createAction('ADD_CONTACT_ERROR');

const fetchContactsRequest = createAction('FETCH_CONTACTS_REQUEST');
const fetchContactsSuccess = createAction('FETCH_CONTACTS_SUCCESS');
const fetchContactsError = createAction('FETCH_CONTACTS_ERROR');

const deleteContactRequest = createAction('DELETE_CONTACT_REQUEST');
const deleteContactSuccess = createAction('DELETE_CONTACT_SUCCESS');
const deleteContactError = createAction('DELETE_CONTACT_ERROR');

export {
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
};
