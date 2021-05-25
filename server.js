if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express  = require('express');
const app      = express();
const port     = process.env.PORT || 3000
const layout   = require('express-ejs-layouts')
const login    = require('./roots/login')
const add      = require('./roots/add')



app.set('view engine','ejs');
app.set('viwes',__dirname+'/viwes')
app.set('layout','layout')



app.use(layout);
app.use(express.static('public'));
app.use('/',login)
app.use('/dashboard',add)
app.use(express.urlencoded({ limit:'10mb',extended: false }))

app.listen(port,()=>console.log(`Server is running at ${port} in ${new Date().toString().split(' ')[4]}`))