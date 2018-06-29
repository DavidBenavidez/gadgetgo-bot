const request = require('axios');
const format = require('string-format');

/**FB USER-PROFILE API */
module.exports.userProfile =
    async (uid) => {
        fields = 'name,first_name,last_name,profile_pic,gender,locale,timezone'
        var options = {
            url: format('https://graph.facebook.com/v2.6/{0}?fields={1}&access_token={2}', uid, fields, process.env.ACCESS_TOKEN),
            method: 'GET'
        }

        return new Promise((resolve, reject) => {
            request(options)
                .then(res => {
                    resolve(res.data);
                })
                .catch(err => {
                    console.log(err);
                    reject(err);
                });
        });
    }
/**END */

/**FB GET STARTED BUTTON API */
module.exports.getStarted =
    (payload) => {
        var options = {
            url: format('https://graph.facebook.com/v2.6/me/messenger_profile?access_token={0}', process.env.ACCESS_TOKEN),
            method: 'POST',
            data: {
                get_started: {
                    payload: payload
                }
            }
        }

        request(options)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            });
    }
/**END */

/**FB PERSISTENT MENU API */
module.exports.persistentMenu =
    (body) => {
        var options = {
            url: format('https://graph.facebook.com/v2.6/me/messenger_profile?access_token={0}', process.env.ACCESS_TOKEN),
            method: 'POST',
            data: body
        }

        request(options)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            });
    }
/**END */