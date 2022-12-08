import React from 'react';

const MyProfile = (props) => {
    const name = localStorage.getItem('auth')
    return (
        <h1>
            You know nothing, {name}
        </h1>
    );
};

export default MyProfile;