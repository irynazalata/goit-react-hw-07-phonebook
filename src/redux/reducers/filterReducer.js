import { createReducer } from '@reduxjs/toolkit';
import filterContacts from '../actions/filterAction';

const filterReducer = createReducer('', {
  [filterContacts]: (_, action) => action.payload,
});

export default filterReducer;
