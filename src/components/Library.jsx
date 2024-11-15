import { useState } from "react";
import BookCard from "./BookCard";

export default function Library({ books, onBookClick }) {
    console.log(books)
    const [sortCriteria, setSortCriteria] = useState("title"); //Set state for sorting

    //Function to sort books based on criteria
    function sortBooks(criteria) {
        const sorted = [...books]; //Make copy of the books array to avoid mutating original
        switch (criteria) {
            case "title":
                return sorted.sort((a, b) => {
                    const titleA = a.volumeInfo?.title?.toLowerCase() || "";
                    const titleB = b.volumeInfo?.title?.toLowerCase() || "";
                    return titleA.localeCompare(titleB);
                });
            case "published":
                return sorted.sort((a, b) => {
                    const dateA = a.volumeInfo?.publishedDate || "";
                    const dateB = b.volumeInfo?.publishedDate || "";
                    return dateA.localeCompare(dateB);
                });
            default:
                return sorted;
        }
    }

    const sortedBooks = sortBooks(sortCriteria); //Apply the sorting function

    return (
        <div className="books-body">
            <div className="sortLinks">
                Sort by: {' '}
                <a href="#" onClick={() => setSortCriteria("title")}>Title</a>
                {' | '}
                <a href="#" onClick={() => setSortCriteria("published")}>Published Date</a>
            </div>
            <div className="book-library">
      {sortedBooks.map((book) => (
        <div key={book.id || book.volumeInfo.title} onClick={() => onBookClick(book.id)}>
          <BookCard
            image={book.volumeInfo?.imageLinks?.thumbnail || 'https://via.placeholder.com/150'}
            title={book.volumeInfo?.title || 'Untitled'}
            author={book.volumeInfo?.authors?.join(', ') || 'Unknown Author'}
            published={book.volumeInfo?.publishedDate || 'Unknown Date'}
          />
        </div>
      ))}
    </div>
        </div>
    );
}