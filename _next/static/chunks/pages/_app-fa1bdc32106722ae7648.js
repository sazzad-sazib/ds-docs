(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{19642:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function i(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(e){if("string"===typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?a(e,n):void 0}}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}t.d(n,{Ul:function(){return i},gY:function(){return r},gK:function(){return o}})},92506:function(e,n,t){"use strict";t.d(n,{M:function(){return s}});var r=t(67294),o=t(60852),a=t(35989),i=0;function u(){return++i}function s(){var e=(0,a.H)(),n=(0,r.useState)(e?u:null),t=n[0],i=n[1];return(0,o.e)((function(){null===t&&i(u())}),[t]),null!=t?""+t:void 0}},60852:function(e,n,t){"use strict";t.d(n,{e:function(){return o}});var r=t(67294),o="undefined"!==typeof window?r.useLayoutEffect:r.useEffect},35989:function(e,n,t){"use strict";t.d(n,{H:function(){return a}});var r=t(67294),o={serverHandoffComplete:!1};function a(){var e=(0,r.useState)(o.serverHandoffComplete),n=e[0],t=e[1];return(0,r.useEffect)((function(){!0!==n&&t(!0)}),[n]),(0,r.useEffect)((function(){!1===o.serverHandoffComplete&&(o.serverHandoffComplete=!0)}),[]),n}},3980:function(e,n,t){"use strict";t.d(n,{up:function(){return u},ZM:function(){return r},oJ:function(){return i}});var r,o=t(67294),a=(0,o.createContext)(null);function i(){return(0,o.useContext)(a)}function u(e){var n=e.value,t=e.children;return o.createElement(a.Provider,{value:n},t)}a.displayName="OpenClosedContext",function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(r||(r={}))},133:function(e,n,t){"use strict";function r(e,n){if(e in n){for(var t=n[e],o=arguments.length,a=new Array(o>2?o-2:0),i=2;i<o;i++)a[i-2]=arguments[i];return"function"===typeof t?t.apply(void 0,a):t}var u=new Error('Tried to handle "'+e+'" but there is no handler defined. Only defined handlers are: '+Object.keys(n).map((function(e){return'"'+e+'"'})).join(", ")+".");throw Error.captureStackTrace&&Error.captureStackTrace(u,r),u}t.d(n,{E:function(){return r}})},58529:function(e,n,t){"use strict";t.d(n,{AN:function(){return r},l4:function(){return o},yV:function(){return c},sY:function(){return s}});var r,o,a=t(19642),i=t(67294),u=t(133);function s(e){var n=e.props,t=e.slot,i=e.defaultTag,s=e.features,c=e.visible,f=void 0===c||c,d=e.name;if(f)return l(n,t,i,d);var p=null!=s?s:r.None;if(p&r.Static){var v=n.static,m=void 0!==v&&v,g=(0,a.gK)(n,["static"]);if(m)return l(g,t,i,d)}if(p&r.RenderStrategy){var h,y=n.unmount,b=void 0===y||y,x=(0,a.gK)(n,["unmount"]),k=b?o.Unmount:o.Hidden;return(0,u.E)(k,((h={})[o.Unmount]=function(){return null},h[o.Hidden]=function(){return l((0,a.gY)({},x,{hidden:!0,style:{display:"none"}}),t,i,d)},h))}return l(n,t,i,d)}function l(e,n,t,r){var o;void 0===n&&(n={});var u=f(e,["unmount","static"]),s=u.as,l=void 0===s?t:s,c=u.children,d=u.refName,p=void 0===d?"ref":d,v=(0,a.gK)(u,["as","children","refName"]),m=void 0!==e.ref?((o={})[p]=e.ref,o):{},g="function"===typeof c?c(n):c;if(v.className&&"function"===typeof v.className&&(v.className=v.className(n)),l===i.Fragment&&Object.keys(v).length>0){if(!(0,i.isValidElement)(g)||Array.isArray(g)&&g.length>1)throw new Error(['Passing props on "Fragment"!',"","The current component <"+r+' /> is rendering a "Fragment".',"However we need to passthrough the following props:",Object.keys(v).map((function(e){return"  - "+e})).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((function(e){return"  - "+e})).join("\n")].join("\n"));return(0,i.cloneElement)(g,Object.assign({},function(e,n,t){for(var r,o=Object.assign({},e),i=function(){var t,a=r.value;void 0!==e[a]&&void 0!==n[a]&&Object.assign(o,((t={})[a]=function(t){t.defaultPrevented||e[a](t),t.defaultPrevented||n[a](t)},t))},u=(0,a.Ul)(t);!(r=u()).done;)i();return o}(function(e){var n=Object.assign({},e);for(var t in n)void 0===n[t]&&delete n[t];return n}(f(v,["ref"])),g.props,["onClick"]),m))}return(0,i.createElement)(l,Object.assign({},f(v,["ref"]),l!==i.Fragment&&m),g)}function c(e){var n;return Object.assign((0,i.forwardRef)(e),{displayName:null!=(n=e.displayName)?n:e.name})}function f(e,n){void 0===n&&(n=[]);for(var t,r=Object.assign({},e),o=(0,a.Ul)(n);!(t=o()).done;){var i=t.value;i in r&&delete r[i]}return r}!function(e){e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static"}(r||(r={})),function(e){e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden"}(o||(o={}))},76049:function(e,n,t){"use strict";t.d(n,{g8U:function(){return o},Oqj:function(){return a},b0D:function(){return i}});var r=t(67294);var o=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 15l7-7 7 7"}))};var a=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"}))};var i=function(e){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}))}},86010:function(e,n,t){"use strict";function r(e){var n,t,o="";if("string"===typeof e||"number"===typeof e)o+=e;else if("object"===typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function o(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(o&&(o+=" "),o+=n);return o}t.d(n,{Z:function(){return o}})},95389:function(e,n,t){"use strict";var r=t(85893),o=(t(67294),t(9008));n.Z=function(e){var n=e.title,t=e.description;return(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:n||"bKash Components"}),(0,r.jsx)("meta",{name:"description",content:t||"Components Created for bKash web"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]})}},92167:function(e,n,t){"use strict";var r=t(63038);n.default=void 0;var o,a=(o=t(67294))&&o.__esModule?o:{default:o},i=t(21063),u=t(34651),s=t(7426);var l={};function c(e,n,t,r){if(e&&i.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,o=u.useRouter(),f=a.default.useMemo((function(){var n=i.resolveHref(o,e.href,!0),t=r(n,2),a=t[0],u=t[1];return{href:a,as:e.as?i.resolveHref(o,e.as):u||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,m=e.replace,g=e.shallow,h=e.scroll,y=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var b=(n=a.default.Children.only(v))&&"object"===typeof n&&n.ref,x=s.useIntersection({rootMargin:"200px"}),k=r(x,2),w=k[0],j=k[1],E=a.default.useCallback((function(e){w(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,w]);a.default.useEffect((function(){var e=j&&t&&i.isLocalURL(d),n="undefined"!==typeof y?y:o&&o.locale,r=l[d+"%"+p+(n?"%"+n:"")];e&&!r&&c(o,d,p,{locale:n})}),[p,d,j,y,t,o]);var O={ref:E,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,u,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),null==u&&r.indexOf("#")>=0&&(u=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:s,scroll:u}))}(e,o,d,p,m,g,h,y)},onMouseEnter:function(e){i.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),c(o,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var C="undefined"!==typeof y?y:o&&o.locale,S=o&&o.isLocaleDomain&&i.getDomainLocale(p,C,o&&o.locales,o&&o.domainLocales);O.href=S||i.addBasePath(i.addLocale(p,C,o&&o.defaultLocale))}return a.default.cloneElement(n,O)};n.default=f},7426:function(e,n,t){"use strict";var r=t(63038);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!i,s=o.useRef(),l=o.useState(!1),c=r(l,2),f=c[0],d=c[1],p=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),t||f||e&&e.tagName&&(s.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=u.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return u.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,i=r.elements;return i.set(e,n),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return o.useEffect((function(){if(!i&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=t(67294),a=t(73447),i="undefined"!==typeof IntersectionObserver;var u=new Map},34762:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return F}});var r=t(85893);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t(71123);var a,i=t(95389),u=t(67294),s=t(19642),l=t(133),c=t(58529);function f(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=(0,u.useRef)(n);return(0,u.useEffect)((function(){r.current=n}),[n]),(0,u.useCallback)((function(e){for(var n,t=(0,s.Ul)(r.current);!(n=t()).done;){var o=n.value;null!=o&&("function"===typeof o?o(e):o.current=e)}}),[r])}function d(e){for(var n,t,r=e.parentElement,o=null;r&&!(r instanceof HTMLFieldSetElement);)r instanceof HTMLLegendElement&&(o=r),r=r.parentElement;var a=null!=(n=""===(null==(t=r)?void 0:t.getAttribute("disabled")))&&n;return(!a||!function(e){if(!e)return!1;var n=e.previousElementSibling;for(;null!==n;){if(n instanceof HTMLLegendElement)return!1;n=n.previousElementSibling}return!0}(o))&&a}!function(e){e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab"}(a||(a={}));var p,v,m,g=t(92506),h=t(3980);!function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(v||(v={})),function(e){e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel"}(m||(m={}));var y=((p={})[m.ToggleDisclosure]=function(e){var n;return(0,s.gY)({},e,{disclosureState:(0,l.E)(e.disclosureState,(n={},n[v.Open]=v.Closed,n[v.Closed]=v.Open,n))})},p[m.CloseDisclosure]=function(e){return e.disclosureState===v.Closed?e:(0,s.gY)({},e,{disclosureState:v.Closed})},p[m.LinkPanel]=function(e){return!0===e.linkedPanel?e:(0,s.gY)({},e,{linkedPanel:!0})},p[m.UnlinkPanel]=function(e){return!1===e.linkedPanel?e:(0,s.gY)({},e,{linkedPanel:!1})},p[m.SetButtonId]=function(e,n){return e.buttonId===n.buttonId?e:(0,s.gY)({},e,{buttonId:n.buttonId})},p[m.SetPanelId]=function(e,n){return e.panelId===n.panelId?e:(0,s.gY)({},e,{panelId:n.panelId})},p),b=(0,u.createContext)(null);function x(e){var n=(0,u.useContext)(b);if(null===n){var t=new Error("<"+e+" /> is missing a parent <"+C.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(t,x),t}return n}b.displayName="DisclosureContext";var k=(0,u.createContext)(null);function w(e){var n=(0,u.useContext)(k);if(null===n){var t=new Error("<"+e+" /> is missing a parent <"+C.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(t,w),t}return n}k.displayName="DisclosureAPIContext";var j=(0,u.createContext)(null);function E(e,n){return(0,l.E)(n.type,y,e,n)}j.displayName="DisclosurePanelContext";var O=u.Fragment;function C(e){var n,t=e.defaultOpen,r=void 0!==t&&t,o=(0,s.gK)(e,["defaultOpen"]),a="headlessui-disclosure-button-"+(0,g.M)(),i="headlessui-disclosure-panel-"+(0,g.M)(),f=(0,u.useReducer)(E,{disclosureState:r?v.Open:v.Closed,linkedPanel:!1,buttonId:a,panelId:i}),d=f[0].disclosureState,p=f[1];(0,u.useEffect)((function(){return p({type:m.SetButtonId,buttonId:a})}),[a,p]),(0,u.useEffect)((function(){return p({type:m.SetPanelId,panelId:i})}),[i,p]);var y=(0,u.useCallback)((function(e){p({type:m.CloseDisclosure});var n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:document.getElementById(a):document.getElementById(a);null==n||n.focus()}),[p,a]),x=(0,u.useMemo)((function(){return{close:y}}),[y]),w=(0,u.useMemo)((function(){return{open:d===v.Open,close:y}}),[d,y]);return u.createElement(b.Provider,{value:f},u.createElement(k.Provider,{value:x},u.createElement(h.up,{value:(0,l.E)(d,(n={},n[v.Open]=h.ZM.Open,n[v.Closed]=h.ZM.Closed,n))},(0,c.sY)({props:o,slot:w,defaultTag:O,name:"Disclosure"}))))}var S=(0,c.yV)((function e(n,t){var r=x([C.name,e.name].join(".")),o=r[0],i=r[1],l=f(t),p=(0,u.useContext)(j),g=null!==p&&p===o.panelId,h=(0,u.useCallback)((function(e){var n;if(g){if(o.disclosureState===v.Closed)return;switch(e.key){case a.Space:case a.Enter:e.preventDefault(),e.stopPropagation(),i({type:m.ToggleDisclosure}),null==(n=document.getElementById(o.buttonId))||n.focus()}}else switch(e.key){case a.Space:case a.Enter:e.preventDefault(),e.stopPropagation(),i({type:m.ToggleDisclosure})}}),[i,g,o.disclosureState]),y=(0,u.useCallback)((function(e){switch(e.key){case a.Space:e.preventDefault()}}),[]),b=(0,u.useCallback)((function(e){var t;d(e.currentTarget)||(n.disabled||(g?(i({type:m.ToggleDisclosure}),null==(t=document.getElementById(o.buttonId))||t.focus()):i({type:m.ToggleDisclosure})))}),[i,n.disabled,o.buttonId,g]),k=(0,u.useMemo)((function(){return{open:o.disclosureState===v.Open}}),[o]),w=n,E=g?{type:"button",onKeyDown:h,onClick:b}:{ref:l,id:o.buttonId,type:"button","aria-expanded":n.disabled?void 0:o.disclosureState===v.Open,"aria-controls":o.linkedPanel?o.panelId:void 0,onKeyDown:h,onKeyUp:y,onClick:b};return(0,c.sY)({props:(0,s.gY)({},w,E),slot:k,defaultTag:"button",name:"Disclosure.Button"})})),P=c.AN.RenderStrategy|c.AN.Static,N=(0,c.yV)((function e(n,t){var r=x([C.name,e.name].join(".")),o=r[0],a=r[1],i=w([C.name,e.name].join(".")).close,l=f(t,(function(){o.linkedPanel||a({type:m.LinkPanel})})),d=(0,h.oJ)(),p=null!==d?d===h.ZM.Open:o.disclosureState===v.Open;(0,u.useEffect)((function(){return function(){return a({type:m.UnlinkPanel})}}),[a]),(0,u.useEffect)((function(){var e;o.disclosureState!==v.Closed||null!=(e=n.unmount)&&!e||a({type:m.UnlinkPanel})}),[o.disclosureState,n.unmount,a]);var g=(0,u.useMemo)((function(){return{open:o.disclosureState===v.Open,close:i}}),[o,i]),y={ref:l,id:o.panelId},b=n;return u.createElement(j.Provider,{value:o.panelId},(0,c.sY)({props:(0,s.gY)({},b,y),slot:g,defaultTag:"div",features:P,visible:p,name:"Disclosure.Panel"}))}));C.Button=S,C.Panel=N;var I=t(76049),L=[{id:1,name:"Documentation",link:"/docs",type:"route"},{id:2,name:"StoryBook",link:"/storybook",type:"route"}],D=t(41664),M=t(11163),T=t(86010),A=t(43317),H=function(){return(0,r.jsx)("div",{className:"flex items-center h-full px-2 lg:px-0",children:(0,r.jsxs)("div",{className:"flex items-center flex-shrink-0 h-full",children:[(0,r.jsx)(D.default,{href:"/",passHref:!0,children:(0,r.jsx)("div",{className:"block w-auto h-auto cursor-pointer lg:hidden",children:(0,r.jsx)("img",{width:40,height:40,src:"".concat(A.O,"/bkash-small.svg"),alt:"bkash Small Logo"})})}),(0,r.jsx)(D.default,{href:"/",passHref:!0,children:(0,r.jsx)("div",{className:"hidden w-auto h-full lg:flex lg:cursor-pointer",children:(0,r.jsx)("img",{width:100,height:40,src:"".concat(A.O,"/bkash.svg"),alt:"bkash Logo"})})})]})})},U=function(e){var n=e.open;return(0,r.jsx)("div",{className:"flex lg:hidden",children:(0,r.jsxs)(C.Button,{className:"inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",children:[(0,r.jsx)("span",{className:"sr-only",children:"Open main menu"}),n?(0,r.jsx)(I.b0D,{className:"block w-6 h-6","aria-hidden":"true"}):(0,r.jsx)(I.Oqj,{className:"block w-6 h-6","aria-hidden":"true"})]})})},R=function(){var e=(0,M.useRouter)();return(0,r.jsx)("div",{className:"hidden lg:block lg:ml-6",children:(0,r.jsx)("div",{className:"flex space-x-4",children:L.map((function(n){return"link"===n.type.toLowerCase()?(0,r.jsx)("a",{rel:"noreferrer noopener",href:n.link,target:"_blank",className:"px-3 py-2 text-sm font-medium text-gray-700 rounded-md focus:text-gray-700 hover:bg-gray-50 hover:text-gray-700",children:n.name},n.id):(0,r.jsx)(D.default,{passHref:!0,href:n.link,children:(0,r.jsx)("span",{className:(0,T.Z)("cursor-pointer px-3 py-2 rounded-md text-sm font-medium",e.pathname.includes(n.link)?"bg-primary text-white":"text-gray-700 focus:text-gray-700 hover:bg-gray-50 hover:text-gray-700"),children:n.name})},n.id)}))})})},_=function(){var e=(0,M.useRouter)();return(0,r.jsx)("div",{className:"px-2 pt-2 pb-3 space-y-1",children:L.map((function(n){return"link"===n.type.toLowerCase()?(0,r.jsx)("a",{rel:"noreferrer noopener",href:n.link,target:"_blank",className:"block px-3 py-2 text-base font-medium text-gray-700 rounded-md cursor-pointer hover:bg-gray-50 hover:text-gray-700",children:n.name},n.id):(0,r.jsx)(D.default,{passHref:!0,href:n.link,children:(0,r.jsx)("span",{className:(0,T.Z)("cursor-pointer block px-3 py-2 rounded-md text-base font-medium",e.pathname===n.link?"bg-primary text-white":"text-gray-700 hover:bg-gray-50 hover:text-gray-700 "),children:n.name})},n.id)}))})},B=function(){(0,M.useRouter)();return(0,r.jsx)(C,{as:"nav",className:"sticky top-0 z-40 bg-white shadow",children:function(e){var n=e.open;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"px-2 mx-auto max-w-7xl sm:px-4 lg:px-8",children:(0,r.jsxs)("div",{className:"relative flex items-center justify-between h-16",children:[(0,r.jsx)(H,{}),(0,r.jsx)(U,{open:n}),(0,r.jsx)(R,{})]})}),(0,r.jsx)(C.Panel,{className:"lg:hidden",children:(0,r.jsx)(_,{})})]})}})};function Y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function K(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Y(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var F=function(e){var n=e.Component,t=e.pageProps;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.Z,{}),(0,r.jsx)(B,{}),(0,r.jsx)(n,K({},t))]})}},43317:function(e,n,t){"use strict";t.d(n,{O:function(){return r}});var r="/bkash-ds-docs"},76363:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(34762)}])},71123:function(){},9008:function(e,n,t){e.exports=t(70639)},41664:function(e,n,t){e.exports=t(92167)},11163:function(e,n,t){e.exports=t(34651)}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(76363),n(34651)}));var t=e.O();_N_E=t}]);