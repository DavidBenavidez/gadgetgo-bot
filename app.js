const express = require('express');
const bodyParser = require('body-parser');

var builder = require('botbuilder');
var routes = require("./src/routes");
var consts = require("./src/config/consts");
var config = require("./src/config/config");
var globeAPI = require("./src/helpers/globe-helper");

const server = express();
server.use(bodyParser.json());

/*
    SMS APIs
*/

const App = {
    name: 'SMS Bot',
    tokenizer: 'https://developer.globelabs.com.ph/oauth/access_token',
    api_id: 'KBaBFxB4MkfjgTBrd5i4oyfExBR8F7KE', // API Id
    app_secret: 'e465668ed8b871061cbc0f27db9f25815b6990f2fc7e70d107bf5f1eb19d948c', // App secret
    senderAddress: 4886, // last 4 digits of provider number
    developer: { // dev contact for reports
        contact: '',
        name: 'David'
    },
    SEND_SMS: token => `https://devapi.globelabs.com.ph/smsmessaging/v1/outbound/4886/requests?access_token=${token}`
}

const SEND_SMS = (address, message) => ({
    outboundSMSMessageRequest: {
        senderAddress: App.senderAddress,
        outboundSMSTextMessage: { message },
        address
    }
});

const logSMS = ({ messageId, senderAddress, message }) => {
    console.log(`------------------------------------------\nNew Message: ${messageId}\nFrom: ${senderAddress}\n${message}\n------------------------------------------`);
}

const sendSMS = async (address, content) => {
    try {
        let user = await globeAPI.getUser(address);

        const { access_token } = user;
        const { data } = await axios.post(App.SEND_SMS(access_token), SEND_SMS(address, content.trim()));

        console.log(`Successfully sent SMS to ${address}`);
    } catch (err) {
        console.log(`Failure to send SMS to ${address}`);
        console.log(err);
    }
}

const returnSend = (res, content = '') => {
    const OK = 200;

    res.set('Content-Type', 'text/html');
    res.status(OK).send(content);
};

// *******************************************************************************


var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

var inMemoryStorage = new builder.MemoryBotStorage();
var bot = new builder.UniversalBot(connector)
    .set('storage', inMemoryStorage)
    .endConversationAction({
        matches: /^exit|cancel|quit|shut up|bye|good bye|goodbye$/i,
        confirmPrompt: "Are you sure?"
    });

bot.use(builder.Middleware.dialogVersion({
    version: 2.0,
    resetCommand: /^reset/i
}));
bot.use(builder.Middleware.sendTyping());

bot.use({
    botbuilder: async (session, next) => {

        var restart = /^restart|started|get started|start over|get_started/i.test(session.message.text);
        if (restart) {
            globeAPI.getToken();
            session.userData = {};
            session.privateConversationData = {};
            session.conversationData = {};
            session.dialogData = {};

            /**INSERT BEGIN DIALOG HERE*/
            session.beginDialog('/start_bot');
        } else {
            next();
        }
    }
});


routes(bot, consts.bot);

//=========================================================
// Server Setup
//=========================================================

const receive = async (req, res) => {
    let agenda = '';
    const [sms] = req.body.inboundSMSMessageList.inboundSMSMessage;
    logSMS(sms);

    let { senderAddress } = sms;
    let { message } = sms;
    senderAddress = senderAddress.slice(7);

    sendSMS(senderAddress, `Message Received!\nYour message was ${message}`);
    connector.listen();
    returnSend(res);
};

server.post('/api/messages', receive);

server.listen(config.port, () => {
    console.log(`Server started: ${server.name}@${config.version}`);
    console.log(`Listening on port: ${config.port}`)
});