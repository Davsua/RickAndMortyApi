
const LocationInfo = ({location}) => {
    
    
    return (
        <div className='Location-container'>
            <div className='Location-name'>
            <p><b>{location?.name}</b></p>
            </div>
            <div className="Location-info">
            <p><b>Type: </b>{location.type}</p>
            <p><b>Dimension: </b>{location?.dimension}</p>
            <p><b>Population: </b>{location?.residents?.length}</p>
            </div>
        </div>
    );
};

export default LocationInfo;