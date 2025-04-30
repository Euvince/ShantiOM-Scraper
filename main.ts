import axios from 'axios';
import * as cheerio from 'cheerio';

axios.get('https://www.shanti.om/voyage-bien-etre-bali')
  .then(function (response) {
    // 1st step
    const html = response.data

    //2nd step
    const $ = cheerio.load(html);


    // 3nd step - parsing
    const outputs = {
        'authors': [],
        'quotes': [],
        'link': []
    }

    const author_cards = $('div[class="quote"]');
    author_cards.each((i, elem) => {
        // const author_name = $(elem).find('small[class="author"]').text()
        // const quote = $(elem).find('span[itemprop="text"]').text()
        // const link = $(elem).find('span a').attr('href')
        // console.log(author_name, quote, link)
        const authorItem = $(elem).extract({
            'authorName': 'small[class="author"]',
            "quote": 'span[itemprop="text"]',
            "link": {
                'selector': "span a",
                "value": "href"
            }
        })
        console.log(authorItem)
    })


  })

  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
  });