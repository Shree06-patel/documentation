(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{171:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return d}));var a=n(3),c=n(7),i=(n(0),n(411)),r=n(415),l=n(416),o={title:"amqp_0_9",type:"output",status:"stable",categories:["Services"]},b={unversionedId:"components/outputs/amqp_0_9",id:"components/outputs/amqp_0_9",isDocsHomePage:!1,title:"amqp_0_9",description:"\x3c!--",source:"@site/docs/components/outputs/amqp_0_9.md",slug:"/components/outputs/amqp_0_9",permalink:"/docs/components/outputs/amqp_0_9",editUrl:"https://github.com/Jeffail/benthos/edit/master/website/docs/components/outputs/amqp_0_9.md",version:"current",sidebar:"docs",previous:{title:"Outputs",permalink:"/docs/components/outputs/about"},next:{title:"amqp_1",permalink:"/docs/components/outputs/amqp_1"}},p=[{value:"Performance",id:"performance",children:[]},{value:"Fields",id:"fields",children:[{value:"<code>url</code>",id:"url",children:[]},{value:"<code>exchange</code>",id:"exchange",children:[]},{value:"<code>exchange_declare</code>",id:"exchange_declare",children:[]},{value:"<code>exchange_declare.enabled</code>",id:"exchange_declareenabled",children:[]},{value:"<code>exchange_declare.type</code>",id:"exchange_declaretype",children:[]},{value:"<code>exchange_declare.durable</code>",id:"exchange_declaredurable",children:[]},{value:"<code>key</code>",id:"key",children:[]},{value:"<code>type</code>",id:"type",children:[]},{value:"<code>content_type</code>",id:"content_type",children:[]},{value:"<code>content_encoding</code>",id:"content_encoding",children:[]},{value:"<code>max_in_flight</code>",id:"max_in_flight",children:[]},{value:"<code>persistent</code>",id:"persistent",children:[]},{value:"<code>mandatory</code>",id:"mandatory",children:[]},{value:"<code>immediate</code>",id:"immediate",children:[]},{value:"<code>tls</code>",id:"tls",children:[]},{value:"<code>tls.enabled</code>",id:"tlsenabled",children:[]},{value:"<code>tls.skip_cert_verify</code>",id:"tlsskip_cert_verify",children:[]},{value:"<code>tls.root_cas_file</code>",id:"tlsroot_cas_file",children:[]},{value:"<code>tls.client_certs</code>",id:"tlsclient_certs",children:[]},{value:"<code>tls.client_certs[].cert</code>",id:"tlsclient_certscert",children:[]},{value:"<code>tls.client_certs[].key</code>",id:"tlsclient_certskey",children:[]},{value:"<code>tls.client_certs[].cert_file</code>",id:"tlsclient_certscert_file",children:[]},{value:"<code>tls.client_certs[].key_file</code>",id:"tlsclient_certskey_file",children:[]}]}],s={toc:p};function d(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Sends messages to an AMQP (0.91) exchange. AMQP is a messaging protocol used by\nvarious message brokers, including RabbitMQ."),Object(i.b)(r.a,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"common",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# Common config fields, showing default values\noutput:\n  amqp_0_9:\n    url: amqp://guest:guest@localhost:5672/\n    exchange: benthos-exchange\n    key: benthos-key\n    type: ""\n    max_in_flight: 1\n'))),Object(i.b)(l.a,{value:"advanced",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# All config fields, showing default values\noutput:\n  amqp_0_9:\n    url: amqp://guest:guest@localhost:5672/\n    exchange: benthos-exchange\n    exchange_declare:\n      enabled: false\n      type: direct\n      durable: true\n    key: benthos-key\n    type: ""\n    content_type: application/octet-stream\n    content_encoding: ""\n    max_in_flight: 1\n    persistent: false\n    mandatory: false\n    immediate: false\n    tls:\n      enabled: false\n      skip_cert_verify: false\n      root_cas_file: ""\n      client_certs: []\n')))),Object(i.b)("p",null,"The metadata from each message are delivered as headers."),Object(i.b)("p",null,"It's possible for this output type to create the target exchange by setting\n",Object(i.b)("inlineCode",{parentName:"p"},"exchange_declare.enabled")," to ",Object(i.b)("inlineCode",{parentName:"p"},"true"),", if the exchange already exists\nthen the declaration passively verifies that the settings match."),Object(i.b)("p",null,"TLS is automatic when connecting to an ",Object(i.b)("inlineCode",{parentName:"p"},"amqps")," URL, but custom\nsettings can be enabled in the ",Object(i.b)("inlineCode",{parentName:"p"},"tls")," section."),Object(i.b)("p",null,"The fields 'key' and 'type' can be dynamically set using function interpolations described\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration/interpolation#bloblang-queries"}),"here"),"."),Object(i.b)("h2",{id:"performance"},"Performance"),Object(i.b)("p",null,"This output benefits from sending multiple messages in flight in parallel for\nimproved performance. You can tune the max number of in flight messages with the\nfield ",Object(i.b)("inlineCode",{parentName:"p"},"max_in_flight"),"."),Object(i.b)("h2",{id:"fields"},"Fields"),Object(i.b)("h3",{id:"url"},Object(i.b)("inlineCode",{parentName:"h3"},"url")),Object(i.b)("p",null,"A URL to connect to."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'"amqp://guest:guest@localhost:5672/"'),"  "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Examples\n\nurl: amqp://localhost:5672/\n\nurl: amqps://guest:guest@localhost:5672/\n")),Object(i.b)("h3",{id:"exchange"},Object(i.b)("inlineCode",{parentName:"h3"},"exchange")),Object(i.b)("p",null,"An AMQP exchange to publish to."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'"benthos-exchange"'),"  "),Object(i.b)("h3",{id:"exchange_declare"},Object(i.b)("inlineCode",{parentName:"h3"},"exchange_declare")),Object(i.b)("p",null,"Optionally declare the target exchange (passive)."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"object"),"  "),Object(i.b)("h3",{id:"exchange_declareenabled"},Object(i.b)("inlineCode",{parentName:"h3"},"exchange_declare.enabled")),Object(i.b)("p",null,"Whether to declare the exchange."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"bool"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"  "),Object(i.b)("h3",{id:"exchange_declaretype"},Object(i.b)("inlineCode",{parentName:"h3"},"exchange_declare.type")),Object(i.b)("p",null,"The type of the exchange."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'"direct"'),Object(i.b)("br",{parentName:"p"}),"\n","Options: ",Object(i.b)("inlineCode",{parentName:"p"},"direct"),", ",Object(i.b)("inlineCode",{parentName:"p"},"fanout"),", ",Object(i.b)("inlineCode",{parentName:"p"},"topic"),", ",Object(i.b)("inlineCode",{parentName:"p"},"x-custom"),"."),Object(i.b)("h3",{id:"exchange_declaredurable"},Object(i.b)("inlineCode",{parentName:"h3"},"exchange_declare.durable")),Object(i.b)("p",null,"Whether the exchange should be durable."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"bool"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},"true"),"  "),Object(i.b)("h3",{id:"key"},Object(i.b)("inlineCode",{parentName:"h3"},"key")),Object(i.b)("p",null,"The binding key to set for each message.\nThis field supports ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration/interpolation#bloblang-queries"}),"interpolation functions"),"."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'"benthos-key"'),"  "),Object(i.b)("h3",{id:"type"},Object(i.b)("inlineCode",{parentName:"h3"},"type")),Object(i.b)("p",null,"The type property to set for each message.\nThis field supports ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration/interpolation#bloblang-queries"}),"interpolation functions"),"."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"content_type"},Object(i.b)("inlineCode",{parentName:"h3"},"content_type")),Object(i.b)("p",null,"The content type attribute to set for each message.\nThis field supports ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration/interpolation#bloblang-queries"}),"interpolation functions"),"."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'"application/octet-stream"'),"  "),Object(i.b)("h3",{id:"content_encoding"},Object(i.b)("inlineCode",{parentName:"h3"},"content_encoding")),Object(i.b)("p",null,"The content encoding attribute to set for each message.\nThis field supports ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration/interpolation#bloblang-queries"}),"interpolation functions"),"."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"max_in_flight"},Object(i.b)("inlineCode",{parentName:"h3"},"max_in_flight")),Object(i.b)("p",null,"The maximum number of messages to have in flight at a given time. Increase this to improve throughput."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"number"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},"1"),"  "),Object(i.b)("h3",{id:"persistent"},Object(i.b)("inlineCode",{parentName:"h3"},"persistent")),Object(i.b)("p",null,"Whether message delivery should be persistent (transient by default)."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"bool"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"  "),Object(i.b)("h3",{id:"mandatory"},Object(i.b)("inlineCode",{parentName:"h3"},"mandatory")),Object(i.b)("p",null,"Whether to set the mandatory flag on published messages. When set if a published message is routed to zero queues it is returned."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"bool"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"  "),Object(i.b)("h3",{id:"immediate"},Object(i.b)("inlineCode",{parentName:"h3"},"immediate")),Object(i.b)("p",null,"Whether to set the immediate flag on published messages. When set if there are no ready consumers of a queue then the message is dropped instead of waiting."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"bool"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"  "),Object(i.b)("h3",{id:"tls"},Object(i.b)("inlineCode",{parentName:"h3"},"tls")),Object(i.b)("p",null,"Custom TLS settings can be used to override system defaults."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"object"),"  "),Object(i.b)("h3",{id:"tlsenabled"},Object(i.b)("inlineCode",{parentName:"h3"},"tls.enabled")),Object(i.b)("p",null,"Whether custom TLS settings are enabled."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"bool"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"  "),Object(i.b)("h3",{id:"tlsskip_cert_verify"},Object(i.b)("inlineCode",{parentName:"h3"},"tls.skip_cert_verify")),Object(i.b)("p",null,"Whether to skip server side certificate verification."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"bool"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"  "),Object(i.b)("h3",{id:"tlsroot_cas_file"},Object(i.b)("inlineCode",{parentName:"h3"},"tls.root_cas_file")),Object(i.b)("p",null,"An optional path of a root certificate authority file to use. This is a file, often with a .pem extension, containing a certificate chain from the parent trusted root certificate, to possible intermediate signing certificates, to the host certificate."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Examples\n\nroot_cas_file: ./root_cas.pem\n")),Object(i.b)("h3",{id:"tlsclient_certs"},Object(i.b)("inlineCode",{parentName:"h3"},"tls.client_certs")),Object(i.b)("p",null,"A list of client certificates to use. For each certificate either the fields ",Object(i.b)("inlineCode",{parentName:"p"},"cert")," and ",Object(i.b)("inlineCode",{parentName:"p"},"key"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"cert_file")," and ",Object(i.b)("inlineCode",{parentName:"p"},"key_file")," should be specified, but not both."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"array"),"  "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Examples\n\nclient_certs:\n  - cert: foo\n    key: bar\n\nclient_certs:\n  - cert_file: ./example.pem\n    key_file: ./example.key\n")),Object(i.b)("h3",{id:"tlsclient_certscert"},Object(i.b)("inlineCode",{parentName:"h3"},"tls.client_certs[].cert")),Object(i.b)("p",null,"A plain text certificate to use."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"tlsclient_certskey"},Object(i.b)("inlineCode",{parentName:"h3"},"tls.client_certs[].key")),Object(i.b)("p",null,"A plain text certificate key to use."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"tlsclient_certscert_file"},Object(i.b)("inlineCode",{parentName:"h3"},"tls.client_certs[].cert_file")),Object(i.b)("p",null,"The path to a certificate to use."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"tlsclient_certskey_file"},Object(i.b)("inlineCode",{parentName:"h3"},"tls.client_certs[].key_file")),Object(i.b)("p",null,"The path of a certificate key to use."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "))}d.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),c=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var b=c.a.createContext({}),p=function(e){var t=c.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return c.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},u=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),s=p(n),u=a,m=s["".concat(r,".").concat(u)]||s[u]||d[u]||i;return n?c.a.createElement(m,l(l({ref:t},b),{},{components:n})):c.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var b=2;b<i;b++)r[b]=n[b];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},412:function(e,t,n){"use strict";function a(e){var t,n,c="";if("string"==typeof e||"number"==typeof e)c+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(c&&(c+=" "),c+=n);else for(t in e)e[t]&&(c&&(c+=" "),c+=t);return c}t.a=function(){for(var e,t,n=0,c="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(c&&(c+=" "),c+=t);return c}},413:function(e,t,n){"use strict";var a=n(0),c=n(414);t.a=function(){var e=Object(a.useContext)(c.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},414:function(e,t,n){"use strict";var a=n(0),c=Object(a.createContext)(void 0);t.a=c},415:function(e,t,n){"use strict";var a=n(0),c=n.n(a),i=n(413),r=n(412),l=n(56),o=n.n(l),b=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,s=e.values,d=e.groupId,u=e.className,m=Object(i.a)(),h=m.tabGroupChoices,O=m.setTabGroupChoices,f=Object(a.useState)(l),j=f[0],g=f[1],y=a.Children.toArray(e.children);if(null!=d){var _=h[d];null!=_&&_!==j&&s.some((function(e){return e.value===_}))&&g(_)}var N=function(e){g(e),null!=d&&O(d,e)},v=[];return c.a.createElement("div",null,c.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":n},u)},s.map((function(e){var t=e.value,n=e.label;return c.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(r.a)("tabs__item",o.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(v,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(a.cloneElement)(y.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):c.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},416:function(e,t,n){"use strict";var a=n(3),c=n(0),i=n.n(c);t.a=function(e){var t=e.children,n=e.hidden,c=e.className;return i.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:c}),t)}}}]);