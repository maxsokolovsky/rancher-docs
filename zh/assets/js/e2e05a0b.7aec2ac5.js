"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[51976],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),h=n,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||o;return a?r.createElement(m,s(s({ref:t},p),{},{components:a})):r.createElement(m,s({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},71733:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const o={title:"Restoring a Cluster from Backup"},s=void 0,i={unversionedId:"how-to-guides/advanced-user-guides/manage-clusters/restoring-etcd",id:"version-2.0-2.4/how-to-guides/advanced-user-guides/manage-clusters/restoring-etcd",title:"Restoring a Cluster from Backup",description:"Available as of v2.2.0",source:"@site/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/manage-clusters/restoring-etcd.md",sourceDirName:"how-to-guides/advanced-user-guides/manage-clusters",slug:"/how-to-guides/advanced-user-guides/manage-clusters/restoring-etcd",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/restoring-etcd",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/how-to-guides/advanced-user-guides/manage-clusters/restoring-etcd.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1670452794,formattedLastUpdatedAt:"2022\u5e7412\u67087\u65e5",frontMatter:{title:"Restoring a Cluster from Backup"},sidebar:"tutorialSidebar",previous:{title:"Backing up a Cluster",permalink:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/backing-up-etcd"},next:{title:"Cluster Autoscaler",permalink:"/zh/v2.0-v2.4/pages-for-subheaders/install-cluster-autoscaler"}},l={},u=[{value:"Viewing Available Snapshots",id:"viewing-available-snapshots",level:2},{value:"Restoring a Cluster from a Snapshot",id:"restoring-a-cluster-from-a-snapshot",level:2},{value:"Recovering etcd without a Snapshot",id:"recovering-etcd-without-a-snapshot",level:2},{value:"Enabling Snapshot Features for Clusters Created Before Rancher v2.2.0",id:"enabling-snapshot-features-for-clusters-created-before-rancher-v220",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},c=p("Tabs"),d=p("TabItem"),h={toc:u};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Available as of v2.2.0")),(0,n.kt)("p",null,"etcd backup and recovery for ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/launch-kubernetes-with-rancher"},"Rancher launched Kubernetes clusters")," can be easily performed. Snapshots of the etcd database are taken and saved either locally onto the etcd nodes or to a S3 compatible target. The advantages of configuring S3 is that if all etcd nodes are lost, your snapshot is saved remotely and can be used to restore the cluster."),(0,n.kt)("p",null,"Rancher recommends enabling the ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/backing-up-etcd#configuring-recurring-snapshots"},"ability to set up recurring snapshots of etcd"),", but ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/backing-up-etcd#one-time-snapshots"},"one-time snapshots")," can easily be taken as well. Rancher allows restore from ",(0,n.kt)("a",{parentName:"p",href:"#restoring-a-cluster-from-a-snapshot"},"saved snapshots")," or if you don't have any snapshots, you can still ",(0,n.kt)("a",{parentName:"p",href:"#recovering-etcd-without-a-snapshot"},"restore etcd"),"."),(0,n.kt)("p",null,"As of Rancher v2.4.0, clusters can also be restored to a prior Kubernetes version and cluster configuration."),(0,n.kt)("h2",{id:"viewing-available-snapshots"},"Viewing Available Snapshots"),(0,n.kt)("p",null,"The list of all available snapshots for the cluster is available."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("strong",{parentName:"p"},"Global")," view, navigate to the cluster that you want to view snapshots.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Tools > Snapshots")," from the navigation bar to view the list of saved snapshots. These snapshots include a timestamp of when they were created."))),(0,n.kt)("h2",{id:"restoring-a-cluster-from-a-snapshot"},"Restoring a Cluster from a Snapshot"),(0,n.kt)("p",null,"If your Kubernetes cluster is broken, you can restore the cluster from a snapshot."),(0,n.kt)("p",null,"Restores changed in Rancher v2.4.0."),(0,n.kt)(c,{mdxType:"Tabs"},(0,n.kt)(d,{value:"Rancher v2.4.0+",mdxType:"TabItem"},(0,n.kt)("p",null,"Snapshots are composed of the cluster data in etcd, the Kubernetes version, and the cluster configuration in the ",(0,n.kt)("inlineCode",{parentName:"p"},"cluster.yml.")," These components allow you to select from the following options when restoring a cluster from a snapshot:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Restore just the etcd contents:")," This restore is similar to restoring to snapshots in Rancher before v2.4.0."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Restore etcd and Kubernetes version:")," This option should be used if a Kubernetes upgrade is the reason that your cluster is failing, and you haven't made any cluster configuration changes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Restore etcd, Kubernetes versions and cluster configuration:")," This option should be used if you changed both the Kubernetes version and cluster configuration when upgrading.")),(0,n.kt)("p",null,"When rolling back to a prior Kubernetes version, the ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/getting-started/installation-and-upgrade/upgrade-and-roll-back-kubernetes#configuring-the-upgrade-strategy"},"upgrade strategy options")," are ignored. Worker nodes are not cordoned or drained before being reverted to the older Kubernetes version, so that an unhealthy cluster can be more quickly restored to a healthy state."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Prerequisite:")," To restore snapshots from S3, the cluster needs to be configured to ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/backing-up-etcd#configuring-recurring-snapshots"},"take recurring snapshots on S3."))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("strong",{parentName:"p"},"Global")," view, navigate to the cluster that you want to restore from a snapshots.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the ",(0,n.kt)("strong",{parentName:"p"},"\u22ee"," > Restore Snapshot"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the snapshot that you want to use for restoring your cluster from the dropdown of available snapshots.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("strong",{parentName:"p"},"Restoration Type")," field, choose one of the restore options described above.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Save"),"."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," The cluster will go into ",(0,n.kt)("inlineCode",{parentName:"p"},"updating")," state and the process of restoring the ",(0,n.kt)("inlineCode",{parentName:"p"},"etcd")," nodes from the snapshot will start. The cluster is restored when it returns to an ",(0,n.kt)("inlineCode",{parentName:"p"},"active")," state.")),(0,n.kt)(d,{value:"Rancher before v2.4.0",mdxType:"TabItem"},(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Prerequisites:")),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"Make sure your etcd nodes are healthy. If you are restoring a cluster with unavailable etcd nodes, it's recommended that all etcd nodes are removed from Rancher before attempting to restore. For clusters in which Rancher used node pools to provision ",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/use-new-nodes-in-an-infra-provider"},"nodes in an infrastructure provider"),", new etcd nodes will automatically be created. For ",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/pages-for-subheaders/use-existing-nodes"},"custom clusters"),", please ensure that you add new etcd nodes to the cluster."),(0,n.kt)("li",{parentName:"ul"},"To restore snapshots from S3, the cluster needs to be configured to ",(0,n.kt)("a",{parentName:"li",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/backing-up-etcd#configuring-recurring-snapshots"},"take recurring snapshots on S3.")))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("strong",{parentName:"p"},"Global")," view, navigate to the cluster that you want to restore from a snapshot.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the ",(0,n.kt)("strong",{parentName:"p"},"\u22ee"," > Restore Snapshot"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the snapshot that you want to use for restoring your cluster from the dropdown of available snapshots.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Save"),"."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," The cluster will go into ",(0,n.kt)("inlineCode",{parentName:"p"},"updating")," state and the process of restoring the ",(0,n.kt)("inlineCode",{parentName:"p"},"etcd")," nodes from the snapshot will start. The cluster is restored when it returns to an ",(0,n.kt)("inlineCode",{parentName:"p"},"active")," state."))),(0,n.kt)("h2",{id:"recovering-etcd-without-a-snapshot"},"Recovering etcd without a Snapshot"),(0,n.kt)("p",null,"If the group of etcd nodes loses quorum, the Kubernetes cluster will report a failure because no operations, e.g. deploying workloads, can be executed in the Kubernetes cluster. The cluster should have three etcd nodes to prevent a loss of quorum. If you want to recover your set of etcd nodes, follow these instructions:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Keep only one etcd node in the cluster by removing all other etcd nodes.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the single remaining etcd node, run the following command:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"$ docker run --rm -v /var/run/docker.sock:/var/run/docker.sock assaflavie/runlike etcd\n")),(0,n.kt)("p",{parentName:"li"},"This command outputs the running command for etcd, save this command to use later.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Stop the etcd container that you launched in the previous step and rename it to ",(0,n.kt)("inlineCode",{parentName:"p"},"etcd-old"),"."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"$ docker stop etcd\n$ docker rename etcd etcd-old\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Take the saved command from Step 2 and revise it:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If you originally had more than 1 etcd node, then you need to change ",(0,n.kt)("inlineCode",{parentName:"li"},"--initial-cluster")," to only contain the node that remains."),(0,n.kt)("li",{parentName:"ul"},"Add ",(0,n.kt)("inlineCode",{parentName:"li"},"--force-new-cluster")," to the end of the command."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run the revised command.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After the single nodes is up and running, Rancher recommends adding additional etcd nodes to your cluster. If you have a ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/use-existing-nodes"},"custom cluster")," and you want to reuse an old node, you are required to ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/clean-cluster-nodes"},"clean up the nodes")," before attempting to add them back into a cluster."))),(0,n.kt)("h2",{id:"enabling-snapshot-features-for-clusters-created-before-rancher-v220"},"Enabling Snapshot Features for Clusters Created Before Rancher v2.2.0"),(0,n.kt)("p",null,"If you have any Rancher launched Kubernetes clusters that were created before v2.2.0, after upgrading Rancher, you must ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/pages-for-subheaders/cluster-configuration"},"edit the cluster")," and ",(0,n.kt)("em",{parentName:"p"},"save")," it, in order to enable the updated snapshot features. Even if you were already creating snapshots before v2.2.0, you must do this step as the older snapshots will not be available to use to ",(0,n.kt)("a",{parentName:"p",href:"/zh/v2.0-v2.4/how-to-guides/advanced-user-guides/manage-clusters/restoring-etcd"},"back up and restore etcd through the UI"),"."))}m.isMDXComponent=!0}}]);