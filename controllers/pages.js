// importing and setting up express
const express = require('express')  // this will pull in the package
const app = express()               // express() creates an application server making app is now an http server and can listen to requests
const port = 3000                   // let the serve know what server to listen to

// Route handles: listen for requests and send back responses
// app.HTTP_METHOD(URL_STRING, ROUTE_HANDLER_FUNCTION)
app.get('/', (req, res) => {
  res.send('Hello World!!!!!')
})
