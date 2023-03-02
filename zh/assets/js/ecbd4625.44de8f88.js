"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[45548],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||c;return r?a.createElement(g,o(o({ref:t},l),{},{components:r})):a.createElement(g,o({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<c;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},46035:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const c={title:"Rancher AWS Marketplace \u5feb\u901f\u5165\u95e8",description:"\u4f7f\u7528 Amazon EKS \u90e8\u7f72 Rancher Server\u3002"},o=void 0,i={unversionedId:"getting-started/quick-start-guides/deploy-rancher-manager/aws-marketplace",id:"version-2.6/getting-started/quick-start-guides/deploy-rancher-manager/aws-marketplace",title:"Rancher AWS Marketplace \u5feb\u901f\u5165\u95e8",description:"\u4f7f\u7528 Amazon EKS \u90e8\u7f72 Rancher Server\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/getting-started/quick-start-guides/deploy-rancher-manager/aws-marketplace.md",sourceDirName:"getting-started/quick-start-guides/deploy-rancher-manager",slug:"/getting-started/quick-start-guides/deploy-rancher-manager/aws-marketplace",permalink:"/zh/v2.6/getting-started/quick-start-guides/deploy-rancher-manager/aws-marketplace",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/getting-started/quick-start-guides/deploy-rancher-manager/aws-marketplace.md",tags:[],version:"2.6",lastUpdatedAt:1677642497,formattedLastUpdatedAt:"2023\u5e743\u67081\u65e5",frontMatter:{title:"Rancher AWS Marketplace \u5feb\u901f\u5165\u95e8",description:"\u4f7f\u7528 Amazon EKS \u90e8\u7f72 Rancher Server\u3002"},sidebar:"tutorialSidebar",previous:{title:"Rancher AWS \u5feb\u901f\u5165\u95e8\u6307\u5357",permalink:"/zh/v2.6/getting-started/quick-start-guides/deploy-rancher-manager/aws"},next:{title:"Rancher Azure \u5feb\u901f\u5165\u95e8\u6307\u5357",permalink:"/zh/v2.6/getting-started/quick-start-guides/deploy-rancher-manager/azure"}},s={},p=[],l={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Amazon Elastic Kubernetes Service (EKS) \u53ef\u4ee5\u5feb\u901f",(0,n.kt)("a",{parentName:"p",href:"https://documentation.suse.com/trd/kubernetes/single-html/gs_rancher_aws-marketplace/"},"\u5c06 Rancher \u90e8\u7f72\u5230 Amazon Web Services (AWS)"),"\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1\u6211\u4eec\u7684 ",(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/marketplace/pp/prodview-go7ent7goo5ae"},"Amazon Marketplace \u5217\u8868"),"\u3002\u89c2\u770b ",(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/9dznJ7Ons0M"},"demo"),"\uff0c\u4e86\u89e3 AWS Marketplace SUSE Rancher \u8bbe\u7f6e\u7684\u6f14\u7ec3\u3002"))}u.isMDXComponent=!0}}]);