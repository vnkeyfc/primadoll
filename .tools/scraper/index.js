import scrape from 'website-scraper';
import PuppeteerPlugin from './puppeteerLib/index.js';

async function scrapSite(urls, outDir, depth=1, filter=undefined) {
    const options = {
        urls: urls,
        directory: outDir,
        request: {
            headers: {
              'User-Agent': 
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'
            }
        },
        filenameGenerator: 'bySiteStructure',
        recursive: true,
        maxRecursiveDepth: depth,
        urlFilter: filter,
        plugins: [ 
          new PuppeteerPlugin({
            launchOptions: { headless: true }, /* optional */
            scrollToBottom: { timeout: 10000, viewportN: 10 }, /* optional */
            blockNavigation: true, /* optional */
          }),
        ]
      };

    await scrape(options);
}

function filterUrl(urlSrc, urlFilter) {
    if(urlFilter){
        return urlSrc.indexOf(urlFilter) === 0;
    }

    return true;
}

const app = async (argv) =>{
    // console.log(argv);
    // argv = ["https://www.google.com/", "out", "https://www.google.com/"];

    if (argv.length < 2){
        console.log('argv: <url> <out_dir> <url_filter>? <depth>?');
        return false;
    }
    else{
        var urls = [argv[0]];
        var outDir = argv[1];
        var urlFilter = argv.length > 2 ? argv[2] : false;
        var depth = argv.length > 3 ? (argv[3] & 15) : 1;  // depth max = 15

        if(depth == 0){
            depth = 1;
        }

        console.log('url: ', urls[0]);
        console.log('depth: ', depth);
        console.log('url filter: ', urlFilter);
        console.log('output: ', outDir);
        console.log('Scraping...');
    
        await scrapSite(urls, outDir, depth, 
        (urlSrc) =>{
            return filterUrl(urlSrc, urlFilter)
        });

        return true;
    }
}

app(process.argv.slice(2)).then(
    (res) =>{
        res && console.log('Done!');
    },
    (err) =>{
        console.error(err);
    }
)