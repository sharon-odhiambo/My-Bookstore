const ADD_BOOK = 'bookstore-app/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore-app/books/REMOVE_BOOK';

export const addBook = (id, title, author) => ({
  type: ADD_BOOK,
  payload: {
    id,
    title,
    author,
  },
});
export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: {
    id,
  },
});

const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((state) => state.id !== action.payload.id);
    default:
      return state;
  }
};

export default bookReducer;
