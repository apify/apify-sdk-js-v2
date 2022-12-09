"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9189],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>w});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),w=n,m=u["".concat(s,".").concat(w)]||u[w]||d[w]||o;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function w(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},14959:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(67294),n=r(39960),o=r(74477),i=r(52263);const l=function(e){var t=e.to,r=e.children,l=(0,o.E)(),s=l.version,c=l.isLast;if((0,i.default)().siteConfig.presets[0][1].docs.disableVersioning)return a.createElement(n.default,{to:"/api/"+t},r);var p=s+"/";return"current"===s?p="next/":c&&(p=""),a.createElement(n.default,{to:"/api/"+p+t},r)}},91699:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>w});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=r(41435),l=r(14959);var s=["components"],c={id:"basic-crawler",title:"Basic crawler"},p=void 0,d={unversionedId:"examples/basic-crawler",id:"version-3.0/examples/basic-crawler",title:"Basic crawler",description:"This is the most bare-bones example of the Apify SDK, which demonstrates some of its building blocks such as the BasicCrawler. You probably don't need to go this deep though, and it would be better to start with one of the full-featured crawlers",source:"@site/versioned_docs/version-3.0/examples/basic_crawler.mdx",sourceDirName:"examples",slug:"/examples/basic-crawler",permalink:"/sdk-js/docs/examples/basic-crawler",draft:!1,tags:[],version:"3.0",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1660220504,formattedLastUpdatedAt:"Aug 11, 2022",frontMatter:{id:"basic-crawler",title:"Basic crawler"},sidebar:"docs",previous:{title:"Add data to dataset",permalink:"/sdk-js/docs/examples/add-data-to-dataset"},next:{title:"Call actor",permalink:"/sdk-js/docs/examples/call-actor"}},u={},w=[],m={toc:w};function f(e){var t=e.components,r=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This is the most bare-bones example of the Apify SDK, which demonstrates some of its building blocks such as the ",(0,o.kt)(l.Z,{to:"basic-crawler/class/BasicCrawler",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"BasicCrawler")),". You probably don't need to go this deep though, and it would be better to start with one of the full-featured crawlers\nlike ",(0,o.kt)(l.Z,{to:"cheerio-crawler/class/CheerioCrawler",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"CheerioCrawler"))," or ",(0,o.kt)(l.Z,{to:"playwright-crawler/class/PlaywrightCrawler",mdxType:"ApiLink"},(0,o.kt)("inlineCode",{parentName:"p"},"PlaywrightCrawler")),"."),(0,o.kt)("p",null,"The script simply downloads several web pages with plain HTTP requests using the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apify/got-scraping",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"got-scraping")),"\nnpm package and stores their raw HTML and URL in the default dataset. In local configuration, the data will be stored as JSON files in\n",(0,o.kt)("inlineCode",{parentName:"p"},"./storage/datasets/default"),"."),(0,o.kt)(i.Z,{className:"language-js",mdxType:"CodeBlock"},"import { Actor } from 'apify';\nimport { BasicCrawler } from 'crawlee';\nimport { gotScraping } from 'got-scraping';\n\nawait Actor.init();\n\n// Create a dataset where we will store the results.\n// Create a BasicCrawler - the simplest crawler that enables\n// users to implement the crawling logic themselves.\nconst crawler = new BasicCrawler({\n    // This function will be called for each URL to crawl.\n    async requestHandler({ request }) {\n        const { url } = request;\n        console.log(`Processing ${url}...`);\n\n        // Fetch the page HTML via Apify utils gotScraping\n        const { body } = await gotScraping({ url });\n\n        // Store the HTML and URL to the default dataset.\n        await Actor.pushData({\n            url: request.url,\n            html: body,\n        });\n    },\n});\n\n// The initial list of URLs to crawl. Here we use just a few hard-coded URLs.\nawait crawler.run([\n    { url: 'http://www.google.com/' },\n    { url: 'http://www.example.com/' },\n    { url: 'http://www.bing.com/' },\n    { url: 'http://www.wikipedia.com/' },\n]);\n\nconsole.log('Crawler finished.');\n\nawait Actor.exit();\n"))}f.isMDXComponent=!0}}]);