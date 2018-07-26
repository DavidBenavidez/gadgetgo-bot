var request = require('axios');
var format = require('string-format');

module.exports.getToken = () => {
    return request.get('https://globeserver.herokuapp.com/api/get-token').then(
        res => {
            return JSON.stringify(res.data);
        }
    ).catch(err => {
        console.log(err);
    });
}

module.exports.getUser = (subscriber_number) => {
    return request.get('https://globeserver.herokuapp.com/api/get-user', {
        params: {
            subscriber_number: subscriber_number
        }
    }).then(
        res => {
            return res.data;
        }
    ).catch(err => {
        console.log(err);
    });
}

module.exports.receiveMessage = () => {
    return request.post('https://globeserver.herokuapp.com/api/receive').then(
        res => {
            return JSON.stringify(res.data);
        }
    ).catch(err => {
        console.log(err);
    });
}