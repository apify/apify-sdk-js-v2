"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9919],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=i(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(86010);const o="tabItem_Ymn6";function l(e){var t=e.children,r=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(87462),a=r(67294),o=r(86010),l=r(12466),u=r(70989),s=r(72389);const i="tabList__CuJ",p="tabItem_LNqP";function c(e){var t=e.className,r=e.block,u=e.selectedValue,s=e.selectValue,i=e.tabValues,c=[],m=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,r=c.indexOf(t),n=i[r].value;n!==u&&(m(t),s(n))},f=function(e){var t,r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,a=c.indexOf(e.currentTarget)+1;r=null!=(n=c[a])?n:c[0];break;case"ArrowLeft":var o,l=c.indexOf(e.currentTarget)-1;r=null!=(o=c[l])?o:c[c.length-1]}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},i.map((function(e){var t=e.value,r=e.label,l=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:function(e){return c.push(e)},onKeyDown:f,onClick:d},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":u===t})}),null!=r?r:t)})))}function m(e){var t=e.lazy,r=e.children,n=e.selectedValue;if(t){var o=r.find((function(e){return e.props.value===n}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},r.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function d(e){var t=(0,u.Y)(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",i)},a.createElement(c,(0,n.Z)({},e,t)),a.createElement(m,(0,n.Z)({},e,t)))}function f(e){var t=(0,s.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},70989:(e,t,r)=>{r.d(t,{Y:()=>m});var n=r(67294),a=r(16550),o=r(91980),l=r(67392),u=r(50012);function s(e){return function(e){return n.Children.map(e,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function i(e){var t=e.values,r=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:s(r);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function c(e){var t=e.queryString,r=void 0!==t&&t,l=e.groupId,u=(0,a.k6)(),s=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:l});return[(0,o._X)(s),(0,n.useCallback)((function(e){if(s){var t=new URLSearchParams(u.location.search);t.set(s,e),u.replace(Object.assign({},u.location,{search:t.toString()}))}}),[s,u])]}function m(e){var t,r,a,o,l=e.defaultValue,s=e.queryString,m=void 0!==s&&s,d=e.groupId,f=i(e),h=(0,n.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:f})})),w=h[0],v=h[1],g=c({queryString:m,groupId:d}),b=g[0],y=g[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),r=(0,u.Nk)(t),a=r[0],o=r[1],[a,(0,n.useCallback)((function(e){t&&o.set(e)}),[t,o])]),x=k[0],C=k[1],T=function(){var e=null!=b?b:x;return p({value:e,tabValues:f})?e:null}();return(0,n.useEffect)((function(){T&&v(T)}),[T]),{selectedValue:w,selectValue:(0,n.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),C(e)}),[y,C,f]),tabValues:f}}},19739:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>w,frontMatter:()=>p,metadata:()=>m,toc:()=>f});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=r(65488),u=r(85162),s=r(41435);var i=["components"],p={id:"capture-screenshot",title:"Capture a screenshot using Puppeteer"},c=void 0,m={unversionedId:"examples/capture-screenshot",id:"examples/capture-screenshot",title:"Capture a screenshot using Puppeteer",description:"To run this example on the Apify Platform, select the apify/actor-node-puppeteer-chrome image for your Dockerfile.",source:"@site/../docs/examples/puppeteer_capture_screenshot.mdx",sourceDirName:"examples",slug:"/examples/capture-screenshot",permalink:"/sdk-js/docs/next/examples/capture-screenshot",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1675087960,formattedLastUpdatedAt:"Jan 30, 2023",frontMatter:{id:"capture-screenshot",title:"Capture a screenshot using Puppeteer"},sidebar:"docs",previous:{title:"Playwright crawler",permalink:"/sdk-js/docs/next/examples/playwright-crawler"},next:{title:"Puppeteer crawler",permalink:"/sdk-js/docs/next/examples/puppeteer-crawler"}},d={},f=[],h={toc:f};function w(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To run this example on the Apify Platform, select the ",(0,o.kt)("inlineCode",{parentName:"p"},"apify/actor-node-puppeteer-chrome")," image for your Dockerfile.")),(0,o.kt)("p",null,"This example captures a screenshot of a web page using ",(0,o.kt)("inlineCode",{parentName:"p"},"Puppeteer"),". It would look almost exactly the same with ",(0,o.kt)("inlineCode",{parentName:"p"},"Playwright"),"."),(0,o.kt)(l.Z,{groupId:"puppeteer-capture-screenshot",mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"pagescreenshot",label:"Page Screenshot",mdxType:"TabItem"},(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"page.screenshot()"),":"),(0,o.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},"import { Actor } from 'apify';\nimport { launchPuppeteer } from 'crawlee';\n\nawait Actor.init();\n\nconst url = 'http://www.example.com/';\n// Start a browser\nconst browser = await launchPuppeteer();\n\n// Open new tab in the browser\nconst page = await browser.newPage();\n\n// Navigate to the URL\nawait page.goto(url);\n\n// Capture the screenshot\nconst screenshot = await page.screenshot();\n\n// Save the screenshot to the default key-value store\nawait Actor.setValue('my-key', screenshot, { contentType: 'image/png' });\n\n// Close Puppeteer\nawait browser.close();\n\nawait Actor.exit();\n")),(0,o.kt)(u.Z,{value:"crawlerutilsscreenshot",label:"Crawler Utils Screenshot",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"puppeteerUtils.saveSnapshot()"),":"),(0,o.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},"import { Actor } from 'apify';\nimport { launchPuppeteer, utils } from 'crawlee';\n\nawait Actor.init();\n\nconst url = 'http://www.example.com/';\n// Start a browser\nconst browser = await launchPuppeteer();\n\n// Open new tab in the browser\nconst page = await browser.newPage();\n\n// Navigate to the URL\nawait page.goto(url);\n\n// Capture the screenshot\nawait utils.puppeteer.saveSnapshot(page, { key: 'my-key', saveHtml: false });\n\n// Close Puppeteer\nawait browser.close();\n\nawait Actor.exit();\n"))),(0,o.kt)("p",null,"This example captures a screenshot of multiple web pages when using ",(0,o.kt)("inlineCode",{parentName:"p"},"PuppeteerCrawler"),":"),(0,o.kt)(l.Z,{groupId:"puppeteer-capture-screenshot",mdxType:"Tabs"},(0,o.kt)(u.Z,{value:"pagescreenshot",label:"Page Screenshot",mdxType:"TabItem"},(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"page.screenshot()"),":"),(0,o.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},"import { Actor } from 'apify';\nimport { PuppeteerCrawler } from 'crawlee';\n\nawait Actor.init();\n\n// Create a PuppeteerCrawler\nconst crawler = new PuppeteerCrawler({\n    async requestHandler({ request, page }) {\n        // Capture the screenshot with Puppeteer\n        const screenshot = await page.screenshot();\n        // Convert the URL into a valid key\n        const key = request.url.replace(/[:/]/g, '_');\n        // Save the screenshot to the default key-value store\n        await Actor.setValue(key, screenshot, { contentType: 'image/png' });\n    },\n});\n\n// Run the crawler\nawait crawler.run([\n    { url: 'http://www.example.com/page-1' },\n    { url: 'http://www.example.com/page-2' },\n    { url: 'http://www.example.com/page-3' },\n]);\n\nawait Actor.exit();\n")),(0,o.kt)(u.Z,{value:"crawlerutilsscreenshot",label:"Crawler Utils Screenshot",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"Using ",(0,o.kt)("inlineCode",{parentName:"p"},"puppeteerUtils.saveSnapshot()"),":"),(0,o.kt)(s.Z,{className:"language-js",mdxType:"CodeBlock"},"import { PuppeteerCrawler, puppeteerUtils } from 'crawlee';\nimport { Actor } from 'apify';\n\nawait Actor.init();\n\n// Create a PuppeteerCrawler\nconst crawler = new PuppeteerCrawler({\n    async requestHandler({ request, page }) {\n        // Convert the URL into a valid key\n        const key = request.url.replace(/[:/]/g, '_');\n        // Capture the screenshot\n        await puppeteerUtils.saveSnapshot(page, { key, saveHtml: false });\n    },\n});\n\n// Run the crawler\nawait crawler.run([\n    { url: 'http://www.example.com/page-1' },\n    { url: 'http://www.example.com/page-2' },\n    { url: 'http://www.example.com/page-3' },\n]);\n\nawait Actor.exit();\n"))),(0,o.kt)("p",null,"In both examples using ",(0,o.kt)("inlineCode",{parentName:"p"},"page.screenshot()"),", a ",(0,o.kt)("inlineCode",{parentName:"p"},"key")," variable is created based on the URL of the web page. This variable is used as the key when saving\neach screenshot into a key-value store."))}w.isMDXComponent=!0}}]);