import React from 'react';
import resultsNotFound from '../../../assets/icons/errorHandlingImages/resultsNotFound.png';
const NotFound = () => {
    return (
        <div>
            <center>
                <img src={resultsNotFound} alt='404 Error - Page Not Found' />
                <h3>404 Error - Page Not Found</h3>
            </center>
        </div>
    );
};

export default NotFound;
