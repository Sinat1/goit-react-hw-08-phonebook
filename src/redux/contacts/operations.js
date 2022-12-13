import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/api';
import {
  ifAddingContactSuccessfulNotification,
  ifDeletingContactNotification,
  ifErrorNotification,
} from 'notifications/notifications';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(ifErrorNotification());
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const { data } = await api.post('/contacts', { name, number });
      ifAddingContactSuccessfulNotification();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(ifErrorNotification());
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await api.delete(`/contacts/${contactId}`);
      ifDeletingContactNotification();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(ifErrorNotification());
    }
  }
);
