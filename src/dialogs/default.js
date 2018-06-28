const builder = require('botbuilder');
const consts = require('../config/consts');


module.exports = [
    async(session) => {
        session.send('I didn\'t quite understand that. Please enter \'restart\' so we can start over');
    }
]