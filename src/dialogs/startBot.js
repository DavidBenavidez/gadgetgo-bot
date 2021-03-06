const builder = require('botbuilder');
const consts = require('../config/consts');
const card = require('../helpers/cardBuilder');

var gadgets = [
    "Laptop",
    "Phone",
    "Mouse",
    "Headphones",
    "Speakers"
];

module.exports = [
    async (session) => {
        session.privateConversationData.currentDialog = '/start_bot';
        var cardName = card.getName(consts.cards.welcome);
        var msg = card(session, consts.cards.welcome, cardName);
        var prompt = `Hi there!, choose a gadget below:`;

        session.send(msg);
        builder.Prompts.choice(
            session,
            prompt,
            gadgets,
            { listStyle: 3 }
        );
    },
    async (session, results) => {
        if (!results.response) {
            session.replaceDialog('/');
        } else {
            if (results.response.entity === gadgets[1]) {
                session.replaceDialog('/item/phone');
            } else {
                session.send('Unfortunately, we\'re still working on that option.');
                session.replaceDialog('/start_bot')
            }
        }
    }
]