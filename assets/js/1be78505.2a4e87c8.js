"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9514,2610],{2610:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var n=a(67294),r=a(10833),l=a(87681);function i(){return n.createElement(n.Fragment,null,n.createElement(r.d,{title:"Page Not Found"}),n.createElement(l.Z,null,n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},"Page Not Found"),n.createElement("p",null,"We could not find what you were looking for \ud83d\ude22"))))))}},83607:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Ze});var n=a(67294),r=a(86010),l=a(10833),i=a(35281),o=a(43320),c=a(53791),s=a(74477),d=a(1116),m=a(87681),u=a(95999),b=a(2730);const p="backToTopButton_sjWU",v="backToTopButtonShow_xfvO";function f(){var e=(0,b.a)({threshold:300}),t=e.shown,a=e.scrollToTop;return n.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",i.k.common.backToTopButton,p,t&&v),type:"button",onClick:a})}var E=a(16550),h=a(87524),_=a(86668),g=a(21327),k=a(87462);function C(e){return n.createElement("svg",(0,k.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const I="collapseSidebarButton_PEFL",S="collapseSidebarButtonIcon_kv0_";function N(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",I),onClick:t},n.createElement(C,{className:S}))}var Z=a(59689),x=a(12466),y=a(63366),T=a(14353),w=a(69688),L=a(86043),A=a(48596),M=a(39960),B=a(72389),H=["item","onItemClick","activePath","level","index"];function F(e){var t=e.categoryLabel,a=e.onClick;return n.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:a})}function P(e){var t=e.item,a=e.onItemClick,l=e.activePath,o=e.level,s=e.index,d=(0,y.Z)(e,H),m=t.items,u=t.label,b=t.collapsible,p=t.className,v=t.href,f=(0,_.L)().docs.sidebar.autoCollapseCategories,E=function(e){var t=(0,B.Z)();return(0,n.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0}),[e,t])}(t),h=(0,c._F)(t,l),g=(0,A.Mg)(v,l),C=(0,L.u)({initialState:function(){return!!b&&(!h&&t.collapsed)}}),I=C.collapsed,S=C.setCollapsed,N=(0,T.f)(),Z=N.expandedItem,x=N.setExpandedItem,P=function(e){void 0===e&&(e=!I),x(e?null:s),S(e)};return function(e){var t=e.isActive,a=e.collapsed,r=e.updateCollapsed,l=(0,w.D9)(t);(0,n.useEffect)((function(){t&&!l&&a&&r(!1)}),[t,l,a,r])}({isActive:h,collapsed:I,updateCollapsed:P}),(0,n.useEffect)((function(){b&&null!=Z&&Z!==s&&f&&S(!0)}),[b,Z,s,S,f]),n.createElement("li",{className:(0,r.Z)(i.k.docs.docSidebarItemCategory,i.k.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":I},p)},n.createElement("div",{className:(0,r.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},n.createElement(M.default,(0,k.Z)({className:(0,r.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!v&&b,"menu__link--active":h}),onClick:b?function(e){null==a||a(t),v?P(!1):(e.preventDefault(),P())}:function(){null==a||a(t)},"aria-current":g?"page":void 0,"aria-expanded":b?!I:void 0,href:b?null!=E?E:"#":E},d),u),v&&b&&n.createElement(F,{categoryLabel:u,onClick:function(e){e.preventDefault(),P()}})),n.createElement(L.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:I},n.createElement(X,{items:m,tabIndex:I?-1:0,onItemClick:a,activePath:l,level:o+1})))}var D=a(52263),W=a(13919),R=a(39471);const V="menuExternalLink_iHpy";var z=["item","onItemClick","activePath","level","index"];function U(e){var t=e.item,a=e.onItemClick,l=e.activePath,o=e.level,s=(e.index,(0,y.Z)(e,z)),d=t.href,m=t.label,u=t.className,b=t.autoAddBaseUrl,p=(0,c._F)(t,l),v=(0,W.Z)(d),f=(0,D.default)().siteConfig.url;return d.startsWith(f)&&(s.target="_self"),n.createElement("li",{className:(0,r.Z)(i.k.docs.docSidebarItemLink,i.k.docs.docSidebarItemLinkLevel(o),"menu__list-item",u),key:m},n.createElement(M.default,(0,k.Z)({className:(0,r.Z)("menu__link",!v&&V,{"menu__link--active":p}),autoAddBaseUrl:b,"aria-current":p?"page":void 0,to:d},v&&{onClick:a?function(){return a(t)}:void 0},s),m,!v&&n.createElement(R.Z,null)))}const j="menuHtmlItem_M9Kj";function G(e){var t=e.item,a=e.level,l=e.index,o=t.value,c=t.defaultStyle,s=t.className;return n.createElement("li",{className:(0,r.Z)(i.k.docs.docSidebarItemLink,i.k.docs.docSidebarItemLinkLevel(a),c&&[j,"menu__list-item"],s),key:l,dangerouslySetInnerHTML:{__html:o}})}var K=["item"];function Y(e){var t=e.item,a=(0,y.Z)(e,K);switch(t.type){case"category":return n.createElement(P,(0,k.Z)({item:t},a));case"html":return n.createElement(G,(0,k.Z)({item:t},a));default:return n.createElement(U,(0,k.Z)({item:t},a))}}var q=["items"];function O(e){var t=e.items,a=(0,y.Z)(e,q);return n.createElement(T.D,null,t.map((function(e,t){return n.createElement(Y,(0,k.Z)({key:t,item:e,index:t},a))})))}const X=(0,n.memo)(O),J="menu_SIkG",Q="menuWithAnnouncementBar_GW3s";function $(e){var t=e.path,a=e.sidebar,l=e.className,o=function(){var e=(0,Z.nT)().isActive,t=(0,n.useState)(e),a=t[0],r=t[1];return(0,x.RF)((function(t){var a=t.scrollY;e&&r(0===a)}),[e]),e&&a}();return n.createElement("nav",{"aria-label":(0,u.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,r.Z)("menu thin-scrollbar",J,o&&Q,l)},n.createElement("ul",{className:(0,r.Z)(i.k.docs.docSidebarMenu,"menu__list")},n.createElement(X,{items:a,activePath:t,level:1})))}const ee="sidebar_njMd",te="sidebarWithHideableNavbar_wUlq",ae="sidebarHidden_VK0M",ne="sidebarLogo_isFc";function re(e){var t=e.path,a=e.sidebar,l=e.onCollapse,i=e.isHidden,o=(0,_.L)(),c=o.navbar.hideOnScroll,s=o.docs.sidebar.hideable;return n.createElement("div",{className:(0,r.Z)(ee,c&&te,i&&ae)},c&&n.createElement(g.Z,{tabIndex:-1,className:ne}),n.createElement($,{path:t,sidebar:a}),s&&n.createElement(N,{onClick:l}))}const le=n.memo(re);var ie=a(13102),oe=a(93163),ce=function(e){var t=e.sidebar,a=e.path,l=(0,oe.e)();return n.createElement("ul",{className:(0,r.Z)(i.k.docs.docSidebarMenu,"menu__list")},n.createElement(X,{items:t,activePath:a,onItemClick:function(e){"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function se(e){return n.createElement(ie.Zo,{component:ce,props:e})}const de=n.memo(se);function me(e){var t=(0,h.i)(),a="desktop"===t||"ssr"===t,r="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(le,e),r&&n.createElement(de,e))}const ue="expandButton_m80_",be="expandButtonIcon_BlDH";function pe(e){var t=e.toggleSidebar;return n.createElement("div",{className:ue,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},n.createElement(C,{className:be}))}const ve={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function fe(e){var t,a=e.children,r=(0,d.V)();return n.createElement(n.Fragment,{key:null!=(t=null==r?void 0:r.name)?t:"noSidebar"},a)}function Ee(e){var t=e.sidebar,a=e.hiddenSidebarContainer,l=e.setHiddenSidebarContainer,o=(0,E.TH)().pathname,c=(0,n.useState)(!1),s=c[0],d=c[1],m=(0,n.useCallback)((function(){s&&d(!1),l((function(e){return!e}))}),[l,s]);return n.createElement("aside",{className:(0,r.Z)(i.k.docs.docSidebarContainer,ve.docSidebarContainer,a&&ve.docSidebarContainerHidden),onTransitionEnd:function(e){e.currentTarget.classList.contains(ve.docSidebarContainer)&&a&&d(!0)}},n.createElement(fe,null,n.createElement("div",{className:(0,r.Z)(ve.sidebarViewport,s&&ve.sidebarViewportHidden)},n.createElement(me,{sidebar:t,path:o,onCollapse:m,isHidden:s}),s&&n.createElement(pe,{toggleSidebar:m}))))}const he={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function _e(e){var t=e.hiddenSidebarContainer,a=e.children,l=(0,d.V)();return n.createElement("main",{className:(0,r.Z)(he.docMainContainer,(t||!l)&&he.docMainContainerEnhanced)},n.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",he.docItemWrapper,t&&he.docItemWrapperEnhanced)},a))}const ge="docPage__5DB",ke="docsWrapper_BCFX";function Ce(e){var t=e.children,a=(0,d.V)(),r=(0,n.useState)(!1),l=r[0],i=r[1];return n.createElement(m.Z,{wrapperClassName:ke},n.createElement(f,null),n.createElement("div",{className:ge},a&&n.createElement(Ee,{sidebar:a.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:i}),n.createElement(_e,{hiddenSidebarContainer:l},t)))}var Ie=a(2610),Se=a(90197);function Ne(e){var t=e.versionMetadata;return n.createElement(n.Fragment,null,n.createElement(Se.Z,{version:t.version,tag:(0,o.os)(t.pluginId,t.version)}),n.createElement(l.d,null,t.noIndex&&n.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Ze(e){var t=e.versionMetadata,a=(0,c.hI)(e);if(!a)return n.createElement(Ie.default,null);var o=a.docElement,m=a.sidebarName,u=a.sidebarItems;return n.createElement(n.Fragment,null,n.createElement(Ne,e),n.createElement(l.FG,{className:(0,r.Z)(i.k.wrapper.docsPages,i.k.page.docsDocPage,e.versionMetadata.className)},n.createElement(s.q,{version:t},n.createElement(d.b,{name:m,items:u},n.createElement(Ce,null,o)))))}},14353:(e,t,a)=>{a.d(t,{D:()=>o,f:()=>c});var n=a(67294),r=a(69688),l=Symbol("EmptyContext"),i=n.createContext(l);function o(e){var t=e.children,a=(0,n.useState)(null),r=a[0],l=a[1],o=(0,n.useMemo)((function(){return{expandedItem:r,setExpandedItem:l}}),[r]);return n.createElement(i.Provider,{value:o},t)}function c(){var e=(0,n.useContext)(i);if(e===l)throw new r.i6("DocSidebarItemsExpandedStateProvider");return e}},2730:(e,t,a)=>{a.d(t,{a:()=>i});var n=a(67294),r=a(12466),l=a(85936);function i(e){var t=e.threshold,a=(0,n.useState)(!1),i=a[0],o=a[1],c=(0,n.useRef)(!1),s=(0,r.Ct)(),d=s.startScroll,m=s.cancelScroll;return(0,r.RF)((function(e,a){var n=e.scrollY,r=null==a?void 0:a.scrollY;r&&(c.current?c.current=!1:n>=r?(m(),o(!1)):n<t?o(!1):n+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,l.S)((function(e){e.location.hash&&(c.current=!0,o(!1))})),{shown:i,scrollToTop:function(){return d(0)}}}}}]);