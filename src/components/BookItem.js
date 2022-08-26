import React from 'react';
import propTypes from 'prop-types';

const BookItem = ({ book, remove, id }) => (
  <li key={id}>
    <div className="book-details">
      <span>{book.category}</span>
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

export default BookItem;

BookItem.propTypes = {
  id: propTypes.string.isRequired,
  remove: propTypes.func.isRequired,
  book: propTypes.shape({
    title: propTypes.string.isRequired,
    author: propTypes.string.isRequired,
    category: propTypes.string.isRequired,
  }).isRequired,
};
