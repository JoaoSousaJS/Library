import { all } from 'redux-saga/effects';

import book from './book/saga';

export default function* rootSaga() {
  return yield all([book]);
}
