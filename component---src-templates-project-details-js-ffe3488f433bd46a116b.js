/*! For license information please see component---src-templates-project-details-js-ffe3488f433bd46a116b.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[494],{7856:function(e){e.exports=function(){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,n){return t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(e,n)}function n(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function r(e,o,a){return r=n()?Reflect.construct:function(e,n,r){var o=[null];o.push.apply(o,n);var a=new(Function.bind.apply(e,o));return r&&t(a,r.prototype),a},r.apply(null,arguments)}function o(e){return a(e)||i(e)||l(e)||s()}function a(e){if(Array.isArray(e))return c(e)}function i(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function l(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u=Object.hasOwnProperty,m=Object.setPrototypeOf,f=Object.isFrozen,p=Object.getPrototypeOf,d=Object.getOwnPropertyDescriptor,h=Object.freeze,g=Object.seal,y=Object.create,b="undefined"!=typeof Reflect&&Reflect,v=b.apply,N=b.construct;v||(v=function(e,t,n){return e.apply(t,n)}),h||(h=function(e){return e}),g||(g=function(e){return e}),N||(N=function(e,t){return r(e,o(t))});var E=R(Array.prototype.forEach),T=R(Array.prototype.pop),A=R(Array.prototype.push),w=R(String.prototype.toLowerCase),k=R(String.prototype.toString),S=R(String.prototype.match),_=R(String.prototype.replace),x=R(String.prototype.indexOf),L=R(String.prototype.trim),O=R(RegExp.prototype.test),D=C(TypeError);function R(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return v(e,t,r)}}function C(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return N(e,n)}}function M(e,t,n){n=n||w,m&&m(e,null);for(var r=t.length;r--;){var o=t[r];if("string"==typeof o){var a=n(o);a!==o&&(f(t)||(t[r]=a),o=a)}e[o]=!0}return e}function I(e){var t,n=y(null);for(t in e)v(u,e,[t])&&(n[t]=e[t]);return n}function F(e,t){for(;null!==e;){var n=d(e,t);if(n){if(n.get)return R(n.get);if("function"==typeof n.value)return R(n.value)}e=p(e)}function r(e){return console.warn("fallback value for",e),null}return r}var H=h(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),U=h(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),z=h(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),j=h(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),P=h(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),B=h(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),G=h(["#text"]),W=h(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),q=h(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Y=h(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),K=h(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),$=g(/\{\{[\w\W]*|[\w\W]*\}\}/gm),V=g(/<%[\w\W]*|[\w\W]*%>/gm),Z=g(/\${[\w\W]*}/gm),X=g(/^data-[\-\w.\u00B7-\uFFFF]/),J=g(/^aria-[\-\w]+$/),Q=g(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ee=g(/^(?:\w+script|data):/i),te=g(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),ne=g(/^html$/i),re=function(){return"undefined"==typeof window?null:window},oe=function(t,n){if("object"!==e(t)||"function"!=typeof t.createPolicy)return null;var r=null,o="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(o)&&(r=n.currentScript.getAttribute(o));var a="dompurify"+(r?"#"+r:"");try{return t.createPolicy(a,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(i){return console.warn("TrustedTypes policy "+a+" could not be created."),null}};function ae(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re(),n=function(e){return ae(e)};if(n.version="2.4.1",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,a=t.document,i=t.DocumentFragment,l=t.HTMLTemplateElement,c=t.Node,s=t.Element,u=t.NodeFilter,m=t.NamedNodeMap,f=void 0===m?t.NamedNodeMap||t.MozNamedAttrMap:m,p=t.HTMLFormElement,d=t.DOMParser,g=t.trustedTypes,y=s.prototype,b=F(y,"cloneNode"),v=F(y,"nextSibling"),N=F(y,"childNodes"),R=F(y,"parentNode");if("function"==typeof l){var C=a.createElement("template");C.content&&C.content.ownerDocument&&(a=C.content.ownerDocument)}var ie=oe(g,r),le=ie?ie.createHTML(""):"",ce=a,se=ce.implementation,ue=ce.createNodeIterator,me=ce.createDocumentFragment,fe=ce.getElementsByTagName,pe=r.importNode,de={};try{de=I(a).documentMode?a.documentMode:{}}catch(Rt){}var he={};n.isSupported="function"==typeof R&&se&&void 0!==se.createHTMLDocument&&9!==de;var ge,ye,be=$,ve=V,Ne=Z,Ee=X,Te=J,Ae=ee,we=te,ke=Q,Se=null,_e=M({},[].concat(o(H),o(U),o(z),o(P),o(G))),xe=null,Le=M({},[].concat(o(W),o(q),o(Y),o(K))),Oe=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),De=null,Re=null,Ce=!0,Me=!0,Ie=!1,Fe=!1,He=!1,Ue=!1,ze=!1,je=!1,Pe=!1,Be=!1,Ge=!0,We=!1,qe="user-content-",Ye=!0,Ke=!1,$e={},Ve=null,Ze=M({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),Xe=null,Je=M({},["audio","video","img","source","image","track"]),Qe=null,et=M({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),tt="http://www.w3.org/1998/Math/MathML",nt="http://www.w3.org/2000/svg",rt="http://www.w3.org/1999/xhtml",ot=rt,at=!1,it=null,lt=M({},[tt,nt,rt],k),ct=["application/xhtml+xml","text/html"],st="text/html",ut=null,mt=a.createElement("form"),ft=function(e){return e instanceof RegExp||e instanceof Function},pt=function(t){ut&&ut===t||(t&&"object"===e(t)||(t={}),t=I(t),ge=ge=-1===ct.indexOf(t.PARSER_MEDIA_TYPE)?st:t.PARSER_MEDIA_TYPE,ye="application/xhtml+xml"===ge?k:w,Se="ALLOWED_TAGS"in t?M({},t.ALLOWED_TAGS,ye):_e,xe="ALLOWED_ATTR"in t?M({},t.ALLOWED_ATTR,ye):Le,it="ALLOWED_NAMESPACES"in t?M({},t.ALLOWED_NAMESPACES,k):lt,Qe="ADD_URI_SAFE_ATTR"in t?M(I(et),t.ADD_URI_SAFE_ATTR,ye):et,Xe="ADD_DATA_URI_TAGS"in t?M(I(Je),t.ADD_DATA_URI_TAGS,ye):Je,Ve="FORBID_CONTENTS"in t?M({},t.FORBID_CONTENTS,ye):Ze,De="FORBID_TAGS"in t?M({},t.FORBID_TAGS,ye):{},Re="FORBID_ATTR"in t?M({},t.FORBID_ATTR,ye):{},$e="USE_PROFILES"in t&&t.USE_PROFILES,Ce=!1!==t.ALLOW_ARIA_ATTR,Me=!1!==t.ALLOW_DATA_ATTR,Ie=t.ALLOW_UNKNOWN_PROTOCOLS||!1,Fe=t.SAFE_FOR_TEMPLATES||!1,He=t.WHOLE_DOCUMENT||!1,je=t.RETURN_DOM||!1,Pe=t.RETURN_DOM_FRAGMENT||!1,Be=t.RETURN_TRUSTED_TYPE||!1,ze=t.FORCE_BODY||!1,Ge=!1!==t.SANITIZE_DOM,We=t.SANITIZE_NAMED_PROPS||!1,Ye=!1!==t.KEEP_CONTENT,Ke=t.IN_PLACE||!1,ke=t.ALLOWED_URI_REGEXP||ke,ot=t.NAMESPACE||rt,t.CUSTOM_ELEMENT_HANDLING&&ft(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Oe.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&ft(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Oe.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Oe.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Fe&&(Me=!1),Pe&&(je=!0),$e&&(Se=M({},o(G)),xe=[],!0===$e.html&&(M(Se,H),M(xe,W)),!0===$e.svg&&(M(Se,U),M(xe,q),M(xe,K)),!0===$e.svgFilters&&(M(Se,z),M(xe,q),M(xe,K)),!0===$e.mathMl&&(M(Se,P),M(xe,Y),M(xe,K))),t.ADD_TAGS&&(Se===_e&&(Se=I(Se)),M(Se,t.ADD_TAGS,ye)),t.ADD_ATTR&&(xe===Le&&(xe=I(xe)),M(xe,t.ADD_ATTR,ye)),t.ADD_URI_SAFE_ATTR&&M(Qe,t.ADD_URI_SAFE_ATTR,ye),t.FORBID_CONTENTS&&(Ve===Ze&&(Ve=I(Ve)),M(Ve,t.FORBID_CONTENTS,ye)),Ye&&(Se["#text"]=!0),He&&M(Se,["html","head","body"]),Se.table&&(M(Se,["tbody"]),delete De.tbody),h&&h(t),ut=t)},dt=M({},["mi","mo","mn","ms","mtext"]),ht=M({},["foreignobject","desc","title","annotation-xml"]),gt=M({},["title","style","font","a","script"]),yt=M({},U);M(yt,z),M(yt,j);var bt=M({},P);M(bt,B);var vt=function(e){var t=R(e);t&&t.tagName||(t={namespaceURI:ot,tagName:"template"});var n=w(e.tagName),r=w(t.tagName);return!!it[e.namespaceURI]&&(e.namespaceURI===nt?t.namespaceURI===rt?"svg"===n:t.namespaceURI===tt?"svg"===n&&("annotation-xml"===r||dt[r]):Boolean(yt[n]):e.namespaceURI===tt?t.namespaceURI===rt?"math"===n:t.namespaceURI===nt?"math"===n&&ht[r]:Boolean(bt[n]):e.namespaceURI===rt?!(t.namespaceURI===nt&&!ht[r])&&!(t.namespaceURI===tt&&!dt[r])&&!bt[n]&&(gt[n]||!yt[n]):!("application/xhtml+xml"!==ge||!it[e.namespaceURI]))},Nt=function(e){A(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(Rt){try{e.outerHTML=le}catch(Rt){e.remove()}}},Et=function(e,t){try{A(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(Rt){A(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!xe[e])if(je||Pe)try{Nt(t)}catch(Rt){}else try{t.setAttribute(e,"")}catch(Rt){}},Tt=function(e){var t,n;if(ze)e="<remove></remove>"+e;else{var r=S(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===ge&&ot===rt&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var o=ie?ie.createHTML(e):e;if(ot===rt)try{t=(new d).parseFromString(o,ge)}catch(Rt){}if(!t||!t.documentElement){t=se.createDocument(ot,"template",null);try{t.documentElement.innerHTML=at?"":o}catch(Rt){}}var i=t.body||t.documentElement;return e&&n&&i.insertBefore(a.createTextNode(n),i.childNodes[0]||null),ot===rt?fe.call(t,He?"html":"body")[0]:He?t.documentElement:i},At=function(e){return ue.call(e.ownerDocument||e,e,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT,null,!1)},wt=function(e){return e instanceof p&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof f)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},kt=function(t){return"object"===e(c)?t instanceof c:t&&"object"===e(t)&&"number"==typeof t.nodeType&&"string"==typeof t.nodeName},St=function(e,t,r){he[e]&&E(he[e],(function(e){e.call(n,t,r,ut)}))},_t=function(e){var t;if(St("beforeSanitizeElements",e,null),wt(e))return Nt(e),!0;if(O(/[\u0080-\uFFFF]/,e.nodeName))return Nt(e),!0;var r=ye(e.nodeName);if(St("uponSanitizeElement",e,{tagName:r,allowedTags:Se}),e.hasChildNodes()&&!kt(e.firstElementChild)&&(!kt(e.content)||!kt(e.content.firstElementChild))&&O(/<[/\w]/g,e.innerHTML)&&O(/<[/\w]/g,e.textContent))return Nt(e),!0;if("select"===r&&O(/<template/i,e.innerHTML))return Nt(e),!0;if(!Se[r]||De[r]){if(!De[r]&&Lt(r)){if(Oe.tagNameCheck instanceof RegExp&&O(Oe.tagNameCheck,r))return!1;if(Oe.tagNameCheck instanceof Function&&Oe.tagNameCheck(r))return!1}if(Ye&&!Ve[r]){var o=R(e)||e.parentNode,a=N(e)||e.childNodes;if(a&&o)for(var i=a.length-1;i>=0;--i)o.insertBefore(b(a[i],!0),v(e))}return Nt(e),!0}return e instanceof s&&!vt(e)?(Nt(e),!0):"noscript"!==r&&"noembed"!==r||!O(/<\/no(script|embed)/i,e.innerHTML)?(Fe&&3===e.nodeType&&(t=e.textContent,t=_(t,be," "),t=_(t,ve," "),t=_(t,Ne," "),e.textContent!==t&&(A(n.removed,{element:e.cloneNode()}),e.textContent=t)),St("afterSanitizeElements",e,null),!1):(Nt(e),!0)},xt=function(e,t,n){if(Ge&&("id"===t||"name"===t)&&(n in a||n in mt))return!1;if(Me&&!Re[t]&&O(Ee,t));else if(Ce&&O(Te,t));else if(!xe[t]||Re[t]){if(!(Lt(e)&&(Oe.tagNameCheck instanceof RegExp&&O(Oe.tagNameCheck,e)||Oe.tagNameCheck instanceof Function&&Oe.tagNameCheck(e))&&(Oe.attributeNameCheck instanceof RegExp&&O(Oe.attributeNameCheck,t)||Oe.attributeNameCheck instanceof Function&&Oe.attributeNameCheck(t))||"is"===t&&Oe.allowCustomizedBuiltInElements&&(Oe.tagNameCheck instanceof RegExp&&O(Oe.tagNameCheck,n)||Oe.tagNameCheck instanceof Function&&Oe.tagNameCheck(n))))return!1}else if(Qe[t]);else if(O(ke,_(n,we,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==x(n,"data:")||!Xe[e])if(Ie&&!O(Ae,_(n,we,"")));else if(n)return!1;return!0},Lt=function(e){return e.indexOf("-")>0},Ot=function(t){var r,o,a,i;St("beforeSanitizeAttributes",t,null);var l=t.attributes;if(l){var c={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:xe};for(i=l.length;i--;){var s=r=l[i],u=s.name,m=s.namespaceURI;if(o="value"===u?r.value:L(r.value),a=ye(u),c.attrName=a,c.attrValue=o,c.keepAttr=!0,c.forceKeepAttr=void 0,St("uponSanitizeAttribute",t,c),o=c.attrValue,!c.forceKeepAttr&&(Et(u,t),c.keepAttr))if(O(/\/>/i,o))Et(u,t);else{Fe&&(o=_(o,be," "),o=_(o,ve," "),o=_(o,Ne," "));var f=ye(t.nodeName);if(xt(f,a,o)){if(!We||"id"!==a&&"name"!==a||(Et(u,t),o=qe+o),ie&&"object"===e(g)&&"function"==typeof g.getAttributeType)if(m);else switch(g.getAttributeType(f,a)){case"TrustedHTML":o=ie.createHTML(o);break;case"TrustedScriptURL":o=ie.createScriptURL(o)}try{m?t.setAttributeNS(m,u,o):t.setAttribute(u,o),T(n.removed)}catch(Rt){}}}}St("afterSanitizeAttributes",t,null)}},Dt=function e(t){var n,r=At(t);for(St("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)St("uponSanitizeShadowNode",n,null),_t(n)||(n.content instanceof i&&e(n.content),Ot(n));St("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(o){var a,l,s,u,m,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((at=!o)&&(o="\x3c!--\x3e"),"string"!=typeof o&&!kt(o)){if("function"!=typeof o.toString)throw D("toString is not a function");if("string"!=typeof(o=o.toString()))throw D("dirty is not a string, aborting")}if(!n.isSupported){if("object"===e(t.toStaticHTML)||"function"==typeof t.toStaticHTML){if("string"==typeof o)return t.toStaticHTML(o);if(kt(o))return t.toStaticHTML(o.outerHTML)}return o}if(Ue||pt(f),n.removed=[],"string"==typeof o&&(Ke=!1),Ke){if(o.nodeName){var p=ye(o.nodeName);if(!Se[p]||De[p])throw D("root node is forbidden and cannot be sanitized in-place")}}else if(o instanceof c)1===(l=(a=Tt("\x3c!----\x3e")).ownerDocument.importNode(o,!0)).nodeType&&"BODY"===l.nodeName||"HTML"===l.nodeName?a=l:a.appendChild(l);else{if(!je&&!Fe&&!He&&-1===o.indexOf("<"))return ie&&Be?ie.createHTML(o):o;if(!(a=Tt(o)))return je?null:Be?le:""}a&&ze&&Nt(a.firstChild);for(var d=At(Ke?o:a);s=d.nextNode();)3===s.nodeType&&s===u||_t(s)||(s.content instanceof i&&Dt(s.content),Ot(s),u=s);if(u=null,Ke)return o;if(je){if(Pe)for(m=me.call(a.ownerDocument);a.firstChild;)m.appendChild(a.firstChild);else m=a;return xe.shadowroot&&(m=pe.call(r,m,!0)),m}var h=He?a.outerHTML:a.innerHTML;return He&&Se["!doctype"]&&a.ownerDocument&&a.ownerDocument.doctype&&a.ownerDocument.doctype.name&&O(ne,a.ownerDocument.doctype.name)&&(h="<!DOCTYPE "+a.ownerDocument.doctype.name+">\n"+h),Fe&&(h=_(h,be," "),h=_(h,ve," "),h=_(h,Ne," ")),ie&&Be?ie.createHTML(h):h},n.setConfig=function(e){pt(e),Ue=!0},n.clearConfig=function(){ut=null,Ue=!1},n.isValidAttribute=function(e,t,n){ut||pt({});var r=ye(e),o=ye(t);return xt(r,o,n)},n.addHook=function(e,t){"function"==typeof t&&(he[e]=he[e]||[],A(he[e],t))},n.removeHook=function(e){if(he[e])return T(he[e])},n.removeHooks=function(e){he[e]&&(he[e]=[])},n.removeAllHooks=function(){he={}},n}return ae()}()},5741:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(7856),o=n(7294),a=n(6571),i=n(6162);function l(e){let{data:t}=e;const{html:n}=t.markdownRemark,{title:l,slug:c,formatDate:s,summary:u,projectLink:m,projectImg:f}=t.markdownRemark.frontmatter;return o.createElement(a.Z,null,o.createElement("div",{className:"projectTemplate"},o.createElement("div",{className:"title"},o.createElement("h1",null,l),o.createElement("h2",null,s)),o.createElement("div",{className:"projectBody"},o.createElement("div",{className:"projectContainer"},o.createElement(i.Z,{fluid:f.childImageSharp.fluid,alt:c,className:"projectImage"})),o.createElement("div",{className:"summary"},o.createElement("h3",null,"Overview"),o.createElement("h4",{className:"summaryText"},u),o.createElement("a",{href:m,className:"linkButton"},o.createElement("button",{className:"linkProject"},"Link To Project")))),o.createElement("div",{className:"description"},o.createElement("h3",null,"Key Highlights"),o.createElement("div",{className:"points",dangerouslySetInnerHTML:{__html:(0,r.sanitize)(n)}}))))}}}]);
//# sourceMappingURL=component---src-templates-project-details-js-ffe3488f433bd46a116b.js.map