"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[351],{6945:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.AnchorLink=d;var r=o(a(7294)),n=a(1883),s=o(a(5697)),i=a(2284);function o(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){u(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e){var t=e.to,a=e.title,s=e.children,o=e.className,l=e.stripHash,u=void 0!==l&&l,d=e.gatsbyLinkProps,p=void 0===d?{}:d,m=e.onAnchorLinkClick,g=u?i.handleStrippedLinkClick:i.handleLinkClick,h=c(c({},p),{},{to:u?(0,i.stripHashedLocation)(t):t,onClick:function(e){return g(t,e,m)}});return a&&(h.title=a),o&&(h.className=o),r.default.createElement(n.Link,h,s||a)}d.propTypes={to:s.default.string.isRequired,title:s.default.string,className:s.default.string,stripHash:s.default.bool,gatsbyLinkProps:s.default.object,onAnchorLinkClick:s.default.func,children:s.default.node}},3089:function(e,t,a){Object.defineProperty(t,"P",{enumerable:!0,get:function(){return r.AnchorLink}});var r=a(6945)},3723:function(e,t,a){a.d(t,{L:function(){return m},M:function(){return E},P:function(){return v},S:function(){return q},_:function(){return o},a:function(){return i},b:function(){return c},g:function(){return u},h:function(){return l}});var r=a(7294),n=(a(2369),a(5697)),s=a.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a,r,n){return void 0===n&&(n={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function u(e,t,a,r,n,s,o,l){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);const u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const d=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,a=o(e,d);return r.createElement(r.Fragment,null,r.createElement(p,i({},a)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:l}=e,c=o(e,g);return r.createElement("img",i({},c,{decoding:"async",loading:n,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:s}))},y=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=o(e,h);const l=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(f,i({},s,t,{sizes:l,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:l})})),c):c};var b;f.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],v=function(e){let{fallback:t}=e,a=o(e,w);return t?r.createElement(y,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};v.displayName="Placeholder",v.propTypes={fallback:n.string,sources:null==(b=y.propTypes)?void 0:b.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const E=function(e){return r.createElement(r.Fragment,null,r.createElement(y,i({},e)),r.createElement("noscript",null,r.createElement(y,i({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=y.propTypes;const L=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),i=3;i<r;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},k={image:s().object.isRequired,alt:L},C=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],O=["style","className"],S=new Set;let P,x;const j=function(e){let{as:t="div",image:n,style:s,backgroundColor:c,className:u,class:d,onStartLoad:p,onLoad:m,onError:g}=e,h=o(e,C);const{width:f,height:y,layout:b}=n,w=function(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(f,y,b),{style:v,className:E}=w,L=o(w,O),k=(0,r.useRef)(),j=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);d&&(u=d);const N=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,f,y);return(0,r.useEffect)((()=>{P||(P=Promise.all([a.e(774),a.e(223)]).then(a.bind(a,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return x=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==p||p({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void S.add(j);if(x&&S.has(j))return;let t,r;return P.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;k.current&&(k.current.innerHTML=a(i({isLoading:!0,isLoaded:S.has(j),image:n},h)),S.has(j)||(t=requestAnimationFrame((()=>{k.current&&(r=o(k.current,j,S,s,p,m,g))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{S.has(j)&&x&&(k.current.innerHTML=x(i({isLoading:S.has(j),isLoaded:S.has(j),image:n},h)),null==p||p({wasCached:!0}),null==m||m({wasCached:!0}))}),[n]),(0,r.createElement)(t,i({},L,{style:i({},v,s,{backgroundColor:c}),className:E+(u?" "+u:""),ref:k,dangerouslySetInnerHTML:{__html:N},suppressHydrationWarning:!0}))},N=(0,r.memo)((function(e){return e.image?(0,r.createElement)(j,e):null}));N.propTypes=k,N.displayName="GatsbyImage";const _=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],T=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},A=new Set(["fixed","fullWidth","constrained"]),I={src:s().string.isRequired,alt:L,width:T,height:T,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!A.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},q=(z=N,function(e){let{src:t,__imageData:a,__error:n}=e,s=o(e,_);return n&&console.warn(n),a?r.createElement(z,i({image:a},s)):(console.warn("Image not loaded",t),null)});var z;q.displayName="StaticImage",q.propTypes=I},2369:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,r=!1;for(let n=0;n<e.length;n++){const s=e[n];t&&/[a-zA-Z]/.test(s)&&s.toUpperCase()===s?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(s)&&s.toLowerCase()===s?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=s.toLowerCase()===s&&s.toUpperCase()!==s,r=a,a=s.toUpperCase()===s&&s.toLowerCase()!==s)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},6434:function(e,t,a){a.d(t,{Z:function(){return n}});var r=a(7294);function n(){return r.createElement("div",null,r.createElement("a",{href:"https://www.linkedin.com/in/sathurshan-arulmohan-01666b213/"},r.createElement("button",{className:"linkedin"})),r.createElement("a",{href:"https://github.com/Sathurshan03"},r.createElement("button",{className:"github"})),r.createElement("a",{href:"mailto:arulmohs@mcmaster.com"},r.createElement("button",{className:"email"})),r.createElement("a",{href:"https://schulichleaders.com/scholars/sathurshan-arulmohan/"},r.createElement("button",{className:"schulich"})))}},6571:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(7294),n=a(3089),s=a(3723);function i(){return r.createElement("nav",null,r.createElement("div",{className:"leftNav"},r.createElement(s.S,{className:"logo",src:"../images/selfPictures/logo.png",alt:"Logo",placeholder:"dominantColor",__imageData:a(3168)}),r.createElement("p",null,"Sathurshan Arulmohan")),r.createElement("div",{className:"rightNav"},r.createElement(n.P,{to:"/#home"},"  Home  "),r.createElement(n.P,{to:"/#experience"},"  Experiences  "),r.createElement(n.P,{to:"/#skills"},"  Skills  "),r.createElement(n.P,{to:"/#projectBoard"},"  Project Board  ")))}var o=a(6434);function l(){return r.createElement("footer",null,r.createElement(o.Z,null),r.createElement("p",null,"Last Updated: Jan. 2023"))}function c(e){let{children:t}=e;return r.createElement("div",{className:"layout"},r.createElement(i,null),r.createElement("div",{className:"Content"},t),r.createElement(l,null))}},3168:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/sathurshan-site/static/915ac063a962165941c97e5c41e06fa5/ba5dd/logo.png","srcSet":"/sathurshan-site/static/915ac063a962165941c97e5c41e06fa5/83fe9/logo.png 35w,\\n/sathurshan-site/static/915ac063a962165941c97e5c41e06fa5/ad998/logo.png 70w,\\n/sathurshan-site/static/915ac063a962165941c97e5c41e06fa5/ba5dd/logo.png 140w","sizes":"(min-width: 140px) 140px, 100vw"},"sources":[{"srcSet":"/sathurshan-site/static/915ac063a962165941c97e5c41e06fa5/dbb7e/logo.webp 35w,\\n/sathurshan-site/static/915ac063a962165941c97e5c41e06fa5/299bc/logo.webp 70w,\\n/sathurshan-site/static/915ac063a962165941c97e5c41e06fa5/29111/logo.webp 140w","type":"image/webp","sizes":"(min-width: 140px) 140px, 100vw"}]},"width":140,"height":140}')}}]);
//# sourceMappingURL=commons-c8ac374b806a39bad102.js.map