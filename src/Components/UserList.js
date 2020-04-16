import React, { Component } from 'react'

class UserList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:[{
                id:'',
                FirstName:'',
                LastName:''
             }]
        }
    }
    componentDidMount(){
        this.renderNames();
    }

    renderNames = async() => {
        try{
            let response = await fetch('https://reqres.in/api/users');
            let json = await response.json();
            let listUser = this.state.data.slice()
            for(let i=0;i < json.data.length;i++){
                listUser[i] = {id:json.data[i].id, FirstName:json.data[i].first_name, LastName:json.data[i].last_name}
            }
            this.setState({
                data:listUser
            })
        }
        catch(err){
            console.log(err)
        }
    }
    
    render() {    
        return (
            <div>
                {this.state.data.map(element => 
                    <h4 key={element.id} onClick={() => this.props.clickHandler(element.id)}>
                    {`${element.FirstName} ${element.LastName}`}
                </h4>)}
            </div>
        )
    }
}

export default UserList
