import React from 'react';
//import logo from './logo.svg';
import './App.css';
import UserList from './Components/UserList';
import Gallery from './Components/Gallery';
import Handler from './Components/Handler';


class App extends Component {
  state = { loading: false };

  // const clickHandler = (id,name)=>{
  //   console.log(id,name)
  // }
  render(){
    return (
      <div className="App">
        <div className="App-UserList">
          <UserList clickHandler={Handler.eventHandler}/>
        </div>
        {/* <div className="App-Gallery">
          <Gallery/>
        </div> */}
      </div>
    );
  }
}

export default App;
