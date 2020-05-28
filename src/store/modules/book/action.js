export function createBookRequest(data) {
  return {
    type: '@book/CREATE_BOOK_REQUEST',
    payload: { data },
  };
}

export function createBookSuccess({ name, author, pages, read }) {
  return {
    type: '@book/CREATE_BOOK_SUCCESS',
    payload: { name, author, pages, read },
  };
}

export function createBookFailure() {
  return {
    type: '@book/CREATE_BOOK_FAILURE',
  };
}
