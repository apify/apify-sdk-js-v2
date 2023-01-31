"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6125,2610,9514],{2610:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(67294),r=n(10833),l=n(87681);function i(){return a.createElement(a.Fragment,null,a.createElement(r.d,{title:"Page Not Found"}),a.createElement(l.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},"Page Not Found"),a.createElement("p",null,"We could not find what you were looking for \ud83d\ude22"))))))}},83607:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ne});var a=n(67294),r=n(86010),l=n(10833),i=n(35281),o=n(43320),c=n(53791),s=n(74477),d=n(1116),u=n(87681),m=n(95999),b=n(2730);const p="backToTopButton_sjWU",f="backToTopButtonShow_xfvO";function v(){var e=(0,b.a)({threshold:300}),t=e.shown,n=e.scrollToTop;return a.createElement("button",{"aria-label":(0,m.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",i.k.common.backToTopButton,p,t&&f),type:"button",onClick:n})}var E=n(16550),h=n(87524),g=n(86668),_=n(66001),k=n(87462);function C(e){return a.createElement("svg",(0,k.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const I="collapseSidebarButton_PEFL",S="collapseSidebarButtonIcon_kv0_";function y(e){var t=e.onClick;return a.createElement("button",{type:"button",title:(0,m.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",I),onClick:t},a.createElement(C,{className:S}))}var N=n(59689),x=n(12466),Z=n(63366),A=n(14353),T=n(69688),w=n(86043),L=n(48596),M=n(39960),P=n(72389),B=["item","onItemClick","activePath","level","index"];function H(e){var t=e.categoryLabel,n=e.onClick;return a.createElement("button",{"aria-label":(0,m.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function F(e){var t=e.item,n=e.onItemClick,l=e.activePath,o=e.level,s=e.index,d=(0,Z.Z)(e,B),u=t.items,m=t.label,b=t.collapsible,p=t.className,f=t.href,v=(0,g.L)().docs.sidebar.autoCollapseCategories,E=function(e){var t=(0,P.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0}),[e,t])}(t),h=(0,c._F)(t,l),_=(0,L.Mg)(f,l),C=(0,w.u)({initialState:function(){return!!b&&(!h&&t.collapsed)}}),I=C.collapsed,S=C.setCollapsed,y=(0,A.f)(),N=y.expandedItem,x=y.setExpandedItem,F=function(e){void 0===e&&(e=!I),x(e?null:s),S(e)};return function(e){var t=e.isActive,n=e.collapsed,r=e.updateCollapsed,l=(0,T.D9)(t);(0,a.useEffect)((function(){t&&!l&&n&&r(!1)}),[t,l,n,r])}({isActive:h,collapsed:I,updateCollapsed:F}),(0,a.useEffect)((function(){b&&null!=N&&N!==s&&v&&S(!0)}),[b,N,s,S,v]),a.createElement("li",{className:(0,r.Z)(i.k.docs.docSidebarItemCategory,i.k.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":I},p)},a.createElement("div",{className:(0,r.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":_})},a.createElement(M.default,(0,k.Z)({className:(0,r.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!f&&b,"menu__link--active":h}),onClick:b?function(e){null==n||n(t),f?F(!1):(e.preventDefault(),F())}:function(){null==n||n(t)},"aria-current":_?"page":void 0,"aria-expanded":b?!I:void 0,href:b?null!=E?E:"#":E},d),m),f&&b&&a.createElement(H,{categoryLabel:m,onClick:function(e){e.preventDefault(),F()}})),a.createElement(w.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:I},a.createElement(X,{items:u,tabIndex:I?-1:0,onItemClick:n,activePath:l,level:o+1})))}var D=n(52263),O=n(13919),W=n(39471);const j="menuExternalLink_iHpy";var R=["item","onItemClick","activePath","level","index"];function V(e){var t=e.item,n=e.onItemClick,l=e.activePath,o=e.level,s=(e.index,(0,Z.Z)(e,R)),d=t.href,u=t.label,m=t.className,b=t.autoAddBaseUrl,p=(0,c._F)(t,l),f=(0,O.Z)(d),v=(0,D.default)().siteConfig.url;return d.startsWith(v)&&(s.target="_self"),a.createElement("li",{className:(0,r.Z)(i.k.docs.docSidebarItemLink,i.k.docs.docSidebarItemLinkLevel(o),"menu__list-item",m),key:u},a.createElement(M.default,(0,k.Z)({className:(0,r.Z)("menu__link",!f&&j,{"menu__link--active":p}),autoAddBaseUrl:b,"aria-current":p?"page":void 0,to:d},f&&{onClick:n?function(){return n(t)}:void 0},s),u,!f&&a.createElement(W.Z,null)))}const z="menuHtmlItem_M9Kj";function U(e){var t=e.item,n=e.level,l=e.index,o=t.value,c=t.defaultStyle,s=t.className;return a.createElement("li",{className:(0,r.Z)(i.k.docs.docSidebarItemLink,i.k.docs.docSidebarItemLinkLevel(n),c&&[z,"menu__list-item"],s),key:l,dangerouslySetInnerHTML:{__html:o}})}var G=["item"];function K(e){var t=e.item,n=(0,Z.Z)(e,G);switch(t.type){case"category":return a.createElement(F,(0,k.Z)({item:t},n));case"html":return a.createElement(U,(0,k.Z)({item:t},n));default:return a.createElement(V,(0,k.Z)({item:t},n))}}var Y=["items"];function q(e){var t=e.items,n=(0,Z.Z)(e,Y);return a.createElement(A.D,null,t.map((function(e,t){return a.createElement(K,(0,k.Z)({key:t,item:e,index:t},n))})))}const X=(0,a.memo)(q),J="menu_SIkG",Q="menuWithAnnouncementBar_GW3s";function $(e){var t=e.path,n=e.sidebar,l=e.className,o=function(){var e=(0,N.nT)().isActive,t=(0,a.useState)(e),n=t[0],r=t[1];return(0,x.RF)((function(t){var n=t.scrollY;e&&r(0===n)}),[e]),e&&n}();return a.createElement("nav",{"aria-label":(0,m.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,r.Z)("menu thin-scrollbar",J,o&&Q,l)},a.createElement("ul",{className:(0,r.Z)(i.k.docs.docSidebarMenu,"menu__list")},a.createElement(X,{items:n,activePath:t,level:1})))}const ee="sidebar_njMd",te="sidebarWithHideableNavbar_wUlq",ne="sidebarHidden_VK0M",ae="sidebarLogo_isFc";function re(e){var t=e.path,n=e.sidebar,l=e.onCollapse,i=e.isHidden,o=(0,g.L)(),c=o.navbar.hideOnScroll,s=o.docs.sidebar.hideable;return a.createElement("div",{className:(0,r.Z)(ee,c&&te,i&&ne)},c&&a.createElement(_.Z,{tabIndex:-1,className:ae}),a.createElement($,{path:t,sidebar:n}),s&&a.createElement(y,{onClick:l}))}const le=a.memo(re);var ie=n(13102),oe=n(93163),ce=function(e){var t=e.sidebar,n=e.path,l=(0,oe.e)();return a.createElement("ul",{className:(0,r.Z)(i.k.docs.docSidebarMenu,"menu__list")},a.createElement(X,{items:t,activePath:n,onItemClick:function(e){"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function se(e){return a.createElement(ie.Zo,{component:ce,props:e})}const de=a.memo(se);function ue(e){var t=(0,h.i)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(le,e),r&&a.createElement(de,e))}const me="expandButton_m80_",be="expandButtonIcon_BlDH";function pe(e){var t=e.toggleSidebar;return a.createElement("div",{className:me,title:(0,m.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(C,{className:be}))}const fe={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function ve(e){var t,n=e.children,r=(0,d.V)();return a.createElement(a.Fragment,{key:null!=(t=null==r?void 0:r.name)?t:"noSidebar"},n)}function Ee(e){var t=e.sidebar,n=e.hiddenSidebarContainer,l=e.setHiddenSidebarContainer,o=(0,E.TH)().pathname,c=(0,a.useState)(!1),s=c[0],d=c[1],u=(0,a.useCallback)((function(){s&&d(!1),l((function(e){return!e}))}),[l,s]);return a.createElement("aside",{className:(0,r.Z)(i.k.docs.docSidebarContainer,fe.docSidebarContainer,n&&fe.docSidebarContainerHidden),onTransitionEnd:function(e){e.currentTarget.classList.contains(fe.docSidebarContainer)&&n&&d(!0)}},a.createElement(ve,null,a.createElement("div",{className:(0,r.Z)(fe.sidebarViewport,s&&fe.sidebarViewportHidden)},a.createElement(ue,{sidebar:t,path:o,onCollapse:u,isHidden:s}),s&&a.createElement(pe,{toggleSidebar:u}))))}const he={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function ge(e){var t=e.hiddenSidebarContainer,n=e.children,l=(0,d.V)();return a.createElement("main",{className:(0,r.Z)(he.docMainContainer,(t||!l)&&he.docMainContainerEnhanced)},a.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",he.docItemWrapper,t&&he.docItemWrapperEnhanced)},n))}const _e="docPage__5DB",ke="docsWrapper_BCFX";function Ce(e){var t=e.children,n=(0,d.V)(),r=(0,a.useState)(!1),l=r[0],i=r[1];return a.createElement(u.Z,{wrapperClassName:ke},a.createElement(v,null),a.createElement("div",{className:_e},n&&a.createElement(Ee,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:i}),a.createElement(ge,{hiddenSidebarContainer:l},t)))}var Ie=n(2610),Se=n(90197);function ye(e){var t=e.versionMetadata;return a.createElement(a.Fragment,null,a.createElement(Se.Z,{version:t.version,tag:(0,o.os)(t.pluginId,t.version)}),a.createElement(l.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Ne(e){var t=e.versionMetadata,n=(0,c.hI)(e);if(!n)return a.createElement(Ie.default,null);var o=n.docElement,u=n.sidebarName,m=n.sidebarItems;return a.createElement(a.Fragment,null,a.createElement(ye,e),a.createElement(l.FG,{className:(0,r.Z)(i.k.wrapper.docsPages,i.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:u,items:m},a.createElement(Ce,null,o)))))}},14353:(e,t,n)=>{n.d(t,{D:()=>o,f:()=>c});var a=n(67294),r=n(69688),l=Symbol("EmptyContext"),i=a.createContext(l);function o(e){var t=e.children,n=(0,a.useState)(null),r=n[0],l=n[1],o=(0,a.useMemo)((function(){return{expandedItem:r,setExpandedItem:l}}),[r]);return a.createElement(i.Provider,{value:o},t)}function c(){var e=(0,a.useContext)(i);if(e===l)throw new r.i6("DocSidebarItemsExpandedStateProvider");return e}},2730:(e,t,n)=>{n.d(t,{a:()=>i});var a=n(67294),r=n(12466),l=n(85936);function i(e){var t=e.threshold,n=(0,a.useState)(!1),i=n[0],o=n[1],c=(0,a.useRef)(!1),s=(0,r.Ct)(),d=s.startScroll,u=s.cancelScroll;return(0,r.RF)((function(e,n){var a=e.scrollY,r=null==n?void 0:n.scrollY;r&&(c.current?c.current=!1:a>=r?(u(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,l.S)((function(e){e.location.hash&&(c.current=!0,o(!1))})),{shown:i,scrollToTop:function(){return d(0)}}}},3660:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var a=n(67294).createContext({options:{banner:"",breadcrumbs:!0,gitRefName:"master",minimal:!1,pluginId:"default",scopes:[]},reflections:{}});t.ApiDataContext=a},36454:(e,t,n)=>{var a=["options","packages"];function r(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n(20060),n(98878);var l=n(67294),i=n(83607),o=n(3660),c=function(e){return e&&e.__esModule?e:{default:e}},s=c(l),d=c(i);function u(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}function m(e,t,n){return Object.entries(e).forEach((function(a){var r=a[0],l=a[1];if("id"===r){var i="type"in e;(!i||i&&"reference"!==e.type)&&(t[Number(l)]=e,n&&(e.parentId=n.id))}else Array.isArray(l)?l.forEach((function(n){u(n)&&m(n,t,e)})):u(l)&&m(l,t,e)})),t}function b(e){var t={};return e.forEach((function(e){e.entryPoints.forEach((function(e){m(e.reflection,t)}))})),t}e.exports=function(e){var t=e.options,n=e.packages,i=r(e,a),c=l.useMemo((function(){return{options:t,reflections:b(n)}}),[t,n]);return s.default.createElement(o.ApiDataContext.Provider,{value:c},s.default.createElement("div",{className:"apiPage"},s.default.createElement(d.default,i)))}},20060:(e,t,n)=>{n.r(t)},98878:(e,t,n)=>{n.r(t)}}]);