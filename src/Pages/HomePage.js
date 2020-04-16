import React, { Component } from 'react'
import Gallery from '../Components/Gallery'
import UserList from './UserList'

class HomePage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            data:'',
            ad:'',
            clickedId:''
        }
        this.EventHandler=this.EventHandler.bind(this)
    }

    EventHandler = async(userData,key) => {

        try{
            let response = await fetch('https://reqres.in/api/users/'+key);
            let json = await response.json();
            //console.log(json)
            this.setState({
                data:json.data,
                ads:json.ad,
                clickedId:key
            })
            //console.log(this.state)
        }
        catch(err){
            console.log(err)
        }
    }
    
    render() {
        return (
            <div>
               <div className="App-UserList">
                <UserList clickHandler={this.EventHandler}/>
                </div>
                <div className="App-Gallery">
                <Gallery userDetails={this.state}/>
                </div> 
            </div>
        )
    }
}

export default HomePage
