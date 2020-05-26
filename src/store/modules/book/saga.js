import { takeLatest, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { createBookSuccess, createBookFailure } from './action';

export function* createBook({ payload }) {
  try {
    const { name, author, pages, read } = payload.data;

    const book = {
      name,
      author,
      pages,
      read,
    };

    toast.success('The book has been created');
    yield put(createBookSuccess(book));
  } catch (err) {
    toast.error('An error has ocurred');
    yield put(createBookFailure);
  }
}

export default all([takeLatest('@book/CREATE_BOOK_REQUEST', createBook)]);
