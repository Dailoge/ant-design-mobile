(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[38],{"07z2":function(e,t,a){},"0m3q":function(e,t,a){"use strict";a("ahKI")},"2Pr/":function(e,t,a){},"60ow":function(e,t,a){},"9kvl":function(e,t,a){"use strict";var n=a("FfOG");a.d(t,"a",(function(){return n["b"]}));a("bCY9")},Bjia:function(e,t,a){"use strict";var n=a("mn0l"),r=a("iojd"),c=a("ahKI"),l=a.n(c),i=a("vumQ"),o=a("TS6m");a("Qf6j"),a("60ow");t["a"]=e=>{var t=e.code,a=e.lang,c=e.showCopy,s=void 0===c||c,m=Object(o["useCopy"])(),d=Object(r["a"])(m,2),u=d[0],v=d[1];return l.a.createElement("div",{className:"__dumi-default-code-block"},l.a.createElement(i["a"],Object(n["a"])({},i["b"],{code:t,language:a,theme:void 0}),(e=>{var a=e.className,n=e.style,r=e.tokens,c=e.getLineProps,i=e.getTokenProps;return l.a.createElement("pre",{className:a,style:n},s&&l.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":v,onClick:()=>u(t)}),r.map(((e,t)=>l.a.createElement("div",c({line:e,key:t}),e.map(((e,t)=>l.a.createElement("span",i({token:e,key:t}))))))))})))}},DgDr:function(e,t,a){"use strict";a("mn0l"),a("ahKI"),a("2Pr/")},N0lm:function(e,t,a){"use strict";var n=a("mn0l"),r=a("ahKI"),c=a.n(r);a("tCeM");t["a"]=e=>c.a.createElement("div",Object(n["a"])({className:"__dumi-default-alert"},e))},TAbJ:function(e,t,a){"use strict"},YWOM:function(e,t,a){},ekZX:function(e,t,a){"use strict";a.r(t),a.d(t,"ACTIVE_MSG_TYPE",(function(){return _}));var n=a("ahKI"),r=a.n(n),c=a("iojd"),l=a("/7QA"),i=a("9kvl"),o=a("TS6m"),s=a("1KG/"),m=a.n(s),d="https://codesandbox.io/api/v1/sandboxes/define";function u(e){return m.a.compressToBase64(JSON.stringify(e)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function v(e){var t=Boolean(e.sources._.tsx),a=t?".tsx":".jsx",n={},r={},l=Object.values(e.dependencies).filter((e=>e.css)),i="app".concat(a),o="index".concat(a);Object.entries(e.dependencies).forEach((e=>{var t=Object(c["a"])(e,2),a=t[0],n=t[1].version;r[a]=n})),r["react-dom"]||(r["react-dom"]=r.react||"latest"),n["sandbox.config.json"]={content:JSON.stringify({template:t?"create-react-app-typescript":"create-react-app"},null,2)},n["index.html"]={content:'<div id="root"></div>'},n[o]={content:"/**\n* This is an auto-generated demo by dumi\n* if you think it is not working as expected,\n* please report the issue at\n* https://github.com/umijs/dumi/issues\n**/\n\nimport React from 'react';\nimport ReactDOM from 'react-dom';\n".concat(l.map((e=>{var t=e.css;return"import '".concat(t,"';")})).join("\n"),"\nimport App from './app';\n\nReactDOM.render(\n  <App />,\n  document.getElementById('root'),\n);")};var s=!1;return Object.entries(e.sources).forEach((e=>{var t=Object(c["a"])(e,2),a=t[0],r=t[1],l=r.tsx,o=r.jsx,m=r.content,d={content:l||o||m};n["_"===a?i:a]=d,s=s||d.content.includes("from 'demos'"),d.content=d.content.replace("from 'demos'","from './demos-util'")})),s&&(r["lorem-ipsum"]="^2.0.8",n["demos-util.tsx"]={content:"/**\n* This is an auto-generated demo by dumi\n* if you think it is not working as expected,\n* please report the issue at\n* https://github.com/umijs/dumi/issues\n**/\n\nimport React from 'react'\nimport { LoremIpsum } from 'lorem-ipsum'\n\nexport const lorem = new LoremIpsum({\n  sentencesPerParagraph: {\n    max: 8,\n    min: 4,\n  },\n  wordsPerSentence: {\n    max: 16,\n    min: 4,\n  },\n})\n\nexport const DemoBlock = ({ title, children }) => (\n  <div style={{ padding: 16 }}>\n    <h3>{title}</h3>\n    {children}\n  </div>\n);\n\nexport const DemoDescription = ({ children }) => <div style={{ opacity: 0.5 }}>{children}</div>;\n\nexport const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time))\n"}),n["package.json"]={content:JSON.stringify({name:e.title,main:o,dependencies:r,devDependencies:t?{typescript:"^3"}:{}},null,2)},u({files:n})}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d,a=Object(n["useState"])(),r=Object(c["a"])(a,2),l=r[0],i=r[1];return Object(n["useEffect"])((()=>{if(e){var a=document.createElement("form"),n=v(e);function r(e,t){var n=document.createElement("input");a.appendChild(n),n.name=e,n.value=t}return a.method="POST",a.target="_blank",a.style.display="none",a.action=t,r("parameters",n),r("query","file=/app.tsx&resolutionWidth=375&resolutionHeight=700"),a.setAttribute("data-demo",e.title||""),document.body.appendChild(a),i((()=>()=>a.submit())),()=>a.remove()}}),[e]),l}var p=a("Bjia");a("YWOM");function f(e,t){var a,n=null===(a=e.match(/\.(\w+)$/))||void 0===a?void 0:a[1];return n||(n=t.tsx?"tsx":"jsx"),n}var E=e=>{var t,a=Object(n["useRef"])(null),s=Object(n["useContext"])(o["context"]),m=s.locale,d=Object(o["useLocaleProps"])(m,e),u=(null===i["a"]||void 0===i["a"]?void 0:i["a"].location.hash)==="#".concat(d.identifier),v=1===Object.keys(d.sources).length,E=h(null!==(t=d.hideActions)&&void 0!==t&&t.includes("CSB")?null:d),b=Object(o["useMotions"])(d.motions||[],a.current),g=Object(c["a"])(b,2),j=g[0],y=g[1],w=Object(o["useCopy"])(),O=Object(c["a"])(w,2),_=O[0],k=O[1],x=Object(n["useState"])("_"),N=Object(c["a"])(x,2),C=N[0],S=N[1],L=Object(n["useState"])(f(C,d.sources[C])),M=Object(c["a"])(L,2),A=M[0],I=M[1],T=d.sources[C][A]||d.sources[C].content,Z=Object(o["useTSPlaygroundUrl"])(m,T),P=Object(o["usePrefersColor"])(),V=Object(c["a"])(P,1);V[0];function z(e){S(e),I(f(e,d.sources[e]))}return r.a.createElement("div",{style:d.style,className:[d.className,"__dumi-default-previewer",u?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:d.identifier,"data-debug":d.debug||void 0},r.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":d.title},d.title&&r.a.createElement(o["AnchorLink"],{to:"#".concat(d.identifier)},d.title),d.description&&r.a.createElement("div",{dangerouslySetInnerHTML:{__html:d.description}})),r.a.createElement("div",{className:"__dumi-default-previewer-actions"},d.debug&&r.a.createElement("span",{className:"debug-badge"},"Debug Only"),E&&r.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:E}),d.motions&&r.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:y,onClick:()=>j()}),r.a.createElement("div",{className:"spacer"}),r.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":k,onClick:()=>_(T)}),"tsx"===A&&r.a.createElement(o["Link"],{target:"_blank",to:Z},r.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"}))),r.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!v&&r.a.createElement(l["Tabs"],{className:"__dumi-default-previewer-source-tab",stretch:!1,defaultActiveKey:C,onChange:z},Object.keys(d.sources).map((e=>r.a.createElement(l["Tabs"].Tab,{title:"_"===e?"index.".concat(f(e,d.sources[e])):e,key:e})))),r.a.createElement("div",{className:"__dumi-default-previewer-source"},r.a.createElement(p["a"],{code:T,lang:A,showCopy:!1}))))},b=E,g=(a("oeoJ"),a("NEWu")),j=(a("q9vG"),e=>{var t=e.url,a=Object(n["useState"])(Math.random()),i=Object(c["a"])(a,2),s=i[0],m=i[1],d=Object(o["usePrefersColor"])(),u=Object(c["a"])(d,1),v=u[0],h=Object(n["useContext"])(o["context"]),p=h.config.mode;return Object(n["useEffect"])((()=>{m(Math.random())}),[v]),Object(n["useEffect"])((()=>{var e=["light","dark"].map((e=>window.matchMedia("(prefers-color-scheme: ".concat(e,")")))),t=()=>{m(Math.random())};e.forEach((e=>e.addEventListener("change",t)))}),[]),r.a.createElement("div",{className:"adm-doc-device","data-device-type":"iOS","data-mode":p},r.a.createElement("iframe",{title:"dumi-previewer",src:t,key:s}),r.a.createElement("div",{className:"adm-doc-device-action"},r.a.createElement("a",{onClick:()=>m(Math.random())},y),r.a.createElement(l["Popover"],{content:r.a.createElement(g["a"],{value:t,size:96}),trigger:"click"},r.a.createElement("a",null,w)),r.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},O)))}),y=r.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M17.875 8.313V4.374l-1.284 1.284a7.87 7.87 0 0 0-6.567-3.535 7.876 7.876 0 1 0 7.299 10.839.675.675 0 0 0-1.25-.508A6.528 6.528 0 0 1 3.497 10a6.526 6.526 0 0 1 12.116-3.364l-1.677 1.676h3.938Z",fill:"currentColor",fillRule:"nonzero"})),w=r.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M11.875 15.556v1.319h2.986a.14.14 0 0 1 .139.139v.764a.139.139 0 0 1-.139.139h-3.889a.139.139 0 0 1-.139-.14v-2.221a.14.14 0 0 1 .14-.14h.763a.14.14 0 0 1 .139.14Zm5.89.099c.084 0 .152.068.152.15v1.96a.15.15 0 0 1-.151.152h-.83a.15.15 0 0 1-.15-.151v-1.96c0-.083.068-.151.15-.151h.83Zm-2.515-1.072c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.166-.166v-.917c0-.092.075-.167.166-.167h.917Zm.028-3.75c.076 0 .139.067.139.148v.815c0 .082-.063.148-.14.148h-3.402v1.112l-.903 1.11c-.076 0-.139-.066-.139-.147V10.98c0-.081.063-.148.14-.148h4.305Zm2.496 2.084c.078 0 .143.075.143.166V14c0 .08-.05.148-.114.163l-.03.004H15.56c-.07 0-.127-.057-.14-.133L15.417 14v-.917c0-.091.064-.166.143-.166h2.214Zm-3.774 0c.092 0 .167.075.167.166V14a.167.167 0 0 1-.167.167h-3a.167.167 0 0 1-.167-.167v-.917c0-.091.075-.166.167-.166h3Zm3.75-2.084c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.163-.133l-.003-.033V11c0-.092.075-.167.166-.167h.917Zm-2.485 0c.083 0 .152.075.152.167v.917c0 .092-.068.166-.152.166h-3.863c-.084 0-.152-.074-.152-.166V11c0-.092.068-.167.152-.167h3.863ZM9.167 3.575v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm8.75 0v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492ZM7.564 3.333H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm8.75 0h-3.878a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002ZM6.23 4.723c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378H6.23Zm2.937 7.602v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm-1.603-.242H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm-1.334 1.39c.208 0 .377.168.377.376v1.131a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377v-1.13c0-.209.169-.378.377-.378H6.23Zm8.75-8.75c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377h-1.13a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378h1.131Z",fill:"currentColor",fillRule:"nonzero"})),O=r.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M10.417 1.833v.917a.167.167 0 0 1-.167.166H4.167c-.666 0-1.21.521-1.248 1.177l-.002.074v11.666c0 .666.52 1.21 1.176 1.248l.074.002h11.666c.666 0 1.21-.52 1.248-1.176l.002-.074V9.75c0-.092.075-.167.167-.167h.917a.167.167 0 0 0 .166-.166V7.25a.167.167 0 0 0-.166-.167h-.917a.167.167 0 0 1-.167-.166V3.714L11.069 9.73a.167.167 0 0 1-.236 0l-.648-.648a.167.167 0 0 1 0-.236l5.928-5.928h-3.03a.167.167 0 0 1-.166-.167v-.917c0-.092.074-.166.166-.166h4.625c.346 0 .625.28.625.625v13.541a2.5 2.5 0 0 1-2.5 2.5H4.167a2.5 2.5 0 0 1-2.5-2.5V4.167a2.5 2.5 0 0 1 2.5-2.5h6.083c.092 0 .167.074.167.166Z",fill:"currentColor",fillRule:"nonzero"})),_="dumi:scroll-into-demo";t["default"]=e=>{var t,a=Object(o["useDemoUrl"])(e.identifier);return r.a.createElement("div",{className:"adm-doc-previewer","data-debug":e.debug||void 0},r.a.createElement("div",{className:"adm-doc-previewer-source"},r.a.createElement(b,e)),r.a.createElement("div",{className:"adm-doc-previewer-device"},r.a.createElement(j,{url:null!==(t=e.demoUrl)&&void 0!==t?t:a})))}},eqKt:function(e,t,a){e.exports={card:"card___2rQs3",content:"content___2Zybx",title:"title___m0XDq",description:"description___Lth8e"}},gKi5:function(e,t,a){"use strict";var n=a("ahKI"),r=a.n(n),c=a("eqKt"),l=a.n(c),i=e=>r.a.createElement("a",{className:l.a.card,href:e.link,target:"_blank"},e.image&&r.a.createElement("img",{src:e.image,alt:e.title}),r.a.createElement("div",{className:l.a.content},r.a.createElement("div",{className:l.a.title},e.title),r.a.createElement("div",{className:l.a.description},e.description)));t["a"]=i},iQYM:function(e,t,a){"use strict";a.r(t);var n=a("ahKI"),r=a.n(n),c=a("TS6m"),l=(a("N0lm"),a("TAbJ"),a("DgDr"),a("mVOg"),a("ekZX")),i=(a("gKi5"),a("Bjia"),a("0m3q"),a("utj/")),o=r.a.memo((e=>{var t=e.demos,a=t["divider-demo1"].component;return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"divider-\u5206\u5272\u7ebf"},r.a.createElement(c["AnchorLink"],{to:"#divider-\u5206\u5272\u7ebf","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Divider \u5206\u5272\u7ebf"),r.a.createElement("p",null,"\u533a\u9694\u5185\u5bb9\u7684\u5206\u5272\u7ebf\u3002"),r.a.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},r.a.createElement(c["AnchorLink"],{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u5bf9\u4e0d\u540c\u7ae0\u8282\u7684\u6587\u672c\u6bb5\u843d\u8fdb\u884c\u5206\u5272\u3002"),r.a.createElement("li",null,"\u5bf9\u884c\u5185\u6587\u5b57/\u94fe\u63a5\u8fdb\u884c\u5206\u5272\uff0c\u4f8b\u5982\u8868\u683c\u7684\u64cd\u4f5c\u5217\u3002")),r.a.createElement("h2",{id:"\u793a\u4f8b"},r.a.createElement(c["AnchorLink"],{to:"#\u793a\u4f8b","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b")),r.a.createElement(l["default"],t["divider-demo1"].previewerProps,r.a.createElement(a,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"divider"},r.a.createElement(c["AnchorLink"],{to:"#divider","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Divider"),r.a.createElement("h3",{id:"\u5c5e\u6027"},r.a.createElement(c["AnchorLink"],{to:"#\u5c5e\u6027","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027"),r.a.createElement(i["a"],null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u5c5e\u6027"),r.a.createElement("th",null,"\u8bf4\u660e"),r.a.createElement("th",null,"\u7c7b\u578b"),r.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"contentPosition"),r.a.createElement("td",null,"\u5185\u5bb9\u4f4d\u7f6e\uff0c\u4ec5\u5728 ",r.a.createElement("code",null,"direction")," \u4e3a ",r.a.createElement("code",null,"horizontal")," \u65f6\u6709\u6548"),r.a.createElement("td",null,r.a.createElement("code",null,"'center' | 'left' | 'right'")),r.a.createElement("td",null,r.a.createElement("code",null,"'center'"))),r.a.createElement("tr",null,r.a.createElement("td",null,"direction"),r.a.createElement("td",null,"\u6c34\u5e73\u8fd8\u662f\u5782\u76f4\u7c7b\u578b"),r.a.createElement("td",null,r.a.createElement("code",null,"'horizontal' | 'vertical'")),r.a.createElement("td",null,r.a.createElement("code",null,"'horizontal'"))))))))}));t["default"]=e=>{var t=r.a.useContext(c["context"]),a=t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(o,{demos:a})}},mVOg:function(e,t,a){"use strict";var n=a("iojd"),r=a("ahKI"),c=a.n(r),l=a("TS6m"),i=a("/7QA");t["a"]=()=>{var e=Object(r["useContext"])(l["context"]),t=e.locale,a=Object(r["useState"])(!1),o=Object(n["a"])(a,2),s=o[0],m=o[1];return c.a.createElement("a",{href:("zh"===t?"/zh":"")+"/guide/what-is-experimental",onMouseEnter:()=>{m(!0)},onMouseLeave:()=>{m(!1)},style:{verticalAlign:"-0.125em"}},c.a.createElement(i["Popover"],{content:"zh"===t?"\u8bd5\u9a8c\u6027":"Experimental",visible:s,mode:"dark"},c.a.createElement("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"experiment",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},c.a.createElement("path",{d:"M512 472a40 40 0 1080 0 40 40 0 10-80 0zm367 352.9L696.3 352V178H768v-68H256v68h71.7v174L145 824.9c-2.8 7.4-4.3 15.2-4.3 23.1 0 35.3 28.7 64 64 64h614.6c7.9 0 15.7-1.5 23.1-4.3 33-12.7 49.4-49.8 36.6-82.8zM395.7 364.7V180h232.6v184.7L719.2 600c-20.7-5.3-42.1-8-63.9-8-61.2 0-119.2 21.5-165.3 60a188.78 188.78 0 01-121.3 43.9c-32.7 0-64.1-8.3-91.8-23.7l118.8-307.5zM210.5 844l41.7-107.8c35.7 18.1 75.4 27.8 116.6 27.8 61.2 0 119.2-21.5 165.3-60 33.9-28.2 76.3-43.9 121.3-43.9 35 0 68.4 9.5 97.6 27.1L813.5 844h-603z"}))))}},oeoJ:function(e,t,a){},q9vG:function(e,t,a){},tCeM:function(e,t,a){},"utj/":function(e,t,a){"use strict";var n=a("ahKI"),r=a.n(n),c=a("bIC1"),l=a.n(c);a("07z2");function i(e,t){return u(e)||d(e,t)||s(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){if(e){if("string"===typeof e)return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function d(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,c=[],l=!0,i=!1;try{for(a=a.call(e);!(l=(n=a.next()).done);l=!0)if(c.push(n.value),t&&c.length===t)break}catch(o){i=!0,r=o}finally{try{l||null==a["return"]||a["return"]()}finally{if(i)throw r}}return c}}function u(e){if(Array.isArray(e))return e}var v=function(e){var t=e.children,a=Object(n["useRef"])(),c=Object(n["useState"])(!1),o=i(c,2),s=o[0],m=o[1],d=Object(n["useState"])(!1),u=i(d,2),v=u[0],h=u[1];return Object(n["useEffect"])((function(){var e=a.current,t=l()((function(){m(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),r.a.createElement("div",{className:"__dumi-default-table"},r.a.createElement("div",{className:"__dumi-default-table-content",ref:a,"data-left-folded":s||void 0,"data-right-folded":v||void 0},r.a.createElement("table",null,t)))};t["a"]=v}}]);