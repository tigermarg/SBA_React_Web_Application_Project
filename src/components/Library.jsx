import BookCard from './BookCard';

export default function Library({ books }) {

    return (
        <>
            {books.map((book, index) => (
                <BookCard key={index}
                        image={book.volumeInfo?.imageLinks?.thumbnail || {}}
                        title={book.volumeInfo?.title || 'Untitled'}
                        author={book.volumeInfo?.authors?.join(', ') || 'Unknown Author'}
                        published={book.volumeInfo?.publishedDate || 'Unknown Date'}
                    />
            ))}
        </>
    );
}