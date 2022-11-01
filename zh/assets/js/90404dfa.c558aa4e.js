"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[7934],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=l(r),m=o,d=g["".concat(u,".").concat(m)]||g[m]||c[m]||a;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=g;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},79175:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),s=["components"],i={title:"\u5728 Amazon EBS \u4e2d\u521b\u5efa\u6301\u4e45\u5b58\u50a8"},u=void 0,l={unversionedId:"how-to-guides/new-user-guides/manage-clusters/provisioning-storage-examples/persistent-storage-in-amazon-ebs",id:"how-to-guides/new-user-guides/manage-clusters/provisioning-storage-examples/persistent-storage-in-amazon-ebs",title:"\u5728 Amazon EBS \u4e2d\u521b\u5efa\u6301\u4e45\u5b58\u50a8",description:"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5728 EC2 \u4e2d\u8bbe\u7f6e Amazon \u7684 Elastic Block Store\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/manage-clusters/provisioning-storage-examples/persistent-storage-in-amazon-ebs.md",sourceDirName:"how-to-guides/new-user-guides/manage-clusters/provisioning-storage-examples",slug:"/how-to-guides/new-user-guides/manage-clusters/provisioning-storage-examples/persistent-storage-in-amazon-ebs",permalink:"/zh/how-to-guides/new-user-guides/manage-clusters/provisioning-storage-examples/persistent-storage-in-amazon-ebs",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/manage-clusters/provisioning-storage-examples/persistent-storage-in-amazon-ebs.md",tags:[],version:"current",lastUpdatedAt:1666730466,formattedLastUpdatedAt:"2022/10/25",frontMatter:{title:"\u5728 Amazon EBS \u4e2d\u521b\u5efa\u6301\u4e45\u5b58\u50a8"},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6e\u5b58\u50a8\u793a\u4f8b",permalink:"/zh/pages-for-subheaders/provisioning-storage-examples"},next:{title:"NFS \u5b58\u50a8",permalink:"/zh/how-to-guides/new-user-guides/manage-clusters/provisioning-storage-examples/nfs-storage"}},p={},c=[],g={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5728 EC2 \u4e2d\u8bbe\u7f6e Amazon \u7684 Elastic Block Store\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728 EC2 \u63a7\u5236\u53f0\u4e2d\uff0c\u8f6c\u5230\u5de6\u4fa7\u9762\u677f\u4e2d\u7684 ",(0,a.kt)("strong",{parentName:"li"},"ELASTIC BLOCK STORE")," \u4e2d\uff0c\u7136\u540e\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Volumes"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Create Volume"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u53ef\u9009\uff1a\u914d\u7f6e\u5377\u7684\u5927\u5c0f\u6216\u5176\u4ed6\u9009\u9879\u3002\u4f60\u9700\u8981\u5728\u5377\u8981\u6302\u8f7d\u5230\u7684\u5b9e\u4f8b\u6240\u5728\u7684\u53ef\u7528\u533a\u4e2d\u521b\u5efa\u5377\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5355\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Create Volume"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,a.kt)("strong",{parentName:"li"},"Close"),"\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5df2\u521b\u5efa\u6301\u4e45\u5b58\u50a8\u3002"),(0,a.kt)("p",null,"\u6709\u5173\u5982\u4f55\u5728 Rancher \u4e2d\u8bbe\u7f6e\u65b0\u521b\u5efa\u7684\u5b58\u50a8\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/set-up-existing-storage"},"\u8bbe\u7f6e\u73b0\u6709\u5b58\u50a8"),"\u3002"))}m.isMDXComponent=!0}}]);