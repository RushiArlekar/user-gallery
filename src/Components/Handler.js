import React, { Component } from 'react'
import Gallery from './Gallery'

class Handler extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        this.eventHandler=Handler.eventHandler.bind(this)
    }
    

    eventHandler(id,name){
        // return(
        //   <div className="App-Gallery">
        //     <Gallery id={id} name={name}/>
        //   </div>
        // )
        alert('success')
      }

    render() {
        return (
            <div>
                <this.eventHandler/>
            </div>
        )
    }
}

export default Handler