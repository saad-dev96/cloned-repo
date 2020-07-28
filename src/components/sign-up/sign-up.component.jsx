import React from 'react'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'
import './sign-up.component.styles.scss'

class Signup extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            displayName : '',
            email : '' ,
            password: '',
            confirmPassword : ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} =  this.state;
        if (password !== confirmPassword)
        {
           alert('passwords dont match!');
        }
        
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            createUserProfileDocument(user, {displayName});
            this.setState({
            displayName : '',
            email : '' ,
            password: '',
            confirmPassword : ''
            })
        }
        catch (error)
        {
            console.log('The following error occured', error.message);
        }
    }
    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]:value}); //email pe email daal dey, password pe password.   
    }

    render()
    {   
        const {displayName, email, password, confirmPassword} =  this.state;
        return (
            <div className = 'sign-up'>
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className= 'sign-up-form'  onSubmit= {this.handleSubmit}>
                    <FormInput name= 'displayName' label =' Display Name' type = 'text'  handleChange={this.handleChange} value = {displayName} required />
                    <FormInput name= 'email' label='email' handleChange={this.handleChange} type = 'email' value = {email} required />
                    <FormInput name= 'password' label='password' handleChange={this.handleChange} type = 'password' value = {password} required />
                    <FormInput name= 'confirmPassword' label='confirmPassword' handleChange={this.handleChange} type = 'password' value = {confirmPassword} required />
                    <div className='buttons'>
                        <CustomButton type = 'submit'> SIGN-UP </CustomButton> 
                    </div>
                </form>
            </div>
        )
    }
}
export default Signup;