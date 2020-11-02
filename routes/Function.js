const express = require('express');
const chalk = require('chalk');
const ErrorMessage = "Internal Server Error";
const http = require('http');
const axios = require('axios');


module.exports.getLandingPage = async (req, res, next)=>{
    try {
        res.status(200).json({msg: "successfully connected with server"});
        
    } catch (error) {
        res.status(500).json({msg: ErrorMessage});
        
    }

}


module.exports.IMDB = async(req, res, next)=>{
    try {
        
        var axios = require("axios").default;

        var options = {
          method: 'GET',
          url: 'https://rapidapi.p.rapidapi.com/',
          params: {},
          headers: {
            'x-rapidapi-key': '29e0b940aamsh76b1b8e9cd1e5ffp1fc7b9jsn2b4e28f1b917',
            'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com'
          }
        };
        
        axios.request(options).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.error(error);
        });
                 
        
    } catch (error) {
        res.status(500).json({msg: "Internal Server error"})
        
    }
}