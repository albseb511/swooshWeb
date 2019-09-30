import React, { Component } from 'react'
import styles from '../styles/navbar.module.css'
import {Link} from 'react-router-dom'

const searchBar = {
    
}

export class Navbar extends Component {
    render() {
        return (
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">Swoosh</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item active mx-3">
                            {/* Link */}
                            <Link to='/' className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item  mx-3">
                            {/* Link */}
                            <Link to='/shop' className="nav-link " href="#">Shop</Link>
                        </li>
                        <li className="nav-item  mx-3">
                            {/* Link */}
                            <Link to='/about' className="nav-link " href="#">Why us</Link>
                        </li>
                        </ul>
                        {/* Link */}
                        <Link to='/login' className="btn btn-outline-success my-2 my-sm-0 mr-5" type="submit">Login</Link>
                        {/* <Link to='/dashboard' className="btn btn-outline-success my-2 my-sm-0 mr-5" type="submit">Dashbaord</Link> */}
                        {/* <Link to='/admin' className="btn btn-outline-success my-2 my-sm-0 mr-5" type="submit">Admin</Link> */}
                    </div>
                </nav>
        )
    }
}

export default Navbar
