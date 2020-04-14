import React, { Component } from 'react'

class UserList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:[]
        }
        this.Display=this.Display.bind(this)
    }

    Display(props){
        //console.log('display')
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json =>{       
        this.setState({
            data:json
        })
        }
        )
    

        return(
            <div className='userDisplay' id='displayId'>
                {this.state.data.map(index => <h3 className='users' id={index.id} onClick={
                    () => props.clickHandler(index.id,index.name)
                    }>
                      {index.name}
                      </h3>)}
            </div>
        )
    }

    // Display(){
    //     this.renderNames();
    // }

    // renderNames = async() => {
    //     try{
    //         let response = await fetch('https://jsonplaceholder.typicode.com/users');
    //         let json = await response.json();
    //         console.log(json)
    //         this.setState({
    //             data:json.map((element,index)=> <li key={element.id}>
    //                 {element.name}
    //             </li>)
    //         })
    //         console.log(this.state.data)
    //     }
    //     catch(err){
    //         console.log(err)
    //     }
    // }
    
    render() {
        
        //console.log(this.state.data)
        return (
            <div>
                {/* <ul>
                    {
                        this.state.data.map(index => <h3 className='users' id={index.id} >
                              {index.name}
                              </h3>
                        )
                    }
                </ul> */}
                <this.Display/>
                {/* <ul>
                    {this.state.data}
                </ul> */}
            </div>
        )
    }
}

export default UserList
