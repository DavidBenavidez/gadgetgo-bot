var request = require('axios');
var format = require('string-format');

module.exports.getLaptopsByBudget = async(price) => {
    return request.get('http://localhost:3001/api/get-laptops-by-budget', {
        params: { price: price }
    }).then(
        res => {
            return JSON.stringify(res.data);
        }
    ) .catch(err => {
        console.log(err);
    });
}

module.exports.getLaptopsByRange = async(price) => {
    return request.get('http://localhost:3001/api/get-laptops-by-range', {
        params: {price: price}
    }).then(
        res => {
            return JSON.stringify(res.data);
        }
    ) .catch(err => {
        console.log(err);
    });
}

module.exports.addLaptop = async(data) => {
    var options = {
        url: 'http://localhost:3001/api/add-laptop',
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

module.exports.clearLaptops = async() => {
    var options = {
        url: 'http://localhost:3001/api/clear-laptops',
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