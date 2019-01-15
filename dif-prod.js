const Differencify = require('differencify');
const differencify = new Differencify({ imageSnapshotPath: './prod_path' });

(async () => {
  const target = differencify.init({ chain: false });
  await target.launch();
  const page = await target.newPage();

  await page.goto('https://jelastic.com/', {
    timeout: 3000000
  });
  await page.setViewport({ width: 1600, height: 1200 });
  await page.waitFor(5000);
  const image = await page.screenshot({path: 'home-1600.png', fullPage: true});
  // const image = await page.screenshot({fullPage: true});
  // const result = await target.toMatchSnapshot(image);
  await target.toMatchSnapshot(image, (resultDetail) => {
    console.log(resultDetail);
  });

  await page.goto('https://jelastic.com/', {
    timeout: 3000000
  });
  await page.setViewport({ width: 414, height: 736 });
  await page.waitFor(5000);
  const image11 = await page.screenshot({path: 'home-414.png', fullPage: true});
  // const image = await page.screenshot({fullPage: true});
  // const result = await target.toMatchSnapshot(image);
  await target.toMatchSnapshot(image11, (resultDetail) => {
    console.log(resultDetail);
  });

  await page.goto('https://jelastic.com/', {
    timeout: 3000000
  });
  await page.setViewport({ width: 375, height: 667 });
  await page.waitFor(5000);
  const image12 = await page.screenshot({path: 'home-375.png', fullPage: true});
  // const image = await page.screenshot({fullPage: true});
  // const result = await target.toMatchSnapshot(image);
  await target.toMatchSnapshot(image12, (resultDetail) => {
    console.log(resultDetail);
  });

  await page.goto('https://jelastic.com/paas-cloud-hosting/', {
    timeout: 3000000
  });
  await page.setViewport({ width: 1600, height: 1200 });
  await page.waitFor(5000);
  const image2 = await page.screenshot({path: 'paas-cloud-hosting.png', fullPage: true});
  // const result = await target.toMatchSnapshot(image);
  await target.toMatchSnapshot(image2, (resultDetail) => {
    console.log(resultDetail);
  });

  await page.goto('https://jelastic.com/enterprise-paas/', {
    timeout: 3000000
  });
  await page.setViewport({ width: 1600, height: 1200 });
  await page.waitFor(5000);
  const image3 = await page.screenshot({path: 'enterprise-paas.png', fullPage: true});
  // const result2 = await target.toMatchSnapshot(image2);
  await target.toMatchSnapshot(image3, (resultDetail) => {
    console.log(resultDetail);
  });

  await page.goto('https://jelastic.com/whitepapers/', {
    timeout: 3000000
  });
  await page.setViewport({ width: 1600, height: 1200 });
  await page.waitFor(5000);
  const image4 = await page.screenshot({path: 'whitepapers.png', fullPage: true});
  // const result2 = await target.toMatchSnapshot(image2);
  await target.toMatchSnapshot(image4, (resultDetail) => {
    console.log(resultDetail);
  });

  await page.goto('https://jelastic.com/pricing/', {
    timeout: 3000000
  });
  await page.setViewport({ width: 1600, height: 1200 });
  await page.waitFor(5000);
  const image5 = await page.screenshot({path: 'pricing.png', fullPage: true});
  // const result2 = await target.toMatchSnapshot(image2);
  await target.toMatchSnapshot(image5, (resultDetail) => {
    console.log(resultDetail);
  });

  await page.goto('https://jelastic.com/software-defined-storage/', {
    timeout: 3000000
  });
  await page.setViewport({ width: 1600, height: 1200 });
  await page.waitFor(5000);
  const image6 = await page.screenshot({path: 'software-defined-storage.png', fullPage: true});
  // const result2 = await target.toMatchSnapshot(image2);
  await target.toMatchSnapshot(image6, (resultDetail) => {
    console.log(resultDetail);
  });

  await page.goto('https://jelastic.com/contact/', {
    timeout: 3000000
  });
  await page.setViewport({ width: 1600, height: 1200 });
  await page.waitFor(5000);
  const image7 = await page.screenshot({path: 'contact.png', fullPage: true});
  // const result2 = await target.toMatchSnapshot(image2);
  await target.toMatchSnapshot(image7, (resultDetail) => {
    console.log(resultDetail);
  });


  await page.close();
  await target.close();
  // console.log(result); // True or False
  // console.log(result2); // True or False
})();