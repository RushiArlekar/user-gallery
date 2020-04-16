import React, { Component } from 'react'

class UserList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            details:[]
        }
    }
    componentDidMount(){
        this.GetNames();
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
        const[userData]=[this.state.details]
        return (
            <div>
                {userData.map(element => 
                    <h4 key={element.id} onClick={() => this.props.clickHandler(userData,element.id)}>
                    {`${element.first_name} ${element.last_name}`}
                </h4>)}
            </div>
        )
    }
}

export default UserList