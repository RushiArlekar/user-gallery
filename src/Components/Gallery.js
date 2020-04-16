import React, { Component } from 'react'
import './Gallery.css'

class Gallery extends Component {

    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    
    render(){
        const[id,data,ad]=[this.props.userDetails.clickedId,this.props.userDetails.data,this.props.userDetails.ad]
        if(id === ''){
            return(
                <div/>
            )
        }
        else{

            return (
                <div>
                    <img src={data.avatar} className='User-Image' alt='profile'/>
                    <div>
                        {`Name: ${data.first_name} ${data.last_name}`}
                    </div>
                    <div>
                        {`Email: ${data.email}`}
                    </div>
                    <div>
                        {`Commpany: ${ad.company}`}
                    </div>
                    <div>
                        {`Company URL: ${ad.url}`}
                    </div>
                    <div>
                        {`MOre Info: ${ad.text}`}
                    </div>
                </div>
            )
        }
    }
}

export default Gallery