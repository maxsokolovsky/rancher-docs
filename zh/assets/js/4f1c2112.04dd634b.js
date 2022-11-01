"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[84468],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=u(r),m=o,b=h["".concat(p,".").concat(m)]||h[m]||c[m]||a;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},37731:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={title:"\u4e00\u822c\u6545\u969c\u6392\u9664"},p=void 0,u={unversionedId:"troubleshooting/general-troubleshooting",id:"troubleshooting/general-troubleshooting",title:"\u4e00\u822c\u6545\u969c\u6392\u9664",description:"\u672c\u6587\u7528\u4e8e\u5e2e\u52a9\u4f60\u89e3\u51b3\u4f7f\u7528 Rancher \u65f6\u9047\u5230\u7684\u95ee\u9898\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/troubleshooting/general-troubleshooting.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/general-troubleshooting",permalink:"/zh/troubleshooting/general-troubleshooting",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/troubleshooting/general-troubleshooting.md",tags:[],version:"current",lastUpdatedAt:1666730466,formattedLastUpdatedAt:"2022/10/25",frontMatter:{title:"\u4e00\u822c\u6545\u969c\u6392\u9664"},sidebar:"tutorialSidebar",previous:{title:"\u5378\u8f7d Rancher",permalink:"/zh/faq/rancher-is-no-longer-needed"},next:{title:"Kubernetes \u7ec4\u4ef6",permalink:"/zh/pages-for-subheaders/kubernetes-components"}},s={},c=[],h={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u7528\u4e8e\u5e2e\u52a9\u4f60\u89e3\u51b3\u4f7f\u7528 Rancher \u65f6\u9047\u5230\u7684\u95ee\u9898\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/kubernetes-components"},"Kubernetes \u7ec4\u4ef6")),(0,a.kt)("p",{parentName:"li"}," \u5bf9\u4ee5\u4e0b\u6838\u5fc3 Kubernetes \u96c6\u7fa4\u7ec4\u4ef6\u8fdb\u884c\u6545\u969c\u6392\u9664\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"etcd")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kube-apiserver")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kube-controller-manager")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kube-scheduler")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kubelet")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kube-proxy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"nginx-proxy")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/zh/troubleshooting/other-troubleshooting-tips/kubernetes-resources"},"Kubernetes resources")),(0,a.kt)("p",{parentName:"li"}," \u672c\u8282\u4ecb\u7ecd\u4e86\u5bf9\u8282\u70b9\u3001Ingress Controller \u548c Rancher Agent \u7b49 Kubernetes \u8d44\u6e90\u8fdb\u884c\u6545\u969c\u6392\u9664\u7684\u9009\u9879\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/zh/troubleshooting/other-troubleshooting-tips/networking"},"\u7f51\u7edc")),(0,a.kt)("p",{parentName:"li"}," \u4ecb\u7ecd\u4e86\u89e3\u51b3\u7f51\u7edc\u95ee\u9898\u7684\u6b65\u9aa4\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/zh/troubleshooting/other-troubleshooting-tips/dns"},"DNS")),(0,a.kt)("p",{parentName:"li"}," \u89e3\u51b3\u96c6\u7fa4\u7684\u540d\u79f0\u89e3\u6790\u95ee\u9898\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/zh/troubleshooting/other-troubleshooting-tips/rancher-ha"},"\u5bf9\u5b89\u88c5\u5728 Kubernetes \u4e0a\u7684 Rancher \u8fdb\u884c\u6545\u969c\u6392\u9664")),(0,a.kt)("p",{parentName:"li"}," \u89e3\u51b3",(0,a.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"\u5b89\u88c5\u5728 Kubernetes \u4e0a\u7684 Rancher Server")," \u7684\u95ee\u9898\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/zh/troubleshooting/other-troubleshooting-tips/logging"},"Logging")),(0,a.kt)("p",{parentName:"li"}," \u4e86\u89e3\u53ef\u4ee5\u914d\u7f6e\u54ea\u4e9b\u65e5\u5fd7\u7ea7\u522b\uff0c\u4ee5\u53ca\u5982\u4f55\u914d\u7f6e\u65e5\u5fd7\u7ea7\u522b\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/zh/troubleshooting/other-troubleshooting-tips/user-id-tracking-in-audit-logs"},"\u5ba1\u8ba1\u65e5\u5fd7\u4e2d\u7684\u7528\u6237 ID \u8ddf\u8e2a")),(0,a.kt)("p",{parentName:"li"}," \u4e86\u89e3 Rancher \u7ba1\u7406\u5458\u5982\u4f55\u901a\u8fc7\u5916\u90e8\u8eab\u4efd\u63d0\u4f9b\u7a0b\u5e8f\u7528\u6237\u540d\u4ece Rancher \u5ba1\u8ba1\u65e5\u5fd7\u548c Kubernetes \u5ba1\u8ba1\u65e5\u5fd7\u4e2d\u8ddf\u8e2a\u4e8b\u4ef6\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/zh/troubleshooting/other-troubleshooting-tips/expired-webhook-certificate-rotation"},"\u8fc7\u671f\u7684 Webhook \u8bc1\u4e66")),(0,a.kt)("p",{parentName:"li"}," \u4e86\u89e3\u5982\u4f55\u5728\u6bcf\u5e74\u5230\u671f\u540e\u8f6e\u6362 Rancher webhook \u8bc1\u4e66\u5bc6\u94a5\u3002"))))}m.isMDXComponent=!0}}]);