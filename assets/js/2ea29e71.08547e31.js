"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1013],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97602:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>p,toc:()=>s});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],p={},l=void 0,s=[{value:"Upgrading from v2",id:"upgrading-from-v2",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Using <code>Actor.init()</code> and <code>Actor.exit()</code>",id:"using-actorinit-and-actorexit",level:3},{value:"Using <code>Actor.main()</code>",id:"using-actormain",level:3},{value:"Support",id:"support",level:2},{value:"Contributing",id:"contributing",level:2},{value:"License",id:"license",level:2},{value:"Acknowledgments",id:"acknowledgments",level:2}],c={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/apify"},(0,i.kt)("img",{parentName:"a",src:"https://badge.fury.io/js/apify.svg",alt:"npm version"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/apify"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/dm/apify.svg",alt:"Downloads"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/jyEM2PRvMU"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/801163717915574323?label=discord",alt:"Chat on discord"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apify/apify-sdk-js/actions/workflows/test-and-release.yml"},(0,i.kt)("img",{parentName:"a",src:"https://github.com/apify/apify-sdk-js/actions/workflows/test-and-release.yml/badge.svg?branch=master",alt:"Build Status"}))),(0,i.kt)("p",null,"Apify SDK provides the tools required to run your own Apify actors. The crawlers and scraping related tools, previously included in Apify SDK (v2), have been split into a brand-new module - ",(0,i.kt)("a",{parentName:"p",href:"https://npmjs.org/crawlee"},(0,i.kt)("inlineCode",{parentName:"a"},"crawlee")),", while keeping the Apify specific parts in this module."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Would you like to work with us on Crawlee, Apify SDK or similar projects? We are hiring ",(0,i.kt)("a",{parentName:"p",href:"https://apify.com/jobs#senior-node.js-engineer"},"Node.js engineers"),".")),(0,i.kt)("h2",{id:"upgrading-from-v2"},"Upgrading from v2"),(0,i.kt)("p",null,"A lot of things have changed since version 2 of the Apify SDK, including the split of the crawlers to the new ",(0,i.kt)("a",{parentName:"p",href:"https://npmjs.org/crawlee"},(0,i.kt)("inlineCode",{parentName:"a"},"crawlee"))," module. We've written a guide to help you easily migrate from v2 to v3. Visit the ",(0,i.kt)("a",{parentName:"p",href:"https://sdk.apify.com/docs/upgrading/upgrading-to-v3"},"Upgrading Guide")," to find out what changes you need to make (especially the section related to this very ",(0,i.kt)("a",{parentName:"p",href:"https://sdk.apify.com/docs/upgrading/upgrading-to-v3#apify-sdk"},"Apify SDK"),"), and, if you encounter any issues, join our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/jyEM2PRvMU"},"Discord server")," for help!"),(0,i.kt)("h2",{id:"quick-start"},"Quick Start"),(0,i.kt)("p",null,"This short tutorial will set you up to start using Apify SDK in a minute or two.\nIf you want to learn more, proceed to the ",(0,i.kt)("a",{parentName:"p",href:"https://sdk.apify.com/docs/guides/apify-platform"},"Apify Platform"),"\nguide that will take you step by step through running your actor on Apify's platform."),(0,i.kt)("p",null,"Apify SDK requires ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"Node.js")," 16 or later. Add Apify SDK to any Node.js project by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install apify crawlee playwright\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For this example, we'll also install the ",(0,i.kt)("a",{parentName:"p",href:"https://npmjs.org/crawlee"},(0,i.kt)("inlineCode",{parentName:"a"},"crawlee"))," module, as it now provides the crawlers that were previously exported by Apify SDK. If you don't plan to use crawlers in your actors, then you don't need to install it. Keep in mind that neither ",(0,i.kt)("inlineCode",{parentName:"p"},"playwright")," nor ",(0,i.kt)("inlineCode",{parentName:"p"},"puppeteer")," are bundled with ",(0,i.kt)("inlineCode",{parentName:"p"},"crawlee")," in order to reduce install size and allow greater flexibility. That's why we manually install it with NPM. You can choose one, both, or neither.")),(0,i.kt)("p",null,"There are two ways to initialize your actor: by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Actor.main()")," function you're probably used to, or by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"Actor.init()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Actor.exit()")," manually. We prefer explicitly calling ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"exit"),"."),(0,i.kt)("h3",{id:"using-actorinit-and-actorexit"},"Using ",(0,i.kt)("inlineCode",{parentName:"h3"},"Actor.init()")," and ",(0,i.kt)("inlineCode",{parentName:"h3"},"Actor.exit()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Actor } from 'apify';\nimport { PlaywrightCrawler } from 'crawlee';\n\nawait Actor.init()\n\nconst crawler = new PlaywrightCrawler({\n    async requestHandler({ request, page, enqueueLinks }) {\n        // Extract HTML title of the page.\n        const title = await page.title();\n        console.log(`Title of ${request.url}: ${title}`);\n\n        // Add URLs that point to the same hostname.\n        await enqueueLinks();\n    },\n});\n\nawait crawler.run(['https://crawlee.dev/']);\n\nawait Actor.exit();\n")),(0,i.kt)("h3",{id:"using-actormain"},"Using ",(0,i.kt)("inlineCode",{parentName:"h3"},"Actor.main()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Actor } from 'apify';\nimport { PlaywrightCrawler } from 'crawlee';\n\nawait Actor.main(async () => {\n    const crawler = new PlaywrightCrawler({\n        async requestHandler({ request, page, enqueueLinks }) {\n            // Extract HTML title of the page.\n            const title = await page.title();\n            console.log(`Title of ${request.url}: ${title}`);\n\n            // Add URLs that point to the same hostname.\n            await enqueueLinks();\n        },\n    });\n\n    await crawler.run(['https://crawlee.dev/']);\n});\n")),(0,i.kt)("h2",{id:"support"},"Support"),(0,i.kt)("p",null,"If you find any bug or issue with the Apify SDK, please ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apify/apify-sdk-js/issues"},"submit an issue on GitHub"),".\nFor questions, you can ask on ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/tagged/apify"},"Stack Overflow")," or contact ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@apify.com"},"support@apify.com")),(0,i.kt)("h2",{id:"contributing"},"Contributing"),(0,i.kt)("p",null,"Your code contributions are welcome, and you'll be praised to eternity!\nIf you have any ideas for improvements, either submit an issue or create a pull request.\nFor contribution guidelines and the code of conduct,\nsee ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apify/apify-sdk-js/blob/master/CONTRIBUTING.md"},"CONTRIBUTING.md"),"."),(0,i.kt)("h2",{id:"license"},"License"),(0,i.kt)("p",null,"This project is licensed under the Apache License 2.0 -\nsee the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apify/apify-sdk-js/blob/master/LICENSE.md"},"LICENSE.md")," file for details."),(0,i.kt)("h2",{id:"acknowledgments"},"Acknowledgments"),(0,i.kt)("p",null,"Many thanks to ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/~jbalsas"},"Chema Balsas")," for giving up the ",(0,i.kt)("inlineCode",{parentName:"p"},"apify")," package name\non NPM and renaming his project to ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/jsdocify"},"jsdocify"),"."))}u.isMDXComponent=!0}}]);