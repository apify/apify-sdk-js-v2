"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6125,2610,9514],{2610:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var a=n(67294),r=n(44996),l=n(72389),o=n(10833),i=n(39960),c=n(71341);function s(){var e=(0,r.Z)("/docs/api"),t=(0,r.Z)("/docs/1.3.1/api"),n=(0,r.Z)("/docs/2.3/api/"),s=(0,r.Z)("/docs/1.3/api/");if((0,l.Z)()){var d=window.location.pathname,u="",m=!1;if(d.startsWith(e)&&(u=n+d.substring(e.length+1),m=!0),d.match(/\/docs\/2\.\d+\.\d+\/api/)&&(u=n+d.substring(t.length+1),m=!0),d.match(/\/api\/[12]\.\d+\/\w+/)){var p=d.match(/\/api\/([12])\.\d+\/(.*)/);u=("1"===p[1]?s:n)+p[2],m=!0}if(d.match(/\/docs\/[01]\.\d+\.\d+\/api\/(.*)/))u=s+d.match(/\/docs\/[01]\.\d+\.\d+\/api\/(.*)/)[1],m=!0;m&&window.location.href!==u&&(window.location.href=u)}return a.createElement(a.Fragment,null,a.createElement(o.d,{title:"Page Not Found"}),a.createElement(c.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},"Page Not Found"),a.createElement("p",null,"We could not find what you were looking for \ud83d\ude22"),a.createElement("p",null,"Recently we ",a.createElement("b",null,"released Apify SDK v3 "),"and we significantly upgraded the documentation."),a.createElement("p",null,"If you're looking for documentation of ",a.createElement("b",null,"Apify SDK v2"),",",a.createElement(i.default,{to:"/docs/2.3/guides/apify-platform"}," you can find it here"),"."),a.createElement("p",null,"For ",a.createElement("b",null,"Apify SDK v3 docs"),", go to the ",a.createElement(i.default,{to:"/"},"homepage"),"."))))))}},83607:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ze});var a=n(67294),r=n(86010),l=n(10833),o=n(35281),i=n(43320),c=n(53791),s=n(74477),d=n(1116),u=n(71341),m=n(95999),p=n(2730);const f="backToTopButton_sjWU",b="backToTopButtonShow_xfvO";function v(){var e=(0,p.a)({threshold:300}),t=e.shown,n=e.scrollToTop;return a.createElement("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",o.k.common.backToTopButton,f,t&&b),type:"button",onClick:n})}var h=n(16550),E=n(87524),g=n(86668),_=n(21327),k=n(87462);function C(e){return a.createElement("svg",(0,k.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const y="collapseSidebarButton_PEFL",I="collapseSidebarButtonIcon_kv0_";function S(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,m.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",y),onClick:t},a.createElement(C,{className:I}))}var N=n(59689),Z=n(12466),x=n(63366),w=n(14353),A=n(69688),T=n(86043),M=n(48596),L=n(39960),P=n(72389),B=["item","onItemClick","activePath","level","index"];function D(e){var t=e.categoryLabel,n=e.onClick;return a.createElement("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function F(e){var t=e.item,n=e.onItemClick,l=e.activePath,i=e.level,s=e.index,d=(0,x.Z)(e,B),u=t.items,m=t.label,p=t.collapsible,f=t.className,b=t.href,v=(0,g.L)().docs.sidebar.autoCollapseCategories,h=function(e){var t=(0,P.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0}),[e,t])}(t),E=(0,c._F)(t,l),_=(0,M.Mg)(b,l),C=(0,T.u)({initialState:function(){return!!p&&(!E&&t.collapsed)}}),y=C.collapsed,I=C.setCollapsed,S=(0,w.f)(),N=S.expandedItem,Z=S.setExpandedItem,F=function(e){void 0===e&&(e=!y),Z(e?null:s),I(e)};return function(e){var t=e.isActive,n=e.collapsed,r=e.updateCollapsed,l=(0,A.D9)(t);(0,a.useEffect)((function(){t&&!l&&n&&r(!1)}),[t,l,n,r])}({isActive:E,collapsed:y,updateCollapsed:F}),(0,a.useEffect)((function(){p&&null!=N&&N!==s&&v&&I(!0)}),[p,N,s,I,v]),a.createElement("li",{className:(0,r.Z)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":y},f)},a.createElement("div",{className:(0,r.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":_})},a.createElement(L.default,(0,k.Z)({className:(0,r.Z)("menu__link",{"menu__link--sublist":p,"menu__link--sublist-caret":!b&&p,"menu__link--active":E}),onClick:p?function(e){null==n||n(t),b?F(!1):(e.preventDefault(),F())}:function(){null==n||n(t)},"aria-current":_?"page":void 0,"aria-expanded":p?!y:void 0,href:p?null!=h?h:"#":h},d),m),b&&p&&a.createElement(D,{categoryLabel:m,onClick:function(e){e.preventDefault(),F()}})),a.createElement(T.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:y},a.createElement(X,{items:u,tabIndex:y?-1:0,onItemClick:n,activePath:l,level:i+1})))}var H=n(52263),W=n(13919),O=n(39471);const j="menuExternalLink_iHpy";var R=["item","onItemClick","activePath","level","index"];function z(e){var t=e.item,n=e.onItemClick,l=e.activePath,i=e.level,s=(e.index,(0,x.Z)(e,R)),d=t.href,u=t.label,m=t.className,p=t.autoAddBaseUrl,f=(0,c._F)(t,l),b=(0,W.Z)(d),v=(0,H.default)().siteConfig.url;return d.startsWith(v)&&(s.target="_self"),a.createElement("li",{className:(0,r.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",m),key:u},a.createElement(L.default,(0,k.Z)({className:(0,r.Z)("menu__link",!b&&j,{"menu__link--active":f}),autoAddBaseUrl:p,"aria-current":f?"page":void 0,to:d},b&&{onClick:n?function(){return n(t)}:void 0},s),u,!b&&a.createElement(O.Z,null)))}const K="menuHtmlItem_M9Kj";function U(e){var t=e.item,n=e.level,l=e.index,i=t.value,c=t.defaultStyle,s=t.className;return a.createElement("li",{className:(0,r.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(n),c&&[K,"menu__list-item"],s),key:l,dangerouslySetInnerHTML:{__html:i}})}var V=["item"];function G(e){var t=e.item,n=(0,x.Z)(e,V);switch(t.type){case"category":return a.createElement(F,(0,k.Z)({item:t},n));case"html":return a.createElement(U,(0,k.Z)({item:t},n));default:return a.createElement(z,(0,k.Z)({item:t},n))}}var Y=["items"];function q(e){var t=e.items,n=(0,x.Z)(e,Y);return a.createElement(w.D,null,t.map((function(e,t){return a.createElement(G,(0,k.Z)({key:t,item:e,index:t},n))})))}const X=(0,a.memo)(q),J="menu_SIkG",Q="menuWithAnnouncementBar_GW3s";function $(e){var t=e.path,n=e.sidebar,l=e.className,i=function(){var e=(0,N.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,Z.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}();return a.createElement("nav",{className:(0,r.Z)("menu thin-scrollbar",J,i&&Q,l)},a.createElement("ul",{className:(0,r.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(X,{items:n,activePath:t,level:1})))}const ee="sidebar_njMd",te="sidebarWithHideableNavbar_wUlq",ne="sidebarHidden_VK0M",ae="sidebarLogo_isFc";function re(e){var t=e.path,n=e.sidebar,l=e.onCollapse,o=e.isHidden,i=(0,g.L)(),c=i.navbar.hideOnScroll,s=i.docs.sidebar.hideable;return a.createElement("div",{className:(0,r.Z)(ee,c&&te,o&&ne)},c&&a.createElement(_.Z,{tabIndex:-1,className:ae}),a.createElement($,{path:t,sidebar:n}),s&&a.createElement(S,{onClick:l}))}const le=a.memo(re);var oe=n(13102),ie=n(93163),ce=function(e){var t=e.sidebar,n=e.path,l=(0,ie.e)();return a.createElement("ul",{className:(0,r.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(X,{items:t,activePath:n,onItemClick:function(e){"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function se(e){return a.createElement(oe.Zo,{component:ce,props:e})}const de=a.memo(se);function ue(e){var t=(0,E.i)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(le,e),r&&a.createElement(de,e))}const me="expandButton_m80_",pe="expandButtonIcon_BlDH";function fe(e){var t=e.toggleSidebar;return a.createElement("div",{className:me,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(C,{className:pe}))}const be="docSidebarContainer_b6E3",ve="docSidebarContainerHidden_b3ry";function he(e){var t,n=e.children,r=(0,d.V)();return a.createElement(a.Fragment,{key:null!=(t=null==r?void 0:r.name)?t:"noSidebar"},n)}function Ee(e){var t=e.sidebar,n=e.hiddenSidebarContainer,l=e.setHiddenSidebarContainer,i=(0,h.TH)().pathname,c=(0,a.useState)(!1),s=c[0],d=c[1],u=(0,a.useCallback)((function(){s&&d(!1),l((function(e){return!e}))}),[l,s]);return a.createElement("aside",{className:(0,r.Z)(o.k.docs.docSidebarContainer,be,n&&ve),onTransitionEnd:function(e){e.currentTarget.classList.contains(be)&&n&&d(!0)}},a.createElement(he,null,a.createElement(ue,{sidebar:t,path:i,onCollapse:u,isHidden:s})),s&&a.createElement(fe,{toggleSidebar:u}))}const ge={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function _e(e){var t=e.hiddenSidebarContainer,n=e.children,l=(0,d.V)();return a.createElement("main",{className:(0,r.Z)(ge.docMainContainer,(t||!l)&&ge.docMainContainerEnhanced)},a.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",ge.docItemWrapper,t&&ge.docItemWrapperEnhanced)},n))}const ke="docPage__5DB",Ce="docsWrapper_BCFX";function ye(e){var t=e.children,n=(0,d.V)(),r=(0,a.useState)(!1),l=r[0],o=r[1];return a.createElement(u.Z,{wrapperClassName:Ce},a.createElement(v,null),a.createElement("div",{className:ke},n&&a.createElement(Ee,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:o}),a.createElement(_e,{hiddenSidebarContainer:l},t)))}var Ie=n(2610),Se=n(90197);function Ne(e){var t=e.versionMetadata;return a.createElement(a.Fragment,null,a.createElement(Se.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),a.createElement(l.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Ze(e){var t=e.versionMetadata,n=(0,c.hI)(e);if(!n)return a.createElement(Ie.default,null);var i=n.docElement,u=n.sidebarName,m=n.sidebarItems;return a.createElement(a.Fragment,null,a.createElement(Ne,e),a.createElement(l.FG,{className:(0,r.Z)(o.k.wrapper.docsPages,o.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:u,items:m},a.createElement(ye,null,i)))))}},14353:(e,t,n)=>{n.d(t,{D:()=>i,f:()=>c});var a=n(67294),r=n(69688),l=Symbol("EmptyContext"),o=a.createContext(l);function i(e){var t=e.children,n=(0,a.useState)(null),r=n[0],l=n[1],i=(0,a.useMemo)((function(){return{expandedItem:r,setExpandedItem:l}}),[r]);return a.createElement(o.Provider,{value:i},t)}function c(){var e=(0,a.useContext)(o);if(e===l)throw new r.i6("DocSidebarItemsExpandedStateProvider");return e}},2730:(e,t,n)=>{n.d(t,{a:()=>o});var a=n(67294),r=n(12466),l=n(85936);function o(e){var t=e.threshold,n=(0,a.useState)(!1),o=n[0],i=n[1],c=(0,a.useRef)(!1),s=(0,r.Ct)(),d=s.startScroll,u=s.cancelScroll;return(0,r.RF)((function(e,n){var a=e.scrollY,r=null==n?void 0:n.scrollY;r&&(c.current?c.current=!1:a>=r?(u(),i(!1)):a<t?i(!1):a+window.innerHeight<document.documentElement.scrollHeight&&i(!0))})),(0,l.S)((function(e){e.location.hash&&(c.current=!0,i(!1))})),{shown:o,scrollToTop:function(){return d(0)}}}},3660:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var a=n(67294).createContext({options:{banner:"",breadcrumbs:!0,gitRefName:"master",minimal:!1,pluginId:"default",scopes:[]},reflections:{}});t.ApiDataContext=a},36454:(e,t,n)=>{var a=["options","packages"];function r(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n(20060),n(98878);var l=n(67294),o=n(83607),i=n(3660),c=function(e){return e&&e.__esModule?e:{default:e}},s=c(l),d=c(o);function u(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}function m(e,t,n){return Object.entries(e).forEach((function(a){var r=a[0],l=a[1];if("id"===r){var o="type"in e;(!o||o&&"reference"!==e.type)&&(t[Number(l)]=e,n&&(e.parentId=n.id))}else Array.isArray(l)?l.forEach((function(n){u(n)&&m(n,t,e)})):u(l)&&m(l,t,e)})),t}function p(e){var t={};return e.forEach((function(e){e.entryPoints.forEach((function(e){m(e.reflection,t)}))})),t}e.exports=function(e){var t=e.options,n=e.packages,o=r(e,a),c=l.useMemo((function(){return{options:t,reflections:p(n)}}),[t,n]);return s.default.createElement(i.ApiDataContext.Provider,{value:c},s.default.createElement("div",{className:"apiPage"},s.default.createElement(d.default,o)))}},20060:(e,t,n)=>{n.r(t)},98878:(e,t,n)=>{n.r(t)}}]);