(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{176:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return b})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return i}));var a=r(2),n=r(6),l=(r(0),r(189)),p={title:"Prometheus at NexClipper(Korean)",author:"Jinwoong Kim",author_title:"NexClipper",author_url:"https://github.com/ddiiwoong",author_image_url:"https://avatars1.githubusercontent.com/u/37430952?v=4",description:"\uc5d4\ud130\ud504\ub77c\uc774\uc988 \ub808\ubca8\uc5d0\uc11c \ud504\ub85c\uba54\ud14c\uc6b0\uc2a4\ub97c \uc6b4\uc601\ud558\ub294\ub370 \uc788\uc5b4 \uc774\uc288\uac00 \ub418\ub294 \ub0b4\uc6a9\uc744 \uc815\ub9ac\ud574\ubcf4\uace0 \uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud55c NexClipper\uc758 \uac1c\ubc1c \ub85c\ub4dc\ub9f5\uc744 \uc124\uba85\ud569\ub2c8\ub2e4.",tags:["Prometheus","Exporter","NexClipper"]},b={permalink:"/blog/2020/11/09/prometheus-at-nexcilpper-ko",editUrl:"https://github.com/NexClipper/docs/edit/master/blog/blog/2020-11-09-prometheus-at-nexcilpper-ko.md",source:"@site/blog/2020-11-09-prometheus-at-nexcilpper-ko.md",description:"\uc5d4\ud130\ud504\ub77c\uc774\uc988 \ub808\ubca8\uc5d0\uc11c \ud504\ub85c\uba54\ud14c\uc6b0\uc2a4\ub97c \uc6b4\uc601\ud558\ub294\ub370 \uc788\uc5b4 \uc774\uc288\uac00 \ub418\ub294 \ub0b4\uc6a9\uc744 \uc815\ub9ac\ud574\ubcf4\uace0 \uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud55c NexClipper\uc758 \uac1c\ubc1c \ub85c\ub4dc\ub9f5\uc744 \uc124\uba85\ud569\ub2c8\ub2e4.",date:"2020-11-09T00:00:00.000Z",tags:[{label:"Prometheus",permalink:"/blog/tags/prometheus"},{label:"Exporter",permalink:"/blog/tags/exporter"},{label:"NexClipper",permalink:"/blog/tags/nex-clipper"}],title:"Prometheus at NexClipper(Korean)",readingTime:5.04,truncated:!0,nextItem:{title:"Prometheus at NexClipper",permalink:"/blog/2020/11/09/prometheus-at-nexcilpper"}},o=[{value:"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \ubaa8\ub2c8\ud130\ub9c1\uc744 \uc704\ud55c \uac1c\uc694",id:"\ucfe0\ubc84\ub124\ud2f0\uc2a4-\ubaa8\ub2c8\ud130\ub9c1\uc744-\uc704\ud55c-\uac1c\uc694",children:[]},{value:"\ud504\ub85c\uba54\ud14c\uc6b0\uc2a4 \uad6c\uc131\uc694\uc18c \uc124\uba85",id:"\ud504\ub85c\uba54\ud14c\uc6b0\uc2a4-\uad6c\uc131\uc694\uc18c-\uc124\uba85",children:[]},{value:"\ud504\ub85c\uba54\ud14c\uc6b0\uc2a4 \uc124\uce58\ubc29\ubc95",id:"\ud504\ub85c\uba54\ud14c\uc6b0\uc2a4-\uc124\uce58\ubc29\ubc95",children:[]},{value:"\ud504\ub85c\uba54\ud14c\uc6b0\uc2a4\ub97c \uc0ac\uc6a9\ud560 \ub54c\uc758 \uc774\uc810",id:"\ud504\ub85c\uba54\ud14c\uc6b0\uc2a4\ub97c-\uc0ac\uc6a9\ud560-\ub54c\uc758-\uc774\uc810",children:[]},{value:"\ud504\ub85c\uba54\ud14c\uc6b0\uc2a4\ub97c \uc0ac\uc6a9\ud560 \ub54c\uc758 \ubb38\uc81c\uc810",id:"\ud504\ub85c\uba54\ud14c\uc6b0\uc2a4\ub97c-\uc0ac\uc6a9\ud560-\ub54c\uc758-\ubb38\uc81c\uc810",children:[]},{value:"NexClipper",id:"nexclipper",children:[]},{value:"<strong>\uc815\ub9ac</strong>",id:"\uc815\ub9ac",children:[]},{value:"<strong>\ub125\uc2a4\ud074\ub77c\uc6b0\ub4dc \uc18c\uac1c \ubc0f \ucc44\uc6a9</strong>",id:"\ub125\uc2a4\ud074\ub77c\uc6b0\ub4dc-\uc18c\uac1c-\ubc0f-\ucc44\uc6a9",children:[]}],c={rightToc:o};function i(e){var t=e.components,p=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,p,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\uc774\ubc88 \ud3ec\uc2a4\ud305\uc5d0\uc11c\ub294 \uc5d4\ud130\ud504\ub77c\uc774\uc988 \ub808\ubca8\uc5d0\uc11c \ud504\ub85c\uba54\ud14c\uc6b0\uc2a4\ub97c \uc6b4\uc601\ud558\ub294\ub370 \uc788\uc5b4 \uc774\uc288\uac00 \ub418\ub294 \ub0b4\uc6a9\uc744 \uc815\ub9ac\ud574\ubcf4\uace0 \uc774\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud55c NexClipper\uc758 \uac1c\ubc1c \ub85c\ub4dc\ub9f5\uc744 \uc124\uba85\ud569\ub2c8\ub2e4."),Object(l.b)("h2",{id:"\ucfe0\ubc84\ub124\ud2f0\uc2a4-\ubaa8\ub2c8\ud130\ub9c1\uc744-\uc704\ud55c-\uac1c\uc694"},"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \ubaa8\ub2c8\ud130\ub9c1\uc744 \uc704\ud55c \uac1c\uc694"),Object(l.b)("p",null,"\ucfe0\ubc84\ub124\ud2f0\uc2a4\ub294 CNCF(Cloud Native Computing Foundation)\uc744 \uc878\uc5c5\ud55c \ucd5c\ucd08\uc758 \ud504\ub85c\uc81d\ud2b8\uc774\uba70, \ud604\uc7ac \ucee8\ud14c\uc774\ub108 \uc624\ucf00\uc2a4\ud2b8\ub808\uc774\uc158\uc758 \uc0ac\uc2e4\uc0c1 \ud45c\uc900\uc774\uc790 IaaS, PaaS \uc601\uc5ed\uae4c\uc9c0 \uc544\uc6b0\ub974\uba70 \ubd88\uacfc \uba87\ub144 \uc0ac\uc774\uc5d0 \uc5c4\uccad\ub09c \uc131\uc7a5\uacfc \ucee4\ubba4\ub2c8\ud2f0 \ud65c\uc131\ud654\uac00 \ub418\uba70 \uc2e4\uc81c \ud504\ub85c\ub355\uc158 \ud658\uacbd\uc5d0\uc11c\ub3c4 \ub9ce\uc740 \uae30\uc5c5\ub4e4\uc774 \ub3c4\uc785\uc744 \ud558\uace0 \uc788\ub294 \uc0c1\ud669\uc785\ub2c8\ub2e4. "),Object(l.b)("p",null,Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/kubernetes/community/blob/master/contributors/design-proposals/instrumentation/monitoring_architecture.md#architecture"}),"https://github.com/kubernetes/community/blob/master/contributors/design-proposals/instrumentation/monitoring_architecture.md#architecture")," \uae30\ubcf8\uc801\uc778 \ucfe0\ubc84\ub124\ud2f0\uc2a4\uc758 \uba54\ud2b8\ub9ad \uc124\uba85\uc744 \ubcf4\uba74 \uc2dc\uc2a4\ud15c \uba54\ud2b8\ub9ad\uacfc \uc11c\ube44\uc2a4 \uba54\ud2b8\ub9ad\uc73c\ub85c \ub098\ub258\uc5b4\uc11c \uc124\uba85\ud558\uace0 \uc788\uace0 \ubaa8\ub2c8\ud130\ub9c1 \ubc29\uc2dd\uc740 \ud06c\uac8c \ucf54\uc5b4 \uba54\ud2b8\ub9ad \ud30c\uc774\ud504\ub77c\uc778\uacfc \ubaa8\ub2c8\ud130\ub9c1 \ud30c\uc774\ud504\ub77c\uc778\uc73c\ub85c \uad6c\ubd84\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. "),Object(l.b)("p",null,"\ud574\ub2f9 \ubb38\uc11c\uc5d0\uc11c\ub3c4 \ub098\uc640 \uc788\ub4ef\uc774 \ucd08\uae30\uc5d0\ub294 \ud799\uc2a4\ud130(Heapster)\ub294 \ucfe0\ubc84\ub124\ud2f0\uc2a4\uc640 \ud568\uaed8 \ubaa8\ub2c8\ud130\ub9c1 \uc194\ub8e8\uc158\uc73c\ub85c \ub110\ub9ac \uc0ac\uc6a9\ub410\uc2b5\ub2c8\ub2e4. \ubaa8\ub2c8\ud130\ub9c1 \ub370\uc774\ud130\ub97c \uc678\ubd80 \uc2dc\uc2a4\ud15c\uc73c\ub85c \uc804\uc1a1\ud558\ub294 \ub3c4\uad6c\ub85c \uc2dc\uc791\ub418\uc5c8\uace0, \uc774\ud6c4 \uc790\uccb4\uc801\uc778 \ubaa8\ub2c8\ud130\ub9c1 \uc2dc\uc2a4\ud15c\uc73c\ub85c \uc131\uc7a5\ud558\uac8c \ub410\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ud799\uc2a4\ud130\ub294 \ucfe0\ubc84\ub124\ud2f0\uc2a4 1.11\ubc84\uc804\uc5d0\uc11c deprecated\ub418\uc5c8\uace0 1.13\uc774\ud6c4\uc758 \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub7ec\uc2a4\ud130\ub97c \uad6c\uc131\ud558\ub294 \ub300\ubd80\ubd84\uc758 \uad6c\uc131 \uc694\uc18c\ub4e4\uc740 \ud504\ub85c\uba54\ud14c\uc6b0\uc2a4\uc5d0\uc11c \ud074\ub77c\uc6b0\ub4dc \ub124\uc774\ud2f0\ube0c \ud615\ud0dc\ub85c \uce21\uc815\ud558\ub3c4\ub85d \uc9c0\uc6d0\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.  "),Object(l.b)("h2",{id:"\ud504\ub85c\uba54\ud14c\uc6b0\uc2a4-\uad6c\uc131\uc694\uc18c-\uc124\uba85"},"\ud504\ub85c\uba54\ud14c\uc6b0\uc2a4 \uad6c\uc131\uc694\uc18c \uc124\uba85"),Object(l.b)("p",null,"\ucfe0\ubc84\ub124\ud2f0\uc2a4 \ubaa8\ub2c8\ud130\ub9c1\uc740 \uae30\ubcf8\uc801\uc73c\ub85c \ud074\ub7ec\uc2a4\ud130 \ubaa8\ub2c8\ud130\ub9c1\uc744 \uae30\ubcf8\uc73c\ub85c \ud569\ub2c8\ub2e4. \ud074\ub7ec\uc2a4\ud130\ub97c \ubaa8\ub2c8\ud130\ub9c1\ud558\uba74\uc11c \ub178\ub4dc\uc758 \uc0ac\uc6a9\ub960, \uc2e4\ud589 \uc911\uc778 \ud30c\ub4dc \uc218\ub97c \ud655\uc778\ud558\ub294 \uac83\uacfc \uac19\uc774 \uc2dc\uc2a4\ud15c\uc758 \uc804\ubc18\uc801\uc778 \uc0c1\ud0dc\uc640 \uc6cc\ud06c\ub85c\ub4dc \ub4e4\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\uc591\ud55c \uc5d0\ucf54\uc2dc\uc2a4\ud15c \uc911\uc5d0 \uac00\uc7a5 \ub9ce\uc774 \uc0ac\uc6a9\ub418\ub294 \uc11c\ube44\uc2a4\uc640 \ub3c4\uad6c\ub97c \uc815\ub9ac\ud588\uc2b5\ub2c8\ub2e4. "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Prometheus : \uc624\ud508 \uc18c\uc2a4 \uc2dc\uacc4\uc5f4 \ub370\uc774\ud130\ubca0\uc774\uc2a4"),Object(l.b)("li",{parentName:"ul"},"kube-state-metric : \ud074\ub7ec\uc2a4\ud130\uc758 \ub2e4\uc591\ud55c \uc624\ube0c\uc81d\ud2b8, \uc6cc\ud06c\ub85c\ub4dc\uc758 \uba54\ud2b8\ub9ad \uc815\ubcf4\ub97c \uc0dd\uc131\ud558\ub294 \uc11c\ube44\uc2a4"),Object(l.b)("li",{parentName:"ul"},"node_exporter : *NIX \ucee4\ub110\uc5d0 \uc758\ud574 \ub178\ucd9c\ub418\ub294 \ud558\ub4dc\uc6e8\uc5b4 \ubc0f OS \uba54\ud2b8\ub9ad \uc815\ubcf4\ub97c \uc0dd\uc131\ud558\ub294 \uc11c\ube44\uc2a4"),Object(l.b)("li",{parentName:"ul"},"pushgateway : \uc784\uc2dc \ubc0f \ubc30\uce58 \uc791\uc5c5\uc758 \uba54\ud2b8\ub9ad\uc744 \uc218\uc2e0, \uc81c\uacf5"),Object(l.b)("li",{parentName:"ul"},"alertmanager : \ud504\ub85c\uba54\ud14c\uc6b0\uc2a4 \uc11c\ubc84\uc5d0\uc11c \ubcf4\ub0b8 \uc54c\ub9bc(Alert)\ub97c \ucc98\ub9ac(\uc911\ubcf5\uc81c\uac70, \uadf8\ub8f9\ud654, \uc804\uc1a1)\ud558\ub294 \uc11c\ube44\uc2a4"),Object(l.b)("li",{parentName:"ul"},"grafana : \ubaa8\ub2c8\ud130\ub9c1\uacfc \uba54\ud2b8\ub9ad \ubd84\uc11d\uc744 \uc704\ud55c \ub300\uc2dc\ubcf4\ub4dc \uc2dc\uac01\ud654 \ub3c4\uad6c")),Object(l.b)("h2",{id:"\ud504\ub85c\uba54\ud14c\uc6b0\uc2a4-\uc124\uce58\ubc29\ubc95"},"\ud504\ub85c\uba54\ud14c\uc6b0\uc2a4 \uc124\uce58\ubc29\ubc95"),Object(l.b)("p",null,"\ud504\ub85c\uba54\ud14c\uc6b0\uc2a4\ub97c \uc124\uce58\ud558\ub294 \ubc29\ubc95\uc740 \uc5b4\ub835\uc9c0\ub294 \uc54a\uc2b5\ub2c8\ub2e4. \ud558\uc9c0\ub9cc \ubaa8\ub4e0 \ub0b4\uc6a9\uc744 \uc774\ud574\ud558\uace0 \uc0ac\uc6a9\ud558\ub294 \uac83\uacfc \uadf8\ub0e5 Getting Started\ub85c \ubc30\ud3ec\ud558\ub294 \uac83\uc740 \ud5a5\ud6c4 \uc2e4\uc81c \uc6b4\uc601\uc744 \uc704\ud574\uc11c\ub294 \ub9e4\uc6b0 \ub2e4\ub978 \ucc28\uc774\ub97c \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4.  "),Object(l.b)("p",null,"\uc9c1\uc811 \uad6c\uc131\ud558\ub294 \ubc29\ubc95\uc740 \ud06c\uac8c 2\uac00\uc9c0\ub85c \uc774\ubbf8 \ucef4\ud30c\uc77c\ub41c \ubc14\uc774\ub108\ub9ac\ub97c \uc2e4\ud589\ud558\uac70\ub098 \uc9c1\uc811 \uc18c\uc2a4\ub97c \ube4c\ub4dc\ud560 \uc218 \uc788\uace0 \ub3c4\ucee4\ub97c \uc0ac\uc6a9\ud574\uc11c \uc124\uce58\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uc678\uc5d0\ub3c4 Ansible, Puppet \ub4f1\uacfc \uac19\uc740 Configuration Management \ub3c4\uad6c\ub97c \ud65c\uc6a9\ud574\uc11c \uc124\uce58\ub3c4 \uac00\ub2a5\ud569\ub2c8\ub2e4."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://prometheus.io/docs/prometheus/latest/installation/"}),"https://prometheus.io/docs/prometheus/latest/installation/"))),Object(l.b)("p",null,"\ud504\ub85c\uba54\ud14c\uc6b0\uc2a4 \ucee4\ubba4\ub2c8\ud2f0\uc5d0\uc11c\ub294 \uae30\ubcf8\uc801\uc73c\ub85c \ubca0\ud0c0\ub85c Helm Chart\ub97c \uc81c\uacf5\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. "),Object(l.b)("p",null,"\ub2e8\uc21c\ud788 alertmanager\uc640 prometheus\ub97c \ub2e8\ub3c5\uc73c\ub85c \ubc30\ud3ec\ud558\uac70\ub098, \uc5ec\ub7ec\uac00\uc9c0 \uc775\uc2a4\ud3ec\ud130\ub97c \ubc30\ud3ec\ud558\ub294 \uc6a9\ub3c4\ub85c\ub294 \uac04\ub2e8\ud558\uac8c \uc0ac\uc6a9\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4. "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/prometheus-community/helm-charts"}),"https://github.com/prometheus-community/helm-chart"))),Object(l.b)("p",null,"\ud504\ub85c\uba54\ud14c\uc6b0\uc2a4 \uc624\ud37c\ub808\uc774\ud130\ub294 \uae30\ubcf8\uc801\uc73c\ub85c ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/"}),"Custom Resources"),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud504\ub85c\uba54\ud14c\uc6b0\uc2a4, \uc5bc\ub7ff\ub9e4\ub2c8\uc800, \uad00\ub828\ub41c \uc5d0\ucf54\uc2dc\uc2a4\ud15c \ubc30\ud3ec\uc640 \uad6c\uc131\uc744 \ub2e8\uc21c\ud654\ud569\ub2c8\ub2e4. "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/prometheus-operator/prometheus-operator"}),"https://github.com/prometheus-operator/prometheus-operator"))),Object(l.b)("p",null,"\uc544\ub2c8\uba74 \uc704 \uc624\ud37c\ub808\uc774\ud130\uac00 \ud3ec\ud568\ub41c kube-prometheus-stack helm \ucc28\ud2b8\ub97c \ud1b5\ud574\uc11c\ub3c4 \ubc30\ud3ec\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4. "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/prometheus-operator/kube-prometheus"}),"https://github.com/prometheus-operator/kube-prometheus"))),Object(l.b)("h2",{id:"\ud504\ub85c\uba54\ud14c\uc6b0\uc2a4\ub97c-\uc0ac\uc6a9\ud560-\ub54c\uc758-\uc774\uc810"},"\ud504\ub85c\uba54\ud14c\uc6b0\uc2a4\ub97c \uc0ac\uc6a9\ud560 \ub54c\uc758 \uc774\uc810"),Object(l.b)("p",null,"\ud504\ub85c\uba54\ud14c\uc6b0\uc2a4\ub97c \ucfe0\ubc84\ub124\ud2f0\uc2a4\uc758 \ubaa8\ub2c8\ud130\ub9c1 \ub3c4\uad6c\ub85c \uc0ac\uc6a9\ud560\ub54c\uc758 \uc5ec\ub7ec\uac00\uc9c0 \uc7a5\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4. "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\uad00\ub9ac\uc758 \uc6a9\uc774\uc131 - \ud504\ub85c\uba54\ud14c\uc6b0\uc2a4\ub294 \uad00\ub9ac\uac00 \ud3b8\ud558\ub2e4\ub294 \uac83\uc774 \uac00\uc7a5 \ud575\uc2ec\uc785\ub2c8\ub2e4. \ubcc4\ub3c4\uc758 \uc124\uce58\uc5c6\uc774 \ubc14\uc774\ub108\ub9ac \ud30c\uc77c \ud558\ub098\ub85c \ub3d9\uc791\ud558\uae30 \ub54c\ubb38\uc5d0 \uae30\ubcf8\uc801\uc73c\ub85c \ub85c\uceec\ub514\uc2a4\ud06c\ub9cc \uc788\uc73c\uba74 \ub418\uace0 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub098 \uce90\uc2dc\uc640 \uac19\uc740 \ub2e4\ub978 \uc194\ub8e8\uc158\uacfc\uc758 \uc885\uc18d\uc131\uc774 \uac70\uc758 \uc5c6\uc2b5\ub2c8\ub2e4."),Object(l.b)("li",{parentName:"ul"},"\uc11c\ube44\uc2a4 \ub514\uc2a4\ucee4\ubc84\ub9ac - \uae30\ubcf8\uc801\uc73c\ub85c \ud30c\uc77c \ub610\ub294 DNS\uae30\ubc18\uc758 \uc11c\ube44\uc2a4 \ub514\uc2a4\ucee4\ubc84\ub9ac \uad6c\uc131\uc774 \uac00\ub2a5\ud558\uae30 \ub54c\ubb38\uc5d0 \uc8fc\uae30\uc801\uc73c\ub85c \ucffc\ub9ac\ub418\ub294 DNS \ub3c4\uba54\uc778 \ub124\uc784\uc744 \ud1b5\ud574 \uae30\ubcf8\uc801\uc73c\ub85c \uc2a4\ud06c\ub7a9\ud560 \ub300\uc0c1\uc744 \ub4f1\ub85d\ud569\ub2c8\ub2e4. \ucfe0\ubc84\ub124\ud2f0\uc2a4 REST API\uc5d0\uc11c \uc2a4\ud06c\ub7a9\ud560 \ub300\uc0c1\uc744 \uac80\uc0c9\ud558\uace0 \ud56d\uc0c1 \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud074\ub7ec\uc2a4\ud130\uc640 \ub3d9\uae30\ud654 \uc0c1\ud0dc\ub97c \uc720\uc9c0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),Object(l.b)("p",null,Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#kubernetes_sd_config"}),"https://prometheus.io/docs/prometheus/latest/configuration/configuration/#kubernetes_sd_config")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\uac15\ub825\ud558\uace0 \uc26c\uc6b4 \ub370\uc774\ud130 \ubaa8\ub378 - \uc218\uc9d1 \ub41c \ubaa8\ub4e0 \ubaa8\ub2c8\ud130\ub9c1 \ub370\uc774\ud130\ub294 \uae30\ubcf8 \uc81c\uacf5\ub418\ub294 \uc2dc\uacc4\uc5f4 \ub370\uc774\ud130\ubca0\uc774\uc2a4(TSDB)\uc5d0 \uba54\ud2b8\ub9ad \ud615\uc2dd\uc73c\ub85c \uc800\uc7a5\ub429\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uae30\ubcf8 \uc774\ub984 \uc678\uc5d0\ub3c4 \ubaa8\ub4e0 \uc0d8\ud50c\uc5d0\ub294 \uc0d8\ud50c\uc758 \ud2b9\uc131\uc744 \uc124\uba85\ud558\ub294 \ud0dc\uadf8 \uc138\ud2b8\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uac01 \uc2dc\uacc4\uc5f4 \ub370\uc774\ud130\ub294 \uba54\ud2b8\ub9ad \uc774\ub984\uacfc \uc635\uc158\uc778 \ub808\uc774\ube14\uc774\ub77c \ubd80\ub974\ub294 \ud0a4-\ubc38\ub958 \uc30d\uc73c\ub85c \uace0\uc720\ud558\uac8c \uc2dd\ubcc4\ub429\ub2c8\ub2e4. \uac01 \uc2dc\uacc4\uc5f4 \ub370\uc774\ud130\ub294 \uc77c\ub828\uc758 \uc0d8\ud50c \uac12\uc744 \uc2dc\uac04 \uc21c\uc11c\ub300\ub85c \uc800\uc7a5\ud569\ub2c8\ub2e4. \uac01 \uc0d8\ud50c\uc740 float64 \uac12\uacfc \ubc00\ub9ac\uc138\ucee8\ub4dc \uc218\uc900\uc758 \ud0c0\uc784\uc2a4\ud0ec\ud504\ub85c \uad6c\uc131\ub429\ub2c8\ub2e4."),Object(l.b)("li",{parentName:"ul"},"\ucffc\ub9ac \uc5b8\uc5b4(PromQL) - \ub808\uc774\ube14\uacfc \uc2dc\uacc4\uc5f4\uc744 \uae30\ubc18\uc73c\ub85c \ubaa8\ub2c8\ud130\ub9c1 \ub370\uc774\ud130\ub97c \uc27d\uac8c \ucffc\ub9ac\ud558\uace0 \uc9d1\uacc4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uba54\ud2b8\ub9ad \ucffc\ub9ac\uc5d0 \ud568\uc218\uc640 \uc5f0\uc0b0\uc790\ub97c \uc801\uc6a9\ud558\uace0 \ub808\uc774\ube14\ubcc4\ub85c \ud544\ud130\ub9c1 \ubc0f \uadf8\ub8f9\ud654\ud558\uace0 \ub9e4\uce6d\uacfc \ud544\ud130\ub9c1\uc744 \uc704\ud574 \uc815\uaddc \ud45c\ud604\uc2dd\uc744 \uc0ac\uc6a9\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \ub610\ud55c PromQL\uc740 \uadf8\ub77c\ud30c\ub098(Grafana)\uc640 \uac19\uc740 \ub370\uc774\ud130 \uc2dc\uac01\ud654\ub098 \uc54c\ub9bc(alert, notification)\uc5d0\ub3c4 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."),Object(l.b)("li",{parentName:"ul"},"\ud480(Pull) \uc218\uc9d1 \ubc29\uc2dd\uc73c\ub85c \uc778\ud55c \ub0b4\ubd80 \uc0c1\ud0dc\xa0\ubaa8\ub2c8\ud130\ub9c1 - \ud504\ub85c\uba54\ud14c\uc6b0\uc2a4\ub294 \uc0ac\uc6a9\uc790\uac00 \uc9c1\uc811 \uc11c\ube44\uc2a4\uc758 \ub0b4\ubd80 \uc0c1\ud0dc\ub97c \ubaa8\ub2c8\ud130\ub9c1 \ud558\ub3c4\ub85d \uad8c\uc7a5\ud569\ub2c8\ub2e4. \ub2e4\uc591\ud55c \ud074\ub77c\uc774\uc5b8\ud2b8 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub098 \uc775\uc2a4\ud3ec\ud130\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc2e4\uc81c \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ub610\ub294 \uc194\ub8e8\uc158\uc758 \uba54\ud2b8\ub9ad \uc0c1\ud0dc\ub97c \ud655\uc778\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.")),Object(l.b)("h2",{id:"\ud504\ub85c\uba54\ud14c\uc6b0\uc2a4\ub97c-\uc0ac\uc6a9\ud560-\ub54c\uc758-\ubb38\uc81c\uc810"},"\ud504\ub85c\uba54\ud14c\uc6b0\uc2a4\ub97c \uc0ac\uc6a9\ud560 \ub54c\uc758 \ubb38\uc81c\uc810"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\uc7a5\uae30 \ubcf4\uad00 - \uae30\ubcf8\uc801\uc73c\ub85c 3Byte \uc0ac\uc774\uc988\uc758 \uba54\ud2b8\ub9ad\uc774 \ucd08\ub2f9 100,000 \uac1c\uc529 \uc800\uc7a5\ub420 \uacbd\uc6b0 30\uc77c\uc5d0 500GB \uc815\ub3c4 \uc2a4\ud1a0\ub9ac\uc9c0\ub97c \uc0ac\uc6a9\ud558\uac8c \ub429\ub2c8\ub2e4. \ub85c\uceec \uc778\uc2a4\ud134\uc2a4\ub098 \ud30c\ub4dc \ud615\ud0dc\ub85c \ud504\ub85c\uba54\ud14c\uc6b0\uc2a4\ub97c \uc6b4\uc601\ud560 \uacbd\uc6b0 \uc7a5\uae30 \ubcf4\uad00\uc774 \uc27d\uc9c0 \uc54a\uc73c\uba70 \ubaa8\ub2c8\ud130\ub9c1 \ub300\uc0c1\uc774 \ub9ce\uc544\uc9c8\uc218\ub85d \ub354 \ub9ce\uc740 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\uac8c \ub429\ub2c8\ub2e4."),Object(l.b)("li",{parentName:"ul"},"\ub370\uc774\ud130 \uc18c\uc2a4 \uc911\ubcf5 - \ud504\ub85c\uba54\ud14c\uc6b0\uc2a4\ub294 \uc5ec\ub7ec \ud074\ub7ec\uc2a4\ud130\uc5d0 \uc124\uce58\ud574\uc11c \uc6b4\uc601\ud560 \uacbd\uc6b0 \ub370\uc774\ud130 \uc18c\uc2a4 \uce21\uba74\uc5d0\uc11c \uad00\ub9ac\uac00 \uc27d\uc9c0 \uc54a\uc73c\uba70,  Grafana\uc640 \uac19\uc740 \ub300\uc2dc\ubcf4\ub4dc\ub97c \uad6c\uc131\ud560 \uacbd\uc6b0 \ub3d9\uc77c\ud55c \uba54\ud2b8\ub9ad\uc5d0 \ub300\ud574\uc11c \uc5ec\ub7ec \ud074\ub7ec\uc2a4\ud130\uc5d0 \ucffc\ub9ac\ub97c \uc218\ud589\ud560 \uacbd\uc6b0 \uad6c\ubd84\ud558\uae30\uac00 \uc27d\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc774\ub85c \uc778\ud574 \uac01 \ud074\ub7ec\uc2a4\ud130 \ubcc4\ub85c \ud504\ub85c\uba54\ud14c\uc6b0\uc2a4\uac00 \uc124\uce58\ub420 \uacbd\uc6b0 \ub370\uc774\ud130\ub97c \ud1b5\ud569\ud574\uc11c \ubcf4\uae30\uac00 \uc5b4\ub835\uc2b5\ub2c8\ub2e4."),Object(l.b)("li",{parentName:"ul"},"\uadf8\ub8f9\uad00\ub9ac \ubc0f \uc0ac\uc6a9\uc790 \uc778\uc99d \uad00\ub9ac(\ubcf4\uc548) \uce21\uba74\uc5d0\uc11c \ubd80\uc871\ud55c \ubd80\ubd84\uc774 \uc788\uc2b5\ub2c8\ub2e4."),Object(l.b)("li",{parentName:"ul"},"\uc6d0\uc2dc \ub85c\uadf8 / \uc774\ubca4\ud2b8 \uc218\uc9d1\uc774 \ubd88\uac00\ud569\ub2c8\ub2e4."),Object(l.b)("li",{parentName:"ul"},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uae30\ubc18 \uc694\uccad \ucd94\uc801(Request Tracing)\uc774 \uc790\uccb4\uc801\uc73c\ub85c \uc9c0\uc6d0\uc774 \ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),Object(l.b)("li",{parentName:"ul"},"\uc774\uc0c1 \uac10\uc9c0(Anomaly Detection)\ub97c \ud558\uae30 \uc704\ud574\uc11c\ub294 \ubcc4\ub3c4\uc758 \ub370\uc774\ud130 \ubd84\uc11d \uc5ed\ub7c9\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),Object(l.b)("li",{parentName:"ul"},"\uc2a4\ucf00\uc77c\ub9c1(horizontal scaling) \ubc0f \uace0\uac00\uc6a9\uc131\uc5d0 \ub300\ud55c \uad6c\uc131\uc774 \ubcf5\uc7a1\ud569\ub2c8\ub2e4."),Object(l.b)("li",{parentName:"ul"},"\ubc30\ud3ec\ud558\uace0 \uc6b4\uc601\ud558\ub294\ub370 \ub9ce\uc740 \uacf5\uc218\uc640 \ub178\ub825\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. (PromQL \ud559\uc2b5, Grafana \ub300\uc2dc\ubcf4\ub4dc \uad6c\uc131, Alert-Rule \uc791\uc131 \ub4f1)")),Object(l.b)("h2",{id:"nexclipper"},"NexClipper"),Object(l.b)("p",null,"NexClipper\ub294 \uc774\ub7f0 \ubd80\ubd84\uc744 \ud504\ub85c\uba54\ud14c\uc6b0\uc2a4 \uc5d0\ucf54\uc2dc\uc2a4\ud15c\uc744 \uadf8\ub300\ub85c \ud65c\uc6a9\ud558\uba74\uc11c \uac00\uc9c0\uace0 \uc788\ub294 \ubb38\uc81c\uc810\uc744 \ud574\uacb0\ud558\uae30 \uc704\ud574 \uc544\ub798\uc640 \uac19\uc740 \ub85c\ub4dc\ub9f5\uc744 \uac00\uc9c0\uace0 \uac1c\ubc1c\uc911\uc785\ub2c8\ub2e4. \uae30\uc874\uc758 \uc624\ud508\uc18c\uc2a4\uc640 \uc194\ub8e8\uc158\uc744 \uc720\uc9c0\ud558\uba74\uc11c\ub3c4 \uc0c8\ub85c\uc6b4 \uae30\ub2a5\ub4e4\uc744 \ucd94\uac00\ud558\uae30 \uc704\ud574 \uc5f4\uc2ec\ud788 \ub178\ub825\uc911\uc785\ub2c8\ub2e4."),Object(l.b)("p",null,Object(l.b)("img",{alt:"architect",src:r(222).default})),Object(l.b)("p",null,"\ub2e4\uc74c\uacfc \uac19\uc740 \uae30\ub2a5\ub4e4\uc744 \ud604\uc7ac \uac1c\ubc1c\uc911\uc785\ub2c8\ub2e4. "),Object(l.b)("p",null,"\ud504\ub85c\uba54\ud14c\uc6b0\uc2a4 \uc5d0\ucf54\uc2dc\uc2a4\ud15c\uc744 \uc6b4\uc601\ud658\uacbd\uc73c\ub85c \uc5b4\ub5a4 \ud658\uacbd\uc5d0\uc11c\ub3c4 \uc27d\uace0 \ube60\ub974\uac8c \ubc30\ud3ec\uac00\ub2a5\ud569\ub2c8\ub2e4. (",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/NexClipper/provbee"}),"https://github.com/NexClipper/provbee"),")  "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\ud074\ub77c\uc6b0\ub4dc \uc11c\ube44\uc2a4\uc5d0\uc11c\ub294 \uac04\ub2e8\ud55c \uc124\uce58 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \ud1b5\ud574 \ud504\ub85c\uba54\ud14c\uc6b0\uc2a4 \uc5d0\ucf54\uc2dc\uc2a4\ud15c\uc744 \uc27d\uace0 \ube60\ub974\uac8c \ubc30\ud3ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(l.b)("li",{parentName:"ul"},"\uad6c\ucd95\ud615 \uc11c\ube44\uc2a4\uc5d0\uc11c\ub294 \ubcc4\ub3c4\uc758 \ud504\ub85c\uba54\ud14c\uc6b0\uc2a4 \uc11c\ubc84 \ud074\ub7ec\uc2a4\ud130\uc640 \uc5ec\ub7ec \uba40\ud2f0 \ud074\ub77c\uc6b0\ub4dc \ud658\uacbd\uc5d0\uc11c\uc758 \ub2e4\uc591\ud55c \uc5d0\ucf54\uc2dc\uc2a4\ud15c \uc124\uce58\uc640 \uc6b4\uc601\ud658\uacbd\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),Object(l.b)("li",{parentName:"ul"},"\uc624\ud508\uc18c\uc2a4 \uae30\ubc18\uc73c\ub85c \uc7a5\uae30\uc800\uc7a5\uc18c \uad6c\uc131\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4. (\ubca4\ub354 \uc885\uc18d\uc131 \ud0c8\ud53c)"),Object(l.b)("li",{parentName:"ul"},"\uae30\ubcf8\uc801\uc73c\ub85c TimescaleDB\ub85c \uad6c\uc131\ub418\ub294 PromScale \uae30\ubc18\uc73c\ub85c \ud504\ub85c\ube44\uc800\ub2dd\ub418\uba70, \ud544\uc694\ud560 \uacbd\uc6b0\uc5d0 \uc5b8\uc81c\ub4e0\uc9c0 \uc800\uc7a5\uae30\uac04, \uc6a9\ub7c9 \uc99d\uc124\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.")),Object(l.b)("p",null,"\ubc29\ud654\ubcbd \uac19\uc740 \ucc28\ub2e8\ud658\uacbd\uc5d0\uc11c\ub3c4 Bastion Host \uc5ed\ud560\uacfc \uc720\uc0ac\ud558\uac8c \uc624\ud508\uc18c\uc2a4 \uae30\ubc18 Task \ub9e4\ub2c8\uc800(",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/NexClipper/klevr"}),"https://github.com/NexClipper/klevr"),")\uac00 \ube44\ub3d9\uae30 \ubc29\uc2dd\uc758 Job\uc744 \uc2e4\ud589\ud558\uae30 \ub54c\ubb38\uc5d0 Private \ud074\ub77c\uc6b0\ub4dc \ud658\uacbd\uc5d0\uc11c\ub3c4 \uc6b4\uc601\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.  "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\ubcc4\ub3c4\uc758 \ucc28\ud2b8\ub97c \uc9c1\uc811 \ubc30\ud3ec\ud560 \uc218 \uc788\uace0, \ubcf4\uc548\uc0c1 \uaca9\ub9ac\ub418\uc5b4 \uc788\ub294 Private\ud658\uacbd\uc5d0\uc11c\ub3c4 \uc6b4\uc601\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),Object(l.b)("li",{parentName:"ul"},"KubeAPI\ub97c \uc9c1\uc811 Access \ud558\uc9c0 \ubabb\ud55c \uc0c1\ud0dc\uc5d0\uc11c\ub3c4 \ud074\ub7ec\uc2a4\ud130 \uc6b4\uc601\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),Object(l.b)("li",{parentName:"ul"},"\ud504\ub85c\uba54\ud14c\uc6b0\uc2a4 \ubc0f \uc5bc\ub7ff\ub9e4\ub2c8\uc800 \ucee8\ud53c\uadf8\ub97c \uc6d0\uaca9\uc5d0\uc11c \uc218\uc815\ud558\uace0 \uad00\ub9ac\uac00\ub2a5\ud569\ub2c8\ub2e4.")),Object(l.b)("p",null,"\ucffc\ub9ac \ubc0f \ub8f0 \uad00\ub828\ud55c \ud3b8\uc758\uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.  "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\uc5ec\ub7ec\uac1c\uc758 \ud504\ub85c\uba54\ud14c\uc6b0\uc2a4 \uc778\uc2a4\ud134\uc2a4\ub97c \ub3d9\uc2dc\uc5d0 \ud558\ub098\uc758 \uc5d4\ub4dc\ud3ec\uc778\ud2b8\ub85c \ucffc\ub9ac\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\ub2e8\uc77c \uc5d4\ub4dc\ud3ec\uc778\ud2b8\ub97c \ud1b5\ud574 \uc5ec\ub7ec \ub370\uc774\ud130 \uc18c\uc2a4\uc758 \uc774\ub3d9\uc744 \ucd5c\uc18c\ud654\ud558\uace0 \uba40\ud2f0\ud074\ub7ec\uc2a4\ud130\uc758 \uadf8\ub77c\ud30c\ub098 \ub300\uc2dc\ubcf4\ub4dc \uc6b4\uc601\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."))),Object(l.b)("li",{parentName:"ul"},"Promlens(",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/promlabs/promlens-public"}),"https://github.com/promlabs/promlens-public"),") Preview features\ub97c \ud3ec\ud568\ud558\uace0 \uc788\uc5b4 \uac04\ub2e8\ud55c \ucffc\ub9ac\ub97c \uc791\uc131\ud558\uace0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(l.b)("li",{parentName:"ul"},"exporter\ub97c \uad00\ub9ac\ud558\ub294 \uae30\ub2a5\uc744 \ud1b5\ud574 \uc27d\uac8c \uc124\uce58\ud558\uace0 \uc6b4\uc601\uc744 \uc704\ud55c AlertRule \uad6c\uc131\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4. (ExporterHub.io, ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/NexClipper/exporterhub.io"}),"https://github.com/NexClipper/exporterhub.io"),")")),Object(l.b)("p",null,"\uc774\uc678\uc5d0\ub3c4 \ub9ce\uc740 \uae30\ub2a5\uc744 \uc81c\uacf5\ud558\uae30 \uc704\ud574 \uace0\uad70\ubd84\ud22c\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."),Object(l.b)("h2",{id:"\uc815\ub9ac"},Object(l.b)("strong",{parentName:"h2"},"\uc815\ub9ac")),Object(l.b)("p",null,"\uc774\ubc88 \ud3ec\uc2a4\ud305\uc5d0\uc11c\ub294 \ucfe0\ubc84\ub124\ud2f0\uc2a4 \ud658\uacbd\uc5d0\uc11c\uc758 \ubaa8\ub2c8\ud130\ub9c1\uacfc \ud504\ub85c\uba54\ud14c\uc6b0\uc2a4\uc758 \uc7a5\ub2e8\uc810 \uadf8\ub9ac\uace0 \ub2e8\uc810\uc744 \uadf9\ubcf5\ud558\uae30 \uc704\ud55c \ud5a5\ud6c4 NexClipper\uc758 \uac1c\ubc1c \ub85c\ub4dc\ub9f5\ub3c4 \uac19\uc774 \uc124\uba85\ub4dc\ub838\uc2b5\ub2c8\ub2e4."),Object(l.b)("p",null,"\uad81\uae08\ud55c \ub0b4\uc6a9\uc774 \uc788\uc73c\uc2dc\uac70\ub098 \ucd94\uac00\uc801\uc778 \uc815\ubcf4\ub97c \uc6d0\ud558\uc2dc\uba74 KubeCon North America 2020 NexClipper Booth\uc5d0 \ubc29\ubb38\ud558\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4. "),Object(l.b)("p",null,"\ube14\ub85c\uadf8 \ub0b4\uc6a9\uc744 \ud3ec\ud568\ud55c \uc800\ud76c\uc758 \ubaa8\ub4e0 \uae30\uc220\uacfc \uc81c\ud488\uc5d0 \ub300\ud55c \ub2e4\uc591\ud55c \ud53c\ub4dc\ubc31 \ubd80\ud0c1\ub4dc\ub9ac\uace0, \uc5b8\uc81c\ub4e0\uc9c0 \uad81\uae08\ud55c \uc0ac\ud56d\uc774 \uc788\uc73c\uc2dc\uac70\ub098 \uae30\uc220 \ubbf8\ud305 \ub4f1 \ud544\uc694\ud55c \uc0ac\ud56d\uc774 \uc788\uc73c\uc2dc\uba74 \uc5b8\uc81c\ub4e0\uc9c0\xa0",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:support@nexclipper.io"}),"support@nexclipper.io"),"\xa0\ub85c \uc5f0\ub77d \uc8fc\uc2dc\uba74 \ube60\ub978 \uc2dc\uac04 \ub0b4\uc5d0 \ud68c\uc2e0 \ub4dc\ub9ac\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4."),Object(l.b)("h2",{id:"\ub125\uc2a4\ud074\ub77c\uc6b0\ub4dc-\uc18c\uac1c-\ubc0f-\ucc44\uc6a9"},Object(l.b)("strong",{parentName:"h2"},"\ub125\uc2a4\ud074\ub77c\uc6b0\ub4dc \uc18c\uac1c \ubc0f \ucc44\uc6a9")),Object(l.b)("p",null,Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.nexclipper.io/"}),"\ub125\uc2a4\ud074\ub77c\uc6b0\ub4dc"),"\ub294 \ucee8\ud14c\uc774\ub108 \uae30\ubc18 \ud074\ub77c\uc6b0\ub4dc \uae30\uc220 \ud68c\uc0ac\uc785\ub2c8\ub2e4.\n2020\ub144 \ud558\ubc18\uae30\ubd80\ud130 \ubcf8\uaca9\uc801\uc778 \uae00\ub85c\ubc8c \uc0ac\uc5c5\uc744 \uc704\ud574 \ud604\uc7ac \ubbf8\uad6d \ubc95\uc778 \uc124\ub9bd\uc744 \uc9c4\ud589 \uc911\uc774\uba70 \ub2a5\ub825\uc788\ub294 \ubd84\ub4e4\uc744 \ubaa8\uc2dc\uace0 \uc788\uc2b5\ub2c8\ub2e4."),Object(l.b)("p",null,Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.notion.so/nexclipper/Engineer-a83352e7b6a24bbbb1ac77bf83a7026b"}),"\uac1c\ubc1c\uc790 (Engineer) \ubd80\ubb38"),"\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.notion.so/nexclipper/Job-description-63e5113b79a943f28a75c1eca1e0f50a"}),"Product Marketing Manager"),"\n",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.notion.so/nexclipper/Cloud-Platform-Consulting-Manager-871f792b04994afeb40984dbe05da386"}),"Cloud Platform Consulting Manager")))}i.isMDXComponent=!0},189:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var a=r(0),n=r.n(a);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=n.a.createContext({}),i=function(e){var t=n.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):b(b({},t),e)),r},u=function(e){var t=i(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=i(r),s=a,h=u["".concat(p,".").concat(s)]||u[s]||m[s]||l;return r?n.a.createElement(h,b(b({ref:t},c),{},{components:r})):n.a.createElement(h,b({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,p=new Array(l);p[0]=s;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,p[1]=b;for(var c=2;c<l;c++)p[c]=r[c];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},222:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/nexclipper_architect-78e0205e7a7716f0d1383230db35a37a.png"}}]);