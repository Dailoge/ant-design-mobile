webpackJsonp([13],{478:function(n,a,s){n.exports={basic:s(966)}},524:function(n,a,s){"use strict";a.__esModule=!0;var t=function(n){return n&&n.__esModule?n:{default:n}}(s(539));a.default=function(n){if(Array.isArray(n)){for(var a=0,s=Array(n.length);a<n.length;a++)s[a]=n[a];return s}return(0,t.default)(n)}},539:function(n,a,s){n.exports={default:s(540),__esModule:!0}},540:function(n,a,s){s(148),s(541),n.exports=s(10).Array.from},541:function(n,a,s){"use strict";var t=s(84),e=s(21),p=s(82),o=s(542),c=s(543),l=s(147),u=s(544),i=s(545);e(e.S+e.F*!s(547)(function(n){Array.from(n)}),"Array",{from:function(n){var a,s,e,r,k=p(n),f="function"==typeof this?this:Array,d=arguments.length,m=d>1?arguments[1]:void 0,g=void 0!==m,v=0,h=i(k);if(g&&(m=t(m,d>2?arguments[2]:void 0,2)),void 0==h||f==Array&&c(h))for(s=new f(a=l(k.length));a>v;v++)u(s,v,g?m(k[v],v):k[v]);else for(r=h.call(k),s=new f;!(e=r.next()).done;v++)u(s,v,g?o(r,m,[e.value,v],!0):e.value);return s.length=v,s}})},542:function(n,a,s){var t=s(31);n.exports=function(n,a,s,e){try{return e?a(t(s)[0],s[1]):a(s)}catch(a){var p=n.return;throw void 0!==p&&t(p.call(n)),a}}},543:function(n,a,s){var t=s(48),e=s(19)("iterator"),p=Array.prototype;n.exports=function(n){return void 0!==n&&(t.Array===n||p[e]===n)}},544:function(n,a,s){"use strict";var t=s(15),e=s(36);n.exports=function(n,a,s){a in n?t.f(n,a,e(0,s)):n[a]=s}},545:function(n,a,s){var t=s(546),e=s(19)("iterator"),p=s(48);n.exports=s(10).getIteratorMethod=function(n){if(void 0!=n)return n[e]||n["@@iterator"]||p[t(n)]}},546:function(n,a,s){var t=s(85),e=s(19)("toStringTag"),p="Arguments"==t(function(){return arguments}());n.exports=function(n){var a,s,o;return void 0===n?"Undefined":null===n?"Null":"string"==typeof(s=function(n,a){try{return n[a]}catch(n){}}(a=Object(n),e))?s:p?t(a):"Object"==(o=t(a))&&"function"==typeof a.callee?"Arguments":o}},547:function(n,a,s){var t=s(19)("iterator"),e=!1;try{var p=[7][t]();p.return=function(){e=!0},Array.from(p,function(){throw 2})}catch(n){}n.exports=function(n,a){if(!a&&!e)return!1;var s=!1;try{var p=[7],o=p[t]();o.next=function(){return{done:s=!0}},p[t]=function(){return o},n(p)}catch(n){}return s}},548:function(n,a,s){var t=s(21),e=s(10),p=s(32);n.exports=function(n,a){var s=(e.Object||{})[n]||Object[n],o={};o[n]=a(s),t(t.S+t.F*p(function(){s(1)}),"Object",o)}},635:function(n,a,s){"use strict";a.__esModule=!0;var t=p(s(636)),e=p(s(639));function p(n){return n&&n.__esModule?n:{default:n}}a.default=function n(a,s,p){null===a&&(a=Function.prototype);var o=(0,e.default)(a,s);if(void 0===o){var c=(0,t.default)(a);return null===c?void 0:n(c,s,p)}if("value"in o)return o.value;var l=o.get;return void 0!==l?l.call(p):void 0}},636:function(n,a,s){n.exports={default:s(637),__esModule:!0}},637:function(n,a,s){s(638),n.exports=s(10).Object.getPrototypeOf},638:function(n,a,s){var t=s(82),e=s(149);s(548)("getPrototypeOf",function(){return function(n){return e(t(n))}})},639:function(n,a,s){n.exports={default:s(640),__esModule:!0}},640:function(n,a,s){s(641);var t=s(10).Object;n.exports=function(n,a){return t.getOwnPropertyDescriptor(n,a)}},641:function(n,a,s){var t=s(22),e=s(87).f;s(548)("getOwnPropertyDescriptor",function(){return function(n,a){return e(t(n),a)}})},645:function(n,a,s){"use strict";a.f=function(n,a){return Object.keys(a).some(function(s){return n.target===Object(p.findDOMNode)(a[s])})},a.h=function(n,a){var s=a.min,t=a.max;return n<s||n>t},a.g=function(n){return n.touches.length>1||"touchend"===n.type.toLowerCase()&&n.touches.length>0},a.d=function(n,a){return n?a.clientY:a.pageX},a.e=function(n,a){return n?a.touches[0].clientY:a.touches[0].pageX},a.c=function(n,a){var s=a.getBoundingClientRect();return n?s.top+.5*s.height:s.left+.5*s.width},a.a=function(n,a){var s=a.max,t=a.min;if(n<=t)return t;if(n>=s)return s;return n},a.b=function(n,a){var s=a.step,t=function(n,a){var s=a.marks,t=a.step,p=a.min,o=Object.keys(s).map(parseFloat);if(null!==t){var c=Math.round((n-p)/t)*t+p;o.push(c)}var l=o.map(function(a){return Math.abs(n-a)});return o[l.indexOf(Math.min.apply(Math,e()(l)))]}(n,a);return null===s?t:parseFloat(t.toFixed(function(n){var a=n.toString(),s=0;a.indexOf(".")>=0&&(s=a.length-a.indexOf(".")-1);return s}(s)))},a.i=function(n){n.stopPropagation(),n.preventDefault()};var t=s(524),e=s.n(t),p=s(0)},676:function(n,a,s){"use strict";a.a=function(n,a,s,t){var o=p.default.unstable_batchedUpdates?function(n){p.default.unstable_batchedUpdates(s,n)}:s;return e()(n,a,o,t)};var t=s(150),e=s.n(t),p=s(0)},701:function(n,a,s){"use strict";var t=s(4),e=s.n(t),p=s(0);a.a=function(n){var a=n.className,s=n.included,t=n.vertical,o=n.offset,c=n.length,l=n.style,u=t?{bottom:o+"%",height:c+"%"}:{left:o+"%",width:c+"%"},i=e()({visibility:s?"visible":"hidden"},l,u);return p.default.createElement("div",{className:a,style:i})}},702:function(n,a,s){"use strict";a.a=function(n){var a,s;return s=a=function(n){function a(n){i()(this,a);var s=d()(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,n));return s.onMouseDown=function(n){if(0===n.button){var a=s.props.vertical,t=M.d(a,n);if(M.f(n,s.handlesRefs)){var e=M.c(a,n.target);s.dragOffset=t-e,t=e}else s.dragOffset=0;s.onStart(t),s.addDocumentMouseEvents(),M.i(n)}},s.onTouchStart=function(n){if(!M.g(n)){var a=s.props.vertical,t=M.e(a,n);if(M.f(n,s.handlesRefs)){var e=M.c(a,n.target);s.dragOffset=t-e,t=e}else s.dragOffset=0;s.onStart(t),s.addDocumentTouchEvents(),M.i(n)}},s.onMouseMove=function(n){if(s.sliderRef){var a=M.d(s.props.vertical,n);s.onMove(n,a-s.dragOffset)}else s.onEnd()},s.onTouchMove=function(n){if(!M.g(n)&&s.sliderRef){var a=M.e(s.props.vertical,n);s.onMove(n,a-s.dragOffset)}else s.onEnd()},s.saveSlider=function(n){s.sliderRef=n},s.handlesRefs={},s}return h()(a,n),k()(a,[{key:"componentWillUnmount",value:function(){g()(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"componentWillUnmount",this)&&g()(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"componentWillUnmount",this).call(this),this.removeDocumentEvents()}},{key:"addDocumentTouchEvents",value:function(){this.onTouchMoveListener=Object(w.a)(document,"touchmove",this.onTouchMove),this.onTouchUpListener=Object(w.a)(document,"touchend",this.onEnd)}},{key:"addDocumentMouseEvents",value:function(){this.onMouseMoveListener=Object(w.a)(document,"mousemove",this.onMouseMove),this.onMouseUpListener=Object(w.a)(document,"mouseup",this.onEnd)}},{key:"removeDocumentEvents",value:function(){this.onTouchMoveListener&&this.onTouchMoveListener.remove(),this.onTouchUpListener&&this.onTouchUpListener.remove(),this.onMouseMoveListener&&this.onMouseMoveListener.remove(),this.onMouseUpListener&&this.onMouseUpListener.remove()}},{key:"getSliderStart",value:function(){var n=this.sliderRef,a=n.getBoundingClientRect();return this.props.vertical?a.top:a.left}},{key:"getSliderLength",value:function(){var n=this.sliderRef;if(!n)return 0;var a=n.getBoundingClientRect();return this.props.vertical?a.height:a.width}},{key:"calcValue",value:function(n){var a=this.props,s=a.vertical,t=a.min,e=a.max,p=Math.abs(Math.max(n,0)/this.getSliderLength()),o=s?(1-p)*(e-t)+t:p*(e-t)+t;return o}},{key:"calcValueByPos",value:function(n){var a=n-this.getSliderStart(),s=this.trimAlignValue(this.calcValue(a));return s}},{key:"calcOffset",value:function(n){var a=this.props,s=a.min,t=a.max,e=(n-s)/(t-s);return 100*e}},{key:"saveHandle",value:function(n,a){this.handlesRefs[n]=a}},{key:"render",value:function(){var n,s=this.props,t=s.prefixCls,e=s.className,p=s.marks,c=s.dots,u=s.step,i=s.included,r=s.disabled,k=s.vertical,f=s.min,d=s.max,m=s.children,v=s.maximumTrackStyle,h=s.style,b=s.railStyle,x=s.dotStyle,w=s.activeDotStyle,j=g()(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"render",this).call(this),S=j.tracks,E=j.handles,M=O()(t,(n={},l()(n,t+"-with-marks",Object.keys(p).length),l()(n,t+"-disabled",r),l()(n,t+"-vertical",k),l()(n,e,e),n));return y.default.createElement("div",{ref:this.saveSlider,className:M,onTouchStart:r?N:this.onTouchStart,onMouseDown:r?N:this.onMouseDown,style:h},y.default.createElement("div",{className:t+"-rail",style:o()({},v,b)}),S,y.default.createElement(_.a,{prefixCls:t,vertical:k,marks:p,dots:c,step:u,included:i,lowerBound:this.getLowerBound(),upperBound:this.getUpperBound(),max:d,min:f,dotStyle:x,activeDotStyle:w}),E,y.default.createElement(C.a,{className:t+"-mark",vertical:k,marks:p,included:i,lowerBound:this.getLowerBound(),upperBound:this.getUpperBound(),max:d,min:f}),m)}}]),a}(n),a.displayName="ComponentEnhancer("+n.displayName+")",a.propTypes=o()({},n.propTypes,{min:x.a.number,max:x.a.number,step:x.a.number,marks:x.a.object,included:x.a.bool,className:x.a.string,prefixCls:x.a.string,disabled:x.a.bool,children:x.a.any,onBeforeChange:x.a.func,onChange:x.a.func,onAfterChange:x.a.func,handle:x.a.func,dots:x.a.bool,vertical:x.a.bool,style:x.a.object,minimumTrackStyle:x.a.object,maximumTrackStyle:x.a.object,handleStyle:x.a.oneOfType([x.a.object,x.a.arrayOf(x.a.object)]),trackStyle:x.a.oneOfType([x.a.object,x.a.arrayOf(x.a.object)]),railStyle:x.a.object,dotStyle:x.a.object,activeDotStyle:x.a.object}),a.defaultProps=o()({},n.defaultProps,{prefixCls:"rc-slider",className:"",min:0,max:100,step:1,marks:{},handle:function(n){var a=n.index,s=e()(n,["index"]);return delete s.dragging,y.default.createElement(E.a,o()({},s,{key:a}))},onBeforeChange:N,onChange:N,onAfterChange:N,included:!0,disabled:!1,dots:!1,vertical:!1,trackStyle:[{}],handleStyle:[{}],railStyle:{},dotStyle:{},activeDotStyle:{}}),s};var t=s(138),e=s.n(t),p=s(4),o=s.n(p),c=s(79),l=s.n(c),u=s(5),i=s.n(u),r=s(8),k=s.n(r),f=s(6),d=s.n(f),m=s(635),g=s.n(m),v=s(7),h=s.n(v),y=s(0),b=s(1),x=s.n(b),w=s(676),j=s(2),O=s.n(j),S=s(11),_=(s.n(S),s(703)),C=s(704),E=s(705),M=s(645);function N(){}},703:function(n,a,s){"use strict";var t=s(79),e=s.n(t),p=s(4),o=s.n(p),c=s(0),l=s(2),u=s.n(l),i=s(11),r=s.n(i);a.a=function(n){var a=n.prefixCls,s=n.vertical,t=n.marks,p=n.dots,l=n.step,i=n.included,k=n.lowerBound,f=n.upperBound,d=n.max,m=n.min,g=n.dotStyle,v=n.activeDotStyle,h=d-m,y=function(n,a,s,t,e,p){r()(!s||t>0,"`Slider[step]` should be a positive number in order to make Slider[dots] work.");var o=Object.keys(a).map(parseFloat);if(s)for(var c=e;c<=p;c+=t)o.indexOf(c)>=0||o.push(c);return o}(0,t,p,l,m,d).map(function(n){var t,p=Math.abs(n-m)/h*100+"%",l=!i&&n===f||i&&n<=f&&n>=k,r=s?o()({bottom:p},g):o()({left:p},g);l&&(r=o()({},r,v));var d=u()((t={},e()(t,a+"-dot",!0),e()(t,a+"-dot-active",l),t));return c.default.createElement("span",{className:d,style:r,key:n})});return c.default.createElement("div",{className:a+"-step"},y)}},704:function(n,a,s){"use strict";var t=s(4),e=s.n(t),p=s(20),o=s.n(p),c=s(79),l=s.n(c),u=s(0),i=s(2),r=s.n(i);a.a=function(n){var a=n.className,s=n.vertical,t=n.marks,p=n.included,c=n.upperBound,i=n.lowerBound,k=n.max,f=n.min,d=Object.keys(t),m=d.length,g=.9*(m>1?100/(m-1):100),v=k-f,h=d.map(parseFloat).sort(function(n,a){return n-a}).map(function(n){var k,d=!p&&n===c||p&&n<=c&&n>=i,m=r()((k={},l()(k,a+"-text",!0),l()(k,a+"-text-active",d),k)),h=s?{marginBottom:"-50%",bottom:(n-f)/v*100+"%"}:{width:g+"%",marginLeft:-g/2+"%",left:(n-f)/v*100+"%"},y=t[n],b="object"===(void 0===y?"undefined":o()(y))&&!u.default.isValidElement(y),x=b?y.label:y,w=b?e()({},h,y.style):h;return u.default.createElement("span",{className:m,style:w,key:n},x)});return u.default.createElement("div",{className:a},h)}},705:function(n,a,s){"use strict";var t=s(4),e=s.n(t),p=s(138),o=s.n(p),c=s(5),l=s.n(c),u=s(8),i=s.n(u),r=s(6),k=s.n(r),f=s(7),d=s.n(f),m=s(0),g=s(1),v=s.n(g),h=function(n){function a(){return l()(this,a),k()(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return d()(a,n),i()(a,[{key:"render",value:function(){var n=this.props,a=n.className,s=n.vertical,t=n.offset,p=n.style,c=n.disabled,l=n.min,u=n.max,i=n.value,r=o()(n,["className","vertical","offset","style","disabled","min","max","value"]),k=s?{bottom:t+"%"}:{left:t+"%"},f=e()({},p,k),d={};return void 0!==i&&(d=e()({},d,{"aria-valuemin":l,"aria-valuemax":u,"aria-valuenow":i,"aria-disabled":!!c})),m.default.createElement("div",e()({role:"slider"},d,r,{className:a,style:f}))}}]),a}(m.default.Component);a.a=h,h.propTypes={className:v.a.string,vertical:v.a.bool,offset:v.a.number,style:v.a.object,disabled:v.a.bool,min:v.a.number,max:v.a.number,value:v.a.number}},966:function(n,a,s){n.exports={content:[["p","Basic slider. When ",["code","disabled"]," is ",["code","true"],", the slider will not be interactable"]],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/slider/demo/basic.md",id:"components-slider-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">/* eslint arrow-body-style: 0 */</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Slider<span class="token punctuation">,</span> WingBlank<span class="token punctuation">,</span> WhiteSpace <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  log <span class="token operator">=</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>am-slider-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Slider<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span>\n            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">,</span> marginRight<span class="token punctuation">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">26</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">30</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'change\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">onAfterChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'afterChange\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Disabled slider<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span>\n            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">,</span> marginRight<span class="token punctuation">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">26</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">30</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">disabled</span>\n            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'change\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">onAfterChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'afterChange\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Slider <span class="token keyword">with</span> customized color<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Slider</span>\n            <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">,</span> marginRight<span class="token punctuation">:</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">26</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">min</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">max</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">30</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">trackStyle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n              backgroundColor<span class="token punctuation">:</span> <span class="token string">\'red\'</span><span class="token punctuation">,</span>\n              height<span class="token punctuation">:</span> <span class="token string">\'5px\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">railStyle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n              backgroundColor<span class="token punctuation">:</span> <span class="token string">\'blue\'</span><span class="token punctuation">,</span>\n              height<span class="token punctuation">:</span> <span class="token string">\'5px\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">handleStyle</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n              borderColor<span class="token punctuation">:</span> <span class="token string">\'blue\'</span><span class="token punctuation">,</span>\n              height<span class="token punctuation">:</span> <span class="token string">\'14px\'</span><span class="token punctuation">,</span>\n              width<span class="token punctuation">:</span> <span class="token string">\'14px\'</span><span class="token punctuation">,</span>\n              marginLeft<span class="token punctuation">:</span> <span class="token string">\'-7px\'</span><span class="token punctuation">,</span>\n              marginTop<span class="token punctuation">:</span> <span class="token string">\'-4.5px\'</span><span class="token punctuation">,</span>\n              backgroundColor<span class="token punctuation">:</span> <span class="token string">\'blue\'</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=s(0),a=(s(0),o(s(139))),t=o(s(967)),e=o(s(136)),p=function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}();function o(n){return n&&n.__esModule?n:{default:n}}function c(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}s(140),s(969),s(137);var l=function(s){function o(){var n,a,s;!function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,o);for(var t=arguments.length,e=Array(t),p=0;p<t;p++)e[p]=arguments[p];return a=s=c(this,(n=o.__proto__||Object.getPrototypeOf(o)).call.apply(n,[this].concat(e))),s.log=function(n){return function(a){console.log(n+": "+a)}},c(s,a)}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(o,n.Component),p(o,[{key:"render",value:function(){return n.createElement("div",{className:"am-slider-example"},n.createElement(e.default,{size:"lg"}),n.createElement(a.default,{size:"lg"},n.createElement("p",{className:"sub-title"},"Slider"),n.createElement(t.default,{style:{marginLeft:30,marginRight:30},defaultValue:26,min:0,max:30,onChange:this.log("change"),onAfterChange:this.log("afterChange")})),n.createElement(e.default,{size:"lg"}),n.createElement(a.default,{size:"lg"},n.createElement("p",{className:"sub-title"},"Disabled slider"),n.createElement(t.default,{style:{marginLeft:30,marginRight:30},defaultValue:26,min:0,max:30,disabled:!0,onChange:this.log("change"),onAfterChange:this.log("afterChange")})),n.createElement(e.default,{size:"lg"}),n.createElement(a.default,{size:"lg"},n.createElement("p",{className:"sub-title"},"Slider with customized color"),n.createElement(t.default,{style:{marginLeft:30,marginRight:30},defaultValue:26,min:0,max:30,trackStyle:{backgroundColor:"red",height:"5px"},railStyle:{backgroundColor:"blue",height:"5px"},handleStyle:{borderColor:"blue",height:"14px",width:"14px",marginLeft:"-7px",marginTop:"-4.5px",backgroundColor:"blue"}})))}}]),o}();return n.createElement(l,null)},style:".demo-preview-item .am-slider-wrapper {\n  margin-bottom: 15px;\n}\n.demo-preview-item .am-slider-example {\n  overflow: hidden;\n}\n.am-wingblank.am-wingblank-lg {\n  margin-bottom: 30px;\n}\n.demo-preview-item .am-slider-wrapper:last-child {\n  margin-bottom: 10px;\n}\n.sub-title {\n  color: #888;\n  font-size: 14px;\n  padding: 30px 0 18px 0;\n  margin: 0;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.demo-preview-item</span> <span class="token class">.am-slider-wrapper</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">15</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.demo-preview-item</span> <span class="token class">.am-slider-example</span> </span><span class="token punctuation">{</span>\n  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.am-wingblank.am-wingblank-lg</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">30</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.demo-preview-item</span> <span class="token class">.am-slider-wrapper</span><span class="token pseudo-class">:last-child</span> </span><span class="token punctuation">{</span>\n  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> <span class="token number">10</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.sub-title</span> </span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#888</span><span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">14</span>px<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">30</span>px <span class="token number">0</span> <span class="token number">18</span>px <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},967:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=function(){function n(n,a){for(var s=0;s<a.length;s++){var t=a[s];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(a,s,t){return s&&n(a.prototype,s),t&&n(a,t),a}}(),e=function(n){return n&&n.__esModule?n:{default:n}}(s(968)),p=function(n){if(n&&n.__esModule)return n;var a={};if(null!=n)for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(a[s]=n[s]);return a.default=n,a}(s(0));var o=function(n){function a(){return function(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a),function(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);n.prototype=Object.create(a&&a.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(n,a):n.__proto__=a)}(a,p.Component),t(a,[{key:"render",value:function(){return p.createElement("div",{className:this.props.prefixCls+"-wrapper"},p.createElement(e.default,this.props))}}]),a}();a.default=o,o.defaultProps={prefixCls:"am-slider"},n.exports=a.default},968:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t=s(4),e=s.n(t),p=s(5),o=s.n(p),c=s(8),l=s.n(c),u=s(6),i=s.n(u),r=s(7),k=s.n(r),f=s(0),d=s(1),m=s.n(d),g=s(11),v=(s.n(g),s(701)),h=s(702),y=s(645),b=function(n){function a(n){o()(this,a);var s=i()(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,n));s.onEnd=function(){s.setState({dragging:!1}),s.removeDocumentEvents(),s.props.onAfterChange(s.getValue())};var t=void 0!==n.defaultValue?n.defaultValue:n.min,e=void 0!==n.value?n.value:t;return s.state={value:s.trimAlignValue(e),dragging:!1},s}return k()(a,n),l()(a,[{key:"componentWillReceiveProps",value:function(n){if("value"in n||"min"in n||"max"in n){var a=this.state.value,s=void 0!==n.value?n.value:a,t=this.trimAlignValue(s,n);t!==a&&(this.setState({value:t}),y.h(s,n)&&this.props.onChange(t))}}},{key:"onChange",value:function(n){var a=this.props;!("value"in a)&&this.setState(n);var s=n.value;a.onChange(s)}},{key:"onStart",value:function(n){this.setState({dragging:!0});var a=this.props,s=this.getValue();a.onBeforeChange(s);var t=this.calcValueByPos(n);this.startValue=t,this.startPosition=n,t!==s&&this.onChange({value:t})}},{key:"onMove",value:function(n,a){y.i(n);var s=this.state,t=this.calcValueByPos(a);t!==s.value&&this.onChange({value:t})}},{key:"getValue",value:function(){return this.state.value}},{key:"getLowerBound",value:function(){return this.props.min}},{key:"getUpperBound",value:function(){return this.state.value}},{key:"trimAlignValue",value:function(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=e()({},this.props,a),t=y.a(n,s);return y.b(t,s)}},{key:"render",value:function(){var n=this,a=this.props,s=a.prefixCls,t=a.vertical,p=a.included,o=a.disabled,c=a.minimumTrackStyle,l=a.trackStyle,u=a.handleStyle,i=a.min,r=a.max,k=a.handle,d=this.state,m=d.value,g=d.dragging,h=this.calcOffset(m),y=k({className:s+"-handle",vertical:t,offset:h,value:m,dragging:g,disabled:o,min:i,max:r,style:u[0]||u,ref:function(a){return n.saveHandle(0,a)}}),b=l[0]||l;return{tracks:f.default.createElement(v.a,{className:s+"-track",vertical:t,included:p,offset:0,length:h,style:e()({},c,b)}),handles:y}}}]),a}(f.default.Component);b.propTypes={defaultValue:m.a.number,value:m.a.number,disabled:m.a.bool},a.default=Object(h.a)(b)},969:function(n,a,s){"use strict";s(970)},970:function(n,a){}});