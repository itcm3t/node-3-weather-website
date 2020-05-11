const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const adress = process.argv[2]

if(!adress){
    console.log('Please provide an adress')
} else {
    geocode(adress, (error, {latitude, longtitude, location} = {}) => {
        if(error){
            return console.log(error)
        } 
    
        // forecast(data.latitude, data.longtitude, (error, forecastData) => {
        //     console.log(data.location)
        //     console.log(forecastData)
        // })
    })
}

console.log(process.argv)



