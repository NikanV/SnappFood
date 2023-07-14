import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1699aff0 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _30a153f3 = () => interopDefault(import('../pages/application.vue' /* webpackChunkName: "pages/application" */))
const _4abe49a2 = () => interopDefault(import('../pages/calculator.vue' /* webpackChunkName: "pages/calculator" */))
const _75687d66 = () => interopDefault(import('../pages/changes.vue' /* webpackChunkName: "pages/changes" */))
const _bf3e99d0 = () => interopDefault(import('../pages/contact-us.vue' /* webpackChunkName: "" */))
const _596f6acb = () => interopDefault(import('../pages/current-prices.vue' /* webpackChunkName: "pages/current-prices" */))
const _36518ab5 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _2818c1b9 = () => interopDefault(import('../pages/faq.vue' /* webpackChunkName: "pages/faq" */))
const _63ec8b1e = () => interopDefault(import('../pages/features-history.vue' /* webpackChunkName: "pages/features-history" */))
const _2d743c1d = () => interopDefault(import('../pages/feedbacks-and-suggestions.vue' /* webpackChunkName: "pages/feedbacks-and-suggestions" */))
const _4e6ffa1e = () => interopDefault(import('../pages/forget-password.vue' /* webpackChunkName: "pages/forget-password" */))
const _40a559fc = () => interopDefault(import('../pages/forget-tfa.vue' /* webpackChunkName: "pages/forget-tfa" */))
const _5cfbc120 = () => interopDefault(import('../pages/giftcard/index.vue' /* webpackChunkName: "pages/giftcard/index" */))
const _492e5643 = () => interopDefault(import('../pages/jobs.vue' /* webpackChunkName: "pages/jobs" */))
const _361935be = () => interopDefault(import('../pages/liquidity-pool-terms.vue' /* webpackChunkName: "pages/liquidity-pool-terms" */))
const _000da468 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _53c28e96 = () => interopDefault(import('../pages/nobitex-introduction.vue' /* webpackChunkName: "pages/nobitex-introduction" */))
const _5f39002a = () => interopDefault(import('../pages/panel/index.vue' /* webpackChunkName: "pages/panel/index" */))
const _bcfdde3e = () => interopDefault(import('../pages/porsline.vue' /* webpackChunkName: "pages/porsline" */))
const _c6cde270 = () => interopDefault(import('../pages/position-help.vue' /* webpackChunkName: "pages/position-help" */))
const _25b07910 = () => interopDefault(import('../pages/position-terms.vue' /* webpackChunkName: "pages/position-terms" */))
const _33d980e9 = () => interopDefault(import('../pages/pricing.vue' /* webpackChunkName: "pages/pricing" */))
const _f34e70ec = () => interopDefault(import('../pages/referral.vue' /* webpackChunkName: "pages/referral" */))
const _be6a78f4 = () => interopDefault(import('../pages/reset-password.vue' /* webpackChunkName: "pages/reset-password" */))
const _71140a70 = () => interopDefault(import('../pages/security/index.vue' /* webpackChunkName: "pages/security/index" */))
const _4b8678c5 = () => interopDefault(import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */))
const _56477f9e = () => interopDefault(import('../pages/help/giftcard.vue' /* webpackChunkName: "pages/help/giftcard" */))
const _04089040 = () => interopDefault(import('../pages/news/tfa.vue' /* webpackChunkName: "pages/news/tfa" */))
const _2008de92 = () => interopDefault(import('../pages/panel/balance/index.vue' /* webpackChunkName: "pages/panel/balance/index" */))
const _c8884264 = () => interopDefault(import('../pages/panel/convert/index.vue' /* webpackChunkName: "pages/panel/convert/index" */))
const _42f8abb2 = () => interopDefault(import('../pages/panel/liquidity-pool/index.vue' /* webpackChunkName: "pages/panel/liquidity-pool/index" */))
const _55d168d5 = () => interopDefault(import('../pages/panel/market-order.vue' /* webpackChunkName: "pages/panel/market-order" */))
const _315b48ae = () => interopDefault(import('../pages/panel/nobitex-facility.vue' /* webpackChunkName: "pages/panel/nobitex-facility" */))
const _24b25cc0 = () => interopDefault(import('../pages/panel/portfolio.vue' /* webpackChunkName: "pages/panel/portfolio" */))
const _07d3d022 = () => interopDefault(import('../pages/panel/prices.vue' /* webpackChunkName: "pages/panel/prices" */))
const _678c4f44 = () => interopDefault(import('../pages/panel/profile/index.vue' /* webpackChunkName: "pages/panel/profile/index" */))
const _3577a7d5 = () => interopDefault(import('../pages/panel/stake/index.vue' /* webpackChunkName: "pages/panel/stake/index" */))
const _69a422b1 = () => interopDefault(import('../pages/panel/ticketing/index.vue' /* webpackChunkName: "pages/panel/ticketing/index" */))
const _2b7e0b1e = () => interopDefault(import('../pages/panel/under-development.vue' /* webpackChunkName: "pages/panel/under-development" */))
const _43f491b6 = () => interopDefault(import('../pages/panel/verification/index.vue' /* webpackChunkName: "pages/panel/verification/index" */))
const _4ded80f2 = () => interopDefault(import('../pages/panel/yield-farming/index.vue' /* webpackChunkName: "pages/panel/yield-farming/index" */))
const _350a5936 = () => interopDefault(import('../pages/policies/markets.vue' /* webpackChunkName: "pages/policies/markets" */))
const _2d07b2b6 = () => interopDefault(import('../pages/policies/privacy.vue' /* webpackChunkName: "pages/policies/privacy" */))
const _181349df = () => interopDefault(import('../pages/policies/referral.vue' /* webpackChunkName: "pages/policies/referral" */))
const _7f12eeb5 = () => interopDefault(import('../pages/policies/terms.vue' /* webpackChunkName: "pages/policies/terms" */))
const _7462e394 = () => interopDefault(import('../pages/policies/trader-plan.vue' /* webpackChunkName: "pages/policies/trader-plan" */))
const _5a8aa15f = () => interopDefault(import('../pages/policies/user-levels.vue' /* webpackChunkName: "pages/policies/user-levels" */))
const _cd17b2ea = () => interopDefault(import('../pages/product/portfolio.vue' /* webpackChunkName: "pages/product/portfolio" */))
const _e4c26450 = () => interopDefault(import('../pages/panel/balance/convert.vue' /* webpackChunkName: "pages/panel/balance/convert" */))
const _7b614f96 = () => interopDefault(import('../pages/panel/balance/transfer.vue' /* webpackChunkName: "pages/panel/balance/transfer" */))
const _bfc93ee0 = () => interopDefault(import('../pages/panel/convert/history.vue' /* webpackChunkName: "pages/panel/convert/history" */))
const _11703104 = () => interopDefault(import('../pages/panel/deposit/id.vue' /* webpackChunkName: "pages/panel/deposit/id" */))
const _4a03206e = () => interopDefault(import('../pages/panel/profile/beta.vue' /* webpackChunkName: "pages/panel/profile/beta" */))
const _11581cc4 = () => interopDefault(import('../pages/panel/profile/discounts.vue' /* webpackChunkName: "pages/panel/profile/discounts" */))
const _31c92df4 = () => interopDefault(import('../pages/panel/profile/phone-number.vue' /* webpackChunkName: "pages/panel/profile/phone-number" */))
const _160b74dc = () => interopDefault(import('../pages/panel/profile/plans.vue' /* webpackChunkName: "pages/panel/profile/plans" */))
const _9e88127e = () => interopDefault(import('../pages/panel/profile/security/index.vue' /* webpackChunkName: "pages/panel/profile/security/index" */))
const _100d1221 = () => interopDefault(import('../pages/panel/profile/settings.vue' /* webpackChunkName: "pages/panel/profile/settings" */))
const _1ad703a6 = () => interopDefault(import('../pages/panel/ticketing/create.vue' /* webpackChunkName: "pages/panel/ticketing/create" */))
const _ddf08bfa = () => interopDefault(import('../pages/panel/verification/bank-info.vue' /* webpackChunkName: "pages/panel/verification/bank-info" */))
const _0fcfd2f2 = () => interopDefault(import('../pages/panel/verification/contact-info.vue' /* webpackChunkName: "pages/panel/verification/contact-info" */))
const _1b0d8100 = () => interopDefault(import('../pages/panel/verification/email.vue' /* webpackChunkName: "pages/panel/verification/email" */))
const _05427bc1 = () => interopDefault(import('../pages/panel/verification/identity-info.vue' /* webpackChunkName: "pages/panel/verification/identity-info" */))
const _70de8f47 = () => interopDefault(import('../pages/panel/verification/landline-confirmation.vue' /* webpackChunkName: "pages/panel/verification/landline-confirmation" */))
const _097cb290 = () => interopDefault(import('../pages/panel/verification/mobile-number.vue' /* webpackChunkName: "pages/panel/verification/mobile-number" */))
const _275d1b98 = () => interopDefault(import('../pages/panel/verification/selfie.vue' /* webpackChunkName: "pages/panel/verification/selfie" */))
const _f1d32a2a = () => interopDefault(import('../pages/panel/verification/smart-verification.vue' /* webpackChunkName: "pages/panel/verification/smart-verification" */))
const _8bf455ce = () => interopDefault(import('../pages/product/android/3.1.vue' /* webpackChunkName: "pages/product/android/3.1" */))
const _8bd826cc = () => interopDefault(import('../pages/product/android/3.2.vue' /* webpackChunkName: "pages/product/android/3.2" */))
const _8bbbf7ca = () => interopDefault(import('../pages/product/android/3.3.vue' /* webpackChunkName: "pages/product/android/3.3" */))
const _8b8399c6 = () => interopDefault(import('../pages/product/android/3.5.vue' /* webpackChunkName: "pages/product/android/3.5" */))
const _48d51339 = () => interopDefault(import('../pages/security/wallets/cold-storage.vue' /* webpackChunkName: "pages/security/wallets/cold-storage" */))
const _5d8b52fa = () => interopDefault(import('../pages/panel/profile/security/address-book.vue' /* webpackChunkName: "pages/panel/profile/security/address-book" */))
const _40ecca47 = () => interopDefault(import('../pages/panel/profile/security/change-password.vue' /* webpackChunkName: "pages/panel/profile/security/change-password" */))
const _54897b6a = () => interopDefault(import('../pages/panel/profile/security/logins.vue' /* webpackChunkName: "pages/panel/profile/security/logins" */))
const _ee29b604 = () => interopDefault(import('../pages/panel/profile/security/sessions.vue' /* webpackChunkName: "pages/panel/profile/security/sessions" */))
const _5244c15e = () => interopDefault(import('../pages/panel/profile/security/tfa.vue' /* webpackChunkName: "pages/panel/profile/security/tfa" */))
const _11f9923a = () => interopDefault(import('../pages/panel/profile/bank-info/add/card-number.vue' /* webpackChunkName: "pages/panel/profile/bank-info/add/card-number" */))
const _3cc8eafa = () => interopDefault(import('../pages/panel/profile/bank-info/add/sheba-number.vue' /* webpackChunkName: "pages/panel/profile/bank-info/add/sheba-number" */))
const _eeefa5b8 = () => interopDefault(import('../pages/panel/balance/deposit/_currency.vue' /* webpackChunkName: "pages/panel/balance/deposit/_currency" */))
const _9718eed4 = () => interopDefault(import('../pages/panel/balance/withdraw/_currency.vue' /* webpackChunkName: "pages/panel/balance/withdraw/_currency" */))
const _8fbe1724 = () => interopDefault(import('../pages/panel/exchange/_exchange.vue' /* webpackChunkName: "" */))
const _791fd6d1 = () => interopDefault(import('../pages/panel/profile/bank-info/_activeBankInfo.vue' /* webpackChunkName: "pages/panel/profile/bank-info/_activeBankInfo" */))
const _7b6b9a9e = () => interopDefault(import('../pages/monthly-report/1401/_month.vue' /* webpackChunkName: "pages/monthly-report/1401/_month" */))
const _aabc5da6 = () => interopDefault(import('../pages/panel/balance/_tradeType/index.vue' /* webpackChunkName: "pages/panel/balance/_tradeType/index" */))
const _41420a6a = () => interopDefault(import('../pages/panel/liquidity-pool/_slug.vue' /* webpackChunkName: "pages/panel/liquidity-pool/_slug" */))
const _536813eb = () => interopDefault(import('../pages/panel/orders/_activeOrder.vue' /* webpackChunkName: "pages/panel/orders/_activeOrder" */))
const _3746dc3f = () => interopDefault(import('../pages/panel/price-alerts/_market.vue' /* webpackChunkName: "pages/panel/price-alerts/_market" */))
const _4f3ac79d = () => interopDefault(import('../pages/panel/profile/_messages.vue' /* webpackChunkName: "pages/panel/profile/_messages" */))
const _33c1068d = () => interopDefault(import('../pages/panel/stake/_slug.vue' /* webpackChunkName: "pages/panel/stake/_slug" */))
const _3d7117ca = () => interopDefault(import('../pages/panel/ticketing/_ticket.vue' /* webpackChunkName: "pages/panel/ticketing/_ticket" */))
const _2e2ba3b0 = () => interopDefault(import('../pages/panel/turnover/_activeTurnover.vue' /* webpackChunkName: "pages/panel/turnover/_activeTurnover" */))
const _515ac382 = () => interopDefault(import('../pages/panel/yield-farming/_slug.vue' /* webpackChunkName: "pages/panel/yield-farming/_slug" */))
const _2bfe345c = () => interopDefault(import('../pages/annual-report/_year.vue' /* webpackChunkName: "pages/annual-report/_year" */))
const _5a72fb43 = () => interopDefault(import('../pages/nobifi/_title/index.vue' /* webpackChunkName: "pages/nobifi/_title/index" */))
const _401479d4 = () => interopDefault(import('../pages/_currency/index.vue' /* webpackChunkName: "pages/_currency/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _1699aff0,
    name: "about___fa"
  }, {
    path: "/application",
    component: _30a153f3,
    name: "application___fa"
  }, {
    path: "/calculator",
    component: _4abe49a2,
    name: "calculator___fa"
  }, {
    path: "/changes",
    component: _75687d66,
    name: "changes___fa"
  }, {
    path: "/contact",
    component: _bf3e99d0,
    name: "contact___fa"
  }, {
    path: "/contact-us",
    component: _bf3e99d0,
    name: "contact-us___fa"
  }, {
    path: "/current-prices",
    component: _596f6acb,
    name: "current-prices___fa"
  }, {
    path: "/en",
    component: _36518ab5,
    name: "index___en"
  }, {
    path: "/faq",
    component: _2818c1b9,
    name: "faq___fa"
  }, {
    path: "/features-history",
    component: _63ec8b1e,
    name: "features-history___fa"
  }, {
    path: "/feedbacks-and-suggestions",
    component: _2d743c1d,
    name: "feedbacks-and-suggestions___fa"
  }, {
    path: "/forget-password",
    component: _4e6ffa1e,
    name: "forget-password___fa"
  }, {
    path: "/forget-tfa",
    component: _40a559fc,
    name: "forget-tfa___fa"
  }, {
    path: "/giftcard",
    component: _5cfbc120,
    name: "giftcard___fa"
  }, {
    path: "/jobs",
    component: _492e5643,
    name: "jobs___fa"
  }, {
    path: "/liquidity-pool-terms",
    component: _361935be,
    name: "liquidity-pool-terms___fa"
  }, {
    path: "/login",
    component: _000da468,
    name: "login___fa"
  }, {
    path: "/nobitex-introduction",
    component: _53c28e96,
    name: "nobitex-introduction___fa"
  }, {
    path: "/panel",
    component: _5f39002a,
    name: "panel___fa"
  }, {
    path: "/porsline",
    component: _bcfdde3e,
    name: "porsline___fa"
  }, {
    path: "/position-help",
    component: _c6cde270,
    name: "position-help___fa"
  }, {
    path: "/position-terms",
    component: _25b07910,
    name: "position-terms___fa"
  }, {
    path: "/prices",
    component: _596f6acb,
    name: "prices___fa"
  }, {
    path: "/pricing",
    component: _33d980e9,
    name: "pricing___fa"
  }, {
    path: "/referral",
    component: _f34e70ec,
    name: "referral___fa"
  }, {
    path: "/reset-password",
    component: _be6a78f4,
    name: "reset-password___fa"
  }, {
    path: "/security",
    component: _71140a70,
    name: "security___fa"
  }, {
    path: "/signup",
    component: _4b8678c5,
    name: "signup___fa"
  }, {
    path: "/en/about",
    component: _1699aff0,
    name: "about___en"
  }, {
    path: "/en/application",
    component: _30a153f3,
    name: "application___en"
  }, {
    path: "/en/calculator",
    component: _4abe49a2,
    name: "calculator___en"
  }, {
    path: "/en/changes",
    component: _75687d66,
    name: "changes___en"
  }, {
    path: "/en/contact",
    component: _bf3e99d0,
    name: "contact___en"
  }, {
    path: "/en/contact-us",
    component: _bf3e99d0,
    name: "contact-us___en"
  }, {
    path: "/en/current-prices",
    component: _596f6acb,
    name: "current-prices___en"
  }, {
    path: "/en/faq",
    component: _2818c1b9,
    name: "faq___en"
  }, {
    path: "/en/features-history",
    component: _63ec8b1e,
    name: "features-history___en"
  }, {
    path: "/en/feedbacks-and-suggestions",
    component: _2d743c1d,
    name: "feedbacks-and-suggestions___en"
  }, {
    path: "/en/forget-password",
    component: _4e6ffa1e,
    name: "forget-password___en"
  }, {
    path: "/en/forget-tfa",
    component: _40a559fc,
    name: "forget-tfa___en"
  }, {
    path: "/en/giftcard",
    component: _5cfbc120,
    name: "giftcard___en"
  }, {
    path: "/en/jobs",
    component: _492e5643,
    name: "jobs___en"
  }, {
    path: "/en/liquidity-pool-terms",
    component: _361935be,
    name: "liquidity-pool-terms___en"
  }, {
    path: "/en/login",
    component: _000da468,
    name: "login___en"
  }, {
    path: "/en/nobitex-introduction",
    component: _53c28e96,
    name: "nobitex-introduction___en"
  }, {
    path: "/en/panel",
    component: _5f39002a,
    name: "panel___en"
  }, {
    path: "/en/porsline",
    component: _bcfdde3e,
    name: "porsline___en"
  }, {
    path: "/en/position-help",
    component: _c6cde270,
    name: "position-help___en"
  }, {
    path: "/en/position-terms",
    component: _25b07910,
    name: "position-terms___en"
  }, {
    path: "/en/prices",
    component: _596f6acb,
    name: "prices___en"
  }, {
    path: "/en/pricing",
    component: _33d980e9,
    name: "pricing___en"
  }, {
    path: "/en/referral",
    component: _f34e70ec,
    name: "referral___en"
  }, {
    path: "/en/reset-password",
    component: _be6a78f4,
    name: "reset-password___en"
  }, {
    path: "/en/security",
    component: _71140a70,
    name: "security___en"
  }, {
    path: "/en/signup",
    component: _4b8678c5,
    name: "signup___en"
  }, {
    path: "/help/giftcard",
    component: _56477f9e,
    name: "help-giftcard___fa"
  }, {
    path: "/news/tfa",
    component: _04089040,
    name: "news-tfa___fa"
  }, {
    path: "/panel/balance",
    component: _2008de92,
    name: "panel-balance___fa"
  }, {
    path: "/panel/convert",
    component: _c8884264,
    name: "panel-convert___fa"
  }, {
    path: "/panel/liquidity-pool",
    component: _42f8abb2,
    name: "panel-liquidity-pool___fa"
  }, {
    path: "/panel/market-order",
    component: _55d168d5,
    name: "panel-market-order___fa"
  }, {
    path: "/panel/nobitex-facility",
    component: _315b48ae,
    name: "panel-nobitex-facility___fa"
  }, {
    path: "/panel/portfolio",
    component: _24b25cc0,
    name: "panel-portfolio___fa"
  }, {
    path: "/panel/prices",
    component: _07d3d022,
    name: "panel-prices___fa"
  }, {
    path: "/panel/profile",
    component: _678c4f44,
    name: "panel-profile___fa"
  }, {
    path: "/panel/stake",
    component: _3577a7d5,
    name: "panel-stake___fa"
  }, {
    path: "/panel/ticketing",
    component: _69a422b1,
    name: "panel-ticketing___fa"
  }, {
    path: "/panel/under-development",
    component: _2b7e0b1e,
    name: "panel-under-development___fa"
  }, {
    path: "/panel/verification",
    component: _43f491b6,
    name: "panel-verification___fa"
  }, {
    path: "/panel/yield-farming",
    component: _4ded80f2,
    name: "panel-yield-farming___fa"
  }, {
    path: "/policies/markets",
    component: _350a5936,
    name: "policies-markets___fa"
  }, {
    path: "/policies/privacy",
    component: _2d07b2b6,
    name: "policies-privacy___fa"
  }, {
    path: "/policies/referral",
    component: _181349df,
    name: "policies-referral___fa"
  }, {
    path: "/policies/terms",
    component: _7f12eeb5,
    name: "policies-terms___fa"
  }, {
    path: "/policies/trader-plan",
    component: _7462e394,
    name: "policies-trader-plan___fa"
  }, {
    path: "/policies/user-levels",
    component: _5a8aa15f,
    name: "policies-user-levels___fa"
  }, {
    path: "/product/portfolio",
    component: _cd17b2ea,
    name: "product-portfolio___fa"
  }, {
    path: "/why/security",
    component: _71140a70,
    name: "why/security___fa"
  }, {
    path: "/en/help/giftcard",
    component: _56477f9e,
    name: "help-giftcard___en"
  }, {
    path: "/en/news/tfa",
    component: _04089040,
    name: "news-tfa___en"
  }, {
    path: "/en/panel/balance",
    component: _2008de92,
    name: "panel-balance___en"
  }, {
    path: "/en/panel/convert",
    component: _c8884264,
    name: "panel-convert___en"
  }, {
    path: "/en/panel/liquidity-pool",
    component: _42f8abb2,
    name: "panel-liquidity-pool___en"
  }, {
    path: "/en/panel/market-order",
    component: _55d168d5,
    name: "panel-market-order___en"
  }, {
    path: "/en/panel/nobitex-facility",
    component: _315b48ae,
    name: "panel-nobitex-facility___en"
  }, {
    path: "/en/panel/portfolio",
    component: _24b25cc0,
    name: "panel-portfolio___en"
  }, {
    path: "/en/panel/prices",
    component: _07d3d022,
    name: "panel-prices___en"
  }, {
    path: "/en/panel/profile",
    component: _678c4f44,
    name: "panel-profile___en"
  }, {
    path: "/en/panel/stake",
    component: _3577a7d5,
    name: "panel-stake___en"
  }, {
    path: "/en/panel/ticketing",
    component: _69a422b1,
    name: "panel-ticketing___en"
  }, {
    path: "/en/panel/under-development",
    component: _2b7e0b1e,
    name: "panel-under-development___en"
  }, {
    path: "/en/panel/verification",
    component: _43f491b6,
    name: "panel-verification___en"
  }, {
    path: "/en/panel/yield-farming",
    component: _4ded80f2,
    name: "panel-yield-farming___en"
  }, {
    path: "/en/policies/markets",
    component: _350a5936,
    name: "policies-markets___en"
  }, {
    path: "/en/policies/privacy",
    component: _2d07b2b6,
    name: "policies-privacy___en"
  }, {
    path: "/en/policies/referral",
    component: _181349df,
    name: "policies-referral___en"
  }, {
    path: "/en/policies/terms",
    component: _7f12eeb5,
    name: "policies-terms___en"
  }, {
    path: "/en/policies/trader-plan",
    component: _7462e394,
    name: "policies-trader-plan___en"
  }, {
    path: "/en/policies/user-levels",
    component: _5a8aa15f,
    name: "policies-user-levels___en"
  }, {
    path: "/en/product/portfolio",
    component: _cd17b2ea,
    name: "product-portfolio___en"
  }, {
    path: "/en/why/security",
    component: _71140a70,
    name: "why/security___en"
  }, {
    path: "/panel/balance/convert",
    component: _e4c26450,
    name: "panel-balance-convert___fa"
  }, {
    path: "/panel/balance/transfer",
    component: _7b614f96,
    name: "panel-balance-transfer___fa"
  }, {
    path: "/panel/convert/history",
    component: _bfc93ee0,
    name: "panel-convert-history___fa"
  }, {
    path: "/panel/deposit/id",
    component: _11703104,
    name: "panel-deposit-id___fa"
  }, {
    path: "/panel/profile/beta",
    component: _4a03206e,
    name: "panel-profile-beta___fa"
  }, {
    path: "/panel/profile/discounts",
    component: _11581cc4,
    name: "panel-profile-discounts___fa"
  }, {
    path: "/panel/profile/phone-number",
    component: _31c92df4,
    name: "panel-profile-phone-number___fa"
  }, {
    path: "/panel/profile/plans",
    component: _160b74dc,
    name: "panel-profile-plans___fa"
  }, {
    path: "/panel/profile/security",
    component: _9e88127e,
    name: "panel-profile-security___fa"
  }, {
    path: "/panel/profile/settings",
    component: _100d1221,
    name: "panel-profile-settings___fa"
  }, {
    path: "/panel/ticketing/create",
    component: _1ad703a6,
    name: "panel-ticketing-create___fa"
  }, {
    path: "/panel/verification/bank-info",
    component: _ddf08bfa,
    name: "panel-verification-bank-info___fa"
  }, {
    path: "/panel/verification/contact-info",
    component: _0fcfd2f2,
    name: "panel-verification-contact-info___fa"
  }, {
    path: "/panel/verification/email",
    component: _1b0d8100,
    name: "panel-verification-email___fa"
  }, {
    path: "/panel/verification/identity-info",
    component: _05427bc1,
    name: "panel-verification-identity-info___fa"
  }, {
    path: "/panel/verification/landline-confirmation",
    component: _70de8f47,
    name: "panel-verification-landline-confirmation___fa"
  }, {
    path: "/panel/verification/mobile-number",
    component: _097cb290,
    name: "panel-verification-mobile-number___fa"
  }, {
    path: "/panel/verification/selfie",
    component: _275d1b98,
    name: "panel-verification-selfie___fa"
  }, {
    path: "/panel/verification/smart-verification",
    component: _f1d32a2a,
    name: "panel-verification-smart-verification___fa"
  }, {
    path: "/product/android/3.1",
    component: _8bf455ce,
    name: "product-android-3.1___fa"
  }, {
    path: "/product/android/3.2",
    component: _8bd826cc,
    name: "product-android-3.2___fa"
  }, {
    path: "/product/android/3.3",
    component: _8bbbf7ca,
    name: "product-android-3.3___fa"
  }, {
    path: "/product/android/3.5",
    component: _8b8399c6,
    name: "product-android-3.5___fa"
  }, {
    path: "/security/wallets/cold-storage",
    component: _48d51339,
    name: "security-wallets-cold-storage___fa"
  }, {
    path: "/en/panel/balance/convert",
    component: _e4c26450,
    name: "panel-balance-convert___en"
  }, {
    path: "/en/panel/balance/transfer",
    component: _7b614f96,
    name: "panel-balance-transfer___en"
  }, {
    path: "/en/panel/convert/history",
    component: _bfc93ee0,
    name: "panel-convert-history___en"
  }, {
    path: "/en/panel/deposit/id",
    component: _11703104,
    name: "panel-deposit-id___en"
  }, {
    path: "/en/panel/profile/beta",
    component: _4a03206e,
    name: "panel-profile-beta___en"
  }, {
    path: "/en/panel/profile/discounts",
    component: _11581cc4,
    name: "panel-profile-discounts___en"
  }, {
    path: "/en/panel/profile/phone-number",
    component: _31c92df4,
    name: "panel-profile-phone-number___en"
  }, {
    path: "/en/panel/profile/plans",
    component: _160b74dc,
    name: "panel-profile-plans___en"
  }, {
    path: "/en/panel/profile/security",
    component: _9e88127e,
    name: "panel-profile-security___en"
  }, {
    path: "/en/panel/profile/settings",
    component: _100d1221,
    name: "panel-profile-settings___en"
  }, {
    path: "/en/panel/ticketing/create",
    component: _1ad703a6,
    name: "panel-ticketing-create___en"
  }, {
    path: "/en/panel/verification/bank-info",
    component: _ddf08bfa,
    name: "panel-verification-bank-info___en"
  }, {
    path: "/en/panel/verification/contact-info",
    component: _0fcfd2f2,
    name: "panel-verification-contact-info___en"
  }, {
    path: "/en/panel/verification/email",
    component: _1b0d8100,
    name: "panel-verification-email___en"
  }, {
    path: "/en/panel/verification/identity-info",
    component: _05427bc1,
    name: "panel-verification-identity-info___en"
  }, {
    path: "/en/panel/verification/landline-confirmation",
    component: _70de8f47,
    name: "panel-verification-landline-confirmation___en"
  }, {
    path: "/en/panel/verification/mobile-number",
    component: _097cb290,
    name: "panel-verification-mobile-number___en"
  }, {
    path: "/en/panel/verification/selfie",
    component: _275d1b98,
    name: "panel-verification-selfie___en"
  }, {
    path: "/en/panel/verification/smart-verification",
    component: _f1d32a2a,
    name: "panel-verification-smart-verification___en"
  }, {
    path: "/en/product/android/3.1",
    component: _8bf455ce,
    name: "product-android-3.1___en"
  }, {
    path: "/en/product/android/3.2",
    component: _8bd826cc,
    name: "product-android-3.2___en"
  }, {
    path: "/en/product/android/3.3",
    component: _8bbbf7ca,
    name: "product-android-3.3___en"
  }, {
    path: "/en/product/android/3.5",
    component: _8b8399c6,
    name: "product-android-3.5___en"
  }, {
    path: "/en/security/wallets/cold-storage",
    component: _48d51339,
    name: "security-wallets-cold-storage___en"
  }, {
    path: "/panel/profile/security/address-book",
    component: _5d8b52fa,
    name: "panel-profile-security-address-book___fa"
  }, {
    path: "/panel/profile/security/change-password",
    component: _40ecca47,
    name: "panel-profile-security-change-password___fa"
  }, {
    path: "/panel/profile/security/logins",
    component: _54897b6a,
    name: "panel-profile-security-logins___fa"
  }, {
    path: "/panel/profile/security/sessions",
    component: _ee29b604,
    name: "panel-profile-security-sessions___fa"
  }, {
    path: "/panel/profile/security/tfa",
    component: _5244c15e,
    name: "panel-profile-security-tfa___fa"
  }, {
    path: "/en/panel/profile/security/address-book",
    component: _5d8b52fa,
    name: "panel-profile-security-address-book___en"
  }, {
    path: "/en/panel/profile/security/change-password",
    component: _40ecca47,
    name: "panel-profile-security-change-password___en"
  }, {
    path: "/en/panel/profile/security/logins",
    component: _54897b6a,
    name: "panel-profile-security-logins___en"
  }, {
    path: "/en/panel/profile/security/sessions",
    component: _ee29b604,
    name: "panel-profile-security-sessions___en"
  }, {
    path: "/en/panel/profile/security/tfa",
    component: _5244c15e,
    name: "panel-profile-security-tfa___en"
  }, {
    path: "/panel/profile/bank-info/add/card-number",
    component: _11f9923a,
    name: "panel-profile-bank-info-add-card-number___fa"
  }, {
    path: "/panel/profile/bank-info/add/sheba-number",
    component: _3cc8eafa,
    name: "panel-profile-bank-info-add-sheba-number___fa"
  }, {
    path: "/en/panel/profile/bank-info/add/card-number",
    component: _11f9923a,
    name: "panel-profile-bank-info-add-card-number___en"
  }, {
    path: "/en/panel/profile/bank-info/add/sheba-number",
    component: _3cc8eafa,
    name: "panel-profile-bank-info-add-sheba-number___en"
  }, {
    path: "/en/panel/balance/deposit/:currency?",
    component: _eeefa5b8,
    name: "panel-balance-deposit-currency___en"
  }, {
    path: "/en/panel/balance/withdraw/:currency?",
    component: _9718eed4,
    name: "panel-balance-withdraw-currency___en"
  }, {
    path: "/en/panel/exchange/position/:position",
    component: _8fbe1724,
    name: "position___en"
  }, {
    path: "/en/panel/profile/bank-info/:activeBankInfo?",
    component: _791fd6d1,
    name: "panel-profile-bank-info-activeBankInfo___en"
  }, {
    path: "/en/monthly-report/1401/:month?",
    component: _7b6b9a9e,
    name: "monthly-report-1401-month___en"
  }, {
    path: "/en/panel/balance/:tradeType",
    component: _aabc5da6,
    name: "panel-balance-tradeType___en"
  }, {
    path: "/en/panel/exchange/:exchange?",
    component: _8fbe1724,
    name: "panel-exchange-exchange___en"
  }, {
    path: "/en/panel/exchange/:market",
    component: _8fbe1724,
    name: "exchange___en"
  }, {
    path: "/en/panel/liquidity-pool/:slug?",
    component: _41420a6a,
    name: "panel-liquidity-pool-slug___en"
  }, {
    path: "/en/panel/orders/:activeOrder?",
    component: _536813eb,
    name: "panel-orders-activeOrder___en"
  }, {
    path: "/en/panel/price-alerts/:market?",
    component: _3746dc3f,
    name: "panel-price-alerts-market___en"
  }, {
    path: "/en/panel/profile/:messages",
    component: _4f3ac79d,
    name: "panel-profile-messages___en"
  }, {
    path: "/en/panel/stake/:slug",
    component: _33c1068d,
    name: "panel-stake-slug___en"
  }, {
    path: "/en/panel/ticketing/:ticket",
    component: _3d7117ca,
    name: "panel-ticketing-ticket___en"
  }, {
    path: "/en/panel/turnover/:activeTurnover?",
    component: _2e2ba3b0,
    name: "panel-turnover-activeTurnover___en"
  }, {
    path: "/en/panel/yield-farming/:slug?",
    component: _515ac382,
    name: "panel-yield-farming-slug___en"
  }, {
    path: "/panel/balance/deposit/:currency?",
    component: _eeefa5b8,
    name: "panel-balance-deposit-currency___fa"
  }, {
    path: "/panel/balance/withdraw/:currency?",
    component: _9718eed4,
    name: "panel-balance-withdraw-currency___fa"
  }, {
    path: "/panel/exchange/position/:position",
    component: _8fbe1724,
    name: "position___fa"
  }, {
    path: "/panel/profile/bank-info/:activeBankInfo?",
    component: _791fd6d1,
    name: "panel-profile-bank-info-activeBankInfo___fa"
  }, {
    path: "/en/annual-report/:year?",
    component: _2bfe345c,
    name: "annual-report-year___en"
  }, {
    path: "/en/nobifi/:title",
    component: _5a72fb43,
    name: "nobifi-title___en"
  }, {
    path: "/monthly-report/1401/:month?",
    component: _7b6b9a9e,
    name: "monthly-report-1401-month___fa"
  }, {
    path: "/panel/balance/:tradeType",
    component: _aabc5da6,
    name: "panel-balance-tradeType___fa"
  }, {
    path: "/panel/exchange/:exchange?",
    component: _8fbe1724,
    name: "panel-exchange-exchange___fa"
  }, {
    path: "/panel/exchange/:market",
    component: _8fbe1724,
    name: "exchange___fa"
  }, {
    path: "/panel/liquidity-pool/:slug?",
    component: _41420a6a,
    name: "panel-liquidity-pool-slug___fa"
  }, {
    path: "/panel/orders/:activeOrder?",
    component: _536813eb,
    name: "panel-orders-activeOrder___fa"
  }, {
    path: "/panel/price-alerts/:market?",
    component: _3746dc3f,
    name: "panel-price-alerts-market___fa"
  }, {
    path: "/panel/profile/:messages",
    component: _4f3ac79d,
    name: "panel-profile-messages___fa"
  }, {
    path: "/panel/stake/:slug",
    component: _33c1068d,
    name: "panel-stake-slug___fa"
  }, {
    path: "/panel/ticketing/:ticket",
    component: _3d7117ca,
    name: "panel-ticketing-ticket___fa"
  }, {
    path: "/panel/turnover/:activeTurnover?",
    component: _2e2ba3b0,
    name: "panel-turnover-activeTurnover___fa"
  }, {
    path: "/panel/yield-farming/:slug?",
    component: _515ac382,
    name: "panel-yield-farming-slug___fa"
  }, {
    path: "/annual-report/:year?",
    component: _2bfe345c,
    name: "annual-report-year___fa"
  }, {
    path: "/en/:currency",
    component: _401479d4,
    name: "currency___en"
  }, {
    path: "/nobifi/:title",
    component: _5a72fb43,
    name: "nobifi-title___fa"
  }, {
    path: "/",
    component: _36518ab5,
    name: "index___fa"
  }, {
    path: "/:currency",
    component: _401479d4,
    name: "currency___fa"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
