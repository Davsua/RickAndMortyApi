import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentsList = ({listResidents}) => {
    return (
        <div className='resident-list'>
            {
                listResidents?.map(resident =>
                    
                    <ResidentInfo key={resident.id} resident={resident} className="resident-card"/> //realizo map de la info que traigo desde residentinfo y le envio la prop resident

                    )
            }
        </div>
    );
};

export default ResidentsList;