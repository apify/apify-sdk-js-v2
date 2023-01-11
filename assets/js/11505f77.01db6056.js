"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6607],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=s(n),u=o,f=c["".concat(p,".").concat(u)]||c[u]||g[u]||l;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=c;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},44945:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>g});var r=n(87462),o=n(63366),l=(n(67294),n(3905)),i=["components"],a={id_old:"version-1.3-logger-options",title:"LoggerOptions",id:"logger-options"},p=void 0,s={unversionedId:"typedefs/logger-options",id:"version-1.3/typedefs/logger-options",title:"LoggerOptions",description:"Properties",source:"@site/versioned_docs/version-1.3/typedefs/LoggerOptions.md",sourceDirName:"typedefs",slug:"/typedefs/logger-options",permalink:"/sdk-js/docs/1.3/typedefs/logger-options",draft:!1,tags:[],version:"1.3",lastUpdatedBy:"Apify Bot",lastUpdatedAt:1673462535,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{id_old:"version-1.3-logger-options",title:"LoggerOptions",id:"logger-options"},sidebar:"version-1.3/docs",previous:{title:"ProxyInfo",permalink:"/sdk-js/docs/1.3/typedefs/proxy-info"},next:{title:"RequestOptions",permalink:"/sdk-js/docs/1.3/typedefs/request-options"}},d={},g=[{value:"Properties",id:"properties",level:2},{value:"<code>level</code>",id:"level",level:3},{value:"<code>maxDepth</code>",id:"maxdepth",level:3},{value:"<code>maxStringLength</code>",id:"maxstringlength",level:3},{value:"<code>prefix</code>",id:"prefix",level:3},{value:"<code>suffix</code>",id:"suffix",level:3},{value:"<code>logger</code>",id:"logger",level:3},{value:"<code>data</code>",id:"data",level:3}],c={toc:g};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("a",{name:"loggeroptions"}),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"level"},(0,l.kt)("inlineCode",{parentName:"h3"},"level")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")," ",(0,l.kt)("code",null," = 4")),(0,l.kt)("p",null,"Sets the log level to the given value, preventing messages from less important log levels from being printed to the console. Use in conjunction with\nthe ",(0,l.kt)("inlineCode",{parentName:"p"},"log.LEVELS")," constants."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"maxdepth"},(0,l.kt)("inlineCode",{parentName:"h3"},"maxDepth")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")," ",(0,l.kt)("code",null," = 4")),(0,l.kt)("p",null,"Max depth of data object that will be logged. Anything deeper than the limit will be stripped off."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"maxstringlength"},(0,l.kt)("inlineCode",{parentName:"h3"},"maxStringLength")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")," ",(0,l.kt)("code",null," = 2000")),(0,l.kt)("p",null,"Max length of the string to be logged. Longer strings will be truncated."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"prefix"},(0,l.kt)("inlineCode",{parentName:"h3"},"prefix")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Prefix to be prepended the each logged line."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"suffix"},(0,l.kt)("inlineCode",{parentName:"h3"},"suffix")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Suffix that will be appended the each logged line."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"logger"},(0,l.kt)("inlineCode",{parentName:"h3"},"logger")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Logger")),(0,l.kt)("p",null,"Logger implementation to be used. Default one is log.LoggerText to log messages as easily readable strings. Optionally you can use ",(0,l.kt)("inlineCode",{parentName:"p"},"log.LoggerJson"),"\nthat formats each log line as a JSON."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"data"},(0,l.kt)("inlineCode",{parentName:"h3"},"data")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Record<string, unknown>")),(0,l.kt)("p",null,"Additional data to be added to each log line."),(0,l.kt)("hr",null))}u.isMDXComponent=!0}}]);