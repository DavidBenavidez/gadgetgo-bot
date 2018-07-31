const builder = require('botbuilder');

const yes = /^all right|by all means|yarp|absolutely|yes|sure|alright|very well|of course|certainly|indeed|yup|yep|yas|ok|okay|affirmative|roger|yeah|ya|uh-huh|mhmm|okey-dokey|okie|oki|aye$/i;
const no = /^no|absolutely not|nope|narp$/i;

module.exports = [
    async (session) => {
        builder.Prompts.choice(
            session,
            "Are you sure?",
            ["Yes", "No"],
            { listStyle: 3 }
        );
    },
    async (session, results) => {
        if (results.response.entity.match(yes)) {
            // Randomize lines
            session.endConversation("Okay. Hope to see you again!");
        } else if (results.response.entity.match(no)) {
            var currentDialog = session.privateConversationData.currentDialog;
            session.beginDialog(currentDialog);
        } else {
            session.send('I didn\'t understand. Let me repeat.');
            session.beginDialog('/exit');
        }
    }
]