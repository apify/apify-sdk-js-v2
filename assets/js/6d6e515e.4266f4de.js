"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6054],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),h=a,m=d["".concat(u,".").concat(h)]||d[h]||c[h]||s;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},14959:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(39960),s=r(74477),o=r(52263);const i=function(e){var t=e.to,r=e.children,i=(0,s.E)(),u=i.version,l=i.isLast;if((0,o.default)().siteConfig.presets[0][1].docs.disableVersioning)return n.createElement(a.default,{to:"/api/"+t},r);var p=u+"/";return"current"===u?p="next/":l&&(p=""),n.createElement(a.default,{to:"/api/"+p+t},r)}},95274:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>u,metadata:()=>p,toc:()=>d});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),o=r(14959),i=["components"],u={id:"request-storage",title:"Request Storage"},l=void 0,p={unversionedId:"guides/request-storage",id:"version-3.0/guides/request-storage",title:"Request Storage",description:"The Apify SDK has several request storage types that are useful for specific tasks. The requests are stored either on local disk to a directory defined by the",source:"@site/versioned_docs/version-3.0/guides/request_storage.mdx",sourceDirName:"guides",slug:"/guides/request-storage",permalink:"/sdk-js/docs/guides/request-storage",draft:!1,tags:[],version:"3.0",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1672651098,formattedLastUpdatedAt:"Jan 2, 2023",frontMatter:{id:"request-storage",title:"Request Storage"},sidebar:"docs",previous:{title:"Apify Platform",permalink:"/sdk-js/docs/guides/apify-platform"},next:{title:"Result Storage",permalink:"/sdk-js/docs/guides/result-storage"}},c={},d=[{value:"Request queue",id:"request-queue",level:2},{value:"Request list",id:"request-list",level:2},{value:"Which one to choose?",id:"which-one-to-choose",level:2}],h={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The Apify SDK has several request storage types that are useful for specific tasks. The requests are stored either on local disk to a directory defined by the\n",(0,s.kt)("inlineCode",{parentName:"p"},"APIFY_LOCAL_STORAGE_DIR")," environment variable, or on the ",(0,s.kt)("a",{parentName:"p",href:"/docs/guides/apify-platform",target:null,rel:null},"Apify platform")," under the user account identified by the API token defined by the ",(0,s.kt)("inlineCode",{parentName:"p"},"APIFY_TOKEN")," environment variable. If neither of these variables is defined, by default Apify SDK sets ",(0,s.kt)("inlineCode",{parentName:"p"},"APIFY_LOCAL_STORAGE_DIR")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"./storage")," in the current working directory and prints a warning."),(0,s.kt)("p",null,"Typically, you will be developing the code on your local computer and thus set the ",(0,s.kt)("inlineCode",{parentName:"p"},"APIFY_LOCAL_STORAGE_DIR")," environment variable. Once the code is ready, you will deploy it to the Apify platform, where it will automatically set the ",(0,s.kt)("inlineCode",{parentName:"p"},"APIFY_TOKEN")," environment variable and thus use cloud storage. No code changes are needed."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Related links")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.apify.com/storage",target:"_blank",rel:"noopener"},"Apify platform storage documentation")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://console.apify.com/storage",target:"_blank",rel:"noopener"},"View storage in Apify Console")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.apify.com/api/v2#/reference/request-queues",target:"_blank",rel:"noopener"},"Request queues API reference"))),(0,s.kt)("h2",{id:"request-queue"},"Request queue"),(0,s.kt)("p",null,"The request queue is a storage of URLs to crawl. The queue is used for the deep crawling of websites, where you start with several URLs and then recursively follow links to other pages. The data structure supports both breadth-first and depth-first crawling orders."),(0,s.kt)("p",null,"Each actor run is associated with a ",(0,s.kt)("strong",{parentName:"p"},"default request queue"),", which is created exclusively for the actor run. Typically, it is used to store URLs to crawl in the specific actor run. Its usage is optional."),(0,s.kt)("p",null,"In Apify SDK, the request queue is represented by the ",(0,s.kt)(o.Z,{to:"apify/class/RequestQueue",mdxType:"ApiLink"},(0,s.kt)("inlineCode",{parentName:"p"},"RequestQueue"))," class."),(0,s.kt)("p",null,"In local configuration, the request queue is emulated by ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/apify/apify-storage-local-js",target:"_blank",rel:"noopener"},"@apify/storage-local")," NPM package and its data is stored in SQLite database in the directory specified by the ",(0,s.kt)("inlineCode",{parentName:"p"},"APIFY_LOCAL_STORAGE_DIR")," environment variable as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"{APIFY_LOCAL_STORAGE_DIR}/request_queues/{QUEUE_ID}/db.sqlite\n")),(0,s.kt)("p",null,"Note that ",(0,s.kt)("inlineCode",{parentName:"p"},"{QUEUE_ID}")," is the name or ID of the request queue. The default queue has ID ",(0,s.kt)("inlineCode",{parentName:"p"},"default"),", unless you override it by setting the ",(0,s.kt)("inlineCode",{parentName:"p"},"APIFY_DEFAULT_REQUEST_QUEUE_ID")," environment variable."),(0,s.kt)("p",null,"The following code demonstrates basic operations of the request queue:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"// Open the default request queue associated with the actor run\nconst requestQueue = await RequestQueue.open();\n// Enqueue the initial request\nawait requestQueue.addRequest({ url: 'https://example.com' });\n\n// The crawler will automatically process requests from the queue\nconst crawler = new CheerioCrawler({\n    requestQueue,\n    handlePageFunction: async ({ $, request }) => {\n        // Add new request to the queue\n        await requestQueue.addRequest({ url: 'https://example.com/new-page' });\n        // Add links found on page to the queue\n        await Actor.utils.enqueueLinks({ $, requestQueue });\n    },\n});\n")),(0,s.kt)("p",null,"To see more detailed example of how to use the request queue with a crawler, see the ",(0,s.kt)("a",{parentName:"p",href:"/docs/examples/puppeteer-crawler",target:null,rel:null},"Puppeteer Crawler")," example."),(0,s.kt)("h2",{id:"request-list"},"Request list"),(0,s.kt)("p",null,"The request list is not a storage per se - it represents the list of URLs to crawl that is stored in a run memory (or optionally in default ",(0,s.kt)("a",{parentName:"p",href:"../guides/result-storage#key-value-store",target:null,rel:null},"Key-Value Store")," associated with the run, if specified). The list is used for the crawling of a large number of URLs, when you know all the URLs which should be visited by the crawler and no URLs would be added during the run. The URLs can be provided either in code or parsed from a text file hosted on the web."),(0,s.kt)("p",null,"Request list is created exclusively for the actor run and only if its usage is explicitly specified in the code. Its usage is optional."),(0,s.kt)("p",null,"In Apify SDK, the request list is represented by the ",(0,s.kt)(o.Z,{to:"apify/class/RequestList",mdxType:"ApiLink"},(0,s.kt)("inlineCode",{parentName:"p"},"RequestList"))," class."),(0,s.kt)("p",null,"The following code demonstrates basic operations of the request list:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"// Prepare the sources array with URLs to visit\nconst sources = [\n    { url: 'http://www.example.com/page-1' },\n    { url: 'http://www.example.com/page-2' },\n    { url: 'http://www.example.com/page-3' },\n];\n// Open the request list.\n// List name is used to persist the sources and the list state in the key-value store\nconst requestList = await RequestList.open('my-list', sources);\n\n// The crawler will automatically process requests from the list\nconst crawler = new PuppeteerCrawler({\n    requestList,\n    handlePageFunction: async ({ page, request }) => {\n        // Process the page (extract data, take page screenshot, etc).\n        // No more requests could be added to the request list here\n    },\n});\n")),(0,s.kt)("p",null,"To see more detailed example of how to use the request list with a crawler, see the ",(0,s.kt)("a",{parentName:"p",href:"/docs/examples/puppeteer-with-proxy",target:null,rel:null},"Puppeteer with proxy")," example."),(0,s.kt)("h2",{id:"which-one-to-choose"},"Which one to choose?"),(0,s.kt)("p",null,"When using Request queue - you would normally have several start URLs (e.g. category pages on e-commerce website) and then recursively add more (e.g. individual item pages) programmatically to the queue, it supports dynamic adding and removing of requests. No more URLs can be added to Request list after its initialization as it is immutable, URLs cannot be removed from the list either."),(0,s.kt)("p",null,"On the other hand, the Request queue is not optimized for adding or removing numerous URLs in a batch. This is technically possible, but requests are added one by one to the queue, and thus it would take significant time with a larger number of requests. Request list however can contain even millions of URLs, and it would take significantly less time to add them to the list, compared to the queue."),(0,s.kt)("p",null,"Note that Request queue and Request list can be used together by the same crawler.\nIn such cases, each request from the Request list is enqueued into the Request queue first (to the foremost position in the queue, even if Request queue is not empty) and then consumed from the latter.\nThis is necessary to avoid the same URL being processed more than once (from the list first and then possibly from the queue).\nIn practical terms, such a combination can be useful when there are numerous initial URLs, but more URLs would be added dynamically by the crawler."),(0,s.kt)("p",null,"The following code demonstrates how to use Request queue and Request list in the same crawler:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"// Prepare the sources array with URLs to visit (it can contain millions of URLs)\nconst sources = [\n    { url: 'http://www.example.com/page-1' },\n    { url: 'http://www.example.com/page-2' },\n    { url: 'http://www.example.com/page-3' },\n];\n// Open the request list\nconst requestList = await RequestList.open('my-list', sources);\n\n// Open the default request queue. It's not necessary to add any requests to the queue\nconst requestQueue = await RequestQueue.open();\n\n// The crawler will automatically process requests from the list and the queue\nconst crawler = new PuppeteerCrawler({\n    requestList,\n    requestQueue,\n    // Each request from the request list is enqueued to the request queue one by one.\n    // At this point request with the same URL would exist in the list and the queue\n    handlePageFunction: async ({ request, page }) => {\n        // Add new request to the queue\n        await requestQueue.addRequest({ url: 'http://www.example.com/new-page' });\n\n        // Add links found on page to the queue\n        await Actor.utils.enqueueLinks({ page, requestQueue });\n\n        // The requests above would be added to the queue (but not to the list)\n        // and would be processed after the request list is empty.\n        // No more requests could be added to the list here\n    },\n});\n")))}m.isMDXComponent=!0}}]);