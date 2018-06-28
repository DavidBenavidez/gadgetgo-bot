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

module.exports.phoneScraper = () => {
    phoneAPI.clearPhones();
    // SAMSUNG
        request(samsung, function(err, resp, body){    
            var $ = cheerio.load(body);
            var specs = [];
            var models = [];
            var Display = [];
            var Processor = [];
            var Camera = [];
            var Battery = [];
            var prices = [];

            // Get model names
            $('.pricelist-items .pricelist-item .pricelist-item-contents .phone-name').each(function(i, elm) {
                models.push($(this).text()); // for testing do text() 
            });
            
            // Get prices
            $('.pricelist-items li div .price').each(function(i, elm) {
                // $(this).text().replace(/₱/g, '');
                prices.push($(this).text().replace(/₱|,/g, '')); // for testing do text() 
            });
            // console.log("SAMSIUNG" + prices.length);

            $('.pricelist-items .pricelist-item .pricelist-item-contents .pricelist-specs li').each(function(i, elm) {
                specs.push($(this).text()); // for testing do text() 
            });

            for(var i = 0; i < specs.length; i++){
                specs[i] = specs[i].replace(/[\n|\t]/g, '');
                Display.push(specs[i]);
                i += 2;
                specs[i] = specs[i].replace(/[\n|\t]/g, '');
                Processor.push(specs[i]);
                i += 2;
                Camera.push(specs[i] + specs[i + 1]);
                i += 3;
                Battery.push(specs[i]);
            }
            for(var i = 0; i < prices.length; i++){
                phoneAPI.addPhone(
                    {
                        brand: "Samsung",
                        model: models[i],
                        display: Display[i],
                        processor: Processor[i].replace(/\D/g, ''),
                        camera: Camera[i],
                        battery: Battery[i].replace(/\D/g, ''),
                        price: parseInt(prices[i])
                    }
                );
            }
        });
    
    // Huawei
        request(huawei, function(err, resp, body){
            $ = cheerio.load(body);
            specs = [];
            models = [];
            Display = [];
            Processor = [];
            Camera = [];
            Battery = [];
            prices = [];
            // Get model names
            $('.pricelist-items .pricelist-item .pricelist-item-contents .phone-name').each(function(i, elm) {
                models.push($(this).text()); // for testing do text() 
            });
            
            // Get prices
            $('.pricelist-items li div .price').each(function(i, elm) {
                // $(this).text().replace(/₱/g, '');
                prices.push($(this).text().replace(/₱|,/g, '')); // for testing do text() 
            });
            // console.log("huawei" + prices.length);

            $('.pricelist-items .pricelist-item .pricelist-item-contents .pricelist-specs li').each(function(i, elm) {
                specs.push($(this).text()); // for testing do text() 
            });

            for(var i = 0; i < specs.length; i++){
                specs[i] = specs[i].replace(/[\n|\t]/g, '');
                Display.push(specs[i]);
                i += 2;
                specs[i] = specs[i].replace(/[\n|\t]/g, '');
                Processor.push(specs[i]);
                i += 2;
                Camera.push(specs[i] + specs[i + 1]);
                i += 3;
                Battery.push(specs[i]);
            }

            for(var i = 0; i < prices.length; i++){
                phoneAPI.addPhone(
                    {
                        brand: "Huawei",
                        model: models[i],
                        display: Display[i],
                        processor: Processor[i].replace(/\D/g, ''),
                        camera: Camera[i],
                        battery: Battery[i].replace(/\D/g, ''),
                        price: parseInt(prices[i])
                    }
                );
            }
        });
    // Lenovo
        request(lenovo, function(err, resp, body){
            $ = cheerio.load(body);
            specs = [];
            models = [];
            Display = [];
            Processor = [];
            Camera = [];
            Battery = [];
            prices = [];
            // Get model names
            $('.pricelist-items .pricelist-item .pricelist-item-contents .phone-name').each(function(i, elm) {
                models.push($(this).text()); // for testing do text() 
            });
            
            // Get prices
            $('.pricelist-items li div .price').each(function(i, elm) {
                // $(this).text().replace(/₱/g, '');
                prices.push($(this).text().replace(/₱|,/g, '')); // for testing do text() 
            });
            // console.log("lenovo" + prices.length);

            $('.pricelist-items .pricelist-item .pricelist-item-contents .pricelist-specs li').each(function(i, elm) {
                specs.push($(this).text()); // for testing do text() 
            });

            for(var i = 0; i < specs.length; i++){
                specs[i] = specs[i].replace(/[\n|\t]/g, '');
                Display.push(specs[i]);
                i += 2;
                specs[i] = specs[i].replace(/[\n|\t]/g, '');
                Processor.push(specs[i]);
                i += 2;
                Camera.push(specs[i] + specs[i + 1]);
                i += 3;
                Battery.push(specs[i]);
            }

            for(var i = 0; i < prices.length; i++){
                phoneAPI.addPhone(
                    {
                        brand: "Lenovo",
                        model: models[i],
                        display: Display[i],
                        processor: Processor[i].replace(/\D/g, ''),
                        camera: Camera[i],
                        battery: Battery[i].replace(/\D/g, ''),
                        price: parseInt(prices[i])
                    }
                );
            }
        });
    
    // Asus
        request(asus, function(err, resp, body){
            $ = cheerio.load(body);
            specs = [];
            models = [];
            Display = [];
            Processor = [];
            Camera = [];
            Battery = [];
            prices = [];
            // Get model names
            $('.pricelist-items .pricelist-item .pricelist-item-contents .phone-name').each(function(i, elm) {
                models.push($(this).text()); // for testing do text() 
            });
            
            // Get prices
            $('.pricelist-items li div .price').each(function(i, elm) {
                // $(this).text().replace(/₱/g, '');
                prices.push($(this).text().replace(/₱|,/g, '')); // for testing do text() 
            });
            // console.log("lenovo" + prices.length);

            $('.pricelist-items .pricelist-item .pricelist-item-contents .pricelist-specs li').each(function(i, elm) {
                specs.push($(this).text()); // for testing do text() 
            });

            for(var i = 0; i < specs.length; i++){
                specs[i] = specs[i].replace(/[\n|\t]/g, '');
                Display.push(specs[i]);
                i += 2;
                specs[i] = specs[i].replace(/[\n|\t]/g, '');
                Processor.push(specs[i]);
                i += 2;
                Camera.push(specs[i] + specs[i + 1]);
                i += 3;
                Battery.push(specs[i]);
            }

            for(var i = 0; i < prices.length; i++){
                phoneAPI.addPhone(
                    {
                        brand: "Asus",
                        model: models[i],
                        display: Display[i],
                        processor: Processor[i].replace(/\D/g, ''),
                        camera: Camera[i],
                        battery: Battery[i].replace(/\D/g, ''),
                        price: parseInt(prices[i])
                    }
                );
            }
        });
    
    // Vivo
        request(vivo, function(err, resp, body){
            $ = cheerio.load(body);
            specs = [];
            models = [];
            Display = [];
            Processor = [];
            Camera = [];
            Battery = [];
            prices = [];
            // Get model names
            $('.pricelist-items .pricelist-item .pricelist-item-contents .phone-name').each(function(i, elm) {
                models.push($(this).text()); // for testing do text() 
            });
            
            // Get prices
            $('.pricelist-items li div .price').each(function(i, elm) {
                // $(this).text().replace(/₱/g, '');
                prices.push($(this).text().replace(/₱|,/g, '')); // for testing do text() 
            });
            // console.log("lenovo" + prices.length);

            $('.pricelist-items .pricelist-item .pricelist-item-contents .pricelist-specs li').each(function(i, elm) {
                specs.push($(this).text()); // for testing do text() 
            });

            for(var i = 0; i < specs.length; i++){
                specs[i] = specs[i].replace(/[\n|\t]/g, '');
                Display.push(specs[i]);
                i += 2;
                specs[i] = specs[i].replace(/[\n|\t]/g, '');
                Processor.push(specs[i]);
                i += 2;
                Camera.push(specs[i] + specs[i + 1]);
                i += 3;
                Battery.push(specs[i]);
            }

            for(var i = 0; i < prices.length; i++){
                phoneAPI.addPhone(
                    {
                        brand: "Vivo",
                        model: models[i],
                        display: Display[i],
                        processor: Processor[i].replace(/\D/g, ''),
                        camera: Camera[i],
                        battery: Battery[i].replace(/\D/g, ''),
                        price: parseInt(prices[i])
                    }
                );
            }
        });

    // Nokia
        request(nokia, function(err, resp, body){
            $ = cheerio.load(body);
            specs = [];
            models = [];
            Display = [];
            Processor = [];
            Camera = [];
            Battery = [];
            prices = [];
            // Get model names
            $('.pricelist-items .pricelist-item .pricelist-item-contents .phone-name').each(function(i, elm) {
                models.push($(this).text()); // for testing do text() 
            });
            
            // Get prices
            $('.pricelist-items li div .price').each(function(i, elm) {
                // $(this).text().replace(/₱/g, '');
                prices.push($(this).text().replace(/₱|,/g, '')); // for testing do text() 
            });
            // console.log("lenovo" + prices.length);

            $('.pricelist-items .pricelist-item .pricelist-item-contents .pricelist-specs li').each(function(i, elm) {
                specs.push($(this).text()); // for testing do text() 
            });

            for(var i = 0; i < specs.length; i++){
                specs[i] = specs[i].replace(/[\n|\t]/g, '');
                Display.push(specs[i]);
                i += 2;
                specs[i] = specs[i].replace(/[\n|\t]/g, '');
                Processor.push(specs[i]);
                i += 2;
                Camera.push(specs[i] + specs[i + 1]);
                i += 3;
                Battery.push(specs[i]);
            }

            for(var i = 0; i < prices.length; i++){
                phoneAPI.addPhone(
                    {
                        brand: "Nokia",
                        model: models[i],
                        display: Display[i],
                        processor: Processor[i].replace(/\D/g, ''),
                        camera: Camera[i],
                        battery: Battery[i].replace(/\D/g, ''),
                        price: parseInt(prices[i])
                    }
                );
            }
        });

        // LG
            request(lg, function(err, resp, body){
                $ = cheerio.load(body);
                specs = [];
                models = [];
                Display = [];
                Processor = [];
                Camera = [];
                Battery = [];
                prices = [];
                // Get model names
                $('.pricelist-items .pricelist-item .pricelist-item-contents .phone-name').each(function(i, elm) {
                    models.push($(this).text()); // for testing do text() 
                });
                
                // Get prices
                $('.pricelist-items li div .price').each(function(i, elm) {
                    // $(this).text().replace(/₱/g, '');
                    prices.push($(this).text().replace(/₱|,/g, '')); // for testing do text() 
                });
                // console.log("lenovo" + prices.length);

                $('.pricelist-items .pricelist-item .pricelist-item-contents .pricelist-specs li').each(function(i, elm) {
                    specs.push($(this).text()); // for testing do text() 
                });

                for(var i = 0; i < specs.length; i++){
                    specs[i] = specs[i].replace(/[\n|\t]/g, '');
                    Display.push(specs[i]);
                    i += 2;
                    specs[i] = specs[i].replace(/[\n|\t]/g, '');
                    Processor.push(specs[i]);
                    i += 2;
                    Camera.push(specs[i] + specs[i + 1]);
                    i += 3;
                    Battery.push(specs[i]);
                }

                for(var i = 0; i < prices.length; i++){
                    phoneAPI.addPhone(
                        {
                            brand: "LG",
                            model: models[i],
                            display: Display[i],
                            processor: Processor[i].replace(/\D/g, ''),
                            camera: Camera[i],
                            battery: Battery[i].replace(/\D/g, ''),
                            price: parseInt(prices[i])
                        }
                    );
                }
            });

        // Apple
        // Static bc meh
        phoneAPI.addPhone(
            {
                brand: "Apple",
                model: "iPhone SE",
                display: "4-inch Retina Display",
                processor: "A9 Chip",
                camera: 12,
                battery: 1624,
                price: 22490
            }
        );
        phoneAPI.addPhone(
            {
                brand: "Apple",
                model: "iPhone 6s",
                display: "4.7-inch Retina Display",
                processor: "A9 Chip",
                camera: 12,
                battery: 1715,
                price: 28990
            }
        );
        phoneAPI.addPhone(
            {
                brand: "Apple",
                model: "iPhone 6s Plus",
                display: "5.5-inch Retina Display",
                processor: "A9 Chip",
                camera: 12,
                battery: 2906,
                price: 35490
            }
        );
        phoneAPI.addPhone(
            {
                brand: "Apple",
                model: "iPhone 7",
                display: "4.7-inch Retina Display",
                processor: "A10 Fusion Chip",
                camera: 12,
                battery: 2900,
                price: 35490
            }
        );
        phoneAPI.addPhone(
            {
                brand: "Apple",
                model: "iPhone 7 Plus",
                display: "5.5-inch Retina Display",
                processor: "A10 Fusion Chip",
                camera: 12,
                battery: 2900,
                price: 42990
            }
        );
        phoneAPI.addPhone(
            {
                brand: "Apple",
                model: "iPhone 8",
                display: "4.7-inch Retina Display",
                processor: "A11 Bionic Chip",
                camera: 12,
                battery: 1821,
                price: 44990
            }
        );
        phoneAPI.addPhone(
            {
                brand: "Apple",
                model: "iPhone 8 Plus",
                display: "5.5-inch Retina Display",
                processor: "A11 Bionic Chip",
                camera: "12 MP",
                battery: 2691,
                price: 51490
            }
        );
        phoneAPI.addPhone(
            {
            brand: "Apple",
            model: "iPhone X",
            display: "5.8-inch Super Retina HD Display",
            processor: "A11 Bionic Chip",
            camera: "12 MP",
            battery: 2716,
            price: 64490
            }
        );
}