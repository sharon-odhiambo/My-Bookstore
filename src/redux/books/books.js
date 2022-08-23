import { v4 as uuidv4 } from 'uuid';

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

const initialState = [
  {
    id: uuidv4(),
    title: 'A Song of Ice and Fire',
    author: 'Ramin Djawadi',
  },
  {
    id: uuidv4(),
    title: 'Mere Living',
    author: 'C.S Lewis',
  },
  {
    id: uuidv4(),
    title: 'Never Split the Difference',
    author: 'Chris Voss',
  },
  {
    id: uuidv4(),
    title: 'Getting to Yes',
    author: 'William Ur',
  },
];

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
