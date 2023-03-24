"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[76158],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),o=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),k=o(n),m=r,h=k["".concat(u,".").concat(m)]||k[m]||d[m]||l;return n?a.createElement(h,p(p({ref:t},s),{},{components:n})):a.createElement(h,p({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=k;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var o=2;o<l;o++)p[o]=n[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},23417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const l={title:"\u8282\u70b9\u548c\u8282\u70b9\u6c60"},p=void 0,i={unversionedId:"how-to-guides/new-user-guides/manage-clusters/nodes-and-node-pools",id:"how-to-guides/new-user-guides/manage-clusters/nodes-and-node-pools",title:"\u8282\u70b9\u548c\u8282\u70b9\u6c60",description:"\u5728 Rancher \u4e2d\u542f\u52a8 Kubernetes \u96c6\u7fa4\u540e\uff0c\u4f60\u53ef\u4ee5\u4ece\u96c6\u7fa4\u7684\u8282\u70b9\u9009\u9879\u5361\u7ba1\u7406\u5404\u4e2a\u8282\u70b9\u3002\u4e0d\u540c\u7684\u914d\u7f6e\u96c6\u7fa4\u9009\u9879\u5bf9\u5e94\u4e0d\u540c\u7684\u53ef\u7528\u8282\u70b9\u9009\u9879\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/manage-clusters/nodes-and-node-pools.md",sourceDirName:"how-to-guides/new-user-guides/manage-clusters",slug:"/how-to-guides/new-user-guides/manage-clusters/nodes-and-node-pools",permalink:"/zh/how-to-guides/new-user-guides/manage-clusters/nodes-and-node-pools",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/manage-clusters/nodes-and-node-pools.md",tags:[],version:"current",lastUpdatedAt:1666730466,formattedLastUpdatedAt:"2022\u5e7410\u670825\u65e5",frontMatter:{title:"\u8282\u70b9\u548c\u8282\u70b9\u6c60"},sidebar:"tutorialSidebar",previous:{title:"\u96c6\u7fa4\u6a21\u677f",permalink:"/zh/how-to-guides/new-user-guides/manage-clusters/manage-cluster-templates"},next:{title:"\u4ece\u8282\u70b9\u4e2d\u79fb\u9664 Kubernetes \u7ec4\u4ef6",permalink:"/zh/how-to-guides/new-user-guides/manage-clusters/clean-cluster-nodes"}},u={},o=[{value:"\u6bcf\u4e2a\u96c6\u7fa4\u521b\u5efa\u9009\u9879\u7684\u53ef\u7528\u8282\u70b9\u9009\u9879",id:"\u6bcf\u4e2a\u96c6\u7fa4\u521b\u5efa\u9009\u9879\u7684\u53ef\u7528\u8282\u70b9\u9009\u9879",level:2},{value:"\u7531\u57fa\u7840\u8bbe\u65bd\u63d0\u4f9b\u5546\u6258\u7ba1\u7684\u8282\u70b9",id:"\u7531\u57fa\u7840\u8bbe\u65bd\u63d0\u4f9b\u5546\u6258\u7ba1\u7684\u8282\u70b9",level:3},{value:"\u7531\u6258\u7ba1 Kubernetes \u63d0\u4f9b\u5546\u914d\u7f6e\u7684\u8282\u70b9",id:"\u7531\u6258\u7ba1-kubernetes-\u63d0\u4f9b\u5546\u914d\u7f6e\u7684\u8282\u70b9",level:3},{value:"\u6ce8\u518c\u8282\u70b9",id:"\u6ce8\u518c\u8282\u70b9",level:3},{value:"\u7ba1\u7406\u548c\u7f16\u8f91\u5355\u4e2a\u8282\u70b9",id:"\u7ba1\u7406\u548c\u7f16\u8f91\u5355\u4e2a\u8282\u70b9",level:2},{value:"\u5728 Rancher API \u4e2d\u67e5\u770b\u8282\u70b9",id:"\u5728-rancher-api-\u4e2d\u67e5\u770b\u8282\u70b9",level:2},{value:"\u5220\u9664\u8282\u70b9",id:"\u5220\u9664\u8282\u70b9",level:2},{value:"\u6269\u7f29\u8282\u70b9",id:"\u6269\u7f29\u8282\u70b9",level:2},{value:"\u901a\u8fc7 SSH \u8fde\u63a5\u5230\u7531\u57fa\u7840\u8bbe\u65bd\u63d0\u4f9b\u5546\u6258\u7ba1\u7684\u8282\u70b9",id:"\u901a\u8fc7-ssh-\u8fde\u63a5\u5230\u7531\u57fa\u7840\u8bbe\u65bd\u63d0\u4f9b\u5546\u6258\u7ba1\u7684\u8282\u70b9",level:2},{value:"\u5c01\u9501\u8282\u70b9",id:"\u5c01\u9501\u8282\u70b9",level:2},{value:"\u6e05\u7a7a\u8282\u70b9",id:"\u6e05\u7a7a\u8282\u70b9",level:2},{value:"\u6fc0\u8fdb\u548c\u5b89\u5168\u7684\u6e05\u7a7a\u9009\u9879",id:"\u6fc0\u8fdb\u548c\u5b89\u5168\u7684\u6e05\u7a7a\u9009\u9879",level:3},{value:"\u5bbd\u9650\u671f",id:"\u5bbd\u9650\u671f",level:3},{value:"\u8d85\u65f6",id:"\u8d85\u65f6",level:3},{value:"\u6e05\u7a7a\u548c\u5c01\u9501\u72b6\u6001",id:"\u6e05\u7a7a\u548c\u5c01\u9501\u72b6\u6001",level:3},{value:"\u6807\u8bb0 Rancher \u5ffd\u7565\u7684\u8282\u70b9",id:"\u6807\u8bb0-rancher-\u5ffd\u7565\u7684\u8282\u70b9",level:2},{value:"\u4f7f\u7528 kubectl \u6807\u8bb0\u8981\u5ffd\u7565\u7684\u8282\u70b9",id:"\u4f7f\u7528-kubectl-\u6807\u8bb0\u8981\u5ffd\u7565\u7684\u8282\u70b9",level:3}],s={toc:o};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5728 Rancher \u4e2d\u542f\u52a8 Kubernetes \u96c6\u7fa4\u540e\uff0c\u4f60\u53ef\u4ee5\u4ece\u96c6\u7fa4\u7684",(0,r.kt)("strong",{parentName:"p"},"\u8282\u70b9"),"\u9009\u9879\u5361\u7ba1\u7406\u5404\u4e2a\u8282\u70b9\u3002\u4e0d\u540c\u7684\u914d\u7f6e\u96c6\u7fa4",(0,r.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"\u9009\u9879"),"\u5bf9\u5e94\u4e0d\u540c\u7684\u53ef\u7528\u8282\u70b9\u9009\u9879\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u60f3\u7ba1\u7406 ",(0,r.kt)("em",{parentName:"p"},"\u96c6\u7fa4")," \u800c\u4e0d\u662f\u5355\u4e2a\u8282\u70b9\uff0c\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/cluster-configuration"},"\u7f16\u8f91\u96c6\u7fa4"),"\u3002")),(0,r.kt)("h2",{id:"\u6bcf\u4e2a\u96c6\u7fa4\u521b\u5efa\u9009\u9879\u7684\u53ef\u7528\u8282\u70b9\u9009\u9879"},"\u6bcf\u4e2a\u96c6\u7fa4\u521b\u5efa\u9009\u9879\u7684\u53ef\u7528\u8282\u70b9\u9009\u9879"),(0,r.kt)("p",null,"\u4e0b\u8868\u5217\u51fa\u4e86 Rancher \u4e2d\u6bcf\u79cd\u96c6\u7fa4\u7c7b\u578b\u7684\u53ef\u7528\u8282\u70b9\u9009\u9879\u3002\u5355\u51fb",(0,r.kt)("strong",{parentName:"p"},"\u9009\u9879"),"\u5217\u4e2d\u7684\u94fe\u63a5\u4ee5\u83b7\u53d6\u6bcf\u4e2a\u529f\u80fd\u7684\u66f4\u591a\u4fe1\u606f\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"th",href:"/zh/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"\u7531\u57fa\u7840\u8bbe\u65bd\u63d0\u4f9b\u5546\u6258\u7ba1\u7684\u8282\u70b9")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"th",href:"/zh/pages-for-subheaders/use-existing-nodes"},"\u81ea\u5b9a\u4e49\u8282\u70b9")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"th",href:"/zh/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers"},"\u6258\u7ba1\u96c6\u7fa4")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"th",href:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters"},"\u6ce8\u518c\u7684 EKS \u8282\u70b9")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"th",href:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters"},"\u6240\u6709\u5176\u4ed6\u6ce8\u518c\u8282\u70b9")),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#%E5%B0%81%E9%94%81%E8%8A%82%E7%82%B9"},"\u5c01\u9501")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06\u8282\u70b9\u6807\u8bb0\u4e3a\u4e0d\u53ef\u8c03\u5ea6\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#%E6%B8%85%E7%A9%BA%E8%8A%82%E7%82%B9"},"\u6e05\u7a7a")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06\u8282\u70b9\u6807\u8bb0\u4e3a\u4e0d\u53ef\u8c03\u5ea6 ",(0,r.kt)("em",{parentName:"td"},"\u5e76\u4e14")," \u9a71\u9010\u6240\u6709 pod\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#%E7%AE%A1%E7%90%86%E5%92%8C%E7%BC%96%E8%BE%91%E5%8D%95%E4%B8%AA%E8%8A%82%E7%82%B9"},"\u7f16\u8f91")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8f93\u5165\u8282\u70b9\u7684\u81ea\u5b9a\u4e49\u540d\u79f0\u3001\u63cf\u8ff0\u3001\u6807\u7b7e\u6216\u6c61\u70b9\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#%E5%9C%A8-rancher-api-%E4%B8%AD%E6%9F%A5%E7%9C%8B%E8%8A%82%E7%82%B9"},"\u67e5\u770b API")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u67e5\u770b API \u6570\u636e\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#%E5%88%A0%E9%99%A4%E8%8A%82%E7%82%B9"},"\u5220\u9664")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"*"),(0,r.kt)("td",{parentName:"tr",align:null},"*"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ece\u96c6\u7fa4\u4e2d\u5220\u9664\u6709\u7f3a\u9677\u7684\u8282\u70b9\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#%E9%80%9A%E8%BF%87-ssh-%E8%BF%9E%E6%8E%A5%E5%88%B0%E7%94%B1%E5%9F%BA%E7%A1%80%E8%AE%BE%E6%96%BD%E6%8F%90%E4%BE%9B%E5%95%86%E6%89%98%E7%AE%A1%E7%9A%84%E8%8A%82%E7%82%B9"},"\u4e0b\u8f7d\u5bc6\u94a5")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0b\u8f7d SSH \u5bc6\u94a5\u4ee5\u901a\u8fc7 SSH \u8fde\u63a5\u5230\u8282\u70b9\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#%E6%89%A9%E7%BC%A9%E8%8A%82%E7%82%B9"},"\u8282\u70b9\u7f29\u653e")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u2713"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5411\u4e0a\u6216\u5411\u4e0b\u6269\u5c55\u8282\u70b9\u6c60\u4e2d\u7684\u8282\u70b9\u6570\u3002")))),(0,r.kt)("p",null,"*"," \u53ef\u901a\u8fc7 View API \u8bbf\u95ee\u7684\u5220\u9664\u9009\u9879"),(0,r.kt)("h3",{id:"\u7531\u57fa\u7840\u8bbe\u65bd\u63d0\u4f9b\u5546\u6258\u7ba1\u7684\u8282\u70b9"},"\u7531\u57fa\u7840\u8bbe\u65bd\u63d0\u4f9b\u5546\u6258\u7ba1\u7684\u8282\u70b9"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"\u6258\u7ba1\u5728\u57fa\u7840\u8bbe\u65bd\u63d0\u4f9b\u5546"),"\u4e2d\u7684\u8282\u70b9\u4e0a\u914d\u7f6e\u7531 Rancher \u542f\u52a8\u7684 Kubernetes \u96c6\u7fa4\u65f6\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u8282\u70b9\u6c60\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u8282\u70b9\u6c60\u88ab\u7f16\u8f91\uff0c\u901a\u8fc7",(0,r.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/use-new-nodes-in-an-infra-provider#%E8%8A%82%E7%82%B9%E6%B1%A0"},"\u8282\u70b9\u6c60\u9009\u9879"),"\u914d\u7f6e\u7684\u96c6\u7fa4\u53ef\u4ee5\u7eb5\u5411\u6269\u5bb9\u6216\u7f29\u5bb9\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u542f\u7528",(0,r.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/use-new-nodes-in-an-infra-provider#%E8%8A%82%E7%82%B9%E8%87%AA%E5%8A%A8%E6%9B%BF%E6%8D%A2"},"\u8282\u70b9\u81ea\u52a8\u66ff\u6362\u529f\u80fd"),"\uff0c\u8282\u70b9\u6c60\u8fd8\u53ef\u4ee5\u81ea\u52a8\u7ef4\u62a4\u5728\u521d\u59cb\u96c6\u7fa4\u914d\u7f6e\u671f\u95f4\u8bbe\u7f6e\u7684\u8282\u70b9\u89c4\u6a21\u3002\u8be5\u89c4\u6a21\u51b3\u5b9a\u4e86 Rancher \u4e3a\u96c6\u7fa4\u7ef4\u62a4\u7684 active \u8282\u70b9\u7684\u6570\u91cf\u3002"),(0,r.kt)("p",null,"Rancher \u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/use-new-nodes-in-an-infra-provider#%E8%8A%82%E7%82%B9%E6%A8%A1%E6%9D%BF"},"\u8282\u70b9\u6a21\u677f"),"\u6765\u66ff\u6362\u8282\u70b9\u6c60\u4e2d\u7684\u8282\u70b9\u3002\u6bcf\u4e2a\u8282\u70b9\u6a21\u677f\u90fd\u4f7f\u7528\u4e91\u63d0\u4f9b\u5546\u51ed\u8bc1\u6765\u5141\u8bb8 Rancher \u5728\u57fa\u7840\u8bbe\u65bd\u63d0\u4f9b\u5546\u4e2d\u8bbe\u7f6e\u8282\u70b9\u3002"),(0,r.kt)("h3",{id:"\u7531\u6258\u7ba1-kubernetes-\u63d0\u4f9b\u5546\u914d\u7f6e\u7684\u8282\u70b9"},"\u7531\u6258\u7ba1 Kubernetes \u63d0\u4f9b\u5546\u914d\u7f6e\u7684\u8282\u70b9"),(0,r.kt)("p",null,"\u7528\u4e8e\u7ba1\u7406",(0,r.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/set-up-clusters-from-hosted-kubernetes-providers"},"\u7531 Kubernetes \u63d0\u4f9b\u5546\u6258\u7ba1"),"\u7684\u8282\u70b9\u7684\u9009\u9879\u5728 Rancher \u4e2d\u6709\u4e9b\u9650\u5236\u3002\u4f8b\u5982\uff0c\u4f60\u4e0d\u80fd\u4f7f\u7528 Rancher UI \u5411\u4e0a\u6216\u5411\u4e0b\u7f29\u653e\u8282\u70b9\u6570\u91cf\uff0c\u800c\u662f\u9700\u8981\u76f4\u63a5\u7f16\u8f91\u96c6\u7fa4\u3002"),(0,r.kt)("h3",{id:"\u6ce8\u518c\u8282\u70b9"},"\u6ce8\u518c\u8282\u70b9"),(0,r.kt)("p",null,"\u867d\u7136\u4f60\u53ef\u4ee5\u4f7f\u7528 Rancher \u5c06\u5de5\u4f5c\u8d1f\u8f7d\u90e8\u7f72\u5230",(0,r.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/register-existing-clusters"},"\u5df2\u6ce8\u518c\u96c6\u7fa4"),"\uff0c\u4f46\u4f60\u65e0\u6cd5\u7ba1\u7406\u5355\u4e2a\u96c6\u7fa4\u8282\u70b9\u3002\u5bfc\u5165\u7684\u96c6\u7fa4\u8282\u70b9\u7684\u6240\u6709\u7ba1\u7406\u90fd\u5fc5\u987b\u5728 Rancher \u4e4b\u5916\u8fdb\u884c\u3002"),(0,r.kt)("h2",{id:"\u7ba1\u7406\u548c\u7f16\u8f91\u5355\u4e2a\u8282\u70b9"},"\u7ba1\u7406\u548c\u7f16\u8f91\u5355\u4e2a\u8282\u70b9"),(0,r.kt)("p",null,"\u7f16\u8f91\u8282\u70b9\u53ef\u8ba9\u4f60\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u66f4\u6539\u5176\u540d\u79f0"),(0,r.kt)("li",{parentName:"ul"},"\u66f4\u6539\u5176\u63cf\u8ff0"),(0,r.kt)("li",{parentName:"ul"},"\u6dfb\u52a0",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"},"\u6807\u7b7e")),(0,r.kt)("li",{parentName:"ul"},"\u6dfb\u52a0/\u5220\u9664",(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/configuration/taint-and-toleration/"},"\u6c61\u70b9"))),(0,r.kt)("p",null,"\u8981\u7ba1\u7406\u5355\u4e2a\u8282\u70b9\uff0c\u8bf7\u6d4f\u89c8\u5230\u8981\u7ba1\u7406\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u4ece\u4e3b\u83dc\u5355\u4e2d\u9009\u62e9",(0,r.kt)("strong",{parentName:"p"},"\u8282\u70b9"),"\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u5355\u51fb\u8282\u70b9\u7684 ",(0,r.kt)("strong",{parentName:"p"},"\u22ee")," (",(0,r.kt)("strong",{parentName:"p"},"..."),") \u56fe\u6807\u6765\u6253\u5f00\u9009\u9879\u83dc\u5355\u3002"),(0,r.kt)("h2",{id:"\u5728-rancher-api-\u4e2d\u67e5\u770b\u8282\u70b9"},"\u5728 Rancher API \u4e2d\u67e5\u770b\u8282\u70b9"),(0,r.kt)("p",null,"\u9009\u62e9\u6b64\u9009\u9879\u4ee5\u67e5\u770b\u8282\u70b9\u7684 ",(0,r.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/about-the-api"},"API \u7aef\u70b9"),"\u3002"),(0,r.kt)("h2",{id:"\u5220\u9664\u8282\u70b9"},"\u5220\u9664\u8282\u70b9"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("strong",{parentName:"p"},"Delete")," \u4ece\u4e91\u63d0\u4f9b\u5546\u4e2d\u5220\u9664\u6709\u7f3a\u9677\u7684\u8282\u70b9\u3002"),(0,r.kt)("p",null,"\u5f53\u4f60\u5220\u9664\u6709\u7f3a\u9677\u7684\u8282\u70b9\u65f6\uff0c\u5982\u679c\u8be5\u8282\u70b9\u5728\u8282\u70b9\u6c60\u4e2d\u5e76\u542f\u7528\u4e86",(0,r.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/use-new-nodes-in-an-infra-provider#%E8%8A%82%E7%82%B9%E8%87%AA%E5%8A%A8%E6%9B%BF%E6%8D%A2"},"\u8282\u70b9\u81ea\u52a8\u66ff\u6362"),"\uff0cRancher \u53ef\u4ee5\u81ea\u52a8\u5c06\u5176\u66ff\u6362\u4e3a\u5177\u6709\u76f8\u540c\u914d\u7f6e\u7684\u8282\u70b9\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u7684\u96c6\u7fa4\u7531\u57fa\u7840\u8bbe\u65bd\u63d0\u4f9b\u5546\u6258\u7ba1\uff0c\u5e76\u4e14\u4f60\u5e0c\u671b\u7f29\u5bb9\u96c6\u7fa4\uff0c\u800c\u4e0d\u662f\u5220\u9664\u6709\u7f3a\u9677\u7684\u8282\u70b9\uff0c\u8bf7\u8fdb\u884c",(0,r.kt)("a",{parentName:"p",href:"#%E6%89%A9%E7%BC%A9%E8%8A%82%E7%82%B9"},"\u7f29\u5bb9"),"\u800c\u4e0d\u662f\u5220\u9664\u3002")),(0,r.kt)("h2",{id:"\u6269\u7f29\u8282\u70b9"},"\u6269\u7f29\u8282\u70b9"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u7531\u57fa\u7840\u8bbe\u65bd\u63d0\u4f9b\u5546\u6258\u7ba1\u7684\u8282\u70b9\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u7f29\u653e\u63a7\u4ef6\u6765\u7f29\u653e\u6bcf\u4e2a",(0,r.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/use-new-nodes-in-an-infra-provider#%E8%8A%82%E7%82%B9%E6%B1%A0"},"\u8282\u70b9\u6c60"),"\u4e2d\u7684\u8282\u70b9\u6570\u91cf\u3002\u6b64\u9009\u9879\u4e0d\u9002\u7528\u4e8e\u5176\u4ed6\u96c6\u7fa4\u7c7b\u578b\u3002"),(0,r.kt)("h2",{id:"\u901a\u8fc7-ssh-\u8fde\u63a5\u5230\u7531\u57fa\u7840\u8bbe\u65bd\u63d0\u4f9b\u5546\u6258\u7ba1\u7684\u8282\u70b9"},"\u901a\u8fc7 SSH \u8fde\u63a5\u5230\u7531\u57fa\u7840\u8bbe\u65bd\u63d0\u4f9b\u5546\u6258\u7ba1\u7684\u8282\u70b9"),(0,r.kt)("p",null,"\u5bf9\u4e8e",(0,r.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"\u7531\u57fa\u7840\u8bbe\u65bd\u63d0\u4f9b\u5546\u6258\u7ba1\u7684\u8282\u70b9"),"\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u4e0b\u8f7d\u5176 SSH \u5bc6\u94a5\uff0c\u4ee5\u4fbf\u4ece\u684c\u9762\u8fdc\u7a0b\u8fde\u63a5\u5230\u5b83\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u5de6\u4e0a\u89d2\uff0c\u5355\u51fb ",(0,r.kt)("strong",{parentName:"p"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728",(0,r.kt)("strong",{parentName:"p"},"\u96c6\u7fa4"),"\u9875\u9762\u4e0a\uff0c\u8f6c\u5230\u8981\u901a\u8fc7 SSH \u8fde\u63a5\u5230\u8282\u70b9\u7684\u96c6\u7fa4\uff0c\u7136\u540e\u5355\u51fb\u96c6\u7fa4\u540d\u79f0\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728",(0,r.kt)("strong",{parentName:"p"},"\u4e3b\u673a\u6c60"),"\u9009\u9879\u5361\u4e0a\uff0c\u627e\u5230\u8981\u8fdc\u7a0b\u8bbf\u95ee\u7684\u8282\u70b9\uff0c\u7136\u540e\u5355\u51fb ",(0,r.kt)("strong",{parentName:"p"},"\u22ee > \u4e0b\u8f7d SSH \u5bc6\u94a5"),"\u3002\u8fd9\u5c06\u4e0b\u8f7d\u7528\u4e8e SSH \u7684\u6587\u4ef6\u7684 ZIP \u5305\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c06 ZIP \u6587\u4ef6\u89e3\u538b\u7f29\u5230\u4efb\u4f55\u4f4d\u7f6e\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6253\u5f00\u7ec8\u7aef\u3002\u8f6c\u5230\u89e3\u538b\u4e86\u7684 ZIP \u6587\u4ef6\u7684\u4f4d\u7f6e\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"ssh -i id_rsa root@<IP_OF_HOST>\n")))),(0,r.kt)("h2",{id:"\u5c01\u9501\u8282\u70b9"},"\u5c01\u9501\u8282\u70b9"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u5c01\u9501")," \u8282\u70b9\u8868\u793a\u5c06\u8282\u70b9\u6807\u8bb0\u4e3a\u4e0d\u53ef\u8c03\u5ea6\u3002\u6b64\u529f\u80fd\u9002\u7528\u4e8e\u5728\u77ed\u671f\u7ef4\u62a4\uff08\u5982\u91cd\u542f\uff0c\u5347\u7ea7\u6216\u505c\u7528\uff09\u65f6\u5728\u8282\u70b9\u4e0a\u6267\u884c\u77ed\u671f\u4efb\u52a1\u3002\u5b8c\u6210\u540e\uff0c\u91cd\u65b0\u6253\u5f00\u7535\u6e90\u5e76\u901a\u8fc7\u53d6\u6d88\u5c01\u9501\u4f7f\u8282\u70b9\u518d\u6b21\u53ef\u8c03\u5ea6\u3002"),(0,r.kt)("h2",{id:"\u6e05\u7a7a\u8282\u70b9"},"\u6e05\u7a7a\u8282\u70b9"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u6e05\u7a7a")," \u6307\u7684\u662f\u5148\u5c01\u9501\u8282\u70b9\uff0c\u7136\u540e\u9a71\u9010\u5176\u6240\u6709 pod \u7684\u8fc7\u7a0b\u3002\u6b64\u529f\u80fd\u5bf9\u4e8e\u6267\u884c\u8282\u70b9\u7ef4\u62a4\uff08\u5982\u5185\u6838\u5347\u7ea7\u6216\u786c\u4ef6\u7ef4\u62a4\uff09\u5f88\u6709\u7528\u3002\u5b83\u53ef\u4ee5\u9632\u6b62\u65b0\u7684 pod \u90e8\u7f72\u5230\u8282\u70b9\uff0c\u540c\u65f6\u80fd\u91cd\u65b0\u5206\u914d\u73b0\u6709\u7684 pod\uff0c\u4ece\u800c\u907f\u514d\u7528\u6237\u9047\u5230\u670d\u52a1\u4e2d\u65ad\u7684\u60c5\u51b5\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5177\u6709\u526f\u672c\u96c6\u7684 pod \u5c06\u88ab\u4e00\u4e2a\u65b0\u7684 pod \u66ff\u6362\uff0c\u8be5\u65b0 pod \u5c06\u88ab\u8c03\u5ea6\u5230\u4e00\u4e2a\u65b0\u8282\u70b9\u3002\u6b64\u5916\uff0c\u5982\u679c pod \u662f\u670d\u52a1\u7684\u4e00\u90e8\u5206\uff0c\u5219\u5ba2\u6237\u7aef\u5c06\u81ea\u52a8\u91cd\u5b9a\u5411\u5230\u65b0\u7684 pod\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u6ca1\u6709\u526f\u672c\u96c6\u7684 pod\uff0c\u4f60\u9700\u8981\u8c03\u51fa pod \u7684\u65b0\u526f\u672c\u3002\u5982\u679c\u8be5 pod \u4e0d\u662f\u670d\u52a1\u7684\u4e00\u90e8\u5206\uff0c\u5c06\u5ba2\u6237\u7aef\u91cd\u5b9a\u5411\u5230\u5b83\u3002"))),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u6e05\u7a7a\u5904\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"cordoned")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"active")," \u72b6\u6001\u7684\u8282\u70b9\u3002\u6e05\u7a7a\u4e00\u4e2a\u8282\u70b9\u65f6\uff0c\u8be5\u8282\u70b9\u4f1a\u88ab\u5c01\u9501\uff0c\u7136\u540e\u4f1a\u8bc4\u4f30\u8282\u70b9\u662f\u5426\u6ee1\u8db3\u6e05\u7a7a\u7684\u5fc5\u5907\u8981\u6c42\uff0c\u5982\u679c\u6ee1\u8db3\u8981\u6c42\uff0c\u5219\u4f1a\u9a71\u9010\u8282\u70b9\u7684 pod\u3002"),(0,r.kt)("p",null,"\u4f46\u662f\uff0c\u4f60\u53ef\u4ee5\u5728\u542f\u52a8\u6e05\u7a7a\u65f6\u8986\u76d6\u6e05\u7a7a\u6761\u4ef6\u3002\u4f60\u8fd8\u6709\u673a\u4f1a\u8bbe\u7f6e\u5bbd\u9650\u671f\u548c\u8d85\u65f6\u503c\u3002"),(0,r.kt)("h3",{id:"\u6fc0\u8fdb\u548c\u5b89\u5168\u7684\u6e05\u7a7a\u9009\u9879"},"\u6fc0\u8fdb\u548c\u5b89\u5168\u7684\u6e05\u7a7a\u9009\u9879"),(0,r.kt)("p",null,"\u4e3a\u96c6\u7fa4\u914d\u7f6e\u5347\u7ea7\u7b56\u7565\u65f6\uff0c\u4f60\u5c06\u80fd\u591f\u542f\u7528\u8282\u70b9\u6e05\u7a7a\u3002\u5982\u679c\u542f\u7528\u4e86\u8282\u70b9\u6e05\u7a7a\uff0c\u4f60\u5c06\u80fd\u591f\u914d\u7f6e\u5982\u4f55\u5220\u9664\u548c\u91cd\u65b0\u8c03\u5ea6 pod\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u6fc0\u8fdb\u6a21\u5f0f")),(0,r.kt)("p",{parentName:"li"}," \u5728\u8fd9\u79cd\u6a21\u5f0f\u4e0b\uff0c\u5373\u4f7f pod \u6ca1\u6709\u63a7\u5236\u5668\u4e5f\u4e0d\u4f1a\u88ab\u91cd\u65b0\u8c03\u5ea6\u5230\u65b0\u8282\u70b9\u3002Kubernetes \u4f1a\u8ba4\u4e3a\u4f60\u62e5\u6709\u81ea\u5df1\u7684 pod \u5220\u9664\u903b\u8f91\u3002"),(0,r.kt)("p",{parentName:"li"}," Kubernetes \u8fd8\u4f1a\u8ba4\u4e3a\u4f60\u6709\u5904\u7406\u4f7f\u7528 emptyDir \u7684 pod \u7684\u5b9e\u73b0\u3002\u5982\u679c Pod \u4f7f\u7528 emptyDir \u5b58\u50a8\u672c\u5730\u6570\u636e\uff0c\u4f60\u53ef\u80fd\u65e0\u6cd5\u5b89\u5168\u5730\u5220\u9664\u8be5 pod\uff0c\u56e0\u4e3a\u4e00\u65e6 Pod \u4ece\u8282\u70b9\u4e2d\u5220\u9664\uff0cemptyDir \u4e2d\u7684\u6570\u636e\u5c06\u88ab\u5220\u9664\u3002\u9009\u62e9\u6fc0\u8fdb\u6a21\u5f0f\u5c06\u5220\u9664\u8fd9\u4e9b pod\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5b89\u5168\u6a21\u5f0f")),(0,r.kt)("p",{parentName:"li"}," \u5982\u679c\u4e00\u4e2a\u8282\u70b9\u6709\u72ec\u7acb\u7684 pod \u6216\u4e34\u65f6\u6570\u636e\uff0c\u5b83\u5c06\u88ab\u5c01\u9501\u4f46\u4e0d\u4f1a\u88ab\u6e05\u7a7a\u3002"))),(0,r.kt)("h3",{id:"\u5bbd\u9650\u671f"},"\u5bbd\u9650\u671f"),(0,r.kt)("p",null,"\u7ed9\u6bcf\u4e2a pod \u6e05\u7406\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u4ece\u800c\u8ba9\u5b83\u4eec\u4f18\u96c5\u5730\u9000\u51fa\u3002\u4f8b\u5982\uff0cpod \u53ef\u80fd\u9700\u8981\u5b8c\u6210\u4efb\u4f55\u672a\u5b8c\u6210\u7684\u8bf7\u6c42\u3001\u56de\u6eda\u4e8b\u52a1\u6216\u5c06\u72b6\u6001\u4fdd\u5b58\u5230\u67d0\u4e2a\u5916\u90e8\u5b58\u50a8\u3002\u5982\u679c\u8be5\u503c\u4e3a\u8d1f\u6570\uff0c\u5c06\u4f7f\u7528 pod \u4e2d\u6307\u5b9a\u7684\u9ed8\u8ba4\u503c\u3002"),(0,r.kt)("h3",{id:"\u8d85\u65f6"},"\u8d85\u65f6"),(0,r.kt)("p",null,"\u5728\u6e05\u7a7a\u653e\u5f03\u4e4b\u524d\u5e94\u8be5\u7ee7\u7eed\u7b49\u5f85\u7684\u65f6\u95f4\u3002"),(0,r.kt)("admonition",{title:"Kubernetes \u5df2\u77e5\u95ee\u9898\uff1a",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Kubernetes 1.12 \u4e4b\u524d\u7684\u7248\u672c\u4e2d\uff0c\u5728\u6e05\u7a7a\u8282\u70b9\u65f6\u4e0d\u4f1a\u5f3a\u5236\u6267\u884c",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/pull/64378"},"\u8d85\u65f6\u8bbe\u7f6e"),"\u3002")),(0,r.kt)("h3",{id:"\u6e05\u7a7a\u548c\u5c01\u9501\u72b6\u6001"},"\u6e05\u7a7a\u548c\u5c01\u9501\u72b6\u6001"),(0,r.kt)("p",null,"\u5982\u679c\u6709\u4efb\u4f55\u4e0e\u7528\u6237\u8f93\u5165\u76f8\u5173\u7684\u9519\u8bef\uff0c\u8282\u70b9\u4f1a\u7531\u4e8e\u6e05\u7a7a\u5931\u8d25\u8fdb\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"cordoned")," \u72b6\u6001\u3002\u4f60\u53ef\u4ee5\u66f4\u6b63\u8f93\u5165\u5e76\u518d\u6b21\u5c1d\u8bd5\u6e05\u7a7a\u8282\u70b9\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u89e3\u5c01\u8282\u70b9\u6765\u4e2d\u6b62\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u6e05\u7a7a\u6ca1\u6709\u9519\u8bef\uff0c\u5219\u8282\u70b9\u4f1a\u8fdb\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"draining")," \u72b6\u6001\u3002\u5f53\u8282\u70b9\u5904\u4e8e\u6b64\u72b6\u6001\u65f6\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u505c\u6b62\u6e05\u7a7a\uff0c\u8fd9\u5c06\u505c\u6b62\u6e05\u7a7a\u8fc7\u7a0b\u5e76\u5c06\u8282\u70b9\u7684\u72b6\u6001\u66f4\u6539\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"cordoned"),"\u3002"),(0,r.kt)("p",null,"\u6e05\u7a7a\u6210\u529f\u5b8c\u6210\u540e\uff0c\u8282\u70b9\u5c06\u5904\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"drained")," \u72b6\u6001\u3002\u7136\u540e\u4f60\u53ef\u4ee5\u5173\u95ed\u6216\u5220\u9664\u8282\u70b9\u3002"),(0,r.kt)("p",null,"\u6709\u5173",(0,r.kt)("strong",{parentName:"p"},"\u5c01\u9501\u548c\u6e05\u7a7a"),"\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/cluster-management/#maintenance-on-a-node"},"Kubernetes \u6587\u6863"),"\u3002"),(0,r.kt)("h2",{id:"\u6807\u8bb0-rancher-\u5ffd\u7565\u7684\u8282\u70b9"},"\u6807\u8bb0 Rancher \u5ffd\u7565\u7684\u8282\u70b9"),(0,r.kt)("p",null,"\u67d0\u4e9b\u89e3\u51b3\u65b9\u6848\uff08\u4f8b\u5982 F5 \u7684 BIG-IP \u96c6\u6210\uff09\u53ef\u80fd\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u4e0d\u4f1a\u6ce8\u518c\u5230\u96c6\u7fa4\u7684\u8282\u70b9\u3002"),(0,r.kt)("p",null,"\u7531\u4e8e\u8282\u70b9\u6c38\u8fdc\u4e0d\u4f1a\u5b8c\u6210\u6ce8\u518c\uff0c\u56e0\u6b64\u5b83\u5728 Rancher UI \u4e2d\u603b\u662f\u663e\u793a\u4e3a\u4e0d\u5065\u5eb7\u3002"),(0,r.kt)("p",null,"\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u80fd\u5e0c\u671b\u5c06\u8282\u70b9\u6807\u8bb0\u4e3a Rancher \u5ffd\u7565\u7684\u8282\u70b9\uff0c\u4ece\u800c\u8ba9 Rancher \u4ec5\u5728\u8282\u70b9\u5b9e\u9645\u53d1\u751f\u6545\u969c\u65f6\u5c06\u8282\u70b9\u72b6\u6001\u663e\u793a\u4e3a\u4e0d\u5065\u5eb7\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 Rancher UI \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," \u6807\u8bb0\u8981\u5ffd\u7565\u7684\u8282\u70b9\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5df2\u77e5\u4e00\u4e2a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues/24172"},"\u672a\u89e3\u51b3\u7684\u95ee\u9898"),"\uff0c\u5373\u6807\u8bb0\u4e3a\u88ab\u5ffd\u7565\u7684\u8282\u70b9\u53ef\u80fd\u4f1a\u5361\u5728\u66f4\u65b0\u72b6\u6001\u3002")),(0,r.kt)("h3",{id:"\u4f7f\u7528-kubectl-\u6807\u8bb0\u8981\u5ffd\u7565\u7684\u8282\u70b9"},"\u4f7f\u7528 kubectl \u6807\u8bb0\u8981\u5ffd\u7565\u7684\u8282\u70b9"),(0,r.kt)("p",null,"\u8981\u6dfb\u52a0 Rancher \u5ffd\u7565\u7684\u8282\u70b9\uff0c\u8bf7\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," \u521b\u5efa\u5177\u6709\u4ee5\u4e0b\u6807\u7b7e\u7684\u8282\u70b9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cattle.rancher.io/node-status: ignore\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u5982\u679c\u5c06\u8282\u70b9\u6dfb\u52a0\u5230\u96c6\u7fa4\u4e2d\uff0cRancher \u5c06\u4e0d\u4f1a\u5c1d\u8bd5\u4e0e\u8be5\u8282\u70b9\u540c\u6b65\u3002\u8be5\u8282\u70b9\u4ecd\u7136\u53ef\u4ee5\u662f\u96c6\u7fa4\u7684\u4e00\u90e8\u5206\uff0c\u5e76\u4e14\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," \u5217\u51fa\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u5728\u5c06\u8282\u70b9\u6dfb\u52a0\u5230\u96c6\u7fa4\u4e4b\u524d\u6dfb\u52a0\u4e86\u6807\u7b7e\uff0c\u5219\u8be5\u8282\u70b9\u5c06\u4e0d\u4f1a\u663e\u793a\u5728 Rancher UI \u4e2d\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u5728\u5c06\u8282\u70b9\u6dfb\u52a0\u5230 Rancher \u96c6\u7fa4\u540e\u6dfb\u52a0\u6807\u7b7e\uff0c\u5219\u4e0d\u4f1a\u4ece UI \u4e2d\u5220\u9664\u8be5\u8282\u70b9\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528 Rancher UI \u6216 API \u4ece Rancher server \u4e2d\u5220\u9664\u8282\u70b9\uff0c\u5047\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"nodeName")," \u5728 Rancher API \u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"v3/settings/ignore-node-name")," \u4e2d\u5217\u51fa\uff0c\u5219\u4e0d\u4f1a\u4ece\u96c6\u7fa4\u4e2d\u5220\u9664\u8be5\u8282\u70b9\u3002"))}d.isMDXComponent=!0}}]);