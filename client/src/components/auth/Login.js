import React, { Component } from 'react'
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
import Logout from './Logout';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            stack : []
        }
    }



    
    render() {


    var url = "https://accounts.spotify.com/authorize/?client_id=2b7d3b3abffc4e0cb22016746cd4aba4&response_type=code&redirect_uri=http://localhost:3000/accounts&scope=user-read-private%20user-read-email";

        return (
            <div>
         <a className="btn btn-primary" href={url}>Spotify Login</a>
         <Link to={Logout}>Logout</Link>

       

                
            </div>
        )
    }
}
