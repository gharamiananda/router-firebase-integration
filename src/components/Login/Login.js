import { getAuth } from 'firebase/auth';
import React from 'react';
// import useFirebase from '../../hooks/useFirebase';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from "../../firebase.init";


const auth = getAuth(app)
const Login = () => {


    const [signInWithGoogle, user] = useSignInWithGoogle(auth)

    // const { signInWithGoogle } = useFirebase({});
    return (
        <div>

            <h2>Please Login</h2>
            <div style={{ margin: "20px" }}>
                <button onClick={() => signInWithGoogle()}>Google Sign In</button>
            </div>


            <input type="email" placeholder='Enter Email' />
            <br />
            <input type="password" placeholder='Enter Password' />
            <br />
            <input type="submit" value='Login' />
        </div>
    );
};

export default Login;