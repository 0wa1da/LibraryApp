import React from 'react'
import './BookView.css'
import Book from '../bookcard/Book'
export default function BookView({booklist}) {

    return (
        <div className="book-container">
            {
                booklist
                .map(book => <Book
                     key={book.id}
                      title={book.title}
                       src={book.src} />)
            }
        </div>
    )
}

