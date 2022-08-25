// import { v4 as uuidv4 } from 'uuid';
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
// export const addBook = createAsyncThunk(
//   ADD_BOOK,
//   async (id, booktitle, bookauthor, bookcategory) => {
//     const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/OTA7sjkaeKazlu1OOxng/books', {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//       body: JSON.stringify({
//         item_id: id, title: booktitle, author: bookauthor, category: bookcategory,
//       }),
//     });
//     console.log(id, booktitle, bookauthor, bookcategory);
//     const data = await response.json();
//     console.log(data);
//     return Object.entries(data);
//   },
// );
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
    case `${ADD_BOOK}/fulfilled`:
      return [...state, action.payload];
    case `${REMOVE_BOOK}/fulfilled`:
      return state.filter((state) => state[0] !== action.payload.id);
    default:
      return state;
  }
};

export default bookReducer;
