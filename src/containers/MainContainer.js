import React from 'react';
import FirstName from '../components/FirstName'
import LastName from '../components/LastName'
import ContactBox from './ContactBox'

const MainContainer = () => {
    return (
        <div className="main">
            <FirstName />
            <LastName />
            <ContactBox />
        </div>
    );
}

export default MainContainer;
