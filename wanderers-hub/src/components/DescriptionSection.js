import React from 'react';
import '../css/DescriptionSection.css';
import destinationImg from '../assests/images/destination-img.jpg';
import descImg from '../assests/images/desc-img.jpg'; // Adjust the path as necessary

function DescriptionSection() {
    return (
        <div className="description-section" style={{ backgroundImage: `url(${descImg})` }}>
            <div className="description-content">
                <h3>Description</h3>
                <h3>Travel booking System</h3>
                {/* <textarea
                    className="description-textarea"
                    placeholder="Enter description here..."
                /> */}
            </div>
        </div>
    );
}

export default DescriptionSection;
