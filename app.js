var restify = require('restify');
var builder = require('botbuilder');
var routes = require("./src/routes");
var consts = require("./src/config/consts");
var config = require("./src/config/config");
var twilio = require('twilio');

const accountSid = `ACa91dda6883e3042b359dbe117ec318bc`;
const authToken = `fe010561a956bbee9f634678ae48b52e`;
const client = new twilio(accountSid, authToken);
client.messages.create({
    body: 'Hello from Node',
    to: '+639773877155',  // Text this number
    from: '+15107688468' // From a valid Twilio number
}).then((message) => console.log(message.sid));

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