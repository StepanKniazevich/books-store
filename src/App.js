import './App.scss';
import { useEffect, useState } from 'react'
import { fetchData } from './api/Fetch';
import Header from './Components/Header/Header'

function App() {

  const [books, setNewBooks] = useState()

  useEffect(() => {
    fetchData().then(res => setNewBooks(res))
  }, [])

  console.log(books);




  return (
    <div className="wrapper">
      <Header />
    </div>
  );
}

export default App;
