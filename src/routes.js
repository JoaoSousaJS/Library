import React from 'react';
import { Route } from 'react-router-dom';
import Book from './pages/Book';

export default function Routes() {
  return <Route path="/" exact component={Book} />;
}
