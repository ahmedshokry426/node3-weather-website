const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://sadsadsad?units=si'

    request ({url:url, json: true}, (error,{body}) => {
        if(error) {
            callback('Unable to connect to weather services',undefined)
        } else if(body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It us currently' + response)
        }
    })
}
module.exports = forecast