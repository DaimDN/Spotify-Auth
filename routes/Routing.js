const express = require('express');
const Router = express.Router();
const functions = require('./Function');



//@Param this is all Get Routes
Router.get('/', functions.getLandingPage);
Router.get('/imdb', functions.IMDB);


//@Param this is all Post Routes


Router.get('/login', function(req, res) {
    var scopes = 'user-read-private user-read-email';
    var redirect_uri = "http://localhost:5000"
    res.redirect('https://accounts.spotify.com/authorize' +
      '?response_type=code' +
      '&client_id=' + '2b7d3b3abffc4e0cb22016746cd4aba4' +
      (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
      '&redirect_uri=' + encodeURIComponent(redirect_uri));
    });





module.exports = Router;