const Differencify = require('differencify');
const differencify = new Differencify({ imageSnapshotPath: './test_path' });

const sitemap = [
  "https://test-site.jelastic.com",
  "https://test-site.jelastic.com/new-main-page-from-10-01-2019",
  "https://test-site.jelastic.com/whitepapers/saas-enablement-jahia-cms-multi-cloud-paas",
  "https://test-site.jelastic.com/whitepapers/high-performing-php-cloud-hosting-for-digital-agencies",
  "https://test-site.jelastic.com/load-balancing",
  "https://test-site.jelastic.com/request-functionality",
  "https://test-site.jelastic.com/software-defined-storage",
  "https://test-site.jelastic.com/enterprise-paas",
  "https://test-site.jelastic.com/contact-support",
  "https://test-site.jelastic.com/whitepapers/jelastic-multi-cloud-paas-overview",
  "https://test-site.jelastic.com/cloud-business-for-hosting-providers",
  "https://test-site.jelastic.com/about/partners",
  "https://test-site.jelastic.com/about/investors",
  "https://test-site.jelastic.com/whitepapers/cloud-startup-path-to-business-success",
  "https://test-site.jelastic.com/thank-you-get-your-guide",
  "https://test-site.jelastic.com/thank-you-get-your-guide-2",
  "https://test-site.jelastic.com/thank-you-download-your-guide",
  "https://test-site.jelastic.com/azure-private-cloud",
  "https://test-site.jelastic.com/multi-cloud-devops-paas",
  "https://test-site.jelastic.com/policy",
  "https://test-site.jelastic.com/gdpr-compliance",
  "https://test-site.jelastic.com/manage-personal-data",
  "https://test-site.jelastic.com/public-cloud-pricing",
  "https://test-site.jelastic.com/whitepapers/scalable-cloud-for-blockchain-startups-tokenstate-usecase",
  "https://test-site.jelastic.com/contact",
  "https://test-site.jelastic.com/java-cloud-hosting",
  "https://test-site.jelastic.com/cloud-platform-for-hosting-providers",
  "https://test-site.jelastic.com/about/company",
  "https://test-site.jelastic.com/paas-cloud-hosting",
  "https://test-site.jelastic.com/whitepapers",
  "https://test-site.jelastic.com/about/events",
  "https://test-site.jelastic.com/whitepapers/handle-huge-traffic-peaks-swiss-blackfriday-hidora-usecase",
  "https://test-site.jelastic.com/whitepapers/choosing-paas-instead-of-dedicated-servers-cargopooling-use-case",
  "https://test-site.jelastic.com/whitepapers/paas-beat-dedicated-servers-shiply-use-case",
  "https://test-site.jelastic.com/whitepapers/brazilian-private-paas-on-maxihost-infrastructure",
  "https://test-site.jelastic.com/pricing",
  "https://test-site.jelastic.com/apaas",
  "https://test-site.jelastic.com/whitepapers/scalability-and-easy-management-of-java-ee-hybrid-cloud-for-miele",
  "https://test-site.jelastic.com/public-cloud-registration",
  "https://test-site.jelastic.com/managed-auto-scalable-clusters-for-business",
  "https://test-site.jelastic.com/whitepapers/accelerated-time-to-market-for-bytebrand-software-products-flexibility-of-paas-and-minimum-devops-forces",
  "https://test-site.jelastic.com/docker",
  "https://test-site.jelastic.com/whitepapers/hives-choice-cloud-platform-proven-time",
  "https://test-site.jelastic.com/whitepapers/paas-servers-whmcs-billing-turnkey-appliance-for-service-providers",
  "https://test-site.jelastic.com/jelastic-partners-portal",
  "https://test-site.jelastic.com/whitepapers/multi-cloud-availability-for-financial-organizations",
  "https://test-site.jelastic.com/whitepapers/cost-reduction-strategies-for-java-cloud-hosting",
  "https://test-site.jelastic.com/whitepapers/scaling-java-vertically-vms-vs-containers",
  "https://test-site.jelastic.com/whitepapers/dzone-guide-to-java-development-and-evolution",
  "https://test-site.jelastic.com/whitepapers/hosting-provider-elastx-cloud-services-from-sweden",
  "https://test-site.jelastic.com/whitepapers/hosting-provider-eapps-cloud-services-from-the-usa",
  "https://test-site.jelastic.com/whitepapers/hosting-provider-layershift-multi-cloud-services",
  "https://test-site.jelastic.com/whitepapers/hosting-provider-datacenter-finland-cloud-services",
  "https://test-site.jelastic.com/whitepapers/hosting-provider-hidora-flex-cloud-from-switzerland",
  "https://test-site.jelastic.com/whitepapers/hosting-provider-p4d-safozi-cloud-africa-middle-east",
  "https://test-site.jelastic.com/whitepapers/hosting-provider-trendhosting-from-switzerland",
  "https://test-site.jelastic.com/whitepapers/high-margin-cloud-hosting-business",
  "https://test-site.jelastic.com/whitepapers/jelastic-private-paas-on-google-cloud-platform",
  "https://test-site.jelastic.com/whitepapers/cloud-hosting-platform-for-developers",
  "https://test-site.jelastic.com/whitepapers/cloud-business-for-hosting-providers",
  "https://test-site.jelastic.com/whitepapers/the-step-by-step-guide-part-i-increase-conversion-and-reduce-bounce-rate-for-hosters",
  "https://test-site.jelastic.com/whitepapers/hosting-business-on-platform-as-infrastructure",
  "https://test-site.jelastic.com/whitepapers/cloud-platform-for-hosting-business",
  "https://test-site.jelastic.com/whitepapers/the-step-by-step-guide-part-ii-convert-trial-users-into-paying-customers-for-service-providers",
  "https://test-site.jelastic.com/whitepapers/jelastic-complex-organism-in-simple-words",
  "https://test-site.jelastic.com/whitepapers/migration-from-vms-to-containers",
  "https://test-site.jelastic.com/whitepapers/unlimited-paas-and-container-based-iaas",
  "https://test-site.jelastic.com/whitepapers/automated-traffic-distribution-for-blue-green-update-zero-downtime-updates-and-failover-protection",
  "https://test-site.jelastic.com/whitepapers/docker-integration-to-provide-advanced-application-delivery",
  "https://test-site.jelastic.com/whitepapers/container-live-migration-behind-scenes-guide",
  "https://test-site.jelastic.com/whitepapers/containers-for-java-developers",
  "https://test-site.jelastic.com/whitepapers/jelastic-for-enterprise-private-clouds",
  "https://test-site.jelastic.com/whitepapers/private-cloud-for-isvs-and-enterprises",
  "https://test-site.jelastic.com/whitepapers/devops-trends-and-forecast-2016-2017",
  "https://test-site.jelastic.com/whitepapers/451-research-jelastic-eyes-opportunity-in-converged-iaas-and-paas",
  "https://test-site.jelastic.com/whitepapers/idc-vendor-profile-jelastic-private-cloud-paas-gains-momentum-with-hosters",
  "https://test-site.jelastic.com/whitepapers/dzone-the-evolution-and-adoption-of-cloud-development",
  "https://test-site.jelastic.com/whitepapers/451-research-jelastic-shows-service-providers-how-to-monetize-container-as-a-service-offerings-2",
  "https://test-site.jelastic.com/whitepapers/eapps-hosting-with-jelastic-on-packet-infrastructure-case-study",
  "https://test-site.jelastic.com/whitepapers/public-cloud-bandtrace-saves-30-thanks-to-elastxs-fixed-prices",
  "https://test-site.jelastic.com/whitepapers/hosting-provider-elastx-platform-as-a-service-paas-massive-io-performance",
  "https://test-site.jelastic.com/whitepapers/hosting-provider-servint-paas-offering-based-on-virtuozzo-containers-and-jelastic-takes-off-like-a-rocket",
  "https://test-site.jelastic.com/whitepapers/hosting-provider-dogado-increases-cloud-market-share-with-jelastic-platform-on-dell-vrtx-servers",
  "https://test-site.jelastic.com/whitepapers/trump-card-devops-deck",
  "https://test-site.jelastic.com/whitepapers/jelastic-public-cloud-based-on-profitbricks",
  "https://test-site.jelastic.com/whitepapers/jelastic-public-cloud-based-on-packet",
  "https://test-site.jelastic.com/best-practice-of-handling-trial-users",
  "https://test-site.jelastic.com/install-application",
  "https://test-site.jelastic.com/get-conversion-rate-optimization-guide",
  "https://test-site.jelastic.com/enterprise-cloud-request",
  "https://test-site.jelastic.com/terms",
  "https://test-site.jelastic.com/about",
  "https://test-site.jelastic.com/project-type/analytics-reviews-market-trends",
  "https://test-site.jelastic.com/project-type/cloud-appliance-for-hosting-providers",
  "https://test-site.jelastic.com/project-type/for-developer",
  "https://test-site.jelastic.com/project-type/for-hosting-providers",
  "https://test-site.jelastic.com/project-type/for-private-cloud",
  "https://test-site.jelastic.com/project-type/private-cloud-or-vpc-appliance",
  "https://test-site.jelastic.com/project-type/use-cases-of-hosting-providers",
  "https://test-site.jelastic.com/project-type/use-cases-of-public-and-private-cloud-customers",
  "https://test-site.jelastic.com/?s=.",
  "https://test-site.jelastic.com/?s=asdfasdfasdfasdf",
  "https://test-site.jelastic.com/asdfasdfasdfasdf"
]

const viewports = [
  /*{ width: 1920, height: 1080 },
  { width: 1400, height: 900 },
  { width: 1366, height: 768 },
  { width: 720, height: 1280 },*/
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