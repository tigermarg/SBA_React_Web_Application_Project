export default function SearchBar({ handleChange, search , onClick}) {

  return (
    <>
      <form className="searchBar" action="">
          <input className="searchBox" onChange={handleChange} value={search} type="text" placeholder="Search for a book..."/>
          <button onClick={onClick}>Search</button>
      </form>
    </>
  )
}
