(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{186:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),p=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(l,".").concat(d)]||u[d]||b[d]||a;return n?o.a.createElement(m,c(c({ref:t},i),{},{components:n})):o.a.createElement(m,c({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var i=2;i<a;i++)l[i]=n[i];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},212:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/1*5hGUwC7FtdMqOxizd5UHFQ-4ad7b712b34963c48c21fa3ea5d12866.png"},95:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),a=(n(0),n(186)),l={title:"Prometheus Exporter & ExporterHub (Eng.)",author:"Jinwoong Kim",author_title:"NexClipper",author_url:"https://github.com/ddiiwoong",author_image_url:"https://avatars1.githubusercontent.com/u/37430952?v=4",description:"Talk about client libraries and exporters that are essential components of the Prometheus open source, as well as [ExporterHub.io] (http://exporterhub.io) currently under development and a roadmap for NexClipper in the future.",tags:["Prometheus","Exporter"]},c={permalink:"/blog/2020/09/25/prometheus-exporter-exporterhub-en",editUrl:"https://github.com/NexClipper/docs/edit/master/blog/blog/2020-09-25-prometheus-exporter-exporterhub-en.md",source:"@site/blog/2020-09-25-prometheus-exporter-exporterhub-en.md",description:"Talk about client libraries and exporters that are essential components of the Prometheus open source, as well as [ExporterHub.io] (http://exporterhub.io) currently under development and a roadmap for NexClipper in the future.",date:"2020-09-25T00:00:00.000Z",tags:[{label:"Prometheus",permalink:"/blog/tags/prometheus"},{label:"Exporter",permalink:"/blog/tags/exporter"}],title:"Prometheus Exporter & ExporterHub (Eng.)",readingTime:6.77,truncated:!0,prevItem:{title:"Prometheus at NexClipper",permalink:"/blog/2020/11/05/prometheus-at-nexcilpper"},nextItem:{title:"Prometheus Exporter & ExporterHub",permalink:"/blog/2020/09/03/prometheus-exporter-exporterhub"}},s=[{value:"Prometheus ecosystem components",id:"prometheus-ecosystem-components",children:[]},{value:"Client Library",id:"client-library",children:[]},{value:"Exporter",id:"exporter",children:[]},{value:"Using the Client Library",id:"using-the-client-library",children:[]},{value:"Use Exporter",id:"use-exporter",children:[]},{value:"ExporterHub.io",id:"exporterhubio",children:[]},{value:"Summary",id:"summary",children:[]}],i={rightToc:s};function p(e){var t=e.components,l=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},i,l,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Today, I'm going to explain about the Prometheus exporter."),Object(a.b)("h3",{id:"prometheus-ecosystem-components"},"Prometheus ecosystem components"),Object(a.b)("p",null,"Prometheus is basically instrumenting the metrics of an application or a third-party system (service), which is usually scraped through the target endpoint."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Prometheus default port allocations :\xa0",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/prometheus/prometheus/wiki/Default-port-allocations"}),"https://github.com/prometheus/prometheus/wiki/Default-port-allocations"))),Object(a.b)("p",null,"Not all applications or services generate Prometheus compatible metrics. Therefore, collection targets that are Prometheus targets can be collected in the format of client libraries and exporters."),Object(a.b)("h3",{id:"client-library"},"Client Library"),Object(a.b)("p",null,"The best way to set up monitoring when developing service is to use the Prometheus client library to write and instrument metrics directly based on code inline."),Object(a.b)("p",null,"By default, Go, Java (Scala), Python, and Ruby provide official libraries."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Client Library : ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://prometheus.io/docs/instrumenting/clientlibs/"}),"https://prometheus.io/docs/instrumenting/clientlibs/"))),Object(a.b)("p",null,"Since unofficial libraries are run by users in the community, they can also be a problem with code maintenance, so you should always use them while checking the release information."),Object(a.b)("h3",{id:"exporter"},"Exporter"),Object(a.b)("p",null,"Exporters can expose metrics from packaged software or third-party systems (services) where code cannot be modified directly. Usually, vendors or service companies expose metrics directly, but a separate exporter is required to instrument software such as the Linux system kernel, network equipment, storage, and databases."),Object(a.b)("p",null,"Almost all services are provided by the community and users, and you can check the status of exporters from the link below."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Exporter : ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://prometheus.io/docs/instrumenting/exporters/"}),"https://prometheus.io/docs/instrumenting/exporters/")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"http://exporterhub.io"}),"ExporterHub.io")," : Exporter catalog page recently released by NexCloud")),Object(a.b)("h3",{id:"using-the-client-library"},"Using the Client Library"),Object(a.b)("p",null,"I'm going to show a simple example of using the client library. The code was used earlier in Spinnaker based Canary deployment test."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Python client library : ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/prometheus/client_python"}),"https://github.com/prometheus/client","_","python"))),Object(a.b)("p",null,"Let's take a quick look at the code. The ",Object(a.b)("inlineCode",{parentName:"p"},"app.py")," was written based on Python Flask, and with the ",Object(a.b)("inlineCode",{parentName:"p"},"prometheus_client")," library added,  I used ",Object(a.b)("inlineCode",{parentName:"p"},"start_http_server")," for the metric HTTP endpoint (:8080)."),Object(a.b)("p",null,"Simply generate the internal 500 error in the desired ratio and to confirm an artificial metric, create ",Object(a.b)("inlineCode",{parentName:"p"},"success_rate")," variable and configure a simple metric server(:8000) to instrumentate with  ",Object(a.b)("inlineCode",{parentName:"p"},"Gauge"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Counter"),"."),Object(a.b)("p",null,"To check the ",Object(a.b)("inlineCode",{parentName:"p"},"Counter")," metric type, set the label to ",Object(a.b)("inlineCode",{parentName:"p"},"http_code='500'"),", ",Object(a.b)("inlineCode",{parentName:"p"},"http_code='200'"),"."),Object(a.b)("p",null,"Finally, to declare it as a ",Object(a.b)("inlineCode",{parentName:"p"},"Gauge")," metric type, add a code of g.set(rate_responce)."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Exposed endpoints and exporters may be set to different paths, as shown above, but use the /metrics path as usual. ex) ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://localhost:8000/metrics"}),"http://localhost:8000/metrics"))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"#!/usr/bin/env python\nfrom random import randrange \nfrom flask import Flask \nfrom prometheus_client import start_http_server, Gauge, Counter \nimport sys\n\napp = Flask('python-library-test') \nc = Counter('requests', 'Number of requests served, by http code', ['http_code']) \ng = Gauge('rate_requests', 'Rate of success requests')\n\nresponce_500 = 0 \nresponce_200 = 0 \nrate_responce = 0 \nsuccess_rate = sys.argv[1] # Input variable to generate an internal 500 error at the desired rate\n\n@app.route('/')\ndef hello(): \n    global responce_500 \n    global responce_200 \n    global rate_responce \n    if randrange(1, 100) > int(success_rate): \n        c.labels(http_code='500').inc() \n        responce_500 = responce_500 + 1 \n        rate_responce = responce_500 / (responce_500+responce_200) * 100 \n        g.set(rate_responce) \n        return \"Internal Server Error\\\\n\", 500 else: \n        c.labels(http_code='200').inc() \n        responce_200 = responce_200 + 1 \n        rate_responce = responce_500 / (responce_500+responce_200) * 100 \n        g.set(rate_responce) \n        return \"Hello World!\\\\n\"\n\nstart_http_server(8000) \napp.run(host = '0.0.0.0', port = 8080)\n")),Object(a.b)("p",null,"It is for testing purposes, let\u2019s simply run locally."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),'$ pip install flask prometheus_client\n$ python app.py 50 # Input variable to generate an internal 500 error at the desired rate\n * Serving Flask app "python-library-test" (lazy loading)\n * Environment: production\n   WARNING: This is a development server. Do not use it in a production deployment.\n   Use a production WSGI server instead.\n * Debug mode: off\n * Running on <http://0.0.0.0:8080/> (Press CTRL+C to quit)\n')),Object(a.b)("p",null,"In order to collect the metrics, we simply use the ",Object(a.b)("inlineCode",{parentName:"p"},"ab")," command and make repeated calls."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),"$ ab -n 1000 http://localhost:8080/\n...\nServer Software:        Werkzeug/1.0.1\nServer Hostname:        localhost\nServer Port:            8080\n\nDocument Path:          /\nDocument Length:        22 bytes\n\nConcurrency Level:      1\nTime taken for tests:   1.775 seconds\nComplete requests:      1000\nFailed requests:        0\nNon-2xx responses:      505\n...\n")),Object(a.b)("p",null,"Requests, Non-2xx responses should be looked at in detail in the results."),Object(a.b)("p",null,"Because an error was generated by making 1000 requests with a 50% probability of the input factor, success can be confirmed as 495 times and errors 505 times."),Object(a.b)("p",null,"Let's try connecting to the exposed port 8000 to check the metrics."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-sh"}),'$ curl localhost:8000\n# HELP python_gc_objects_collected_total Objects collected during gc\n# TYPE python_gc_objects_collected_total counter\npython_gc_objects_collected_total{generation="0"} 18055.0\npython_gc_objects_collected_total{generation="1"} 2461.0\npython_gc_objects_collected_total{generation="2"} 0.0\n# HELP python_gc_objects_uncollectable_total Uncollectable object found during GC\n# TYPE python_gc_objects_uncollectable_total counter\npython_gc_objects_uncollectable_total{generation="0"} 0.0\npython_gc_objects_uncollectable_total{generation="1"} 0.0\npython_gc_objects_uncollectable_total{generation="2"} 0.0\n# HELP python_gc_collections_total Number of times this generation was collected\n# TYPE python_gc_collections_total counter\npython_gc_collections_total{generation="0"} 82.0\npython_gc_collections_total{generation="1"} 7.0\npython_gc_collections_total{generation="2"} 0.0\n# HELP python_info Python platform information\n# TYPE python_info gauge\npython_info{implementation="CPython",major="3",minor="8",patchlevel="3",version="3.8.3"} 1.0\n# HELP requests_total Number of requests served, by http code\n# TYPE requests_total counter\nrequests_total{http_code="500"} 505.0\nrequests_total{http_code="200"} 495.0\n# HELP requests_created Number of requests served, by http code\n# TYPE requests_created gauge\nrequests_created{http_code="500"} 1.5990454944853382e+09\nrequests_created{http_code="200"} 1.599045494488697e+09\n# HELP rate_requests Rate of success requests\n# TYPE rate_requests gauge\nrate_requests 50.5\n')),Object(a.b)("p",null,"If you look at the ",Object(a.b)("inlineCode",{parentName:"p"},"http_code='500'")," and ",Object(a.b)("inlineCode",{parentName:"p"},"http_code='200'"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Counter")," that I wrote, you can see that it is the same metric I checked in ",Object(a.b)("inlineCode",{parentName:"p"},"ab"),"."),Object(a.b)("p",null,"And if you look at rate_requests set with ",Object(a.b)("inlineCode",{parentName:"p"},"Gauge"),", you can see that the success rate is 50%."),Object(a.b)("h3",{id:"use-exporter"},"Use Exporter"),Object(a.b)("p",null,"I am currently using macOS and want to use node_exporter to check host metrics."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"node","_","exporter : ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/prometheus/node_exporter"}),"https://github.com/prometheus/node","_","exporter"))),Object(a.b)("p",null,"node_exporter is an exporter officially provided by the Prometheus community and I\u2019ll try to simply run it by receiving a binary."),Object(a.b)("p",null,"Search node_exporter at ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://exporterhub.io/"}),"ExporterHub.io"),", which was provided recently by NexCloud as a curation page for community users."),Object(a.b)("p",null,Object(a.b)("img",{src:n(212).default})),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/NexClipper/exporterhub.io/blob/master/lists/node/README.md"}),"https://github.com/NexClipper/exporterhub.io/blob/master/lists/node/README.md")),Object(a.b)("p",null,"Referring to the linked readme page above, run node_exporter locally on macOS. Since it is in binary, it can be run as a container, but on macOS, there was an issue with the host network, so I ran it myself."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'$ wget  https://github.com/prometheus/node_exporter/releases/download/v1.0.1/node_exporter-1.0.1.darwin-amd64.tar.gz\n$ tar -xzf node_exporter-1.0.1.darwin-amd64.tar.gz\n$ cd node_exporter-1.0.1.darwin-amd64\n$ ./node_exporter\nlevel=info ts=2020-09-02T12:31:03.309Z caller=node_exporter.go:177 msg="Starting node_exporter" version="(version=1.0.1, branch=HEAD, revision=3715be6ae899f2a9b9dbfd9c39f3e09a7bd4559f)"\nlevel=info ts=2020-09-02T12:31:03.309Z caller=node_exporter.go:178 msg="Build context" build_context="(go=go1.14.4, user=root@4c8e5c628328, date=20200616-12:52:07)"\nlevel=info ts=2020-09-02T12:31:03.309Z caller=node_exporter.go:105 msg="Enabled collectors"\nlevel=info ts=2020-09-02T12:31:03.309Z caller=node_exporter.go:112 collector=boottime\nlevel=info ts=2020-09-02T12:31:03.310Z caller=node_exporter.go:112 collector=cpu\nlevel=info ts=2020-09-02T12:31:03.310Z caller=node_exporter.go:112 collector=diskstats\nlevel=info ts=2020-09-02T12:31:03.310Z caller=node_exporter.go:112 collector=filesystem\nlevel=info ts=2020-09-02T12:31:03.310Z caller=node_exporter.go:112 collector=loadavg\nlevel=info ts=2020-09-02T12:31:03.310Z caller=node_exporter.go:112 collector=meminfo\nlevel=info ts=2020-09-02T12:31:03.310Z caller=node_exporter.go:112 collector=netdev\nlevel=info ts=2020-09-02T12:31:03.310Z caller=node_exporter.go:112 collector=textfile\nlevel=info ts=2020-09-02T12:31:03.310Z caller=node_exporter.go:112 collector=time\nlevel=info ts=2020-09-02T12:31:03.310Z caller=node_exporter.go:112 collector=uname\nlevel=info ts=2020-09-02T12:31:03.310Z caller=node_exporter.go:191 msg="Listening on" address=:9100\nlevel=info ts=2020-09-02T12:31:03.310Z caller=tls_config.go:170 msg="TLS is disabled and it cannot be enabled on the fly." http2=false\n')),Object(a.b)("p",null,"Basically, as mentioned above, there are reserved port information and node_exporter exposed to /metrics endpoint, so try to access http://localhost:9100/metrics. You can check the machine metrics of the MacBook currently in use."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'$ curl http://localhost:9100/metrics\n...\n# HELP node_cpu_seconds_total Seconds the cpus spent in each mode.\n# TYPE node_cpu_seconds_total counter\nnode_cpu_seconds_total{cpu="0",mode="idle"} 25639.47\nnode_cpu_seconds_total{cpu="0",mode="nice"} 0\nnode_cpu_seconds_total{cpu="0",mode="system"} 6361.26\nnode_cpu_seconds_total{cpu="0",mode="user"} 12627.86\nnode_cpu_seconds_total{cpu="1",mode="idle"} 37124.82\nnode_cpu_seconds_total{cpu="1",mode="nice"} 0\nnode_cpu_seconds_total{cpu="1",mode="system"} 2697.6\nnode_cpu_seconds_total{cpu="1",mode="user"} 4805.51\nnode_cpu_seconds_total{cpu="2",mode="idle"} 26546.08\nnode_cpu_seconds_total{cpu="2",mode="nice"} 0\nnode_cpu_seconds_total{cpu="2",mode="system"} 5505.62\nnode_cpu_seconds_total{cpu="2",mode="user"} 12576.23\nnode_cpu_seconds_total{cpu="3",mode="idle"} 37708.71\nnode_cpu_seconds_total{cpu="3",mode="nice"} 0\nnode_cpu_seconds_total{cpu="3",mode="system"} 2413.04\nnode_cpu_seconds_total{cpu="3",mode="user"} 4506.18\n...\n')),Object(a.b)("p",null,"Since the process of linking with Prometheus is a setting change, I will not mention it here."),Object(a.b)("h3",{id:"exporterhubio"},"ExporterHub.io"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://exporterhub.io/"}),"ExporterHub.io")," was created for Prometheus community users, and was created for the purpose of providing a curation list similar to the awesome project."),Object(a.b)("p",null,"Not only curation information but also simple installation guide, alert-rule setting, and dashboard related information can be viewed at once."),Object(a.b)("p",null,"The roadmap for the future is as follows."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create alert-rule for each exporter"),Object(a.b)("li",{parentName:"ul"},"Search, page enhancement, Automate update exporter's release"),Object(a.b)("li",{parentName:"ul"},"NexClipper Cloud service integration")),Object(a.b)("p",null,"NexClipper Cloud service will be opened towards the end of the year, and various convenient features related to the Prometheus ecosystem will be included before the official launch next year."),Object(a.b)("p",null,"If you have an exporter under development or have any corrections or improvements, please feel free to send issues or pull requests."),Object(a.b)("h3",{id:"summary"},"Summary"),Object(a.b)("p",null,"In this post, we talked about the client library and exporter, which are essential components of Prometheus open source. We also explained the roadmap for the integration of ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://exporterhub.io"}),"ExporterHub.io")," and NexClipper in the future."),Object(a.b)("p",null,"We ask for a variety of feedback on all our technologies and products, including blog content, and if you have any questions at any time, or have any necessary matters such as recruitment and technical meetings, please contact us at ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"mailto:support@nexclipper.io"}),"support@nexclipper.io")," and we will reply as soon as possible."))}p.isMDXComponent=!0}}]);