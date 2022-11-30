import React from 'react';

const MyProfile = (props) => {
    const name = localStorage.getItem('auth')
    return (
        <h1>
            {name} is BASTAAARD!
        </h1>
    );
};

export default MyProfile;