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
        console.log('SESSION' + session);
        return { status: 200 };
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

server.post('/api/messages', connector.listen());

server.listen(config.port, () => {
    console.log(`Server started: ${server.name}@${config.version}`);
    console.log(`Listening on port: ${config.port}`)
});