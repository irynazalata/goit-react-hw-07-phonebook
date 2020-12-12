import { configureStore } from '@reduxjs/toolkit';
import { contactReducer, loading } from './reducers/contactsReducer';
import filter from './reducers/filterReducer';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter,
    loading,
  },
});
export default store;
