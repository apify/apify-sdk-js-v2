"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9514,2610],{2610:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});var n=a(67294),l=a(44996),r=a(72389),o=a(10833),i=a(39960),c=a(71341);function s(){var e=(0,l.Z)("/docs/api"),t=(0,l.Z)("/docs/1.3.1/api"),a=(0,l.Z)("/docs/2.3/api/"),s=(0,l.Z)("/docs/1.3/api/");if((0,r.Z)()){var d=window.location.pathname,m="",u=!1;if(d.startsWith(e)&&(m=a+d.substring(e.length+1),u=!0),d.match(/\/docs\/2\.\d+\.\d+\/api/)&&(m=a+d.substring(t.length+1),u=!0),d.match(/\/api\/[12]\.\d+\/\w+/)){var b=d.match(/\/api\/([12])\.\d+\/(.*)/);m=("1"===b[1]?s:a)+b[2],u=!0}if(d.match(/\/docs\/[01]\.\d+\.\d+\/api\/(.*)/))m=s+d.match(/\/docs\/[01]\.\d+\.\d+\/api\/(.*)/)[1],u=!0;u&&window.location.href!==m&&(window.location.href=m)}return n.createElement(n.Fragment,null,n.createElement(o.d,{title:"Page Not Found"}),n.createElement(c.Z,null,n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},"Page Not Found"),n.createElement("p",null,"We could not find what you were looking for \ud83d\ude22"),n.createElement("p",null,"Recently we ",n.createElement("b",null,"released Apify SDK v3 "),"and we significantly upgraded the documentation."),n.createElement("p",null,"If you're looking for documentation of ",n.createElement("b",null,"Apify SDK v2"),",",n.createElement(i.default,{to:"/docs/2.3/guides/apify-platform"}," you can find it here"),"."),n.createElement("p",null,"For ",n.createElement("b",null,"Apify SDK v3 docs"),", go to the ",n.createElement(i.default,{to:"/"},"homepage"),"."))))))}},83607:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Ne});var n=a(67294),l=a(86010),r=a(10833),o=a(35281),i=a(43320),c=a(53791),s=a(74477),d=a(1116),m=a(71341),u=a(95999),b=a(2730);const p="backToTopButton_sjWU",f="backToTopButtonShow_xfvO";function v(){var e=(0,b.a)({threshold:300}),t=e.shown,a=e.scrollToTop;return n.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",o.k.common.backToTopButton,p,t&&f),type:"button",onClick:a})}var h=a(16550),E=a(87524),g=a(86668),_=a(21327),k=a(87462);function C(e){return n.createElement("svg",(0,k.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const I="collapseSidebarButton_PEFL",S="collapseSidebarButtonIcon_kv0_";function Z(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",I),onClick:t},n.createElement(C,{className:S}))}var y=a(59689),N=a(12466),x=a(63366),w=a(14353),T=a(69688),A=a(86043),L=a(48596),M=a(39960),B=a(72389),F=["item","onItemClick","activePath","level","index"];function H(e){var t=e.categoryLabel,a=e.onClick;return n.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:a})}function P(e){var t=e.item,a=e.onItemClick,r=e.activePath,i=e.level,s=e.index,d=(0,x.Z)(e,F),m=t.items,u=t.label,b=t.collapsible,p=t.className,f=t.href,v=(0,g.L)().docs.sidebar.autoCollapseCategories,h=function(e){var t=(0,B.Z)();return(0,n.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0}),[e,t])}(t),E=(0,c._F)(t,r),_=(0,L.Mg)(f,r),C=(0,A.u)({initialState:function(){return!!b&&(!E&&t.collapsed)}}),I=C.collapsed,S=C.setCollapsed,Z=(0,w.f)(),y=Z.expandedItem,N=Z.setExpandedItem,P=function(e){void 0===e&&(e=!I),N(e?null:s),S(e)};return function(e){var t=e.isActive,a=e.collapsed,l=e.updateCollapsed,r=(0,T.D9)(t);(0,n.useEffect)((function(){t&&!r&&a&&l(!1)}),[t,r,a,l])}({isActive:E,collapsed:I,updateCollapsed:P}),(0,n.useEffect)((function(){b&&null!=y&&y!==s&&v&&S(!0)}),[b,y,s,S,v]),n.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":I},p)},n.createElement("div",{className:(0,l.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":_})},n.createElement(M.default,(0,k.Z)({className:(0,l.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!f&&b,"menu__link--active":E}),onClick:b?function(e){null==a||a(t),f?P(!1):(e.preventDefault(),P())}:function(){null==a||a(t)},"aria-current":_?"page":void 0,"aria-expanded":b?!I:void 0,href:b?null!=h?h:"#":h},d),u),f&&b&&n.createElement(H,{categoryLabel:u,onClick:function(e){e.preventDefault(),P()}})),n.createElement(A.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:I},n.createElement(X,{items:m,tabIndex:I?-1:0,onItemClick:a,activePath:r,level:i+1})))}var D=a(52263),W=a(13919),R=a(39471);const z="menuExternalLink_iHpy";var K=["item","onItemClick","activePath","level","index"];function U(e){var t=e.item,a=e.onItemClick,r=e.activePath,i=e.level,s=(e.index,(0,x.Z)(e,K)),d=t.href,m=t.label,u=t.className,b=t.autoAddBaseUrl,p=(0,c._F)(t,r),f=(0,W.Z)(d),v=(0,D.default)().siteConfig.url;return d.startsWith(v)&&(s.target="_self"),n.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",u),key:m},n.createElement(M.default,(0,k.Z)({className:(0,l.Z)("menu__link",!f&&z,{"menu__link--active":p}),autoAddBaseUrl:b,"aria-current":p?"page":void 0,to:d},f&&{onClick:a?function(){return a(t)}:void 0},s),m,!f&&n.createElement(R.Z,null)))}const V="menuHtmlItem_M9Kj";function j(e){var t=e.item,a=e.level,r=e.index,i=t.value,c=t.defaultStyle,s=t.className;return n.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(a),c&&[V,"menu__list-item"],s),key:r,dangerouslySetInnerHTML:{__html:i}})}var G=["item"];function Y(e){var t=e.item,a=(0,x.Z)(e,G);switch(t.type){case"category":return n.createElement(P,(0,k.Z)({item:t},a));case"html":return n.createElement(j,(0,k.Z)({item:t},a));default:return n.createElement(U,(0,k.Z)({item:t},a))}}var q=["items"];function O(e){var t=e.items,a=(0,x.Z)(e,q);return n.createElement(w.D,null,t.map((function(e,t){return n.createElement(Y,(0,k.Z)({key:t,item:e,index:t},a))})))}const X=(0,n.memo)(O),J="menu_SIkG",Q="menuWithAnnouncementBar_GW3s";function $(e){var t=e.path,a=e.sidebar,r=e.className,i=function(){var e=(0,y.nT)().isActive,t=(0,n.useState)(e),a=t[0],l=t[1];return(0,N.RF)((function(t){var a=t.scrollY;e&&l(0===a)}),[e]),e&&a}();return n.createElement("nav",{className:(0,l.Z)("menu thin-scrollbar",J,i&&Q,r)},n.createElement("ul",{className:(0,l.Z)(o.k.docs.docSidebarMenu,"menu__list")},n.createElement(X,{items:a,activePath:t,level:1})))}const ee="sidebar_njMd",te="sidebarWithHideableNavbar_wUlq",ae="sidebarHidden_VK0M",ne="sidebarLogo_isFc";function le(e){var t=e.path,a=e.sidebar,r=e.onCollapse,o=e.isHidden,i=(0,g.L)(),c=i.navbar.hideOnScroll,s=i.docs.sidebar.hideable;return n.createElement("div",{className:(0,l.Z)(ee,c&&te,o&&ae)},c&&n.createElement(_.Z,{tabIndex:-1,className:ne}),n.createElement($,{path:t,sidebar:a}),s&&n.createElement(Z,{onClick:r}))}const re=n.memo(le);var oe=a(13102),ie=a(93163),ce=function(e){var t=e.sidebar,a=e.path,r=(0,ie.e)();return n.createElement("ul",{className:(0,l.Z)(o.k.docs.docSidebarMenu,"menu__list")},n.createElement(X,{items:t,activePath:a,onItemClick:function(e){"category"===e.type&&e.href&&r.toggle(),"link"===e.type&&r.toggle()},level:1}))};function se(e){return n.createElement(oe.Zo,{component:ce,props:e})}const de=n.memo(se);function me(e){var t=(0,E.i)(),a="desktop"===t||"ssr"===t,l="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(re,e),l&&n.createElement(de,e))}const ue="expandButton_m80_",be="expandButtonIcon_BlDH";function pe(e){var t=e.toggleSidebar;return n.createElement("div",{className:ue,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},n.createElement(C,{className:be}))}const fe="docSidebarContainer_b6E3",ve="docSidebarContainerHidden_b3ry";function he(e){var t,a=e.children,l=(0,d.V)();return n.createElement(n.Fragment,{key:null!=(t=null==l?void 0:l.name)?t:"noSidebar"},a)}function Ee(e){var t=e.sidebar,a=e.hiddenSidebarContainer,r=e.setHiddenSidebarContainer,i=(0,h.TH)().pathname,c=(0,n.useState)(!1),s=c[0],d=c[1],m=(0,n.useCallback)((function(){s&&d(!1),r((function(e){return!e}))}),[r,s]);return n.createElement("aside",{className:(0,l.Z)(o.k.docs.docSidebarContainer,fe,a&&ve),onTransitionEnd:function(e){e.currentTarget.classList.contains(fe)&&a&&d(!0)}},n.createElement(he,null,n.createElement(me,{sidebar:t,path:i,onCollapse:m,isHidden:s})),s&&n.createElement(pe,{toggleSidebar:m}))}const ge={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function _e(e){var t=e.hiddenSidebarContainer,a=e.children,r=(0,d.V)();return n.createElement("main",{className:(0,l.Z)(ge.docMainContainer,(t||!r)&&ge.docMainContainerEnhanced)},n.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",ge.docItemWrapper,t&&ge.docItemWrapperEnhanced)},a))}const ke="docPage__5DB",Ce="docsWrapper_BCFX";function Ie(e){var t=e.children,a=(0,d.V)(),l=(0,n.useState)(!1),r=l[0],o=l[1];return n.createElement(m.Z,{wrapperClassName:Ce},n.createElement(v,null),n.createElement("div",{className:ke},a&&n.createElement(Ee,{sidebar:a.items,hiddenSidebarContainer:r,setHiddenSidebarContainer:o}),n.createElement(_e,{hiddenSidebarContainer:r},t)))}var Se=a(2610),Ze=a(90197);function ye(e){var t=e.versionMetadata;return n.createElement(n.Fragment,null,n.createElement(Ze.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),n.createElement(r.d,null,t.noIndex&&n.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Ne(e){var t=e.versionMetadata,a=(0,c.hI)(e);if(!a)return n.createElement(Se.default,null);var i=a.docElement,m=a.sidebarName,u=a.sidebarItems;return n.createElement(n.Fragment,null,n.createElement(ye,e),n.createElement(r.FG,{className:(0,l.Z)(o.k.wrapper.docsPages,o.k.page.docsDocPage,e.versionMetadata.className)},n.createElement(s.q,{version:t},n.createElement(d.b,{name:m,items:u},n.createElement(Ie,null,i)))))}},14353:(e,t,a)=>{a.d(t,{D:()=>i,f:()=>c});var n=a(67294),l=a(69688),r=Symbol("EmptyContext"),o=n.createContext(r);function i(e){var t=e.children,a=(0,n.useState)(null),l=a[0],r=a[1],i=(0,n.useMemo)((function(){return{expandedItem:l,setExpandedItem:r}}),[l]);return n.createElement(o.Provider,{value:i},t)}function c(){var e=(0,n.useContext)(o);if(e===r)throw new l.i6("DocSidebarItemsExpandedStateProvider");return e}},2730:(e,t,a)=>{a.d(t,{a:()=>o});var n=a(67294),l=a(12466),r=a(85936);function o(e){var t=e.threshold,a=(0,n.useState)(!1),o=a[0],i=a[1],c=(0,n.useRef)(!1),s=(0,l.Ct)(),d=s.startScroll,m=s.cancelScroll;return(0,l.RF)((function(e,a){var n=e.scrollY,l=null==a?void 0:a.scrollY;l&&(c.current?c.current=!1:n>=l?(m(),i(!1)):n<t?i(!1):n+window.innerHeight<document.documentElement.scrollHeight&&i(!0))})),(0,r.S)((function(e){e.location.hash&&(c.current=!0,i(!1))})),{shown:o,scrollToTop:function(){return d(0)}}}}}]);