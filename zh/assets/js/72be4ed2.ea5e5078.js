"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[9171],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93465:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={title:"\u5728 ARM64 \u4e0a\u8fd0\u884c Rancher\uff08\u5b9e\u9a8c\u6027\uff09"},c=void 0,p={unversionedId:"getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/rancher-on-arm64",id:"getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/rancher-on-arm64",title:"\u5728 ARM64 \u4e0a\u8fd0\u884c Rancher\uff08\u5b9e\u9a8c\u6027\uff09",description:"\u5728\u4f7f\u7528 ARM64 \u67b6\u6784\u7684\u8282\u70b9\u4e0a\u8fd0\u884c Rancher \u76ee\u524d\u8fd8\u5904\u5728\u5b9e\u9a8c\u9636\u6bb5\uff0cRancher \u5c1a\u672a\u6b63\u5f0f\u652f\u6301\u8be5\u529f\u80fd\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u4e0d\u5efa\u8bae\u4f60\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528 ARM64 \u67b6\u6784\u7684\u8282\u70b9\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/rancher-on-arm64.md",sourceDirName:"getting-started/installation-and-upgrade/advanced-options/enable-experimental-features",slug:"/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/rancher-on-arm64",permalink:"/zh/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/rancher-on-arm64",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/rancher-on-arm64.md",tags:[],version:"current",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022/9/23",frontMatter:{title:"\u5728 ARM64 \u4e0a\u8fd0\u884c Rancher\uff08\u5b9e\u9a8c\u6027\uff09"},sidebar:"tutorialSidebar",previous:{title:"\u542f\u7528\u5b9e\u9a8c\u529f\u80fd",permalink:"/zh/pages-for-subheaders/enable-experimental-features"},next:{title:"\u4f7f\u7528\u975e\u9ed8\u8ba4\u652f\u6301\u7684\u5b58\u50a8\u9a71\u52a8",permalink:"/zh/getting-started/installation-and-upgrade/advanced-options/enable-experimental-features/unsupported-storage-drivers"}},s={},u=[],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5728\u4f7f\u7528 ARM64 \u67b6\u6784\u7684\u8282\u70b9\u4e0a\u8fd0\u884c Rancher \u76ee\u524d\u8fd8\u5904\u5728\u5b9e\u9a8c\u9636\u6bb5\uff0cRancher \u5c1a\u672a\u6b63\u5f0f\u652f\u6301\u8be5\u529f\u80fd\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u4e0d\u5efa\u8bae\u4f60\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528 ARM64 \u67b6\u6784\u7684\u8282\u70b9\u3002"))),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u7684\u8282\u70b9\u4f7f\u7528 ARM64 \u67b6\u6784\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u9009\u9879\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5728 ARM64 \u67b6\u6784\u7684\u8282\u70b9\u4e0a\u8fd0\u884c Rancher"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6b64\u9009\u9879\u4ec5\u9002\u7528\u4e8e Docker \u5b89\u88c5\u3002\u8bf7\u77e5\u6089\uff0c\u4ee5\u4e0b\u5b89\u88c5\u547d\u4ee4\u53d6\u4ee3\u4e86 ",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/rancher-on-a-single-node-with-docker"},"Docker \u5b89\u88c5"),"\u94fe\u63a5\u4e2d\u7684\u793a\u4f8b\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'# \u5728\u6700\u540e\u4e00\u884c `rancher/rancher:vX.Y.Z` \u4e2d\uff0c\u8bf7\u52a1\u5fc5\u5c06 "X.Y.Z" \u66ff\u6362\u4e3a\u5305\u542b ARM64 \u7248\u672c\u7684\u53d1\u5e03\u7248\u672c\u3002\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u7684\u5339\u914d\u7248\u672c\u662f v2.5.8\uff0c\u8bf7\u5728\u6b64\u884c\u586b\u5199 `rancher/rancher:v2.5.8`\u3002\ndocker run -d --restart=unless-stopped \\\n  -p 80:80 -p 443:443 \\\n  --privileged \\\n  rancher/rancher:vX.Y.Z\n')))))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u8981\u68c0\u67e5\u4f60\u7684\u53d1\u884c\u7248\u672c\u662f\u5426\u4e0e ARM64 \u67b6\u6784\u517c\u5bb9\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u4e24\u79cd\u65b9\u5f0f\u627e\u5230\u5bf9\u5e94\u7248\u672c\u7684\u53d1\u884c\u8bf4\u660e\uff1a"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u8bbf\u95ee ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rancher/rancher/releases"},"Rancher \u53d1\u884c\u7248\u672c"),"\u81ea\u884c\u67e5\u8be2\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6839\u636e\u6807\u7b7e\u548c\u7248\u672c\u53f7\u76f4\u63a5\u627e\u5230\u4f60\u7684\u7248\u672c\u3002\u4f8b\u5982\uff0c\u4f60\u4f7f\u7528\u7684\u7248\u672c\u4e3a 2.5.8\uff0c\u4f60\u53ef\u4ee5\u8bbf\u95ee ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rancher/rancher/releases/tag/v2.5.8"},"Rancher \u53d1\u884c\u7248\u672c - 2.5.8"),"\u3002")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u521b\u5efa\u81ea\u5b9a\u4e49\u96c6\u7fa4\u5e76\u6dfb\u52a0\u4f7f\u7528 ARM64 \u67b6\u6784\u7684\u8282\u70b9",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Kubernetes \u96c6\u7fa4\u5fc5\u987b\u4e3a 1.12 \u6216\u66f4\u9ad8\u7248\u672c"),(0,i.kt)("li",{parentName:"ul"},"CNI \u7f51\u7edc\u63d2\u4ef6\u5fc5\u987b\u662f ",(0,i.kt)("a",{parentName:"li",href:"/zh/faq/container-network-interface-providers#flannel"},"Flannel")))),(0,i.kt)("li",{parentName:"ul"},"\u5bfc\u5165\u5305\u542b\u4f7f\u7528 ARM64 \u67b6\u6784\u7684\u8282\u70b9\u7684\u96c6\u7fa4",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Kubernetes \u96c6\u7fa4\u5fc5\u987b\u4e3a 1.12 \u6216\u66f4\u9ad8\u7248\u672c")))),(0,i.kt)("p",null,"\u5982\u9700\u4e86\u89e3\u5982\u4f55\u914d\u7f6e\u96c6\u7fa4\u9009\u9879\uff0c\u8bf7\u53c2\u89c1",(0,i.kt)("a",{parentName:"p",href:"cluster-provisioning/rke-clusters/options/"},"\u96c6\u7fa4\u9009\u9879"),"\u3002"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u662f\u672a\u7ecf\u6d4b\u8bd5\u7684\u529f\u80fd\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Monitoring\u3001\u544a\u8b66\u3001Notifiers\u3001\u6d41\u6c34\u7ebf\u548c Logging"),(0,i.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u5e94\u7528\u5546\u5e97\u53d1\u5e03\u5e94\u7528")))}m.isMDXComponent=!0}}]);