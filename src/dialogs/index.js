exports.default = require('./default');
exports.startBot = require('./startBot');
exports.exit = require('./exit');

const itemPhone = require('./itemPhone');
exports.itemPhone = itemPhone;
exports.phoneBrands = itemPhone.brands;
exports.getPhones = itemPhone.scrape;
exports.getPhoneCategory = itemPhone.category;

const itemLaptop = require('./itemLaptop');
exports.itemLaptop = itemLaptop;
exports.getLaptops = itemLaptop.scrape;
exports.getLaptopCategory = itemLaptop.category;

const itemMouse = require('./itemMouse');
exports.itemMouse = itemMouse;
exports.getMice = itemMouse.scrape;
exports.getMiceCategory = itemMouse.category;