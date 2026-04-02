import puppetteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(35000); // default puppeteer timeout

describe('Форма popover', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:8080';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppetteer.launch({
      headless: false, // show gui
      slowMo: 100
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test('должен проверить открытие окна popover', async () => {
    await page.goto(baseUrl);
    const btn = await page.$('button[class=button]');
    btn.click();
    await page.waitForSelector('div.tooltip__content');
  });
});
