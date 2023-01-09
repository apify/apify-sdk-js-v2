"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[707],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),f=a,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},14959:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(67294),a=r(39960),o=r(74477),l=r(52263);const i=function(e){var t=e.to,r=e.children,i=(0,o.E)(),s=i.version,c=i.isLast;if((0,l.default)().siteConfig.presets[0][1].docs.disableVersioning)return n.createElement(a.default,{to:"/api/"+t},r);var p=s+"/";return"current"===s?p="next/":c&&(p=""),n.createElement(a.default,{to:"/api/"+p+t},r)}},85248:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=r(41435);r(14959);var i=["components"],s={id:"crawl-single-url",title:"Crawl a single URL"},c=void 0,p={unversionedId:"examples/crawl-single-url",id:"examples/crawl-single-url",title:"Crawl a single URL",description:"This example uses the got-scraping npm package",source:"@site/../docs/examples/crawl_single_url.mdx",sourceDirName:"examples",slug:"/examples/crawl-single-url",permalink:"/sdk-js/docs/next/examples/crawl-single-url",draft:!1,tags:[],version:"current",lastUpdatedBy:"Apify Bot",lastUpdatedAt:1673003280,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{id:"crawl-single-url",title:"Crawl a single URL"},sidebar:"docs",previous:{title:"Crawl a website with relative links",permalink:"/sdk-js/docs/next/examples/crawl-relative-links"},next:{title:"Crawl a sitemap",permalink:"/sdk-js/docs/next/examples/crawl-sitemap"}},u={},m=[],f={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example uses the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apify/got-scraping",target:"_blank",rel:"noopener"},(0,o.kt)("inlineCode",{parentName:"a"},"got-scraping"))," npm package\nto grab the HTML of a web page."),(0,o.kt)(l.Z,{className:"language-js",mdxType:"CodeBlock"},"import { gotScraping } from 'got-scraping';\n\n// Get the HTML of a web page\nconst { body } = await gotScraping({ url: 'https://www.example.com' });\nconsole.log(body);\n"),(0,o.kt)("p",null,"If you don't want to hard-code the URL into the script, refer to the ",(0,o.kt)("a",{parentName:"p",href:"./accept-user-input",target:null,rel:null},"Accept User Input")," example."))}d.isMDXComponent=!0}}]);