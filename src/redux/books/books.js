import { createAsyncThunk } from '@reduxjs/toolkit';
// import { useDispatch } from 'react-redux';

const ADD_BOOK = 'bookstore-app/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-app/books/REMOVE_BOOK';
const GET_BOOKS = 'bookstore-app/books/GET_BOOKS';

// const dispatch = useDispatch();
export const getBooks = createAsyncThunk(
  GET_BOOKS,
  async () => {
    const data = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/OTA7sjkaeKazlu1OOxng/books');
    const response = await data.json();
    const newArr = [];
    const keys = Object.keys(response);
    keys.map((key) => (
      newArr.push({
        item_id: key,
        title: response[key][0].title,
        author: response[key][0].author,
        category: response[key][0].category,
      })
    ));
    return newArr || [];
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
    await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/OTA7sjkaeKazlu1OOxng/books/${id}`, {
      method: 'DELETE',
      body: JSON.stringify(id),
    });
    return id;
  },
);

const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_BOOKS}/fulfilled`:
      return action.payload;
    case `${ADD_BOOK}/fulfilled`:
      return [...state, action.payload];
    case `${REMOVE_BOOK}/fulfilled`:
      return state.filter((state) => state.item_id !== action.payload);
    default:
      return state;
  }
};

export default bookReducer;
