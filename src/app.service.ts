import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer';

@Injectable()
export class AppService {
  async getHello() {
    const browser = await puppeteer.launch({headless: false, args: ['--no-sandbox']})
    const page = await browser.newPage()

    await page.goto("http://google.com")

    await setTimeout(() => {
      
    }, 5000);

    await page.goto("https://www.youtube.com/watch?v=N2DglZjKvBU&ab_channel=bayabas")

    await setTimeout(() => {
      
    }, 5000);

    console.log("teste")
    await browser.close()

    return 'Hello World!';
  }
}
