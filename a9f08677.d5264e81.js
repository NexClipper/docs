(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{137:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var a=r(2),n=r(6),o=(r(0),r(189)),i={title:"Prometheus at NexClipper",author:"Jinwoong Kim",author_title:"NexClipper",author_url:"https://github.com/ddiiwoong",author_image_url:"https://avatars1.githubusercontent.com/u/37430952?v=4",description:"Summarize the issues that arise in operating Prometheus at the enterprise level and introduce NexClipper's development roadmap to solve them.",tags:["Prometheus","Exporter","NexClipper"]},s={permalink:"/blog/2020/11/09/prometheus-at-nexcilpper",editUrl:"https://github.com/NexClipper/docs/edit/master/blog/blog/2020-11-09-prometheus-at-nexcilpper.md",source:"@site/blog/2020-11-09-prometheus-at-nexcilpper.md",description:"Summarize the issues that arise in operating Prometheus at the enterprise level and introduce NexClipper's development roadmap to solve them.",date:"2020-11-09T00:00:00.000Z",tags:[{label:"Prometheus",permalink:"/blog/tags/prometheus"},{label:"Exporter",permalink:"/blog/tags/exporter"},{label:"NexClipper",permalink:"/blog/tags/nex-clipper"}],title:"Prometheus at NexClipper",readingTime:6.985,truncated:!0,prevItem:{title:"Prometheus at NexClipper(Korean)",permalink:"/blog/2020/11/09/prometheus-at-nexcilpper-ko"},nextItem:{title:"Prometheus Exporter & ExporterHub (Eng.)",permalink:"/blog/2020/09/25/prometheus-exporter-exporterhub-en"}},l=[{value:"Overview for Monitoring Kubernetes",id:"overview-for-monitoring-kubernetes",children:[]},{value:"Prometheus Components",id:"prometheus-components",children:[]},{value:"How to install Prometheus",id:"how-to-install-prometheus",children:[]},{value:"Advantages of using Prometheus",id:"advantages-of-using-prometheus",children:[]},{value:"Cons of Prometheus",id:"cons-of-prometheus",children:[]},{value:"NexClipper",id:"nexclipper",children:[{value:"Prometheus ecosystem can be quickly and easily deployed in any production environment. (https://github.com/NexClipper/provbee)",id:"prometheus-ecosystem-can-be-quickly-and-easily-deployed-in-any-production-environment-httpsgithubcomnexclipperprovbee",children:[]},{value:"Similar to the Bastion Host role in a closed environment where a firewall exists, the open source-based task manager (https://github.com/NexClipper/klevr) runs various jobs, it can be operated even in a Private cloud environment.",id:"similar-to-the-bastion-host-role-in-a-closed-environment-where-a-firewall-exists-the-open-source-based-task-manager-httpsgithubcomnexclipperklevr-runs-various-jobs-it-can-be-operated-even-in-a-private-cloud-environment",children:[]},{value:"Provides convenient functions related to queries and rules.",id:"provides-convenient-functions-related-to-queries-and-rules",children:[]}]},{value:"Summary",id:"summary",children:[]},{value:"Introduce NexClipper and Career",id:"introduce-nexclipper-and-career",children:[]}],c={rightToc:l};function u(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this post, I summarize the issues that arise in operating Prometheus at the enterprise level and introduce NexClipper's development roadmap to solve them."),Object(o.b)("h2",{id:"overview-for-monitoring-kubernetes"},"Overview for Monitoring Kubernetes"),Object(o.b)("p",null,"Kubernetes is the first project to graduate from the Cloud Native Computing Foundation (CNCF), and it is currently the de facto standard for container orchestration, encompassing IaaS and PaaS, and has grown tremendously in just a few years, revitalizing the community, and many companies have adopted it in real production environments."),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/kubernetes/community/blob/master/contributors/design-proposals/instrumentation/monitoring_architecture.md#architecture"}),"https://github.com/kubernetes/community/blob/master/contributors/design-proposals/instrumentation/monitoring_architecture.md#architecture"),"  "),Object(o.b)("p",null,"The basic Kubernetes metric description is divided into system metrics and service metrics, and monitoring methods are largely divided into core metric pipeline and monitoring pipeline."),Object(o.b)("p",null,"Initially, Heapster was widely used in conjunction with Kubernetes as a monitoring solution, as indicated in that document. It started as a tool that transmits monitoring data to an external system, and has since grown into its own monitoring system. However, hipster was deprecated in Kubernetes version 1.11, and most components of Kubernetes clusters after 1.13 are supported by Prometheus to measure in cloud native way."),Object(o.b)("h2",{id:"prometheus-components"},"Prometheus Components"),Object(o.b)("p",null,"Kubernetes monitoring is based on cluster monitoring by default. As you monitor your cluster, you can get information about the overall health and workloads of the system, such as checking the utilization of nodes and the number of pods running. Next, we describe the services and tools most used among the various ecosystems.  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Prometheus : Open source time series database"),Object(o.b)("li",{parentName:"ul"},"kube-state-metric : Service that generates metrics information of various objects and workloads in kubernetes cluster"),Object(o.b)("li",{parentName:"ul"},"node_exporter : Service that generates hardware and OS metric information exposed by the *NIX kernel"),Object(o.b)("li",{parentName:"ul"},"pushgateway : Receive and provide metrics for ad-hoc and small batch jobs"),Object(o.b)("li",{parentName:"ul"},"alertmanager : Service that handles (deduplication, grouping, and sending) notifications sent from Prometheus server"),Object(o.b)("li",{parentName:"ul"},"grafana : Dashboard visualization tool for monitoring and metric analysis")),Object(o.b)("h2",{id:"how-to-install-prometheus"},"How to install Prometheus"),Object(o.b)("p",null,"How to install Prometheus is not difficult. However, understanding and using everything and just deploying with Getting Started have very different differences due to actual operation in the future.  "),Object(o.b)("p",null,"There are two main ways to configure it yourself. You can run the already compiled binary or build the source yourself and install it using Docker. In addition, it can be installed using configuration management tools such as Ansible and Puppet."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://prometheus.io/docs/prometheus/latest/installation/"}),"https://prometheus.io/docs/prometheus/latest/installation/"))),Object(o.b)("p",null,"The Prometheus community basically provides Helm Charts in beta.  "),Object(o.b)("p",null,"You can simply deploy Alertmanager and Prometheus alone, or simply use it for deploying various exporters.  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/prometheus-community/helm-charts"}),"https://github.com/prometheus-community/helm-chart"))),Object(o.b)("p",null,"Prometheus Operators use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/"}),"Custom Resources")," by default to simplify deployment and configuration of Prometheus, Alert Manager, and related ecosystems.  "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/prometheus-operator/prometheus-operator"}),"https://github.com/prometheus-operator/prometheus-operator"))),Object(o.b)("p",null,"Alternatively, it can be deployed through the kube-prometheus-stack helm chart that includes the operator above."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/prometheus-operator/kube-prometheus"}),"https://github.com/prometheus-operator/kube-prometheus"))),Object(o.b)("h2",{id:"advantages-of-using-prometheus"},"Advantages of using Prometheus"),Object(o.b)("p",null,"There are several advantages to using Prometheus as a monitoring tool for Kubernetes."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Ease of management: The key to Prometheus is that it is easy to manage. Since it operates as a single binary file without separate installation, it basically only needs a local disk and has few dependencies with other solutions such as database or cache."),Object(o.b)("li",{parentName:"ul"},"Service Discovery: Basically, file or DNS-based service discovery can be configured, so the target to be scraped is basically registered through the DNS domain name that is periodically queried. In the Kubernetes REST API, you can search for what to scrap and stay in sync with your Kubernetes cluster at all times.")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#kubernetes_sd_config"}),"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#kubernetes_sd_config")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Powerful and easy data model: All collected monitoring data is stored in metric format in the built-in time series database (TSDB). And in addition to the default name, every sample contains a set of tags that describe the characteristics of the sample. Each time series data is uniquely identified by a metric name and a key-value pair called an optional label. Each time series data stores a series of sample values \u200b\u200bin chronological order. Each sample consists of a float64 value and a timestamp in milliseconds.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Query Language (PromQL): Easily query and aggregate monitoring data based on labels and time series. You can apply functions and operators to metric queries, filter and group by label, and even use regular expressions for matching and filtering. PromQL is also used for data visualization or alerts, notifications such as Grafana.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Monitoring internal status due to pull collection method: Prometheus recommends that users monitor the internal status of the service themselves. You can check the metric status of the actual application or solution using various client libraries or exporters."))),Object(o.b)("h2",{id:"cons-of-prometheus"},"Cons of Prometheus"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Long-term storage: Basically, if 100,000 metrics of 3 byte size are stored per second, about 500 GB of storage is used in 30 days. If Prometheus is operated in the form of a local instance or Pod, long-term storage is not easy, and the more monitoring targets, the more data is stored."),Object(o.b)("li",{parentName:"ul"},"Data source redundancy: When Prometheus is installed and operated in multiple clusters, it is not easy to manage in terms of data sources, and when a dashboard such as Grafana is configured, it is difficult to distinguish when querying multiple clusters for the same metric. Because of this, when Prometheus is installed for each cluster, it is difficult to see the data integrated."),Object(o.b)("li",{parentName:"ul"},"There is a lack of group management and user authentication management (security)."),Object(o.b)("li",{parentName:"ul"},"Raw log/event collection is not possible."),Object(o.b)("li",{parentName:"ul"},"Application-based request tracing is not supported by itself."),Object(o.b)("li",{parentName:"ul"},"Additional data analysis capability is required for Anomaly Detection."),Object(o.b)("li",{parentName:"ul"},"Complicated configuration for horizontal scaling and high availability."),Object(o.b)("li",{parentName:"ul"},"It takes a lot of labor and effort to distribute and operate. (Learn PromQL, configure Grafana dashboard, create Alert-Rule, etc.)")),Object(o.b)("h2",{id:"nexclipper"},"NexClipper"),Object(o.b)("p",null,"NexClipper is developing with the following roadmap to solve the problems it has while using the Prometheus ecosystem as it is. We are working hard to add new features while maintaining our existing open source and solutions."),Object(o.b)("p",null,Object(o.b)("img",{alt:"architect",src:r(222).default})),Object(o.b)("p",null,"The following features are currently being developed."),Object(o.b)("h3",{id:"prometheus-ecosystem-can-be-quickly-and-easily-deployed-in-any-production-environment-httpsgithubcomnexclipperprovbee"},"Prometheus ecosystem can be quickly and easily deployed in any production environment. (",Object(o.b)("a",Object(a.a)({parentName:"h3"},{href:"https://github.com/NexClipper/provbee"}),"https://github.com/NexClipper/provbee"),")"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"NexClipper Cloud allows you to quickly and easily deploy Prometheus ecosystem through a simple installation command."),Object(o.b)("li",{parentName:"ul"},"NexClipper On-Premise provides a separate Prometheus server cluster and various ecosystem installation and operation environments in multiple multi-cloud environments."),Object(o.b)("li",{parentName:"ul"},"Long-term storage can be configured based on open source. (Avoiding vendor dependency)"),Object(o.b)("li",{parentName:"ul"},"Provisioned based on PromScale, which is basically composed of TimescaleDB, and storage period and capacity can be increased whenever necessary.")),Object(o.b)("h3",{id:"similar-to-the-bastion-host-role-in-a-closed-environment-where-a-firewall-exists-the-open-source-based-task-manager-httpsgithubcomnexclipperklevr-runs-various-jobs-it-can-be-operated-even-in-a-private-cloud-environment"},"Similar to the Bastion Host role in a closed environment where a firewall exists, the open source-based task manager (",Object(o.b)("a",Object(a.a)({parentName:"h3"},{href:"https://github.com/NexClipper/klevr"}),"https://github.com/NexClipper/klevr"),") runs various jobs, it can be operated even in a Private cloud environment."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Separate charts or resources can be directly distributed, and operation is possible in a private environment that is isolated for security reasons."),Object(o.b)("li",{parentName:"ul"},"Cluster Management or Operation is possible without direct access to KubeAPI."),Object(o.b)("li",{parentName:"ul"},"Remotely modify and manage Prometheus and AlertManager config.")),Object(o.b)("h3",{id:"provides-convenient-functions-related-to-queries-and-rules"},"Provides convenient functions related to queries and rules."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Multiple Prometheus instances can be accessed through a single endpoint and multi-cluster graphana dashboards can be operated while minimizing the movement of multiple data sources."),Object(o.b)("li",{parentName:"ul"},"Promlens(",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/promlabs/promlens-public"}),"https://github.com/promlabs/promlens-public"),") Preview features are included so you can write and test simple queries."),Object(o.b)("li",{parentName:"ul"},"exporter\ub97c \uad00\ub9ac\ud558\ub294 \uae30\ub2a5\uc744 \ud1b5\ud574 \uc27d\uac8c \uc124\uce58\ud558\uace0 \uc6b4\uc601\uc744 \uc704\ud55c AlertRule \uad6c\uc131\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4. (ExporterHub.io, ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/NexClipper/exporterhub.io"}),"https://github.com/NexClipper/exporterhub.io"),")")),Object(o.b)("p",null,"With the ability to manage exporters, you can easily install and configure AlertRule for operation. ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://ExporterHub.io"}),"ExporterHub.io"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/NexClipper/exporterhub.io"}),"https://github.com/NexClipper/exporterhub.io")),Object(o.b)("p",null,"We are working hard to provide many other features."),Object(o.b)("h2",{id:"summary"},"Summary"),Object(o.b)("p",null,"In this post, I also explained the development roadmap of NexClipper in the future to overcome the pros and cons of Prometheus and monitoring in the Kubernetes environment."),Object(o.b)("p",null,"If you have any questions or would like additional information, please visit KubeCon North America 2020 NexClipper Booth."),Object(o.b)("p",null,"If you have any questions or would like more information, please visit NexClipper Booth via KubeCon + CloudNativeCon North America 2020."),Object(o.b)("p",null,"We ask for a variety of feedback on all our technologies and products, including blog content, and if you have any questions at any time, or have any necessary matters such as recruitment and technical meetings, please contact us at ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:support@nexclipper.io"}),"support@nexclipper.io")," and we will reply as soon as possible."),Object(o.b)("h2",{id:"introduce-nexclipper-and-career"},"Introduce NexClipper and Career"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.nexclipper.io/"}),"NexCloud")," is a container-based cloud technology company.\nFrom the second half of 2020, we are currently in the process of establishing a U.S. corporation for full-scale global business, and we are looking for talented people."),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.notion.so/nexclipper/Job-description-63e5113b79a943f28a75c1eca1e0f50a"}),"Product Marketing Manager")))}u.isMDXComponent=!0},189:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),u=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),b=a,d=p["".concat(i,".").concat(b)]||p[b]||m[b]||o;return r?n.a.createElement(d,s(s({ref:t},c),{},{components:r})):n.a.createElement(d,s({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},222:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/nexclipper_architect-78e0205e7a7716f0d1383230db35a37a.png"}}]);