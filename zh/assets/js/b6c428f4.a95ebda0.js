"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[2786],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,f=d["".concat(s,".").concat(p)]||d[p]||h[p]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60813:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return h}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"Install/Upgrade Rancher with RancherD"},s=void 0,u={unversionedId:"pages-for-subheaders/install-rancher-on-linux",id:"version-2.5/pages-for-subheaders/install-rancher-on-linux",title:"Install/Upgrade Rancher with RancherD",description:"Note: RancherD was an experimental feature available as part of Rancher v2.5.4 through v2.5.10 but is now deprecated and not available for recent releases.",source:"@site/versioned_docs/version-2.5/pages-for-subheaders/install-rancher-on-linux.md",sourceDirName:"pages-for-subheaders",slug:"/pages-for-subheaders/install-rancher-on-linux",permalink:"/zh/v2.5/pages-for-subheaders/install-rancher-on-linux",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.5/pages-for-subheaders/install-rancher-on-linux.md",tags:[],version:"2.5",lastUpdatedAt:1667002159,formattedLastUpdatedAt:"2022/10/29",frontMatter:{title:"Install/Upgrade Rancher with RancherD"},sidebar:"tutorialSidebar",previous:{title:"3. Install Rancher",permalink:"/zh/v2.5/getting-started/installation-and-upgrade/other-installation-methods/rancher-behind-an-http-proxy/install-rancher"},next:{title:"Rollbacks",permalink:"/zh/v2.5/getting-started/installation-and-upgrade/other-installation-methods/install-rancher-on-linux/roll-back-rancherd"}},c={},h=[{value:"About RancherD Installs",id:"about-rancherd-installs",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Node Requirements",id:"node-requirements",level:3},{value:"Root Access",id:"root-access",level:3},{value:"Fixed Registration Address",id:"fixed-registration-address",level:3},{value:"Part I: Installing Rancher",id:"part-i-installing-rancher",level:2},{value:"1. Set up Configurations",id:"1-set-up-configurations",level:3},{value:"2. Launch the first server node",id:"2-launch-the-first-server-node",level:3},{value:"3. Set up the kubeconfig file with kubectl",id:"3-set-up-the-kubeconfig-file-with-kubectl",level:3},{value:"4. Verify that Rancher is installed on the Kubernetes cluster",id:"4-verify-that-rancher-is-installed-on-the-kubernetes-cluster",level:3},{value:"5. Set the initial Rancher password",id:"5-set-the-initial-rancher-password",level:3},{value:"Part II: High Availability",id:"part-ii-high-availability",level:2},{value:"1. Configure the fixed registration address on a new node",id:"1-configure-the-fixed-registration-address-on-a-new-node",level:3},{value:"2. Launch an additional server node",id:"2-launch-an-additional-server-node",level:3},{value:"3. Repeat",id:"3-repeat",level:3},{value:"Upgrades",id:"upgrades",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Uninstall",id:"uninstall",level:2},{value:"RKE2 Documentation",id:"rke2-documentation",level:2}],d={toc:h};function p(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")," RancherD was an experimental feature available as part of Rancher v2.5.4 through v2.5.10 but is now deprecated and not available for recent releases.")),(0,i.kt)("p",null,"We are excited to introduce a new, simpler way to install Rancher called RancherD."),(0,i.kt)("p",null,"RancherD is a single binary that first launches an RKE2 Kubernetes cluster, then installs the Rancher server Helm chart on the cluster."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#about-rancherd-installs"},"About RancherD Installs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#part-i-installing-rancher"},"Part I: Installing Rancher")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#part-ii-high-availability"},"Part II: High Availability")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#upgrades"},"Upgrades")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configuration"},"Configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#uninstall"},"Uninstall")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#rke2-documentation"},"RKE2 Documentation"))),(0,i.kt)("h2",{id:"about-rancherd-installs"},"About RancherD Installs"),(0,i.kt)("p",null,"When RancherD is launched on a host, it first installs an RKE2 Kubernetes cluster, then deploys Rancher on the cluster as a Kubernetes daemonset."),(0,i.kt)("p",null,"In both the RancherD install and the Helm CLI install, Rancher is installed as a Helm chart on a Kubernetes cluster."),(0,i.kt)("p",null,"Configuration and upgrading are also simplified with RancherD. When you upgrade the RancherD binary, both the Kubernetes cluster and the Rancher Helm chart are upgraded."),(0,i.kt)("p",null,"In Part I of these instructions, you'll learn how to launch RancherD on a single node. The result of following the steps in Part I is a single-node ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rke2.io/"},"RKE2")," Kubernetes cluster with the Rancher server installed. This cluster can easily become high availability later. If Rancher only needs to manage the local Kubernetes cluster, the installation is complete."),(0,i.kt)("p",null,"Part II explains how to convert the single-node Rancher installation into a high-availability installation. If the Rancher server will manage downstream Kubernetes clusters, it is important to follow these steps. A discussion of recommended architecture for highly available Rancher deployments can be found in our ",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/rancher-server"},"Best Practices Guide.")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("h3",{id:"node-requirements"},"Node Requirements"),(0,i.kt)("p",null,"RancherD must be launched on a Linux OS. At this time, only OSes that leverage systemd are supported."),(0,i.kt)("p",null,"The Linux node needs to fulfill the ",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/installation-requirements"},"installation requirements")," for hardware and networking. Docker is not required for RancherD installs."),(0,i.kt)("p",null,"To install RancherD on SELinux Enforcing CentOS 8 nodes or RHEL 8 nodes, some ",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.5/pages-for-subheaders/installation-requirements#rancherd-on-selinux-enforcing-centos-8-or-rhel-8-nodes"},"additional steps")," are required."),(0,i.kt)("h3",{id:"root-access"},"Root Access"),(0,i.kt)("p",null,"Before running the installation commands, you will need to log in as root:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo -s\n")),(0,i.kt)("h3",{id:"fixed-registration-address"},"Fixed Registration Address"),(0,i.kt)("p",null,"A fixed registration address is recommended for single-node installs and required for high-availability installs with RancherD."),(0,i.kt)("p",null,"The fixed registration address is an endpoint that is used for two purposes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To access the Kubernetes API. So you can, for example, modify your ",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/"},"kubeconfig")," file to point to it instead of a specific node."),(0,i.kt)("li",{parentName:"ul"},"To add new nodes to the Kubernetes cluster. To add nodes to the cluster later, you will run a command on the node that will specify the fixed registration address of the cluster.")),(0,i.kt)("p",null,"If you are installing Rancher on a single node, the fixed registration address makes it possible to add more nodes to the cluster so that you can convert the single-node install to a high-availability install without causing downtime to the cluster. If you don't set up this address when installing the single-node Kubernetes cluster, you would need to re-run the installation script with a fixed registration address in order to add new nodes to the cluster."),(0,i.kt)("p",null,"The fixed registration can be the IP or hostname of any of the server nodes, but in many cases those may change over time as nodes are created and destroyed. Therefore, you should have a stable endpoint in front of the server nodes."),(0,i.kt)("p",null,"This endpoint can be set up using any number of approaches, such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A layer 4 (TCP) load balancer"),(0,i.kt)("li",{parentName:"ul"},"Round-robin DNS"),(0,i.kt)("li",{parentName:"ul"},"Virtual or elastic IP addresses")),(0,i.kt)("p",null,"The following should be taken into consideration when configuring the load balancer or other endpoint:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The RancherD server process listens on port 9345 for new nodes to register."),(0,i.kt)("li",{parentName:"ul"},"The Kubernetes API is served on port 6443, as normal."),(0,i.kt)("li",{parentName:"ul"},"In RancherD installs, the Rancher UI is served on port 8443 by default. (This is different from Helm chart installs, where port 443 is used by default.)")),(0,i.kt)("h2",{id:"part-i-installing-rancher"},"Part I: Installing Rancher"),(0,i.kt)("h3",{id:"1-set-up-configurations"},"1. Set up Configurations"),(0,i.kt)("p",null,"To avoid certificate errors with the fixed registration address, you should launch the server with the ",(0,i.kt)("inlineCode",{parentName:"p"},"tls-san")," parameter set. This parameter should refer to your fixed registration address."),(0,i.kt)("p",null,"This option adds an additional hostname or IP as a Subject Alternative Name in the server's TLS cert, and it can be specified as a list if you would like to access the Kubernetes cluster via both the IP and the hostname."),(0,i.kt)("p",null,"Create the RancherD config file at ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rke2/config.yaml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"token: my-shared-secret\ntls-san:\n  - my-fixed-registration-address.com\n  - another-kubernetes-domain.com\n")),(0,i.kt)("p",null,"The first server node establishes the secret token that other nodes would register with if they are added to the cluster."),(0,i.kt)("p",null,"If you do not specify a pre-shared secret, RancherD will generate one and place it at ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/server/node-token"),"."),(0,i.kt)("p",null,"To specify your own pre-shared secret as the token, set the ",(0,i.kt)("inlineCode",{parentName:"p"},"token")," argument on startup."),(0,i.kt)("p",null,"Installing Rancher this way will use Rancher-generated certificates. To use your own self-signed or trusted certificates, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.5/reference-guides/cluster-configuration/rancher-server-configuration/rancherd-configuration-reference#certificates-for-the-rancher-server"},"configuration guide.")),(0,i.kt)("p",null,"For information on customizing the RancherD Helm chart values.yaml, refer to ",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.5/reference-guides/cluster-configuration/rancher-server-configuration/rancherd-configuration-reference#customizing-the-rancherd-helm-chart"},"this section.")),(0,i.kt)("h3",{id:"2-launch-the-first-server-node"},"2. Launch the first server node"),(0,i.kt)("p",null,"Run the RancherD installer:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -sfL https://get.rancher.io | sh -\n")),(0,i.kt)("p",null,"The RancherD version can be specified using the ",(0,i.kt)("inlineCode",{parentName:"p"},"INSTALL_RANCHERD_VERSION")," environment variable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -sfL https://get.rancher.io | INSTALL_RANCHERD_VERSION=v2.5.4-rc6 sh -\n")),(0,i.kt)("p",null,"Once installed, the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancherd")," binary will be on your PATH. You can check out its help text like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rancherd --help\nNAME:\n   rancherd - Rancher Kubernetes Engine 2\n...\n")),(0,i.kt)("p",null,"Next, launch RancherD:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"systemctl enable rancherd-server.service\nsystemctl start rancherd-server.service\n")),(0,i.kt)("p",null,"When RancherD launches, it installs an RKE2 Kubernetes cluster. Use the following command to see the logs of the Kubernetes cluster as it comes up:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"journalctl -eu rancherd-server -f\n")),(0,i.kt)("h3",{id:"3-set-up-the-kubeconfig-file-with-kubectl"},"3. Set up the kubeconfig file with kubectl"),(0,i.kt)("p",null,"Once the Kubernetes cluster is up, set up RancherD\u2019s kubeconfig file and ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export KUBECONFIG=/etc/rancher/rke2/rke2.yaml PATH=$PATH:/var/lib/rancher/rke2/bin\n")),(0,i.kt)("h3",{id:"4-verify-that-rancher-is-installed-on-the-kubernetes-cluster"},"4. Verify that Rancher is installed on the Kubernetes cluster"),(0,i.kt)("p",null,"Now, you can start issuing ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," commands. Use the following commands to verify that Rancher is deployed as a daemonset on the cluster:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"kubectl get daemonset rancher -n cattle-system\nkubectl get pod -n cattle-system\n")),(0,i.kt)("p",null,"If you watch the pods, you will see the following pods installed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"helm-operation")," pods in the ",(0,i.kt)("inlineCode",{parentName:"li"},"cattle-system")," namespace"),(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("inlineCode",{parentName:"li"},"rancher")," pod and ",(0,i.kt)("inlineCode",{parentName:"li"},"rancher-webhook")," pod in the ",(0,i.kt)("inlineCode",{parentName:"li"},"cattle-system")," namespace"),(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("inlineCode",{parentName:"li"},"fleet-agent"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"fleet-controller"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"gitjob")," pod in the ",(0,i.kt)("inlineCode",{parentName:"li"},"fleet-system")," namespace"),(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("inlineCode",{parentName:"li"},"rancher-operator")," pod in the ",(0,i.kt)("inlineCode",{parentName:"li"},"rancher-operator-system")," namespace")),(0,i.kt)("h3",{id:"5-set-the-initial-rancher-password"},"5. Set the initial Rancher password"),(0,i.kt)("p",null,"Once the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher")," pod is up and running, run the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rancherd reset-admin\n")),(0,i.kt)("p",null,"This will give you the URL, username and password needed to log into Rancher. Follow that URL, plug in the credentials, and you\u2019re up and running with Rancher!"),(0,i.kt)("p",null,"If Rancher will only manage the local Kubernetes cluster, the installation is complete."),(0,i.kt)("h2",{id:"part-ii-high-availability"},"Part II: High Availability"),(0,i.kt)("p",null,"If you plan to use the Rancher server to manage downstream Kubernetes clusters, Rancher needs to be highly available. In these steps, you will add more nodes to achieve a high-availability cluster. Since Rancher is running as a daemonset, it will automatically launch on the nodes you add."),(0,i.kt)("p",null,"An odd number of nodes is required because the etcd cluster, which contains the cluster data, needs a majority of live nodes to avoid losing quorum. A loss of quorum could require the cluster to be restored from backup. Therefore, we recommend using three nodes."),(0,i.kt)("p",null,"When following these steps, you should still be logged in as root."),(0,i.kt)("h3",{id:"1-configure-the-fixed-registration-address-on-a-new-node"},"1. Configure the fixed registration address on a new node"),(0,i.kt)("p",null,"Additional server nodes are launched much like the first, except that you must specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"server")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"token")," parameters so that they can successfully connect to the initial server node."),(0,i.kt)("p",null,"Here is an example of what the RancherD config file would look like for additional server nodes. By default, this config file is expected to be located at ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rke2/config.yaml"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"server: https://my-fixed-registration-address.com:9345\ntoken: my-shared-secret\ntls-san:\n  - my-fixed-registration-address.com\n  - another-kubernetes-domain.com\n")),(0,i.kt)("h3",{id:"2-launch-an-additional-server-node"},"2. Launch an additional server node"),(0,i.kt)("p",null,"Run the installer on the new node:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -sfL https://get.rancher.io | sh -\n")),(0,i.kt)("p",null,"This will download RancherD and install it as a systemd unit on your host."),(0,i.kt)("p",null,"Next, launch RancherD:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"systemctl enable rancherd-server.service\nsystemctl start rancherd-server.service\n")),(0,i.kt)("h3",{id:"3-repeat"},"3. Repeat"),(0,i.kt)("p",null,"Repeat steps one and two for another Linux node, bringing the number of nodes in the cluster to three."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Result:")," Rancher is highly available and the installation is complete."),(0,i.kt)("h2",{id:"upgrades"},"Upgrades"),(0,i.kt)("p",null,"For information on upgrades and rollbacks, refer to ",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.5/getting-started/installation-and-upgrade/other-installation-methods/install-rancher-on-linux/upgrade-rancherd"},"this page.")),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"For information on how to configure certificates, node taints, Rancher Helm chart options, or RancherD CLI options, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/zh/v2.5/reference-guides/cluster-configuration/rancher-server-configuration/rancherd-configuration-reference"},"configuration reference.")),(0,i.kt)("h2",{id:"uninstall"},"Uninstall"),(0,i.kt)("p",null,"To uninstall RancherD from your system, run the command below. This will shut down the process, remove the RancherD binary, and clean up files used by RancherD."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rancherd-uninstall.sh\n")),(0,i.kt)("h2",{id:"rke2-documentation"},"RKE2 Documentation"),(0,i.kt)("p",null,"For more information on RKE2, the Kubernetes distribution used to provision the underlying cluster, refer to the documentation ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rke2.io/"},"here.")))}p.isMDXComponent=!0}}]);