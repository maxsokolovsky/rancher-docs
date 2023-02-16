"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[99254],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),c=a,d=m["".concat(s,".").concat(c)]||m[c]||g[c]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},73885:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"\u8fc1\u79fb\u5230 Rancher 2.5+ Monitoring"},i=void 0,l={unversionedId:"how-to-guides/advanced-user-guides/monitoring-alerting-guides/migrate-to-rancher-v2.5+-monitoring",id:"version-2.6/how-to-guides/advanced-user-guides/monitoring-alerting-guides/migrate-to-rancher-v2.5+-monitoring",title:"\u8fc1\u79fb\u5230 Rancher 2.5+ Monitoring",description:"\u5982\u679c\u4f60\u5728 Rancher 2.5 \u4e4b\u524d\u542f\u7528\u4e86 Monitoring\u3001Alerting \u6216 Notifiers\uff0c\u5219\u65e0\u6cd5\u81ea\u52a8\u5347\u7ea7\u5230\u65b0\u7684\u76d1\u63a7/\u544a\u8b66\u89e3\u51b3\u65b9\u6848\u3002\u5728 Cluster Explorer \u4e2d\u90e8\u7f72\u65b0\u7684\u76d1\u63a7\u89e3\u51b3\u65b9\u6848\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u7981\u7528\u5e76\u5220\u9664\u6574\u4e2a\u96c6\u7fa4\u6240\u6709\u9879\u76ee\u4e2d\u7684\u6240\u6709\u81ea\u5b9a\u4e49\u544a\u8b66\u3001\u901a\u77e5\u5668\u548c\u76d1\u63a7\u5b89\u88c5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/how-to-guides/advanced-user-guides/monitoring-alerting-guides/migrate-to-rancher-v2.5+-monitoring.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-alerting-guides",slug:"/how-to-guides/advanced-user-guides/monitoring-alerting-guides/migrate-to-rancher-v2.5+-monitoring",permalink:"/zh/v2.6/how-to-guides/advanced-user-guides/monitoring-alerting-guides/migrate-to-rancher-v2.5+-monitoring",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/advanced-user-guides/monitoring-alerting-guides/migrate-to-rancher-v2.5+-monitoring.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022\u5e7411\u670814\u65e5",frontMatter:{title:"\u8fc1\u79fb\u5230 Rancher 2.5+ Monitoring"},sidebar:"tutorialSidebar",previous:{title:"\u8c03\u8bd5\u9ad8\u5185\u5b58\u7528\u91cf",permalink:"/zh/v2.6/how-to-guides/advanced-user-guides/monitoring-alerting-guides/debug-high-memory-usage"},next:{title:"Prometheus Federator \u6307\u5357",permalink:"/zh/v2.6/pages-for-subheaders/prometheus-federator-guides"}},s={},u=[{value:"Rancher 2.5 \u4e4b\u524d\u7684 Monitoring",id:"rancher-25-\u4e4b\u524d\u7684-monitoring",level:2},{value:"\u901a\u8fc7 Rancher 2.5 \u4e2d\u7684 Cluster Explorer \u8fdb\u884c\u76d1\u63a7\u548c\u544a\u8b66",id:"\u901a\u8fc7-rancher-25-\u4e2d\u7684-cluster-explorer-\u8fdb\u884c\u76d1\u63a7\u548c\u544a\u8b66",level:2},{value:"RBAC \u7684\u66f4\u6539",id:"rbac-\u7684\u66f4\u6539",level:2},{value:"\u4ece Monitoring V1 \u8fc1\u79fb\u5230 Monitoring V2",id:"\u4ece-monitoring-v1-\u8fc1\u79fb\u5230-monitoring-v2",level:2},{value:"RKE \u6a21\u677f\u96c6\u7fa4",id:"rke-\u6a21\u677f\u96c6\u7fa4",level:4},{value:"\u8fc1\u79fb Grafana \u4eea\u8868\u677f",id:"\u8fc1\u79fb-grafana-\u4eea\u8868\u677f",level:4},{value:"\u8fc1\u79fb\u544a\u8b66",id:"\u8fc1\u79fb\u544a\u8b66",level:3},{value:"\u8fc1\u79fb Notifiers",id:"\u8fc1\u79fb-notifiers",level:3},{value:"\u4e3a RKE \u6a21\u677f\u7528\u6237\u8fc1\u79fb",id:"\u4e3a-rke-\u6a21\u677f\u7528\u6237\u8fc1\u79fb",level:3}],p={toc:u};function g(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u5728 Rancher 2.5 \u4e4b\u524d\u542f\u7528\u4e86 Monitoring\u3001Alerting \u6216 Notifiers\uff0c\u5219\u65e0\u6cd5\u81ea\u52a8\u5347\u7ea7\u5230\u65b0\u7684\u76d1\u63a7/\u544a\u8b66\u89e3\u51b3\u65b9\u6848\u3002\u5728 Cluster Explorer \u4e2d\u90e8\u7f72\u65b0\u7684\u76d1\u63a7\u89e3\u51b3\u65b9\u6848\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u7981\u7528\u5e76\u5220\u9664\u6574\u4e2a\u96c6\u7fa4\u6240\u6709\u9879\u76ee\u4e2d\u7684\u6240\u6709\u81ea\u5b9a\u4e49\u544a\u8b66\u3001\u901a\u77e5\u5668\u548c\u76d1\u63a7\u5b89\u88c5\u3002"),(0,a.kt)("h2",{id:"rancher-25-\u4e4b\u524d\u7684-monitoring"},"Rancher 2.5 \u4e4b\u524d\u7684 Monitoring"),(0,a.kt)("p",null,"\u4ece 2.2.0 \u5f00\u59cb\uff0c\u65e7\u7248 Rancher UI \u4e2d\u7684\u5168\u5c40\u89c6\u56fe\u5141\u8bb8\u7528\u6237\u5728\u96c6\u7fa4\u5185\u72ec\u7acb\u542f\u7528 Monitoring & Alerting V1\uff08\u5747\u7531 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator"},"Prometheus Operator")," \u63d0\u4f9b\u652f\u6301\uff09\u3002"),(0,a.kt)("p",null,"\u542f\u7528 Monitoring \u540e\uff0cMonitoring V1 \u4f1a\u5c06 ",(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus")," \u548c ",(0,a.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/getting-started/what-is-grafana/"},"Grafana")," \u90e8\u7f72\u5230\u96c6\u7fa4\u4e0a\uff0c\u4ece\u800c\u76d1\u63a7\u96c6\u7fa4\u8282\u70b9\u3001Kubernetes \u7ec4\u4ef6\u548c\u8f6f\u4ef6\u90e8\u7f72\u7684\u8fdb\u7a0b\u72b6\u6001\uff0c\u5e76\u521b\u5efa\u81ea\u5b9a\u4e49\u4eea\u8868\u677f\u6765\u7b80\u5316\u6307\u6807\u7684\u53ef\u89c6\u5316\u3002"),(0,a.kt)("p",null,"Monitoring V1 \u53ef\u4ee5\u5728\u96c6\u7fa4\u7ea7\u522b\u548c\u9879\u76ee\u7ea7\u522b\u8fdb\u884c\u914d\u7f6e\uff0c\u5e76\u4e14\u4f1a\u81ea\u52a8\u6293\u53d6 Rancher \u96c6\u7fa4\u4e0a\u90e8\u7f72\u4e3a\u5e94\u7528\u7684\u67d0\u4e9b\u5de5\u4f5c\u8d1f\u8f7d\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u542f\u7528\u4e86 Alerts \u6216 Notifiers\uff0cAlerting V1 \u5c06 ",(0,a.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/latest/alertmanager/"},"Prometheus Alertmanager")," \u548c\u4e00\u7ec4 Rancher \u63a7\u5236\u5668\u90e8\u7f72\u5230\u96c6\u7fa4\u4e0a\uff0c\u5141\u8bb8\u7528\u6237\u5b9a\u4e49\u544a\u8b66\u5e76\u914d\u7f6e\u7535\u5b50\u90ae\u4ef6\u3001Slack\u3001PagerDuty \u7b49\u544a\u8b66\u901a\u77e5\u3002\u7528\u6237\u53ef\u4ee5\u6839\u636e\u9700\u8981\u76d1\u63a7\u7684\u5185\u5bb9\uff08\u4f8b\u5982\u7cfb\u7edf\u670d\u52a1\u3001\u8d44\u6e90\u3001CIS \u626b\u63cf\u7b49\uff09\u521b\u5efa\u4e0d\u540c\u7c7b\u578b\u7684\u544a\u8b66\u3002\u4f46\u662f\uff0c\u53ea\u6709\u5728\u542f\u7528 Monitoring V1 \u65f6\u624d\u80fd\u521b\u5efa\u57fa\u4e8e PromQL \u8868\u8fbe\u5f0f\u7684\u544a\u8b66\u3002"),(0,a.kt)("h2",{id:"\u901a\u8fc7-rancher-25-\u4e2d\u7684-cluster-explorer-\u8fdb\u884c\u76d1\u63a7\u548c\u544a\u8b66"},"\u901a\u8fc7 Rancher 2.5 \u4e2d\u7684 Cluster Explorer \u8fdb\u884c\u76d1\u63a7\u548c\u544a\u8b66"),(0,a.kt)("p",null,"\u4ece 2.5.0 \u5f00\u59cb\uff0cRancher \u7684 Cluster Explorer \u5141\u8bb8\u7528\u6237\u5728\u96c6\u7fa4\u5185\u540c\u65f6\u542f\u7528 Monitoring & Alerting V2\uff08\u5747\u7531 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/prometheus-operator/prometheus-operator"},"Prometheus Operator")," \u63d0\u4f9b\u652f\u6301\uff09\u3002"),(0,a.kt)("p",null,"\u4e0e Monitoring & Alerting V1 \u4e0d\u540c\uff0c\u73b0\u5728\u8fd9\u4e24\u4e2a\u529f\u80fd\u90fd\u6253\u5305\u5728",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/charts/blob/main/charts/rancher-monitoring"},"\u6b64\u5904"),"\u7684\u5355\u4e2a Helm Chart \u4e2d\u3002\u6b64 Chart \u548c\u53ef\u914d\u7f6e\u5b57\u6bb5\u4e0e Prometheus \u793e\u533a Helm Chart ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/prometheus-community/helm-charts/tree/main/charts/kube-prometheus-stack"},"kube-prometheus-stack")," \u975e\u5e38\u5339\u914d\uff0c\u4e0e\u4e0a\u6e38 Chart \u7684\u4efb\u4f55\u504f\u5dee\u90fd\u53ef\u4ee5\u5728 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/charts/blob/main/charts/rancher-monitoring/CHANGELOG.md"},"CHANGELOG.md")," \u4e2d\u627e\u5230\u3002"),(0,a.kt)("p",null,"Monitoring V2 \u53ea\u80fd\u5728\u96c6\u7fa4\u7ea7\u522b\u8fdb\u884c\u914d\u7f6e\u3002\u4e0d\u518d\u652f\u6301\u9879\u76ee\u7ea7\u522b\u7684\u76d1\u63a7\u548c\u544a\u8b66\u3002"),(0,a.kt)("p",null,"\u6709\u5173\u5982\u4f55\u914d\u7f6e Monitoring & Alerting V2 \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/monitoring-v2-configuration-guides"},"\u6b64\u9875\u9762"),"\u3002"),(0,a.kt)("h2",{id:"rbac-\u7684\u66f4\u6539"},"RBAC \u7684\u66f4\u6539"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u9879\u76ee\u6240\u6709\u8005\u548c\u6210\u5458\u4e0d\u518d\u53ef\u4ee5\u8bbf\u95ee Grafana \u6216 Prometheus\u3002\u5982\u679c\u53ea\u8bfb\u7528\u6237\u6709\u6743\u8bbf\u95ee Grafana\uff0c\u4ed6\u4eec\u5c06\u80fd\u591f\u67e5\u770b\u4efb\u4f55\u547d\u540d\u7a7a\u95f4\u7684\u6570\u636e\u3002\u5bf9\u4e8e Kiali\uff0c\u4efb\u4f55\u7528\u6237\u90fd\u53ef\u4ee5\u5728\u4efb\u4f55\u547d\u540d\u7a7a\u95f4\u4e2d\u7f16\u8f91\u4e0d\u5c5e\u4e8e\u8be5\u7528\u6237\u7684\u4e1c\u897f\u3002"),(0,a.kt)("p",null,"\u6709\u5173 ",(0,a.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," \u4e2d RBAC \u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.6/integrations-in-rancher/monitoring-and-alerting/rbac-for-monitoring"},"\u6b64\u9875\u9762"),"\u3002"),(0,a.kt)("h2",{id:"\u4ece-monitoring-v1-\u8fc1\u79fb\u5230-monitoring-v2"},"\u4ece Monitoring V1 \u8fc1\u79fb\u5230 Monitoring V2"),(0,a.kt)("p",null,"\u867d\u7136\u6ca1\u6709\u53ef\u7528\u7684\u81ea\u52a8\u8fc1\u79fb\u65b9\u6848\uff0c\u4f46\u4f60\u53ef\u4ee5\u624b\u52a8\u5c06\u5728 Monitoring V1 \u4e2d\u521b\u5efa\u7684\u81ea\u5b9a\u4e49 Grafana \u4eea\u8868\u677f\u548c\u544a\u8b66\u8fc1\u79fb\u5230 Monitoring V2\u3002"),(0,a.kt)("p",null,"\u5728\u5b89\u88c5 Monitoring V2 \u4e4b\u524d\uff0c\u4f60\u9700\u8981\u5b8c\u5168\u5378\u8f7d Monitoring V1\u3002\u8981\u5378\u8f7d Monitoring V1\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5220\u9664\u6240\u6709\u96c6\u7fa4\u548c\u9879\u76ee\u7279\u5b9a\u7684\u544a\u8b66\u548c\u544a\u8b66\u7ec4\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5220\u9664\u6240\u6709\u901a\u77e5\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7981\u7528",(0,a.kt)("strong",{parentName:"li"},"\u96c6\u7fa4 > \u9879\u76ee > \u5de5\u5177 > Monitoring")," \u4e0b\u7684\u6240\u6709\u9879\u76ee\u76d1\u63a7\u5b89\u88c5\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u6240\u6709\u9879\u76ee\u4e2d\u7684\u6240\u6709\u9879\u76ee\u76d1\u63a7\u5e94\u7528\u90fd\u5df2\u5220\u9664\uff0c\u5e76\u4e14\u5728\u51e0\u5206\u949f\u540e\u4e0d\u4f1a\u91cd\u65b0\u521b\u5efa\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5728",(0,a.kt)("strong",{parentName:"li"},"\u96c6\u7fa4 > \u5de5\u5177 > Monitoring")," \u4e0b\u7981\u7528\u96c6\u7fa4\u76d1\u63a7\u5b89\u88c5\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u786e\u4fdd System \u9879\u76ee\u4e2d\u7684 cluster-monitoring \u5e94\u7528\u548c monitoring-operator \u5e94\u7528\u5df2\u88ab\u5220\u9664\uff0c\u5e76\u4e14\u5728\u51e0\u5206\u949f\u540e\u4e0d\u4f1a\u91cd\u65b0\u521b\u5efa\u3002")),(0,a.kt)("h4",{id:"rke-\u6a21\u677f\u96c6\u7fa4"},"RKE \u6a21\u677f\u96c6\u7fa4"),(0,a.kt)("p",null,"\u8981\u907f\u514d\u91cd\u65b0\u542f\u7528 Monitoring V1\uff0c\u8bf7\u901a\u8fc7\u4fee\u6539 RKE \u6a21\u677f yaml \u6765\u7981\u7528\u76d1\u63a7\u4ee5\u53ca\u540e\u7eed\u7684 RKE \u6a21\u677f\u4fee\u8ba2\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"enable_cluster_alerting: false\nenable_cluster_monitoring: false\n")),(0,a.kt)("h4",{id:"\u8fc1\u79fb-grafana-\u4eea\u8868\u677f"},"\u8fc1\u79fb Grafana \u4eea\u8868\u677f"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u5c06\u5728 Monitoring V1 \u4e2d\u6dfb\u52a0\u5230 Grafana \u7684\u4eea\u8868\u677f\u8fc1\u79fb\u5230 Monitoring V2\u3002\u5728 Monitoring V1 \u4e2d\uff0c\u4f60\u53ef\u4ee5\u8fd9\u6837\u5bfc\u51fa\u73b0\u6709\u4eea\u8868\u677f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u767b\u5f55 Grafana"),(0,a.kt)("li",{parentName:"ul"},"\u5bfc\u822a\u5230\u8981\u5bfc\u51fa\u7684\u4eea\u8868\u677f"),(0,a.kt)("li",{parentName:"ul"},"\u8f6c\u5230\u4eea\u8868\u677f\u8bbe\u7f6e"),(0,a.kt)("li",{parentName:"ul"},"\u590d\u5236 ",(0,a.kt)("a",{parentName:"li",href:"https://grafana.com/docs/grafana/latest/dashboards/json-model/"},"JSON \u6a21\u578b"))),(0,a.kt)("p",null,"\u5728 JSON \u6a21\u578b\u4e2d\uff0c\u5c06\u6240\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"datasource")," \u5b57\u6bb5\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},"RANCHER_MONITORING")," \u66f4\u6539\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"Prometheus"),"\u3002\u4f60\u53ef\u4ee5\u5c06\u6240\u6709\u51fa\u73b0\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},'"datasource": "RANCHER_MONITORING"')," \u66ff\u6362\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},'"datasource": "Prometheus"'),"\u3002"),(0,a.kt)("p",null,"\u5982\u679c Grafana \u7531\u6301\u4e45\u5377\u652f\u6301\uff0c\u4f60\u53ef\u4ee5\u5c06\u6b64 JSON \u6a21\u578b",(0,a.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/dashboards/export-import/"},"\u5bfc\u5165"),"\u5230 Monitoring V2 Grafana UI \u4e2d\u3002\n\u5efa\u8bae\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"cattle-dashboards")," \u547d\u540d\u7a7a\u95f4\u5177\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},'grafana_dashboard: "1"')," \u6807\u7b7e\u7684 ConfigMap\uff0c\u6765\u4e3a Grafana \u63d0\u4f9b\u4eea\u8868\u677f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: custom-dashboard\n  namespace: cattle-dashboards\n  labels:\n    grafana_dashboard: "1"\ndata:\n  custom-dashboard.json: |\n    {\n      ...\n    }\n')),(0,a.kt)("p",null,"\u521b\u5efa\u6b64 ConfigMap \u540e\uff0c\u4eea\u8868\u677f\u5c06\u81ea\u52a8\u6dfb\u52a0\u5230 Grafana\u3002"),(0,a.kt)("h3",{id:"\u8fc1\u79fb\u544a\u8b66"},"\u8fc1\u79fb\u544a\u8b66"),(0,a.kt)("p",null,"\u53ea\u6709\u57fa\u4e8e\u8868\u8fbe\u5f0f\u7684\u544a\u8b66\u80fd\u76f4\u63a5\u8fc1\u79fb\u5230 Monitoring V2\u3002\u5e78\u8fd0\u7684\u662f\uff0c\u57fa\u4e8e\u4e8b\u4ef6\u7684\u544a\u8b66\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u5bf9\u7cfb\u7edf\u7ec4\u4ef6\u3001\u8282\u70b9\u6216\u5de5\u4f5c\u8d1f\u8f7d\u4e8b\u4ef6\u7684\u544a\u8b66\uff0c\u800c Monitoring V2 \u4e2d\u7684\u544a\u8b66\u5df2\u8986\u76d6\u8fd9\u4e9b\u544a\u8b66\u3002\u6240\u4ee5\u6ca1\u6709\u5fc5\u8981\u8fc1\u79fb\u5b83\u4eec\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u8981\u8fc1\u79fb\u4ee5\u4e0b\u8868\u8fbe\u5f0f\u544a\u8b66\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(24943).Z,width:"1124",height:"604"})),(0,a.kt)("p",null,"\u4f60\u5fc5\u987b\u5728\u4efb\u610f\u547d\u540d\u7a7a\u95f4\u4e2d\u521b\u5efa\u5982\u4e0b PrometheusRule \u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: monitoring.coreos.com/v1\nkind: PrometheusRule\nmetadata:\n  name: custom-rules\n  namespace: default\nspec:\n  groups:\n    - name: custom.rules\n      rules:\n        - alert: Custom Expression Alert\n          expr: prometheus_query > 5\n          for: 5m\n          labels:\n            severity: critical\n          annotations:\n            summary: "The result of prometheus_query has been larger than 5 for 5m. Current value {{ $value }}"\n')),(0,a.kt)("p",null,"\u6216\u901a\u8fc7 Cluster Explorer \u6dfb\u52a0 Prometheus Rule\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(75002).Z,width:"1496",height:"1320"})),(0,a.kt)("p",null,"\u6709\u5173\u5982\u4f55\u5728 Monitoring V2 \u4e2d\u914d\u7f6e PrometheusRules \u7684\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"/zh/v2.6/pages-for-subheaders/monitoring-v2-configuration-guides"},"Monitoring \u914d\u7f6e"),"\u3002"),(0,a.kt)("h3",{id:"\u8fc1\u79fb-notifiers"},"\u8fc1\u79fb Notifiers"),(0,a.kt)("p",null,"Monitoring V1 \u4e2d\u6ca1\u6709\u76f4\u63a5\u5bf9\u5e94 Notifiers \u7684\u5de5\u4f5c\u65b9\u5f0f\u3002\u76f8\u53cd\uff0c\u4f60\u5fc5\u987b\u4f7f\u7528 Monitoring V2 \u4e2d\u7684\u8def\u7531\u548c\u63a5\u6536\u5668\u590d\u5236\u6240\u9700\u7684\u8bbe\u7f6e\u3002"),(0,a.kt)("h3",{id:"\u4e3a-rke-\u6a21\u677f\u7528\u6237\u8fc1\u79fb"},"\u4e3a RKE \u6a21\u677f\u7528\u6237\u8fc1\u79fb"),(0,a.kt)("p",null,"\u5982\u679c\u96c6\u7fa4\u662f\u4f7f\u7528 RKE \u6a21\u677f\u7ba1\u7406\u7684\uff0c\u4f60\u9700\u8981\u5728\u540e\u7eed\u7684 RKE \u6a21\u677f\u4fee\u8ba2\u7248\u4e2d\u7981\u7528 Monitoring\uff0c\u4ee5\u9632\u6b62\u91cd\u65b0\u542f\u7528\u65e7\u7248 Monitoring\u3002"))}g.isMDXComponent=!0},24943:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/alert_2.4_to_2.5_source-2653609a04a39ed7d490eafc8b2e6f30.png"},75002:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/alert_2.4_to_2.5_target-14e433f28900c9b0269d5121e2801750.png"}}]);