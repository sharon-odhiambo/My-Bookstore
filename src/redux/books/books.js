import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD_BOOK = 'bookstore-app/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-app/books/REMOVE_BOOK';
const GET_BOOKS = 'bookstore-app/books/GET_BOOKS';

export const getBooks = createAsyncThunk(
  GET_BOOKS,
  async () => {
    const data = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/OTA7sjkaeKazlu1OOxng/books');
    const response = await data.json();
    return Object.entries(response);
  },
);
export const addBook = createAsyncThunk(
  ADD_BOOK,
  async (book) => {
    await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/OTA7sjkaeKazlu1OOxng/books', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(book),
    });
    return book;
  },
);

export const removeBook = createAsyncThunk(
  REMOVE_BOOK,
  async (id) => {
    const data = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/OTA7sjkaeKazlu1OOxng/books/${id}`, {
      method: 'DELETE',
      body: JSON.stringify(id),
    });
    const response = await data.json();
    return response;
  },
);

const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_BOOKS}/fulfilled`:
      return action.payload;
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((state) => state[0] !== action.payload.id);
    default:
      return state;
  }
};

export default bookReducer;
