(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{159:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return l}));var r=t(3),o=t(7),a=(t(0),t(411)),c=(t(415),t(416),{title:"resource",type:"input",status:"stable",categories:["Utility"]}),s={unversionedId:"components/inputs/resource",id:"components/inputs/resource",isDocsHomePage:!1,title:"resource",description:"\x3c!--",source:"@site/docs/components/inputs/resource.md",slug:"/components/inputs/resource",permalink:"/docs/components/inputs/resource",editUrl:"https://github.com/Jeffail/benthos/edit/master/website/docs/components/inputs/resource.md",version:"current",sidebar:"docs",previous:{title:"redis_streams",permalink:"/docs/components/inputs/redis_streams"},next:{title:"s3",permalink:"/docs/components/inputs/s3"}},u=[],i={toc:u};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Resource is an input type that runs a resource input by its name. This input\nallows you to run the same configured input resource in multiple places."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'# Config fields, showing default values\ninput:\n  resource: ""\n')),Object(a.b)("p",null,"Resource inputs also have the advantage of name based metrics and logging. For\nexample, the config:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"input:\n  broker:\n    inputs:\n      - kafka:\n          addresses: [ TODO ]\n          topics: [ foo ]\n          consumer_group: foogroup\n      - gcp_pubsub:\n          project: bar\n          subscription: baz\n")),Object(a.b)("p",null,"Is equivalent to:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"input:\n  broker:\n    inputs:\n      - resource: foo\n      - resource: bar\n\nresources:\n  inputs:\n    foo:\n      kafka:\n        addresses: [ TODO ]\n        topics: [ foo ]\n        consumer_group: foogroup\n\n    bar:\n      gcp_pubsub:\n        project: bar\n        subscription: baz\n")),Object(a.b)("p",null,"But now the metrics path of Kafka input will be\n",Object(a.b)("inlineCode",{parentName:"p"},"resources.inputs.foo"),", this way of flattening observability\nlabels becomes more useful as configs get larger and more nested."),Object(a.b)("p",null,"You can find out more about resources ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/configuration/resources"}),"in this document.")))}l.isMDXComponent=!0},411:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=o.a.createContext({}),l=function(e){var n=o.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return o.a.createElement(i.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),p=l(t),b=r,m=p["".concat(c,".").concat(b)]||p[b]||f[b]||a;return t?o.a.createElement(m,s(s({ref:n},i),{},{components:t})):o.a.createElement(m,s({ref:n},i))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=b;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var i=2;i<a;i++)c[i]=t[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},412:function(e,n,t){"use strict";function r(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}n.a=function(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(o&&(o+=" "),o+=n);return o}},413:function(e,n,t){"use strict";var r=t(0),o=t(414);n.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},414:function(e,n,t){"use strict";var r=t(0),o=Object(r.createContext)(void 0);n.a=o},415:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=t(413),c=t(412),s=t(56),u=t.n(s),i=37,l=39;n.a=function(e){var n=e.lazy,t=e.block,s=e.defaultValue,p=e.values,f=e.groupId,b=e.className,m=Object(a.a)(),d=m.tabGroupChoices,O=m.setTabGroupChoices,y=Object(r.useState)(s),v=y[0],g=y[1],j=r.Children.toArray(e.children);if(null!=f){var h=d[f];null!=h&&h!==v&&p.some((function(e){return e.value===h}))&&g(h)}var w=function(e){g(e),null!=f&&O(f,e)},k=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t},b)},p.map((function(e){var n=e.value,t=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===n,className:Object(c.a)("tabs__item",u.a.tabItem,{"tabs__item--active":v===n}),key:n,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case l:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case i:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(k,e.target,e)},onFocus:function(){return w(n)},onClick:function(){w(n)}},t)}))),n?Object(r.cloneElement)(j.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,n){return Object(r.cloneElement)(e,{key:n,hidden:e.props.value!==v})}))))}},416:function(e,n,t){"use strict";var r=t(3),o=t(0),a=t.n(o);n.a=function(e){var n=e.children,t=e.hidden,o=e.className;return a.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:t,className:o}),n)}}}]);