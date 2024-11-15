import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import BookDetails from './pages/BookDetails';

function App() {

  return (
    <>
      <Header />
      <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/details/:bookId" element={<BookDetails />} />
      </Routes>
    </>
  )
}

export default App;

