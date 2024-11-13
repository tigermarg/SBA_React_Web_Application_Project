import { useState } from 'react';
import SearchBar from "./SearchBar";


export default function Body() {

    const [books, setBooks] = useState([]) //State for books
    const [search, setSearch] = useState('') //State for search

  // Async function to fetch books based on the search term
  async function searchBook() {
    if (!search) return; //If empty search, return

    try{
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`);

      const data = await response.json();
      console.log(data.items)
      setBooks(data.items || [])

    } catch (err) {
      console.error(err); 
    }
  }
    
    //Function to update search state when input changes
    function handleSearch(e){
        setSearch(e.target.value)
    }

    //Function for submit event
    function handleSubmit(e){
        e.preventDefault();
        searchBook();
    }


    return (
        <>
            <SearchBar handleSearch={handleSearch} search={search} onSubmit={handleSubmit}/>
            <Library books={books} />
        </>
    )
}
  