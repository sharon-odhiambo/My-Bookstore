import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { removeBook, getBooks } from '../redux/books/books';
import BookItem from './BookItem';

const Booklist = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const onClickHandler = (e) => {
    dispatch(removeBook(e.target.id));
  };
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <ul>
      {books.map((book) => (
        <BookItem
          id={book[0]}
          key={book[0]}
          book={book[1][0]}
          remove={onClickHandler}
        />
      ))}
    </ul>
  );
};

export default Booklist;
