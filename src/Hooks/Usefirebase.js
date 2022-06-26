import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import firebaseInitialize from '../Firebase/firebase.init';

firebaseInitialize();
const auth = getAuth();
const Usefirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const googleProvider = new GoogleAuthProvider();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;

                console.log("inside the useEffect: ", user.email);
                setUser(user);
                // ...
            } else {
                // User is signed out
                // ...
            }
        });
    }, [])
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(user);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage);
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
    const signOutFromGoogleAuth = () => {
        signOut(auth).then(() => {
            setUser({});
            console.log("signed out ths user ", user);
        }).catch((error) => {
            // An error happened.
        });
    }
    return {
        user,
        error,
        signInWithGoogle,
        signOutFromGoogleAuth
    }

};

export default Usefirebase;
