(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[5098],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return v}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),v=o,f=d["".concat(s,".").concat(v)]||d[v]||p[v]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){"use strict";var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},41395:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(67294),o=n(80944),a=n(86010),i="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,u=39;var c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,d=e.groupId,v=e.className,f=(0,o.Z)(),m=f.tabGroupChoices,g=f.setTabGroupChoices,b=(0,r.useState)(c),h=b[0],k=b[1],y=r.Children.toArray(e.children),x=[];if(null!=d){var N=m[d];null!=N&&N!==h&&p.some((function(e){return e.value===N}))&&k(N)}var w=function(e){var t=e.currentTarget,n=x.indexOf(t),r=p[n].value;k(r),null!=d&&(g(d,r),setTimeout((function(){var e,n,r,o,a,i,s,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,a=e.right,i=window,s=i.innerHeight,u=i.innerWidth,n>=0&&a<=u&&o<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case u:var r=x.indexOf(e.target)+1;n=x[r]||x[0];break;case s:var o=x.indexOf(e.target)-1;n=x[o]||x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},v)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,a.Z)("tabs__item",i,{"tabs__item--active":h===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:O,onFocus:w,onClick:w},n)}))),t?(0,r.cloneElement)(y.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},79443:function(e,t,n){"use strict";var r=(0,n(67294).createContext)(void 0);t.Z=r},80944:function(e,t,n){"use strict";var r=n(67294),o=n(79443);t.Z=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},12215:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(74034),o=n(79973),a=(n(67294),n(3905)),i=n(41395),l=n(58215),s={id:"devtools",title:"Developer tools",sidebar_label:"Developer tools"},u={unversionedId:"devtools",id:"version-5.x/devtools",isDocsHomePage:!1,title:"Developer tools",description:"Developer tools to make debugging easier when using React Navigation.",source:"@site/versioned_docs/version-5.x/devtools.md",sourceDirName:".",slug:"/devtools",permalink:"/docs/devtools",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/devtools.md",version:"5.x",sidebar_label:"Developer tools",frontMatter:{id:"devtools",title:"Developer tools",sidebar_label:"Developer tools"},sidebar:"version-5.x/docs",previous:{title:"Link",permalink:"/docs/link"},next:{title:"createStackNavigator",permalink:"/docs/stack-navigator"}},c=[{value:"API Definition",id:"api-definition",children:[{value:"<code>useReduxDevToolsExtension</code>",id:"usereduxdevtoolsextension",children:[]}]}],p={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Developer tools to make debugging easier when using React Navigation."),(0,a.kt)("p",null,"To configure the developer tools, install ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/tree/master/packages/devtools"},(0,a.kt)("inlineCode",{parentName:"a"},"@react-navigation/devtools")),":"),(0,a.kt)(i.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @react-navigation/devtools\n"))),(0,a.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @react-navigation/devtools\n")))),(0,a.kt)("h2",{id:"api-definition"},"API Definition"),(0,a.kt)("p",null,"The package exposes the following APIs:"),(0,a.kt)("h3",{id:"usereduxdevtoolsextension"},(0,a.kt)("inlineCode",{parentName:"h3"},"useReduxDevToolsExtension")),(0,a.kt)("p",null,"This hook provides integration with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/zalmoxisus/redux-devtools-extension"},"Redux DevTools Extension"),".It also works with ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/jhen0409/react-native-debugger"},(0,a.kt)("inlineCode",{parentName:"a"},"React Native Debugger app"))," which includes this extension."),(0,a.kt)("p",null,"The hook accepts a ",(0,a.kt)("inlineCode",{parentName:"p"},"ref")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"NavigationContainer")," as its argument."),(0,a.kt)("p",null,"Usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { useReduxDevToolsExtension } from '@react-navigation/devtools';\n\nexport default function App() {\n  const navigationRef = React.useRef();\n\n  useReduxDevToolsExtension(navigationRef);\n\n  return (\n    <NavigationContainer ref={navigationRef}>{/* ... */}</NavigationContainer>\n  );\n}\n")),(0,a.kt)("p",null,"The hook only works during development and is disabled in production. You don't need to do anything special to remove it from the production build."))}d.isMDXComponent=!0},86010:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);