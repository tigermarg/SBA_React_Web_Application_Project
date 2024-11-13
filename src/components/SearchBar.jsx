export default function SearchBar({ handleSearch, search , onClick}) {

  return (
    <>
      <form className="searchBar" action="">
          <input className="searchBox" onChange={handleSearch} value={search} type="text" placeholder="Search for a book..."/>
          <button onClick={onClick}>Search</button>
      </form>
    </>
  )
}
