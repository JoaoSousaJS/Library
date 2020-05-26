export function createBookRequest(data) {
  return {
    type: '@book/CREATE_BOOK_REQUEST',
    payload: { data },
  };
}

export function createBookSuccess(book) {
  return {
    type: '@book/CREATE_BOOK_SUCCESS',
    payload: { book },
  };
}

export function createBookFailure() {
  return {
    type: '@book/CREATE_BOOK_FAILURE',
  };
}
