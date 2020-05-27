import produce from 'immer';

const INITIAL_STATE = {
  book: [],
};

export default function book(state = [INITIAL_STATE], action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@book/CREATE_BOOK_REQUEST': {
        break;
      }
      case '@book/CREATE_BOOK_SUCCESS': {
        draft.book.push(action.payload.book);
        break;
      }
      default:
    }
  });
}
