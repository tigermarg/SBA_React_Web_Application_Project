import { useState } from 'react';
import SearchBar from "./SearchBar";

export default function Body() {

    const [books, setBooks] = useState([]) //State for books
    const [search, setSearch] = useState('') //State for search

    //Function to update search state when input changes
    function handleSearch(e){
        setSearch(e.target.value)
    }

    return (
        <>
            <SearchBar handleSearch={handleSearch} search={search} />
        </>
    )
}
  