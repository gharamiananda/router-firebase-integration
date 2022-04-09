import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../firebase.init";





const auth = getAuth(app)
const provider = new GoogleAuthProvider();

const useFirebase = () => {


    const [user, setUser] = useState({});

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
            .then(error => {

            });






    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {

            })
    }


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        });
    }, [])

    return { user, signInWithGoogle, handleSignOut }

}

export default useFirebase;