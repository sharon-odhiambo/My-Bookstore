import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { IoIosPerson } from 'react-icons/io';
import BookContainer from './BookContainer';
import Categories from './Categories';

const Nav = () => (
  <>
    <header>
      <h1>Bookstore CMS</h1>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/Categories">CATEGORIES</Link>
      </nav>
      <IoIosPerson className="icon" />
    </header>
    <Routes>
      <Route path="/" element={<BookContainer />} />
      <Route path="/Categories" element={<Categories />} />
    </Routes>
  </>
);

export default Nav;
