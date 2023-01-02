"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7465],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(y,o(o({ref:t},l),{},{components:n})):r.createElement(y,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},14959:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(67294),a=n(39960),i=n(74477),o=n(52263);const p=function(e){var t=e.to,n=e.children,p=(0,i.E)(),s=p.version,c=p.isLast;if((0,o.default)().siteConfig.presets[0][1].docs.disableVersioning)return r.createElement(a.default,{to:"/api/"+t},n);var l=s+"/";return"current"===s?l="next/":c&&(l=""),r.createElement(a.default,{to:"/api/"+l+t},n)}},94211:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=(n(14959),["components"]),p={id:"type-script-actor",title:"TypeScript Actors"},s=void 0,c={unversionedId:"guides/type-script-actor",id:"guides/type-script-actor",title:"TypeScript Actors",description:"Apify SDK supports TypeScript by covering public APIs with type declarations. This",source:"@site/../docs/guides/typescript_actor.mdx",sourceDirName:"guides",slug:"/guides/type-script-actor",permalink:"/sdk-js/docs/next/guides/type-script-actor",draft:!1,tags:[],version:"current",lastUpdatedBy:"Jind\u0159ich B\xe4r",lastUpdatedAt:1672651098,formattedLastUpdatedAt:"Jan 2, 2023",frontMatter:{id:"type-script-actor",title:"TypeScript Actors"},sidebar:"docs",previous:{title:"Session Management",permalink:"/sdk-js/docs/next/guides/session-management"},next:{title:"Running in Docker",permalink:"/sdk-js/docs/next/guides/docker-images"}},l={},d=[],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Apify SDK supports TypeScript by covering public APIs with type declarations. This\nallows writing code with auto-completion for TypeScript and JavaScript code alike.\nBesides that, actors written in TypeScript can take advantage of compile-time\ntype-checking and avoid many coding mistakes, while providing documentation for\nfunctions, parameters and return values."),(0,i.kt)("h1",{id:"setting-up-a-typescript-project"},"Setting up a TypeScript project"),(0,i.kt)("p",null,"To use TypeScript in your actors, you'll need the following prerequisites."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"TypeScript compiler ",(0,i.kt)("inlineCode",{parentName:"p"},"tsc")," installed somewhere:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"npm install --dev typescript\n")),(0,i.kt)("p",{parentName:"li"},"TypeScript can be a development dependency in your project, as shown above. There's no\nneed to pollute your production environment or your system's global repository\nwith TypeScript.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A build script invoking ",(0,i.kt)("inlineCode",{parentName:"p"},"tsc")," and a correctly specified ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," entry point defined\nin your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "build": "tsc -p tsconfig.json"\n  },\n  "main": "build/main.js"\n}\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Type declarations for NodeJS, so you can take advantage of type-checking in all the features you'll use:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"npm install --dev @types/node\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"TypeScript configuration file allowing ",(0,i.kt)("inlineCode",{parentName:"p"},"tsc")," to understand your project layout and\nthe features used in your project:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "compilerOptions": {\n        "target": "es2019",\n        "module": "commonjs",\n        "moduleResolution": "node",\n        "strict": true,\n        "noImplicitAny": false,\n        "strictNullChecks": false,\n        "lib": [\n             "DOM",\n             "DOM.Iterable",\n             "ES2015",\n             "ES2016",\n             "ES2018",\n             "ES2019.Object",\n             "ES2018.AsyncIterable",\n             "ES2020.String",\n             "ES2019.Array"\n        ],\n        "rootDir": "src/",\n        "outDir": "build/"\n    },\n    "include": [\n        "src/"\n    ]\n}\n')),(0,i.kt)("p",{parentName:"li"},"Place the content above inside a ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," in your root folder."),(0,i.kt)("p",{parentName:"li"},"Also, if you are a VSCode user that is using JavaScript, create a ",(0,i.kt)("inlineCode",{parentName:"p"},"jsconfig.json")," with the same content, adding ",(0,i.kt)("inlineCode",{parentName:"p"},'"checkJs": true')," to ",(0,i.kt)("inlineCode",{parentName:"p"},'"compilerOptions"'),", so you can enjoy using the types in your ",(0,i.kt)("inlineCode",{parentName:"p"},".js")," source files."))),(0,i.kt)("h1",{id:"auto-completion"},"Auto-completion"),(0,i.kt)("p",null,"IDE auto-completion should work in most places. That's true even if you are writting\nactors in pure JavaScript. For time constraints, we left out the amendment of an\ninternal API for the time being, and these need to be added as the SDK developers write\nnew and enhance old code."),(0,i.kt)("h1",{id:"sdk-documentation"},"SDK Documentation"),(0,i.kt)("p",null,"SDK documentation has grown a lot. There is a new API Reference section ",(0,i.kt)("strong",{parentName:"p"},"Type definitions"),"\nthat holds documentation for all constructible types, function parameters and\nreturn types, in the Apify SDK."),(0,i.kt)("h1",{id:"caveats"},"Caveats"),(0,i.kt)("p",null,"As of version 1.0+, the generated typings, due to JSDoc limitations, have some properties\nand parameters annotated with ",(0,i.kt)("inlineCode",{parentName:"p"},"any")," type, therefore the settings ",(0,i.kt)("inlineCode",{parentName:"p"},"noImplicitAny")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"strictNullChecks"),", set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", may not be advised. You may try enabling them, but it might hinder development because of the need for typecasts to be able to compile, your mileage may vary."),(0,i.kt)("p",null,"Besides the ",(0,i.kt)("em",{parentName:"p"},"implicit any")," errors that might occur in the code when writing in TypeScript, the\ncurrent typings doesn't offer generics that make outputs type-safe, so you need to declare your\ntypes, as such:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface MySchema {\n    expectedParam1?: string;\n    expectedParam2?: number;\n}\n\nconst input: MySchema = (await Actor.getInput()) as any; // getInput returns Promise<Object<string, *>|string|Buffer|null> here\n\nif (!input?.expectedParam1) { // input is MySchema now and you can check in a type-safe way\n    throw new Error('Missing expectedParam1');\n}\n")),(0,i.kt)("p",null,"There are also other places where you need to explicitly provide your interface / type, like in Dataset iterators (",(0,i.kt)("inlineCode",{parentName:"p"},"map"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"reduce"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"forEach"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'interface ExpectedShape {\n    id: string;\n    someFields: Fields[];\n}\n\nconst dataset = await Actor.openDataset();\nawait dataset.forEach((item: ExpectedShape) => {\n    // deal with item.id / item.someFields\n    // otherwise item is "any"\n})\n')))}m.isMDXComponent=!0}}]);