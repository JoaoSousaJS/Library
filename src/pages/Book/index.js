import React, { useState } from 'react';

import * as Yup from 'yup';
import { Container } from './styles';
import { Input } from '../../hooks/input-hook';

const schema = Yup.object().shape({
  name: Yup.string().required('A book needs a name'),
  author: Yup.string().required("A book's author is necessary"),
  pages: Yup.number().required('The number of pages is required'),
});

function Book() {
  const { value: bookName, bind: bindBookName, reset: resetBookName } = Input(
    ''
  );
  const {
    value: authorName,
    bind: bindAuthorName,
    reset: resetAuthorName,
  } = Input('');

  const { value: page, bind: bindPage, reset: resetPage } = Input('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(bookName, authorName, page);
    resetAuthorName();
    resetBookName();
    resetPage();
  }

  return (
    <Container>
      <form schema={schema} onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          {...bindAuthorName}
        />
        <input
          type="text"
          id="author"
          name="author"
          placeholder="Author"
          {...bindBookName}
        />
        <input
          type="number"
          id="pages"
          name="pages"
          placeholder="Amount of pages"
          {...bindPage}
        />
        <h1>Have you already read?</h1>

        <br />
        <button type="submit">Add a book</button>
      </form>
    </Container>
  );
}

export default Book;
