webpackJsonp([34],{1264:function(n,s,a){n.exports={basic:a(1392)}},1392:function(n,s){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u9009\u62e9\u5668","en-US":"Basic"},filename:"components/picker-view/demo/basic.md",id:"components-picker-view-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> PickerView<span class="token punctuation">,</span> WhiteSpace <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> seasons <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      label<span class="token punctuation">:</span> <span class="token string">\'2013\'</span><span class="token punctuation">,</span>\n      value<span class="token punctuation">:</span> <span class="token string">\'2013\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      label<span class="token punctuation">:</span> <span class="token string">\'2014\'</span><span class="token punctuation">,</span>\n      value<span class="token punctuation">:</span> <span class="token string">\'2014\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      label<span class="token punctuation">:</span> <span class="token string">\'\u6625\'</span><span class="token punctuation">,</span>\n      value<span class="token punctuation">:</span> <span class="token string">\'\u6625\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      label<span class="token punctuation">:</span> <span class="token string">\'\u590f\'</span><span class="token punctuation">,</span>\n      value<span class="token punctuation">:</span> <span class="token string">\'\u590f\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> season <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'\u6625\'</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'\u6625\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'\u590f\'</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'\u590f\'</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> province <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'\u5317\u4eac\'</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'01\'</span><span class="token punctuation">,</span>\n    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u4e1c\u57ce\u533a\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'01-1\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u897f\u57ce\u533a\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'01-2\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u5d07\u6587\u533a\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'01-3\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u5ba3\u6b66\u533a\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'01-4\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span>\n    label<span class="token punctuation">:</span> <span class="token string">\'\u6d59\u6c5f\'</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">:</span> <span class="token string">\'02\'</span><span class="token punctuation">,</span>\n    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u676d\u5dde\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'02-1\'</span><span class="token punctuation">,</span>\n        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            label<span class="token punctuation">:</span> <span class="token string">\'\u897f\u6e56\u533a\'</span><span class="token punctuation">,</span>\n            value<span class="token punctuation">:</span> <span class="token string">\'02-1-1\'</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">{</span>\n            label<span class="token punctuation">:</span> <span class="token string">\'\u4e0a\u57ce\u533a\'</span><span class="token punctuation">,</span>\n            value<span class="token punctuation">:</span> <span class="token string">\'02-1-2\'</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">{</span>\n            label<span class="token punctuation">:</span> <span class="token string">\'\u6c5f\u5e72\u533a\'</span><span class="token punctuation">,</span>\n            value<span class="token punctuation">:</span> <span class="token string">\'02-1-3\'</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">{</span>\n            label<span class="token punctuation">:</span> <span class="token string">\'\u4e0b\u57ce\u533a\'</span><span class="token punctuation">,</span>\n            value<span class="token punctuation">:</span> <span class="token string">\'02-1-4\'</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u5b81\u6ce2\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'02-2\'</span><span class="token punctuation">,</span>\n        children<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n          <span class="token punctuation">{</span>\n            label<span class="token punctuation">:</span> <span class="token string">\'xx\u533a\'</span><span class="token punctuation">,</span>\n            value<span class="token punctuation">:</span> <span class="token string">\'02-2-1\'</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">{</span>\n            label<span class="token punctuation">:</span> <span class="token string">\'yy\u533a\'</span><span class="token punctuation">,</span>\n            value<span class="token punctuation">:</span> <span class="token string">\'02-2-2\'</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u6e29\u5dde\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'02-3\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u5609\u5174\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'02-4\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u6e56\u5dde\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'02-5\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'\u7ecd\u5174\'</span><span class="token punctuation">,</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'02-6\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">PickerViewExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    value<span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  onChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      value<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  onScrollChange <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PickerView</span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onScrollChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onScrollChange<span class="token punctuation">}</span></span>\n          <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span>\n          <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>seasons<span class="token punctuation">}</span></span>\n          <span class="token attr-name">cascade</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PickerView</span>\n          <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>season<span class="token punctuation">}</span></span>\n          <span class="token attr-name">cascade</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PickerView</span>\n          <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>province<span class="token punctuation">}</span></span>\n          <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">\'02\'</span><span class="token punctuation">,</span> <span class="token string">\'02-1\'</span><span class="token punctuation">,</span> <span class="token string">\'02-1-1\'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PickerViewExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}]}}});