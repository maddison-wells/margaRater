import puppeteer from "puppeteer";

const url =
  "https://www.liquorland.com.au/spirits/cointreau-liqueur-700ml_5982342#fromsearch=true";

const main = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle0" });
  await page.waitForSelector(".dollarAmount", {
    visible: true,
  });
  const prices = await page.evaluate(() => {
    const priceElements = document.querySelectorAll(".dollarAmount");
    const pricesArray = Array.from(priceElements).map(
      (element) => element.innerText
    );
    return pricesArray;
  });

  console.log(pricesArray);

  await browser.close();
};

main();
