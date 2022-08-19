import React from 'react';

const BookInput = () => {
  return (
    <div>
    <h2>Add a New Book</h2>
    <form>
    <input type="text" placeholder="Book Title" name="title" />
    <input type="text" placeholder="Book Title" name="title" />
    <button type="submit">
      Add Book
    </button>
  </form>
  </div>
  )
};

export default BookInput;

