import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import HomePage from '../components/HomePage'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import SalonProfile from '../components/SalonProfile'
import Login from '../components/login/Login'




export default class Home extends Component {
    constructor(props){
        super(props)
    }
    render() {
        console.log(this.props)
        return (
            <div>
                {/* Navbar */}
                <Navbar/>
                
                {/* Routes */}
                
                <Route path='/' exact render={(props)=><HomePage {...props} data={obj}/>}/>
                <Route path='/shop' render={()=><h1>Shop</h1>}/>
                <Route path='/about' render={()=><h1>About</h1>}/>
                <Route path='/salon/:id' render={(props)=><SalonProfile {...props} data={obj} />} />
                <Route path='/login' render={()=><Login />}/>
                <Route path='/dashboard' render={()=><h1>dashboard</h1>}/>
                <Route path='/admin' render={()=><h1>Admin</h1>}/>

                {/* Footer */}
                {/* <Footer /> */}
            </div>
        )
    }
}

const obj = [{
    uri: '',
    name: 'Salon 1',
    location: 'Indiranagar',
    dist:1,
    rating: '4.2',
    ratingNo: '2000',
    facilities:[],
    id:'1'
    },
    {
    uri: '',
    name: 'Salon 2',
    location: 'Indiranagar',
    dist:1,
    rating: '4.2',
    ratingNo: '2000',
    facilities:[],
    id:'2'
    },
    {
    uri: '',
    name: 'Salon 3',
    location: 'Indiranagar',
    dist:1,
    rating: '4.2',
    ratingNo: '2000',
    facilities:[],
    id:'3'
    },
    {
    uri: '',
    name: 'Salon 4',
    location: 'Indiranagar',
    dist:1,
    rating: '4.2',
    ratingNo: '2000',
    facilities:[],
    id:'4'
    },
    {
    uri: '',
    name: 'Salon 5',
    location: 'Indiranagar',
    dist:1,
    rating: '4.2',
    ratingNo: '2000',
    facilities:[],
    id:'5'
    },]