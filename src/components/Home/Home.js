import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const { user } = useFirebase();

    return (
        <div>
            home
            <p>Current Usewr{user ? user.displayName : "nobody"}</p>
        </div>
    );
};

export default Home;