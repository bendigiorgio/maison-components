"use strict";(self.webpackChunkmaison_components=self.webpackChunkmaison_components||[]).push([[827],{"./node_modules/@radix-ui/react-popper/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ee:()=>$cf1ac5d9fe0e8206$export$b688253958b8dfe7,Eh:()=>$cf1ac5d9fe0e8206$export$21b07c8f274aebd5,VY:()=>$cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2,fC:()=>$cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9,D7:()=>$cf1ac5d9fe0e8206$export$722aac194ae923});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js");function t(t){return t.split("-")[1]}function e(t){return"y"===t?"height":"width"}function n(t){return t.split("-")[0]}function o(t){return["top","bottom"].includes(n(t))?"x":"y"}function i(i,r,a){let{reference:l,floating:s}=i;const c=l.x+l.width/2-s.width/2,f=l.y+l.height/2-s.height/2,m=o(r),u=e(m),g=l[u]/2-s[u]/2,d="x"===m;let p;switch(n(r)){case"top":p={x:c,y:l.y-s.height};break;case"bottom":p={x:c,y:l.y+l.height};break;case"right":p={x:l.x+l.width,y:f};break;case"left":p={x:l.x-s.width,y:f};break;default:p={x:l.x,y:l.y}}switch(t(r)){case"start":p[m]-=g*(a&&d?-1:1);break;case"end":p[m]+=g*(a&&d?-1:1)}return p}const floating_ui_core_browser_min_r=async(t,e,n)=>{const{placement:o="bottom",strategy:r="absolute",middleware:a=[],platform:l}=n,s=a.filter(Boolean),c=await(null==l.isRTL?void 0:l.isRTL(e));let f=await l.getElementRects({reference:t,floating:e,strategy:r}),{x:m,y:u}=i(f,o,c),g=o,d={},p=0;for(let n=0;n<s.length;n++){const{name:a,fn:h}=s[n],{x:y,y:x,data:w,reset:v}=await h({x:m,y:u,initialPlacement:o,placement:g,strategy:r,middlewareData:d,rects:f,platform:l,elements:{reference:t,floating:e}});m=null!=y?y:m,u=null!=x?x:u,d={...d,[a]:{...d[a],...w}},v&&p<=50&&(p++,"object"==typeof v&&(v.placement&&(g=v.placement),v.rects&&(f=!0===v.rects?await l.getElementRects({reference:t,floating:e,strategy:r}):v.rects),({x:m,y:u}=i(f,g,c))),n=-1)}return{x:m,y:u,placement:g,strategy:r,middlewareData:d}};function a(t,e){return"function"==typeof t?t(e):t}function l(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function floating_ui_core_browser_min_s(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function c(t,e){var n;void 0===e&&(e={});const{x:o,y:i,platform:r,rects:c,elements:f,strategy:m}=t,{boundary:u="clippingAncestors",rootBoundary:g="viewport",elementContext:d="floating",altBoundary:p=!1,padding:h=0}=a(e,t),y=l(h),x=f[p?"floating"===d?"reference":"floating":d],w=floating_ui_core_browser_min_s(await r.getClippingRect({element:null==(n=await(null==r.isElement?void 0:r.isElement(x)))||n?x:x.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(f.floating)),boundary:u,rootBoundary:g,strategy:m})),v="floating"===d?{...c.floating,x:o,y:i}:c.reference,b=await(null==r.getOffsetParent?void 0:r.getOffsetParent(f.floating)),A=await(null==r.isElement?void 0:r.isElement(b))&&await(null==r.getScale?void 0:r.getScale(b))||{x:1,y:1},R=floating_ui_core_browser_min_s(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({rect:v,offsetParent:b,strategy:m}):v);return{top:(w.top-R.top+y.top)/A.y,bottom:(R.bottom-w.bottom+y.bottom)/A.y,left:(w.left-R.left+y.left)/A.x,right:(R.right-w.right+y.right)/A.x}}const f=Math.min,m=Math.max;function u(t,e,n){return m(t,f(e,n))}const g=n=>({name:"arrow",options:n,async fn(i){const{x:r,y:s,placement:c,rects:m,platform:g,elements:d}=i,{element:p,padding:h=0}=a(n,i)||{};if(null==p)return{};const y=l(h),x={x:r,y:s},w=o(c),v=e(w),b=await g.getDimensions(p),A="y"===w,R=A?"top":"left",P=A?"bottom":"right",E=A?"clientHeight":"clientWidth",T=m.reference[v]+m.reference[w]-x[w]-m.floating[v],D=x[w]-m.reference[w],L=await(null==g.getOffsetParent?void 0:g.getOffsetParent(p));let k=L?L[E]:0;k&&await(null==g.isElement?void 0:g.isElement(L))||(k=d.floating[E]||m.floating[v]);const O=T/2-D/2,B=k/2-b[v]/2-1,C=f(y[R],B),H=f(y[P],B),S=C,F=k-b[v]-H,M=k/2-b[v]/2+O,V=u(S,M,F),W=null!=t(c)&&M!=V&&m.reference[v]/2-(M<S?C:H)-b[v]/2<0?M<S?S-M:F-M:0;return{[w]:x[w]-W,data:{[w]:V,centerOffset:M-V+W}}}}),d=["top","right","bottom","left"],h=(d.reduce(((t,e)=>t.concat(e,e+"-start",e+"-end")),[]),{left:"right",right:"left",bottom:"top",top:"bottom"});function y(t){return t.replace(/left|right|bottom|top/g,(t=>h[t]))}function x(n,i,r){void 0===r&&(r=!1);const a=t(n),l=o(n),s=e(l);let c="x"===l?a===(r?"end":"start")?"right":"left":"start"===a?"bottom":"top";return i.reference[s]>i.floating[s]&&(c=y(c)),{main:c,cross:y(c)}}const w={start:"end",end:"start"};function v(t){return t.replace(/start|end/g,(t=>w[t]))}const A=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(o){var i;const{placement:r,middlewareData:l,rects:s,initialPlacement:f,platform:m,elements:u}=o,{mainAxis:g=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:h="bestFit",fallbackAxisSideDirection:w="none",flipAlignment:b=!0,...A}=a(e,o),R=n(r),P=n(f)===f,E=await(null==m.isRTL?void 0:m.isRTL(u.floating)),T=p||(P||!b?[y(f)]:function(t){const e=y(t);return[v(t),e,v(e)]}(f));p||"none"===w||T.push(...function(e,o,i,r){const a=t(e);let l=function(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],a=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:a;default:return[]}}(n(e),"start"===i,r);return a&&(l=l.map((t=>t+"-"+a)),o&&(l=l.concat(l.map(v)))),l}(f,b,w,E));const D=[f,...T],L=await c(o,A),k=[];let O=(null==(i=l.flip)?void 0:i.overflows)||[];if(g&&k.push(L[R]),d){const{main:t,cross:e}=x(r,s,E);k.push(L[t],L[e])}if(O=[...O,{placement:r,overflows:k}],!k.every((t=>t<=0))){var B,C;const t=((null==(B=l.flip)?void 0:B.index)||0)+1,e=D[t];if(e)return{data:{index:t,overflows:O},reset:{placement:e}};let n=null==(C=O.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:C.placement;if(!n)switch(h){case"bestFit":{var H;const t=null==(H=O.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:H[0];t&&(n=t);break}case"initialPlacement":n=f}if(r!==n)return{reset:{placement:n}}}return{}}}};function R(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function P(t){return d.some((e=>t[e]>=0))}const E=function(t){return void 0===t&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...i}=a(t,e);switch(o){case"referenceHidden":{const t=R(await c(e,{...i,elementContext:"reference"}),n.reference);return{data:{referenceHiddenOffsets:t,referenceHidden:P(t)}}}case"escaped":{const t=R(await c(e,{...i,altBoundary:!0}),n.floating);return{data:{escapedOffsets:t,escaped:P(t)}}}default:return{}}}}};const L=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(i){const{x:r,y:l}=i,s=await async function(e,i){const{placement:r,platform:l,elements:s}=e,c=await(null==l.isRTL?void 0:l.isRTL(s.floating)),f=n(r),m=t(r),u="x"===o(r),g=["left","top"].includes(f)?-1:1,d=c&&u?-1:1,p=a(i,e);let{mainAxis:h,crossAxis:y,alignmentAxis:x}="number"==typeof p?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return m&&"number"==typeof x&&(y="end"===m?-1*x:x),u?{x:y*d,y:h*g}:{x:h*g,y:y*d}}(i,e);return{x:r+s.x,y:l+s.y,data:s}}}};function k(t){return"x"===t?"y":"x"}const O=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:i,y:r,placement:l}=e,{mainAxis:s=!0,crossAxis:f=!1,limiter:m={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...g}=a(t,e),d={x:i,y:r},p=await c(e,g),h=o(n(l)),y=k(h);let x=d[h],w=d[y];if(s){const t="y"===h?"bottom":"right";x=u(x+p["y"===h?"top":"left"],x,x-p[t])}if(f){const t="y"===y?"bottom":"right";w=u(w+p["y"===y?"top":"left"],w,w-p[t])}const v=m.fn({...e,[h]:x,[y]:w});return{...v,data:{x:v.x-i,y:v.y-r}}}}},B=function(t){return void 0===t&&(t={}),{options:t,fn(e){const{x:i,y:r,placement:l,rects:s,middlewareData:c}=e,{offset:f=0,mainAxis:m=!0,crossAxis:u=!0}=a(t,e),g={x:i,y:r},d=o(l),p=k(d);let h=g[d],y=g[p];const x=a(f,e),w="number"==typeof x?{mainAxis:x,crossAxis:0}:{mainAxis:0,crossAxis:0,...x};if(m){const t="y"===d?"height":"width",e=s.reference[d]-s.floating[t]+w.mainAxis,n=s.reference[d]+s.reference[t]-w.mainAxis;h<e?h=e:h>n&&(h=n)}if(u){var v,b;const t="y"===d?"width":"height",e=["top","left"].includes(n(l)),o=s.reference[p]-s.floating[t]+(e&&(null==(v=c.offset)?void 0:v[p])||0)+(e?0:w.crossAxis),i=s.reference[p]+s.reference[t]+(e?0:(null==(b=c.offset)?void 0:b[p])||0)-(e?w.crossAxis:0);y<o?y=o:y>i&&(y=i)}return{[d]:h,[p]:y}}}},C=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(i){const{placement:r,rects:l,platform:s,elements:u}=i,{apply:g=(()=>{}),...d}=a(e,i),p=await c(i,d),h=n(r),y=t(r),x="x"===o(r),{width:w,height:v}=l.floating;let b,A;"top"===h||"bottom"===h?(b=h,A=y===(await(null==s.isRTL?void 0:s.isRTL(u.floating))?"start":"end")?"left":"right"):(A=h,b="end"===y?"top":"bottom");const R=v-p[b],P=w-p[A],E=!i.middlewareData.shift;let T=R,D=P;if(x){const t=w-p.left-p.right;D=y||E?f(P,t):t}else{const t=v-p.top-p.bottom;T=y||E?f(R,t):t}if(E&&!y){const t=m(p.left,0),e=m(p.right,0),n=m(p.top,0),o=m(p.bottom,0);x?D=w-2*(0!==t||0!==e?t+e:m(p.left,p.right)):T=v-2*(0!==n||0!==o?n+o:m(p.top,p.bottom))}await g({...i,availableWidth:D,availableHeight:T});const L=await s.getDimensions(u.floating);return w!==L.width||v!==L.height?{reset:{rects:!0}}:{}}}};function floating_ui_dom_browser_min_n(t){var e;return(null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function floating_ui_dom_browser_min_o(t){return floating_ui_dom_browser_min_n(t).getComputedStyle(t)}function floating_ui_dom_browser_min_i(t){return t instanceof floating_ui_dom_browser_min_n(t).Node}function r(t){return floating_ui_dom_browser_min_i(t)?(t.nodeName||"").toLowerCase():"#document"}function floating_ui_dom_browser_min_c(t){return t instanceof floating_ui_dom_browser_min_n(t).HTMLElement}function floating_ui_dom_browser_min_l(t){return t instanceof floating_ui_dom_browser_min_n(t).Element}function s(t){return"undefined"!=typeof ShadowRoot&&(t instanceof floating_ui_dom_browser_min_n(t).ShadowRoot||t instanceof ShadowRoot)}function floating_ui_dom_browser_min_f(t){const{overflow:e,overflowX:n,overflowY:i,display:r}=floating_ui_dom_browser_min_o(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+n)&&!["inline","contents"].includes(r)}function floating_ui_dom_browser_min_u(t){return["table","td","th"].includes(r(t))}function floating_ui_dom_browser_min_d(t){const e=floating_ui_dom_browser_min_a(),n=floating_ui_dom_browser_min_o(t);return"none"!==n.transform||"none"!==n.perspective||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((t=>(n.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(n.contain||"").includes(t)))}function floating_ui_dom_browser_min_a(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function floating_ui_dom_browser_min_h(t){return["html","body","#document"].includes(r(t))}const floating_ui_dom_browser_min_p=Math.min,floating_ui_dom_browser_min_g=Math.max,floating_ui_dom_browser_min_m=Math.round,floating_ui_dom_browser_min_y=Math.floor,floating_ui_dom_browser_min_w=t=>({x:t,y:t});function floating_ui_dom_browser_min_x(t){const e=floating_ui_dom_browser_min_o(t);let n=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const r=floating_ui_dom_browser_min_c(t),l=r?t.offsetWidth:n,s=r?t.offsetHeight:i,f=floating_ui_dom_browser_min_m(n)!==l||floating_ui_dom_browser_min_m(i)!==s;return f&&(n=l,i=s),{width:n,height:i,$:f}}function floating_ui_dom_browser_min_v(t){return floating_ui_dom_browser_min_l(t)?t:t.contextElement}function floating_ui_dom_browser_min_b(t){const e=floating_ui_dom_browser_min_v(t);if(!floating_ui_dom_browser_min_c(e))return floating_ui_dom_browser_min_w(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=floating_ui_dom_browser_min_x(e);let l=(r?floating_ui_dom_browser_min_m(n.width):n.width)/o,s=(r?floating_ui_dom_browser_min_m(n.height):n.height)/i;return l&&Number.isFinite(l)||(l=1),s&&Number.isFinite(s)||(s=1),{x:l,y:s}}const floating_ui_dom_browser_min_L=floating_ui_dom_browser_min_w(0);function floating_ui_dom_browser_min_R(t,e,o){var i,r;if(void 0===e&&(e=!0),!floating_ui_dom_browser_min_a())return floating_ui_dom_browser_min_L;const c=t?floating_ui_dom_browser_min_n(t):window;return!o||e&&o!==c?floating_ui_dom_browser_min_L:{x:(null==(i=c.visualViewport)?void 0:i.offsetLeft)||0,y:(null==(r=c.visualViewport)?void 0:r.offsetTop)||0}}function floating_ui_dom_browser_min_T(e,o,i,r){void 0===o&&(o=!1),void 0===i&&(i=!1);const c=e.getBoundingClientRect(),s=floating_ui_dom_browser_min_v(e);let f=floating_ui_dom_browser_min_w(1);o&&(r?floating_ui_dom_browser_min_l(r)&&(f=floating_ui_dom_browser_min_b(r)):f=floating_ui_dom_browser_min_b(e));const u=floating_ui_dom_browser_min_R(s,i,r);let d=(c.left+u.x)/f.x,a=(c.top+u.y)/f.y,h=c.width/f.x,p=c.height/f.y;if(s){const t=floating_ui_dom_browser_min_n(s),e=r&&floating_ui_dom_browser_min_l(r)?floating_ui_dom_browser_min_n(r):r;let o=t.frameElement;for(;o&&r&&e!==t;){const t=floating_ui_dom_browser_min_b(o),e=o.getBoundingClientRect(),i=getComputedStyle(o),r=e.left+(o.clientLeft+parseFloat(i.paddingLeft))*t.x,c=e.top+(o.clientTop+parseFloat(i.paddingTop))*t.y;d*=t.x,a*=t.y,h*=t.x,p*=t.y,d+=r,a+=c,o=floating_ui_dom_browser_min_n(o).frameElement}}return floating_ui_core_browser_min_s({width:h,height:p,x:d,y:a})}function S(t){return((floating_ui_dom_browser_min_i(t)?t.ownerDocument:t.document)||window.document).documentElement}function floating_ui_dom_browser_min_E(t){return floating_ui_dom_browser_min_l(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function floating_ui_dom_browser_min_C(t){return floating_ui_dom_browser_min_T(S(t)).left+floating_ui_dom_browser_min_E(t).scrollLeft}function F(t){if("html"===r(t))return t;const e=t.assignedSlot||t.parentNode||s(t)&&t.host||S(t);return s(e)?e.host:e}function W(t){const e=F(t);return floating_ui_dom_browser_min_h(e)?t.ownerDocument?t.ownerDocument.body:t.body:floating_ui_dom_browser_min_c(e)&&floating_ui_dom_browser_min_f(e)?e:W(e)}function floating_ui_dom_browser_min_D(t,e){var o;void 0===e&&(e=[]);const i=W(t),r=i===(null==(o=t.ownerDocument)?void 0:o.body),c=floating_ui_dom_browser_min_n(i);return r?e.concat(c,c.visualViewport||[],floating_ui_dom_browser_min_f(i)?i:[]):e.concat(i,floating_ui_dom_browser_min_D(i))}function H(e,i,r){let s;if("viewport"===i)s=function(t,e){const o=floating_ui_dom_browser_min_n(t),i=S(t),r=o.visualViewport;let c=i.clientWidth,l=i.clientHeight,s=0,f=0;if(r){c=r.width,l=r.height;const t=floating_ui_dom_browser_min_a();(!t||t&&"fixed"===e)&&(s=r.offsetLeft,f=r.offsetTop)}return{width:c,height:l,x:s,y:f}}(e,r);else if("document"===i)s=function(t){const e=S(t),n=floating_ui_dom_browser_min_E(t),i=t.ownerDocument.body,r=floating_ui_dom_browser_min_g(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),c=floating_ui_dom_browser_min_g(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let l=-n.scrollLeft+floating_ui_dom_browser_min_C(t);const s=-n.scrollTop;return"rtl"===floating_ui_dom_browser_min_o(i).direction&&(l+=floating_ui_dom_browser_min_g(e.clientWidth,i.clientWidth)-r),{width:r,height:c,x:l,y:s}}(S(e));else if(floating_ui_dom_browser_min_l(i))s=function(t,e){const n=floating_ui_dom_browser_min_T(t,!0,"fixed"===e),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=floating_ui_dom_browser_min_c(t)?floating_ui_dom_browser_min_b(t):floating_ui_dom_browser_min_w(1);return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:i*r.x,y:o*r.y}}(i,r);else{const t=floating_ui_dom_browser_min_R(e);s={...i,x:i.x-t.x,y:i.y-t.y}}return floating_ui_core_browser_min_s(s)}function floating_ui_dom_browser_min_O(t,e){const n=F(t);return!(n===e||!floating_ui_dom_browser_min_l(n)||floating_ui_dom_browser_min_h(n))&&("fixed"===floating_ui_dom_browser_min_o(n).position||floating_ui_dom_browser_min_O(n,e))}function M(t,e){return floating_ui_dom_browser_min_c(t)&&"fixed"!==floating_ui_dom_browser_min_o(t).position?e?e(t):t.offsetParent:null}function floating_ui_dom_browser_min_P(t,e){const i=floating_ui_dom_browser_min_n(t);if(!floating_ui_dom_browser_min_c(t))return i;let l=M(t,e);for(;l&&floating_ui_dom_browser_min_u(l)&&"static"===floating_ui_dom_browser_min_o(l).position;)l=M(l,e);return l&&("html"===r(l)||"body"===r(l)&&"static"===floating_ui_dom_browser_min_o(l).position&&!floating_ui_dom_browser_min_d(l))?i:l||function(t){let e=F(t);for(;floating_ui_dom_browser_min_c(e)&&!floating_ui_dom_browser_min_h(e);){if(floating_ui_dom_browser_min_d(e))return e;e=F(e)}return null}(t)||i}function z(t,e,n){const o=floating_ui_dom_browser_min_c(e),i=S(e),l="fixed"===n,s=floating_ui_dom_browser_min_T(t,!0,l,e);let u={scrollLeft:0,scrollTop:0};const d=floating_ui_dom_browser_min_w(0);if(o||!o&&!l)if(("body"!==r(e)||floating_ui_dom_browser_min_f(i))&&(u=floating_ui_dom_browser_min_E(e)),floating_ui_dom_browser_min_c(e)){const t=floating_ui_dom_browser_min_T(e,!0,l,e);d.x=t.x+e.clientLeft,d.y=t.y+e.clientTop}else i&&(d.x=floating_ui_dom_browser_min_C(i));return{x:s.left+u.scrollLeft-d.x,y:s.top+u.scrollTop-d.y,width:s.width,height:s.height}}const V={getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:i,strategy:c}=t;const s="clippingAncestors"===n?function(t,e){const n=e.get(t);if(n)return n;let i=floating_ui_dom_browser_min_D(t).filter((t=>floating_ui_dom_browser_min_l(t)&&"body"!==r(t))),c=null;const s="fixed"===floating_ui_dom_browser_min_o(t).position;let u=s?F(t):t;for(;floating_ui_dom_browser_min_l(u)&&!floating_ui_dom_browser_min_h(u);){const e=floating_ui_dom_browser_min_o(u),n=floating_ui_dom_browser_min_d(u);n||"fixed"!==e.position||(c=null),(s?!n&&!c:!n&&"static"===e.position&&c&&["absolute","fixed"].includes(c.position)||floating_ui_dom_browser_min_f(u)&&!n&&floating_ui_dom_browser_min_O(t,u))?i=i.filter((t=>t!==u)):c=e,u=F(u)}return e.set(t,i),i}(e,this._c):[].concat(n),u=[...s,i],a=u[0],m=u.reduce(((t,n)=>{const o=H(e,n,c);return t.top=floating_ui_dom_browser_min_g(o.top,t.top),t.right=floating_ui_dom_browser_min_p(o.right,t.right),t.bottom=floating_ui_dom_browser_min_p(o.bottom,t.bottom),t.left=floating_ui_dom_browser_min_g(o.left,t.left),t}),H(e,a,c));return{width:m.right-m.left,height:m.bottom-m.top,x:m.left,y:m.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=floating_ui_dom_browser_min_c(n),l=S(n);if(n===l)return e;let s={scrollLeft:0,scrollTop:0},u=floating_ui_dom_browser_min_w(1);const d=floating_ui_dom_browser_min_w(0);if((i||!i&&"fixed"!==o)&&(("body"!==r(n)||floating_ui_dom_browser_min_f(l))&&(s=floating_ui_dom_browser_min_E(n)),floating_ui_dom_browser_min_c(n))){const t=floating_ui_dom_browser_min_T(n);u=floating_ui_dom_browser_min_b(n),d.x=t.x+n.clientLeft,d.y=t.y+n.clientTop}return{width:e.width*u.x,height:e.height*u.y,x:e.x*u.x-s.scrollLeft*u.x+d.x,y:e.y*u.y-s.scrollTop*u.y+d.y}},isElement:floating_ui_dom_browser_min_l,getDimensions:function(t){return floating_ui_dom_browser_min_x(t)},getOffsetParent:floating_ui_dom_browser_min_P,getDocumentElement:S,getScale:floating_ui_dom_browser_min_b,async getElementRects(t){let{reference:e,floating:n,strategy:o}=t;const i=this.getOffsetParent||floating_ui_dom_browser_min_P,r=this.getDimensions;return{reference:z(e,await i(n),o),floating:{x:0,y:0,...await r(n)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===floating_ui_dom_browser_min_o(t).direction};function floating_ui_dom_browser_min_B(t,e,n,o){void 0===o&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:c=!0,layoutShift:l="function"==typeof IntersectionObserver,animationFrame:s=!1}=o,f=floating_ui_dom_browser_min_v(t),u=i||r?[...f?floating_ui_dom_browser_min_D(f):[],...floating_ui_dom_browser_min_D(e)]:[];u.forEach((t=>{i&&t.addEventListener("scroll",n,{passive:!0}),r&&t.addEventListener("resize",n)}));const d=f&&l?function(t,e){let n=null;const o=S(t);function i(){n&&n.disconnect(),n=null}return function r(c){void 0===c&&(c=!1),i();const{left:l,top:s,width:f,height:u}=t.getBoundingClientRect();if(c||e(),!f||!u)return;const d=floating_ui_dom_browser_min_y(s),a=floating_ui_dom_browser_min_y(o.clientWidth-(l+f)),h=floating_ui_dom_browser_min_y(o.clientHeight-(s+u)),p=floating_ui_dom_browser_min_y(l);let g=!0;n=new IntersectionObserver((t=>{1===t[0].intersectionRatio||g||r(),g=!1}),{rootMargin:-d+"px "+-a+"px "+-h+"px "+-p+"px",threshold:1}),n.observe(t)}(!0),i}(f,n):null;let a,h=null;c&&(h=new ResizeObserver(n),f&&!s&&h.observe(f),h.observe(e));let p=s?floating_ui_dom_browser_min_T(t):null;return s&&function e(){const o=floating_ui_dom_browser_min_T(t);!p||o.x===p.x&&o.y===p.y&&o.width===p.width&&o.height===p.height||n(),p=o,a=requestAnimationFrame(e)}(),n(),()=>{u.forEach((t=>{i&&t.removeEventListener("scroll",n),r&&t.removeEventListener("resize",n)})),d&&d(),h&&h.disconnect(),h=null,s&&cancelAnimationFrame(a)}}var react_dom=__webpack_require__("./node_modules/react-dom/index.js");var index="undefined"!=typeof document?react.useLayoutEffect:react.useEffect;function deepEqual(a,b){if(a===b)return!0;if(typeof a!=typeof b)return!1;if("function"==typeof a&&a.toString()===b.toString())return!0;let length,i,keys;if(a&&b&&"object"==typeof a){if(Array.isArray(a)){if(length=a.length,length!=b.length)return!1;for(i=length;0!=i--;)if(!deepEqual(a[i],b[i]))return!1;return!0}if(keys=Object.keys(a),length=keys.length,length!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!{}.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){const key=keys[i];if(("_owner"!==key||!a.$$typeof)&&!deepEqual(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}function getDPR(element){if("undefined"==typeof window)return 1;return(element.ownerDocument.defaultView||window).devicePixelRatio||1}function roundByDPR(element,value){const dpr=getDPR(element);return Math.round(value*dpr)/dpr}function useLatestRef(value){const ref=react.useRef(value);return index((()=>{ref.current=value})),ref}function useFloating(options){void 0===options&&(options={});const{placement="bottom",strategy="absolute",middleware=[],platform,elements:{reference:externalReference,floating:externalFloating}={},transform=!0,whileElementsMounted,open}=options,[data,setData]=react.useState({x:0,y:0,strategy,placement,middlewareData:{},isPositioned:!1}),[latestMiddleware,setLatestMiddleware]=react.useState(middleware);deepEqual(latestMiddleware,middleware)||setLatestMiddleware(middleware);const[_reference,_setReference]=react.useState(null),[_floating,_setFloating]=react.useState(null),setReference=react.useCallback((node=>{node!=referenceRef.current&&(referenceRef.current=node,_setReference(node))}),[_setReference]),setFloating=react.useCallback((node=>{node!==floatingRef.current&&(floatingRef.current=node,_setFloating(node))}),[_setFloating]),referenceEl=externalReference||_reference,floatingEl=externalFloating||_floating,referenceRef=react.useRef(null),floatingRef=react.useRef(null),dataRef=react.useRef(data),whileElementsMountedRef=useLatestRef(whileElementsMounted),platformRef=useLatestRef(platform),update=react.useCallback((()=>{if(!referenceRef.current||!floatingRef.current)return;const config={placement,strategy,middleware:latestMiddleware};platformRef.current&&(config.platform=platformRef.current),((t,n,o)=>{const i=new Map,r={platform:V,...o},c={...r.platform,_c:i};return floating_ui_core_browser_min_r(t,n,{...r,platform:c})})(referenceRef.current,floatingRef.current,config).then((data=>{const fullData={...data,isPositioned:!0};isMountedRef.current&&!deepEqual(dataRef.current,fullData)&&(dataRef.current=fullData,react_dom.flushSync((()=>{setData(fullData)})))}))}),[latestMiddleware,placement,strategy,platformRef]);index((()=>{!1===open&&dataRef.current.isPositioned&&(dataRef.current.isPositioned=!1,setData((data=>({...data,isPositioned:!1}))))}),[open]);const isMountedRef=react.useRef(!1);index((()=>(isMountedRef.current=!0,()=>{isMountedRef.current=!1})),[]),index((()=>{if(referenceEl&&(referenceRef.current=referenceEl),floatingEl&&(floatingRef.current=floatingEl),referenceEl&&floatingEl){if(whileElementsMountedRef.current)return whileElementsMountedRef.current(referenceEl,floatingEl,update);update()}}),[referenceEl,floatingEl,update,whileElementsMountedRef]);const refs=react.useMemo((()=>({reference:referenceRef,floating:floatingRef,setReference,setFloating})),[setReference,setFloating]),elements=react.useMemo((()=>({reference:referenceEl,floating:floatingEl})),[referenceEl,floatingEl]),floatingStyles=react.useMemo((()=>{const initialStyles={position:strategy,left:0,top:0};if(!elements.floating)return initialStyles;const x=roundByDPR(elements.floating,data.x),y=roundByDPR(elements.floating,data.y);return transform?{...initialStyles,transform:"translate("+x+"px, "+y+"px)",...getDPR(elements.floating)>=1.5&&{willChange:"transform"}}:{position:strategy,left:x,top:y}}),[strategy,transform,elements.floating,data.x,data.y]);return react.useMemo((()=>({...data,update,refs,elements,floatingStyles})),[data,update,refs,elements,floatingStyles])}var dist=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs");const $7e8f5cd07187803e$export$21b07c8f274aebd5=(0,react.forwardRef)(((props,forwardedRef)=>{const{children,width=10,height=5,...arrowProps}=props;return(0,react.createElement)(dist.WV.svg,(0,esm_extends.Z)({},arrowProps,{ref:forwardedRef,width,height,viewBox:"0 0 30 10",preserveAspectRatio:"none"}),props.asChild?children:(0,react.createElement)("polygon",{points:"0,0 30,0 15,10"}))})),$7e8f5cd07187803e$export$be92b6f5f03c0fe9=$7e8f5cd07187803e$export$21b07c8f274aebd5;var react_compose_refs_dist=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),react_context_dist=__webpack_require__("./node_modules/@radix-ui/react-context/dist/index.mjs"),react_use_callback_ref_dist=__webpack_require__("./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs"),react_use_layout_effect_dist=__webpack_require__("./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs"),react_use_size_dist=__webpack_require__("./node_modules/@radix-ui/react-use-size/dist/index.mjs");const[$cf1ac5d9fe0e8206$var$createPopperContext,$cf1ac5d9fe0e8206$export$722aac194ae923]=(0,react_context_dist.b)("Popper"),[$cf1ac5d9fe0e8206$var$PopperProvider,$cf1ac5d9fe0e8206$var$usePopperContext]=$cf1ac5d9fe0e8206$var$createPopperContext("Popper"),$cf1ac5d9fe0e8206$export$badac9ada3a0bdf9=props=>{const{__scopePopper,children}=props,[anchor,setAnchor]=(0,react.useState)(null);return(0,react.createElement)($cf1ac5d9fe0e8206$var$PopperProvider,{scope:__scopePopper,anchor,onAnchorChange:setAnchor},children)},$cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopePopper,virtualRef,...anchorProps}=props,context=$cf1ac5d9fe0e8206$var$usePopperContext("PopperAnchor",__scopePopper),ref=(0,react.useRef)(null),composedRefs=(0,react_compose_refs_dist.e)(forwardedRef,ref);return(0,react.useEffect)((()=>{context.onAnchorChange((null==virtualRef?void 0:virtualRef.current)||ref.current)})),virtualRef?null:(0,react.createElement)(dist.WV.div,(0,esm_extends.Z)({},anchorProps,{ref:composedRefs}))})),[$cf1ac5d9fe0e8206$var$PopperContentProvider,$cf1ac5d9fe0e8206$var$useContentContext]=$cf1ac5d9fe0e8206$var$createPopperContext("PopperContent"),$cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc=(0,react.forwardRef)(((props,forwardedRef)=>{var _arrowSize$width,_arrowSize$height,_middlewareData$arrow,_middlewareData$arrow2,_middlewareData$arrow3,_middlewareData$trans,_middlewareData$trans2,_middlewareData$hide;const{__scopePopper,side="bottom",sideOffset=0,align="center",alignOffset=0,arrowPadding=0,collisionBoundary=[],collisionPadding:collisionPaddingProp=0,sticky="partial",hideWhenDetached=!1,avoidCollisions=!0,onPlaced,...contentProps}=props,context=$cf1ac5d9fe0e8206$var$usePopperContext("PopperContent",__scopePopper),[content,setContent]=(0,react.useState)(null),composedRefs=(0,react_compose_refs_dist.e)(forwardedRef,(node=>setContent(node))),[arrow,setArrow]=(0,react.useState)(null),arrowSize=(0,react_use_size_dist.t)(arrow),arrowWidth=null!==(_arrowSize$width=null==arrowSize?void 0:arrowSize.width)&&void 0!==_arrowSize$width?_arrowSize$width:0,arrowHeight=null!==(_arrowSize$height=null==arrowSize?void 0:arrowSize.height)&&void 0!==_arrowSize$height?_arrowSize$height:0,desiredPlacement=side+("center"!==align?"-"+align:""),collisionPadding="number"==typeof collisionPaddingProp?collisionPaddingProp:{top:0,right:0,bottom:0,left:0,...collisionPaddingProp},boundary=Array.isArray(collisionBoundary)?collisionBoundary:[collisionBoundary],hasExplicitBoundaries=boundary.length>0,detectOverflowOptions={padding:collisionPadding,boundary:boundary.filter($cf1ac5d9fe0e8206$var$isNotNull),altBoundary:hasExplicitBoundaries},{refs,floatingStyles,placement,isPositioned,middlewareData}=useFloating({strategy:"fixed",placement:desiredPlacement,whileElementsMounted:floating_ui_dom_browser_min_B,elements:{reference:context.anchor},middleware:[L({mainAxis:sideOffset+arrowHeight,alignmentAxis:alignOffset}),avoidCollisions&&O({mainAxis:!0,crossAxis:!1,limiter:"partial"===sticky?B():void 0,...detectOverflowOptions}),avoidCollisions&&A({...detectOverflowOptions}),C({...detectOverflowOptions,apply:({elements,rects,availableWidth,availableHeight})=>{const{width:anchorWidth,height:anchorHeight}=rects.reference,contentStyle=elements.floating.style;contentStyle.setProperty("--radix-popper-available-width",`${availableWidth}px`),contentStyle.setProperty("--radix-popper-available-height",`${availableHeight}px`),contentStyle.setProperty("--radix-popper-anchor-width",`${anchorWidth}px`),contentStyle.setProperty("--radix-popper-anchor-height",`${anchorHeight}px`)}}),arrow&&(options={element:arrow,padding:arrowPadding},{name:"arrow",options,fn(state){const{element,padding}="function"==typeof options?options(state):options;return element&&function isRef(value){return{}.hasOwnProperty.call(value,"current")}(element)?null!=element.current?g({element:element.current,padding}).fn(state):{}:element?g({element,padding}).fn(state):{}}}),$cf1ac5d9fe0e8206$var$transformOrigin({arrowWidth,arrowHeight}),hideWhenDetached&&E({strategy:"referenceHidden"})]});var options;const[placedSide,placedAlign]=$cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement),handlePlaced=(0,react_use_callback_ref_dist.W)(onPlaced);(0,react_use_layout_effect_dist.b)((()=>{isPositioned&&(null==handlePlaced||handlePlaced())}),[isPositioned,handlePlaced]);const arrowX=null===(_middlewareData$arrow=middlewareData.arrow)||void 0===_middlewareData$arrow?void 0:_middlewareData$arrow.x,arrowY=null===(_middlewareData$arrow2=middlewareData.arrow)||void 0===_middlewareData$arrow2?void 0:_middlewareData$arrow2.y,cannotCenterArrow=0!==(null===(_middlewareData$arrow3=middlewareData.arrow)||void 0===_middlewareData$arrow3?void 0:_middlewareData$arrow3.centerOffset),[contentZIndex,setContentZIndex]=(0,react.useState)();return(0,react_use_layout_effect_dist.b)((()=>{content&&setContentZIndex(window.getComputedStyle(content).zIndex)}),[content]),(0,react.createElement)("div",{ref:refs.setFloating,"data-radix-popper-content-wrapper":"",style:{...floatingStyles,transform:isPositioned?floatingStyles.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:contentZIndex,"--radix-popper-transform-origin":[null===(_middlewareData$trans=middlewareData.transformOrigin)||void 0===_middlewareData$trans?void 0:_middlewareData$trans.x,null===(_middlewareData$trans2=middlewareData.transformOrigin)||void 0===_middlewareData$trans2?void 0:_middlewareData$trans2.y].join(" ")},dir:props.dir},(0,react.createElement)($cf1ac5d9fe0e8206$var$PopperContentProvider,{scope:__scopePopper,placedSide,onArrowChange:setArrow,arrowX,arrowY,shouldHideArrow:cannotCenterArrow},(0,react.createElement)(dist.WV.div,(0,esm_extends.Z)({"data-side":placedSide,"data-align":placedAlign},contentProps,{ref:composedRefs,style:{...contentProps.style,animation:isPositioned?void 0:"none",opacity:null!==(_middlewareData$hide=middlewareData.hide)&&void 0!==_middlewareData$hide&&_middlewareData$hide.referenceHidden?0:void 0}}))))})),$cf1ac5d9fe0e8206$var$OPPOSITE_SIDE={top:"bottom",right:"left",bottom:"top",left:"right"},$cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0=(0,react.forwardRef)((function $cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0(props,forwardedRef){const{__scopePopper,...arrowProps}=props,contentContext=$cf1ac5d9fe0e8206$var$useContentContext("PopperArrow",__scopePopper),baseSide=$cf1ac5d9fe0e8206$var$OPPOSITE_SIDE[contentContext.placedSide];return(0,react.createElement)("span",{ref:contentContext.onArrowChange,style:{position:"absolute",left:contentContext.arrowX,top:contentContext.arrowY,[baseSide]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[contentContext.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[contentContext.placedSide],visibility:contentContext.shouldHideArrow?"hidden":void 0}},(0,react.createElement)($7e8f5cd07187803e$export$be92b6f5f03c0fe9,(0,esm_extends.Z)({},arrowProps,{ref:forwardedRef,style:{...arrowProps.style,display:"block"}})))}));function $cf1ac5d9fe0e8206$var$isNotNull(value){return null!==value}const $cf1ac5d9fe0e8206$var$transformOrigin=options=>({name:"transformOrigin",options,fn(data){var _middlewareData$arrow4,_middlewareData$arrow5,_middlewareData$arrow6,_middlewareData$arrow7,_middlewareData$arrow8;const{placement,rects,middlewareData}=data,isArrowHidden=0!==(null===(_middlewareData$arrow4=middlewareData.arrow)||void 0===_middlewareData$arrow4?void 0:_middlewareData$arrow4.centerOffset),arrowWidth=isArrowHidden?0:options.arrowWidth,arrowHeight=isArrowHidden?0:options.arrowHeight,[placedSide,placedAlign]=$cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement),noArrowAlign={start:"0%",center:"50%",end:"100%"}[placedAlign],arrowXCenter=(null!==(_middlewareData$arrow5=null===(_middlewareData$arrow6=middlewareData.arrow)||void 0===_middlewareData$arrow6?void 0:_middlewareData$arrow6.x)&&void 0!==_middlewareData$arrow5?_middlewareData$arrow5:0)+arrowWidth/2,arrowYCenter=(null!==(_middlewareData$arrow7=null===(_middlewareData$arrow8=middlewareData.arrow)||void 0===_middlewareData$arrow8?void 0:_middlewareData$arrow8.y)&&void 0!==_middlewareData$arrow7?_middlewareData$arrow7:0)+arrowHeight/2;let x="",y="";return"bottom"===placedSide?(x=isArrowHidden?noArrowAlign:`${arrowXCenter}px`,y=-arrowHeight+"px"):"top"===placedSide?(x=isArrowHidden?noArrowAlign:`${arrowXCenter}px`,y=`${rects.floating.height+arrowHeight}px`):"right"===placedSide?(x=-arrowHeight+"px",y=isArrowHidden?noArrowAlign:`${arrowYCenter}px`):"left"===placedSide&&(x=`${rects.floating.width+arrowHeight}px`,y=isArrowHidden?noArrowAlign:`${arrowYCenter}px`),{data:{x,y}}}});function $cf1ac5d9fe0e8206$var$getSideAndAlignFromPlacement(placement){const[side,align="center"]=placement.split("-");return[side,align]}const $cf1ac5d9fe0e8206$export$be92b6f5f03c0fe9=$cf1ac5d9fe0e8206$export$badac9ada3a0bdf9,$cf1ac5d9fe0e8206$export$b688253958b8dfe7=$cf1ac5d9fe0e8206$export$ecd4e1ccab6ed6d,$cf1ac5d9fe0e8206$export$7c6e2c02157bb7d2=$cf1ac5d9fe0e8206$export$bc4ae5855d3c4fc,$cf1ac5d9fe0e8206$export$21b07c8f274aebd5=$cf1ac5d9fe0e8206$export$79d62cd4e10a3fd0},"./node_modules/@radix-ui/react-use-size/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>$db6c3485150b8e66$export$1ab7ae714698c4b8});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");function $db6c3485150b8e66$export$1ab7ae714698c4b8(element){const[size,setSize]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(void 0);return(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.b)((()=>{if(element){setSize({width:element.offsetWidth,height:element.offsetHeight});const resizeObserver=new ResizeObserver((entries=>{if(!Array.isArray(entries))return;if(!entries.length)return;const entry=entries[0];let width,height;if("borderBoxSize"in entry){const borderSizeEntry=entry.borderBoxSize,borderSize=Array.isArray(borderSizeEntry)?borderSizeEntry[0]:borderSizeEntry;width=borderSize.inlineSize,height=borderSize.blockSize}else width=element.offsetWidth,height=element.offsetHeight;setSize({width,height})}));return resizeObserver.observe(element,{box:"border-box"}),()=>resizeObserver.unobserve(element)}setSize(void 0)}),[element]),size}}}]);