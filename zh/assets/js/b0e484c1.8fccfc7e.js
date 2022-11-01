"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[74535],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return d}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),o=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=o(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=o(t),d=a,k=h["".concat(u,".").concat(d)]||h[d]||p[d]||l;return t?n.createElement(k,s(s({ref:r},c),{},{components:t})):n.createElement(k,s({ref:r},c))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,s=new Array(l);s[0]=h;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var o=2;o<l;o++)s[o]=t[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},77391:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p}});var n=t(87462),a=t(63366),l=(t(67294),t(3905)),s=["components"],i={title:"\u5b89\u88c5/\u5347\u7ea7 Rancher",description:"\u4e86\u89e3\u5982\u4f55\u5728\u5f00\u53d1\u548c\u751f\u4ea7\u73af\u5883\u4e2d\u5b89\u88c5 Rancher\u3002\u4e86\u89e3\u5355\u8282\u70b9\u548c\u9ad8\u53ef\u7528\u5b89\u88c5"},u=void 0,o={unversionedId:"pages-for-subheaders/installation-and-upgrade",id:"pages-for-subheaders/installation-and-upgrade",title:"\u5b89\u88c5/\u5347\u7ea7 Rancher",description:"\u4e86\u89e3\u5982\u4f55\u5728\u5f00\u53d1\u548c\u751f\u4ea7\u73af\u5883\u4e2d\u5b89\u88c5 Rancher\u3002\u4e86\u89e3\u5355\u8282\u70b9\u548c\u9ad8\u53ef\u7528\u5b89\u88c5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/pages-for-subheaders/installation-and-upgrade.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/installation-and-upgrade",permalink:"/zh/pages-for-subheaders/installation-and-upgrade",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/pages-for-subheaders/installation-and-upgrade.md",tags:[],version:"current",lastUpdatedAt:1666730466,formattedLastUpdatedAt:"2022/10/25",frontMatter:{title:"\u5b89\u88c5/\u5347\u7ea7 Rancher",description:"\u4e86\u89e3\u5982\u4f55\u5728\u5f00\u53d1\u548c\u751f\u4ea7\u73af\u5883\u4e2d\u5b89\u88c5 Rancher\u3002\u4e86\u89e3\u5355\u8282\u70b9\u548c\u9ad8\u53ef\u7528\u5b89\u88c5"},sidebar:"tutorialSidebar",previous:{title:"\u90e8\u7f72\u5e26\u6709 NodePort \u7684\u5de5\u4f5c\u8d1f\u8f7d",permalink:"/zh/getting-started/quick-start-guides/deploy-workloads/nodeports"},next:{title:"\u5b89\u88c5\u8981\u6c42",permalink:"/zh/pages-for-subheaders/installation-requirements"}},c={},p=[{value:"\u4f7f\u7528 Helm CLI \u5b89\u88c5\u7684\u9ad8\u53ef\u7528 Kubernetes",id:"\u4f7f\u7528-helm-cli-\u5b89\u88c5\u7684\u9ad8\u53ef\u7528-kubernetes",level:3},{value:"\u5728 Amazon EKS \u4e0a\u90e8\u7f72 Rancher \u7684\u5feb\u901f\u5165\u95e8",id:"\u5728-amazon-eks-\u4e0a\u90e8\u7f72-rancher-\u7684\u5feb\u901f\u5165\u95e8",level:3},{value:"\u5355\u8282\u70b9 Kubernetes \u5b89\u88c5",id:"\u5355\u8282\u70b9-kubernetes-\u5b89\u88c5",level:3},{value:"Docker \u5b89\u88c5",id:"docker-\u5b89\u88c5",level:3},{value:"\u5176\u4ed6\u65b9\u5f0f",id:"\u5176\u4ed6\u65b9\u5f0f",level:3},{value:"\u5728 Kubernetes \u4e0a\u5b89\u88c5 Rancher \u7684\u66f4\u591a\u9009\u9879",id:"\u5728-kubernetes-\u4e0a\u5b89\u88c5-rancher-\u7684\u66f4\u591a\u9009\u9879",level:3},{value:"\u5728 Docker \u4e0a\u5b89\u88c5 Rancher \u7684\u66f4\u591a\u9009\u9879",id:"\u5728-docker-\u4e0a\u5b89\u88c5-rancher-\u7684\u66f4\u591a\u9009\u9879",level:3}],h={toc:p};function d(e){var r=e.components,t=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,n.Z)({},h,t,{components:r,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u8282\u4ecb\u7ecd\u4e86 Rancher \u5404\u79cd\u5b89\u88c5\u65b9\u5f0f\u4ee5\u53ca\u6bcf\u4e2a\u5b89\u88c5\u65b9\u5f0f\u7684\u4f18\u70b9\u3002"),(0,l.kt)("h1",{id:"\u540d\u8bcd\u89e3\u91ca"},"\u540d\u8bcd\u89e3\u91ca"),(0,l.kt)("p",null,"\u672c\u7ae0\u8282\u6d89\u53ca\u4ee5\u4e0b\u540d\u8bcd\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Rancher Server"),"\uff1a\u7528\u4e8e\u7ba1\u7406\u548c\u914d\u7f6e Kubernetes \u96c6\u7fa4\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7 Rancher Server \u7684 UI \u4e0e\u4e0b\u6e38 Kubernetes \u96c6\u7fa4\u8fdb\u884c\u4ea4\u4e92\u3002Rancher Management Server \u53ef\u4ee5\u5b89\u88c5\u5230\u4efb\u610f Kubernetes \u96c6\u7fa4\u4e0a\uff0c\u5305\u62ec\u6258\u7ba1\u7684\u96c6\u7fa4\uff0c\u5982 Amazon EKS \u96c6\u7fa4\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"RKE\uff08Rancher Kubernetes Engine\uff09"),"\uff1a\u662f\u7ecf\u8fc7\u8ba4\u8bc1\u7684 Kubernetes \u53d1\u884c\u7248\uff0c\u4e5f\u662f\u7528\u4e8e\u521b\u5efa\u548c\u7ba1\u7406 Kubernetes \u96c6\u7fa4\u7684 CLI \u5de5\u5177\u548c\u5e93\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"K3s\uff08\u8f7b\u91cf\u7ea7 Kubernetes\uff09"),"\uff1a\u4e5f\u662f\u7ecf\u8fc7\u8ba4\u8bc1\u7684 Kubernetes \u53d1\u884c\u7248\u3002\u5b83\u6bd4 RKE \u66f4\u65b0\uff0c\u66f4\u6613\u7528\u4e14\u66f4\u8f7b\u91cf\uff0c\u5176\u6240\u6709\u7ec4\u4ef6\u90fd\u5728\u4e00\u4e2a\u5c0f\u4e8e 100 MB \u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u4e2d\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"RKE2"),"\uff1a\u4e00\u4e2a\u5b8c\u5168\u5408\u89c4\u7684 Kubernetes \u53d1\u884c\u7248\uff0c\u4e13\u6ce8\u4e8e\u5b89\u5168\u548c\u5408\u89c4\u6027\u3002")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"restrictedAdmin")," Helm Chart \u9009\u9879\u5728 ",(0,l.kt)("strong",{parentName:"p"},"Rancher Server")," \u53ef\u7528\u3002\u5982\u679c\u8be5\u9009\u9879\u8bbe\u7f6e\u4e3a true\uff0c\u521d\u59cb\u7684 Rancher \u7528\u6237\u8bbf\u95ee\u672c\u5730 Kubernetes \u96c6\u7fa4\u4f1a\u53d7\u5230\u9650\u5236\uff0c\u4ee5\u907f\u514d\u6743\u9650\u5347\u7ea7\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions#%E5%8F%97%E9%99%90%E7%AE%A1%E7%90%86%E5%91%98"},"restricted-admin \u89d2\u8272"),"\u3002"),(0,l.kt)("h1",{id:"\u5b89\u88c5\u65b9\u5f0f\u6982\u8ff0"},"\u5b89\u88c5\u65b9\u5f0f\u6982\u8ff0"),(0,l.kt)("p",null,"Rancher \u53ef\u4ee5\u5b89\u88c5\u5728\u4ee5\u4e0b\u4e3b\u8981\u67b6\u6784\u4e0a\uff1a"),(0,l.kt)("h3",{id:"\u4f7f\u7528-helm-cli-\u5b89\u88c5\u7684\u9ad8\u53ef\u7528-kubernetes"},"\u4f7f\u7528 Helm CLI \u5b89\u88c5\u7684\u9ad8\u53ef\u7528 Kubernetes"),(0,l.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u4f7f\u7528 Kubernetes \u5305\u7ba1\u7406\u5668 Helm \u5728\u4e13\u7528\u7684 Kubernetes \u96c6\u7fa4\u4e0a\u5b89\u88c5 Rancher\u3002\u5728 RKE \u96c6\u7fa4\u4e2d\uff0c\u9700\u8981\u4f7f\u7528\u4e09\u4e2a\u8282\u70b9\u624d\u80fd\u5b9e\u73b0\u9ad8\u53ef\u7528\u96c6\u7fa4\u3002\u5728 K3s \u96c6\u7fa4\u4e2d\uff0c\u53ea\u9700\u8981\u4e24\u4e2a\u8282\u70b9\u5373\u53ef\u3002"),(0,l.kt)("h3",{id:"\u5728-amazon-eks-\u4e0a\u90e8\u7f72-rancher-\u7684\u5feb\u901f\u5165\u95e8"},"\u5728 Amazon EKS \u4e0a\u90e8\u7f72 Rancher \u7684\u5feb\u901f\u5165\u95e8"),(0,l.kt)("p",null,"Rancher \u548c Amazon Web Services \u5408\u4f5c\u7f16\u5199\u4e86\u4e00\u4efd\u5feb\u901f\u5165\u95e8\u6307\u5357\uff0c\u7528\u4e8e\u6309\u7167 AWS \u7684\u6700\u4f73\u5b9e\u8df5\uff0c\u5728 EKS Kubernetes \u96c6\u7fa4\u4e0a\u90e8\u7f72 Rancher\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"https://aws-quickstart.github.io/quickstart-eks-rancher/"},"\u90e8\u7f72\u6307\u5357"),"\u3002"),(0,l.kt)("h3",{id:"\u5355\u8282\u70b9-kubernetes-\u5b89\u88c5"},"\u5355\u8282\u70b9 Kubernetes \u5b89\u88c5"),(0,l.kt)("p",null,"Rancher \u53ef\u4ee5\u5b89\u88c5\u5728\u5355\u8282\u70b9 Kubernetes \u96c6\u7fa4\u4e0a\u3002\u4f46\u662f\uff0c\u5728\u5355\u8282\u70b9\u5b89\u88c5\u7684\u60c5\u51b5\u4e0b\uff0cRancher Server \u6ca1\u6709\u9ad8\u53ef\u7528\u6027\u3002\u800c\u9ad8\u53ef\u7528\u6027\u5bf9\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u8fd0\u884c Rancher \u975e\u5e38\u91cd\u8981\u3002"),(0,l.kt)("p",null,"\u4f46\u662f\uff0c\u5982\u679c\u4f60\u60f3\u8981\u77ed\u671f\u5185\u4f7f\u7528\u5355\u8282\u70b9\u8282\u7701\u8d44\u6e90\uff0c\u540c\u65f6\u53c8\u4fdd\u7559\u9ad8\u53ef\u7528\u6027\u8fc1\u79fb\u8def\u5f84\uff0c\u90a3\u4e48\u5355\u8282\u70b9 Kubernetes \u5b89\u88c5\u4e5f\u662f\u5408\u9002\u7684\u3002\u4f60\u4e5f\u53ef\u4ee5\u4e4b\u540e\u5411\u96c6\u7fa4\u4e2d\u6dfb\u52a0\u8282\u70b9\uff0c\u83b7\u5f97\u9ad8\u53ef\u7528\u7684 Rancher Server\u3002"),(0,l.kt)("h3",{id:"docker-\u5b89\u88c5"},"Docker \u5b89\u88c5"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u7684\u76ee\u7684\u662f\u6d4b\u8bd5\u6216\u6f14\u793a\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 Docker \u628a Rancher \u5b89\u88c5\u5230\u5355\u4e2a\u8282\u70b9\u4e2d\u3002\u672c\u5730 Kubernetes \u96c6\u7fa4\u662f\u5b89\u88c5\u5230\u5355\u4e2a Docker \u5bb9\u5668\u4e2d\u7684\uff0c\u800c Rancher \u662f\u5b89\u88c5\u5230\u672c\u5730\u96c6\u7fa4\u4e2d\u7684\u3002"),(0,l.kt)("p",null,"Rancher backup operator \u53ef\u5c06 Rancher \u4ece\u5355\u4e2a Docker \u5bb9\u5668\u8fc1\u79fb\u5230\u9ad8\u53ef\u7528 Kubernetes \u96c6\u7fa4\u4e0a\u3002\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster"},"\u628a Rancher \u8fc1\u79fb\u5230\u65b0\u96c6\u7fa4"),"\u3002"),(0,l.kt)("h3",{id:"\u5176\u4ed6\u65b9\u5f0f"},"\u5176\u4ed6\u65b9\u5f0f"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u9700\u8981\u5728\u79bb\u7ebf\u73af\u5883\u4e2d\u6216\u4f7f\u7528 HTTP \u4ee3\u7406\u5b89\u88c5 Rancher\uff0c\u8bf7\u53c2\u89c1\u4ee5\u4e0b\u72ec\u7acb\u7684\u8bf4\u660e\u6587\u6863\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7f51\u7edc\u8bbf\u95ee\u65b9\u5f0f"),(0,l.kt)("th",{parentName:"tr",align:null},"\u57fa\u4e8e Kubernetes \u5b89\u88c5\uff08\u63a8\u8350\uff09"),(0,l.kt)("th",{parentName:"tr",align:null},"\u57fa\u4e8e Docker \u5b89\u88c5"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u76f4\u63a5\u8bbf\u95ee\u4e92\u8054\u7f51"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"\u6587\u6863")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh/pages-for-subheaders/rancher-on-a-single-node-with-docker"},"\u6587\u6863"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 HTTP \u4ee3\u7406"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh/pages-for-subheaders/rancher-behind-an-http-proxy"},"\u6587\u6863")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh/pages-for-subheaders/rancher-on-a-single-node-with-docker"},"\u6587\u6863"),"\u53ca",(0,l.kt)("a",{parentName:"td",href:"/zh/reference-guides/single-node-rancher-in-docker/http-proxy-configuration"},"\u914d\u7f6e"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u79bb\u7ebf\u73af\u5883"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh/pages-for-subheaders/air-gapped-helm-cli-install"},"\u6587\u6863")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/zh/pages-for-subheaders/air-gapped-helm-cli-install"},"\u6587\u6863"))))),(0,l.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u5728 Kubernetes \u96c6\u7fa4\u4e0a\u5b89\u88c5 Rancher\uff0c\u56e0\u4e3a\u5728\u591a\u8282\u70b9\u96c6\u7fa4\u4e2d\uff0cRancher Server \u53ef\u4ee5\u5b9e\u73b0\u9ad8\u53ef\u7528\u3002\u9ad8\u53ef\u7528\u914d\u7f6e\u53ef\u4ee5\u63d0\u5347 Rancher \u8bbf\u95ee\u5176\u7ba1\u7406\u7684\u4e0b\u6e38 Kubernetes \u96c6\u7fa4\u7684\u7a33\u5b9a\u6027\u3002"),(0,l.kt)("p",null,"\u56e0\u6b64\uff0c\u6211\u4eec\u5efa\u8bae\u5728\u751f\u4ea7\u7ea7\u522b\u7684\u67b6\u6784\u4e2d\uff0c\u8bbe\u7f6e\u4e00\u4e2a\u9ad8\u53ef\u7528\u7684 Kubernetes \u96c6\u7fa4\uff0c\u7136\u540e\u5728\u8fd9\u4e2a\u96c6\u7fa4\u4e0a\u5b89\u88c5 Rancher\u3002\u5b89\u88c5 Rancher \u540e\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 Rancher \u90e8\u7f72\u548c\u7ba1\u7406 Kubernetes \u96c6\u7fa4\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u7684\u76ee\u7684\u662f\u6d4b\u8bd5\u6216\u6f14\u793a\uff0c\u4f60\u53ef\u4ee5\u5c06 Rancher \u5b89\u88c5\u5230\u5355\u4e2a Docker \u5bb9\u5668\u4e2d\u3002Docker \u5b89\u88c5\u53ef\u4ee5\u8ba9\u4f60\u5b9e\u73b0\u5f00\u7bb1\u5373\u7528\uff0c\u4ee5\u4f7f\u7528 Rancher \u8bbe\u7f6e Kubernetes \u96c6\u7fa4\u3002Docker \u5b89\u88c5\u4e3b\u8981\u662f\u7528\u4e8e\u63a2\u7d22 Rancher Server \u7684\u529f\u80fd\uff0c\u53ea\u9002\u7528\u4e8e\u5f00\u53d1\u548c\u6d4b\u8bd5\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster"},"\u5728 Kubernetes \u4e0a\u5b89\u88c5 Rancher \u7684\u8bf4\u660e"),"\u4ecb\u7ecd\u4e86\u5982\u4f55\u9996\u5148\u4f7f\u7528 K3s \u6216 RKE \u521b\u5efa\u548c\u7ba1\u7406 Kubernetes \u96c6\u7fa4\uff0c\u7136\u540e\u518d\u5c06 Rancher \u5b89\u88c5\u5230\u8be5\u96c6\u7fa4\u4e0a\u3002"),(0,l.kt)("p",null,"\u5982\u679c Kubernetes \u96c6\u7fa4\u4e2d\u7684\u8282\u70b9\u6b63\u5728\u8fd0\u884c\u4e14\u6ee1\u8db3",(0,l.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/installation-requirements"},"\u8282\u70b9\u8981\u6c42"),"\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 Helm \u5c06 Rancher \u90e8\u7f72\u5230 Kubernetes \u4e0a\u3002Helm \u4f7f\u7528 Rancher \u7684 Helm Chart \u5728 Kubernetes \u96c6\u7fa4\u7684\u6bcf\u4e2a\u8282\u70b9\u4e0a\u5b89\u88c5 Rancher \u7684\u526f\u672c\u3002\u6211\u4eec\u5efa\u8bae\u4f7f\u7528\u8d1f\u8f7d\u5747\u8861\u5668\u5c06\u6d41\u91cf\u5b9a\u5411\u5230\u96c6\u7fa4\u4e2d\u7684\u6bcf\u4e2a Rancher \u526f\u672c\u4e0a\u3002"),(0,l.kt)("p",null,"\u5982\u9700\u8fdb\u4e00\u6b65\u4e86\u89e3 Rancher \u67b6\u6784\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/rancher-manager-architecture"},"\u67b6\u6784\u6982\u8ff0"),"\uff0c",(0,l.kt)("a",{parentName:"p",href:"/zh/reference-guides/rancher-manager-architecture/architecture-recommendations"},"\u751f\u4ea7\u7ea7\u522b\u67b6\u6784\u63a8\u8350"),"\u6216",(0,l.kt)("a",{parentName:"p",href:"/zh/reference-guides/best-practices/rancher-server/tips-for-running-rancher"},"\u6700\u4f73\u5b9e\u8df5\u6307\u5357"),"\u3002"),(0,l.kt)("h1",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,l.kt)("p",null,"\u5b89\u88c5 Rancher \u4e4b\u524d\uff0c\u8bf7\u786e\u4fdd\u4f60\u7684\u8282\u70b9\u6ee1\u8db3\u6240\u6709",(0,l.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/installation-requirements"},"\u5b89\u88c5\u8981\u6c42"),"\u3002"),(0,l.kt)("h1",{id:"\u67b6\u6784\u5efa\u8bae"},"\u67b6\u6784\u5efa\u8bae"),(0,l.kt)("p",null,"\u4e3a\u4e86\u8fbe\u5230\u6700\u4f73\u6027\u80fd\u548c\u5b89\u5168\u6027\uff0c\u6211\u4eec\u5efa\u8bae\u4f60\u4e3a Rancher Management Server \u4f7f\u7528\u5355\u72ec\u7684\u4e13\u7528 Kubernetes \u96c6\u7fa4\u3002\u4e0d\u5efa\u8bae\u5728\u6b64\u96c6\u7fa4\u4e0a\u8fd0\u884c\u7528\u6237\u5de5\u4f5c\u8d1f\u8f7d\u3002\u90e8\u7f72 Rancher \u540e\uff0c\u4f60\u53ef\u4ee5",(0,l.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/kubernetes-clusters-in-rancher-setup"},"\u521b\u5efa\u6216\u5bfc\u5165\u96c6\u7fa4"),"\u6765\u8fd0\u884c\u4f60\u7684\u5de5\u4f5c\u8d1f\u8f7d\u3002"),(0,l.kt)("p",null,"\u8be6\u60c5\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"/zh/reference-guides/rancher-manager-architecture/architecture-recommendations"},"\u67b6\u6784\u63a8\u8350"),"\u3002"),(0,l.kt)("h3",{id:"\u5728-kubernetes-\u4e0a\u5b89\u88c5-rancher-\u7684\u66f4\u591a\u9009\u9879"},"\u5728 Kubernetes \u4e0a\u5b89\u88c5 Rancher \u7684\u66f4\u591a\u9009\u9879"),(0,l.kt)("p",null,"\u53c2\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/installation-references/helm-chart-options"},"Helm Chart \u9009\u9879"),"\u4ee5\u4e86\u89e3\u5728 Kubernetes \u96c6\u7fa4\u4e0a\u5b89\u88c5 Rancher \u7684\u5176\u4ed6\u914d\u7f6e\uff0c\u5305\u62ec\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/zh/getting-started/installation-and-upgrade/installation-references/helm-chart-options#api-%E5%AE%A1%E8%AE%A1%E6%97%A5%E5%BF%97"},"\u5f00\u542f API \u5ba1\u8ba1\u65e5\u5fd7\u6765\u8bb0\u5f55\u6240\u6709\u4e8b\u52a1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/zh/getting-started/installation-and-upgrade/installation-references/helm-chart-options#%E5%A4%96%E9%83%A8-tls-%E7%BB%88%E6%AD%A2"},"\u8d1f\u8f7d\u5747\u8861\u5668\u4e0a\u7684 TLS \u7ec8\u6b62")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/zh/getting-started/installation-and-upgrade/installation-references/helm-chart-options#%E8%87%AA%E5%AE%9A%E4%B9%89-ingress"},"\u81ea\u5b9a\u4e49 Ingress"))),(0,l.kt)("p",null,"\u5728 Rancher \u7684\u5b89\u88c5\u6307\u5357\u4e2d\uff0c\u6211\u4eec\u63a8\u8350\u4f7f\u7528 K3s \u6216 RKE \u6765\u914d\u7f6e Kubernetes \u96c6\u7fa4\uff0c\u7136\u540e\u518d\u5728\u8fd9\u4e2a\u96c6\u7fa4\u4e2d\u5b89\u88c5 Rancher\u3002K3s \u548c RKE \u5747\u63d0\u4f9b\u8bb8\u591a\u914d\u7f6e\u9009\u9879\uff0c\u7528\u4e8e\u4e3a\u4f60\u7684\u5177\u4f53\u73af\u5883\u81ea\u5b9a\u4e49 Kubernetes \u96c6\u7fa4\u3002\u6709\u5173\u9009\u9879\u548c\u529f\u80fd\u7684\u5b8c\u6574\u5217\u8868\uff0c\u8bf7\u53c2\u89c1\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/config-options/"},"RKE \u914d\u7f6e\u9009\u9879")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/installation/install-options/"},"K3s \u914d\u7f6e\u9009\u9879"))),(0,l.kt)("h3",{id:"\u5728-docker-\u4e0a\u5b89\u88c5-rancher-\u7684\u66f4\u591a\u9009\u9879"},"\u5728 Docker \u4e0a\u5b89\u88c5 Rancher \u7684\u66f4\u591a\u9009\u9879"),(0,l.kt)("p",null,"\u53c2\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/rancher-on-a-single-node-with-docker"},"Docker \u5b89\u88c5\u9009\u9879"),"\u4e86\u89e3\u5176\u4ed6\u914d\u7f6e\uff0c\u5305\u62ec\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/zh/reference-guides/single-node-rancher-in-docker/advanced-options#api-%E5%AE%A1%E8%AE%A1%E6%97%A5%E5%BF%97"},"\u5f00\u542f API \u5ba1\u8ba1\u65e5\u5fd7\u6765\u8bb0\u5f55\u6240\u6709\u4e8b\u52a1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/zh/how-to-guides/advanced-user-guides/configure-layer-7-nginx-load-balancer"},"\u5916\u90e8\u8d1f\u8f7d\u5747\u8861\u5668")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/zh/reference-guides/single-node-rancher-in-docker/advanced-options#%E6%8C%81%E4%B9%85%E5%8C%96%E6%95%B0%E6%8D%AE"},"\u6301\u4e45\u5316\u6570\u636e\u5b58\u50a8"))))}d.isMDXComponent=!0}}]);