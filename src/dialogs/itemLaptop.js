const builder = require('botbuilder');
const consts = require('../config/consts');

var categories = [
    "Gaming",
    "Academe",
    "Graphic Work"
];

module.exports = [
    async(session, results) => {
        session.privateConversationData.currentDialog = '/item/laptop';
        builder.Prompts.text(
            session, 
            `What\'s your budget for your laptop
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
        session.beginDialog('/item/laptop/get');
    }
]

module.exports.scrape = [
    async(session) => {
        session.privateConversationData.currentDialog = '/item/laptop/get';
        session.send(`You're looking for a laptop with a budget of ${session.conversationData.budget}.`);
        builder.Prompts.choice(
            session,
            "Is this correct? Or do you want to start over?",
            ["It is correct", "Start Over"],
            {listStyle: 3}    
        )
    },
    async(session,results) => {
        if(results.response.entity === "Start Over") session.beginDialog('/start_bot');

        if(session.conversationData.budget.length > 1) session.conversationData.laptops = JSON.parse(await laptopAPI.getLaptopsByRange(session.conversationData.budget));
        else session.conversationData.laptops = JSON.parse(await laptopAPI.getLaptopsByBudget(session.conversationData.budget));
        
        session.beginDialog('/item/laptop/category');
    }
]

module.exports.category = [
    async (session) => {
        session.privateConversationData.currentDialog = '/item/laptop/category';
        builder.Prompts.choice(
            session,
            "What are you gonna use the laptop for?",
            categories,
            {listStyle: 3}
        );
    },
    async (session, results) => {
        var finalList = [];
        for(var i = 0; i < 3; i++){
            if(results.response.entity === categories[i]){
                for(var j = 0; j < session.conversationData.laptops.length; j++){
                    if(session.conversationData.laptops[j].category === categories[i]){
                        finalList.push(session.conversationData.laptops[j]);
                    }
                }

                session.conversationData.laptops = finalList;
                session.conversationData.laptops.sort(function(a, b){
                    var keyA = new Date(a.rating),
                        keyB = new Date(b.rating);
                    if(keyA > keyB) return -1;
                    if(keyA < keyB) return 1;
                    return 0;
                });
            }
        }

        var msg = "";
        if(session.conversationData.laptops.length > 10) session.conversationData.laptops = session.conversationData.laptops.slice(0, 10);
        if(session.conversationData.laptops.length <= 0) session.endConversation("Couldn't find what you were looking for! It's okay, you can type 'restart' to try again");
        else { 
            for(var i = 0; i < session.conversationData.laptops.length; i++){
                msg += `Model: ${session.conversationData.laptops[i].model}\nPrice: ${session.conversationData.laptops[i].price}\n\n`;
            }
            session.send(msg);
            session.send("Hope you found what you were looking for!\nType 'restart' to search again");
        }
    }
]