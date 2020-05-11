const request = require('request')

const geocode = (adress, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(adress) + 
    '.json?access_token=pk.eyJ1IjoibWFyY2VsM3QiLCJhIjoiY2s5NXpxdDNyMDl0ZDNnb2xnZjd5NjJyaSJ9.m6uOqbQJ90Bv1FujRYQHnw&limit=1'

    request({ url, json: true }, (error, {body}) => {
        if(error) {
            callback('Unable to connect to location services!', undefined)
        } else if(body.features.length === 0) {
            callback('Unable to find location. Try another search!', undefined)
        } else {
            callback(undefined, {
                latitude : body.features[0].center[0],
                longtitude : body.features[0].center[1],
                location : body.features[0].place_name
            })
        }
    })  
}

module.exports = geocode