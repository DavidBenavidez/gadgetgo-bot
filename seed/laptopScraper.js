const builder = require('botbuilder');
const consts = require('../src/config/consts');
var request = require('axios');
var laptopAPI = require('../src/helpers/apiLaptop');

module.exports.laptopScraper = () => {
    laptopAPI.clearLaptops();
    laptopAPI.addLaptop({
            brand: "Acer",
            model: "Acer Aspire E 15 ",
            cpu: "Intel Core i5 7th Gen",
            gpu: "Nvidia GeForce MX150",
            category: "Gaming",
            price: 26739,
            rating: 4.0
        });
    laptopAPI.addLaptop({
            brand: "Acer",
            model: "Acer Predator Helios 300",
            cpu: "Intel Core i7-7700HQ",
            gpu: "Nvidia GeForce GTX 1060 (8GB GDDR5 VRAM) ",
            category: "Gaming",
            price: 65900,
            rating: 4.1
        });
    laptopAPI.addLaptop({
            brand: "Acer",
            model: "Acer Nitro 5",
            cpu: "Intel Core i5-8300H",
            gpu: "Nvidia GeForce GTX 1050 (4GB GDDR5 VRAM) ",
            category: "Gaming",
            price: 45995,
            rating: 4.1
        });
    laptopAPI.addLaptop({
            brand: "Gigabyte",
            model: "GIGABYTE Aero 15X",
            cpu: "Intel Core i7-9750H",
            gpu: "Nvidia GeForce GTX 1070 (8GB GDDR5 VRAM) ",
            category: "Gaming",
            price: 137900,
            rating: 4.2
        });
    laptopAPI.addLaptop({
            brand: "Asus",
            model: "Asus ROG Strix GL502",
            cpu: "Intel Core i7-7700HQ",
            gpu: "Nvidia GeForce GTX 1060 (6GB GDDR5 VRAM) ",
            category: "Gaming",
            price: 69469,
            rating: 4.3
        });
    laptopAPI.addLaptop({
            brand: "Dell",
            model: "Dell XPS 15",
            cpu: "Intel Core i7-7700HQ",
            gpu: "Nvidia GeForce GTX 1050 (6GB GDDR5 VRAM) ",
            category: "Gaming",
            price: 74900,
            rating: 4.3
        });
    laptopAPI.addLaptop({
            brand: "Razer",
            model: "Razer Blade Pro 17.3",
            cpu: "Intel Core i7-7700HQ",
            gpu: "Nvidia GeForce GTX 1060 (6GB GDDR5 VRAM) ",
            category: "Gaming",
            price: 119900,
            rating: 4.4
        });
    laptopAPI.addLaptop({
            brand: "Asus",
            model: "ASUS ROG G703GI-XS74",
            cpu: "Intel® Core™ i7-8750H Processor",
            gpu: "NVIDIA® GTX 1080 8G GDDR5",
            category: "Gaming",
            price: 201000,
            rating: 4.4
        });
    laptopAPI.addLaptop({
            brand: "Asus",
            model: "Asus ROG Zephyrus",
            cpu: "Intel Core i7-8750H (2.2GHz - 4.1GHz) Processor",
            gpu: "NVIDIA GeForce GTX 1060 (6GB) GDDR5",
            category: "Gaming",
            price: 111900,
            rating: 4.5
        });
    laptopAPI.addLaptop({
            brand: "MSI",
            model: "MSI GS65 Stealth ",
            cpu: "Intel Core i7-8750H (2.2GHz - 4.1GHz) Processor",
            gpu: "NVIDIA GeForce GTX 1060 (6GB) GDDR5",
            category: "Gaming",
            price: 122900,
            rating: 4.5
        });
    laptopAPI.addLaptop({
            brand: "Dell",
            model: "Dell Inspiron 15 7567",
            cpu: "7th Generation Intel® Core™ i5-7300HQ Quad Core ",
            gpu: "NVIDIA® GeForce® GTX 1050 with 4GB GDDR5",
            category: "Academe",
            price: 51300,
            rating: 3.8
        });
    laptopAPI.addLaptop({
            brand: "Apple",
            model: "Apple Macbook Pro 2017",
            cpu: "7th-generation Intel Core i5-8250U",
            gpu: "intel HD Graphics",
            category: "Academe",
            price: 136000,
            rating: 3.8
        });
    laptopAPI.addLaptop({
            brand: "Acer",
            model: "Acer Chromebook 15",
            cpu: "Intel Celeron Dual-Core 3205U",
            gpu: "intel HD Graphics",
            category: "Academe",
            price: 12567,
            rating: 3.9
        });
    laptopAPI.addLaptop({
            brand: "Samsung",
            model: "Samsung Notebook 7 Spin",
            cpu: "8th-generation Intel Core i5-8250U",
            gpu: "intel UHD Graphics 620",
            category: "Academe",
            price: 47489,
            rating: 3.9
        });
    laptopAPI.addLaptop({
            brand: "Acer",
            model: "Acer Aspire E15",
            cpu: "8th-generation Intel Core i5-8250U",
            gpu: "Nvidia GeForce MX150",
            category: "Academe",
            price: 34000,
            rating: 4.0
        });
    laptopAPI.addLaptop({
            brand: "Micorsoft",
            model: "Microsoft Surface Pro",
            cpu: "8th Generation Intel® Core™ i7-8550U processor",
            gpu: "Iris Plus Graphics 640",
            category: "Academe",
            price: 59576,
            rating: 4.0
        });
    laptopAPI.addLaptop({
            brand: "Samsung",
            model: "Samsung Notebook 9 (2018)",
            cpu: "8th Generation Intel® Core™ i7-8550U processor",
            gpu: "AMD Radeon 540",
            category: "Academe",
            price: 75000,
            rating: 4.1
        });
    laptopAPI.addLaptop({
            brand: "Asus",
            model: "Asus Chromebook Flip",
            cpu: "8th Generation Intel® Core™ m3 processor",
            gpu: "Intel HD Graphics 515",
            category: "Academe",
            price: 32000,
            rating: 4.1
        });
    laptopAPI.addLaptop({
            brand: "Samsung",
            model: "Samsung Notebook 9 Pro",
            cpu: "8th Generation Intel® Core™ i7-8550U processor",
            gpu: "Intel UHD Graphics 620",
            category: "Academe",
            price: 61608,
            rating: 4.2
        });
    laptopAPI.addLaptop({
            brand: "Dell",
            model: "Dell XPS 13",
            cpu: "8th Generation Intel® Core™ i7-8550U processor",
            gpu: "Intel UHD Graphics 620",
            category: "Academe",
            price: 61608,
            rating: 4.2
        });
    laptopAPI.addLaptop({
            brand: "Microsoft",
            model: "Microsoft Surface Book 2",
            cpu: "8th Generation Intel® Core™ i7-8550U processor",
            gpu: "NVIDIA GeForce GTX 1060",
            category: "Graphic Work",
            price: 135000,
            rating: 3.7
        });
    laptopAPI.addLaptop({
            brand: "HP",
            model: "HP ZBook Studio G4 DreamColor",
            cpu: "Intel i7-7700",
            gpu: "NVIDIA Quadro M1200",
            category: "Graphic Work",
            price: 106128,
            rating: 3.4
        });
    laptopAPI.addLaptop({
            brand: "Apple",
            model: "MacBook Pro with Touch Bar",
            cpu: "8th Generation Intel® Core™ i7-8550U processor",
            gpu: "Radeon Pro 560",
            category: "Graphic Work",
            price: 163000,
            rating: 4
        });
    laptopAPI.addLaptop({
            brand: "Dell",
            model: "Dell XPS 15",
            cpu: "8th Generation Intel® Core™ i5 processor",
            gpu: "NVIDIA GeForce GTX 1050",
            category: "Graphic Work",
            price: 69397,
            rating: 4.2
        });
    laptopAPI.addLaptop({
            brand: "Apple",
            model: "Apple Macbook",
            cpu: "7th Generation Intel® Core™ m3 processor",
            gpu: "Intel HD 615",
            category: "Graphic Work",
            price: 94990,
            rating: 4.1
        });
    laptopAPI.addLaptop({
            brand: "Microsoft",
            model: "Surface Laptop",
            cpu: "7th Generation Intel® Core™ i5 processor",
            gpu: "Intel HD 620",
            category: "Graphic Work",
            price: 55000,
            rating: 4.1
        });
    laptopAPI.addLaptop({
            brand: "Asus",
            model: "ASUS P-Series P2540UA-AB51",
            cpu: " Intel Core i5-7200U",
            gpu: "Intel HD 620",
            category: "Graphic Work",
            price: 26700,
            rating: 4.5
        });
    laptopAPI.addLaptop({
            brand: "HP",
            model: "HP 15.6″ Laptop",
            cpu: " Intel Core i5-7200U",
            gpu: "Intel HD 620",
            category: "Graphic Work",
            price: 26700,
            rating: 4.0
        });
    laptopAPI.addLaptop({
            brand: "Dell",
            model: "Dell i3567-5185BLK-PUS Inspiron",
            cpu: " Intel Core i5-7200U",
            gpu: "Intel HD 620",
            category: "Graphic Work",
            price: 26700,
            rating: 3.7
        });
}