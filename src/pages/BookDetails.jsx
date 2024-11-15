import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function BookDetails() {
  const { bookId } = useParams(); //get bookId from URL param
  const [bookDetail, setBookDetail] = useState(null); //state for storing book details

  useEffect(() => {
    if (!bookId) return; //If no bookId, return

    //function to fetch book details
    const fetchBookDetail = async () => {
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`);

        const data = await response.json();

        setBookDetail(data.volumeInfo);

      } catch (err) {
        console.error(err);
      }
    };

    fetchBookDetail();
  }, [bookId]);

  if (!bookDetail) return <p>Loading...</p>;

  return (
    <div>
      <h1>{bookDetail.title}</h1>
      <p>{bookDetail.authors?.join(', ')}</p>
      <p>{bookDetail.publishedDate}</p>
      <img src={bookDetail.imageLinks?.thumbnail} alt={bookDetail.title}/>
      <p>{bookDetail.description || 'No description available'}</p>
    </div>
  );
}