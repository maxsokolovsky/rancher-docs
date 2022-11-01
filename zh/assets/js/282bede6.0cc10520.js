"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[58690],{3905:function(e,n,t){t.d(n,{Zo:function(){return g},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},g=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,g=c(e,["components","mdxType","originalType","parentName"]),s=u(t),m=a,p=s["".concat(l,".").concat(m)]||s[m]||d[m]||o;return t?r.createElement(p,i(i({ref:n},g),{},{components:t})):r.createElement(p,i({ref:n},g))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},62148:function(e,n,t){t.r(n),t.d(n,{assets:function(){return g},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],c={title:"Alertmanager \u914d\u7f6e"},l=void 0,u={unversionedId:"how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager",id:"how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager",title:"Alertmanager \u914d\u7f6e",description:"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u4f60\u4e0d\u9700\u8981\u76f4\u63a5\u7f16\u8f91 Alertmanager \u81ea\u5b9a\u4e49\u8d44\u6e90\u3002\u5bf9\u4e8e\u5927\u591a\u6570\u7528\u4f8b\uff0c\u53ea\u9700\u8981\u7f16\u8f91\u63a5\u6536\u5668\u548c\u8def\u7531\u5373\u53ef\u914d\u7f6e\u901a\u77e5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager.md",sourceDirName:"how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration",slug:"/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager",permalink:"/zh/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/alertmanager.md",tags:[],version:"current",lastUpdatedAt:1666730466,formattedLastUpdatedAt:"2022/10/25",frontMatter:{title:"Alertmanager \u914d\u7f6e"},sidebar:"tutorialSidebar",previous:{title:"\u9ad8\u7ea7\u914d\u7f6e",permalink:"/zh/pages-for-subheaders/advanced-configuration"},next:{title:"Prometheus \u914d\u7f6e",permalink:"/zh/how-to-guides/advanced-user-guides/monitoring-v2-configuration-guides/advanced-configuration/prometheus"}},g={},d=[{value:"\u5173\u4e8e Alertmanager \u81ea\u5b9a\u4e49\u8d44\u6e90",id:"\u5173\u4e8e-alertmanager-\u81ea\u5b9a\u4e49\u8d44\u6e90",level:2},{value:"\u6df1\u5ea6\u5d4c\u5957\u7684\u8def\u7531",id:"\u6df1\u5ea6\u5d4c\u5957\u7684\u8def\u7531",level:3},{value:"\u591a\u4e2a Alertmanager \u526f\u672c",id:"\u591a\u4e2a-alertmanager-\u526f\u672c",level:3}],s={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0c\u4f60\u4e0d\u9700\u8981\u76f4\u63a5\u7f16\u8f91 Alertmanager \u81ea\u5b9a\u4e49\u8d44\u6e90\u3002\u5bf9\u4e8e\u5927\u591a\u6570\u7528\u4f8b\uff0c\u53ea\u9700\u8981\u7f16\u8f91\u63a5\u6536\u5668\u548c\u8def\u7531\u5373\u53ef\u914d\u7f6e\u901a\u77e5\u3002"),(0,o.kt)("p",null,"\u5f53\u8def\u7531\u548c\u63a5\u6536\u5668\u66f4\u65b0\u65f6\uff0cMonitoring \u5e94\u7528\u5c06\u81ea\u52a8\u66f4\u65b0 Alertmanager \u81ea\u5b9a\u4e49\u8d44\u6e90\u6765\u4e0e\u8fd9\u4e9b\u66f4\u6539\u4fdd\u6301\u4e00\u81f4\u3002"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u672c\u8282\u53c2\u8003\u5047\u8bbe\u4f60\u5df2\u7ecf\u719f\u6089 Monitoring \u7ec4\u4ef6\u7684\u534f\u540c\u5de5\u4f5c\u65b9\u5f0f\u3002\u6709\u5173 Alertmanager \u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"/zh/integrations-in-rancher/monitoring-and-alerting/how-monitoring-works#3-alertmanager-%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86"},"\u672c\u8282"),"\u3002"))),(0,o.kt)("h2",{id:"\u5173\u4e8e-alertmanager-\u81ea\u5b9a\u4e49\u8d44\u6e90"},"\u5173\u4e8e Alertmanager \u81ea\u5b9a\u4e49\u8d44\u6e90"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cRancher Monitoring \u5c06\u5355\u4e2a Alertmanager \u90e8\u7f72\u5230\u4f7f\u7528\u9ed8\u8ba4 Alertmanager Config Secret \u7684\u96c6\u7fa4\u4e0a\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u4f7f\u7528 Rancher UI \u8868\u5355\u4e2d\u672a\u516c\u5f00\u7684\u9ad8\u7ea7\u9009\u9879\uff08\u4f8b\u5982\u521b\u5efa\u8d85\u8fc7\u4e24\u5c42\u6df1\u7684\u8def\u7531\u6811\u7ed3\u6784\uff09\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u7f16\u8f91 Alertmanager \u81ea\u5b9a\u4e49\u8d44\u6e90\u3002"),(0,o.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u5728\u96c6\u7fa4\u4e2d\u521b\u5efa\u591a\u4e2a Alertmanager \u6765\u5b9e\u73b0\u547d\u540d\u7a7a\u95f4\u8303\u56f4\u7684\u76d1\u63a7\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4f60\u5e94\u8be5\u4f7f\u7528\u76f8\u540c\u7684\u5e95\u5c42 Alertmanager Config Secret \u6765\u7ba1\u7406 Alertmanager \u81ea\u5b9a\u4e49\u8d44\u6e90\u3002"),(0,o.kt)("h3",{id:"\u6df1\u5ea6\u5d4c\u5957\u7684\u8def\u7531"},"\u6df1\u5ea6\u5d4c\u5957\u7684\u8def\u7531"),(0,o.kt)("p",null,"\u867d\u7136 Rancher UI \u4ec5\u652f\u6301\u4e24\u5c42\u6df1\u5ea6\u7684\u8def\u7531\u6811\uff0c\u4f46\u4f60\u53ef\u4ee5\u901a\u8fc7\u7f16\u8f91 Alertmanager YAML \u6765\u914d\u7f6e\u66f4\u6df1\u7684\u5d4c\u5957\u8def\u7531\u7ed3\u6784\u3002"),(0,o.kt)("h3",{id:"\u591a\u4e2a-alertmanager-\u526f\u672c"},"\u591a\u4e2a Alertmanager \u526f\u672c"),(0,o.kt)("p",null,"\u4f5c\u4e3a Chart \u90e8\u7f72\u9009\u9879\u7684\u4e00\u90e8\u5206\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u589e\u52a0\u90e8\u7f72\u5230\u96c6\u7fa4\u4e0a\u7684 Alertmanager \u526f\u672c\u7684\u6570\u91cf\u3002\u8fd9\u4e9b\u526f\u672c\u4f7f\u7528\u76f8\u540c\u7684\u5e95\u5c42 Alertmanager Config Secret \u8fdb\u884c\u7ba1\u7406\u3002"),(0,o.kt)("p",null,"\u6b64 Secret \u53ef\u4ee5\u6309\u7167\u4f60\u7684\u9700\u6c42\u968f\u65f6\u66f4\u65b0\u6216\u4fee\u6539\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u65b0\u7684\u901a\u77e5\u7a0b\u5e8f\u6216\u63a5\u6536\u5668"),(0,o.kt)("li",{parentName:"ul"},"\u66f4\u6539\u5e94\u8be5\u53d1\u9001\u7ed9\u6307\u5b9a\u901a\u77e5\u7a0b\u5e8f\u6216\u63a5\u6536\u5668\u7684\u544a\u8b66"),(0,o.kt)("li",{parentName:"ul"},"\u66f4\u6539\u53d1\u51fa\u7684\u544a\u8b66\u7ec4")),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u63d0\u4f9b\u73b0\u6709\u7684 Alertmanager Config Secret\uff08\u5373 ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-monitoring-system")," \u547d\u540d\u7a7a\u95f4\u4e2d\u7684\u4efb\u4f55 Secret\uff09\uff0c\u6216\u5141\u8bb8 Rancher Monitoring \u5c06\u9ed8\u8ba4\u7684 Alertmanager Config Secret \u90e8\u7f72\u5230\u4f60\u7684\u96c6\u7fa4\u4e0a\u3002"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5728\u5347\u7ea7\u6216\u5378\u8f7d ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher-monitoring")," Chart \u65f6\uff0cRancher \u521b\u5efa\u7684 Alertmanager Config Secret \u4e0d\u4f1a\u88ab\u4fee\u6539\u6216\u5220\u9664\u3002\u8fd9\u4e2a\u9650\u5236\u53ef\u4ee5\u9632\u6b62\u7528\u6237\u5728 Chart \u4e0a\u6267\u884c\u64cd\u4f5c\u65f6\u4e22\u5931\u6216\u8986\u76d6\u4ed6\u4eec\u7684\u544a\u8b66\u914d\u7f6e\u3002"),(0,o.kt)("p",null,"\u6709\u5173\u53ef\u4ee5\u5728 Alertmanager Config Secret \u4e2d\u6307\u5b9a\u7684\u5b57\u6bb5\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u67e5\u770b ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/latest/alertmanager/"},"Prometheus Alertmanager \u6587\u6863"),"\u3002"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/alerting/latest/configuration/#configuration-file"},"\u6b64\u5904"),"\u627e\u5230 Alertmanager \u914d\u7f6e\u6587\u4ef6\u7684\u5b8c\u6574\u89c4\u8303\u53ca\u5176\u5185\u5bb9\u3002"))}m.isMDXComponent=!0}}]);