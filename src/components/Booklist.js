import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { removeBook } from '../redux/books/books';
import BookItem from './BookItem';

const Booklist = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const onClickHandler = (e) => {
    dispatch(removeBook(e.target.id));
  };

  return (
    <ul>
      {books.map((book) => (
        <BookItem
          id={book.id}
          key={book.id}
          book={book}
          remove={onClickHandler}
        />
      ))}
    </ul>
  );
};

export default Booklist;
