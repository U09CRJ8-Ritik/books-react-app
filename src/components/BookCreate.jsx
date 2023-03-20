import React, { useContext, useState } from 'react'
import BooksContext from '../context/books';

const BookCreate = () => {

    const [title, setTitle] = useState('');

    const { createBook } = useContext(BooksContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle('');

    }

    return (
        <div className='book-create'>
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input className='input' type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
                <button className='button'>Create!</button>
            </form>
        </div>
    )
}

export default BookCreate
