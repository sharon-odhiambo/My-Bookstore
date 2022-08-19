import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import BookContainer from './BookContainer';
import Categories from './Categories';

const Nav = () => (
    <>
    <header>
    <h1>Bookstore CMS</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/Categories">Categories</Link>
    </nav>
  </header>
    <Routes>
      <Route path="/" element={<BookContainer />} />
      <Route path="/Categories" element={<Categories />} />
    </Routes></> 
);

export default Nav;
