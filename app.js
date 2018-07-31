const express = require('express');
const bodyParser = require('body-parser');

var builder = require('botbuilder');
var routes = require("./src/routes");
var consts = require("./src/config/consts");
var config = require("./src/config/config");

const server = express();
server.use(bodyParser.json());


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

server.post('/api/messages', connector.listen());

server.listen(config.port, () => {
    console.log(`Server started: ${server.name}@${config.version}`);
    console.log(`Listening on port: ${config.port}`)
});