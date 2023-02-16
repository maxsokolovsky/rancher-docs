"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[80475],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,g=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(g,l(l({ref:t},s),{},{components:r})):n.createElement(g,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,l[1]=u;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},90664:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={title:"\u8d44\u6e90\u914d\u989d\u7c7b\u578b\u53c2\u8003"},l=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/resource-quota-types",id:"version-2.6/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/resource-quota-types",title:"\u8d44\u6e90\u914d\u989d\u7c7b\u578b\u53c2\u8003",description:"\u521b\u5efa\u8d44\u6e90\u914d\u989d\u76f8\u5f53\u4e8e\u914d\u7f6e\u9879\u76ee\u53ef\u7528\u7684\u8d44\u6e90\u6c60\u3002\u4f60\u53ef\u4ee5\u4e3a\u4ee5\u4e0b\u8d44\u6e90\u7c7b\u578b\u8bbe\u7f6e\u8d44\u6e90\u914d\u989d\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/resource-quota-types.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas",slug:"/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/resource-quota-types",permalink:"/zh/v2.6/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/resource-quota-types",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/resource-quota-types.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022\u5e7411\u670814\u65e5",frontMatter:{title:"\u8d44\u6e90\u914d\u989d\u7c7b\u578b\u53c2\u8003"},sidebar:"tutorialSidebar",previous:{title:"\u8bbe\u7f6e\u5bb9\u5668\u9ed8\u8ba4\u8d44\u6e90\u9650\u5236",permalink:"/zh/v2.6/how-to-guides/advanced-user-guides/manage-projects/manage-project-resource-quotas/set-container-default-resource-limits"},next:{title:"Monitoring \u6307\u5357",permalink:"/zh/v2.6/pages-for-subheaders/monitoring-alerting-guides"}},i={},p=[],s={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u521b\u5efa\u8d44\u6e90\u914d\u989d\u76f8\u5f53\u4e8e\u914d\u7f6e\u9879\u76ee\u53ef\u7528\u7684\u8d44\u6e90\u6c60\u3002\u4f60\u53ef\u4ee5\u4e3a\u4ee5\u4e0b\u8d44\u6e90\u7c7b\u578b\u8bbe\u7f6e\u8d44\u6e90\u914d\u989d\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u8d44\u6e90\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CPU \u9650\u5236","*"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5206\u914d\u7ed9\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u7684\u6700\u5927 CPU \u91cf\uff08\u4ee5",(0,a.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/configuration/manage-compute-resources-container/#meaning-of-cpu"},"\u6beb\u6838"),"\u4e3a\u5355\u4f4d\uff09",(0,a.kt)("sup",null,"1"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CPU \u9884\u7559","*"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9884\u7559\u7ed9\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u7684\u6700\u5c0f CPU \u91cf\uff08\u4ee5\u6beb\u6838\u4e3a\u5355\u4f4d\uff09",(0,a.kt)("sup",null,"1"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5185\u5b58\u9650\u5236","*"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5206\u914d\u7ed9\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u7684\u6700\u5927\u5185\u5b58\u91cf\uff08\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\uff09",(0,a.kt)("sup",null,"1"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5185\u5b58\u9884\u7559","*"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9884\u7559\u7ed9\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u7684\u6700\u5c0f\u5185\u5b58\u91cf\uff08\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\uff09",(0,a.kt)("sup",null,"1"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5b58\u50a8\u9884\u7559"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9884\u7559\u7ed9\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u7684\u6700\u5c0f\u5b58\u50a8\u91cf\uff08\u4ee5\u5343\u5146\u5b57\u8282\u4e3a\u5355\u4f4d\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u8d1f\u8f7d\u5747\u8861\u5668"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u4e2d\u53ef\u4ee5\u5b58\u5728\u7684\u8d1f\u8f7d\u5747\u8861\u5668\u670d\u52a1\u7684\u6700\u5927\u6570\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u670d\u52a1\u8282\u70b9\u7aef\u53e3"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u4e2d\u53ef\u4ee5\u5b58\u5728\u7684\u8282\u70b9\u7aef\u53e3\u670d\u52a1\u7684\u6700\u5927\u6570\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Pod"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u5728\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u4e2d\u4ee5\u975e\u7ec8\u7aef\u72b6\u6001\u5b58\u5728\u7684 pod \u7684\u6700\u5927\u6570\u91cf\uff08\u5373 ",(0,a.kt)("inlineCode",{parentName:"td"},".status.phase in (Failed, Succeeded)")," \u7b49\u4e8e true \u7684 pod\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Services"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u4e2d\u53ef\u4ee5\u5b58\u5728\u7684\u6700\u5927 service \u6570\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ConfigMap"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u4e2d\u53ef\u4ee5\u5b58\u5728\u7684 ConfigMap \u7684\u6700\u5927\u6570\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u6301\u4e45\u5377\u58f0\u660e"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u4e2d\u53ef\u4ee5\u5b58\u5728\u7684\u6301\u4e45\u5377\u58f0\u660e\u7684\u6700\u5927\u6570\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ReplicationController"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u4e2d\u53ef\u4ee5\u5b58\u5728\u7684\u6700\u5927 ReplicationController \u6570\u91cf")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u5bc6\u6587"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9879\u76ee/\u547d\u540d\u7a7a\u95f4\u4e2d\u53ef\u4ee5\u5b58\u5728\u7684\u6700\u5927\u5bc6\u6587\u6570\u91cf")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"mdxAdmonitionTitle"},(0,a.kt)("sup",null,"*"))),(0,a.kt)("p",{parentName:"admonition"},"\u5728\u8bbe\u7f6e\u8d44\u6e90\u914d\u989d\u65f6\uff0c\u5982\u679c\u4f60\u5728\u9879\u76ee\u6216\u547d\u540d\u7a7a\u95f4\u4e0a\u8bbe\u7f6e\u4e86\u4efb\u4f55\u4e0e CPU \u6216\u5185\u5b58\u76f8\u5173\u7684\u5185\u5bb9\uff08\u5373\u9650\u5236\u6216\u9884\u7559\uff09\uff0c\u6240\u6709\u5bb9\u5668\u90fd\u9700\u8981\u5728\u521b\u5efa\u671f\u95f4\u8bbe\u7f6e\u5404\u81ea\u7684 CPU \u6216\u5185\u5b58\u5b57\u6bb5\u3002\u4f60\u53ef\u4ee5\u540c\u65f6\u8bbe\u7f6e\u5bb9\u5668\u7684\u9ed8\u8ba4\u8d44\u6e90\u9650\u5236\uff0c\u4ee5\u907f\u514d\u4e3a\u6bcf\u4e2a\u5de5\u4f5c\u8d1f\u8f7d\u663e\u5f0f\u8bbe\u7f6e\u8fd9\u4e9b\u9650\u5236\u3002\u8be6\u60c5\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/resource-quotas/#requests-vs-limits"},"Kubernetes \u6587\u6863"),"\u3002")))}c.isMDXComponent=!0}}]);