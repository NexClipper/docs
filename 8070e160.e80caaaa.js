(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{129:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),i=(a(0),a(211)),o={id:"quickstart",title:"NexClipper Quick Start",hide_title:!0,description:"Automated Enterprise Prometheus eco-system in your own cluster.",keywords:["guide","installation","setup","quickstart","nexclipper"]},l={unversionedId:"quickstart",id:"quickstart",isDocsHomePage:!1,title:"NexClipper Quick Start",description:"Automated Enterprise Prometheus eco-system in your own cluster.",source:"@site/docs/quickstart.md",slug:"/quickstart",permalink:"/docs/quickstart",editUrl:"https://github.com/NexClipper/docs/edit/master/docs/quickstart.md",version:"current",sidebar:"someSidebar",previous:{title:"Introduction to NexClipper",permalink:"/docs/"},next:{title:"Components",permalink:"/docs/components"}},c=[{value:"Check Environment",id:"check-environment",children:[]},{value:"Install NexClipper",id:"install-nexclipper",children:[]},{value:"Simple Health Dashboard",id:"simple-health-dashboard",children:[]}],s={toc:c};function u(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h1",{id:"nexclipper-quick-start"},"NexClipper Quick Start"),Object(i.a)("p",null,"NexClipper runs in the type of DaemonSet, StatefulSet, and Deployment within your own Kubernetes cluster.",Object(i.a)("br",{parentName:"p"}),"\n","All resources run in the nex-system, nexclipper Namespace by default, and contain ecosystem related to Prometheus."),Object(i.a)("p",null,"If you want to see the quick start run through video, check out below link:"),Object(i.a)("p",null,Object(i.a)("a",{parentName:"p",href:"https://youtu.be/pGSjC2g2Hn0"},Object(i.a)("img",{parentName:"a",src:"http://img.youtube.com/vi/pGSjC2g2Hn0/0.jpg",alt:"quick"}))," "),Object(i.a)("hr",null),Object(i.a)("h2",{id:"check-environment"},"Check Environment"),Object(i.a)("p",null,"NexClipper runs in a Linux environment."),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Operating Systems : Linux(WSL included), MacOS 10.14+"),Object(i.a)("li",{parentName:"ul"},"Software",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},"bash or zsh"),Object(i.a)("li",{parentName:"ul"},"curl"),Object(i.a)("li",{parentName:"ul"},"ssh-keygen"))),Object(i.a)("li",{parentName:"ul"},"Target Kubernetes Cluster : 1.15.12 or higher"),Object(i.a)("li",{parentName:"ul"},"Firewall",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},"Client(WebService) -> Outbound (Destination : console.nexclipper.io, Port: 80,443,8080)"),Object(i.a)("li",{parentName:"ul"},"NexClipper Agent(DaemonSet) -> Outbount (Destination : console.nexclipper.io, Port: 8090)")))),Object(i.a)("div",{className:"admonition admonition-info alert alert--info"},Object(i.a)("div",{parentName:"div",className:"admonition-heading"},Object(i.a)("h5",{parentName:"div"},Object(i.a)("span",{parentName:"h5",className:"admonition-icon"},Object(i.a)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.a)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.a)("div",{parentName:"div",className:"admonition-content"},Object(i.a)("p",{parentName:"div"},"NexClipper Agent has been tested for Kubernetes version 1.15.12 or higher. Problems may occur in lower versions."))),Object(i.a)("p",null,"Run the following command to check the currently connected cluster in an environment that can run bash or zsh. If you have configured your Kubernetes environment with docker-desktop, you are expected to get results similar to the following:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-bash"},"$ kubectl cluster-info\nKubernetes master is running at https://kubernetes.docker.internal:6443\nKubeDNS is running at https://kubernetes.docker.internal:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy\n")),Object(i.a)("hr",null),Object(i.a)("h2",{id:"install-nexclipper"},"Install NexClipper"),Object(i.a)("p",null,"There are two options for installation.  "),Object(i.a)("ol",null,Object(i.a)("li",{parentName:"ol"},"Remote Kubernetes",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},"An environment that can communicate remotely to kube-apiserve (kubeconfig environment)"))),Object(i.a)("li",{parentName:"ol"},"Local Kubernetes",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},"When running locally, such as Docker Desktop, Minikube, K3s, MicroK8s, etc.")))),Object(i.a)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.a)("div",{parentName:"div",className:"admonition-heading"},Object(i.a)("h5",{parentName:"div"},Object(i.a)("span",{parentName:"h5",className:"admonition-icon"},Object(i.a)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.a)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.a)("div",{parentName:"div",className:"admonition-content"},Object(i.a)("p",{parentName:"div"},"You might encounter problems if you install duplicates with an existing operating Prometheus Operator. NexClipper distributes and manages Prometheus-related ecosystem based on Helm."))),Object(i.a)("p",null,"Go to ",Object(i.a)("a",{parentName:"p",href:"https://console.nexclipper.io/login"},"https://console.nexclipper.io/login")," Page. And login with your Account."),Object(i.a)("p",null,Object(i.a)("img",{alt:"img",src:a(230).default})),Object(i.a)("div",{className:"admonition admonition-info alert alert--info"},Object(i.a)("div",{parentName:"div",className:"admonition-heading"},Object(i.a)("h5",{parentName:"div"},Object(i.a)("span",{parentName:"h5",className:"admonition-icon"},Object(i.a)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.a)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.a)("div",{parentName:"div",className:"admonition-content"},Object(i.a)("p",{parentName:"div"},"Currently, we only support e-mail and Google Authentication (including GSuite). If you need to use NexClipper, please contact ",Object(i.a)("a",{parentName:"p",href:"mailto:support@nexclipper.io"},"support@nexclipper.io"),"."))),Object(i.a)("p",null,"Now, Create Cluster and enter the unique cluster name you want. At QuickStart, you should select Kubernetes platform to provision.  "),Object(i.a)("p",null,"And bootstrap script will be created to install on the selected platform."),Object(i.a)("p",null,Object(i.a)("img",{alt:"img",src:a(231).default})),Object(i.a)("p",null,"Run the generated script from zsh, bash-enabled Bastion, or Local. And you are expected to get results similar to the following.  "),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-sh"},"$ curl -sL gg.gg/provbee | TAGKLEVR=0.2.4-SNAPSHOT K3S_SET=N K_API_KEY=\"977b9d295d0f4273be3575cdaeae22b3\" K_PLATFORM=\"kubernetes\" K_MANAGER_URL=\"http://console.nexclipper.io:8090\" K_ZONE_ID=\"62\" bash\nNexClipper serivce first checking\n[INFO]   Welcome to NexClipper!\nnamespace/nex-system created\nserviceaccount/nexc created\nsecret/nexc-ssh-key created\nsecret/nex-secrets created\nconfigmap/nex-system-agent-config created\nrole.rbac.authorization.k8s.io/nexclipper-role created\nclusterrolebinding.rbac.authorization.k8s.io/nexc-rbac created\nrolebinding.rbac.authorization.k8s.io/nexclipper-rb created\nCluster \"docker-desktop\" set.\nUser \"nexc-nex-system-docker-desktop\" set.\nContext \"nexc-nex-system-docker-desktop\" modified.\nSwitched to context \"nexc-nex-system-docker-desktop\".\nsecret/nexc-kubeconfig created\nservice/provbee-service created\ndeployment.apps/provbee created\ndaemonset.apps/klevr-agent created\n:+:+:+:+:+:+:+:+:+:+:+:+:+:+:+:+:+:+:+:+:+:\n## Namespace \"nex-system\" check   OK.\n## NexClipper system check    OK. \ud83c\udf6f\u2764\ufe0f\ud83d\udc1d\n \u26f5 Enjoy NexClipper! :)\n:+:+:+:+:+:+:+:+:+:+:+:+:+:+:+:+:+:+:+:+:+:\n88888888ba                                         88888888ba\n88      '8b                                        88      '8b\n88      ,8P                                        88      ,8P\n88aaaaaa8P'  \ud83d\udc1d,dPPYba,   ,adPPYba,   8b       d8  88aaaaaa8P'   ,adPPYba,   ,adPPYba,\n88'''''''    88P'   'Y8  a8'     '8a  '8b     d8'  88''''''8b,  a8P_____88  a8P_____88\n88           88          8b       d8   '8b   d8'   88      '8b  8PP'''''''  8PP'''''''\n88           88          '8a,   ,a8'    '8b,d8'    88      a8P  '8b,   ,aa  '8b,   ,aa\n88           88           ''YbbdP''       '8'      88888888P'    ''Ybbd8''   ''Ybbd8''\n")),Object(i.a)("hr",null),Object(i.a)("p",null,"After NexClipper components are installed, you will be able to communicate with NexClipper Manager server. As you can see it on the following page, you are expected to get results similar to the following.  "),Object(i.a)("p",null,Object(i.a)("img",{alt:"img",src:a(343).default})),Object(i.a)("p",null,"Now, you can return to the console to view the list of provisioned clusters."),Object(i.a)("p",null,Object(i.a)("img",{alt:"img",src:a(219).default})),Object(i.a)("h2",{id:"simple-health-dashboard"},"Simple Health Dashboard"),Object(i.a)("p",null,"Clicking the link or Health menu will take you to the Prometheus & Kubernetes Health dashboard."),Object(i.a)("p",null,Object(i.a)("img",{alt:"img",src:a(220).default})),Object(i.a)("p",null,"You can view the information in the cluster.  "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Age(Cluster Age): Time elapsed since cluster creation"),Object(i.a)("li",{parentName:"ul"},"Cluster Status: Status of cluster nodes",Object(i.a)("ul",{parentName:"li"},Object(i.a)("li",{parentName:"ul"},"All nodes are healthy - All Ready"),Object(i.a)("li",{parentName:"ul"},"Some nodes are healthy - Partially Ready"),Object(i.a)("li",{parentName:"ul"},"All nodes unhealthy - Not Ready"))),Object(i.a)("li",{parentName:"ul"},"Nodes: Number of Nodes"),Object(i.a)("li",{parentName:"ul"},"Unavaliable Node: Unhealthy Node Count"),Object(i.a)("li",{parentName:"ul"},"Namespaces: Number of Namespaces"),Object(i.a)("li",{parentName:"ul"},"Cluster Pod Usage: Pod Utilization in Cluster"),Object(i.a)("li",{parentName:"ul"},"Cluster CPU Usage: CPU Utilization in Cluster"),Object(i.a)("li",{parentName:"ul"},"Cluster Memory Usage: Memory Utilization in Cluster"),Object(i.a)("li",{parentName:"ul"},"Cluster Disk Usage: Disk Utilization in Cluster"),Object(i.a)("li",{parentName:"ul"},"Pods: Number of active Pods"),Object(i.a)("li",{parentName:"ul"},"Restarted Pods(30m): Number of Pods restarted in 30 minutes"),Object(i.a)("li",{parentName:"ul"},"Failed Pods: Number of Pods in Failed state"),Object(i.a)("li",{parentName:"ul"},"Pending Pods: Number of Pods in the Pending state"),Object(i.a)("li",{parentName:"ul"},"PVCs: Number of PersistentVolumeClaims"),Object(i.a)("li",{parentName:"ul"},"Prometheus Status: Prometheus Instance Status"),Object(i.a)("li",{parentName:"ul"},"Alertmanager Status: Alertmanager Instance Status"),Object(i.a)("li",{parentName:"ul"},"API Server Status: Cluster API Server Status"),Object(i.a)("li",{parentName:"ul"},"API server total requests code: 5 minute average by Kubenetes API response code")),Object(i.a)("p",null,"Other Features can be found through ",Object(i.a)("a",{parentName:"p",href:"installation"},"here")))}u.isMDXComponent=!0},211:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,b=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return a?r.a.createElement(b,l(l({ref:t},s),{},{components:a})):r.a.createElement(b,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},219:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/nc-cluster-dashboard-e5ba29e44d60dfc270dda8bb2629926d.png"},220:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/nc-prom-dashboard-e85c159e6a124e7bf8df551733e27afd.png"},230:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/nc-login-461593f6f79934c580d05fa15d0d9058.png"},231:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/nc-bootstrap-6b1dd4c508dc2e20aa3c74b0da197834.png"},343:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/nc-completed-bootstrap-3c14a1dd8de59a49f1c0725162d72ee6.png"}}]);