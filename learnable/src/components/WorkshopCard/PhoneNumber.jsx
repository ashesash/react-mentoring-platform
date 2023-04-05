// this currently doesn't do anything, until we have phone number/s added to the workshop data model
import './PhoneNumber.css';

const PhoneNumber = ({ number, type }) => (
    <div className="phoneNumber">
        <p>{type}: {number}</p>
    </div>
);

export default PhoneNumber;