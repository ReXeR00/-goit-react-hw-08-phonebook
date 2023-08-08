import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/user/signup', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      Notiflix.Notify.warning('Something went wrong. Please, try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/user/login', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      Notiflix.Notify.warning('Something went wrong. Please, try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/user/logout');
    clearAuthHeader();
  } catch (error) {
    Notiflix.Notify.warning('Something went wrong. Please, try again.');
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const presistedToken = state.auth.token;

    if (presistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(presistedToken);
      const response = await axios.get('user/me');
      return response.data;
    } catch (error) {
      Notiflix.Notify.warning('Something went wrong. Please, try again.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
