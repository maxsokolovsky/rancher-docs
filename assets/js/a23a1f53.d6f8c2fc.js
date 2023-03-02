"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[78855],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=u(n),m=o,d=g["".concat(i,".").concat(m)]||g[m]||c[m]||l;return n?a.createElement(d,r(r({ref:t},p),{},{components:n})):a.createElement(d,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=g;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8285:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const l={title:"Outputs and ClusterOutputs"},r=void 0,s={unversionedId:"integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs",id:"integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs",title:"Outputs and ClusterOutputs",description:"See the Logging operator documentation for the full details on how to configure  Flows and ClusterFlows.",source:"@site/docs/integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs.md",sourceDirName:"integrations-in-rancher/logging/custom-resource-configuration",slug:"/integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs",permalink:"/integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/docs/integrations-in-rancher/logging/custom-resource-configuration/outputs-and-clusteroutputs.md",tags:[],version:"current",lastUpdatedAt:1677610090,formattedLastUpdatedAt:"Feb 28, 2023",frontMatter:{title:"Outputs and ClusterOutputs"},sidebar:"tutorialSidebar",previous:{title:"Flows and ClusterFlows",permalink:"/integrations-in-rancher/logging/custom-resource-configuration/flows-and-clusterflows"},next:{title:"Monitoring and Alerting",permalink:"/pages-for-subheaders/monitoring-and-alerting"}},i={},u=[{value:"Outputs",id:"outputs",level:2},{value:"ClusterOutputs",id:"clusteroutputs",level:2},{value:"YAML Examples",id:"yaml-examples",level:2},{value:"Cluster Output to ElasticSearch",id:"cluster-output-to-elasticsearch",level:3},{value:"Output to Splunk",id:"output-to-splunk",level:3},{value:"Output to Syslog",id:"output-to-syslog",level:3},{value:"Unsupported Outputs",id:"unsupported-outputs",level:3}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://kube-logging.github.io/docs/configuration/flow/"},"Logging operator documentation")," for the full details on how to configure  ",(0,o.kt)("inlineCode",{parentName:"p"},"Flows")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ClusterFlows"),"."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/pages-for-subheaders/logging#The-Logging-Buffer-Overloads-Pods"},"Rancher Integration with Logging Services: Troubleshooting")," for how to resolve memory problems with the logging buffer."),(0,o.kt)("h2",{id:"outputs"},"Outputs"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Output")," resource defines where your ",(0,o.kt)("inlineCode",{parentName:"p"},"Flows")," can send the log messages. ",(0,o.kt)("inlineCode",{parentName:"p"},"Outputs")," are the final stage for a logging ",(0,o.kt)("inlineCode",{parentName:"p"},"Flow"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Output")," is a namespaced resource, which means only a ",(0,o.kt)("inlineCode",{parentName:"p"},"Flow")," within the same namespace can access it."),(0,o.kt)("p",null,"You can use secrets in these definitions, but they must also be in the same namespace."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Outputs")," can be configured by filling out forms in the Rancher UI."),(0,o.kt)("p",null,"For the details of ",(0,o.kt)("inlineCode",{parentName:"p"},"Output")," custom resource, see ",(0,o.kt)("a",{parentName:"p",href:"https://kube-logging.github.io/docs/configuration/crds/v1beta1/output_types/"},"OutputSpec."),"."),(0,o.kt)("p",null,"The Rancher UI provides forms for configuring the following ",(0,o.kt)("inlineCode",{parentName:"p"},"Output")," types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Amazon ElasticSearch"),(0,o.kt)("li",{parentName:"ul"},"Azure Storage"),(0,o.kt)("li",{parentName:"ul"},"Cloudwatch"),(0,o.kt)("li",{parentName:"ul"},"Datadog"),(0,o.kt)("li",{parentName:"ul"},"Elasticsearch"),(0,o.kt)("li",{parentName:"ul"},"File"),(0,o.kt)("li",{parentName:"ul"},"Fluentd"),(0,o.kt)("li",{parentName:"ul"},"GCS"),(0,o.kt)("li",{parentName:"ul"},"Kafka"),(0,o.kt)("li",{parentName:"ul"},"Kinesis Stream"),(0,o.kt)("li",{parentName:"ul"},"LogDNA"),(0,o.kt)("li",{parentName:"ul"},"LogZ"),(0,o.kt)("li",{parentName:"ul"},"Loki"),(0,o.kt)("li",{parentName:"ul"},"New Relic"),(0,o.kt)("li",{parentName:"ul"},"Splunk"),(0,o.kt)("li",{parentName:"ul"},"SumoLogic"),(0,o.kt)("li",{parentName:"ul"},"Syslog")),(0,o.kt)("p",null,"The Rancher UI provides forms for configuring the ",(0,o.kt)("inlineCode",{parentName:"p"},"Output")," type, target, and access credentials if applicable."),(0,o.kt)("p",null,"For example configuration for each logging plugin supported by the logging operator, see the ",(0,o.kt)("a",{parentName:"p",href:"https://kube-logging.github.io/docs/configuration/plugins/outputs/"},"Logging operator documentation"),"."),(0,o.kt)("h2",{id:"clusteroutputs"},"ClusterOutputs"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ClusterOutput")," defines an ",(0,o.kt)("inlineCode",{parentName:"p"},"Output")," without namespace restrictions. It is only effective when deployed in the same namespace as the logging operator."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ClusterOutputs")," can be configured by filling out forms in the Rancher UI."),(0,o.kt)("p",null,"For the details of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ClusterOutput")," custom resource, see ",(0,o.kt)("a",{parentName:"p",href:"https://kube-logging.github.io/docs/configuration/crds/v1beta1/clusteroutput_types/"},"ClusterOutput.")),(0,o.kt)("h2",{id:"yaml-examples"},"YAML Examples"),(0,o.kt)("p",null,"Once logging is installed, you can use these examples to help craft your own logging pipeline."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#cluster-output-to-elasticsearch"},"Cluster Output to ElasticSearch")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#output-to-splunk"},"Output to Splunk")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#output-to-syslog"},"Output to Syslog")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#unsupported-outputs"},"Unsupported Outputs"))),(0,o.kt)("h3",{id:"cluster-output-to-elasticsearch"},"Cluster Output to ElasticSearch"),(0,o.kt)("p",null,"Let's say you wanted to send all logs in your cluster to an ",(0,o.kt)("inlineCode",{parentName:"p"},"elasticsearch")," cluster. First, we create a cluster ",(0,o.kt)("inlineCode",{parentName:"p"},"Output"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: logging.banzaicloud.io/v1beta1\nkind: ClusterOutput\nmetadata:\n    name: "example-es"\n    namespace: "cattle-logging-system"\nspec:\n    elasticsearch:\n      host: elasticsearch.example.com\n      port: 9200\n      scheme: http\n')),(0,o.kt)("p",null,"We have created this ",(0,o.kt)("inlineCode",{parentName:"p"},"ClusterOutput"),", without elasticsearch configuration, in the same namespace as our operator: ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-logging-system."),". Any time we create a ",(0,o.kt)("inlineCode",{parentName:"p"},"ClusterFlow")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"ClusterOutput"),", we have to put it in the ",(0,o.kt)("inlineCode",{parentName:"p"},"cattle-logging-system")," namespace."),(0,o.kt)("p",null,"Now that we have configured where we want the logs to go, let's configure all logs to go to that ",(0,o.kt)("inlineCode",{parentName:"p"},"ClusterOutput"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: logging.banzaicloud.io/v1beta1\nkind: ClusterFlow\nmetadata:\n    name: "all-logs"\n    namespace: "cattle-logging-system"\nspec:\n  globalOutputRefs:\n    - "example-es"\n')),(0,o.kt)("p",null,"We should now see our configured index with logs in it."),(0,o.kt)("h3",{id:"output-to-splunk"},"Output to Splunk"),(0,o.kt)("p",null,"What if we have an application team who only wants logs from a specific namespaces sent to a ",(0,o.kt)("inlineCode",{parentName:"p"},"splunk")," server? For this case, we can use namespaced ",(0,o.kt)("inlineCode",{parentName:"p"},"Outputs")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Flows"),"."),(0,o.kt)("p",null,"Before we start, let's set up that team's application: ",(0,o.kt)("inlineCode",{parentName:"p"},"coolapp"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Namespace\nmetadata:\n  name: devteam\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: coolapp\n  namespace: devteam\n  labels:\n    app: coolapp\nspec:\n  replicas: 2\n  selector:\n    matchLabels:\n      app: coolapp\n  template:\n    metadata:\n      labels:\n        app: coolapp\n    spec:\n      containers:\n        - name: generator\n          image: paynejacob/loggenerator:latest\n")),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},"coolapp")," running, we will follow a similar path as when we created a ",(0,o.kt)("inlineCode",{parentName:"p"},"ClusterOutput"),". However, unlike ",(0,o.kt)("inlineCode",{parentName:"p"},"ClusterOutputs"),", we create our ",(0,o.kt)("inlineCode",{parentName:"p"},"Output")," in our application's namespace."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: logging.banzaicloud.io/v1beta1\nkind: Output\nmetadata:\n  name: "devteam-splunk"\n  namespace: "devteam"\nspec:\n  splunkHec:\n    hec_host: splunk.example.com\n    hec_port: 8088\n    protocol: http\n')),(0,o.kt)("p",null,"Once again, let's feed our ",(0,o.kt)("inlineCode",{parentName:"p"},"Output")," some logs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: logging.banzaicloud.io/v1beta1\nkind: Flow\nmetadata:\n  name: "devteam-logs"\n  namespace: "devteam"\nspec:\n  localOutputRefs:\n    - "devteam-splunk"\n')),(0,o.kt)("h3",{id:"output-to-syslog"},"Output to Syslog"),(0,o.kt)("p",null,"Let's say you wanted to send all logs in your cluster to an ",(0,o.kt)("inlineCode",{parentName:"p"},"syslog")," server. First, we create a ",(0,o.kt)("inlineCode",{parentName:"p"},"ClusterOutput"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: logging.banzaicloud.io/v1beta1\nkind: ClusterOutput\nmetadata:\n  name: "example-syslog"\n  namespace: "cattle-logging-system"\nspec:\n  syslog:\n    buffer:\n      timekey: 30s\n      timekey_use_utc: true\n      timekey_wait: 10s\n      flush_interval: 5s\n    format:\n      type: json\n      app_name_field: test\n    host: syslog.example.com\n    insecure: true\n    port: 514\n    transport: tcp\n')),(0,o.kt)("p",null,"Now that we have configured where we want the logs to go, let's configure all logs to go to that ",(0,o.kt)("inlineCode",{parentName:"p"},"Output"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: logging.banzaicloud.io/v1beta1\nkind: ClusterFlow\nmetadata:\n  name: "all-logs"\n  namespace: cattle-logging-system\nspec:\n  globalOutputRefs:\n    - "example-syslog"\n')),(0,o.kt)("h3",{id:"unsupported-outputs"},"Unsupported Outputs"),(0,o.kt)("p",null,"For the final example, we create an ",(0,o.kt)("inlineCode",{parentName:"p"},"Output")," to write logs to a destination that is not supported out of the box:"),(0,o.kt)("admonition",{title:"Note on syslog:",type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"syslog")," is a supported ",(0,o.kt)("inlineCode",{parentName:"p"},"Output"),". However, this example still provides an overview on using unsupported plugins.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Secret\nmetadata:\n  name: syslog-config\n  namespace: cattle-logging-system\ntype: Opaque\nstringData:\n  fluent-bit.conf: |\n    [INPUT]\n        Name              forward\n        Port              24224\n\n    [OUTPUT]\n        Name              syslog\n        InstanceName      syslog-output\n        Match             *\n        Addr              syslog.example.com\n        Port              514\n        Cluster           ranchers\n\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: fluentbit-syslog-forwarder\n  namespace: cattle-logging-system\n  labels:\n    output: syslog\nspec:\n  selector:\n    matchLabels:\n      output: syslog\n  template:\n    metadata:\n      labels:\n        output: syslog\n    spec:\n      containers:\n      - name: fluentbit\n        image: paynejacob/fluent-bit-out-syslog:latest\n        ports:\n          - containerPort: 24224\n        volumeMounts:\n          - mountPath: "/fluent-bit/etc/"\n            name: configuration\n      volumes:\n      - name: configuration\n        secret:\n          secretName: syslog-config\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: syslog-forwarder\n  namespace: cattle-logging-system\nspec:\n  selector:\n    output: syslog\n  ports:\n    - protocol: TCP\n      port: 24224\n      targetPort: 24224\n---\napiVersion: logging.banzaicloud.io/v1beta1\nkind: ClusterFlow\nmetadata:\n  name: all-logs\n  namespace: cattle-logging-system\nspec:\n  globalOutputRefs:\n    - syslog\n---\napiVersion: logging.banzaicloud.io/v1beta1\nkind: ClusterOutput\nmetadata:\n  name: syslog\n  namespace: cattle-logging-system\nspec:\n  forward:\n    servers:\n      - host: "syslog-forwarder.cattle-logging-system"\n    require_ack_response: false\n    ignore_network_errors_at_startup: false\n')),(0,o.kt)("p",null,"Let's break down what is happening here. First, we create a deployment of a container that has the additional ",(0,o.kt)("inlineCode",{parentName:"p"},"syslog")," plugin and accepts logs forwarded from another ",(0,o.kt)("inlineCode",{parentName:"p"},"fluentd"),". Next we create an ",(0,o.kt)("inlineCode",{parentName:"p"},"Output")," configured as a forwarder to our deployment. The deployment ",(0,o.kt)("inlineCode",{parentName:"p"},"fluentd")," will then forward all logs to the configured ",(0,o.kt)("inlineCode",{parentName:"p"},"syslog")," destination."))}c.isMDXComponent=!0}}]);