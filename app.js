// * Requiring the external modules.
const express = require("express")
const ejs = require("ejs")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

// * Requiring the my function



// * using express 
const app = express()

// * set view engine as ejs module
app.set('view engine', 'ejs' )

// * use express for static path for css and javascript
app.use(express.static("public"))

// * using body parser 
app.use(bodyParser.urlencoded({ extended : true }))

// * sign up page get and post method
app.get('/sign-up', ( req, res ) =>{
    res.render('signup' )
})
app.post('/sign-up', (req, res)=>{
    let userSignUpDetails = req.body;
    console.log(userDetails)
    app.send("We took your data")
})


// * login page get and post method
app.get('/log-in', ( req, res ) =>{
    res.render('login' )
})

app.post('/log-in', (req, res)=>{
    let userLogInDetails = req.body
    console.log(userLogInDetails)
    app.send("We took your data")
})


// * giving it to port and make

const port = process.env.PORT  || 3000 

var server = app.listen( port, () =>{
    const host = server.address().address
    console.log(host)
    const p = server.address().port 

    console.log(`App is running on : http://localhost:${p}`);
})


