(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{303:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(411)),i=(n(415),n(416),{title:"file",type:"output",status:"stable",categories:["Local"]}),c={unversionedId:"components/outputs/file",id:"components/outputs/file",isDocsHomePage:!1,title:"file",description:"\x3c!--",source:"@site/docs/components/outputs/file.md",slug:"/components/outputs/file",permalink:"/docs/components/outputs/file",editUrl:"https://github.com/Jeffail/benthos/edit/master/website/docs/components/outputs/file.md",version:"current",sidebar:"docs",previous:{title:"elasticsearch",permalink:"/docs/components/outputs/elasticsearch"},next:{title:"gcp_pubsub",permalink:"/docs/components/outputs/gcp_pubsub"}},l=[{value:"Fields",id:"fields",children:[{value:"<code>path</code>",id:"path",children:[]},{value:"<code>codec</code>",id:"codec",children:[]}]}],s={toc:l};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Writes messages to files on disk based on a chosen codec."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# Config fields, showing default values\noutput:\n  file:\n    path: ""\n    codec: lines\n')),Object(o.b)("p",null,"Messages can be written to different files by using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration/interpolation#bloblang-queries"}),"interpolation functions")," in the path field. However, only one file is ever open at a given time, and therefore when the path changes the previously open file is closed."),Object(o.b)("h2",{id:"fields"},"Fields"),Object(o.b)("h3",{id:"path"},Object(o.b)("inlineCode",{parentName:"h3"},"path")),Object(o.b)("p",null,"The file to write to, if the file does not yet exist it will be created.\nThis field supports ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration/interpolation#bloblang-queries"}),"interpolation functions"),"."),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"string"),Object(o.b)("br",{parentName:"p"}),"\n","Default: ",Object(o.b)("inlineCode",{parentName:"p"},'""'),Object(o.b)("br",{parentName:"p"}),"\n","Requires version 3.33.0 or newer  "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# Examples\n\npath: /tmp/data.txt\n\npath: /tmp/${! timestamp_unix() }.txt\n\npath: /tmp/${! json("document.id") }.json\n')),Object(o.b)("h3",{id:"codec"},Object(o.b)("inlineCode",{parentName:"h3"},"codec")),Object(o.b)("p",null,"The way in which the bytes of messages should be written out into the output file. It's possible to write lines using a custom delimiter with the ",Object(o.b)("inlineCode",{parentName:"p"},"delim:x")," codec, where x is the character sequence custom delimiter."),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"string"),Object(o.b)("br",{parentName:"p"}),"\n","Default: ",Object(o.b)("inlineCode",{parentName:"p"},'"lines"'),Object(o.b)("br",{parentName:"p"}),"\n","Requires version 3.33.0 or newer  "),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Option"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Summary"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"all-bytes")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Write the message to the file in full. If the file already exists the old content is deleted.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"append")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Append messages to the file.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"lines")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Append messages to the file followed by a line break.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"delim:x")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Append messages to the file followed by a custom delimiter.")))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# Examples\n\ncodec: lines\n\ncodec: "delim:\\t"\n\ncodec: delim:foobar\n')))}u.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},412:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},413:function(e,t,n){"use strict";var a=n(0),r=n(414);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},414:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},415:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(413),i=n(412),c=n(56),l=n.n(c),s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,b=e.values,p=e.groupId,d=e.className,m=Object(o.a)(),f=m.tabGroupChoices,O=m.setTabGroupChoices,j=Object(a.useState)(c),h=j[0],y=j[1],g=a.Children.toArray(e.children);if(null!=p){var v=f[p];null!=v&&v!==h&&b.some((function(e){return e.value===v}))&&y(v)}var N=function(e){y(e),null!=p&&O(p,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},d)},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(a.cloneElement)(g.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},416:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}}}]);