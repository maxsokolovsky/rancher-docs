"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[76055],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(r),g=i,m=p["".concat(d,".").concat(g)]||p[g]||u[g]||a;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},20772:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const a={title:"Node Drivers"},o=void 0,s={unversionedId:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers",id:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers",title:"Node Drivers",description:"Node drivers are used to provision hosts, which Rancher uses to launch and manage Kubernetes clusters. A node driver is the same as a Docker Machine driver. The availability of which node driver to display when creating node templates is defined based on the node driver's status. Only active node drivers will be displayed as an option for creating node templates. By default, Rancher is packaged with many existing Docker Machine drivers, but you can also create custom node drivers to add to Rancher.",source:"@site/docs/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers.md",sourceDirName:"how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers",slug:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers",permalink:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-node-drivers.md",tags:[],version:"current",lastUpdatedAt:1666730461,formattedLastUpdatedAt:"Oct 25, 2022",frontMatter:{title:"Node Drivers"},sidebar:"tutorialSidebar",previous:{title:"Cluster Drivers",permalink:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/about-provisioning-drivers/manage-cluster-drivers"},next:{title:"RKE Templates",permalink:"/pages-for-subheaders/about-rke1-templates"}},d={},l=[{value:"Managing Node Drivers",id:"managing-node-drivers",level:4},{value:"Activating/Deactivating Node Drivers",id:"activatingdeactivating-node-drivers",level:2},{value:"Adding Custom Node Drivers",id:"adding-custom-node-drivers",level:2},{value:"Developing your own node driver",id:"developing-your-own-node-driver",level:3}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Node drivers are used to provision hosts, which Rancher uses to launch and manage Kubernetes clusters. A node driver is the same as a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/machine/drivers/"},"Docker Machine driver"),". The availability of which node driver to display when creating node templates is defined based on the node driver's status. Only ",(0,i.kt)("inlineCode",{parentName:"p"},"active")," node drivers will be displayed as an option for creating node templates. By default, Rancher is packaged with many existing Docker Machine drivers, but you can also create custom node drivers to add to Rancher."),(0,i.kt)("p",null,"If there are specific node drivers that you don't want to show to your users, you would need to de-activate these node drivers."),(0,i.kt)("h4",{id:"managing-node-drivers"},"Managing Node Drivers"),(0,i.kt)("admonition",{title:"Prerequisites:",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"To create, edit, or delete drivers, you need ",(0,i.kt)("em",{parentName:"p"},"one")," of the following permissions:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"Administrator Global Permissions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions#custom-global-permissions"},"Custom Global Permissions")," with the ",(0,i.kt)("a",{parentName:"li",href:"/how-to-guides/new-user-guides/authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/global-permissions"},"Manage Node Drivers")," role assigned."))),(0,i.kt)("h2",{id:"activatingdeactivating-node-drivers"},"Activating/Deactivating Node Drivers"),(0,i.kt)("p",null,"By default, Rancher only activates drivers for the most popular cloud providers, Amazon EC2, Azure, DigitalOcean and vSphere. If you want to show or hide any node driver, you can change its status."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the upper left corner, click ",(0,i.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the left navigation menu, click ",(0,i.kt)("strong",{parentName:"p"},"Drivers"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the ",(0,i.kt)("strong",{parentName:"p"},"Node Drivers")," tab, select the driver that you wish to activate or deactivate and click ",(0,i.kt)("strong",{parentName:"p"},"\u22ee > Activate")," or ",(0,i.kt)("strong",{parentName:"p"},"\u22ee > Deactivate"),"."))),(0,i.kt)("h2",{id:"adding-custom-node-drivers"},"Adding Custom Node Drivers"),(0,i.kt)("p",null,"If you want to use a node driver that Rancher doesn't support out-of-the-box, you can add that provider's driver in order to start using them to create node templates and eventually node pools for your Kubernetes cluster."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the upper left corner, click ",(0,i.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,i.kt)("li",{parentName:"ol"},"In the left navigation menu, click ",(0,i.kt)("strong",{parentName:"li"},"Drivers"),"."),(0,i.kt)("li",{parentName:"ol"},"On ",(0,i.kt)("strong",{parentName:"li"},"Node Drivers")," tab, click ",(0,i.kt)("strong",{parentName:"li"},"Add Node Driver"),"."),(0,i.kt)("li",{parentName:"ol"},"Complete the ",(0,i.kt)("strong",{parentName:"li"},"Add Node Driver")," form. Then click ",(0,i.kt)("strong",{parentName:"li"},"Create"),".")),(0,i.kt)("h3",{id:"developing-your-own-node-driver"},"Developing your own node driver"),(0,i.kt)("p",null,"Node drivers are implemented with ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/machine/"},"Docker Machine"),"."))}u.isMDXComponent=!0}}]);