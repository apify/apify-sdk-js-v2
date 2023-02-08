"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[154],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>u});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},g=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=l,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(k,r(r({ref:t},g),{},{components:n})):a.createElement(k,r({ref:t},g))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=n(87462),l=n(63366),o=(n(67294),n(3905)),r=["components"],i={id:"log",title:"utils.log"},s=void 0,p={unversionedId:"api/log",id:"version-2.3/api/log",title:"utils.log",description:"The log instance enables level aware logging of messages and we advise to use it instead of console.log() and its aliases in most development",source:"@site/versioned_docs/version-2.3/api/log.md",sourceDirName:"api",slug:"/api/log",permalink:"/sdk/js/docs/2.3/api/log",draft:!1,tags:[],version:"2.3",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1675865266,formattedLastUpdatedAt:"Feb 8, 2023",frontMatter:{id:"log",title:"utils.log"},sidebar:"version-2.3/docs",previous:{title:"utils",permalink:"/sdk/js/docs/2.3/api/utils"},next:{title:"utils.playwright",permalink:"/sdk/js/docs/2.3/api/playwright"}},g={},d=[{value:"<code>log.LEVELS</code>",id:"loglevels",level:2},{value:"<code>log.setLevel(level)</code>",id:"logsetlevellevel",level:2},{value:"<code>log.getLevel()</code>",id:"loggetlevel",level:2},{value:"<code>log.setOptions(options)</code>",id:"logsetoptionsoptions",level:2},{value:"<code>log.child([options])</code>",id:"logchildoptions",level:2},{value:"<code>log.getOptions()</code>",id:"loggetoptions",level:2},{value:"<code>log.debug(message, [data])</code>",id:"logdebugmessage-data",level:2},{value:"<code>log.info(message, [data])</code>",id:"loginfomessage-data",level:2},{value:"<code>log.warning(message, [data])</code>",id:"logwarningmessage-data",level:2},{value:"<code>log.error(message, [data])</code>",id:"logerrormessage-data",level:2},{value:"<code>log.exception(exception, [message], [data])</code>",id:"logexceptionexception-message-data",level:2}],m={toc:d};function u(e){var t=e.components,n=(0,l.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("a",{name:"log"}),(0,o.kt)("p",null,"The log instance enables level aware logging of messages and we advise to use it instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"console.log()")," and its aliases in most development\nscenarios."),(0,o.kt)("p",null,"A very useful use case for ",(0,o.kt)("inlineCode",{parentName:"p"},"log")," is using ",(0,o.kt)("inlineCode",{parentName:"p"},"log.debug")," liberally throughout the codebase to get useful logging messages only when appropriate log level\nis set and keeping the console tidy in production environments."),(0,o.kt)("p",null,"The available logging levels are, in this order: ",(0,o.kt)("inlineCode",{parentName:"p"},"DEBUG"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"INFO"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"WARNING"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ERROR"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"OFF")," and can be referenced from the ",(0,o.kt)("inlineCode",{parentName:"p"},"log.LEVELS")," constant, such\nas ",(0,o.kt)("inlineCode",{parentName:"p"},"log.LEVELS.ERROR"),"."),(0,o.kt)("p",null,"To log messages to the system console, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"log.level(message)")," invocation, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"log.debug('this is a debug message')"),"."),(0,o.kt)("p",null,"To prevent writing of messages above a certain log level to the console, simply set the appropriate level. The default log level is ",(0,o.kt)("inlineCode",{parentName:"p"},"INFO"),", which\nmeans that ",(0,o.kt)("inlineCode",{parentName:"p"},"DEBUG")," messages will not be printed, unless enabled."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const Apify = require('apify');\nconst { log } = Apify.utils;\n\nlog.info('Information message', { someData: 123 }); // prints message\nlog.debug('Debug message', { debugData: 'hello' }); // doesn't print anything\n\nlog.setLevel(log.LEVELS.DEBUG);\nlog.debug('Debug message'); // prints message\n\nlog.setLevel(log.LEVELS.ERROR);\nlog.debug('Debug message'); // doesn't print anything\nlog.info('Info message'); // doesn't print anything\n\nlog.error('Error message', { errorDetails: 'This is bad!' }); // prints message\ntry {\n    throw new Error('Not good!');\n} catch (e) {\n    log.exception(e, 'Exception occurred', { errorDetails: 'This is really bad!' }); // prints message\n}\n\nlog.setOptions({ prefix: 'My actor' });\nlog.info('I am running!'); // prints \"My actor: I am running\"\n\nconst childLog = log.child({ prefix: 'Crawler' });\nlog.info('I am crawling!'); // prints \"My actor:Crawler: I am crawling\"\n")),(0,o.kt)("p",null,"Another very useful way of setting the log level is by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"APIFY_LOG_LEVEL")," environment variable, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"APIFY_LOG_LEVEL=DEBUG"),". This way,\nno code changes are necessary to turn on your debug messages and start debugging right away."),(0,o.kt)("p",null,"To add timestamps to your logs, you can override the default logger settings:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"log.setOptions({\n    logger: new log.LoggerText({ skipTime: false }),\n});\n")),(0,o.kt)("p",null,"You can customize your logging further by extending or replacing the default logger instances with your own implementations."),(0,o.kt)("hr",null),(0,o.kt)("a",{name:"levels"}),(0,o.kt)("h2",{id:"loglevels"},(0,o.kt)("inlineCode",{parentName:"h2"},"log.LEVELS")),(0,o.kt)("p",null,"Map of available log levels that's useful for easy setting of appropriate log levels. Each log level is represented internally by a number. Eg.\n",(0,o.kt)("inlineCode",{parentName:"p"},"log.LEVELS.DEBUG === 5"),"."),(0,o.kt)("hr",null),(0,o.kt)("a",{name:"setlevel"}),(0,o.kt)("h2",{id:"logsetlevellevel"},(0,o.kt)("inlineCode",{parentName:"h2"},"log.setLevel(level)")),(0,o.kt)("p",null,"Sets the log level to the given value, preventing messages from less important log levels from being printed to the console. Use in conjunction with\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"log.LEVELS")," constants such as"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"log.setLevel(log.LEVELS.DEBUG);\n")),(0,o.kt)("p",null,"Default log level is INFO."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"level")),": ",(0,o.kt)("inlineCode",{parentName:"li"},"number"))),(0,o.kt)("hr",null),(0,o.kt)("a",{name:"getlevel"}),(0,o.kt)("h2",{id:"loggetlevel"},(0,o.kt)("inlineCode",{parentName:"h2"},"log.getLevel()")),(0,o.kt)("p",null,"Returns the currently selected logging level. This is useful for checking whether a message will actually be printed to the console before one\nactually performs a resource intensive operation to construct the message, such as querying a DB for some metadata that need to be added. If the log\nlevel is not high enough at the moment, it doesn't make sense to execute the query."),(0,o.kt)("hr",null),(0,o.kt)("a",{name:"setoptions"}),(0,o.kt)("h2",{id:"logsetoptionsoptions"},(0,o.kt)("inlineCode",{parentName:"h2"},"log.setOptions(options)")),(0,o.kt)("p",null,"Configures logger."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"options")),": ",(0,o.kt)("a",{parentName:"li",href:"../typedefs/logger-options",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"LoggerOptions")))),(0,o.kt)("hr",null),(0,o.kt)("a",{name:"child"}),(0,o.kt)("h2",{id:"logchildoptions"},(0,o.kt)("inlineCode",{parentName:"h2"},"log.child([options])")),(0,o.kt)("p",null,"Creates a new instance of logger that inherits settings from a parent logger."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"[options]")),": ",(0,o.kt)("a",{parentName:"li",href:"../typedefs/logger-options",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"LoggerOptions"))," - Supports the same options as the ",(0,o.kt)("inlineCode",{parentName:"li"},"setOptions()")," method.")),(0,o.kt)("hr",null),(0,o.kt)("a",{name:"getoptions"}),(0,o.kt)("h2",{id:"loggetoptions"},(0,o.kt)("inlineCode",{parentName:"h2"},"log.getOptions()")),(0,o.kt)("p",null,"Returns the logger configuration."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns"),":"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../typedefs/logger-options",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"LoggerOptions"))),(0,o.kt)("hr",null),(0,o.kt)("a",{name:"debug"}),(0,o.kt)("h2",{id:"logdebugmessage-data"},(0,o.kt)("inlineCode",{parentName:"h2"},"log.debug(message, [data])")),(0,o.kt)("p",null,"Logs a ",(0,o.kt)("inlineCode",{parentName:"p"},"DEBUG")," message. By default, it will not be written to the console. To see ",(0,o.kt)("inlineCode",{parentName:"p"},"DEBUG")," messages in the console, set the log level to ",(0,o.kt)("inlineCode",{parentName:"p"},"DEBUG")," either\nusing the ",(0,o.kt)("inlineCode",{parentName:"p"},"log.setLevel(log.LEVELS.DEBUG)")," method or using the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"APIFY_LOG_LEVEL=DEBUG"),". Data are stringified and appended to the\nmessage."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"message")),": ",(0,o.kt)("inlineCode",{parentName:"li"},"string")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"[data]")),": ",(0,o.kt)("inlineCode",{parentName:"li"},"object"))),(0,o.kt)("hr",null),(0,o.kt)("a",{name:"info"}),(0,o.kt)("h2",{id:"loginfomessage-data"},(0,o.kt)("inlineCode",{parentName:"h2"},"log.info(message, [data])")),(0,o.kt)("p",null,"Logs an ",(0,o.kt)("inlineCode",{parentName:"p"},"INFO")," message. ",(0,o.kt)("inlineCode",{parentName:"p"},"INFO")," is the default log level so info messages will be always logged, unless the log level is changed. Data are stringified\nand appended to the message."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"message")),": ",(0,o.kt)("inlineCode",{parentName:"li"},"string")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"[data]")),": ",(0,o.kt)("inlineCode",{parentName:"li"},"object"))),(0,o.kt)("hr",null),(0,o.kt)("a",{name:"warning"}),(0,o.kt)("h2",{id:"logwarningmessage-data"},(0,o.kt)("inlineCode",{parentName:"h2"},"log.warning(message, [data])")),(0,o.kt)("p",null,"Logs a ",(0,o.kt)("inlineCode",{parentName:"p"},"WARNING")," level message. Data are stringified and appended to the message."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"message")),": ",(0,o.kt)("inlineCode",{parentName:"li"},"string")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"[data]")),": ",(0,o.kt)("inlineCode",{parentName:"li"},"object"))),(0,o.kt)("hr",null),(0,o.kt)("a",{name:"error"}),(0,o.kt)("h2",{id:"logerrormessage-data"},(0,o.kt)("inlineCode",{parentName:"h2"},"log.error(message, [data])")),(0,o.kt)("p",null,"Logs an ",(0,o.kt)("inlineCode",{parentName:"p"},"ERROR")," message. Use this method to log error messages that are not directly connected to an exception. For logging exceptions, use the\n",(0,o.kt)("inlineCode",{parentName:"p"},"log.exception")," method."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"message")),": ",(0,o.kt)("inlineCode",{parentName:"li"},"string")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"[data]")),": ",(0,o.kt)("inlineCode",{parentName:"li"},"object"))),(0,o.kt)("hr",null),(0,o.kt)("a",{name:"exception"}),(0,o.kt)("h2",{id:"logexceptionexception-message-data"},(0,o.kt)("inlineCode",{parentName:"h2"},"log.exception(exception, [message], [data])")),(0,o.kt)("p",null,"Logs an ",(0,o.kt)("inlineCode",{parentName:"p"},"ERROR")," level message with a nicely formatted exception. Note that the exception is the first parameter here and an additional message is only\noptional."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"exception")),": ",(0,o.kt)("inlineCode",{parentName:"li"},"Error")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"[message]")),": ",(0,o.kt)("inlineCode",{parentName:"li"},"string")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"[data]")),": ",(0,o.kt)("inlineCode",{parentName:"li"},"object"))),(0,o.kt)("hr",null))}u.isMDXComponent=!0}}]);