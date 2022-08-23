import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { addCategory } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(addCategory());
  };
  return (
    <div className="cat">
      <p>{categories}</p>
      <button type="button" onClick={onClickHandler}>Check Status</button>
    </div>
  );
};

export default Categories;
