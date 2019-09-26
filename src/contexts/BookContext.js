import React, { createContext, useReducer } from 'react';
import uuid from 'uuid';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, dispatch] = useReducer(bookReducer, []);

  // const addBook = (title, author) => {
  //   setBooks([...books, { title: title, author: author, id: uuid() }]);
  // };
  // const removeBook = id => {
  //   setBooks(books.filter(book => book.id !== id));
  // };
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
