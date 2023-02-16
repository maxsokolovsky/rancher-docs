"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[10527],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(t),g=o,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||a;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},19447:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const a={title:"\u5904\u7406\u6c61\u70b9\u548c\u5bb9\u5fcd\u5ea6"},i=void 0,l={unversionedId:"integrations-in-rancher/logging/taints-and-tolerations",id:"version-2.6/integrations-in-rancher/logging/taints-and-tolerations",title:"\u5904\u7406\u6c61\u70b9\u548c\u5bb9\u5fcd\u5ea6",description:"\u5728 Kubernetes \u8282\u70b9\u4e0a\u6dfb\u52a0\u6c61\u70b9\u4f1a\u5bfc\u81f4 pod \u6392\u65a5\u5728\u8be5\u8282\u70b9\u4e0a\u8fd0\u884c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/integrations-in-rancher/logging/taints-and-tolerations.md",sourceDirName:"integrations-in-rancher/logging",slug:"/integrations-in-rancher/logging/taints-and-tolerations",permalink:"/zh/v2.6/integrations-in-rancher/logging/taints-and-tolerations",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/integrations-in-rancher/logging/taints-and-tolerations.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022\u5e7411\u670814\u65e5",frontMatter:{title:"\u5904\u7406\u6c61\u70b9\u548c\u5bb9\u5fcd\u5ea6"},sidebar:"tutorialSidebar",previous:{title:"rancher-logging Helm Chart \u9009\u9879",permalink:"/zh/v2.6/integrations-in-rancher/logging/logging-helm-chart-options"},next:{title:"\u81ea\u5b9a\u4e49\u8d44\u6e90\u914d\u7f6e",permalink:"/zh/v2.6/pages-for-subheaders/custom-resource-configuration"}},p={},c=[{value:"Rancher \u65e5\u5fd7\u5806\u6808\u4e2d\u7684\u9ed8\u8ba4\u5b9e\u73b0",id:"rancher-\u65e5\u5fd7\u5806\u6808\u4e2d\u7684\u9ed8\u8ba4\u5b9e\u73b0",level:3},{value:"\u4e3a\u81ea\u5b9a\u4e49\u6c61\u70b9\u6dfb\u52a0 NodeSelector \u8bbe\u7f6e\u548c\u5bb9\u5fcd\u5ea6",id:"\u4e3a\u81ea\u5b9a\u4e49\u6c61\u70b9\u6dfb\u52a0-nodeselector-\u8bbe\u7f6e\u548c\u5bb9\u5fcd\u5ea6",level:3}],s={toc:c};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728 Kubernetes \u8282\u70b9\u4e0a\u6dfb\u52a0\u6c61\u70b9\u4f1a\u5bfc\u81f4 pod \u6392\u65a5\u5728\u8be5\u8282\u70b9\u4e0a\u8fd0\u884c\u3002"),(0,o.kt)("p",null,"\u9664\u975e pod \u5bf9\u8be5\u8282\u70b9\u7684\u6c61\u70b9\u5177\u6709",(0,o.kt)("inlineCode",{parentName:"p"},"\u5bb9\u5fcd\u5ea6"),"\uff08toleration\uff09\uff0c\u5426\u5219 Pod \u5c06\u5728\u96c6\u7fa4\u4e2d\u7684\u5176\u4ed6\u8282\u70b9\u4e0a\u8fd0\u884c\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/"},"\u6c61\u70b9\u548c\u5bb9\u5fcd\u5ea6"),"\u53ef\u4ee5\u4e0e ",(0,o.kt)("inlineCode",{parentName:"p"},"PodSpec")," \u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"nodeSelector")," ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#nodeselector"},"\u5b57\u6bb5"),"\u4e00\u8d77\u4f7f\u7528\uff0c\u4ece\u800c\u5b9e\u73b0",(0,o.kt)("em",{parentName:"p"},"\u76f8\u53cd\u7684"),"\u6c61\u70b9\u6548\u679c\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"nodeSelector")," \u53ef\u4ee5\u4f7f pod \u88ab\u5438\u5f15\u5230\u67d0\u7c7b\u8282\u70b9\u3002"),(0,o.kt)("p",null,"\u4e24\u8005\u90fd\u80fd\u8ba9 pod \u9009\u62e9\u5728\u54ea\u4e2a\u8282\u70b9\u4e0a\u8fd0\u884c\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#rancher-%E6%97%A5%E5%BF%97%E5%A0%86%E6%A0%88%E4%B8%AD%E7%9A%84%E9%BB%98%E8%AE%A4%E5%AE%9E%E7%8E%B0"},"Rancher Logging \u5806\u6808\u4e2d\u7684\u9ed8\u8ba4\u5b9e\u73b0")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#%E4%B8%BA%E8%87%AA%E5%AE%9A%E4%B9%89%E6%B1%A1%E7%82%B9%E6%B7%BB%E5%8A%A0-nodeselector-%E8%AE%BE%E7%BD%AE%E5%92%8C%E5%AE%B9%E5%BF%8D%E5%BA%A6"},"\u4e3a\u81ea\u5b9a\u4e49\u6c61\u70b9\u6dfb\u52a0 NodeSelector \u8bbe\u7f6e\u548c\u5bb9\u5fcd\u5ea6"))),(0,o.kt)("h3",{id:"rancher-\u65e5\u5fd7\u5806\u6808\u4e2d\u7684\u9ed8\u8ba4\u5b9e\u73b0"},"Rancher \u65e5\u5fd7\u5806\u6808\u4e2d\u7684\u9ed8\u8ba4\u5b9e\u73b0"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cRancher \u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle.io/os=linux")," \u6765\u5c06\u6c61\u70b9\u5e94\u7528\u5230\u6240\u6709 Linux \u8282\u70b9\uff0c\u800c\u4e0d\u5f71\u54cd Windows \u8282\u70b9\u3002\n\u65e5\u5fd7\u5806\u6808 pod \u5177\u6709\u9488\u5bf9\u6b64\u6c61\u70b9\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"\u5bb9\u5fcd\u5ea6"),"\uff0c\u56e0\u6b64\u5b83\u4eec\u80fd\u591f\u8fd0\u884c\u5728 Linux \u8282\u70b9\u4e0a\u3002\n\u6b64\u5916\uff0c\u5927\u591a\u6570\u65e5\u5fd7\u5806\u6808 pod \u4ec5\u5728 Linux \u4e0a\u8fd0\u884c\uff0c\u5e76\u6dfb\u52a0\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"nodeSelector")," \u4ee5\u786e\u4fdd\u5b83\u4eec\u5728 Linux \u8282\u70b9\u4e0a\u8fd0\u884c\u3002"),(0,o.kt)("p",null,"\u6b64\u793a\u4f8b Pod YAML \u6587\u4ef6\u663e\u793a\u4e86\u4e0e\u5bb9\u5fcd\u5ea6\u4e00\u8d77\u4f7f\u7528\u7684 nodeSelector\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\n# metadata...\nspec:\n  # containers...\n  tolerations:\n    - key: cattle.io/os\n      operator: "Equal"\n      value: "linux"\n      effect: NoSchedule\n  nodeSelector:\n    kubernetes.io/os: linux\n')),(0,o.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u793a\u4f8b\u4e2d\uff0c\u6211\u4eec\u786e\u4fdd\u4e86\u7684 pod \u4ec5\u5728 Linux \u8282\u70b9\u4e0a\u8fd0\u884c\uff0c\u5e76\u4e14\u4e3a\u6240\u6709 Linux \u8282\u70b9\u4e0a\u7684\u6c61\u70b9\u6dfb\u52a0\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"\u5bb9\u5fcd\u5ea6"),"\u3002"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u5bf9 Rancher \u73b0\u6709\u7684\u6c61\u70b9\u6216\u4f60\u81ea\u5df1\u7684\u81ea\u5b9a\u4e49\u6c61\u70b9\u6267\u884c\u76f8\u540c\u7684\u64cd\u4f5c\u3002"),(0,o.kt)("h3",{id:"\u4e3a\u81ea\u5b9a\u4e49\u6c61\u70b9\u6dfb\u52a0-nodeselector-\u8bbe\u7f6e\u548c\u5bb9\u5fcd\u5ea6"},"\u4e3a\u81ea\u5b9a\u4e49\u6c61\u70b9\u6dfb\u52a0 NodeSelector \u8bbe\u7f6e\u548c\u5bb9\u5fcd\u5ea6"),(0,o.kt)("p",null,"\u5982\u679c\u8981\u6dfb\u52a0\u4f60\u81ea\u5df1\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"nodeSelector")," \u8bbe\u7f6e\uff0c\u6216\u8005\u8981\u4e3a\u5176\u4ed6\u6c61\u70b9\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u5bb9\u5fcd\u5ea6"),"\uff0c\u4f60\u53ef\u4ee5\u5c06\u4ee5\u4e0b\u5185\u5bb9\u4f20\u9012\u7ed9 Chart \u7684\u503c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"tolerations:\n  # insert tolerations...\nnodeSelector:\n  # insert nodeSelector...\n")),(0,o.kt)("p",null,"\u8fd9\u4e9b\u503c\u4f1a\u5c06\u8fd9\u4e24\u4e2a\u8bbe\u7f6e\u6dfb\u52a0\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"fluentd"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"fluentbit"),"\u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"logging-operator")," \u5bb9\u5668\u4e2d\u3002\n\u672c\u8d28\u4e0a\uff0c\u8fd9\u4e9b\u662f\u65e5\u5fd7\u5806\u6808\u4e2d\u6240\u6709 pod \u7684\u5168\u5c40\u8bbe\u7f6e\u3002"),(0,o.kt)("p",null,"\u4f46\u662f\uff0c\u5982\u679c\u4f60\u60f3",(0,o.kt)("em",{parentName:"p"},"\u4ec5"),"\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"fluentbit")," \u5bb9\u5668\u6dfb\u52a0\u5bb9\u5fcd\u5ea6\uff0c\u4f60\u53ef\u4ee5\u5c06\u4ee5\u4e0b\u5185\u5bb9\u6dfb\u52a0\u5230 Chart \u7684\u503c\u4e2d\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"fluentbit_tolerations:\n  # insert tolerations list for fluentbit containers only...\n")))}d.isMDXComponent=!0}}]);