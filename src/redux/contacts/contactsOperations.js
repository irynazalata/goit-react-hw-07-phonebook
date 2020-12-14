import axios from 'axios';
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

axios.defaults.baseURL = 'http://localhost:2000';

const addContact = ({ name, number }) => dispatch => {
  dispatch(addContactRequest());
  axios
    .post('/contacts', { name, number })
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error)));
};

const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};
export default { addContact, fetchContacts, deleteContact };
