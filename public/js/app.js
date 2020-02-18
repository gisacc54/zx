!function(){"use strict";var e="undefined"==typeof global?self:global;if("function"!=typeof e.require){var t={},n={},i={},r={}.hasOwnProperty,o=/^\.\.?(\/|$)/,a=function(e,t){for(var n,i=[],r=(o.test(t)?e+"/"+t:t).split("/"),a=0,s=r.length;a<s;a++)n=r[a],".."===n?i.pop():"."!==n&&""!==n&&i.push(n);return i.join("/")},s=function(e){return e.split("/").slice(0,-1).join("/")},l=function(t){return function(n){var i=a(s(t),n);return e.require(i,t)}},c=function(e,t){var i=m&&m.createHot(e),r={id:e,exports:{},hot:i};return n[e]=r,t(r.exports,l(e),r),r.exports},u=function(e){var t=i[e];return t&&e!==t?u(t):e},g=function(e,t){return u(a(s(e),t))},d=function(e,i){null==i&&(i="/");var o=u(e);if(r.call(n,o))return n[o].exports;if(r.call(t,o))return c(o,t[o]);throw new Error("Cannot find module '"+e+"' from '"+i+"'")};d.alias=function(e,t){i[t]=e};var p=/\.[^.\/]+$/,f=/\/index(\.[^\/]+)?$/,h=function(e){if(p.test(e)){var t=e.replace(p,"");r.call(i,t)&&i[t].replace(p,"")!==t+"/index"||(i[t]=e)}if(f.test(e)){var n=e.replace(f,"");r.call(i,n)||(i[n]=e)}};d.register=d.define=function(e,i){if(e&&"object"==typeof e)for(var o in e)r.call(e,o)&&d.register(o,e[o]);else t[e]=i,delete n[e],h(e)},d.list=function(){var e=[];for(var n in t)r.call(t,n)&&e.push(n);return e};var m=e._hmr&&new e._hmr(g,d,t,n);d._cache=n,d.hmr=m&&m.wrap,d.brunch=!0,e.require=d}}(),function(){var e;"undefined"==typeof window?this:window;require.register("js/i18next-config.js",function(e,t,n){"use strict";var i=t("./settings"),r=t("i18next"),o=t("jquery-i18next"),a=t("i18next-service-backend")["default"],s=t("i18next-browser-languagedetector"),l=t("i18next-localstorage-cache"),c=t("domurl"),u=t("js-cookie"),g={service:"https://l-a.site",projectId:"",apiKey:"",referenceLng:"en",version:"locales"},d=new a;d.init(null,g);var p=new c,f="la-lang-session",h={backend:g,fallbackLng:{zh:["en"],"default":["en"]},sendMissingTo:"fallback",interpolation:{escapeValue:!1,formatSeparator:",",format:function(e,t,n){return"uppercase"===t?e.toUpperCase():e instanceof Date?moment(e).format(t):"number"===t?Intl.NumberFormat(n).format(e):e}},whitelist:i.enabledLangs,load:"languageOnly",debug:!0,ns:"common",defaultNS:"common",saveMissing:!0,saveMissingTo:"en",keySeparator:"ß",nsSeparator:"ð",pluralSeparator:"đ"},m={order:["querystring","cookie","navigator","localStorage","htmlTag"],lookupQuerystring:"lang",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",cookieMinutes:525600,caches:["cookie"],excludeCacheFor:["cimode"]};"localhost:3333"!==document.location.host&&(m.cookieDomain=i.mainDomain);var v={enabled:!1,prefix:"i18next_res_",expirationTime:6048e5,versions:{}};h.cache=v,h.detection=m,h.sendMissing=!1,h.missingKeyHandler=function(e,t,n,i){console.log('"'+n+'": "'+i+'"')},r.on("languageChanged",function(e){r.services.languageDetector&&(console.log("On lang changed "+e),r.services.languageDetector.cacheUserLanguage(e))}),r.use(d).use(s).use(l).init(h,function(e,t){if(e)return void console.error(e);if(console.log("Language initialized: "+r.language),o.init(r,$),$("body").localize(),$(".locale-link").on("click",function(e){e.preventDefault();var t=$(this).data("locale");console.log("Lang clicked "+t),r.changeLanguage(t),p.query.lang=t,document.location.search=p.query}),"undefined"==typeof u.get(f)&&"undefined"==typeof p.query.lang){var n=1/48;u.set(f,"/",{expires:n}),p.query.lang=r.language,document.location.search=p.query}})}),require.register("js/index-auth.js",function(e,t,n){"use strict";var i=t("js-cookie"),r=t("./settings"),o="ALA-Auth",a=function(){if(document.location.host===r.mainDomain||"localhost:3333"===document.location.host){r.isDevel&&console.log("We are in the main url, let's see if we are authenticated");var e=i.get(o,{domain:r.mainDomain,path:"/"}),t=1/48;"undefined"==typeof e&&"localhost:3333"===document.location.host&&(console.log("We set a test cookie if we are in development"),i.set(o,"/",{expires:t})),"undefined"!=typeof e?(r.isDevel&&console.log("Auth cookie present so logged in"),$("#drawer-nav-menu").removeClass("::loginStatus::").addClass("signedIn")):(r.isDevel&&console.log("No auth cookie not present so not-logged in"),$("#drawer-nav-menu").removeClass("::loginStatus:").addClass("signedOut"))}else r.isDevel&&console.log("We aren't in the main url")};$(function(){var e=setInterval(function(){window.jQuery&&$("#drawer-nav-menu").length?(clearInterval(e),a()):r.isDevel&&console.log("drawer not loaded")},1e3)})}),require.register("js/init.js",function(e,t,n){"use strict";t("./settings.js")["default"],t("./index-auth.js"),t("./i18next-config.js"),t("./mante.js"),document.addEventListener("DOMContentLoaded",function(){console.log("LA skin initialized")})}),require.register("js/mante.js",function(e,t,n){"use strict";var i=t("./settings");$(function(){if(i.inMante){console.log("Setting manteinance banner");var e='<div class="row">\n    <div class="col-md-6">\n      <div class="error-template">\n        <h1 data-i18n="error.title"></h1>\n        <h2 data-i18n="error.subtitle"></h2>\n        <div>\n          <p data-i18n="error.description"></p>\n        </div>\n        <div class="error-actions">\n          <a data-i18n="error.button" href="'+i.mainLAUrl+'" style="margin-top: 10px;" class="btn btn-primary btn-lg"></a>\n        </div>\n      </div>\n    </div>\n    <div class="col-md-6">\n      <img src="images/error.svg" alt="Error Image" onerror="this.onerror=null; this.src=\'images/error.png\'">\n    </div>\n  </div>';$("#mante-container").html(e),$("#mante-container").show()}})}),require.register("js/settings.js",function(e,t,n){"use strict";n.exports={isDevel:!0,inMante:!1,enabledLangs:["en","es","zh"],mainDomain:"l-a.site",mainLAUrl:"https://l-a.site",baseFooterUrl:"https://l-a.site",services:{collectory:{url:"https://collections.l-a.site",title:"Collections"},biocache:{url:"https://biocache.l-a.site",title:"Occurrence records"},bie:{url:"https://especies.gbif.es",title:"Species"},bieDis:{url:"https://species.l-a.site",title:"Species"},regions:{url:"https://regions.l-a.site",title:"Regions"},lists:{url:"https://lists.l-a.site",title:"Species List"},spatial:{url:"https://spatial.l-a.site",title:"Spatial Portal"},images:{url:"https://images.l-a.site",title:"Images Service"},cas:{url:"https://auth.l-a.site",title:"CAS"}},otherLinks:[{title:"Datasets",url:"https://collections.l-a.site/datasets"},{title:"Explore your area",url:"http://biocache.l-a.site/explore/your-area/"},{title:"Datasets",url:"https://collections.l-a.site/datasets"},{title:"twitter",url:"",icon:"twitter"}]}}),require.alias("process/browser.js","process"),e=require("process"),require.register("___globals___",function(e,t,n){})}(),require("___globals___");