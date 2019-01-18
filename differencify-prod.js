const Differencify = require('differencify');
const differencify = new Differencify({ imageSnapshotPath: './test_path' });

const sitemap = [
  "https://jelastic.com",
  "https://jelastic.com/new-main-page-from-10-01-2019",
  "https://jelastic.com/whitepapers/saas-enablement-jahia-cms-multi-cloud-paas",
  "https://jelastic.com/whitepapers/high-performing-php-cloud-hosting-for-digital-agencies",
  "https://jelastic.com/load-balancing",
  "https://jelastic.com/request-functionality",
  "https://jelastic.com/software-defined-storage",
  "https://jelastic.com/enterprise-paas",
  "https://jelastic.com/contact-support",
  "https://jelastic.com/whitepapers/jelastic-multi-cloud-paas-overview",
  "https://jelastic.com/cloud-business-for-hosting-providers",
  "https://jelastic.com/about/partners",
  "https://jelastic.com/about/investors",
  "https://jelastic.com/whitepapers/cloud-startup-path-to-business-success",
  "https://jelastic.com/thank-you-get-your-guide",
  "https://jelastic.com/thank-you-get-your-guide-2",
  "https://jelastic.com/thank-you-download-your-guide",
  "https://jelastic.com/azure-private-cloud",
  "https://jelastic.com/multi-cloud-devops-paas",
  "https://jelastic.com/policy",
  "https://jelastic.com/gdpr-compliance",
  "https://jelastic.com/manage-personal-data",
  "https://jelastic.com/public-cloud-pricing",
  "https://jelastic.com/whitepapers/scalable-cloud-for-blockchain-startups-tokenstate-usecase",
  "https://jelastic.com/contact",
  "https://jelastic.com/java-cloud-hosting",
  "https://jelastic.com/cloud-platform-for-hosting-providers",
  "https://jelastic.com/about/company",
  "https://jelastic.com/paas-cloud-hosting",
  "https://jelastic.com/whitepapers",
  "https://jelastic.com/about/events",
  "https://jelastic.com/whitepapers/handle-huge-traffic-peaks-swiss-blackfriday-hidora-usecase",
  "https://jelastic.com/whitepapers/choosing-paas-instead-of-dedicated-servers-cargopooling-use-case",
  "https://jelastic.com/whitepapers/paas-beat-dedicated-servers-shiply-use-case",
  "https://jelastic.com/whitepapers/brazilian-private-paas-on-maxihost-infrastructure",
  "https://jelastic.com/pricing",
  "https://jelastic.com/apaas",
  "https://jelastic.com/whitepapers/scalability-and-easy-management-of-java-ee-hybrid-cloud-for-miele",
  "https://jelastic.com/public-cloud-registration",
  "https://jelastic.com/managed-auto-scalable-clusters-for-business",
  "https://jelastic.com/whitepapers/accelerated-time-to-market-for-bytebrand-software-products-flexibility-of-paas-and-minimum-devops-forces",
  "https://jelastic.com/docker",
  "https://jelastic.com/whitepapers/hives-choice-cloud-platform-proven-time",
  "https://jelastic.com/whitepapers/paas-servers-whmcs-billing-turnkey-appliance-for-service-providers",
  "https://jelastic.com/jelastic-partners-portal",
  "https://jelastic.com/whitepapers/multi-cloud-availability-for-financial-organizations",
  "https://jelastic.com/whitepapers/cost-reduction-strategies-for-java-cloud-hosting",
  "https://jelastic.com/whitepapers/scaling-java-vertically-vms-vs-containers",
  "https://jelastic.com/whitepapers/dzone-guide-to-java-development-and-evolution",
  "https://jelastic.com/whitepapers/hosting-provider-elastx-cloud-services-from-sweden",
  "https://jelastic.com/whitepapers/hosting-provider-eapps-cloud-services-from-the-usa",
  "https://jelastic.com/whitepapers/hosting-provider-layershift-multi-cloud-services",
  "https://jelastic.com/whitepapers/hosting-provider-datacenter-finland-cloud-services",
  "https://jelastic.com/whitepapers/hosting-provider-hidora-flex-cloud-from-switzerland",
  "https://jelastic.com/whitepapers/hosting-provider-p4d-safozi-cloud-africa-middle-east",
  "https://jelastic.com/whitepapers/hosting-provider-trendhosting-from-switzerland",
  "https://jelastic.com/whitepapers/high-margin-cloud-hosting-business",
  "https://jelastic.com/whitepapers/jelastic-private-paas-on-google-cloud-platform",
  "https://jelastic.com/whitepapers/cloud-hosting-platform-for-developers",
  "https://jelastic.com/whitepapers/cloud-business-for-hosting-providers",
  "https://jelastic.com/whitepapers/the-step-by-step-guide-part-i-increase-conversion-and-reduce-bounce-rate-for-hosters",
  "https://jelastic.com/whitepapers/hosting-business-on-platform-as-infrastructure",
  "https://jelastic.com/whitepapers/cloud-platform-for-hosting-business",
  "https://jelastic.com/whitepapers/the-step-by-step-guide-part-ii-convert-trial-users-into-paying-customers-for-service-providers",
  "https://jelastic.com/whitepapers/jelastic-complex-organism-in-simple-words",
  "https://jelastic.com/whitepapers/migration-from-vms-to-containers",
  "https://jelastic.com/whitepapers/unlimited-paas-and-container-based-iaas",
  "https://jelastic.com/whitepapers/automated-traffic-distribution-for-blue-green-update-zero-downtime-updates-and-failover-protection",
  "https://jelastic.com/whitepapers/docker-integration-to-provide-advanced-application-delivery",
  "https://jelastic.com/whitepapers/container-live-migration-behind-scenes-guide",
  "https://jelastic.com/whitepapers/containers-for-java-developers",
  "https://jelastic.com/whitepapers/jelastic-for-enterprise-private-clouds",
  "https://jelastic.com/whitepapers/private-cloud-for-isvs-and-enterprises",
  "https://jelastic.com/whitepapers/devops-trends-and-forecast-2016-2017",
  "https://jelastic.com/whitepapers/451-research-jelastic-eyes-opportunity-in-converged-iaas-and-paas",
  "https://jelastic.com/whitepapers/idc-vendor-profile-jelastic-private-cloud-paas-gains-momentum-with-hosters",
  "https://jelastic.com/whitepapers/dzone-the-evolution-and-adoption-of-cloud-development",
  "https://jelastic.com/whitepapers/451-research-jelastic-shows-service-providers-how-to-monetize-container-as-a-service-offerings-2",
  "https://jelastic.com/whitepapers/eapps-hosting-with-jelastic-on-packet-infrastructure-case-study",
  "https://jelastic.com/whitepapers/public-cloud-bandtrace-saves-30-thanks-to-elastxs-fixed-prices",
  "https://jelastic.com/whitepapers/hosting-provider-elastx-platform-as-a-service-paas-massive-io-performance",
  "https://jelastic.com/whitepapers/hosting-provider-servint-paas-offering-based-on-virtuozzo-containers-and-jelastic-takes-off-like-a-rocket",
  "https://jelastic.com/whitepapers/hosting-provider-dogado-increases-cloud-market-share-with-jelastic-platform-on-dell-vrtx-servers",
  "https://jelastic.com/whitepapers/trump-card-devops-deck",
  "https://jelastic.com/whitepapers/jelastic-public-cloud-based-on-profitbricks",
  "https://jelastic.com/whitepapers/jelastic-public-cloud-based-on-packet",
  "https://jelastic.com/best-practice-of-handling-trial-users",
  "https://jelastic.com/install-application",
  "https://jelastic.com/get-conversion-rate-optimization-guide",
  "https://jelastic.com/enterprise-cloud-request",
  "https://jelastic.com/terms",
  "https://jelastic.com/about",
  "https://jelastic.com/project-type/analytics-reviews-market-trends",
  "https://jelastic.com/project-type/cloud-appliance-for-hosting-providers",
  "https://jelastic.com/project-type/for-developer",
  "https://jelastic.com/project-type/for-hosting-providers",
  "https://jelastic.com/project-type/for-private-cloud",
  "https://jelastic.com/project-type/private-cloud-or-vpc-appliance",
  "https://jelastic.com/project-type/use-cases-of-hosting-providers",
  "https://jelastic.com/project-type/use-cases-of-public-and-private-cloud-customers",
  "https://jelastic.com/?s=.",
  "https://jelastic.com/?s=asdfasdfasdfasdf",
  "https://jelastic.com/asdfasdfasdfasdf"
]

const viewports = [
  { width: 1920, height: 1080 },
  { width: 1400, height: 900 },
  { width: 1366, height: 768 },
  { width: 720, height: 1280 },
  { width: 414, height: 736 },
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

      process.on('unhandledRejection', (reason, p) => {
        console.error('Unhandled Rejection at: Promise', p, 'reason:', reason);
        page.close();
      });

      await page.on('error', error => {
        console.error('Chromium Tab CRASHED', error);
        page.close();
      });
      await page.goto(siteurl, { waitUntil: 'domcontentloaded' });
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

      const output = await page.evaluate(() => {
          return;
      });

      await page.close();
      await target.close();
      await differencify.cleanup();

    }
  }
}

readFiles(sitemap, viewports);