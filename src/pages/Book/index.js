import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import produce from 'immer';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import { Container, BookTable, BookForm } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('A book needs a name'),
  author: Yup.string().required("A book's author is necessary"),
  pages: Yup.number().required('The number of pages is required'),
  read: Yup.string().required(),
});

function Book() {
  const [books, setBooks] = useState([]);

  const { register, handleSubmit } = useForm({
    validationSchema: schema,
  });

  function onHandleSubmit(data) {
    const { name, author, pages, read } = data;

    const booksExsits = books.find((book) => book.bookName === name);

    if (booksExsits) {
      toast.error(`The book ${name} is already registered`);
    } else if (read === 'yes') {
      setBooks([
        ...books,
        {
          bookName: name,
          authorName: author,
          bookPages: pages,
          readStatus: true,
        },
      ]);
    } else {
      setBooks([
        ...books,
        {
          bookName: name,
          authorName: author,
          bookPages: pages,
          readStatus: false,
        },
      ]);
    }
  }

  useEffect(() => {
    console.log(books);
  }, [books]);

  function onHandleRemove(b) {
    const { bookName } = b;
    setBooks(books.filter((book) => book.bookName !== bookName));
  }

  function onHandleRead(b) {
    const { bookName, readStatus } = b;

    const booksExsits = books.find((book) => book.bookName === bookName);

    if (readStatus === false) {
      setBooks(
        produce(books, (draftState) => {
          draftState[books.indexOf(booksExsits)].readStatus = true;
        })
      );
    } else {
      setBooks(
        produce(books, (draftState) => {
          draftState[books.indexOf(booksExsits)].readStatus = false;
        })
      );
    }
  }

  return (
    <Container>
      <BookForm onSubmit={handleSubmit(onHandleSubmit)}>
        <input type="text" name="name" placeholder="Name" ref={register} />
        <input type="text" name="author" placeholder="Author" ref={register} />
        <input
          type="number"
          name="pages"
          placeholder="Amount of pages"
          ref={register}
        />
        <br />
        <strong>Have you already read?</strong>
        <select name="read" ref={register}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <br />
        <button type="submit">Add a book</button>
      </BookForm>

      <BookTable>
        <thead>
          <tr>
            <th>Book</th>
            <th>Author</th>
            <th>Pages</th>
            <th>Read status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((b) => (
            <tr key={b.bookName}>
              <td>{b.bookName}</td>
              <td>{b.authorName}</td>
              <td>{b.bookPages}</td>
              <td>
                {b.readStatus === true ? (
                  <MdFavorite size={30} />
                ) : (
                  <MdFavoriteBorder size={30} />
                )}
              </td>

              <td>
                <button type="button" onClick={() => onHandleRead(b)}>
                  read
                </button>
                <button type="button" onClick={() => onHandleRemove(b)}>
                  remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </BookTable>
    </Container>
  );
}

export default Book;
