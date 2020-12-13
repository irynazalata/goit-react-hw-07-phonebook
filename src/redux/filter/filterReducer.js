import { createReducer } from '@reduxjs/toolkit';
import filterContacts from './filterAction';

const filterReducer = createReducer('', {
  [filterContacts]: (_, action) => action.payload,
});

export default filterReducer;
