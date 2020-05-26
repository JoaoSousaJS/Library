import produce from 'immer';

const INITIAL_STATE = {
  book: null,
};

export default function book(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@book/CREATE_BOOK_REQUEST': {
        draft.book = action.payload.data;
        break;
      }
      case '@book/CREATE_BOOK_SUCCESS': {
        draft.book = action.payload.book;
        break;
      }
      default:
    }
  });
}
