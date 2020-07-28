import React from 'react'
import './sign-in.component.styles.scss'
import FormInput from '../form-input/form-input.component.jsx'
import CustomButton from '../custom-button/custom-button.component'

class SignIn extends React.Component
{
    constructor(props){
        super (props)
        this.state = {
            email: '',
            password : ''

        }
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: '' });
    }
    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]:value}); //email pe email daal dey, password pe password.
        
    }
    render()
    {
        return(
            <div className = 'sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit= {this.handleSubmit}>
                    <FormInput name= 'email' label='email' handleChange={this.handleChange} type = 'email' value = {this.state.email} required />
                    <FormInput name= 'password' label='password' handleChange={this.handleChange} type = 'password' value = {this.state.password} required />
                    <CustomButton type = 'submit' value ='Submit Form'> SIGN-IN</CustomButton> 
                </form>
            </div>

        );
    }
}
export default SignIn;