"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[351],{6945:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.AnchorLink=d;var a=o(r(7294)),n=r(1883),s=o(r(5697)),i=r(2284);function o(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){var t=e.to,r=e.title,s=e.children,o=e.className,l=e.stripHash,u=void 0!==l&&l,d=e.gatsbyLinkProps,p=void 0===d?{}:d,g=e.onAnchorLinkClick,m=u?i.handleStrippedLinkClick:i.handleLinkClick,h=c(c({},p),{},{to:u?(0,i.stripHashedLocation)(t):t,onClick:function(e){return m(t,e,g)}});return r&&(h.title=r),o&&(h.className=o),a.default.createElement(n.Link,h,s||r)}d.propTypes={to:s.default.string.isRequired,title:s.default.string,className:s.default.string,stripHash:s.default.bool,gatsbyLinkProps:s.default.object,onAnchorLinkClick:s.default.func,children:s.default.node}},3089:function(e,t,r){Object.defineProperty(t,"P",{enumerable:!0,get:function(){return a.AnchorLink}});var a=r(6945)},3723:function(e,t,r){r.d(t,{L:function(){return g},M:function(){return E},P:function(){return v},S:function(){return q},_:function(){return o},a:function(){return i},b:function(){return c},g:function(){return u},h:function(){return l}});var a=r(7294),n=(r(2369),r(5697)),s=r.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)t.indexOf(r=s[a])>=0||(n[r]=e[r]);return n}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,r,a,n){return void 0===n&&(n={}),i({},r,{loading:a,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function u(e,t,r,a,n,s,o,l){const c={};s&&(c.backgroundColor=s,"fixed"===r?(c.width=a,c.height=n,c.backgroundColor=s,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);const u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const d=["children"],p=function(e){let{layout:t,width:r,height:n}=e;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/r*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:r,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+r+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,r=o(e,d);return a.createElement(a.Fragment,null,a.createElement(p,i({},r)),t,null)},m=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:r,loading:n,alt:s="",shouldLoad:l}=e,c=o(e,m);return a.createElement("img",i({},c,{decoding:"async",loading:n,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?r:void 0,"data-srcset":l?void 0:r,alt:s}))},y=function(e){let{fallback:t,sources:r=[],shouldLoad:n=!0}=e,s=o(e,h);const l=s.sizes||(null==t?void 0:t.sizes),c=a.createElement(f,i({},s,t,{sizes:l,shouldLoad:n}));return r.length?a.createElement("picture",null,r.map((e=>{let{media:t,srcSet:r,type:s}=e;return a.createElement("source",{key:t+"-"+s+"-"+r,type:s,media:t,srcSet:n?r:void 0,"data-srcset":n?void 0:r,sizes:l})})),c):c};var b;f.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],v=function(e){let{fallback:t}=e,r=o(e,w);return t?a.createElement(y,i({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",i({},r))};v.displayName="Placeholder",v.propTypes={fallback:n.string,sources:null==(b=y.propTypes)?void 0:b.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};const E=function(e){return a.createElement(a.Fragment,null,a.createElement(y,i({},e)),a.createElement("noscript",null,a.createElement(y,i({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=y.propTypes;const k=function(e,t,r){for(var a=arguments.length,n=new Array(a>3?a-3:0),i=3;i<a;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?s().string.apply(s(),[e,t,r].concat(n)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},L={image:s().object.isRequired,alt:k},C=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],O=["style","className"],S=new Set;let P,_;const x=function(e){let{as:t="div",image:n,style:s,backgroundColor:c,className:u,class:d,onStartLoad:p,onLoad:g,onError:m}=e,h=o(e,C);const{width:f,height:y,layout:b}=n,w=function(e,t,r){const a={};let n="gatsby-image-wrapper";return"fixed"===r?(a.width=e,a.height=t):"constrained"===r&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:a}}(f,y,b),{style:v,className:E}=w,k=o(w,O),L=(0,a.useRef)(),x=(0,a.useMemo)((()=>JSON.stringify(n.images)),[n.images]);d&&(u=d);const j=function(e,t,r){let a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(b,f,y);return(0,a.useEffect)((()=>{P||(P=Promise.all([r.e(774),r.e(223)]).then(r.bind(r,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:r}=e;return _=t,{renderImageToString:t,swapPlaceholderImage:r}})));const e=L.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void S.add(x);if(_&&S.has(x))return;let t,a;return P.then((e=>{let{renderImageToString:r,swapPlaceholderImage:o}=e;L.current&&(L.current.innerHTML=r(i({isLoading:!0,isLoaded:S.has(x),image:n},h)),S.has(x)||(t=requestAnimationFrame((()=>{L.current&&(a=o(L.current,x,S,s,p,g,m))}))))})),()=>{t&&cancelAnimationFrame(t),a&&a()}}),[n]),(0,a.useLayoutEffect)((()=>{S.has(x)&&_&&(L.current.innerHTML=_(i({isLoading:S.has(x),isLoaded:S.has(x),image:n},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,a.createElement)(t,i({},k,{style:i({},v,s,{backgroundColor:c}),className:E+(u?" "+u:""),ref:L,dangerouslySetInnerHTML:{__html:j},suppressHydrationWarning:!0}))},j=(0,a.memo)((function(e){return e.image?(0,a.createElement)(x,e):null}));j.propTypes=L,j.displayName="GatsbyImage";const N=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],T=function(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),n=2;n<r;n++)a[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},A=new Set(["fixed","fullWidth","constrained"]),I={src:s().string.isRequired,alt:k,width:T,height:T,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!A.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},q=(z=j,function(e){let{src:t,__imageData:r,__error:n}=e,s=o(e,N);return n&&console.warn(n),r?a.createElement(z,i({image:r},s)):(console.warn("Image not loaded",t),null)});var z;q.displayName="StaticImage",q.propTypes=I},2369:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,r=!1,a=!1;for(let n=0;n<e.length;n++){const s=e[n];t&&/[a-zA-Z]/.test(s)&&s.toUpperCase()===s?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,a=r,r=!0,n++):r&&a&&/[a-zA-Z]/.test(s)&&s.toLowerCase()===s?(e=e.slice(0,n-1)+"-"+e.slice(n-1),a=r,r=!1,t=!0):(t=s.toLowerCase()===s&&s.toUpperCase()!==s,a=r,r=s.toUpperCase()===s&&s.toLowerCase()!==s)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r;var r};e.exports=t,e.exports.default=t},6434:function(e,t,r){r.d(t,{Z:function(){return n}});var a=r(7294);function n(){return a.createElement("div",null,a.createElement("a",{href:"https://www.linkedin.com/in/sathurshan-arulmohan-01666b213/",target:"_blank",rel:"noreferrer noopener"},a.createElement("button",{className:"linkedin"})),a.createElement("a",{href:"https://github.com/Sathurshan03",target:"_blank",rel:"noreferrer noopener"},a.createElement("button",{className:"github"})),a.createElement("a",{href:"mailto:arulmohs@mcmaster.ca",target:"_blank",rel:"noreferrer noopener"},a.createElement("button",{className:"email"})),a.createElement("a",{href:"https://schulichleaders.com/scholars/sathurshan-arulmohan/",target:"_blank",rel:"noreferrer noopener"},a.createElement("button",{className:"schulich"})))}},6571:function(e,t,r){r.d(t,{Z:function(){return c}});var a=r(7294),n=r(3089),s=r(3723);function i(){return a.createElement("nav",null,a.createElement("div",{className:"leftNav"},a.createElement(s.S,{className:"logo",src:"../images/selfPictures/logo.png",alt:"Logo",placeholder:"dominantColor",__imageData:r(3168)}),a.createElement("p",null,"Sathurshan Arulmohan")),a.createElement("div",{className:"rightNav"},a.createElement(n.P,{to:"/#home"},"  Home  "),a.createElement(n.P,{to:"/#experience"},"  Experiences  "),a.createElement(n.P,{to:"/#skills"},"  Skills  "),a.createElement(n.P,{to:"/#projectBoard"},"  Project Board  ")))}var o=r(6434);function l(){return a.createElement("footer",null,a.createElement(o.Z,null),a.createElement("p",null,"Last Updated: Jan. 2023"))}function c(e){let{children:t}=e;return a.createElement("div",{className:"layout"},a.createElement(i,null),a.createElement("div",{className:"Content"},t),a.createElement(l,null))}},3168:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/sathurshan-site/static/915ac063a962165941c97e5c41e06fa5/ba5dd/logo.png","srcSet":"/sathurshan-site/static/915ac063a962165941c97e5c41e06fa5/83fe9/logo.png 35w,\\n/sathurshan-site/static/915ac063a962165941c97e5c41e06fa5/ad998/logo.png 70w,\\n/sathurshan-site/static/915ac063a962165941c97e5c41e06fa5/ba5dd/logo.png 140w","sizes":"(min-width: 140px) 140px, 100vw"},"sources":[{"srcSet":"/sathurshan-site/static/915ac063a962165941c97e5c41e06fa5/dbb7e/logo.webp 35w,\\n/sathurshan-site/static/915ac063a962165941c97e5c41e06fa5/299bc/logo.webp 70w,\\n/sathurshan-site/static/915ac063a962165941c97e5c41e06fa5/29111/logo.webp 140w","type":"image/webp","sizes":"(min-width: 140px) 140px, 100vw"}]},"width":140,"height":140}')}}]);
//# sourceMappingURL=commons-f3737b098237b3f14815.js.map