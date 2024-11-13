import BookCard from "./BookCard";

export default function Library({ books }){
    return(
        <>
        {books.map((book, index) => {
            return <BookCard key={index}
                        image={book.volumeInfo?.imageLinks?.thumbnail} 
                        title={book.volumeInfo?.title}
                        author={book.volumeInfo?.authors?.join(', ')}
                        published={book.volumeInfo?.publishedDate}
                    />
                })
            }
        </>
    )
}