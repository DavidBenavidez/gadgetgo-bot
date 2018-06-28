const builder = require('botbuilder');
const consts = require('../src/config/consts');
var request = require('request');
var cheerio = require('cheerio');
var phoneAPI = require('../src/helpers/apiPhone');

const samsung = "http://www.pinoytechnoguide.com/pricelists/samsung";
const huawei = "http://www.pinoytechnoguide.com/pricelists/huawei";
const lenovo = "http://www.pinoytechnoguide.com/pricelists/lenovo";
const asus = "http://www.pinoytechnoguide.com/pricelists/asus";
const vivo = "http://www.pinoytechnoguide.com/pricelists/vivo";
const nokia = "http://www.pinoytechnoguide.com/pricelists/nokia";
const lg = "http://www.pinoytechnoguide.com/pricelists/lg";

/* 
    What category below do you prioritize in a phone?

    Beautiful Camera!
    Tough Battery!
    Gorgeous Display! 
    Just give me the best bang for my buck/${budgetInput}!
*/
