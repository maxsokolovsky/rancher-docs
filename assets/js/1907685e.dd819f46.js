"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[24836],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(a),h=r,u=m["".concat(s,".").concat(h)]||m[h]||d[h]||l;return a?n.createElement(u,i(i({ref:t},p),{},{components:a})):n.createElement(u,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},53091:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={title:"4. Install Rancher"},s=void 0,c={unversionedId:"getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha",id:"getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha",title:"4. Install Rancher",description:"This section is about how to deploy Rancher for your air gapped environment in a high-availability Kubernetes installation. An air gapped environment could be where Rancher server will be installed offline, behind a firewall, or behind a proxy.",source:"@site/docs/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha.md",sourceDirName:"getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install",slug:"/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha",permalink:"/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-rancher-ha.md",tags:[],version:"current",lastUpdatedAt:1663953084,formattedLastUpdatedAt:"9/23/2022",frontMatter:{title:"4. Install Rancher"},sidebar:"tutorialSidebar",previous:{title:"3. Install Kubernetes (Skip for Docker Installs)",permalink:"/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/install-kubernetes"},next:{title:"Docker Install Commands",permalink:"/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/docker-install-commands"}},p={},d=[{value:"Privileged Access for Rancher",id:"privileged-access-for-rancher",level:3},{value:"Docker Instructions",id:"docker-instructions",level:2},{value:"Kubernetes Instructions",id:"kubernetes-instructions",level:2},{value:"1. Add the Helm Chart Repository",id:"1-add-the-helm-chart-repository",level:3},{value:"2. Choose your SSL Configuration",id:"2-choose-your-ssl-configuration",level:3},{value:"Helm Chart Options for Air Gap Installations",id:"helm-chart-options-for-air-gap-installations",level:3},{value:"3. Render the Rancher Helm Template",id:"3-render-the-rancher-helm-template",level:3},{value:"Option A: Default Self-Signed Certificate",id:"option-a-default-self-signed-certificate",level:4},{value:"1. Add the cert-manager repo",id:"1-add-the-cert-manager-repo",level:5},{value:"2. Fetch the cert-manager chart",id:"2-fetch-the-cert-manager-chart",level:5},{value:"3. Render the cert-manager template",id:"3-render-the-cert-manager-template",level:5},{value:"4. Download the cert-manager CRD",id:"4-download-the-cert-manager-crd",level:5},{value:"5. Render the Rancher template",id:"5-render-the-rancher-template",level:5},{value:"Option B: Certificates From Files using Kubernetes Secrets",id:"option-b-certificates-from-files-using-kubernetes-secrets",level:4},{value:"1. Create secrets",id:"1-create-secrets",level:5},{value:"2. Render the Rancher template",id:"2-render-the-rancher-template",level:5},{value:"4. Install Rancher",id:"4-install-rancher",level:3},{value:"For Self-Signed Certificate Installs, Install Cert-manager",id:"for-self-signed-certificate-installs-install-cert-manager",level:4},{value:"Install Rancher with kubectl",id:"install-rancher-with-kubectl",level:4},{value:"Additional Resources",id:"additional-resources",level:2}],m={toc:d};function h(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This section is about how to deploy Rancher for your air gapped environment in a high-availability Kubernetes installation. An air gapped environment could be where Rancher server will be installed offline, behind a firewall, or behind a proxy."),(0,l.kt)("h3",{id:"privileged-access-for-rancher"},"Privileged Access for Rancher"),(0,l.kt)("p",null,"When the Rancher server is deployed in the Docker container, a local Kubernetes cluster is installed within the container for Rancher to use. Because many features of Rancher run as deployments, and privileged mode is required to run containers within containers, you will need to install Rancher with the ",(0,l.kt)("inlineCode",{parentName:"p"},"--privileged")," option."),(0,l.kt)("h2",{id:"docker-instructions"},"Docker Instructions"),(0,l.kt)("p",null,"If you want to continue the air gapped installation using Docker commands, skip the rest of this page and follow the instructions on ",(0,l.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/other-installation-methods/air-gapped-helm-cli-install/docker-install-commands"},"this page.")),(0,l.kt)("h2",{id:"kubernetes-instructions"},"Kubernetes Instructions"),(0,l.kt)("p",null,"Rancher recommends installing Rancher on a Kubernetes cluster. A highly available Kubernetes install is comprised of three nodes running the Rancher server components on a Kubernetes cluster. The persistence layer (etcd) is also replicated on these three nodes, providing redundancy and data duplication in case one of the nodes fails."),(0,l.kt)("h3",{id:"1-add-the-helm-chart-repository"},"1. Add the Helm Chart Repository"),(0,l.kt)("p",null,"From a system that has access to the internet, fetch the latest Helm chart and copy the resulting manifests to a system that has access to the Rancher server cluster."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"If you haven't already, install ",(0,l.kt)("inlineCode",{parentName:"p"},"helm")," locally on a workstation that has internet access. Note: Refer to the ",(0,l.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/resources/helm-version-requirements"},"Helm version requirements")," to choose a version of Helm to install Rancher.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"helm repo add")," command to add the Helm chart repository that contains charts to install Rancher. For more information about the repository choices and which is best for your use case, see ",(0,l.kt)("a",{parentName:"p",href:"/reference-guides/installation-references/helm-chart-options#helm-chart-repositories"},"Choosing a Version of Rancher"),"."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Latest: Recommended for trying out the newest features",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"helm repo add rancher-latest https://releases.rancher.com/server-charts/latest\n"))),(0,l.kt)("li",{parentName:"ul"},"Stable: Recommended for production environments",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"helm repo add rancher-stable https://releases.rancher.com/server-charts/stable\n"))),(0,l.kt)("li",{parentName:"ul"},"Alpha: Experimental preview of upcoming releases.",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"helm repo add rancher-alpha https://releases.rancher.com/server-charts/alpha\n")),"  Note: Upgrades are not supported to, from, or between Alphas."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Fetch the latest Rancher chart. This will pull down the chart and save it in the current directory as a ",(0,l.kt)("inlineCode",{parentName:"p"},".tgz")," file."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-plain"},"helm fetch rancher-<CHART_REPO>/rancher\n")),(0,l.kt)("p",{parentName:"li"},"If you require a specific version of Rancher, you can fetch this with the Helm ",(0,l.kt)("inlineCode",{parentName:"p"},"--version")," parameter like in the following example:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-plain"},"helm fetch rancher-stable/rancher --version=v2.4.8\n")))),(0,l.kt)("h3",{id:"2-choose-your-ssl-configuration"},"2. Choose your SSL Configuration"),(0,l.kt)("p",null,"Rancher Server is designed to be secure by default and requires SSL/TLS configuration."),(0,l.kt)("p",null,"When Rancher is installed on an air gapped Kubernetes cluster, there are two recommended options for the source of the certificate."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If you want terminate SSL/TLS externally, see ",(0,l.kt)("a",{parentName:"p",href:"/reference-guides/installation-references/helm-chart-options#external-tls-termination"},"TLS termination on an External Load Balancer"),"."))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Configuration"),(0,l.kt)("th",{parentName:"tr",align:null},"Chart option"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Requires cert-manager"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rancher Generated Self-Signed Certificates"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ingress.tls.source=rancher")),(0,l.kt)("td",{parentName:"tr",align:null},"Use certificates issued by Rancher's generated CA (self signed)",(0,l.kt)("br",null)," This is the ",(0,l.kt)("strong",{parentName:"td"},"default")," and does not need to be added when rendering the Helm template."),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Certificates from Files"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ingress.tls.source=secret")),(0,l.kt)("td",{parentName:"tr",align:null},"Use your own certificate files by creating Kubernetes Secret(s). ",(0,l.kt)("br",null)," This option must be passed when rendering the Rancher Helm template."),(0,l.kt)("td",{parentName:"tr",align:null},"no")))),(0,l.kt)("h3",{id:"helm-chart-options-for-air-gap-installations"},"Helm Chart Options for Air Gap Installations"),(0,l.kt)("p",null,"When setting up the Rancher Helm template, there are several options in the Helm chart that are designed specifically for air gap installations."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Chart Option"),(0,l.kt)("th",{parentName:"tr",align:null},"Chart Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"certmanager.version")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<version>")),(0,l.kt)("td",{parentName:"tr",align:null},"Configure proper Rancher TLS issuer depending of running cert-manager version.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"systemDefaultRegistry")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<REGISTRY.YOURDOMAIN.COM:PORT>")),(0,l.kt)("td",{parentName:"tr",align:null},"Configure Rancher server to always pull from your private registry when provisioning clusters.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"useBundledSystemChart")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:null},"Configure Rancher server to use the packaged copy of Helm system charts. The ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/rancher/system-charts"},"system charts")," repository contains all the catalog items required for features such as monitoring, logging, alerting and global DNS. These ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/rancher/system-charts"},"Helm charts")," are located in GitHub, but since you are in an air gapped environment, using the charts that are bundled within Rancher is much easier than setting up a Git mirror.")))),(0,l.kt)("h3",{id:"3-render-the-rancher-helm-template"},"3. Render the Rancher Helm Template"),(0,l.kt)("p",null,"Based on the choice your made in ",(0,l.kt)("a",{parentName:"p",href:"#2-choose-your-ssl-configuration"},"2. Choose your SSL Configuration"),", complete one of the procedures below."),(0,l.kt)("h4",{id:"option-a-default-self-signed-certificate"},"Option A: Default Self-Signed Certificate"),(0,l.kt)("p",null,"By default, Rancher generates a CA and uses cert-manager to issue the certificate for access to the Rancher server interface."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Recent changes to cert-manager require an upgrade. If you are upgrading Rancher and using a version of cert-manager older than v0.11.0, please see our ",(0,l.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/resources/upgrade-cert-manager"},"upgrade cert-manager documentation"),"."))),(0,l.kt)("h5",{id:"1-add-the-cert-manager-repo"},"1. Add the cert-manager repo"),(0,l.kt)("p",null,"From a system connected to the internet, add the cert-manager repo to Helm:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plain"},"helm repo add jetstack https://charts.jetstack.io\nhelm repo update\n")),(0,l.kt)("h5",{id:"2-fetch-the-cert-manager-chart"},"2. Fetch the cert-manager chart"),(0,l.kt)("p",null,"Fetch the latest cert-manager chart available from the ",(0,l.kt)("a",{parentName:"p",href:"https://artifacthub.io/packages/helm/cert-manager/cert-manager"},"Helm chart repository"),"."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"New in v2.6.4, cert-manager versions 1.6.2 and 1.7.1 are compatible. We recommend v1.7.x because v 1.6.x will reach end-of-life on March 30, 2022."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plain"},"helm fetch jetstack/cert-manager --version v1.7.1\n")),(0,l.kt)("h5",{id:"3-render-the-cert-manager-template"},"3. Render the cert-manager template"),(0,l.kt)("p",null,"Render the cert-manager template with the options you would like to use to install the chart. Remember to set the ",(0,l.kt)("inlineCode",{parentName:"p"},"image.repository")," option to pull the image from your private registry. This will create a ",(0,l.kt)("inlineCode",{parentName:"p"},"cert-manager")," directory with the Kubernetes manifest files."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plain"},"helm template cert-manager ./cert-manager-v1.7.1.tgz --output-dir . \\\n    --namespace cert-manager \\\n    --set image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-controller \\\n    --set webhook.image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-webhook \\\n    --set cainjector.image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-cainjector \\\n    --set startupapicheck.image.repository=<REGISTRY.YOURDOMAIN.COM:PORT>/quay.io/jetstack/cert-manager-ctl\n")),(0,l.kt)("h5",{id:"4-download-the-cert-manager-crd"},"4. Download the cert-manager CRD"),(0,l.kt)("p",null,"Download the required CRD file for cert-manager:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plain"},"curl -L -o cert-manager/cert-manager-crd.yaml https://github.com/cert-manager/cert-manager/releases/download/v1.7.1/cert-manager.crds.yaml\n")),(0,l.kt)("h5",{id:"5-render-the-rancher-template"},"5. Render the Rancher template"),(0,l.kt)("p",null,"Render the Rancher template, declaring your chosen options. Use the reference table below to replace each placeholder. Rancher needs to be configured to use the private registry in order to provision any Rancher launched Kubernetes clusters or Rancher tools."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<VERSION>")),(0,l.kt)("td",{parentName:"tr",align:null},"The version number of the output tarball.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<RANCHER.YOURDOMAIN.COM>")),(0,l.kt)("td",{parentName:"tr",align:null},"The DNS name you pointed at your load balancer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<REGISTRY.YOURDOMAIN.COM:PORT>")),(0,l.kt)("td",{parentName:"tr",align:null},"The DNS name for your private registry.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<CERTMANAGER_VERSION>")),(0,l.kt)("td",{parentName:"tr",align:null},"Cert-manager version running on k8s cluster.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plain"},"helm template rancher ./rancher-<VERSION>.tgz --output-dir . \\\n    --no-hooks \\ # prevent files for Helm hooks from being generated\n    --namespace cattle-system \\\n    --set hostname=<RANCHER.YOURDOMAIN.COM> \\\n    --set certmanager.version=<CERTMANAGER_VERSION> \\\n    --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n    --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Set a default private registry to be used in Rancher\n    --set useBundledSystemChart=true # Use the packaged Rancher system charts\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Optional"),": To install a specific Rancher version, set the ",(0,l.kt)("inlineCode",{parentName:"p"},"rancherImageTag")," value, example: ",(0,l.kt)("inlineCode",{parentName:"p"},"--set rancherImageTag=v2.5.8")),(0,l.kt)("h4",{id:"option-b-certificates-from-files-using-kubernetes-secrets"},"Option B: Certificates From Files using Kubernetes Secrets"),(0,l.kt)("h5",{id:"1-create-secrets"},"1. Create secrets"),(0,l.kt)("p",null,"Create Kubernetes secrets from your own certificates for Rancher to use. The common name for the cert will need to match the ",(0,l.kt)("inlineCode",{parentName:"p"},"hostname")," option in the command below, or the ingress controller will fail to provision the site for Rancher."),(0,l.kt)("h5",{id:"2-render-the-rancher-template"},"2. Render the Rancher template"),(0,l.kt)("p",null,"Render the Rancher template, declaring your chosen options. Use the reference table below to replace each placeholder. Rancher needs to be configured to use the private registry in order to provision any Rancher launched Kubernetes clusters or Rancher tools."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Placeholder"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<VERSION>")),(0,l.kt)("td",{parentName:"tr",align:null},"The version number of the output tarball.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<RANCHER.YOURDOMAIN.COM>")),(0,l.kt)("td",{parentName:"tr",align:null},"The DNS name you pointed at your load balancer.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<REGISTRY.YOURDOMAIN.COM:PORT>")),(0,l.kt)("td",{parentName:"tr",align:null},"The DNS name for your private registry.")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plain"},"   helm template rancher ./rancher-<VERSION>.tgz --output-dir . \\\n    --no-hooks \\ # prevent files for Helm hooks from being generated\n    --namespace cattle-system \\\n    --set hostname=<RANCHER.YOURDOMAIN.COM> \\\n    --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n    --set ingress.tls.source=secret \\\n    --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Set a default private registry to be used in Rancher\n    --set useBundledSystemChart=true # Use the packaged Rancher system charts\n")),(0,l.kt)("p",null,"If you are using a Private CA signed cert, add ",(0,l.kt)("inlineCode",{parentName:"p"},"--set privateCA=true")," following ",(0,l.kt)("inlineCode",{parentName:"p"},"--set ingress.tls.source=secret"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plain"},"   helm template rancher ./rancher-<VERSION>.tgz --output-dir . \\\n    --no-hooks \\ # prevent files for Helm hooks from being generated\n    --namespace cattle-system \\\n    --set hostname=<RANCHER.YOURDOMAIN.COM> \\\n    --set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \\\n    --set ingress.tls.source=secret \\\n    --set privateCA=true \\\n    --set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \\ # Set a default private registry to be used in Rancher\n    --set useBundledSystemChart=true # Use the packaged Rancher system charts\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Optional"),": To install a specific Rancher version, set the ",(0,l.kt)("inlineCode",{parentName:"p"},"rancherImageTag")," value, example: ",(0,l.kt)("inlineCode",{parentName:"p"},"--set rancherImageTag=v2.3.6")),(0,l.kt)("p",null,"Then refer to ",(0,l.kt)("a",{parentName:"p",href:"/getting-started/installation-and-upgrade/resources/add-tls-secrets"},"Adding TLS Secrets")," to publish the certificate files so Rancher and the ingress controller can use them."),(0,l.kt)("h3",{id:"4-install-rancher"},"4. Install Rancher"),(0,l.kt)("p",null,"Copy the rendered manifest directories to a system that has access to the Rancher server cluster to complete installation."),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl")," to create namespaces and apply the rendered manifests."),(0,l.kt)("p",null,"If you choose to use self-signed certificates in ",(0,l.kt)("a",{parentName:"p",href:"#b-choose-your-ssl-configuration"},"B. Choose your SSL Configuration"),", install cert-manager."),(0,l.kt)("h4",{id:"for-self-signed-certificate-installs-install-cert-manager"},"For Self-Signed Certificate Installs, Install Cert-manager"),(0,l.kt)("details",{id:"install-cert-manager"},(0,l.kt)("summary",null,"Click to expand"),(0,l.kt)("p",null,"If you are using self-signed certificates, install cert-manager:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create the namespace for cert-manager."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl create namespace cert-manager\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Create the cert-manager CustomResourceDefinitions (CRDs)."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl apply -f cert-manager/cert-manager-crd.yaml\n")),(0,l.kt)("div",{parentName:"li",className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If you are running Kubernetes v1.15 or below, you will need to add the ",(0,l.kt)("inlineCode",{parentName:"p"},"--validate=false")," flag to your ",(0,l.kt)("inlineCode",{parentName:"p"},"kubectl apply")," command above, or else you will receive a validation error relating to the ",(0,l.kt)("inlineCode",{parentName:"p"},"x-kubernetes-preserve-unknown-fields")," field in cert-manager\u2019s CustomResourceDefinition resources. This is a benign error and occurs due to the way kubectl performs resource validation.")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Launch cert-manager."),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl apply -R -f ./cert-manager\n"))))),(0,l.kt)("h4",{id:"install-rancher-with-kubectl"},"Install Rancher with kubectl"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plain"},"kubectl create namespace cattle-system\nkubectl -n cattle-system apply -R -f ./rancher\n")),(0,l.kt)("p",null,"The installation is complete."),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"If you don't intend to send telemetry data, opt out ",(0,l.kt)("a",{parentName:"p",href:"/faq/telemetry"},"telemetry")," during the initial login. Leaving this active in an air-gapped environment can cause issues if the sockets cannot be opened successfully."))),(0,l.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,l.kt)("p",null,"These resources could be helpful when installing Rancher:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/reference-guides/installation-references/helm-chart-options"},"Rancher Helm chart options")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/getting-started/installation-and-upgrade/resources/add-tls-secrets"},"Adding TLS secrets")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/troubleshooting"},"Troubleshooting Rancher Kubernetes Installations"))))}h.isMDXComponent=!0}}]);