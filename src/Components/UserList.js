import React, { Component } from 'react'

class UserList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:[]
        }
        //this.Display=this.Display.bind(this)
    }

    // Display(props){
    //     //console.log('display')
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(json =>{       
    //     this.setState({
    //         data:json
    //     })
    //     }
    //     )
    

    //     return(
    //         <div className='userDisplay' id='displayId'>
    //             {this.state.data.map(index => <h3 className='users' id={index.id} onClick={
    //                 () => Handler.EventHandler(index.id,index.name)
    //                 }>
    //                   {index.name}
    //                   </h3>)}
    //         </div>
    //     )
    // }

    componentDidMount(){
        this.renderNames();
    }

    renderNames = async() => {
        try{
            let response = await fetch('https://reqres.in/api/users');
            let json = await response.json();
            //console.log(json)
            this.setState({
                data:json.data.map((element)=> <h4 key={element.id} onClick={() => this.props.clickHandler(element.id)}>
                    {`${element.first_name} ${element.last_name}`}
                </h4>)
            })
            console.log('userstate '+this.state.data)
        }
        catch(err){
            console.log(err)
        }
    }
    
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
                {/* <this.Display/> */}
                <ul>
                    {this.state.data}
                </ul>
            </div>
        )
    }
}

export default UserList
