(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{411:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||c;return n?r.a.createElement(m,o(o({ref:t},b),{},{components:n})):r.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var b=2;b<c;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},412:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},413:function(e,t,n){"use strict";var a=n(0),r=n(414);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},414:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},415:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(413),l=n(412),o=n(56),i=n.n(o),b=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,p=e.values,u=e.groupId,d=e.className,m=Object(c.a)(),j=m.tabGroupChoices,O=m.setTabGroupChoices,f=Object(a.useState)(o),g=f[0],h=f[1],v=a.Children.toArray(e.children);if(null!=u){var y=j[u];null!=y&&y!==g&&p.some((function(e){return e.value===y}))&&h(y)}var N=function(e){h(e),null!=u&&O(u,e)},_=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(l.a)("tabs__item",i.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return _.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(_,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(a.cloneElement)(v.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},416:function(e,t,n){"use strict";var a=n(3),r=n(0),c=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return c.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),c=(n(0),n(411)),l=n(415),o=n(416),i={title:"jaeger",type:"tracer",status:"stable"},b={unversionedId:"components/tracers/jaeger",id:"components/tracers/jaeger",isDocsHomePage:!1,title:"jaeger",description:"\x3c!--",source:"@site/docs/components/tracers/jaeger.md",slug:"/components/tracers/jaeger",permalink:"/docs/components/tracers/jaeger",editUrl:"https://github.com/Jeffail/benthos/edit/master/website/docs/components/tracers/jaeger.md",version:"current",sidebar:"docs",previous:{title:"Tracers",permalink:"/docs/components/tracers/about"},next:{title:"none",permalink:"/docs/components/tracers/none"}},s=[{value:"Fields",id:"fields",children:[{value:"<code>agent_address</code>",id:"agent_address",children:[]},{value:"<code>collector_url</code>",id:"collector_url",children:[]},{value:"<code>service_name</code>",id:"service_name",children:[]},{value:"<code>sampler_type</code>",id:"sampler_type",children:[]},{value:"<code>sampler_manager_address</code>",id:"sampler_manager_address",children:[]},{value:"<code>sampler_param</code>",id:"sampler_param",children:[]},{value:"<code>tags</code>",id:"tags",children:[]},{value:"<code>flush_interval</code>",id:"flush_interval",children:[]}]}],p={toc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Send spans to a ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.jaegertracing.io/"}),"Jaeger")," agent."),Object(c.b)(l.a,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(c.b)(o.a,{value:"common",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# Common config fields, showing default values\ntracer:\n  jaeger:\n    agent_address: localhost:6831\n    collector_url: ""\n    service_name: benthos\n    sampler_type: const\n    flush_interval: ""\n'))),Object(c.b)(o.a,{value:"advanced",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# All config fields, showing default values\ntracer:\n  jaeger:\n    agent_address: localhost:6831\n    collector_url: ""\n    service_name: benthos\n    sampler_type: const\n    sampler_manager_address: ""\n    sampler_param: 1\n    tags: {}\n    flush_interval: ""\n')))),Object(c.b)("h2",{id:"fields"},"Fields"),Object(c.b)("h3",{id:"agent_address"},Object(c.b)("inlineCode",{parentName:"h3"},"agent_address")),Object(c.b)("p",null,"The address of a Jaeger agent to send tracing events to."),Object(c.b)("p",null,"Type: ",Object(c.b)("inlineCode",{parentName:"p"},"string"),Object(c.b)("br",{parentName:"p"}),"\n","Default: ",Object(c.b)("inlineCode",{parentName:"p"},'"localhost:6831"'),"  "),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Examples\n\nagent_address: jaeger-agent:6831\n")),Object(c.b)("h3",{id:"collector_url"},Object(c.b)("inlineCode",{parentName:"h3"},"collector_url")),Object(c.b)("p",null,"The URL of a Jaeger collector to send tracing events to. If set, this will override ",Object(c.b)("inlineCode",{parentName:"p"},"agent_address"),"."),Object(c.b)("p",null,"Type: ",Object(c.b)("inlineCode",{parentName:"p"},"string"),Object(c.b)("br",{parentName:"p"}),"\n","Default: ",Object(c.b)("inlineCode",{parentName:"p"},'""'),Object(c.b)("br",{parentName:"p"}),"\n","Requires version 3.38.0 or newer  "),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Examples\n\ncollector_url: https://jaeger-collector:14268/api/traces\n")),Object(c.b)("h3",{id:"service_name"},Object(c.b)("inlineCode",{parentName:"h3"},"service_name")),Object(c.b)("p",null,"A name to provide for this service."),Object(c.b)("p",null,"Type: ",Object(c.b)("inlineCode",{parentName:"p"},"string"),Object(c.b)("br",{parentName:"p"}),"\n","Default: ",Object(c.b)("inlineCode",{parentName:"p"},'"benthos"'),"  "),Object(c.b)("h3",{id:"sampler_type"},Object(c.b)("inlineCode",{parentName:"h3"},"sampler_type")),Object(c.b)("p",null,"The sampler type to use."),Object(c.b)("p",null,"Type: ",Object(c.b)("inlineCode",{parentName:"p"},"string"),Object(c.b)("br",{parentName:"p"}),"\n","Default: ",Object(c.b)("inlineCode",{parentName:"p"},'"const"'),"  "),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Option"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Summary"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"const")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"A constant decision for all traces, either 1 or 0.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"probabilistic")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The sampler makes a random sampling decision with the probability of sampling equal to the value of sampler param.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"ratelimiting")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The sampler uses a leaky bucket rate limiter to ensure that traces are sampled with a certain constant rate.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"remote")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The sampler consults Jaeger agent for the appropriate sampling strategy to use in the current service.")))),Object(c.b)("h3",{id:"sampler_manager_address"},Object(c.b)("inlineCode",{parentName:"h3"},"sampler_manager_address")),Object(c.b)("p",null,"An optional address of a sampler manager."),Object(c.b)("p",null,"Type: ",Object(c.b)("inlineCode",{parentName:"p"},"string"),Object(c.b)("br",{parentName:"p"}),"\n","Default: ",Object(c.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(c.b)("h3",{id:"sampler_param"},Object(c.b)("inlineCode",{parentName:"h3"},"sampler_param")),Object(c.b)("p",null,"A parameter to use for sampling. This field is unused for some sampling types."),Object(c.b)("p",null,"Type: ",Object(c.b)("inlineCode",{parentName:"p"},"number"),Object(c.b)("br",{parentName:"p"}),"\n","Default: ",Object(c.b)("inlineCode",{parentName:"p"},"1"),"  "),Object(c.b)("h3",{id:"tags"},Object(c.b)("inlineCode",{parentName:"h3"},"tags")),Object(c.b)("p",null,"A map of tags to add to tracing spans."),Object(c.b)("p",null,"Type: ",Object(c.b)("inlineCode",{parentName:"p"},"object"),Object(c.b)("br",{parentName:"p"}),"\n","Default: ",Object(c.b)("inlineCode",{parentName:"p"},"{}"),"  "),Object(c.b)("h3",{id:"flush_interval"},Object(c.b)("inlineCode",{parentName:"h3"},"flush_interval")),Object(c.b)("p",null,"The period of time between each flush of tracing spans."),Object(c.b)("p",null,"Type: ",Object(c.b)("inlineCode",{parentName:"p"},"string"),Object(c.b)("br",{parentName:"p"}),"\n","Default: ",Object(c.b)("inlineCode",{parentName:"p"},'""'),"  "))}u.isMDXComponent=!0}}]);