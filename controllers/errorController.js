/*eslint-disable*/
//This is The GlobalErrorHandler Middleware
//Simply import this in any module and use it...
const AppError = require('../utils/appError');
//-------------------------------------------------------------------------------------------
const sendError = (err,req,res) => {
  //Error handling for the API 
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });
};

module.exports = (error, req, res, next) => {
  // console.log(err.stack);
  //Sometimes some internal node errors may not have a status code 
  error.statusCode = error.statusCode || 500;
  error.status = error.status || 'error';

  sendError(error,req,res)
};

//Seperating Error Outputs for Development and Production Enviornment
//We need to send Less Info to the Client about the error


//Also we need to send only Operational errors to the Client and Not the Programatic errors/Logical Errors
//We Will do that using isOperational property of the AppError Class

//We need to mark some errors thrown by mongoose as Operational errors
//1. Get request using a wrong id-format i.e. not understandable by mongoose (Cast Error)
//2. Post request to an already existing Object
//3. Patch request which may generate a validation-error (ValidationError)
//....
