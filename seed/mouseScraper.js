const builder = require('botbuilder');
const consts = require('../src/config/consts');
var request = require('axios');
var mouseAPI = require('../src/helpers/apiMouse');


// Gaming or casual
// Wireless or Not
module.exports.mouseScraper = () => {
    mouseAPI.clearMice();
    mouseAPI.addMouse({
        model: "Logitech MX Anywhere 2",
        category: "Casual",
        price: 3500,
        rating: 4.7
    });
    mouseAPI.addMouse({
        model: "Logitech MX Master",
        category: "Casual",
        price: 3000,
        rating: 4.7
    });
    mouseAPI.addMouse({
        model: "Anker Vertical Ergonomic Optical Mouse",
        category: "Casual",
        price: 1325,
        rating: 4.6
    });
    mouseAPI.addMouse({
        model: "Apple Magic Mouse 2",
        category: "Casual",
        price: 4000,
        rating: 4.6
    });
    mouseAPI.addMouse({
        model: "Logitech Triathlon M270",
        category: "Casual",
        price: 2000,
        rating: 4.5
    });
    mouseAPI.addMouse({
        model: "Logitech MX Ergo Wireless",
        category: "Casual",
        price: 4400,
        rating: 4.5
    });
    mouseAPI.addMouse({
        model: "Asus ROG Gladius II",
        category: "Casual",
        price: 4700,
        rating: 4.4
    });
    mouseAPI.addMouse({
        model: "Logitech M330 Silent Plus",
        category: "Casual",
        price: 800,
        rating: 4.4
    });
    mouseAPI.addMouse({
        model: "Microsoft Bluetooth Mobile Mouse 3600",
        category: "Casual",
        price: 500,
        rating: 4.3
    });
    mouseAPI.addMouse({
        model: "Razer DeathAdder Chroma",
        category: "Casual",
        price: 2500,
        rating: 4.3
    });
    mouseAPI.addMouse({
        model: "SteelSeries Rival 600",
        category: "Gaming",
        price: 3180,
        rating: 4.7
    });
    mouseAPI.addMouse({
        model: "SteelSeries Sensei 310",
        category: "Gaming",
        price: 2900,
        rating: 4.7
    });
    mouseAPI.addMouse({
        model: "Corsair Dark Core RGB SE",
        category: "Gaming",
        price: 4800,
        rating: 4.6
    });
    mouseAPI.addMouse({
        model: "Logitech G903",
        category: "Gaming",
        price: 5800,
        rating: 4.6
    });
    mouseAPI.addMouse({
        model: "Roccat Kone Aimo",
        category: "Gaming",
        price: 4000,
        rating: 4.5
    });
    mouseAPI.addMouse({
        model: "Cooler Master MasterMouse MM520",
        category: "Gaming",
        price: 1800,
        rating: 4.5
    });
    mouseAPI.addMouse({
        model: "Razer Naga Trinity",
        category: "Gaming",
        price: 6800,
        rating: 4.4
    });
    mouseAPI.addMouse({
        model: "HyperX Pulsefire Surge",
        category: "Gaming",
        price: 3800,
        rating: 4.4
    });
    mouseAPI.addMouse({
        model: "Corsair Glaive RGB",
        category: "Gaming",
        price: 3500,
        rating: 4.3
    });
    mouseAPI.addMouse({
        model: "Creative Sound BlasterX Siege M04",
        category: "Gaming",
        price: 3000,
        rating: 4.4
    });

}