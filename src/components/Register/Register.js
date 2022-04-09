import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>

            <form >
                <input type="text" placeholder='Enter name' />
                <br />

                <input type="email" placeholder='Enter Email' />
                <br />
                <input type="password" placeholder='Enter Password' />
                <br />
                <input type="submit" value='Register' />
            </form>
        </div>
    );
};

export default Register;