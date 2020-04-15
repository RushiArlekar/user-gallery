import React, { Component } from 'react'
import './Gallery.css'

class Gallery extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id:props.id,
            usrDetails:undefined
             
        }
        this.DisplayGallery=this.DisplayGallery.bind(this)
        this.changeState=this.changeState.bind(this)
    }
    
    changeState(){
        this.setState({
            id:this.props.id,
            usrDetails:undefined
        })
    }

    // fetch('https://jsonplaceholder.typicode.com/albums')
    // .then(response => response.json())
    // .then(json => {
    //     console.log(json)
    // })

    componentDidUpdate(){
        this.componentDidMount()
    }

    componentDidMount(){
        this.DisplayGallery();
        console.log(this.props.id)
    }

    DisplayGallery = async() => {
        console.log(this.props)

        //if(this.props.id !== undefined)
        
        // fetch('https://reqres.in/api/users/'+this.props.id)
        // .then(response => response.json())
        // .then(json =>{   
        //     //console.log(json)
        //     if(this.props.id !== ''){
        //         // this.setState({
        //         //     usrDetails:json.data.map((element)=> <h4 key={element.id} 
        //         //     onClick={() => this.props.clickHandler(element.id)}>
        //         //         {`${element.first_name} ${element.last_name}`}
        //         //     </h4>)
        //         // })
        //         this.setState({
        //             usrDetails:json.data.map((index) => 
        //                 <div key={index.id}>
        //                     {/* <div className='User-Image' src={index.vatar}></div>
        //                     <div>{`Name: ${index.first_name} ${index.last_name}`}</div>
        //                     <div>{`Email: ${index.email}`}</div> */}
        //                     {/* {`Name: ${index.first_name} ${index.last_name}`} */}
        //                 </div>
        //             )
        //             // usrDetails:json
        //         })
        //     }
        // console.log('state '+this.state.usrDetails)
        // }
        // ).catch( err => {
        //     console.log(err)
        // })

        try{
            let response = await fetch('https://reqres.in/api/users/'+this.props.id);
            let json = await response.json();
            //console.log(json)
            
            if(this.props.id !== ''){
                let details=[]
                details.splice(0,2,json)
                console.log(details)
                this.setState({
                    usrDetails:details.map((index) => 
                        <div key={index.data.id}>
                            <div className='User-Image' src={index.data.vatar}></div>
                            <div>{`Name: ${index.data.first_name} ${index.data.last_name}`}</div>
                            <div>{`Email: ${index.data.email}`}</div>
                            {/* {`Name: ${index.data.first_name} ${index.data.last_name}`} */}
                        </div>
                    )
                })
                console.log('state '+this.state.usrDetails)
            }
        }
        catch(err){
            console.log(err)
        }

    // return(
    //     // <div key={this.state.usrDetails.id}>
    //     //     <div className='User-Image' src={this.state.usrDetails.vatar}></div>
    //     //     <div>{`Name: ${this.state.usrDetails.first_name} ${this.state.usrDetails.last_name}`}</div>
    //     //     <div>{`Email: ${this.state.usrDetails.email}`}</div>
    //     // </div>
    //     <div>
    //         hello
    //     </div>
    // )
        
    }
    
    render(){
        //this.DisplayGallery()
        //this.changeState()
        if(this.props.id !== ''){
            return (
                <div>
                    {this.state.usrDetails}
                    {/* <this.DisplayGallery/> */}
                    {this.props.id}
                </div>
            )
        }
        else{
            return(
                <div>

                </div>
            )
        }
    }
}

export default Gallery