const express = require('express')
const app = require('./app')
const socketio = require('socket.io')

const dotenv = require('dotenv')
//Configuring the enviornmental variables present in the config.env files 
dotenv.config({path:`${__dirname}/config.env`})
//we can access the enviornmental variables using "process.env"
//console.log(process.env)
//-----------------------------------------------------------------------------------------------------------------
// MONGO.DB  Connection
const mongoose = require('mongoose');

const DB = process.env.LOCAL_DATABASE.replace('<PASSWORD>', process.env.PASSWORD);

//The connection returns a promise object 
mongoose.connect(DB, {      
  useNewUrlParser: true,
})
.then((con) => {
    console.log("DB Connection Successful....");
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

const server = app.listen(9999,()=>{
    console.log('server started successfully...')
})

const io = socketio(server)

io.on('connection',(socket)=>{
    console.log('new socket connected...')
    socket.on('C_new_client_conneted',()=>{
        socket.emit('S_welcome_client',"Welcome You now have to choose a organization")
    })
})

