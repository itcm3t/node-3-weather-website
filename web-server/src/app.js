const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

//Define path for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

// Setup handelbars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Mohcine Esskib'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Mohcine Esskib',
        text: 'This is some help text.'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help me',
        name: 'Mohcine Esskib'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.adress){
        return res.send({
            error: 'You must enter adress'
        })
    }

    geocode(req.query.adress, (error, {latitude, longtitude, location}) => {
        if (error){
            return res.send({error})
        }

        forecast(latitude, longtitude, (error, forecastData) => {
            if(error) {
                return res.send({error})
            }

            res.send({
                forecast: forecastData,
                location,
                adress: req.query.adress
            })
        })
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term'
        })
    }
    
    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Mohcine Esskib',
        error: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Mohcine Esskib',
        error: 'Page not found'
    })
}) 

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})