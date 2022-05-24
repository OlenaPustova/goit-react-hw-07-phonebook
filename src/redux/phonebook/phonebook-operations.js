import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContactApi, getContactsApi, removeContactApi } from 'utils/mockApi';

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (dataForm, thunkApi) => {
    try {
      const contact = await addContactApi(dataForm);
      return contact;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkApi) => {
    try {
      const contacts = await getContactsApi();
      return contacts;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (id, thunkApi) => {
    try {
      await removeContactApi(id);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
