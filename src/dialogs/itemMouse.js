const builder = require('botbuilder');
const consts = require('../config/consts');
const mouseAPI = require('../helpers/apiMouse');

var categories = [
    "Casual",
    "Gaming"
];

module.exports = [
    async(session, results) => {
        session.privateConversationData.currentDialog = '/item/mouse';
        builder.Prompts.text(
            session, 
            `What\'s your budget for your mouse
             (You can enter a range)
             e.g (250-300)
             `
        );
    },
    async(session, results) => {
        session.conversationData.budget = consts.validateBudget(results.response);
        if(session.conversationData.budget.length > 1){
            session.send(`Your budget is ${session.conversationData.budget[0]} to ${session.conversationData.budget[1]}`);
        }else{
            session.send(`Your budget is ${session.conversationData.budget}`);
        }
        session.beginDialog('/item/mouse/get');
    }
]

module.exports.scrape = [
    async(session) => {
        session.privateConversationData.currentDialog = '/item/mouse/get';
        session.send(`You're looking for a mouse with a budget of ${session.conversationData.budget}.`);
        builder.Prompts.choice(
            session,
            "Is this correct? Or do you want to start over?",
            ["It is correct", "Start Over"],
            {listStyle: 3}    
        )
    },
    async(session,results) => {
        if(results.response.entity === "Start Over") session.beginDialog('/start_bot');
        
        console.log("BUDGEEEET", session.conversationData.budget);
        if(session.conversationData.budget.length > 1) session.conversationData.mice = JSON.parse(await mouseAPI.getMiceByRange(session.conversationData.budget));
        else session.conversationData.mice= JSON.parse(await mouseAPI.getMiceByBudget(session.conversationData.budget));
        
        session.beginDialog('/item/mouse/category');
    }
]

module.exports.category = [
    async (session) => {
        session.privateConversationData.currentDialog = '/item/mouse/category';
        builder.Prompts.choice(
            session,
            "What are you gonna use the mouse for?",
            categories,
            {listStyle: 3}
        );
    },
    async (session, results) => {
        var finalList = [];
        for(var i = 0; i < 3; i++){
            if(results.response.entity === categories[i]){
                for(var j = 0; j < session.conversationData.mice.length; j++){
                    if(session.conversationData.mice[j].category === categories[i]){
                        finalList.push(session.conversationData.mice[j]);
                    }
                }

                session.conversationData.mice = finalList;
                session.conversationData.mice.sort(function(a, b){
                    var keyA = new Date(a.rating),
                        keyB = new Date(b.rating);
                    if(keyA > keyB) return -1;
                    if(keyA < keyB) return 1;
                    return 0;
                });
            }
        }

        var msg = "";
        if(session.conversationData.mice.length > 10) session.conversationData.mice = session.conversationData.mice.slice(0, 10);
        if(session.conversationData.mice.length <= 0) session.endConversation("Couldn't find what you were looking for! It's okay, you can type 'restart' to try again");
        else { 
            for(var i = 0; i < session.conversationData.mice.length; i++){
                msg += `Model: ${session.conversationData.mice[i].model}\nPrice: ${session.conversationData.mice[i].price}\n\n`;
            }
            session.send(msg);
            session.send("Hope you found what you were looking for!\nType 'restart' to search again");
        }
    }
]