"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[81747],{3905:function(e,n,r){r.d(n,{Zo:function(){return d},kt:function(){return h}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=p(r),h=a,k=u["".concat(l,".").concat(h)]||u[h]||s[h]||o;return r?t.createElement(k,i(i({ref:n},d),{},{components:r})):t.createElement(k,i({ref:n},d))}));function h(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},51462:function(e,n,r){r.r(n),r.d(n,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var t=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],c={title:"Docker \u5b89\u88c5\u9ad8\u7ea7\u9009\u9879"},l=void 0,p={unversionedId:"reference-guides/single-node-rancher-in-docker/advanced-options",id:"reference-guides/single-node-rancher-in-docker/advanced-options",title:"Docker \u5b89\u88c5\u9ad8\u7ea7\u9009\u9879",description:"\u81ea\u5b9a\u4e49 CA \u8bc1\u4e66",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/reference-guides/single-node-rancher-in-docker/advanced-options.md",sourceDirName:"reference-guides/single-node-rancher-in-docker",slug:"/reference-guides/single-node-rancher-in-docker/advanced-options",permalink:"/zh/reference-guides/single-node-rancher-in-docker/advanced-options",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/single-node-rancher-in-docker/advanced-options.md",tags:[],version:"current",lastUpdatedAt:1666730466,formattedLastUpdatedAt:"2022/10/25",frontMatter:{title:"Docker \u5b89\u88c5\u9ad8\u7ea7\u9009\u9879"},sidebar:"tutorialSidebar",previous:{title:"HTTP \u4ee3\u7406\u914d\u7f6e",permalink:"/zh/reference-guides/single-node-rancher-in-docker/http-proxy-configuration"},next:{title:"\u521b\u5efa EKS \u96c6\u7fa4",permalink:"/zh/pages-for-subheaders/amazon-eks-permissions"}},d={},s=[{value:"\u81ea\u5b9a\u4e49 CA \u8bc1\u4e66",id:"\u81ea\u5b9a\u4e49-ca-\u8bc1\u4e66",level:3},{value:"API \u5ba1\u8ba1\u65e5\u5fd7",id:"api-\u5ba1\u8ba1\u65e5\u5fd7",level:3},{value:"TLS \u8bbe\u7f6e",id:"tls-\u8bbe\u7f6e",level:3},{value:"\u79bb\u7ebf\u73af\u5883",id:"\u79bb\u7ebf\u73af\u5883",level:3},{value:"\u6301\u4e45\u5316\u6570\u636e",id:"\u6301\u4e45\u5316\u6570\u636e",level:3},{value:"\u5728\u540c\u4e00\u4e2a\u8282\u70b9\u4e2d\u8fd0\u884c <code>rancher/rancher</code> \u548c <code>rancher/rancher-agent</code>",id:"\u5728\u540c\u4e00\u4e2a\u8282\u70b9\u4e2d\u8fd0\u884c-rancherrancher-\u548c-rancherrancher-agent",level:3}],u={toc:s};function h(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u81ea\u5b9a\u4e49-ca-\u8bc1\u4e66"},"\u81ea\u5b9a\u4e49 CA \u8bc1\u4e66"),(0,o.kt)("p",null,"\u5982\u9700 Rancher \u5728\u9a8c\u8bc1\u670d\u52a1\u65f6\u4f7f\u7528 CA \u6839\u8bc1\u4e66\uff0c\u8bf7\u5728\u542f\u52a8 Rancher \u5bb9\u5668\u65f6\u5171\u4eab\u5305\u542b CA \u6839\u8bc1\u4e66\u7684\u76ee\u5f55\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528\u547d\u4ee4\u793a\u4f8b\u6765\u542f\u52a8\u6302\u8f7d\u4e86\u79c1\u6709 CA \u8bc1\u4e66\u7684 Rancher \u5bb9\u5668\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5377\u6807\u5fd7 (",(0,o.kt)("inlineCode",{parentName:"li"},"-v"),") \u5e94\u6307\u5b9a\u5305\u542b CA \u6839\u8bc1\u4e66\u7684\u4e3b\u673a\u76ee\u5f55\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u73af\u5883\u53d8\u91cf\u6807\u5fd7 (",(0,o.kt)("inlineCode",{parentName:"li"},"-e"),") \u4e0e ",(0,o.kt)("inlineCode",{parentName:"li"},"SSL_CERT_DIR")," \u548c\u76ee\u5f55\u5171\u540c\u58f0\u660e\u4e00\u4e2a\u73af\u5883\u53d8\u91cf\uff0c\u8be5\u53d8\u91cf\u6307\u5b9a\u5bb9\u5668\u5185\u6302\u8f7d\u4e86 CA \u6839\u8bc1\u4e66\u7684\u76ee\u5f55\u4f4d\u7f6e\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4f60\u53ef\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"-e KEY=VALUE")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"li"},"--env KEY=VALUE"),"\u5c06\u73af\u5883\u53d8\u91cf\u4f20\u7ed9 Rancher \u5bb9\u5668\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4f60\u53ef\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"li"},"-v host-source-directory:container-destination-directory")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"li"},"--volume host-source-directory:container-destination-directory"),"\u5728\u5bb9\u5668\u5185\u6302\u8f7d\u4e3b\u673a\u76ee\u5f55\u3002")),(0,o.kt)("p",null,"\u5728\u4ee5\u4e0b\u793a\u4f8b\u5c06\u4f4d\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"/host/certs")," \u4e3b\u673a\u76ee\u5f55\u4e2d\u7684 CA \u8bc1\u4e66\uff0c\u6302\u8f7d\u5230 Rancher \u5bb9\u5668\u5185\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"/container/certs")," \u4e0a\u3002"),(0,o.kt)("p",null,"\u7279\u6743\u8bbf\u95ee\u662f",(0,o.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/rancher-on-a-single-node-with-docker#rancher-%E7%89%B9%E6%9D%83%E8%AE%BF%E9%97%AE"},"\u5fc5\u987b"),"\u7684\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'docker run -d --restart=unless-stopped \\\n  -p 80:80 -p 443:443 \\\n  -v /host/certs:/container/certs \\\n  -e SSL_CERT_DIR="/container/certs" \\\n  --privileged \\\n  rancher/rancher:latest\n')),(0,o.kt)("h3",{id:"api-\u5ba1\u8ba1\u65e5\u5fd7"},"API \u5ba1\u8ba1\u65e5\u5fd7"),(0,o.kt)("p",null,"API \u5ba1\u8ba1\u65e5\u5fd7\u8bb0\u5f55\u4e86\u901a\u8fc7 Rancher Server \u8fdb\u884c\u7684\u6240\u6709\u7528\u6237\u548c\u7cfb\u7edf\u4e8b\u52a1\u3002"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cAPI \u5ba1\u8ba1\u65e5\u5fd7\u4f1a\u5199\u5165\u5230 Rancher \u5bb9\u5668\u5185\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/log/auditlog"),"\u3002\u4f60\u53ef\u5c06\u6b64\u76ee\u5f55\u5171\u4eab\u4e3a\u5377\uff0c\u5e76\u8bbe\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"AUDIT_LEVEL")," \u4ee5\u542f\u7528\u65e5\u5fd7\u3002"),(0,o.kt)("p",null,"\u6709\u5173\u66f4\u591a\u4fe1\u606f\u548c\u9009\u9879\uff0c\u8bf7\u53c2\u89c1 ",(0,o.kt)("a",{parentName:"p",href:"/zh/how-to-guides/advanced-user-guides/enable-api-audit-log"},"API \u5ba1\u8ba1\u65e5\u5fd7"),"\u3002"),(0,o.kt)("p",null,"\u7279\u6743\u8bbf\u95ee\u662f",(0,o.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/rancher-on-a-single-node-with-docker#rancher-%E7%89%B9%E6%9D%83%E8%AE%BF%E9%97%AE"},"\u5fc5\u987b"),"\u7684\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -d --restart=unless-stopped \\\n  -p 80:80 -p 443:443 \\\n  -v /var/log/rancher/auditlog:/var/log/auditlog \\\n  -e AUDIT_LEVEL=1 \\\n  --privileged \\\n  rancher/rancher:latest\n")),(0,o.kt)("h3",{id:"tls-\u8bbe\u7f6e"},"TLS \u8bbe\u7f6e"),(0,o.kt)("p",null,"\u5982\u9700\u4f7f\u7528\u4e0d\u540c\u7684 TLS \u914d\u7f6e\uff0c\u4f60\u53ef\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"CATTLE_TLS_MIN_VERSION")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"CATTLE_TLS_CIPHERS")," \u73af\u5883\u53d8\u91cf\u3002\u4f8b\u5982\uff0c\u5c06 TLS 1.0 \u8bbe\u4e3a\u53ef\u63a5\u53d7\u7684\u6700\u4f4e TLS \u7248\u672c\uff0c\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'docker run -d --restart=unless-stopped \\\n  -p 80:80 -p 443:443 \\\n  -e CATTLE_TLS_MIN_VERSION="1.0" \\\n  --privileged \\\n  rancher/rancher:latest\n')),(0,o.kt)("p",null,"\u7279\u6743\u8bbf\u95ee\u662f",(0,o.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/rancher-on-a-single-node-with-docker#rancher-%E7%89%B9%E6%9D%83%E8%AE%BF%E9%97%AE"},"\u5fc5\u987b"),"\u7684\u3002"),(0,o.kt)("p",null,"\u53c2\u89c1 ",(0,o.kt)("a",{parentName:"p",href:"/zh/getting-started/installation-and-upgrade/installation-references/tls-settings"},"TLS \u8bbe\u7f6e"),"\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\u548c\u9009\u9879\u3002"),(0,o.kt)("h3",{id:"\u79bb\u7ebf\u73af\u5883"},"\u79bb\u7ebf\u73af\u5883"),(0,o.kt)("p",null,"\u5982\u679c\u8981\u8bbf\u95ee\u6b64\u9875\u9762\u4ee5\u5b8c\u6210\u79bb\u7ebf\u5b89\u88c5\uff0c\u5728\u8fd0\u884c\u5b89\u88c5\u547d\u4ee4\u65f6\uff0c\u4f60\u5fc5\u987b\u628a\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u7684 URL \u6dfb\u52a0\u5230 Server \u6807\u5fd7\u524d\u9762\u3002\u4f8b\u5982\uff0c\u5c06\u5e26\u6709\u79c1\u6709\u955c\u50cf\u4ed3\u5e93 URL \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"<REGISTRY.DOMAIN.COM:PORT>")," \u6dfb\u52a0\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher/rancher:latest")," \u524d\u9762\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u793a\u4f8b"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," <REGISTRY.DOMAIN.COM:PORT>/rancher/rancher:latest\n")),(0,o.kt)("h3",{id:"\u6301\u4e45\u5316\u6570\u636e"},"\u6301\u4e45\u5316\u6570\u636e"),(0,o.kt)("p",null,"Rancher \u4f7f\u7528 etcd \u4f5c\u4e3a\u6570\u636e\u5b58\u50a8\u3002\u5982\u679c Rancher \u662f\u4f7f\u7528 Docker \u5b89\u88c5\u7684\uff0cRancher \u4f1a\u4f7f\u7528\u5d4c\u5165\u5f0f etcd\u3002\u6301\u4e45\u5316\u6570\u636e\u4f4d\u4e8e\u5bb9\u5668\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher")," \u8def\u5f84\u4e2d\u3002"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u5c06\u4e3b\u673a\u5377\u6302\u8f7d\u5230\u8be5\u4f4d\u7f6e\uff0c\u6765\u5c06\u6570\u636e\u4fdd\u7559\u5728\u8fd0\u884c\u5b83\u7684\u4e3b\u673a\u4e0a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -d --restart=unless-stopped \\\n  -p 80:80 -p 443:443 \\\n  -v /opt/rancher:/var/lib/rancher \\\n  --privileged \\\n  rancher/rancher:latest\n")),(0,o.kt)("p",null,"\u7279\u6743\u8bbf\u95ee\u662f",(0,o.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/rancher-on-a-single-node-with-docker#rancher-%E7%89%B9%E6%9D%83%E8%AE%BF%E9%97%AE"},"\u5fc5\u987b"),"\u7684\u3002"),(0,o.kt)("h3",{id:"\u5728\u540c\u4e00\u4e2a\u8282\u70b9\u4e2d\u8fd0\u884c-rancherrancher-\u548c-rancherrancher-agent"},"\u5728\u540c\u4e00\u4e2a\u8282\u70b9\u4e2d\u8fd0\u884c ",(0,o.kt)("inlineCode",{parentName:"h3"},"rancher/rancher")," \u548c ",(0,o.kt)("inlineCode",{parentName:"h3"},"rancher/rancher-agent")),(0,o.kt)("p",null,"\u5982\u9700\u4f7f\u7528\u5355\u4e2a\u8282\u70b9\u8fd0\u884c Rancher \u5e76\u5c06\u540c\u4e00\u4e2a\u8282\u70b9\u6dfb\u52a0\u5230\u96c6\u7fa4\uff0c\u4f60\u5fc5\u987b\u8c03\u6574\u6620\u5c04\u7ed9 ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher/rancher")," \u5bb9\u5668\u7684\u4e3b\u673a\u7aef\u53e3\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u5c06\u8282\u70b9\u6dfb\u52a0\u5230\u96c6\u7fa4\u4e2d\uff0c\u8282\u70b9\u5c06\u90e8\u7f72\u4f7f\u7528\u7aef\u53e3 80 \u548c 443 \u7684 NGINX Ingress Controller\u3002\u800c\u8fd9\u5c06\u4e0e\u6211\u4eec\u5efa\u8bae\u7528\u4e8e\u66b4\u9732 ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher/rancher")," \u5bb9\u5668\u7684\u9ed8\u8ba4\u7aef\u53e3\u51b2\u7a81\u3002"),(0,o.kt)("p",null,"\u8bf7\u77e5\u6089\u6211\u4eec\u4e0d\u5efa\u8bae\u5c06\u6b64\u8bbe\u7f6e\u7528\u4e8e\u751f\u4ea7\u73af\u5883\uff0c\u8fd9\u79cd\u65b9\u5f0f\u4ec5\u7528\u6765\u65b9\u4fbf\u8fdb\u884c\u5f00\u53d1/\u6f14\u793a\u3002"),(0,o.kt)("p",null,"\u5982\u9700\u66f4\u6539\u4e3b\u673a\u7aef\u53e3\u6620\u5c04\uff0c\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"-p 80:80 -p 443:443")," \u66ff\u6362\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"-p 8080:80 -p 8443:443"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -d --restart=unless-stopped \\\n  -p 8080:80 -p 8443:443 \\\n  --privileged \\\n  rancher/rancher:latest\n")),(0,o.kt)("p",null,"\u7279\u6743\u8bbf\u95ee\u662f",(0,o.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/rancher-on-a-single-node-with-docker#rancher-%E7%89%B9%E6%9D%83%E8%AE%BF%E9%97%AE"},"\u5fc5\u987b"),"\u7684\u3002"))}h.isMDXComponent=!0}}]);