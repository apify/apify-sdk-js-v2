"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6814],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(m,p(p({ref:t},c),{},{components:n})):r.createElement(m,p({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var s=2;s<a;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},96224:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),p=["components"],i={id_old:"version-1.3-puppeteer-pool-options",title:"PuppeteerPoolOptions",id:"puppeteer-pool-options"},l=void 0,s={unversionedId:"typedefs/puppeteer-pool-options",id:"version-1.3/typedefs/puppeteer-pool-options",title:"PuppeteerPoolOptions",description:"Properties",source:"@site/versioned_docs/version-1.3/typedefs/PuppeteerPoolOptions.md",sourceDirName:"typedefs",slug:"/typedefs/puppeteer-pool-options",permalink:"/sdk-js/docs/1.3/typedefs/puppeteer-pool-options",draft:!1,tags:[],version:"1.3",lastUpdatedBy:"Apify Bot",lastUpdatedAt:1673523131,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{id_old:"version-1.3-puppeteer-pool-options",title:"PuppeteerPoolOptions",id:"puppeteer-pool-options"}},c={},u=[{value:"Properties",id:"properties",level:2},{value:"<code>maxOpenPagesPerInstance</code>",id:"maxopenpagesperinstance",level:3},{value:"<code>retireInstanceAfterRequestCount</code>",id:"retireinstanceafterrequestcount",level:3},{value:"<code>puppeteerOperationTimeoutSecs</code>",id:"puppeteeroperationtimeoutsecs",level:3},{value:"<code>instanceKillerIntervalSecs</code>",id:"instancekillerintervalsecs",level:3},{value:"<code>killInstanceAfterSecs</code>",id:"killinstanceaftersecs",level:3},{value:"<code>launchPuppeteerFunction</code>",id:"launchpuppeteerfunction",level:3},{value:"<code>launchPuppeteerOptions</code>",id:"launchpuppeteeroptions",level:3},{value:"<code>recycleDiskCache</code>",id:"recyclediskcache",level:3},{value:"<code>useIncognitoPages</code>",id:"useincognitopages",level:3},{value:"<code>sessionPool</code>",id:"sessionpool",level:3},{value:"<code>proxyConfiguration</code>",id:"proxyconfiguration",level:3}],d={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{name:"puppeteerpooloptions"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"maxopenpagesperinstance"},(0,a.kt)("inlineCode",{parentName:"h3"},"maxOpenPagesPerInstance")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ",(0,a.kt)("code",null," = 50")),(0,a.kt)("p",null,"Maximum number of open pages (i.e. tabs) per browser. When this limit is reached, new pages are loaded in a new browser instance."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"retireinstanceafterrequestcount"},(0,a.kt)("inlineCode",{parentName:"h3"},"retireInstanceAfterRequestCount")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ",(0,a.kt)("code",null," = 100")),(0,a.kt)("p",null,"Maximum number of requests that can be processed by a single browser instance. After the limit is reached, the browser is retired and new requests are\nhandled by a new browser instance."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"puppeteeroperationtimeoutsecs"},(0,a.kt)("inlineCode",{parentName:"h3"},"puppeteerOperationTimeoutSecs")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ",(0,a.kt)("code",null," = 15")),(0,a.kt)("p",null,"All browser management operations such as launching a new browser, opening a new page or closing a page will timeout after the set number of seconds\nand the connected browser will be retired."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"instancekillerintervalsecs"},(0,a.kt)("inlineCode",{parentName:"h3"},"instanceKillerIntervalSecs")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ",(0,a.kt)("code",null," = 60")),(0,a.kt)("p",null,"Indicates how often are the open Puppeteer instances checked whether they can be closed."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"killinstanceaftersecs"},(0,a.kt)("inlineCode",{parentName:"h3"},"killInstanceAfterSecs")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ",(0,a.kt)("code",null," = 300")),(0,a.kt)("p",null,"When Puppeteer instance reaches the ",(0,a.kt)("inlineCode",{parentName:"p"},"retireInstanceAfterRequestCount")," limit then it is considered retired and no more tabs will be opened. After the\nlast tab is closed the whole browser is closed too. This parameter defines a time limit between the last tab was opened and before the browser is\nclosed even if there are pending open tabs."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"launchpuppeteerfunction"},(0,a.kt)("inlineCode",{parentName:"h3"},"launchPuppeteerFunction")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("a",{parentName:"p",href:"../typedefs/launch-puppeteer-function",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"LaunchPuppeteerFunction"))),(0,a.kt)("p",null,"Overrides the default function to launch a new Puppeteer instance. It must return a promise resolving to\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/master/docs/api.md#class-browser",target:"_blank",rel:"noopener"},(0,a.kt)("inlineCode",{parentName:"a"},"Browser"))," instance."),(0,a.kt)("p",null,"The function receives one parameter that includes launch options, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"proxyUrl")," and other options generated by the ",(0,a.kt)("inlineCode",{parentName:"p"},"PuppeteerPool")," instance. You\ncan extend or update this options object, but you must not ignore it."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Correct:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"async function launchPuppeteerFunction(options) {\n    const newOpts = {\n        ...options,\n        foo: 'bar',\n    };\n\n    // do some other things\n\n    return Apify.launchPuppeteer(newOpts);\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Incorrect:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"async function launchPuppeteerFunction() {\n    const opts = {\n        foo: 'bar',\n    };\n    // Because we ignored the options, correct parameters\n    // will not make it to the browser. Eg. this prevents\n    // proxyConfiguration from working correctly.\n    return Apify.launchPuppeteer(opts);\n}\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"launchpuppeteeroptions"},(0,a.kt)("inlineCode",{parentName:"h3"},"launchPuppeteerOptions")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("a",{parentName:"p",href:"../typedefs/launch-puppeteer-options",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"LaunchPuppeteerOptions"))),(0,a.kt)("p",null,"Options used by ",(0,a.kt)("a",{parentName:"p",href:"../api/apify#launchpuppeteer",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"Apify.launchPuppeteer()"))," to start new Puppeteer instances."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"recyclediskcache"},(0,a.kt)("inlineCode",{parentName:"h3"},"recycleDiskCache")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ",(0,a.kt)("code",null," = false")),(0,a.kt)("p",null,"Enables recycling of disk cache directories by Chrome instances. When a browser instance is closed, its disk cache directory is not deleted but it's\nused by a newly opened browser instance. This is useful to reduce amount of data that needs to be downloaded to speed up crawling and reduce proxy\nusage. Note that the new browser starts with empty cookies, local storage etc. so this setting doesn't affect anonymity of your crawler."),(0,a.kt)("p",null,"Beware that the disk cache directories can consume a lot of disk space. To limit the space consumed, you can pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"--disk-cache-size=X")," argument\nto ",(0,a.kt)("inlineCode",{parentName:"p"},"launchPuppeteer")," ",(0,a.kt)("inlineCode",{parentName:"p"},"args"),", where ",(0,a.kt)("inlineCode",{parentName:"p"},"X")," is the approximate maximum number of bytes for disk cache."),(0,a.kt)("p",null,"Do not use the ",(0,a.kt)("inlineCode",{parentName:"p"},"recycleDiskCache")," setting together with ",(0,a.kt)("inlineCode",{parentName:"p"},"--disk-cache-dir")," argument in ",(0,a.kt)("inlineCode",{parentName:"p"},"launchPuppeteer")," ",(0,a.kt)("inlineCode",{parentName:"p"},"args"),", the behavior is undefined."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"useincognitopages"},(0,a.kt)("inlineCode",{parentName:"h3"},"useIncognitoPages")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("p",null,"With this option selected, all pages will be opened in a new incognito browser context, which means that they will not share cookies or cache and\ntheir resources will not be throttled by one another."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"sessionpool"},(0,a.kt)("inlineCode",{parentName:"h3"},"sessionPool")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("a",{parentName:"p",href:"../api/session-pool",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"SessionPool"))),(0,a.kt)("p",null,"A pool of Session instances."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"proxyconfiguration"},(0,a.kt)("inlineCode",{parentName:"h3"},"proxyConfiguration")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Type"),": ",(0,a.kt)("a",{parentName:"p",href:"../api/proxy-configuration",target:null,rel:null},(0,a.kt)("inlineCode",{parentName:"a"},"ProxyConfiguration"))),(0,a.kt)("p",null,"If set, ",(0,a.kt)("inlineCode",{parentName:"p"},"PuppeteerPool")," will be configured for all connections to use ",(0,a.kt)("a",{parentName:"p",href:"https://my.apify.com/proxy",target:"_blank",rel:"noopener"},"Apify Proxy")," or your own Proxy URLs provided and\nrotated according to the configuration. For more information, see the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.apify.com/proxy",target:"_blank",rel:"noopener"},"documentation"),"."),(0,a.kt)("hr",null))}h.isMDXComponent=!0}}]);