const ADD_CATEGORY = 'bookstore-app/categories/ADD_CATEGORY';
const CATEGORY_STATUS = 'Under Construction';

export const addCategory = () => ({
  type: ADD_CATEGORY,
  payload: {
    text: CATEGORY_STATUS,
  },
});

const initialState = [];

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return action.payload.text;
    default:
      return state;
  }
};

export default categoryReducer;
