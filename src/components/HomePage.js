import React, { Component } from 'react'
import SalonCard from '../components/SalonCard'


export default class HomePage extends Component {
    constructor(props){
        super(props)
        this.state = {
            salonInfo:[]
        }
    }
    render() {
        console.log(this.props.data)
        return (
            <div id="hpage-f-cont" className="container-fluid d-flex wrap">
                <div className='row wrap p-5'>
                    {this.props.data.map((item,index)=><SalonCard key={index} {...item}/>)}
                </div>
            </div>
           )
    }
}
