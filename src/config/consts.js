const builder = require('botbuilder');
const dialogs = require('../dialogs');

exports.PORT = process.env.port || process.env.PORT || 3978;

exports.prompts = {
    default: 
        `
            Sorry I didn\'t quite understand that. 
            If you have concerns, type 'help'.
        `,
    welcomeMessage: 
        `
            Hi! What can I do for you?
        `
}

module.exports.cards = {
    welcome: [
        {
            name: 'welcome',
            title: 'Easiest way to find you ideal gadgets.',
            image: 'file:///home/david/Desktop/hungrybot/bot/assets/logo.png'
        }
    ]
}

module.exports.validateBudget = (budget) => {
    if(budget === "I'm super rich") return 999999;
    else return budget;
}

module.exports.bot = [
    {
        dialog_id: '/',
        dialog: dialogs.default
    },
    {
        dialog_id: '/start_bot',
        dialog: dialogs.startBot
    },
    {
        dialog_id: '/exit',
        dialog: dialogs.exit,
        trigger_action: /^exit|cancel|quit|shut up|bye|good bye|goodbye$/i
    },
    {
        dialog_id: '/item/phone',
        dialog: dialogs.itemPhone
    },
    {
        dialog_id: '/item/phone/brands',
        dialog: dialogs.phoneBrands
    },
    {
        dialog_id: '/item/phone/get',
        dialog: dialogs.getPhones
    },
    {
        dialog_id: '/item/phone/category',
        dialog: dialogs.getPhoneCategory
    },
    {
        dialog_id: '/item/laptop',
        dialog: dialogs.itemLaptop
    },
    {
        dialog_id: '/item/laptop/get',
        dialog: dialogs.getLaptops
    },
    {
        dialog_id: '/item/laptop/category',
        dialog: dialogs.getLaptopCategory
    },
    {
        dialog_id: '/item/mouse',
        dialog: dialogs.itemMouse
    },
    {
        dialog_id: '/item/mouse/get',
        dialog: dialogs.getMice
    },
    {
        dialog_id: '/item/mouse/category',
        dialog: dialogs.getMiceCategory
    }
]

module.exports.styles = {
    button: { listStyle: builder.ListStyle.button },
    inline: { listStyle: builder.ListStyle.inline },
    list: { listStyle: builder.ListStyle.list },
    auto: { listStyle: builder.ListStyle.auto },
    none: { listStyle: builder.ListStyle.none },
    mr_button: {listStyle: builder.ListStyle.button, maxRetries: 0},
    mr_inline: {listStyle: builder.ListStyle.inline, maxRetries: 0},
    mr_list: {listStyle: builder.ListStyle.list, maxRetries: 0},
    mr_auto: {listStyle: builder.ListStyle.auto, maxRetries: 0},
    mr_none: {listStyle: builder.ListStyle.none, maxRetries: 0}
}