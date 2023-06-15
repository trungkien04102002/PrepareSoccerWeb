const request = require('request')
const cheerio = require('cheerio')
const axios = require('axios');
const fs = require('fs');



async function scrapeTeams() {
    try {
        const response = await axios.get('https://www.premierleague.com/clubs');
        console.log(response.data)
        const $ = cheerio.load(response.data);
        const $test = $('.allTimeDataContainer js-all-time-data-container team-index__body')
        console.log($test.length)
        // const $tab = $('[data-ui-tab="Stadium Information"]');
        // const $p = $tab.find('p:contains("address"), p:contains("apacity")')
        // $p.each((i, el) => {
        //     console.log($(el).text())
        // });
    } catch (error) {
        console.log("ERROR TO SCRAPE :::", error)
    }
}

scrapeTeams() 


// async function scrapeTeams() {
//     try {
//         const response = await axios.get('https://www.premierleague.com/clubs');
//         console.log(response.data)
//         const $ = cheerio.load(response.data);
//         const $test = $('.allTimeDataContainer js-all-time-data-container team-index__body')
//         console.log($test.length)
//         // const $tab = $('[data-ui-tab="Stadium Information"]');
//         // const $p = $tab.find('p:contains("address"), p:contains("apacity")')
//         // $p.each((i, el) => {
//         //     console.log($(el).text())
//         // });
//     } catch (error) {
//         console.log("ERROR TO SCRAPE :::", error)
//     }
// }

// scrapeTeams() 