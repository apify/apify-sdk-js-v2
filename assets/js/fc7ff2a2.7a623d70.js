"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4481],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=s(a),d=r,m=g["".concat(p,".").concat(d)]||g[d]||u[d]||i;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},95439:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),l=["components"],o={id:"playwright",title:"utils.playwright"},p=void 0,s={unversionedId:"api/playwright",id:"version-2.3/api/playwright",title:"utils.playwright",description:"A namespace that contains various utilities for Playwright - the headless Chrome Node API.",source:"@site/versioned_docs/version-2.3/api/playwright.md",sourceDirName:"api",slug:"/api/playwright",permalink:"/sdk-js/docs/2.3/api/playwright",draft:!1,tags:[],version:"2.3",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1673276558,formattedLastUpdatedAt:"Jan 9, 2023",frontMatter:{id:"playwright",title:"utils.playwright"},sidebar:"version-2.3/docs",previous:{title:"utils.log",permalink:"/sdk-js/docs/2.3/api/log"},next:{title:"utils.puppeteer",permalink:"/sdk-js/docs/2.3/api/puppeteer"}},c={},u=[{value:"<code>playwright.gotoExtended</code>",id:"playwrightgotoextended",level:2},{value:"<code>playwright.injectFile(page, filePath, [options])</code>",id:"playwrightinjectfilepage-filepath-options",level:2},{value:"<code>playwright.injectJQuery(page)</code>",id:"playwrightinjectjquerypage",level:2}],g={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("a",{name:"playwright"}),(0,i.kt)("p",null,"A namespace that contains various utilities for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright",target:"_blank",rel:"noopener"},"Playwright")," - the headless Chrome Node API."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\nconst { playwright } = Apify.utils;\n\n// Navigate to https://www.example.com in Playwright with a POST request\nconst browser = await Apify.launchPlaywright();\nconst page = await browser.newPage();\nawait playwright.gotoExtended(page, {\n    url: 'https://example.com,\n    method: 'POST',\n});\n")),(0,i.kt)("hr",null),(0,i.kt)("a",{name:"gotoextended"}),(0,i.kt)("h2",{id:"playwrightgotoextended"},(0,i.kt)("inlineCode",{parentName:"h2"},"playwright.gotoExtended")),(0,i.kt)("p",null,"Extended version of Playwright's ",(0,i.kt)("inlineCode",{parentName:"p"},"page.goto()")," allowing to perform requests with HTTP method other than GET, with custom headers and POST payload.\nURL, method, headers and payload are taken from request parameter that must be an instance of Apify.Request class."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"NOTE:")," In recent versions of Playwright using requests other than GET, overriding headers and adding payloads disables browser cache which degrades\nperformance."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"page")),": ",(0,i.kt)("inlineCode",{parentName:"li"},"Page")," - Playwright ",(0,i.kt)("a",{parentName:"li",href:"https://playwright.dev/docs/api/class-page",target:"_blank",rel:"noopener"},(0,i.kt)("inlineCode",{parentName:"a"},"Page"))," object."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"request")),": ",(0,i.kt)("a",{parentName:"li",href:"../api/request",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"Request"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"[gotoOptions]")),": ",(0,i.kt)("a",{parentName:"li",href:"../typedefs/direct-navigation-options",target:null,rel:null},(0,i.kt)("inlineCode",{parentName:"a"},"DirectNavigationOptions"))," - Custom options for ",(0,i.kt)("inlineCode",{parentName:"li"},"page.goto()"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns"),":"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise<(Response|null)>")),(0,i.kt)("hr",null),(0,i.kt)("a",{name:"injectfile"}),(0,i.kt)("h2",{id:"playwrightinjectfilepage-filepath-options"},(0,i.kt)("inlineCode",{parentName:"h2"},"playwright.injectFile(page, filePath, [options])")),(0,i.kt)("p",null,"Injects a JavaScript file into a Playright page. Unlike Playwright's ",(0,i.kt)("inlineCode",{parentName:"p"},"addScriptTag")," function, this function works on pages with arbitrary Cross-Origin\nResource Sharing (CORS) policies."),(0,i.kt)("p",null,"File contents are cached for up to 10 files to limit file system access."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"page")),": ",(0,i.kt)("inlineCode",{parentName:"li"},"Page")," - Playwright ",(0,i.kt)("a",{parentName:"li",href:"https://playwright.dev/docs/api/class-page",target:"_blank",rel:"noopener"},(0,i.kt)("inlineCode",{parentName:"a"},"Page"))," object."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"filePath")),": ",(0,i.kt)("inlineCode",{parentName:"li"},"string")," - File path"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"[options]")),": ",(0,i.kt)("inlineCode",{parentName:"li"},"object"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"[surviveNavigations]")),": ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean")," - Enables the injected script to survive page navigations and reloads without need to be re-injected\nmanually. This does not mean, however, that internal state will be preserved. Just that it will be automatically re-injected on each\nnavigation before any other scripts get the chance to execute.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns"),":"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise<*>")),(0,i.kt)("hr",null),(0,i.kt)("a",{name:"injectjquery"}),(0,i.kt)("h2",{id:"playwrightinjectjquerypage"},(0,i.kt)("inlineCode",{parentName:"h2"},"playwright.injectJQuery(page)")),(0,i.kt)("p",null,"Injects the ",(0,i.kt)("a",{parentName:"p",href:"https://jquery.com/",target:"_blank",rel:"noopener"},"jQuery")," library into a Playwright page. jQuery is often useful for various web scraping and crawling tasks. For\nexample, it can help extract text from HTML elements using CSS selectors."),(0,i.kt)("p",null,"Beware that the injected jQuery object will be set to the ",(0,i.kt)("inlineCode",{parentName:"p"},"window.$")," variable and thus it might cause conflicts with other libraries included by the\npage that use the same variable name (e.g. another version of jQuery). This can affect functionality of page's scripts."),(0,i.kt)("p",null,"The injected jQuery will survive page navigations and reloads."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example usage:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"await Apify.utils.playwright.injectJQuery(page);\nconst title = await page.evaluate(() => {\n    return $('head title').text();\n});\n")),(0,i.kt)("p",null,"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"injectJQuery()")," does not affect the Playwright ",(0,i.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-page#page-query-selector",target:"_blank",rel:"noopener"},(0,i.kt)("inlineCode",{parentName:"a"},"page.$()"))," function in any\nway."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"page")),": ",(0,i.kt)("inlineCode",{parentName:"li"},"Page")," - Playwright ",(0,i.kt)("a",{parentName:"li",href:"https://playwright.dev/docs/api/class-page",target:"_blank",rel:"noopener"},(0,i.kt)("inlineCode",{parentName:"a"},"Page"))," object.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns"),":"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise<*>")),(0,i.kt)("hr",null))}d.isMDXComponent=!0}}]);