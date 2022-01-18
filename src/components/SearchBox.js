import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const SearchBox = ({setLocation}) => {
    
    const[locationList, setLocationlist] = useState([])
    
    const search = id => {
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
        .then(res => setLocation(res.data))
    }

    const searchDimension = (search) => {
        console.log(search);
        axios.get(`https://rickandmortyapi.com/api/location/?name=${search}`)
            .then(res => setLocationlist(res.data.results))
    }

    const selectLocation = location =>{
        search(location.id); //me lleva a la location seleccionada
        setLocationlist([]); // cada que hago uso del onclick, me genera la lista vacia
    }

    return (
        
       <div className='search-container'>
        <div className='input-container'>
            
            <div className='input-search'>
            <input type="text" placeholder='Type to search location' 
            onChange={e => searchDimension(e.target.value)}/>
            </div>
            <div className='search-button'>
            <button onClick={search}>Search</button>
            </div>
        </div>    
            <ul className='autocom-box'>
            {
                locationList.map((location) => 
                    
                        <li  key={location.id} onClick={() => selectLocation(location)}>{location.name}</li>
                    
                )
            }
            </ul>
            
        </div>

    );
};

export default SearchBox;