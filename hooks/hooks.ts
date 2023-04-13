import { After, AfterAll, AfterStep, Before, BeforeAll, Status } from "@cucumber/cucumber";
import { Page, Browser, chromium, BrowserContext } from "@playwright/test";
import { pageFixture } from "./pageFixture";

let page: Page
let browser: Browser
let context: BrowserContext

BeforeAll(async function () {

    browser = await chromium.launch({ headless: false });

});

Before(async function () {
    context = await browser.newContext();
    page = await context.newPage();
    pageFixture.page = page;
});

AfterStep(async function ({ pickle, result }) {
    if (result?.status == Status.FAILED) {
        const img = await pageFixture.page.screenshot({
            path:
                "./test-report/snapshots/" + pickle.name, type: "png"
        });
        await this.attach(img, "image/png");
    }
})

After(async function () {
    await pageFixture.page.close()
    await context.close()
});

AfterAll(async function () {
    await browser.close()
});