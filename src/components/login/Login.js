import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

const Dashboard = () => {
   return( <div>
        Dashboard
    </div>)
}

const LoginForm = (props) => {
    return(<div className="m-5">
                For {props.label} <br />
                <button name={props.name} className="m-2 p-2" onClick={props.func} >Login</button>
            </div>)
}

export class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            users:[{email:'john@123.com',
                    password:'123456',
                    type:'user',
                    id:'001'},
                    {email:'mark@123.com',
                    password:'123456',
                    type:'user',
                    id:'002'},
                    {email:'sachin@123.com',
                    password:'123456',
                    type:'user',
                    id:'003'},
                    {email:'aman@123.com',
                    password:'123456',
                    type:'user',
                    id:'004'},
                    {email:'tanveer@123.com',
                    password:'123456',
                    type:'user',
                    id:'005'}],
            salonUsers:[{email:'admin@bounce.com',
                    password:'123456',
                    type:'admin',
                    id:'001'},
                    {email:'admin@hair.com',
                    password:'123456',
                    type:'admin',
                    id:'002'},
                    {email:'admin@bodycraft.com',
                    password:'123456',
                    type:'admin',
                    id:'003'},
                    {email:'admin@lea.com',
                    password:'123456',
                    type:'admin',
                    id:'004'},
                    {email:'admin@lakme.com',
                    password:'123456',
                    type:'admin',
                    id:'005'}],
            adminUsers:[{email:'admin@swoosh.com',
                    password:'123456',
                    type:'super',
                    id:'001'}],
            isAuthSalon:false,
            isAuthAdmin:false,
            isAuthUser:false
                    
        }
    }
    isAuth = (e) => {
        this.setState({
            [e.target.name]: !this.state.isAuth
        })
    }
    render() {
        return (
            <div>
                {this.state.isAuthSalon?
                <Redirect to='/dashboard' />:
                <LoginForm name="isAuthSalon" label="Salon Dashboard" func={(e)=>this.isAuth(e)}/>}

                {this.state.isAuthAdmin?
                <Redirect to='/admin' />:
                <LoginForm name="isAuthAdmin" label="Admin Dashboard"  func={(e)=>this.isAuth(e)}/>}

                {this.state.isAuthUser?
                <Redirect to='/user' />:
                <LoginForm name="isAuthUser" label="User"  func={(e)=>this.isAuth(e)}/>}
            </div>
        )
    }
}

export default Login
