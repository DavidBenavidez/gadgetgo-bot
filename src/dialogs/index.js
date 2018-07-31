exports.default = require('./default');
exports.startBot = require('./startBot');
exports.exit = require('./exit');

const itemPhone = require('./itemPhone');
exports.itemPhone = itemPhone;
exports.phoneBrands = itemPhone.brands;
exports.getPhones = itemPhone.scrape;
exports.getPhoneCategory = itemPhone.category;