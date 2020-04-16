import React, { Component } from 'react'
import './Gallery.css'

class Gallery extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id:'',
            FirstName:'',
            LastName:'',
            Email:'',
            Avatar:'',
            Company:'',
            CompanyUrl:'',
            Text:''
        }
        this.DisplayGallery=this.DisplayGallery.bind(this)
    }

    componentDidUpdate(prevProps){
        if(this.props.id !== prevProps.id){
            this.DisplayGallery()
        }
    }

    componentDidMount(){
        this.DisplayGallery();
        console.log(this.props.id)
    }

    DisplayGallery = async() => {
        try{
            let response = await fetch('https://reqres.in/api/users/'+this.props.id);
            let json = await response.json();
            if(this.props.id !== ''){
                let details=[]
                details.splice(0,2,json)
                this.setState({
                    id:json.data.id,
                    FirstName:json.data.first_name,
                    LastName:json.data.last_name,
                    Email:json.data.email,
                    Avatar:json.data.avatar,
                    Company:json.ad.company,
                    CompanyUrl:json.ad.url,
                    Text:json.ad.text
                })
            }
        }
        catch(err){
            console.log(err)
        }

    }
    
    render(){
        if(this.state.id === ''){
            return(
                <div/>
            )
        }
        else{
            return (
                <div>
                    <img src={this.state.Avatar} className='User-Image' alt='profile'/>
                    <div>
                        {`Name: ${this.state.FirstName} ${this.state.LastName}`}
                    </div>
                    <div>
                        {`Email: ${this.state.Email}`}
                    </div>
                    <div>
                        {`Commpany: ${this.state.Company}`}
                    </div>
                    <div>
                        {`Company URL: ${this.state.Url}`}
                    </div>
                    <div>
                        {`MOre Info: ${this.state.Text}`}
                    </div>
                </div>
            )
        }
    }
}

export default Gallery