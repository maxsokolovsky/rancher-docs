"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[14114],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?a.createElement(h,o(o({ref:t},p),{},{components:r})):a.createElement(h,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},46858:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={title:"Rancher DigitalOcean Quick Start Guide",description:"Read this step by step Rancher DigitalOcean guide to quickly deploy a Rancher Server with a single node cluster attached."},o=void 0,l={unversionedId:"getting-started/quick-start-guides/deploy-rancher-manager/digitalocean",id:"version-2.0-2.4/getting-started/quick-start-guides/deploy-rancher-manager/digitalocean",title:"Rancher DigitalOcean Quick Start Guide",description:"Read this step by step Rancher DigitalOcean guide to quickly deploy a Rancher Server with a single node cluster attached.",source:"@site/versioned_docs/version-2.0-2.4/getting-started/quick-start-guides/deploy-rancher-manager/digitalocean.md",sourceDirName:"getting-started/quick-start-guides/deploy-rancher-manager",slug:"/getting-started/quick-start-guides/deploy-rancher-manager/digitalocean",permalink:"/v2.0-v2.4/getting-started/quick-start-guides/deploy-rancher-manager/digitalocean",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.0-2.4/getting-started/quick-start-guides/deploy-rancher-manager/digitalocean.md",tags:[],version:"2.0-2.4",lastUpdatedAt:1674508220,formattedLastUpdatedAt:"Jan 23, 2023",frontMatter:{title:"Rancher DigitalOcean Quick Start Guide",description:"Read this step by step Rancher DigitalOcean guide to quickly deploy a Rancher Server with a single node cluster attached."},sidebar:"tutorialSidebar",previous:{title:"Rancher Azure Quick Start Guide",permalink:"/v2.0-v2.4/getting-started/quick-start-guides/deploy-rancher-manager/azure"},next:{title:"Rancher GCP Quick Start Guide",permalink:"/v2.0-v2.4/getting-started/quick-start-guides/deploy-rancher-manager/gcp"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Result",id:"result",level:4},{value:"What&#39;s Next?",id:"whats-next",level:3},{value:"Destroying the Environment",id:"destroying-the-environment",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The following steps will quickly deploy a Rancher Server on DigitalOcean with a single node cluster attached."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note:")," The intent of these guides is to quickly launch a sandbox that you can use to evaluate Rancher. These guides are not intended for production environments. For comprehensive setup instructions, see ",(0,n.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/installation-and-upgrade"},"Installation"),".")),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Note"),"\nDeploying to DigitalOcean will incur charges.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.digitalocean.com"},"DigitalOcean Account"),": You will require an account on DigitalOcean as this is where the server and cluster will run."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/tutorials/how-to-create-a-digitalocean-space-and-api-key"},"DigitalOcean Access Key"),": Use this link to create a DigitalOcean Access Key if you don't have one."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.terraform.io/downloads.html"},"Terraform"),": Used to provision the server and cluster to DigitalOcean.")),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Clone ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/quickstart"},"Rancher Quickstart")," to a folder using ",(0,n.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/rancher/quickstart"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go into the DigitalOcean folder containing the Terraform files by executing ",(0,n.kt)("inlineCode",{parentName:"p"},"cd quickstart/do"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Rename the ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform.tfvars.example")," file to ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform.tfvars"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Edit ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform.tfvars")," and customize the following variables:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"do_token")," - DigitalOcean access key"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"rancher_server_admin_password")," - Admin password for created Rancher server"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Optional:")," Modify optional variables within ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform.tfvars"),".\nSee the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/quickstart"},"Quickstart Readme")," and the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/quickstart/tree/master/do"},"DO Quickstart Readme")," for more information.\nSuggestions include:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"- `do_region` - DigitalOcean region, choose the closest instead of the default\n- `prefix` - Prefix for all created resources\n- `droplet_size` - Droplet size used, minimum is `s-2vcpu-4gb` but `s-4vcpu-8gb` could be used if within budget\n- `ssh_key_file_name` - Use a specific SSH key instead of `~/.ssh/id_rsa` (public key is assumed to be `${ssh_key_file_name}.pub`)\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Run ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform init"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"To initiate the creation of the environment, run ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform apply --auto-approve"),". Then wait for output similar to the following:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"Apply complete! Resources: 15 added, 0 changed, 0 destroyed.\n\nOutputs:\n\nrancher_node_ip = xx.xx.xx.xx\nrancher_server_url = https://rancher.xx.xx.xx.xx.sslip.io\nworkload_node_ip = yy.yy.yy.yy\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Paste the ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher_server_url")," from the output above into the browser. Log in when prompted (default username is ",(0,n.kt)("inlineCode",{parentName:"p"},"admin"),", use the password set in ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher_server_admin_password"),")."))),(0,n.kt)("h4",{id:"result"},"Result"),(0,n.kt)("p",null,"Two Kubernetes clusters are deployed into your DigitalOcean account, one running Rancher Server and the other ready for experimentation deployments."),(0,n.kt)("h3",{id:"whats-next"},"What's Next?"),(0,n.kt)("p",null,"Use Rancher to create a deployment. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"/v2.0-v2.4/pages-for-subheaders/deploy-rancher-workloads"},"Creating Deployments"),"."),(0,n.kt)("h2",{id:"destroying-the-environment"},"Destroying the Environment"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the ",(0,n.kt)("inlineCode",{parentName:"p"},"quickstart/do")," folder, execute ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform destroy --auto-approve"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Wait for confirmation that all resources have been destroyed."))))}d.isMDXComponent=!0}}]);