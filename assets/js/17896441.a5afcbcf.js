"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7918],{80355:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Q});var n=a(67294),l=a(10833),r=a(65130);function s(){var e,t=(0,r.k)(),a=t.metadata,s=t.frontMatter,i=t.assets;return n.createElement(l.d,{title:a.title,description:a.description,keywords:s.keywords,image:null!=(e=i.image)?e:s.image})}var i=a(86010),o=a(87524),d=a(4966);function c(){var e=(0,r.k)().metadata;return n.createElement(d.default,{previous:e.previous,next:e.next})}var m=a(23120),u=a(44364),v=a(35281),E=a(95999);function h(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(E.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function p(e){var t=e.lastUpdatedBy;return n.createElement(E.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function f(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,l=e.lastUpdatedBy;return n.createElement("span",{className:v.k.common.lastUpdated},n.createElement(E.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(h,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(p,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var g=a(87462),b=a(63366);const k="iconEdit_Z9Sw";var U=["className"];function L(e){var t=e.className,a=(0,b.Z)(e,U);return n.createElement("svg",(0,g.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(k,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function N(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:v.k.common.editThisPage},n.createElement(L,null),n.createElement(E.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var T=a(39960);const _="tag_zVej",w="tagRegular_sFm0",Z="tagWithCount_h2kH";function y(e){var t=e.permalink,a=e.label,l=e.count;return n.createElement(T.default,{href:t,className:(0,i.Z)(_,l?Z:w)},a,l&&n.createElement("span",null,l))}const A="tags_jXut",M="tag_QGVx";function V(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(E.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,i.Z)(A,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:M},n.createElement(y,{label:t,permalink:a}))}))))}const B="lastUpdated_vwxv";function C(e){return n.createElement("div",{className:(0,i.Z)(v.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(V,e)))}function x(e){var t=e.editUrl,a=e.lastUpdatedAt,l=e.lastUpdatedBy,r=e.formattedLastUpdatedAt;return n.createElement("div",{className:(0,i.Z)(v.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(N,{editUrl:t})),n.createElement("div",{className:(0,i.Z)("col",B)},(a||l)&&n.createElement(f,{lastUpdatedAt:a,formattedLastUpdatedAt:r,lastUpdatedBy:l})))}function D(){var e=(0,r.k)().metadata,t=e.editUrl,a=e.lastUpdatedAt,l=e.formattedLastUpdatedAt,s=e.lastUpdatedBy,o=e.tags,d=o.length>0,c=!!(t||a||s);return d||c?n.createElement("footer",{className:(0,i.Z)(v.k.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(C,{tags:o}),c&&n.createElement(x,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:s,formattedLastUpdatedAt:l})):null}var F=a(69286);const I="tocMobile_ITEo";function S(){var e=(0,r.k)(),t=e.toc,a=e.frontMatter;return n.createElement(F.default,{toc:t,minHeadingLevel:a.toc_min_heading_level,maxHeadingLevel:a.toc_max_heading_level,className:(0,i.Z)(v.k.docs.docTocMobile,I)})}var H=a(39407);function P(){var e=(0,r.k)(),t=e.toc,a=e.frontMatter;return n.createElement(H.default,{toc:t,minHeadingLevel:a.toc_min_heading_level,maxHeadingLevel:a.toc_max_heading_level,className:v.k.docs.docTocDesktop})}var j=a(92503),z=a(45042);function R(e){var t,a,l,s,o=e.children,d=(t=(0,r.k)(),a=t.metadata,l=t.frontMatter,s=t.contentTitle,l.hide_title||void 0!==s?null:a.title);return n.createElement("div",{className:(0,i.Z)(v.k.docs.docMarkdown,"markdown")},d&&n.createElement("header",null,n.createElement(j.default,{as:"h1"},d)),n.createElement(z.default,null,o))}var q=a(1310);const G="docItemContainer_Djhp",O="docItemCol_VOVn";function J(e){var t,a,l,s,d,v,E=e.children,h=(t=(0,r.k)(),a=t.frontMatter,l=t.toc,s=(0,o.i)(),d=a.hide_table_of_contents,v=!d&&l.length>0,{hidden:d,mobile:v?n.createElement(S,null):void 0,desktop:!v||"desktop"!==s&&"ssr"!==s?void 0:n.createElement(P,null)});return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,i.Z)("col",!h.hidden&&O)},n.createElement(m.Z,null),n.createElement("div",{className:G},n.createElement("article",null,n.createElement(q.default,null),n.createElement(u.default,null),h.mobile,n.createElement(R,null,E),n.createElement(D,null)),n.createElement(c,null))),h.desktop&&n.createElement("div",{className:"col col--3"},h.desktop))}function Q(e){var t="docs-doc-id-"+e.content.metadata.unversionedId,a=e.content;return n.createElement(r.b,{content:e.content},n.createElement(l.FG,{className:t},n.createElement(s,null),n.createElement(J,null,n.createElement(a,null))))}},23120:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(67294),l=a(86010),r=a(52263),s=a(39960),i=a(95999),o=a(94104),d=a(35281),c=a(60373),m=a(74477);var u={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){var t=u[e.versionMetadata.banner];return n.createElement(t,e)}function E(e){var t=e.versionLabel,a=e.to,l=e.onClick;return n.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(s.default,{to:a,onClick:l},n.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function h(e){var t,a=e.className,s=e.versionMetadata,i=(0,r.default)().siteConfig.title,m=(0,o.useActivePlugin)({failfast:!0}).pluginId,u=(0,c.J)(m).savePreferredVersionName,h=(0,o.useDocVersionSuggestions)(m),p=h.latestDocSuggestion,f=h.latestVersionSuggestion,g=null!=p?p:(t=f).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:(0,l.Z)(a,d.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:i,versionMetadata:s})),n.createElement("div",{className:"margin-top--md"},n.createElement(E,{versionLabel:f.label,to:g.path,onClick:function(){return u(f.name)}})))}function p(e){var t=e.className,a=(0,m.E)();return a.banner?n.createElement(h,{className:t,versionMetadata:a}):null}}}]);