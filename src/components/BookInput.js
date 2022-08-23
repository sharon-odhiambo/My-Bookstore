import React, { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const BookInput = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    dispatch(addBook(id, title, author));
    setTitle('');
    setAuthor('');
  };
  return (
    <div>
      <h2>Add a New Book</h2>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Book Title" onChange={onTitleChange} name="title" value={title} />
        <input type="text" placeholder="Book Author" onChange={onAuthorChange} name="author" value={author} />
        <button type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default BookInput;
