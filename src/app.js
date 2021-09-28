const express = require('express')
const path = require('path')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// app.com
// app.com/help
// app.com/about
// (route*url*, function)
// app.get('', (req, res) => {
//     // Sending HTML tag
//     res.send('<h1>Home</h1>')
// })
const app = express()

// Setup heroku port
const port =  process.env.PORT || 3000

// Define paths for Express config
const publicDir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)

// Setup static directory to serve
app.use(express.static(publicDir))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Ahmed Mohamed'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Ahmed Mohamed'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title:'Help Page',
        para: 'Helping!',
        name: 'Ahmed Mohamed'
    })
})

app.get('/products', (req, res) => {
    if(!req.query.search) {
        return res.send({
            error: "You must provide a search term!"
        })
    }

    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error: "You must provide an address term!"
        }) 
    }

    // geocode(req.query.address,(error, {latitude, longitude, location = 'Unknown'} = {})=> {
    //     if(error){
    //         return res.send({error})
    //     }

    //     forecast(latitude, longitude, (error, forecastData) => {
    //         if(error){
    //             return res.send({error})
    //         }
            
    //         res.send({
    //             forecast: forecastData,
    //             location,
    //             address: req.query.address
    //         })
    //     })
    // })


    console.log(req.query.address)
    res.send({
        address: req.query.address
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title:'404',
        name:'Ahmed Mohamed',
        errorMessage: 'Help Article Not Found'
    })
})


app.get('*', (req, res) => {
    res.render('404', {
        title:'404',
        name:'Ahmed Mohamed',
        errorMessage: 'Page not found'

    })
})

// Start the server (port)
app.listen(port, () => {
    console.log('Server is up to port '+ port)
})