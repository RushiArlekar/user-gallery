import React, { Component } from 'react'
import Gallery from '../Components/Gallery'
import UserList from '../Components/UserList'

class HomePage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            details:[],
            data:'',
            ad:'',
            clickedId:''
        }
        this.EventHandler=this.EventHandler.bind(this)
    }

    componentDidMount(){
        this.GetNames();
    }

    EventHandler = async(key) => {

        try{
            let response = await fetch('https://reqres.in/api/users/'+key);
            let json = await response.json();
            this.setState({
                data:json.data,
                ad:json.ad,
                clickedId:key
            })
        }
        catch(err){
            console.log(err)
        }
    }

    GetNames = async() => {
        try{
            let response = await fetch('https://reqres.in/api/users');
            let json = await response.json();
            this.setState({
                details:json.data
            })
        }
        catch(err){
            console.log(err)
        }
    }
    
    render() {
        const{details,data,ad,clickedId}=this.state
        
        return (
            <div>
               <div className="App-UserList">
                <UserList clickHandler={this.EventHandler} userData={this.state.details}/>
                </div>
                <div className="App-Gallery">
                <Gallery data={data} ad={ad} clickedId={clickedId}/>
                </div> 
            </div>
        )
    }
}

export default HomePage