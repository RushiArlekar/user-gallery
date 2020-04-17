import React, { Component } from 'react'
import './Gallery.css'

class Gallery extends Component {

    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    
    render(){
        console.log(this.props)
        if(this.props.clickedId === ''){
            return(
                <div/>
            )
        }
        else{

            return (
                <div>
                    <img src={this.props.data.avatar} className='User-Image' alt='profile'/>
                    <div>
                        {`Name: ${this.props.data.first_name} ${this.props.data.last_name}`}
                    </div>
                    <div>
                        {`Email: ${this.props.data.email}`}
                    </div>
                    <div>
                        {`Commpany: ${this.props.ad.company}`}
                    </div>
                    <div>
                        {`Company URL: ${this.props.ad.url}`}
                    </div>
                    <div>
                        {`MOre Info: ${this.props.ad.text}`}
                    </div>
                </div>
            )
        }
    }
}

export default Gallery