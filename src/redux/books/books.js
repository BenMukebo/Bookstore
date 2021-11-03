import { v4 as uuidv4 } from 'uuid';

// books.js

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [
  {
    id: uuidv4(),
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    genre: 'Action',
    completed: 64,
  },
  {
    id: uuidv4(),
    title: 'Dune',
    author: 'Frank Herbert',
    genre: 'Science Fiction',
    completed: 8,
  },
  {
    id: uuidv4(),
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    genre: 'Economy',
    completed: 0,
  },
];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      /*
          return a new state object in which the books array will contain a new book object, passed by action.payload.
          Remember -  you MUSN'T mutate the state. You have to return a new state object - i.e.:
          return [ ...state, action.payload];
          */
    case REMOVE_BOOK:
      /*
          use ES6 filter() method to create a new array, which will not contain the book you want to remove from the store (filter by the id key - i.e.:
          return state.filter(book => book.id !== id);
          */

    default:
      return state;
  }
};

export default reducer;
