import React, { useContext } from 'react'
import BooksContext from '../context/books';
import BookShow from './BookShow'

const BookList = ({ books, onDelete, onEdit }) => {

  const num = useContext(BooksContext);

  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
  });


  return (
    <div className='book-list'>
      {num}
      {renderedBooks}
    </div>
  )
}


export default BookList
