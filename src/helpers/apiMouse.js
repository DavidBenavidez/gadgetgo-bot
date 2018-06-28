var request = require('axios');

module.exports.getMiceByBudget = async(price) => {
    return request.get('http://localhost:3001/api/get-mice-by-budget', {
        params: { price: price }
    }).then(
        res => {
            return JSON.stringify(res.data);
        }
    ) .catch(err => {
        console.log(err);
    });
}

module.exports.getMiceByRange = async(price) => {
    return request.get('http://localhost:3001/api/get-mice-by-range', {
        params: {price: price}
    }).then(
        res => {
            return JSON.stringify(res.data);
        }
    ) .catch(err => {
        console.log(err);
    });
}

module.exports.addMouse = async(data) => {
    var options = {
        url: 'http://localhost:3001/api/add-mouse',
        method: 'POST',
        data: data
    }
    request(options)
    .then(
        res => res.data
    )
    .catch(err => {
        console.log(err); 
    });
}

module.exports.clearMice = async() => {
    var options = {
        url: 'http://localhost:3001/api/clear-mice',
        method: 'DELETE'
    }
    request(options)
    .then(
        res => {}
    )
    .catch(err => {
        console.log(err); 
    });
}