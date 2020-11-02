const mongoose = require('mongoose');
const config = require('config');
let dburl = config.get('URI')

module.exports.dbConnector = async()=>{

    try {

        let dbconnect = await mongoose.connect(
            dburl, {useCreateIndex: false, useFindAndModify: true, useNewUrlParser: true,
                useUnifiedTopology: true
            })
        
    } catch (error) {
        console.log("Error Establihsing connections")
        
    }

}