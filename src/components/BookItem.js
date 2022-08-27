import React from 'react';
import propTypes from 'prop-types';

const BookItem = ({ book, remove, id }) => (
  <li key={id}>
    <div className="bookitem">
      <div className="book-details">
        <span>{book.category}</span>
        <span>{book.title}</span>
        <span>{book.author}</span>
      </div>
      <div className="book-buttons">
        <button type="button">Comments</button>
        <button type="button" id={id} onClick={remove}>Remove</button>
        <button type="button">Edit</button>
      </div>
    </div>
    <div className="progress-section">
      <div className="circle">
        <div className="inner-circle" />
        <div className="inner-circle2" />
      </div>
      <p>
        <span>62%</span>
        <span>Completed</span>
      </p>
    </div>
    <div className="bookchapter">
      <span>CURRENT CHAPTER</span>
      <span>Chapter 3</span>
      <button type="button">UPDATE PROGRESS</button>
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
