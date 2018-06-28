var request = require('request');
var cheerio = require('cheerio');

var url = "https://www.techradar.com/reviews/iphone-x-review";

request(url, function(err, resp, body){
    var $ = cheerio.load(body);
    var domElem = $("*[itemprop = 'ratingValue']").get(0);
    var content = $(domElem).text().trim();
    console.log(content)


    /* if class
    var name = $('.company');
    var nameText = name.text();
    */
});