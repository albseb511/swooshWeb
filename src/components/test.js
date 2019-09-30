import React, { Component } from 'react'

export class Test extends Component {
    render() {
        return (
            <div>
                {this.props.match.params.id}
            </div>
        )
    }
}

export default Test
