const request = require('request')

const forecast = (latitude, longtitude , callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=94f8e423e2aecbadfba899a1c5616e13&query=' + latitude + ','
    + longtitude + '#'

    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
         } //else {
        //     callback(undefined, current.weather_descriptions + ' It is currently ' + current.temperature + ' degress out. There is a ' + current.precip + '% chance of rain.')
        // }
    })
}


module.exports = forecast

module.exports = forecast