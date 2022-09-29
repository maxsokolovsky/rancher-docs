"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[8631],{3905:function(e,r,n){n.d(r,{Zo:function(){return l},kt:function(){return p}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),u=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},l=function(e){var r=u(e.components);return t.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},h=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=u(n),p=a,f=h["".concat(c,".").concat(p)]||h[p]||d[p]||o;return n?t.createElement(f,i(i({ref:r},l),{},{components:n})):t.createElement(f,i({ref:r},l))}));function p(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}h.displayName="MDXCreateElement"},85735:function(e,r,n){n.r(r),n.d(r,{assets:function(){return l},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var t=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Tips for Running Rancher"},c=void 0,u={unversionedId:"reference-guides/best-practices/rancher-server/tips-for-running-rancher",id:"reference-guides/best-practices/rancher-server/tips-for-running-rancher",title:"Tips for Running Rancher",description:"This guide is geared toward use cases where Rancher is used to manage downstream Kubernetes clusters. The high-availability setup is intended to prevent losing access to downstream clusters if the Rancher server is not available.",source:"@site/docs/reference-guides/best-practices/rancher-server/tips-for-running-rancher.md",sourceDirName:"reference-guides/best-practices/rancher-server",slug:"/reference-guides/best-practices/rancher-server/tips-for-running-rancher",permalink:"/reference-guides/best-practices/rancher-server/tips-for-running-rancher",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/reference-guides/best-practices/rancher-server/tips-for-running-rancher.md",tags:[],version:"current",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"9/23/2022",frontMatter:{title:"Tips for Running Rancher"},sidebar:"tutorialSidebar",previous:{title:"Rancher Deployment Strategy",permalink:"/reference-guides/best-practices/rancher-server/rancher-deployment-strategy"},next:{title:"Best Practices for Rancher Managed Clusters",permalink:"/pages-for-subheaders/rancher-managed-clusters"}},l={},d=[{value:"Run Rancher on a Separate Cluster",id:"run-rancher-on-a-separate-cluster",level:3},{value:"Make sure nodes are configured correctly for Kubernetes",id:"make-sure-nodes-are-configured-correctly-for-kubernetes",level:3},{value:"When using RKE: Back up the Statefile",id:"when-using-rke-back-up-the-statefile",level:3},{value:"Run All Nodes in the Cluster in the Same Datacenter",id:"run-all-nodes-in-the-cluster-in-the-same-datacenter",level:3},{value:"Development and Production Environments Should be Similar",id:"development-and-production-environments-should-be-similar",level:3},{value:"Monitor Your Clusters to Plan Capacity",id:"monitor-your-clusters-to-plan-capacity",level:3}],h={toc:d};function p(e){var r=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},h,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide is geared toward use cases where Rancher is used to manage downstream Kubernetes clusters. The high-availability setup is intended to prevent losing access to downstream clusters if the Rancher server is not available."),(0,o.kt)("p",null,'A high-availability Kubernetes installation, defined as an installation of Rancher on a Kubernetes cluster with at least three nodes, should be used in any production installation of Rancher, as well as any installation deemed "important." Multiple Rancher instances running on multiple nodes ensure high availability that cannot be accomplished with a single node environment.'),(0,o.kt)("p",null,"If you are installing Rancher in a vSphere environment, refer to the best practices documented ",(0,o.kt)("a",{parentName:"p",href:"/reference-guides/best-practices/rancher-server/on-premises-rancher-in-vsphere"},"here.")),(0,o.kt)("p",null,"When you set up your high-availability Rancher installation, consider the following:"),(0,o.kt)("h3",{id:"run-rancher-on-a-separate-cluster"},"Run Rancher on a Separate Cluster"),(0,o.kt)("p",null,"Don't run other workloads or microservices in the Kubernetes cluster that Rancher is installed on."),(0,o.kt)("h3",{id:"make-sure-nodes-are-configured-correctly-for-kubernetes"},"Make sure nodes are configured correctly for Kubernetes"),(0,o.kt)("p",null,"It's important to follow K8s and etcd best practices when deploying your nodes, including disabling swap, double checking you have full network connectivity between all machines in the cluster, using unique hostnames, MAC addresses, and product_uuids for every node, checking that all correct ports are opened, and deploying with ssd backed etcd. More details can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/install-kubeadm/#before-you-begin"},"kubernetes docs")," and ",(0,o.kt)("a",{parentName:"p",href:"https://etcd.io/docs/v3.4/op-guide/performance/"},"etcd's performance op guide"),"."),(0,o.kt)("h3",{id:"when-using-rke-back-up-the-statefile"},"When using RKE: Back up the Statefile"),(0,o.kt)("p",null,"RKE keeps record of the cluster state in a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"cluster.rkestate"),". This file is important for the recovery of a cluster and/or the continued maintenance of the cluster through RKE. Because this file contains certificate material, we strongly recommend encrypting this file before backing up. After each run of ",(0,o.kt)("inlineCode",{parentName:"p"},"rke up")," you should backup the state file."),(0,o.kt)("h3",{id:"run-all-nodes-in-the-cluster-in-the-same-datacenter"},"Run All Nodes in the Cluster in the Same Datacenter"),(0,o.kt)("p",null,"For best performance, run all three of your nodes in the same geographic datacenter. If you are running nodes in the cloud, such as AWS, run each node in a separate Availability Zone. For example, launch node 1 in us-west-2a, node 2 in us-west-2b, and node 3 in us-west-2c."),(0,o.kt)("h3",{id:"development-and-production-environments-should-be-similar"},"Development and Production Environments Should be Similar"),(0,o.kt)("p",null,'It\'s strongly recommended to have a "staging" or "pre-production" environment of the Kubernetes cluster that Rancher runs on. This environment should mirror your production environment as closely as possible in terms of software and hardware configuration.'),(0,o.kt)("h3",{id:"monitor-your-clusters-to-plan-capacity"},"Monitor Your Clusters to Plan Capacity"),(0,o.kt)("p",null,"The Rancher server's Kubernetes cluster should run within the ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/installation-requirements"},"system and hardware requirements")," as closely as possible. The more you deviate from the system and hardware requirements, the more risk you take."),(0,o.kt)("p",null,"However, metrics-driven capacity planning analysis should be the ultimate guidance for scaling Rancher, because the published requirements take into account a variety of workload types."),(0,o.kt)("p",null,"Using Rancher, you can monitor the state and processes of your cluster nodes, Kubernetes components, and software deployments through integration with Prometheus, a leading open-source monitoring solution, and Grafana, which lets you visualize the metrics from Prometheus."),(0,o.kt)("p",null,"After you ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/monitoring-and-alerting"},"enable monitoring")," in the cluster, you can set up alerts to let you know if your cluster is approaching its capacity. You can also use the Prometheus and Grafana monitoring framework to establish a baseline for key metrics as you scale."))}p.isMDXComponent=!0}}]);