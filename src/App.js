import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import UserList from './Components/UserList';
import Gallery from './Components/Gallery';


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       id:''
    }
    this.EventHandler=this.EventHandler.bind(this)
  }
  
  EventHandler(id){
    this.setState({
      id: id
    })
    //alert('success')
    //console.log('event'+this.state.id)

  }

  // const clickHandler = (id,name)=>{
  //   console.log(id,name)
  // }
  render(){
    return (
      <div className="App">
        <div className="App-UserList">
          <UserList clickHandler={this.EventHandler}/>
        </div>
        <div className="App-Gallery">
          <Gallery id={this.state.id}/>
        </div>
      </div>
    );
  }
}

export default App;
