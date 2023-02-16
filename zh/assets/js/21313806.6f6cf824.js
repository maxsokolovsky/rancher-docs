"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[6309],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),k=n,d=u["".concat(c,".").concat(k)]||u[k]||m[k]||o;return r?a.createElement(d,i(i({ref:t},l),{},{components:r})):a.createElement(d,i({ref:t},l))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},69910:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={title:"\u5c06 Rancher \u8fc1\u79fb\u5230\u65b0\u96c6\u7fa4"},i=void 0,p={unversionedId:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster",id:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster",title:"\u5c06 Rancher \u8fc1\u79fb\u5230\u65b0\u96c6\u7fa4",description:"\u5982\u679c\u4f60\u8981\u5c06 Rancher \u8fc1\u79fb\u5230\u4e00\u4e2a\u65b0\u7684 Kubernetes \u96c6\u7fa4\uff0c\u5148\u4e0d\u8981\u5728\u65b0\u96c6\u7fa4\u4e0a\u5b89\u88c5 Rancher\u3002\u8fd9\u662f\u56e0\u4e3a\u5982\u679c\u5c06 Rancher \u8fd8\u539f\u5230\u5df2\u5b89\u88c5 Rancher \u7684\u65b0\u96c6\u7fa4\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u95ee\u9898\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster.md",sourceDirName:"how-to-guides/new-user-guides/backup-restore-and-disaster-recovery",slug:"/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster",permalink:"/zh/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/migrate-rancher-to-new-cluster.md",tags:[],version:"current",lastUpdatedAt:1666730466,formattedLastUpdatedAt:"2022\u5e7410\u670825\u65e5",frontMatter:{title:"\u5c06 Rancher \u8fc1\u79fb\u5230\u65b0\u96c6\u7fa4"},sidebar:"tutorialSidebar",previous:{title:"\u8fd8\u539f Rancher",permalink:"/zh/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/restore-rancher"},next:{title:"\u5907\u4efd Docker \u5b89\u88c5\u7684 Rancher",permalink:"/zh/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-docker-installed-rancher"}},c={},s=[{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:3},{value:"1. \u5b89\u88c5 rancher-backup Helm Chart",id:"1-\u5b89\u88c5-rancher-backup-helm-chart",level:3},{value:"2. \u4f7f\u7528 Restore \u81ea\u5b9a\u4e49\u8d44\u6e90\u6765\u8fd8\u539f\u5907\u4efd",id:"2-\u4f7f\u7528-restore-\u81ea\u5b9a\u4e49\u8d44\u6e90\u6765\u8fd8\u539f\u5907\u4efd",level:3},{value:"3. \u5b89\u88c5 cert-manager",id:"3-\u5b89\u88c5-cert-manager",level:3},{value:"4. \u4f7f\u7528 Helm \u5b89\u88c5 Rancher",id:"4-\u4f7f\u7528-helm-\u5b89\u88c5-rancher",level:3}],l={toc:s};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u8981\u5c06 Rancher \u8fc1\u79fb\u5230\u4e00\u4e2a\u65b0\u7684 Kubernetes \u96c6\u7fa4\uff0c\u5148\u4e0d\u8981\u5728\u65b0\u96c6\u7fa4\u4e0a\u5b89\u88c5 Rancher\u3002\u8fd9\u662f\u56e0\u4e3a\u5982\u679c\u5c06 Rancher \u8fd8\u539f\u5230\u5df2\u5b89\u88c5 Rancher \u7684\u65b0\u96c6\u7fa4\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u95ee\u9898\u3002"),(0,n.kt)("h3",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u8bf4\u660e\u5047\u8bbe\u4f60\u5df2\u7ecf\u5b8c\u6210",(0,n.kt)("a",{parentName:"p",href:"/zh/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher"},"\u5907\u4efd\u521b\u5efa"),"\uff0c\u5e76\u4e14\u5df2\u7ecf\u5b89\u88c5\u4e86\u7528\u4e8e\u90e8\u7f72 Rancher \u7684\u65b0 Kubernetes \u96c6\u7fa4\u3002"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"\u4f60\u9700\u8981\u4f7f\u7528\u4e0e\u7b2c\u4e00\u4e2a\u96c6\u7fa4\u4e2d\u8bbe\u7f6e\u7684 Server URL \u76f8\u540c\u7684\u4e3b\u673a\u540d\u3002\u5426\u5219\uff0c\u4e0b\u6e38\u96c6\u7fa4\u4f1a\u5728 UI \u7684\u7ba1\u7406\u9875\u9762\u663e\u793a\u4e3a\u4e0d\u53ef\u7528\uff0c\u5e76\u4e14\u4f60\u4e0d\u80fd\u70b9\u51fb\u96c6\u7fa4\u5185\u6216\u96c6\u7fa4\u7684 ",(0,n.kt)("strong",{parentName:"p"},"Explore")," \u6309\u94ae\u3002")),(0,n.kt)("p",null,"Rancher \u5fc5\u987b\u662f 2.5.0 \u6216\u66f4\u9ad8\u7248\u672c\u3002"),(0,n.kt)("p",null,"Rancher \u53ef\u4ee5\u5b89\u88c5\u5230\u4efb\u610f Kubernetes \u96c6\u7fa4\u4e0a\uff0c\u5305\u62ec\u6258\u7ba1\u7684 Kubernetes \u96c6\u7fa4\uff08\u5982 Amazon EKS \u96c6\u7fa4\uff09\u3002\u5982\u9700\u83b7\u53d6\u5b89\u88c5 Kubernetes \u7684\u5e2e\u52a9\uff0c\u8bf7\u53c2\u89c1 Kubernetes \u53d1\u884c\u7248\u7684\u6587\u6863\u3002\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b Rancher \u7684 Kubernetes \u53d1\u884c\u7248\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/installation/"},"RKE Kubernetes \u5b89\u88c5\u6587\u6863")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/installation/"},"K3s Kubernetes \u5b89\u88c5\u6587\u6863"))),(0,n.kt)("h3",{id:"1-\u5b89\u88c5-rancher-backup-helm-chart"},"1. \u5b89\u88c5 rancher-backup Helm Chart"),(0,n.kt)("p",null,"\u5b89\u88c5 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/backup-restore-operator/tags"},"rancher-backup chart"),"\uff0c\u8bf7\u4f7f\u7528 2.x.x \u4e3b\u8981\u7248\u672c\u5185\u7684\u7248\u672c\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6dfb\u52a0 helm \u4ed3\u5e93\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add rancher-charts https://charts.rancher.io\nhelm repo update\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528 2.x.x rancher-backup \u7248\u672c\u8bbe\u7f6e ",(0,n.kt)("inlineCode",{parentName:"p"},"CHART_VERSION")," \u53d8\u91cf\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm search repo --versions rancher-charts/rancher-backup\nCHART_VERSION=<2.x.x>\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5b89\u88c5 Chart\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm install rancher-backup-crd rancher-charts/rancher-backup-crd -n cattle-resources-system --create-namespace --version $CHART_VERSION\nhelm install rancher-backup rancher-charts/rancher-backup -n cattle-resources-system --version $CHART_VERSION\n")),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0a\u5047\u8bbe\u4f60\u7684\u73af\u5883\u5177\u6709\u5230 Docker Hub \u7684\u51fa\u7ad9\u8fde\u63a5\u3002"),(0,n.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e",(0,n.kt)("strong",{parentName:"p"},"\u79bb\u7ebf\u73af\u5883"),"\uff0c\u5728\u5b89\u88c5 rancher-backup Helm Chart \u65f6\uff0c\u4f7f\u7528\u4e0b\u9762\u7684 Helm \u503c\u4ece\u4f60\u7684\u79c1\u6709\u955c\u50cf\u4ed3\u5e93\u4e2d\u62c9\u53d6 ",(0,n.kt)("inlineCode",{parentName:"p"},"backup-restore-operator")," \u955c\u50cf\u3002"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"--set image.repository $REGISTRY/rancher/backup-restore-operator\n"))))),(0,n.kt)("h3",{id:"2-\u4f7f\u7528-restore-\u81ea\u5b9a\u4e49\u8d44\u6e90\u6765\u8fd8\u539f\u5907\u4efd"},"2. \u4f7f\u7528 Restore \u81ea\u5b9a\u4e49\u8d44\u6e90\u6765\u8fd8\u539f\u5907\u4efd"),(0,n.kt)("admonition",{title:"\u91cd\u8981\u63d0\u793a\uff1a",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Kubernetes v1.22 \u662f Rancher 2.6.3 \u7684\u5b9e\u9a8c\u529f\u80fd\uff0c\u4e0d\u652f\u6301\u4f7f\u7528 apiVersion ",(0,n.kt)("inlineCode",{parentName:"p"},"apiextensions.k8s.io/v1beta1"),"\u6765\u8fd8\u539f\u5305\u542b CRD \u6587\u4ef6\u7684\u5907\u4efd\u6587\u4ef6\u3002\u5728 v1.22 \u4e2d\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-backup")," \u5e94\u7528\u7684\u9ed8\u8ba4 ",(0,n.kt)("inlineCode",{parentName:"p"},"resourceSet")," \u53ea\u6536\u96c6\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"apiextensions.k8s.io/v1")," \u7684 CRD\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u4e24\u79cd\u65b9\u6cd5\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002"),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528 apiVersion v1 \u6765\u66f4\u65b0\u9ed8\u8ba4 ",(0,n.kt)("inlineCode",{parentName:"p"},"resourceSet"),"\uff0c\u4ece\u800c\u6536\u96c6 CRD\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"apiextensions.k8s.io/v1")," \u4f5c\u4e3a\u66ff\u4ee3\uff0c\u6765\u66f4\u65b0\u9ed8\u8ba4 ",(0,n.kt)("inlineCode",{parentName:"p"},"resourceSet")," \u548c\u5ba2\u6237\u7aef\uff0c\u4ece\u800c\u5728\u5185\u90e8\u4f7f\u7528\u65b0\u7684 API\u3002"),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u5728\u4e3a v1.22 \u7248\u672c\u5236\u4f5c\u6216\u6062\u590d\u5907\u4efd\u65f6\uff0cRancher \u7248\u672c\u548c\u672c\u5730\u96c6\u7fa4\u7684 Kubernetes \u7248\u672c\u5e94\u8be5\u662f\u4e00\u6837\u7684\u3002\u7531\u4e8e\u96c6\u7fa4\u4e2d\u652f\u6301\u7684 apiVersion \u548c\u5907\u4efd\u6587\u4ef6\u4e2d\u7684 apiVersion \u53ef\u80fd\u4e0d\u540c\uff0c\u56e0\u6b64\u5728\u8fd8\u539f\u5907\u4efd\u65f6\u8bf7\u8003\u8651 Kubernetes \u7684\u7248\u672c\u3002"))))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5728\u4f7f\u7528 S3 \u5bf9\u8c61\u5b58\u50a8\u4f5c\u4e3a\u9700\u8981\u4f7f\u7528\u51ed\u8bc1\u7684\u8fd8\u539f\u7684\u5907\u4efd\u6e90\u65f6\uff0c\u8bf7\u5728\u6b64\u96c6\u7fa4\u4e2d\u521b\u5efa\u4e00\u4e2a ",(0,n.kt)("inlineCode",{parentName:"p"},"Secret")," \u5bf9\u8c61\u4ee5\u6dfb\u52a0 S3 \u51ed\u8bc1\u3002Secret \u6570\u636e\u5fc5\u987b\u6709\u4e24\u4e2a\u5bc6\u94a5\uff0c\u5206\u522b\u662f\u5305\u542b S3 \u51ed\u8bc1\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"accessKey")," \u548c ",(0,n.kt)("inlineCode",{parentName:"p"},"secretKey"),"\u3002"),(0,n.kt)("p",{parentName:"li"},"\u4f60\u53ef\u4ee5\u5728\u4efb\u4f55\u547d\u540d\u7a7a\u95f4\u4e2d\u521b\u5efa Secret\uff0c\u672c\u793a\u4f8b\u4f7f\u7528 default \u547d\u540d\u7a7a\u95f4\u3002"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create secret generic s3-creds \\\n  --from-literal=accessKey=<access key> \\\n  --from-literal=secretKey=<secret key>\n")),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u5728\u4e0a\u9762\u7684\u547d\u4ee4\u4e2d\u6dfb\u52a0\u4f60\u7684 Access Key \u548c Secret Key \u4f5c\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"accessKey")," \u548c ",(0,n.kt)("inlineCode",{parentName:"p"},"secretKey")," \u7684\u503c\u3002"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u521b\u5efa\u4e00\u4e2a ",(0,n.kt)("inlineCode",{parentName:"p"},"Restore")," \u5bf9\u8c61\uff1a"),(0,n.kt)("p",{parentName:"li"},"\u5728\u8fc1\u79fb\u671f\u95f4\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},"prune")," \u5fc5\u987b\u8bbe\u7f6e\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),"\u3002\u8bf7\u53c2\u89c1\u4e0b\u9762\u7684\u793a\u4f8b\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"# restore-migration.yaml\napiVersion: resources.cattle.io/v1\nkind: Restore\nmetadata:\n  name: restore-migration\nspec:\n  backupFilename: backup-b0450532-cee1-4aa1-a881-f5f48a007b1c-2020-09-15T07-27-09Z.tar.gz\n  // highlight-next-line\n  prune: false\n  // highlight-next-line\n  encryptionConfigSecretName: encryptionconfig\n  storageLocation:\n    s3:\n      credentialSecretName: s3-creds\n      credentialSecretNamespace: default\n      bucketName: backup-test\n      folder: ecm1\n      region: us-west-2\n      endpoint: s3.us-west-2.amazonaws.com\n")),(0,n.kt)("admonition",{parentName:"li",title:"\u91cd\u8981\u63d0\u793a\uff1a",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u53ea\u6709\u5728\u521b\u5efa\u5907\u4efd\u65f6\u542f\u7528\u4e86\u52a0\u5bc6\u529f\u80fd\u65f6\uff0c\u624d\u9700\u8981\u8bbe\u7f6e ",(0,n.kt)("inlineCode",{parentName:"p"},"encryptionConfigSecretName")," \u5b57\u6bb5\u3002"),(0,n.kt)("p",{parentName:"admonition"},"\u5982\u679c\u9002\u7528\uff0c\u8bf7\u63d0\u4f9b\u5305\u542b\u52a0\u5bc6\u914d\u7f6e\u6587\u4ef6\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"Secret")," \u5bf9\u8c61\u7684\u540d\u79f0\u3002\u5982\u679c\u4f60\u53ea\u6709\u52a0\u5bc6\u914d\u7f6e\u6587\u4ef6\uff0c\u4f46\u6ca1\u6709\u5728\u6b64\u96c6\u7fa4\u4e2d\u521b\u5efa Secret\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u521b\u5efa Secret\u3002"),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u521b\u5efa",(0,n.kt)("a",{parentName:"p",href:"/zh/reference-guides/backup-restore-configuration/backup-configuration#encryption"},"\u52a0\u5bc6\u914d\u7f6e\u6587\u4ef6"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4e0b\u9762\u7684\u547d\u4ee4\u4f7f\u7528\u4e00\u4e2a\u540d\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"encryption-provider-config.yaml")," \u7684\u6587\u4ef6\uff0c\u4f7f\u7528\u4e86 ",(0,n.kt)("inlineCode",{parentName:"p"},"--from-file")," \u6807\u5fd7\u3002\u5c06 ",(0,n.kt)("inlineCode",{parentName:"p"},"EncryptionConfiguration")," \u4fdd\u5b58\u5230\u540d\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"encryption-provider-config.yaml")," \u7684\u6587\u4ef6\u4e2d\u4e4b\u540e\uff0c\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create secret generic encryptionconfig \\\n  --from-file=./encryption-provider-config.yaml \\\n  -n cattle-resources-system\n")))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5e94\u7528\u6e05\u5355\uff0c\u5e76\u76d1\u63a7 Restore \u7684\u72b6\u6001\uff1a"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5e94\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"Restore")," \u5bf9\u8c61\u8d44\u6e90\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f restore-migration.yaml\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u89c2\u5bdf Restore \u7684\u72b6\u6001\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get restore\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u67e5\u770b\u6062\u590d\u65e5\u5fd7\uff1a"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl logs -n cattle-resources-system --tail 100 -f -l app.kubernetes.io/instance=rancher-backup\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Restore \u8d44\u6e90\u7684\u72b6\u6001\u53d8\u6210 ",(0,n.kt)("inlineCode",{parentName:"p"},"Completed")," \u540e\uff0c\u4f60\u53ef\u4ee5\u7ee7\u7eed\u5b89\u88c5 cert-manager \u548c Rancher\u3002"))))),(0,n.kt)("h3",{id:"3-\u5b89\u88c5-cert-manager"},"3. \u5b89\u88c5 cert-manager"),(0,n.kt)("p",null,"\u6309\u7167\u5728 Kubernetes \u4e0a\u5b89\u88c5 cert-manager\u7684\u6b65\u9aa4",(0,n.kt)("a",{parentName:"p",href:"/zh/pages-for-subheaders/install-upgrade-on-a-kubernetes-cluster#4-%E5%AE%89%E8%A3%85-cert-manager"},"\u5b89\u88c5 cert-manager"),"\u3002"),(0,n.kt)("h3",{id:"4-\u4f7f\u7528-helm-\u5b89\u88c5-rancher"},"4. \u4f7f\u7528 Helm \u5b89\u88c5 Rancher"),(0,n.kt)("p",null,"\u4f7f\u7528\u4e0e\u7b2c\u4e00\u4e2a\u96c6\u7fa4\u4e0a\u4f7f\u7528\u7684\u76f8\u540c\u7248\u672c\u7684 Helm \u6765\u5b89\u88c5 Rancher\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm install rancher rancher-latest/rancher \\\n  --namespace cattle-system \\\n  --set hostname=<same hostname as the server URL from the first Rancher server> \\\n  --version x.y.z\n")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"\u5982\u679c\u539f\u59cb\u7684 Rancher \u73af\u5883\u6b63\u5728\u8fd0\u884c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 kubeconfig \u4e3a\u539f\u59cb\u73af\u5883\u6536\u96c6\u5f53\u524d\u503c\uff1a"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm get values rancher -n cattle-system -o yaml > rancher-values.yaml\n")),(0,n.kt)("p",{parentName:"admonition"},"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher-values.yaml")," \u6587\u4ef6\u6765\u590d\u7528\u8fd9\u4e9b\u503c\u3002\u786e\u4fdd\u5c06 kubeconfig \u5207\u6362\u5230\u65b0\u7684 Rancher \u73af\u5883\u3002"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm install rancher rancher-latest/rancher -n cattle-system -f rancher-values.yaml --version x.y.z\n"))))}m.isMDXComponent=!0}}]);