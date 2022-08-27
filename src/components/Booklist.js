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
  }, []);

  return (
    <>
      <ul>
        {books.map((book) => (
          <BookItem
            id={book.item_id}
            key={book.item_id}
            book={book}
            remove={onClickHandler}
          />
        ))}
      </ul>
      <hr />
    </>
  );
};

export default Booklist;
