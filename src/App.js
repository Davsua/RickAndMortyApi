import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import RandomLocation from './helps/RandomLocation';
import LocationInfo from './components/LocationInfo';
import ResidentsList from './components/ResidentsList';
import SearchBox from './components/SearchBox';
import Pagination from './components/Pagination';

function App() {
  
  const[location, setLocation] = useState({})
  const[currentPage, setCurrentPage] = useState(1)
  const[residentsPerPage] = useState(10);

    useEffect(() => {
      axios.get(`https://rickandmortyapi.com/api/location/${RandomLocation()}`)
        .then(res => {
          setLocation(res.data)
          console.log(res)
        })
        
    }, [])


    //Obtener current location
    const indexOfLastResidents = currentPage * residentsPerPage
    const indexOfFirstResidents = indexOfLastResidents - residentsPerPage 
    const currentLocation = location?.residents?.slice(indexOfFirstResidents, indexOfLastResidents)

    //cambiar la pagina
    const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="App">
      <header className="header">
      <h1 className='Title'>Rick and Morty wiki</h1>
      </header>
      <SearchBox setLocation={setLocation} />
      <LocationInfo location={location}/>
      <ResidentsList listResidents={currentLocation}/>
      <Pagination 
      residentsPerPage={residentsPerPage} 
      totalResidents={location?.residents?.length}
      paginate={paginate}/>
    </div>
  );
}

export default App;
