import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './BookItem';

const Booklist = ({ books }) => (
  <ul>
    {books.map((book) => (
      <BookItem
        key={book.id}
        book={book}
      />
    ))}
  </ul>
);

Booklist.propTypes = {
  books: PropTypes.arrayOf,
  // handleChangeProps: PropTypes.func.isRequired,
  // deleteTodoProps: PropTypes.func.isRequired,
};

Booklist.defaultProps = {
  books: [],
};

export default Booklist;
