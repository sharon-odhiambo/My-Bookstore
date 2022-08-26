/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const BookInput = () => {
  const [booktitle, setTitle] = useState('');
  const [bookauthor, setAuthor] = useState('');
  const [bookcategory, setCategory] = useState('');
  const dispatch = useDispatch();

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const categoryPick = ['Action', 'Fiction', 'Crime', 'Thriller', 'Economy', 'Gothic'];
  const onCategoryPick = (e) => {
    setCategory(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const item_id = uuidv4();
    const book = {
      item_id, title: booktitle, author: bookauthor, category: bookcategory,
    };
    dispatch(addBook(book));
    setTitle('');
    setAuthor('');
    setCategory('Category');
  };
  return (
    <div>
      <h2>Add a New Book</h2>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Book Title" onChange={onTitleChange} name="title" value={booktitle} />
        <input type="text" placeholder="Book Author" onChange={onAuthorChange} name="author" value={bookauthor} />
        <select name="Category" onClick={onCategoryPick}>
          {categoryPick.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <button type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default BookInput;
