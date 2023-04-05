// this currently doesn't do anything, until we have location added to the workshop data model
const Location = ({location}) => {
    return(
        <div className="location">
            <p>{location.street.number}, {location.street.name}</p>
            <p>{location.city}</p>
            <p>{location.state}</p>
            <p>{location.postcode}</p>
            <p>{location.country}</p>
        </div>
    );
};

export default Location;