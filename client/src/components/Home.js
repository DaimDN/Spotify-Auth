import React, { Fragment } from 'react';
import axios from 'axios';

export default class Home extends React.Component{
    constructor(props){
     super(props);
     this.state = {
         dataset : []
     }
}   

 async componentDidMount(){
        var url = "http://localhost:5000/";
        
        try {
            let data = await axios.get(url);

            this.setState({
                dataset: data.data
            })
            
        } catch (error) {
            this.setState({
                dataset: "Error Occured"
            })         
        }        
    }

    render(){

        return (
            <Fragment>
             <h1>{this.state.dataset.msg}</h1>
            </Fragment>
           
        )
    }

    
}

