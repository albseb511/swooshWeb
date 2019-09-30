import React, { Component } from 'react'

const ItemRow = () => {return(
                        <div className="row justify-content-around border-bottom"> 
                            <div>Item Name</div>
                            <div>Item Price</div>
                            <input type="checkbox" class="p-5 m-2 rounded"></input>
                        </div>)
                        }


const Select = (props) => {
    return(<div className={`${props.state?'btn-primary':'btn-warning'} py-2 px-4 m-2 rounded`}
                onClick={props.func}>
                   {props.label}
                </div>)
}

export class SalonProfile extends Component {
    constructor(props){
        super(props)
        this.state={
            data: [],
            loaded: false,
            isMen: true
        }
    }

    genderSel = () => {
        this.setState({
            isMen: !this.state.isMen
        })
    }

    componentDidMount(){
        this.setState({
            data: this.props.data.filter((a,i)=>a.id==this.props.match.params.id),
            loaded: true
        })
    }
    render() {
        console.log(this.state.data)
        console.log('salon loaded',this.props)
            if(this.state.loaded===true)
                return (<div className="row d-flex details p-3">
                        <div className="text-left">
                            <img src="http://img1.wsimg.com/isteam/ip/7cc97807-6f84-4b05-ad27-38666cd1a781/1e884539dedf53b8d2fe1b8d69a85f5d.jpg" height="500px" />
                            <div>{this.state.data[0].name}</div>
                            <div className="row">
                                <div className='btn-primary disabled p-1 rounded ml-4'>4.6</div>
                                <div className='mx-4'>{`1232 Ratings`}</div>
                                <div>{`Excellent`}</div>
                            </div>
                            <div>
                                Indiranagar, Bangalore
                            </div>
                        </div>
                        <div className="border">
                            Services
                            <div className="row justify-content-center">
                                <Select label="MEN" state={this.state.isMen} func={()=>this.genderSel()}/>
                                <Select label="WOMEN" state={!this.state.isMen} func={()=>this.genderSel()}/>
                            </div>
                            <ItemRow/>
                            <ItemRow/>
                            <ItemRow/>
                            <ItemRow/>
                            <ItemRow/>
                            <ItemRow/>
                            <ItemRow/>
                            <ItemRow/>  
                        </div>
                    </div>)
            else
                return(
                            <div>Loading...</div>
                        )}
        
    
}

export default SalonProfile
