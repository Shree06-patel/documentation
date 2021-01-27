(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{358:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),s=(t(0),t(411)),c=t(415),o=t(416),i={title:"subprocess",type:"processor",status:"stable",categories:["Integration"]},l={unversionedId:"components/processors/subprocess",id:"components/processors/subprocess",isDocsHomePage:!1,title:"subprocess",description:"\x3c!--",source:"@site/docs/components/processors/subprocess.md",slug:"/components/processors/subprocess",permalink:"/docs/components/processors/subprocess",editUrl:"https://github.com/Jeffail/benthos/edit/master/website/docs/components/processors/subprocess.md",version:"current",sidebar:"docs",previous:{title:"sql",permalink:"/docs/components/processors/sql"},next:{title:"switch",permalink:"/docs/components/processors/switch"}},b=[{value:"Subprocess requirements",id:"subprocess-requirements",children:[]},{value:"Messages containing line breaks",id:"messages-containing-line-breaks",children:[]},{value:"Fields",id:"fields",children:[{value:"<code>name</code>",id:"name",children:[]},{value:"<code>args</code>",id:"args",children:[]},{value:"<code>max_buffer</code>",id:"max_buffer",children:[]},{value:"<code>codec_send</code>",id:"codec_send",children:[]},{value:"<code>codec_recv</code>",id:"codec_recv",children:[]},{value:"<code>parts</code>",id:"parts",children:[]}]}],p={toc:b};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Executes a command as a subprocess and, for each message, will pipe its contents to the stdin stream of the process followed by a newline."),Object(s.b)(c.a,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(s.b)(o.a,{value:"common",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"# Common config fields, showing default values\nsubprocess:\n  name: cat\n  args: []\n"))),Object(s.b)(o.a,{value:"advanced",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"# All config fields, showing default values\nsubprocess:\n  name: cat\n  args: []\n  max_buffer: 65536\n  codec_send: lines\n  codec_recv: lines\n  parts: []\n")))),Object(s.b)("p",null,"The subprocess must then either return a line over stdout or stderr. If a response is returned over stdout then its contents will replace the message. If a response is instead returned from stderr it will be logged and the message will continue unchanged and will be ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/configuration/error_handling"}),"marked as failed"),"."),Object(s.b)("p",null,"Rather than separating data by a newline it's possible to specify alternative ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"#codec_send"}),Object(s.b)("inlineCode",{parentName:"a"},"codec_send"))," and ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"#codec_recv"}),Object(s.b)("inlineCode",{parentName:"a"},"codec_recv"))," values, which allow binary messages to be encoded for logical separation."),Object(s.b)("p",null,"The execution environment of the subprocess is the same as the Benthos instance, including environment variables and the current working directory."),Object(s.b)("p",null,"The field ",Object(s.b)("inlineCode",{parentName:"p"},"max_buffer")," defines the maximum response size able to be read from the subprocess. This value should be set significantly above the real expected maximum response size."),Object(s.b)("h2",{id:"subprocess-requirements"},"Subprocess requirements"),Object(s.b)("p",null,"It is required that subprocesses flush their stdout and stderr pipes for each line. Benthos will attempt to keep the process alive for as long as the pipeline is running. If the process exits early it will be restarted."),Object(s.b)("h2",{id:"messages-containing-line-breaks"},"Messages containing line breaks"),Object(s.b)("p",null,"If a message contains line breaks each line of the message is piped to the subprocess and flushed, and a response is expected from the subprocess before another line is fed in."),Object(s.b)("h2",{id:"fields"},"Fields"),Object(s.b)("h3",{id:"name"},Object(s.b)("inlineCode",{parentName:"h3"},"name")),Object(s.b)("p",null,"The command to execute as a subprocess."),Object(s.b)("p",null,"Type: ",Object(s.b)("inlineCode",{parentName:"p"},"string"),Object(s.b)("br",{parentName:"p"}),"\n","Default: ",Object(s.b)("inlineCode",{parentName:"p"},'"cat"'),"  "),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"# Examples\n\nname: cat\n\nname: sed\n\nname: awk\n")),Object(s.b)("h3",{id:"args"},Object(s.b)("inlineCode",{parentName:"h3"},"args")),Object(s.b)("p",null,"A list of arguments to provide the command."),Object(s.b)("p",null,"Type: ",Object(s.b)("inlineCode",{parentName:"p"},"array"),Object(s.b)("br",{parentName:"p"}),"\n","Default: ",Object(s.b)("inlineCode",{parentName:"p"},"[]"),"  "),Object(s.b)("h3",{id:"max_buffer"},Object(s.b)("inlineCode",{parentName:"h3"},"max_buffer")),Object(s.b)("p",null,"The maximum expected response size."),Object(s.b)("p",null,"Type: ",Object(s.b)("inlineCode",{parentName:"p"},"number"),Object(s.b)("br",{parentName:"p"}),"\n","Default: ",Object(s.b)("inlineCode",{parentName:"p"},"65536"),"  "),Object(s.b)("h3",{id:"codec_send"},Object(s.b)("inlineCode",{parentName:"h3"},"codec_send")),Object(s.b)("p",null,"Determines how messages written to the subprocess are encoded, which allows them to be logically separated."),Object(s.b)("p",null,"Type: ",Object(s.b)("inlineCode",{parentName:"p"},"string"),Object(s.b)("br",{parentName:"p"}),"\n","Default: ",Object(s.b)("inlineCode",{parentName:"p"},'"lines"'),Object(s.b)("br",{parentName:"p"}),"\n","Requires version 3.37.0 or newer",Object(s.b)("br",{parentName:"p"}),"\n","Options: ",Object(s.b)("inlineCode",{parentName:"p"},"lines"),", ",Object(s.b)("inlineCode",{parentName:"p"},"length_prefixed_uint32_be"),", ",Object(s.b)("inlineCode",{parentName:"p"},"netstring"),"."),Object(s.b)("h3",{id:"codec_recv"},Object(s.b)("inlineCode",{parentName:"h3"},"codec_recv")),Object(s.b)("p",null,"Determines how messages read from the subprocess are decoded, which allows them to be logically separated."),Object(s.b)("p",null,"Type: ",Object(s.b)("inlineCode",{parentName:"p"},"string"),Object(s.b)("br",{parentName:"p"}),"\n","Default: ",Object(s.b)("inlineCode",{parentName:"p"},'"lines"'),Object(s.b)("br",{parentName:"p"}),"\n","Requires version 3.37.0 or newer",Object(s.b)("br",{parentName:"p"}),"\n","Options: ",Object(s.b)("inlineCode",{parentName:"p"},"lines"),", ",Object(s.b)("inlineCode",{parentName:"p"},"length_prefixed_uint32_be"),", ",Object(s.b)("inlineCode",{parentName:"p"},"netstring"),"."),Object(s.b)("h3",{id:"parts"},Object(s.b)("inlineCode",{parentName:"h3"},"parts")),Object(s.b)("p",null,"An optional array of message indexes of a batch that the processor should apply to.\nIf left empty all messages are processed. This field is only applicable when\nbatching messages ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/configuration/batching"}),"at the input level"),"."),Object(s.b)("p",null,"Indexes can be negative, and if so the part will be selected from the end\ncounting backwards starting from -1."),Object(s.b)("p",null,"Type: ",Object(s.b)("inlineCode",{parentName:"p"},"array"),Object(s.b)("br",{parentName:"p"}),"\n","Default: ",Object(s.b)("inlineCode",{parentName:"p"},"[]"),"  "))}u.isMDXComponent=!0},411:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),b=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=b(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=b(t),d=r,m=p["".concat(c,".").concat(d)]||p[d]||u[d]||s;return t?a.a.createElement(m,o(o({ref:n},l),{},{components:t})):a.a.createElement(m,o({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,c=new Array(s);c[0]=d;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<s;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},412:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},413:function(e,n,t){"use strict";var r=t(0),a=t(414);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},414:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},415:function(e,n,t){"use strict";var r=t(0),a=t.n(r),s=t(413),c=t(412),o=t(56),i=t.n(o),l=37,b=39;n.a=function(e){var n=e.lazy,t=e.block,o=e.defaultValue,p=e.values,u=e.groupId,d=e.className,m=Object(s.a)(),f=m.tabGroupChoices,O=m.setTabGroupChoices,h=Object(r.useState)(o),j=h[0],g=h[1],v=r.Children.toArray(e.children);if(null!=u){var y=f[u];null!=y&&y!==j&&p.some((function(e){return e.value===y}))&&g(y)}var N=function(e){g(e),null!=u&&O(u,e)},w=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t},d)},p.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===n,className:Object(c.a)("tabs__item",i.a.tabItem,{"tabs__item--active":j===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case b:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case l:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(w,e.target,e)},onFocus:function(){return N(n)},onClick:function(){N(n)}},t)}))),n?Object(r.cloneElement)(v.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return Object(r.cloneElement)(e,{key:n,hidden:e.props.value!==j})}))))}},416:function(e,n,t){"use strict";var r=t(3),a=t(0),s=t.n(a);n.a=function(e){var n=e.children,t=e.hidden,a=e.className;return s.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:t,className:a}),n)}}}]);