"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[25438],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(a),g=r,h=c["".concat(l,".").concat(g)]||c[g]||p[g]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},78866:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={title:"Upgrading and Rolling Back Kubernetes"},i=void 0,s={unversionedId:"getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes",id:"version-2.0-2.4/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes",title:"Upgrading and Rolling Back Kubernetes",description:"Following an upgrade to the latest version of Rancher, downstream Kubernetes clusters can be upgraded to use the latest supported version of Kubernetes.",source:"@site/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes.md",sourceDirName:"getting-started/installation-and-upgrade",slug:"/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes",permalink:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1670452794,formattedLastUpdatedAt:"2022\u5e7412\u67087\u65e5",frontMatter:{title:"Upgrading and Rolling Back Kubernetes"},sidebar:"tutorialSidebar",previous:{title:"Setting up Local System Charts for Air Gapped Installations",permalink:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/resources/local-system-charts"},next:{title:"Upgrading Kubernetes without Upgrading Rancher",permalink:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/upgrade-kubernetes-without-upgrading-rancher"}},l={},u=[{value:"New Features",id:"new-features",level:2},{value:"Tested Kubernetes Versions",id:"tested-kubernetes-versions",level:2},{value:"How Upgrades Work",id:"how-upgrades-work",level:2},{value:"Recommended Best Practice for Upgrades",id:"recommended-best-practice-for-upgrades",level:2},{value:"Upgrading the Kubernetes Version",id:"upgrading-the-kubernetes-version",level:2},{value:"Rolling Back",id:"rolling-back",level:2},{value:"Configuring the Upgrade Strategy",id:"configuring-the-upgrade-strategy",level:2},{value:"Configuring the Maximum Unavailable Worker Nodes in the Rancher UI",id:"configuring-the-maximum-unavailable-worker-nodes-in-the-rancher-ui",level:3},{value:"Enabling Draining Nodes During Upgrades from the Rancher UI",id:"enabling-draining-nodes-during-upgrades-from-the-rancher-ui",level:3},{value:"Maintaining Availability for Applications During Upgrades",id:"maintaining-availability-for-applications-during-upgrades",level:3},{value:"Configuring the Upgrade Strategy in the cluster.yml",id:"configuring-the-upgrade-strategy-in-the-clusteryml",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},p=d("Tabs"),c=d("TabItem"),g={toc:u};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Following an upgrade to the latest version of Rancher, downstream Kubernetes clusters can be upgraded to use the latest supported version of Kubernetes."),(0,r.kt)("p",null,"Rancher calls RKE (Rancher Kubernetes Engine) as a library when provisioning and editing RKE clusters. For more information on configuring the upgrade strategy for RKE clusters, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/"},"RKE documentation"),"."),(0,r.kt)("h2",{id:"new-features"},"New Features"),(0,r.kt)("p",null,"As of Rancher v2.3.0, the Kubernetes metadata feature was added, which allows Rancher to ship Kubernetes patch versions without upgrading Rancher. For details, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/upgrade-kubernetes-without-upgrading-rancher"},"section on Kubernetes metadata.")),(0,r.kt)("p",null,"As of Rancher v2.4.0,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ability to import K3s Kubernetes clusters into Rancher was added, along with the ability to upgrade Kubernetes when editing those clusters. For details, refer to the ",(0,r.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/new-user-guides/kubernetes-clusters-in-rancher-setup/import-existing-clusters"},"section on imported clusters.")),(0,r.kt)("li",{parentName:"ul"},"New advanced options are exposed in the Rancher UI for configuring the upgrade strategy of an RKE cluster: ",(0,r.kt)("strong",{parentName:"li"},"Maximum Worker Nodes Unavailable")," and ",(0,r.kt)("strong",{parentName:"li"},"Drain nodes.")," These options leverage the new cluster upgrade process of RKE v1.1.0, in which worker nodes are upgraded in batches, so that applications can remain available during cluster upgrades, under ",(0,r.kt)("a",{parentName:"li",href:"#maintaining-availability-for-applications-during-upgrades"},"certain conditions."))),(0,r.kt)("h2",{id:"tested-kubernetes-versions"},"Tested Kubernetes Versions"),(0,r.kt)("p",null,"Before a new version of Rancher is released, it's tested with the latest minor versions of Kubernetes to ensure compatibility. For details on which versions of Kubernetes were tested on each Rancher version, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/support-maintenance-terms/all-supported-versions/rancher-v2.4.17/"},"support maintenance terms.")),(0,r.kt)("h2",{id:"how-upgrades-work"},"How Upgrades Work"),(0,r.kt)("p",null,"RKE v1.1.0 changed the way that clusters are upgraded."),(0,r.kt)("p",null,"In this section of the ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/upgrades/how-upgrades-work"},"RKE documentation,")," you'll learn what happens when you edit or upgrade your RKE Kubernetes cluster."),(0,r.kt)("h2",{id:"recommended-best-practice-for-upgrades"},"Recommended Best Practice for Upgrades"),(0,r.kt)(p,{mdxType:"Tabs"},(0,r.kt)(c,{value:"Rancher v2.4+",mdxType:"TabItem"},(0,r.kt)("p",null,"When upgrading the Kubernetes version of a cluster, we recommend that you:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Take a snapshot."),(0,r.kt)("li",{parentName:"ol"},"Initiate a Kubernetes upgrade."),(0,r.kt)("li",{parentName:"ol"},"If the upgrade fails, revert the cluster to the pre-upgrade Kubernetes version. This is achieved by selecting the ",(0,r.kt)("strong",{parentName:"li"},"Restore etcd and Kubernetes version")," option. This will return your cluster to the pre-upgrade kubernetes version before restoring the etcd snapshot.")),(0,r.kt)("p",null,"The restore operation will work on a cluster that is not in a healthy or active state.")),(0,r.kt)(c,{value:"Rancher before v2.4",mdxType:"TabItem"},(0,r.kt)("p",null,"When upgrading the Kubernetes version of a cluster, we recommend that you:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Take a snapshot."),(0,r.kt)("li",{parentName:"ol"},"Initiate a Kubernetes upgrade."),(0,r.kt)("li",{parentName:"ol"},"If the upgrade fails, restore the cluster from the etcd snapshot.")),(0,r.kt)("p",null,"The cluster cannot be downgraded to a previous Kubernetes version."))),(0,r.kt)("h2",{id:"upgrading-the-kubernetes-version"},"Upgrading the Kubernetes Version"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Prerequisites:")),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"The options below are available only for ",(0,r.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher-launched RKE Kubernetes clusters")," and imported/registered K3s Kubernetes clusters."),(0,r.kt)("li",{parentName:"ul"},"Before upgrading Kubernetes, ",(0,r.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/backup-restore-and-disaster-recovery"},"back up your cluster.")))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the ",(0,r.kt)("strong",{parentName:"p"},"Global")," view, find the cluster for which you want to upgrade Kubernetes. Select ",(0,r.kt)("strong",{parentName:"p"},"\u22ee"," > Edit"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Expand ",(0,r.kt)("strong",{parentName:"p"},"Cluster Options"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the ",(0,r.kt)("strong",{parentName:"p"},"Kubernetes Version")," drop-down, choose the version of Kubernetes that you want to use for the cluster.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save"),"."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," Kubernetes begins upgrading for the cluster."),(0,r.kt)("h2",{id:"rolling-back"},"Rolling Back"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Available as of v2.4")),(0,r.kt)("p",null,"A cluster can be restored to a backup in which the previous Kubernetes version was used. For more information, refer to the following sections:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/backing-up-etcd#how-snapshots-work"},"Backing up a cluster")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/restoring-etcd#restoring-a-cluster-from-a-snapshot"},"Restoring a cluster from backup"))),(0,r.kt)("h2",{id:"configuring-the-upgrade-strategy"},"Configuring the Upgrade Strategy"),(0,r.kt)("p",null,"As of RKE v1.1.0, additional upgrade options became available to give you more granular control over the upgrade process. These options can be used to maintain availability of your applications during a cluster upgrade if certain ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/upgrades/maintaining-availability"},"conditions and requirements")," are met."),(0,r.kt)("p",null,"The upgrade strategy can be configured in the Rancher UI, or by editing the ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster.yml"),". More advanced options are available by editing the ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster.yml"),"."),(0,r.kt)("h3",{id:"configuring-the-maximum-unavailable-worker-nodes-in-the-rancher-ui"},"Configuring the Maximum Unavailable Worker Nodes in the Rancher UI"),(0,r.kt)("p",null,"From the Rancher UI, the maximum number of unavailable worker nodes can be configured. During a cluster upgrade, worker nodes will be upgraded in batches of this size."),(0,r.kt)("p",null,"By default, the maximum number of unavailable worker is defined as 10 percent of all worker nodes. This number can be configured as a percentage or as an integer. When defined as a percentage, the batch size is rounded down to the nearest node, with a minimum of one node."),(0,r.kt)("p",null,"To change the default number or percentage of worker nodes,"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to the cluster view in the Rancher UI."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"\u22ee"," > Edit.")),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Advanced Options")," section, go to the ",(0,r.kt)("strong",{parentName:"li"},"Maxiumum Worker Nodes Unavailable")," field. Enter the percentage of worker nodes that can be upgraded in a batch. Optionally, select ",(0,r.kt)("strong",{parentName:"li"},"Count")," from the drop-down menu and enter the maximum unavailable worker nodes as an integer."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," The cluster is updated to use the new upgrade strategy."),(0,r.kt)("h3",{id:"enabling-draining-nodes-during-upgrades-from-the-rancher-ui"},"Enabling Draining Nodes During Upgrades from the Rancher UI"),(0,r.kt)("p",null,"By default, RKE ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/architecture/nodes/#manual-node-administration"},"cordons")," each node before upgrading it. ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/safely-drain-node/"},"Draining")," is disabled during upgrades by default. If draining is enabled in the cluster configuration, RKE will both cordon and drain the node before it is upgraded."),(0,r.kt)("p",null,"To enable draining each node during a cluster upgrade,"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to the cluster view in the Rancher UI."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"\u22ee"," > Edit.")),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("strong",{parentName:"li"},"Advanced Options")," section, go to the ",(0,r.kt)("strong",{parentName:"li"},"Drain nodes")," field and click ",(0,r.kt)("strong",{parentName:"li"},"Yes.")),(0,r.kt)("li",{parentName:"ol"},"Choose a safe or aggressive drain option. For more information about each option, refer to ",(0,r.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/nodes-and-node-pools#aggressive-and-safe-draining-options"},"this section.")),(0,r.kt)("li",{parentName:"ol"},"Optionally, configure a grace period. The grace period is the timeout given to each pod for cleaning things up, so they will have chance to exit gracefully. Pods might need to finish any outstanding requests, roll back transactions or save state to some external storage. If this value is negative, the default value specified in the pod will be used."),(0,r.kt)("li",{parentName:"ol"},"Optionally, configure a timeout, which is the amount of time the drain should continue to wait before giving up."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Result:")," The cluster is updated to use the new upgrade strategy."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," As of Rancher v2.4.0, there is a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher/issues/25478"},"known issue")," in which the Rancher UI doesn't show state of etcd and controlplane as drained, even though they are being drained.")),(0,r.kt)("h3",{id:"maintaining-availability-for-applications-during-upgrades"},"Maintaining Availability for Applications During Upgrades"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Available as of RKE v1.1.0")),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/upgrades/maintaining-availability/"},"this section of the RKE documentation,")," you'll learn the requirements to prevent downtime for your applications when upgrading the cluster."),(0,r.kt)("h3",{id:"configuring-the-upgrade-strategy-in-the-clusteryml"},"Configuring the Upgrade Strategy in the cluster.yml"),(0,r.kt)("p",null,"More advanced upgrade strategy configuration options are available by editing the ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster.yml"),"."),(0,r.kt)("p",null,"For details, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rke/latest/en/upgrades/configuring-strategy"},"Configuring the Upgrade Strategy")," in the RKE documentation. The section also includes an example ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster.yml")," for configuring the upgrade strategy."),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"If a node doesn't come up after an upgrade, the ",(0,r.kt)("inlineCode",{parentName:"p"},"rke up")," command errors out."),(0,r.kt)("p",null,"No upgrade will proceed if the number of unavailable nodes exceeds the configured maximum."),(0,r.kt)("p",null,"If an upgrade stops, you may need to fix an unavailable node or remove it from the cluster before the upgrade can continue."),(0,r.kt)("p",null,"A failed node could be in many different states:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Powered off"),(0,r.kt)("li",{parentName:"ul"},"Unavailable"),(0,r.kt)("li",{parentName:"ul"},"User drains a node while upgrade is in process, so there are no kubelets on the node"),(0,r.kt)("li",{parentName:"ul"},"The upgrade itself failed")),(0,r.kt)("p",null,"If the max unavailable number of nodes is reached during an upgrade, Rancher user clusters will be stuck in updating state and not move forward with upgrading any other control plane nodes. It will continue to evaluate the set of unavailable nodes in case one of the nodes becomes available. If the node cannot be fixed, you must remove the node in order to continue the upgrade."))}h.isMDXComponent=!0}}]);