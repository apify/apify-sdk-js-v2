"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3090],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||l;return n?r.createElement(k,a(a({ref:t},s),{},{components:n})):r.createElement(k,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var d=2;d<l;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var r=n(87462),o=n(63366),l=(n(67294),n(3905)),a=["components"],i={id:"stealth-options",title:"StealthOptions"},p=void 0,d={unversionedId:"typedefs/stealth-options",id:"version-2.3/typedefs/stealth-options",title:"StealthOptions",description:"Configuration of stealth tricks for a proper hiding effect all of them should be set to true. These tricks are applied only when the stealth option",source:"@site/versioned_docs/version-2.3/typedefs/StealthOptions.md",sourceDirName:"typedefs",slug:"/typedefs/stealth-options",permalink:"/sdk-js/docs/2.3/typedefs/stealth-options",draft:!1,tags:[],version:"2.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1660220504,formattedLastUpdatedAt:"Aug 11, 2022",frontMatter:{id:"stealth-options",title:"StealthOptions"},sidebar:"version-2.3/docs",previous:{title:"SnapshotterOptions",permalink:"/sdk-js/docs/2.3/typedefs/snapshotter-options"},next:{title:"SystemStatusOptions",permalink:"/sdk-js/docs/2.3/typedefs/system-status-options"}},s={},u=[{value:"Properties",id:"properties",level:2},{value:"<code>addPlugins</code>",id:"addplugins",level:3},{value:"<code>emulateWindowFrame</code>",id:"emulatewindowframe",level:3},{value:"<code>emulateWebGL</code>",id:"emulatewebgl",level:3},{value:"<code>emulateConsoleDebug</code>",id:"emulateconsoledebug",level:3},{value:"<code>addLanguage</code>",id:"addlanguage",level:3},{value:"<code>hideWebDriver</code>",id:"hidewebdriver",level:3},{value:"<code>hackPermissions</code>",id:"hackpermissions",level:3},{value:"<code>mockChrome</code>",id:"mockchrome",level:3},{value:"<code>mockChromeInIframe</code>",id:"mockchromeiniframe",level:3},{value:"<code>mockDeviceMemory</code>",id:"mockdevicememory",level:3}],c={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("a",{name:"stealthoptions"}),(0,l.kt)("p",null,"Configuration of stealth tricks for a proper hiding effect all of them should be set to true. These tricks are applied only when the ",(0,l.kt)("inlineCode",{parentName:"p"},"stealth")," option\nis set to ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"addplugins"},(0,l.kt)("inlineCode",{parentName:"h3"},"addPlugins")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")," ",(0,l.kt)("code",null," = true")),(0,l.kt)("p",null,"If plugins should be added to the navigator."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"emulatewindowframe"},(0,l.kt)("inlineCode",{parentName:"h3"},"emulateWindowFrame")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")," ",(0,l.kt)("code",null," = true")),(0,l.kt)("p",null,"Emulates window Iframe."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"emulatewebgl"},(0,l.kt)("inlineCode",{parentName:"h3"},"emulateWebGL")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")," ",(0,l.kt)("code",null," = true")),(0,l.kt)("p",null,"Emulates graphic card."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"emulateconsoledebug"},(0,l.kt)("inlineCode",{parentName:"h3"},"emulateConsoleDebug")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")," ",(0,l.kt)("code",null," = true")),(0,l.kt)("p",null,"Emulates console.debug to return null."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"addlanguage"},(0,l.kt)("inlineCode",{parentName:"h3"},"addLanguage")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")," ",(0,l.kt)("code",null," = true")),(0,l.kt)("p",null,"Adds languages to the navigator."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"hidewebdriver"},(0,l.kt)("inlineCode",{parentName:"h3"},"hideWebDriver")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")," ",(0,l.kt)("code",null," = true")),(0,l.kt)("p",null,"Hides the webdriver by changing the navigator proto."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"hackpermissions"},(0,l.kt)("inlineCode",{parentName:"h3"},"hackPermissions")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")," ",(0,l.kt)("code",null," = true")),(0,l.kt)("p",null,"Fakes interaction with permissions."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"mockchrome"},(0,l.kt)("inlineCode",{parentName:"h3"},"mockChrome")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")," ",(0,l.kt)("code",null," = true")),(0,l.kt)("p",null,"Adds the chrome runtime properties."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"mockchromeiniframe"},(0,l.kt)("inlineCode",{parentName:"h3"},"mockChromeInIframe")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")," ",(0,l.kt)("code",null," = true")),(0,l.kt)("p",null,"Adds the chrome runtime properties inside the every newly created iframe."),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"mockdevicememory"},(0,l.kt)("inlineCode",{parentName:"h3"},"mockDeviceMemory")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")," ",(0,l.kt)("code",null," = true")),(0,l.kt)("p",null,"Sets device memory to other value than 0."),(0,l.kt)("hr",null))}m.isMDXComponent=!0}}]);