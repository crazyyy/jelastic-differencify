const Differencify = require('differencify');
const differencify = new Differencify({ imageSnapshotPath: './test_path' });

const sitemap = [
  "https://test-site.jelastic.com",
/*  "https://test-site.jelastic.com/new-main-page-from-10-01-2019/",
  "https://test-site.jelastic.com/whitepapers/saas-enablement-jahia-cms-multi-cloud-paas/",
  "https://test-site.jelastic.com/whitepapers/high-performing-php-cloud-hosting-for-digital-agencies/",
  "https://test-site.jelastic.com/load-balancing/",
  "https://test-site.jelastic.com/request-functionality/", */
  "https://test-site.jelastic.com/software-defined-storage",
  "https://test-site.jelastic.com/enterprise-paas",
  "https://test-site.jelastic.com/contact-support"
]

const viewports = [
  { width: 1920, height: 1080 },
/*  { width: 1400, height: 900 }, */
 /* { width: 1366, height: 768 },
  { width: 720, height: 1280 },
  { width: 414, height: 736 },*/
  { width: 360, height: 640 }
]

async function readFiles(sitemap, viewports) {

  for (var j = 0; j < viewports.length; j++){

    const viewport = viewports[j];

    for(const siteurl of sitemap) {

      const name = siteurl.substr(siteurl.lastIndexOf('/') + 1);
      const testname = name+'-'+viewport.width;

      console.log(siteurl)
      console.log(viewport.width)
      console.log(testname)

      const target = differencify.init({ testName: testname, chain: false });
      await target.launch();
      const page = await target.newPage();

      await page.on('error', error => {
        console.error('Chromium Tab CRASHED', error);
        browser.close();
      });
      await page.goto(siteurl, {
        timeout: 3000000
      });
      await page.setViewport({ width: viewport.width, height: viewport.height });

      const setHeight = await page.evaluate((viewport) => {
        const newHeight = viewport.height + 'px';
        let selection = document.querySelector('.header-block') !== null;
        let selection_second = document.querySelector('.parallax__group') !== null;
        if (selection) {
          document.querySelector('.header-block').style.height = newHeight;
        }
        if (selection_second) {
          document.querySelector('.parallax__group').style.height = newHeight;
        }
      }, viewport);

      await page.waitFor(5000);
      const image = await page.screenshot({fullPage: true});

      await target.toMatchSnapshot(image, (resultDetail) => {
        console.log(resultDetail);
      });

      await page.close();
      await target.close();
      await differencify.cleanup();

    }
  }
}

readFiles(sitemap, viewports);