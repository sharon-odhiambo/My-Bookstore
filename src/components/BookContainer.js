import React from 'react';
import BookInput from './BookInput';
import Booklist from './Booklist';

const BookContainer = () => {
  const books = [{
    title: 'Fiesty Fiery',
    author: 'Sharon',
  }];

  return (
    <>
      <Booklist books={books} />
      <BookInput />
    </>
  );
};

export default BookContainer;
