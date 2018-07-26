var restify = require('restify');
var builder = require('botbuilder');
var routes = require("./src/routes");
var consts = require("./src/config/consts");
var config = require("./src/config/config");
var globeAPI = require("./src/helpers/globe-helper");

const returnSend = (res, content = '') => {
    const OK = 200;

    res.set('Content-Type', 'text/html');
    res.status(OK).send(content);
};

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
        // session.message.text = globeAPI.receiveMessage();
        // returnsend();
        // console.log("ASDSA" + session.message.text);
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

const server = restify.createServer({
    name: config.name,
    version: config.version
});

const logSMS = ({ messageId, senderAddress, message }) => {
    console.log(`------------------------------------------\nNew Message: ${messageId}\nFrom: ${senderAddress}\n${message}\n------------------------------------------`);
}

const SEND_SMS = (address, message) => ({
    outboundSMSMessageRequest: {
        senderAddress: App.senderAddress,
        outboundSMSTextMessage: { message },
        address
    }
});

const sendSMS = async (address, content) => {
    try {
        console.log("AM IN");
        let user = await globeAPI.getUser(address);
        console.log("UTHER " + user);
        const { access_token } = user;
        const { data } = await axios.post(App.SEND_SMS(access_token), SEND_SMS(address, content.trim()));

        console.log(`Successfully sent SMS to ${address}`);
    } catch (err) {
        console.log(`Failure to send SMS to ${address}`);
        console.log(err);
    }
}

const receiver = async (req, res) => {
    let agenda = '';
    console.log(req.body);
    const [sms] = req.body.inboundSMSMessageList.inboundSMSMessage;
    logSMS(sms);

    let { senderAddress } = sms;
    let { message } = sms;
    senderAddress = senderAddress.slice(7);

    sendSMS(senderAddress, `Message Received!\nYour message was ${message}`);
    connector.listen()
    returnSend(res);
};

server.post('/api/messages', connector.listen());
server.post('/api/messages/receive', receiver);

server.listen(config.port, () => {
    console.log(`Server started: ${server.name}@${config.version}`);
    console.log(`Listening on port: ${config.port}`)
});