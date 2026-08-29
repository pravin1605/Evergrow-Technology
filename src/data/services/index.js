import webDevelopment from "./webDevelopment";
import digitalMarketing from "./digitalMarketing";

import googleAds from "./googleAds";
import metaAds from "./metaAds";
import instagramMarketing from "./instagramMarketing";
import socialMediaMarketing from "./socialMediaMarketing";
import seo from "./seo";

import mobileApps from "./mobileApps";
import customSoftware from "./customSoftware";
import ecommerce from "./ecommerce";
import uiux from "./uiux";
import aiAutomation from "./aiAutomation";


// =====================================================
// ALL SERVICES
// =====================================================

const allServices = [

  webDevelopment,

  digitalMarketing,

  googleAds,
  metaAds,
  instagramMarketing,
  socialMediaMarketing,
  seo,

  mobileApps,
  customSoftware,
  ecommerce,
  uiux,
  aiAutomation,

];


// =====================================================
// PRIMARY SERVICES
// These appear on the main /services page
// =====================================================

const primaryServices = [

  webDevelopment,

  digitalMarketing,

  mobileApps,

  customSoftware,

  ecommerce,

  uiux,

  aiAutomation,

];


// =====================================================
// TECHNOLOGY SERVICES
// =====================================================

const technologyServices = [

  webDevelopment,

  mobileApps,

  customSoftware,

  ecommerce,

  uiux,

  aiAutomation,

];


// =====================================================
// GROWTH SERVICES
// =====================================================

const growthServices = [

  digitalMarketing,

  googleAds,

  metaAds,

  instagramMarketing,

  socialMediaMarketing,

  seo,

];


// =====================================================
// EXPORTS
// =====================================================

export {
  allServices,
  primaryServices,
  technologyServices,
  growthServices,
};


// Default export
export default allServices;