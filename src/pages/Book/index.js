import React from 'react';
import { useDispatch } from 'react-redux';

import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { Container } from './styles';

import { createBookRequest } from '../../store/modules/book/action';

const schema = Yup.object().shape({
  name: Yup.string().required('A book needs a name'),
  author: Yup.string().required("A book's author is necessary"),
  pages: Yup.number().required('The number of pages is required'),
  read: Yup.string().required(),
});

function Book() {
  const { register, handleSubmit } = useForm({ validationSchema: schema });

  const dispatch = useDispatch();

  function onHandleSubmit(data) {
    dispatch(createBookRequest(data));
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <input type="text" name="name" placeholder="Name" ref={register} />
        <input type="text" name="author" placeholder="Author" ref={register} />
        <input
          type="number"
          name="pages"
          placeholder="Amount of pages"
          ref={register}
        />
        <h1>Have you already read?</h1>
        <select name="read" ref={register}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <br />
        <button type="submit">Add a book</button>
      </form>
    </Container>
  );
}

export default Book;
