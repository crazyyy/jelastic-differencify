const Differencify = require('differencify');
const differencify = new Differencify();


(async () => {
  const result = await differencify
    .init({ chain: false })
    .launch()
    .newPage()
    .setViewport({ width: 1600, height: 1200 })
    .on('error', error => logger.error('Chromium Tab CRASHED', error))
    .goto(siteurl, {
      timeout: 3000000
    })
    .waitFor(5000)
    .evaluate(() => {
      let selection = document.querySelector('.header-block') !== null;
      if (selection) {
        document.querySelector('.header-block').style.height = '1200px';
      }
      let selection_second = document.querySelector('.parallax__group') !== null;
      if (selection_second) {
        document.querySelector('.parallax__group').style.height = '1200px';
      }
    })
    .screenshot({fullPage: true})
    .toMatchSnapshot()
    .result((result) => {
      console.log(result);
    })
    .close()
    .end()
    .cleanup();
})();
