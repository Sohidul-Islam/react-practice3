import React from 'react';
import { Link } from 'react-router-dom';
import Usefirebase from '../../Hooks/Usefirebase';

const Login = () => {


    const fireBaseStore = Usefirebase()

    const { user, error, signInWithGoogle, signOutFromGoogleAuth } = fireBaseStore;
    console.log("use firebase", fireBaseStore);
    return (
        <div>
            <h1>Login</h1>
            <button onClick={signInWithGoogle}>Google Sign In</button>
            {user?.email && <button onClick={signOutFromGoogleAuth}>Logout</button>}
            <Link to='/register'>New User?</Link>
        </div>
    );
};

export default Login;