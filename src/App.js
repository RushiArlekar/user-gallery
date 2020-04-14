import React from 'react';
//import logo from './logo.svg';
import './App.css';
import UserList from './Components/UserList';
import Gallery from './Components/Gallery';
import Handler from './Components/Handler';


function App() {

  // const clickHandler = (id,name)=>{
  //   console.log(id,name)
  // }

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

export default App;
