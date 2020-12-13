import { configureStore } from '@reduxjs/toolkit';
import { contactReducer, loading } from './contacts/contactsReducer';
import filter from './filter/filterReducer';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter,
    loading,
  },
});
export default store;
