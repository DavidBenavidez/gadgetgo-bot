var request = require('axios');
var format = require('string-format');

module.exports.getPhonesByBudget = async(price) => {
    return request.get('http://localhost:3001/api/get-phones-by-budget', {
        params: { price: price }
    }).then(
        res => {
            return JSON.stringify(res.data);
        }
    ) .catch(err => {
        console.log(err);
    });
}

module.exports.getPhonesByCamera = async(price) => {
    // http://localhost:3001/api/get-phones-by-camera
    return request.get('https://gadgetgoserver.herokuapp.com/api/get-phones-by-camera', {
        params: {price: price}
    }).then(
        res => {
            return JSON.stringify(res.data);
        }
    ) .catch(err => {
        console.log(err);
    });
}

module.exports.getPhonesByDisplay = async(price) => {
    return request.get('https://gadgetgoserver.herokuapp.com/api/get-phones-by-display', {
        params: {price: price}
    }).then(
        res => {
            return JSON.stringify(res.data);
        }
    ) .catch(err => {
        console.log(err);
    });
}

module.exports.getPhonesByBattery = async(price) => {
    return request.get('https://gadgetgoserver.herokuapp.com/api/get-phones-by-battery', {
        params: {price: price}
    }).then(
        res => {
            return JSON.stringify(res.data);
        }
    ) .catch(err => {
        console.log(err);
    });
}