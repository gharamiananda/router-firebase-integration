import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {

    const { signInWithGoogle } = useFirebase({});
    return (
        <div>

            <h2>Please Login</h2>
            <div style={{ margin: "20px" }}>
                <button onClick={signInWithGoogle}>Google Sign In</button>
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