import React from 'react';

import './sign-in-and-sign-up.component.styles.scss'
import SignIn from '../../components/sign-in/sign-in.component.jsx'
import Signup from '../../components/sign-up/sign-up.component.jsx'

const SignInAndSignUpPage = () => (
    <div className = 'sign-in-and-sign-up'>
        <SignIn/>
        <Signup/>
    </div>
)
export default SignInAndSignUpPage;