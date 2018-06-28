const builder = require('botbuilder');
const consts = require('../config/consts');
const phoneAPI = require('../helpers/apiPhone');
const card = require('../helpers/cardBuilder');

const categories = [ 
    "Tough Battery!",
    "Gorgeous Display!",
    "Beautiful Camera!",
    "Best bang for my buck!"
];

const budget = [
    "10000",
    "15000",
    "20000",
    "25000",
    "30000",
    "35000",
    "40000",
    "45000",
    "50000",
    "I'm super rich"
]

module.exports = [
    async(session, results) => {
        session.privateConversationData.currentDialog = '/item/phone';
        builder.Prompts.choice(
            session,
            "What's your budget for your phone?",
            budget,
            {listStyle: 3}
        );
    },
    async(session, results) => {
        session.conversationData.budget = consts.validateBudget(results.response.entity);
        builder.Prompts.choice(
            session,
            "What's do you want most in your phone?",
            categories,
            {listStyle: 3}
        );
    },
    async(session, results) => {
        session.conversationData.category = results.response.entity;
    
        if(session.conversationData.category === categories[0]) session.conversationData.phones = JSON.parse(await phoneAPI.getPhonesByBattery(session.conversationData.budget));
        else if(session.conversationData.category === categories[1]) session.conversationData.phones = JSON.parse(await phoneAPI.getPhonesByDisplay(session.conversationData.budget)); 
        else if(session.conversationData.category === categories[2]) session.conversationData.phones = JSON.parse(await phoneAPI.getPhonesByCamera(session.conversationData.budget));
        else if(session.conversationData.category === categories[3]) session.conversationData.phones = JSON.parse(await phoneAPI.getPhonesByBudget(session.conversationData.budget));

        session.send("Okay! Making a list that might contain the ideal phone for you!");
        
        if(session.conversationData.phones.length > 10) session.conversationData.phones = session.conversationData.phones.slice(0, 10);
        if(session.conversationData.phones.length <= 0) session.endConversation("Couldn't find what you were looking for!");
        else { 

            var carousel = [];
            for(var i = 0; i < session.conversationData.phones.length; i++){ 
                carousel.push({
                    name: 'phone' + i,
                    title: session.conversationData.phones[i].model,
                    text: '₱' + session.conversationData.phones[i].price.toFixed(2),
                    image: session.conversationData.phones[i].image,
                    button: [
                        {url: session.conversationData.phones[i].link, btn_title: 'Check Specs'}
                    ]
                });
            }
            var cardName = card.getName(carousel);
            var msg = card(session, carousel, cardName);
            session.send(msg);
            session.send("Hope you found what you were looking for!");
        }

        builder.Prompts.choice(
            session,
            "Do you want to start again?",
            ["Yes", "No"],
            {listStyle: 3}
        );
    },
    async (session, results) => {
        if(results.response.entity === "Yes") session.replaceDialog('/start_bot');
        else session.endConversation("Thanks for using GadgetGo!");
    }
]