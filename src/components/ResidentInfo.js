import axios from 'axios';
import React, { useEffect, useState } from 'react';


const ResidentInfo = ({resident}) => { //prop que me trae info (url) de los residentes
    
    const[residentInfo, setResidentInfo] = useState()
    
    useEffect(() => {
        axios.get(resident)
            .then(res => setResidentInfo(res.data))
    }, [resident]);

    console.log(residentInfo);

    return (
        <div  className='resident-container' key={resident.id}>
            <h5>{residentInfo?.name}</h5>
            <img src={residentInfo?.image} alt="" />
            <p>{residentInfo?.status}</p>
            <p><b>Origin: </b>{residentInfo?.origin?.name}</p>
            <p><b>Episodes: </b>{residentInfo?.episode.length}</p>

        </div>
    );
};

export default ResidentInfo;