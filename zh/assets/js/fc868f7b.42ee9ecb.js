"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[79970],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,k=d["".concat(i,".").concat(m)]||d[m]||s[m]||a;return t?r.createElement(k,l(l({ref:n},u),{},{components:t})):r.createElement(k,l({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},60865:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),l=["components"],c={title:"Controlplane \u8282\u70b9\u6545\u969c\u6392\u9664"},i=void 0,p={unversionedId:"troubleshooting/kubernetes-components/troubleshooting-controlplane-nodes",id:"troubleshooting/kubernetes-components/troubleshooting-controlplane-nodes",title:"Controlplane \u8282\u70b9\u6545\u969c\u6392\u9664",description:"\u672c\u6587\u9002\u7528\u4e8e\u5177\u6709 controlplane \u89d2\u8272\u7684\u8282\u70b9\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/troubleshooting/kubernetes-components/troubleshooting-controlplane-nodes.md",sourceDirName:"troubleshooting/kubernetes-components",slug:"/troubleshooting/kubernetes-components/troubleshooting-controlplane-nodes",permalink:"/zh/troubleshooting/kubernetes-components/troubleshooting-controlplane-nodes",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/troubleshooting/kubernetes-components/troubleshooting-controlplane-nodes.md",tags:[],version:"current",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"2022/9/23",frontMatter:{title:"Controlplane \u8282\u70b9\u6545\u969c\u6392\u9664"},sidebar:"tutorialSidebar",previous:{title:"etcd \u8282\u70b9\u6545\u969c\u6392\u9664",permalink:"/zh/troubleshooting/kubernetes-components/troubleshooting-etcd-nodes"},next:{title:"nginx-proxy \u6545\u969c\u6392\u9664",permalink:"/zh/troubleshooting/kubernetes-components/troubleshooting-nginx-proxy"}},u={},s=[],d={toc:s};function m(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u9002\u7528\u4e8e\u5177\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"controlplane")," \u89d2\u8272\u7684\u8282\u70b9\u3002"),(0,a.kt)("h1",{id:"\u68c0\u67e5-controlplane-\u5bb9\u5668\u662f\u5426\u6b63\u5728\u8fd0\u884c"},"\u68c0\u67e5 controlplane \u5bb9\u5668\u662f\u5426\u6b63\u5728\u8fd0\u884c"),(0,a.kt)("p",null,"\u5177\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"controlplane")," \u89d2\u8272\u7684\u8282\u70b9\u4e0a\u542f\u52a8\u4e86\u4e09\u4e2a\u5bb9\u5668\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kube-apiserver")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kube-controller-manager")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kube-scheduler"))),(0,a.kt)("p",null,"\u5bb9\u5668\u7684\u72b6\u6001\u5e94\u8be5\u662f ",(0,a.kt)("strong",{parentName:"p"},"Up"),"\u3002",(0,a.kt)("strong",{parentName:"p"},"Up")," \u540e\u9762\u663e\u793a\u7684\u65f6\u95f4\u6307\u7684\u662f\u5bb9\u5668\u8fd0\u884c\u7684\u65f6\u95f4\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker ps -a -f=name='kube-apiserver|kube-controller-manager|kube-scheduler'\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'CONTAINER ID        IMAGE                                COMMAND                  CREATED             STATUS              PORTS               NAMES\n26c7159abbcc        rancher/hyperkube:v1.11.5-rancher1   "/opt/rke-tools/en..."   3 hours ago         Up 3 hours                              kube-apiserver\nf3d287ca4549        rancher/hyperkube:v1.11.5-rancher1   "/opt/rke-tools/en..."   3 hours ago         Up 3 hours                              kube-scheduler\nbdf3898b8063        rancher/hyperkube:v1.11.5-rancher1   "/opt/rke-tools/en..."   3 hours ago         Up 3 hours                              kube-controller-manager\n')),(0,a.kt)("h1",{id:"controlplane-\u5bb9\u5668\u65e5\u5fd7\u8bb0\u5f55"},"controlplane \u5bb9\u5668\u65e5\u5fd7\u8bb0\u5f55"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u5982\u679c\u4f60\u6dfb\u52a0\u4e86\u591a\u4e2a\u5177\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"controlplane")," \u89d2\u8272\u7684\u8282\u70b9\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"kube-controller-manager")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-scheduler")," \u4f1a\u901a\u8fc7 leader \u9009\u4e3e\u6765\u786e\u5b9a leader\u3002\u53ea\u6709\u5f53\u524d leader \u4f1a\u8bb0\u5f55\u6267\u884c\u7684\u64cd\u4f5c\u3002\u6709\u5173\u68c0\u7d22\u5f53\u524d\u7684 leader \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"/zh/troubleshooting/other-troubleshooting-tips/kubernetes-resources#kubernetes-leader-%E9%80%89%E4%B8%BE"},"Kubernetes leader \u9009\u4e3e"),"\u3002"))),(0,a.kt)("p",null,"\u5bb9\u5668\u7684\u65e5\u5fd7\u8bb0\u5f55\u53ef\u80fd\u5305\u542b\u95ee\u9898\u7684\u4fe1\u606f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker logs kube-apiserver\ndocker logs kube-controller-manager\ndocker logs kube-scheduler\n")),(0,a.kt)("h1",{id:"rke2-server-\u65e5\u5fd7"},"RKE2 Server \u65e5\u5fd7"),(0,a.kt)("p",null,"\u5982\u679c Rancher \u914d\u7f6e\u7684 RKE2 \u96c6\u7fa4\u65e0\u6cd5\u4e0e Rancher \u901a\u4fe1\uff0c\u4f60\u53ef\u4ee5\u5728\u4e0b\u6e38\u96c6\u7fa4\u4e2d\u7684 Server \u8282\u70b9\u4e0a\u8fd0\u884c\u6b64\u547d\u4ee4\uff0c\u4ece\u800c\u83b7\u53d6 RKE2 Server \u65e5\u5fd7\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"journalctl -u rke2-server -f\n")))}m.isMDXComponent=!0}}]);