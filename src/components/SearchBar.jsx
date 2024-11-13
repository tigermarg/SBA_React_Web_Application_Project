export default function SearchBar({ handleSearch, search }) {

    return (
      <>
        <form action="">
            <input onChange={handleSearch} value={search} type="text" placeholder="Search for a book..."/>
            <button type="submit">Search</button>
        </form>
      </>
    )
  }
  