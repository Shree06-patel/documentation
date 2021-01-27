(window.webpackJsonp=window.webpackJsonp||[]).push([[271],{348:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(411)),c=(r(415),r(416),{title:"try",type:"processor",status:"stable",categories:["Composition"]}),s={unversionedId:"components/processors/try",id:"components/processors/try",isDocsHomePage:!1,title:"try",description:"\x3c!--",source:"@site/docs/components/processors/try.md",slug:"/components/processors/try",permalink:"/docs/components/processors/try",editUrl:"https://github.com/Jeffail/benthos/edit/master/website/docs/components/processors/try.md",version:"current",sidebar:"docs",previous:{title:"throttle",permalink:"/docs/components/processors/throttle"},next:{title:"unarchive",permalink:"/docs/components/processors/unarchive"}},i=[],l={toc:i};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Behaves similarly to the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/components/processors/for_each"}),Object(a.b)("inlineCode",{parentName:"a"},"for_each"))," processor, where a\nlist of child processors are applied to individual messages of a batch. However,\nif a processor fails for a message then that message will skip all following\nprocessors."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"# Config fields, showing default values\ntry: []\n")),Object(a.b)("p",null,"For example, with the following config:"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"- try:\n  - type: foo\n  - type: bar\n  - type: baz\n")),Object(a.b)("p",null,"If the processor ",Object(a.b)("inlineCode",{parentName:"p"},"foo")," fails for a particular message, that message\nwill skip the processors ",Object(a.b)("inlineCode",{parentName:"p"},"bar")," and ",Object(a.b)("inlineCode",{parentName:"p"},"baz"),"."),Object(a.b)("p",null,"This processor is useful for when child processors depend on the successful\noutput of previous processors. This processor can be followed with a\n",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/components/processors/catch"}),"catch")," processor for defining child processors to be applied\nonly to failed messages."),Object(a.b)("p",null,"More information about error handing can be found ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/configuration/error_handling"}),"here"),"."))}u.isMDXComponent=!0},411:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,m=p["".concat(c,".").concat(b)]||p[b]||f[b]||a;return r?o.a.createElement(m,s(s({ref:t},l),{},{components:r})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},412:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},413:function(e,t,r){"use strict";var n=r(0),o=r(414);t.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},414:function(e,t,r){"use strict";var n=r(0),o=Object(n.createContext)(void 0);t.a=o},415:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(413),c=r(412),s=r(56),i=r.n(s),l=37,u=39;t.a=function(e){var t=e.lazy,r=e.block,s=e.defaultValue,p=e.values,f=e.groupId,b=e.className,m=Object(a.a)(),d=m.tabGroupChoices,y=m.setTabGroupChoices,h=Object(n.useState)(s),O=h[0],v=h[1],g=n.Children.toArray(e.children);if(null!=f){var j=d[f];null!=j&&j!==O&&p.some((function(e){return e.value===j}))&&v(j)}var w=function(e){v(e),null!=f&&y(f,e)},N=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":r},b)},p.map((function(e){var t=e.value,r=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(c.a)("tabs__item",i.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case u:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},r)}))),t?Object(n.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},416:function(e,t,r){"use strict";var n=r(3),o=r(0),a=r.n(o);t.a=function(e){var t=e.children,r=e.hidden,o=e.className;return a.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:r,className:o}),t)}}}]);