import React, { Component } from 'react';
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
  }
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
