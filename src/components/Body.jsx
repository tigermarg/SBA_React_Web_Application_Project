import { useState, useEffect } from 'react';
import SearchBar from "./SearchBar";
import Library from './Library';

export default function Body() {

    const [books, setBooks] = useState([]) //State for books
    const [search, setSearch] = useState('') //State for search
    const [triggerSearch, setTriggerSearch] = useState(false) //Set state for manual search

  // Async function to fetch books based on the search term
  async function searchBook() {
    if (!search) return; //If empty search, return

    try{
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`);

      const data = await response.json();

      setBooks(data.items || [])

    } catch (err) {
      console.error(err); 
    }
  }

    // useEffect to trigger searchBook when search term changes
    useEffect(() => {
      if (search || triggerSearch) {
          searchBook();
          setTriggerSearch(false); // Reset trigger after search
      } else {
          setBooks([]); // Clear books if search is empty
      }
    }, [search, triggerSearch]); // Dependency on search and triggerSearch
    
    //Function to update search state when input changes
    function handleChange(e){
        setSearch(e.target.value)
    }

    //Function for click event
    function handleClick(e){
        e.preventDefault();
        setTriggerSearch(true);
    }

    return (
        <>
            <SearchBar handleChange={handleChange} search={search} onClick={handleClick} />
            <Library books={books} />
        </>        
    )
  }
