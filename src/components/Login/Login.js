import React from 'react';
import { Link } from 'react-router-dom';
import Usefirebase from '../../Hooks/Usefirebase';

const Login = () => {


    const fireBaseStore = Usefirebase()

    const { user, error, signInWithGoogle, signWithGitHub } = fireBaseStore;
    console.log("use firebase", fireBaseStore);
    return (
        <div>
            <h1>Login</h1>
            <button onClick={signInWithGoogle}>Google Sign In</button>
            <button onClick={signWithGitHub}>GitHub Sign In</button>
            <Link to='/register'>New User?</Link>
        </div>
    );
};

export default Login;