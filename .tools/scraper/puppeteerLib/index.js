import path from 'path';
import fs from 'fs-extra';
import puppeteer from 'puppeteer';
import logger from './logger.js';
import scrollToBottomBrowser from './browserUtils/scrollToBottom.js';

class PuppeteerPlugin {
	constructor ({
		launchOptions = {},
		scrollToBottom = null,
		blockNavigation = false,
		maxPages = 5
	} = {}) {
		this.launchOptions = launchOptions;
		this.scrollToBottom = scrollToBottom;
		this.blockNavigation = blockNavigation;
		this.browser = null;
		this.urls = [];
		this.headers = {};
		this.absoluteDirectoryPath = null;
		this.loadedResources = [];
		this.pagesCount = [];
		this.maxPages = maxPages;

		logger.info('init plugin', { launchOptions, scrollToBottom, blockNavigation });
	}

	apply (registerAction) {
		registerAction('beforeStart', async ({options, utils}) => {
			this.browser = await puppeteer.launch(this.launchOptions);

			options.urls.forEach(({url, filename}) => {
				this.urls.push(url);
			});

			if (!options.directory || typeof options.directory !== 'string') {
				throw new Error(`Incorrect directory ${options.directory}`);
			}

			this.absoluteDirectoryPath = path.resolve(process.cwd(), options.directory);
		});

		registerAction('beforeRequest', async ({resource, requestOptions}) => {
			if (hasValues(requestOptions.headers)) {
				this.headers = Object.assign({}, requestOptions.headers);
			}

			return {requestOptions};
		});

		registerAction('afterResponse', async ({response}) => {
			const contentType = response.headers['content-type'];
			const isHtml = contentType && contentType.split(';')[0] === 'text/html';
			
			const url = response.request.requestUrl.href;
			// console.log("url: ", url);
			if (isHtml && url) {
				await limitPageCount(this.pagesCount, this.maxPages);
				this.pagesCount.push(1);

				const page = await this.browser.newPage();

				if (hasValues(this.headers)) {
					logger.info('set headers to puppeteer page', this.headers);
					await page.setExtraHTTPHeaders(this.headers);
				}

				if (this.blockNavigation) {
					await blockNavigation(page, url);
				}
				
				await page.goto(url);

				if (this.scrollToBottom) {
					await scrollToBottom(page, this.scrollToBottom.timeout, this.scrollToBottom.viewportN);
				}

				const content = await page.content();
				await page.close();
				this.pagesCount.pop();

				// convert utf-8 -> binary string because website-scraper needs binary
				return Buffer.from(content).toString('binary');
			} else {
				return response.body;
			}
		});

		registerAction('saveResource', async ({resource}) => {
			const filename = path.join(this.absoluteDirectoryPath, resource.getFilename());
			const text = resource.getText();
            console.log("save file: ", filename);
			await fs.outputFile(filename, text, { encoding: resource.encoding });
			this.loadedResources.push(resource);
		});

		registerAction('afterFinish', () => this.browser && this.browser.close());
	}
}

function hasValues (obj) {
	return obj && Object.keys(obj).length > 0;
}

async function limitPageCount (pagesCount, maxPage) {
	if(pagesCount.length > maxPage){
		// console.log('Limit page: ', pagesCount.length);
		while (pagesCount.length > maxPage){
			await new Promise(r => setTimeout(r, 50)); // sleep 50 milliseconds
		}

		// console.log('Continue load page');
	}
}


async function scrollToBottom (page, timeout, viewportN) {
	logger.info(`scroll puppeteer page to bottom ${viewportN} times with timeout = ${timeout}`);

	await page.evaluate(scrollToBottomBrowser, timeout, viewportN);
}

async function blockNavigation (page, url) {
	logger.info(`block navigation for puppeteer page from url ${url}`);

	page.on('request', req => {
		if (req.isNavigationRequest() && req.frame() === page.mainFrame() && req.url() !== url) {
			req.abort('aborted');
		} else {
			req.continue();
		}
	});
	await page.setRequestInterception(true);
}

export default PuppeteerPlugin;
