const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://sadsadsad?units=si'

    request ({url:url, json: true}, (error,{body}) => {
        if(error) {
            callback('Unable to connect to weather services',undefined)
        } else if(body.error) {
            callback('Unable to find location', undefined)
        } else {
            console.log(body.daily.data[0])
            callback(undefined, body.daily.data[0].summary + ' It us currently' + response +' This high today is '+ body.daily.data[0].temperatureHigh + ' With a low of ' + body.daily.data[0].temperatureLow + '. ')
        }
    })
}
module.exports = forecast