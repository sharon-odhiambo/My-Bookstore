import React from 'react';
import PropTypes from 'prop-types';

const BookItem = ({ book, remove, id }) => (
  <li key={book.id}>
    <div className="book-details">
      <span>Gothic</span>
      <span>{book.title}</span>
      <span>{book.author}</span>
    </div>
    <div>
      <button type="button">Comments</button>
      <button type="button" id={id} onClick={remove}>Remove</button>
      <button type="button">Edit</button>
    </div>
    <div>
      <p>62% Completed</p>
    </div>
    <div>
      <p>
        <span>Current chapter</span>
        <span>Chapter 3</span>
      </p>
      <button type="button">Update Progress</button>
    </div>
  </li>
);
BookItem.propTypes = {
  book: PropTypes.objectOf,
  id: PropTypes.oneOf(['number', 'String']).isRequired,
  remove: PropTypes.func.isRequired,
};

export default BookItem;

BookItem.defaultProps = {
  book: {},
};
