import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class SalonCard extends Component {
    render() {
        return (
            <div className="row m-5 p-5 hover-light rounded" >
                <img src="http://img1.wsimg.com/isteam/ip/7cc97807-6f84-4b05-ad27-38666cd1a781/1e884539dedf53b8d2fe1b8d69a85f5d.jpg" height="130px" />
                <div className="p-2">
                    <div className="h2  " style={{textAlign:'left'}}>
                        {this.props.name}
                    </div>
                    <div>
                        <span>
                            {this.props.location}, {this.props.city?this.props.city:'Bangalore'} - 1.6 km
                        </span>
                    </div>
                    <div className="row">
                        <div className='btn-primary disabled p-1 rounded ml-4'>4.6</div>
                        <div className='mx-4'>{`1232 Ratings`}</div>
                        <div>{`Excellent`}</div>
                    </div>
                    <div className="row justify-content-end">
                        <Link to={`/salon/${this.props.id}`}>
                            <button className='btn-success p-1 rounded ml-4'>Book Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default SalonCard
