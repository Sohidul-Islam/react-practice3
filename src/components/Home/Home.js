import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Home = () => {
    const users = useAuth();
    const { user } = users;
    return (
        <div>
            <h1>{user.displayName}</h1>
            <h1>This is home page</h1>
        </div>
    );
};

export default Home;