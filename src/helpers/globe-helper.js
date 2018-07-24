var request = require('axios');
var format = require('string-format');

module.exports.getToken = () => {
    return request.get('https://gadgetgoserver.herokuapp.com/api/get-token').then(
        res => {
            console.log("LALALA" + res.data);
            return JSON.stringify(res.data);
        }
    ).catch(err => {
        console.log(err);
    });
}