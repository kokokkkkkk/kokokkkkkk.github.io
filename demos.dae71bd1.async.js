"use strict";(self.webpackChunk_chao_libs=self.webpackChunk_chao_libs||[]).push([[433],{42372:function(z,M,e){e.r(M);var A=e(17061),o=e.n(A),T=e(17156),E=e.n(T),U=e(27424),m=e.n(U),L=e(65043),t=e(45360),p=e(42075),h=e(83622),c=e(67294),I=e(57584),v=e.n(I),K=e(14074),H=e.n(K),W=e(65129),J=e.n(W),y=e(10884),Q=e.n(y),j=e(31568),V=e.n(j),a=e(85893),b=function(){var Z=(0,c.useState)(!1),R=m()(Z,2),u=R[0],P=R[1],n=(0,c.useRef)(),l=(0,c.useRef)(null),S=(0,c.useState)(),g=m()(S,2),i=g[0],F=g[1],$=function(){var s=E()(o()().mark(function _(){var r;return o()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return r=v()({type:"mp3",bitRate:16,sampleRate:16e3,onProcess:function(D,O,f,N){console.log(D,O,f,N)}}),d.abrupt("return",new Promise(function(B,D){r.open(function(){console.log("newRec",r),n.current=r,B(!0)},function(O,f){D((f?"UserNotAllow\uFF0C":"")+"\u65E0\u6CD5\u5F55\u97F3:"+O)})}));case 2:case"end":return d.stop()}},_)}));return function(){return s.apply(this,arguments)}}(),w=(0,L.Z)(E()(o()().mark(function s(){return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,$();case 3:n.current&&v().IsOpen()&&(P(!0),t.ZP.info("\u5F00\u59CB\u5F55\u5236"),n.current.start()),r.next=10;break;case 6:r.prev=6,r.t0=r.catch(0),P(!1),t.ZP.error(r.t0);case 10:case"end":return r.stop()}},s,null,[[0,6]])}))),G=function(){try{if(!n.current){console.error("\u672A\u6253\u5F00\u5F55\u97F3");return}n.current.stop(function(_,r){if(console.log("\u5F55\u97F3\u6210\u529F",_,"\u65F6\u957F:"+r+"ms"),_){var C=new FormData;C.append("audio",_),F(_)}t.ZP.success("\u5F55\u5236\u6210\u529F"),n.current.close(),n.current=null})}catch(_){console.error("\u7ED3\u675F\u5F55\u97F3\u51FA\u9519\uFF1A"+_),n.current.close(),n.current=null}finally{P(!1)}};return(0,a.jsxs)("div",{children:[(0,a.jsxs)(p.Z,{children:[(0,a.jsx)(h.ZP,{disabled:u,onClick:w,type:u?"default":"primary",children:"\u5F00\u59CB\u5F55\u97F3"}),(0,a.jsx)(h.ZP,{disabled:!u,type:u?"primary":"default",onClick:G,children:"\u505C\u6B62\u5F55\u97F3"}),(0,a.jsx)(h.ZP,{disabled:!i,type:"primary",onClick:E()(o()().mark(function s(){return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:l.current&&i&&(t.ZP.info("\u5F00\u59CB\u64AD\u653E"),console.log("recBlob",i),l.current.src=URL.createObjectURL(i),l.current.play());case 1:case"end":return r.stop()}},s)})),children:"\u64AD\u653E"})]}),(0,a.jsx)("audio",{ref:l})]})};M.default=b}}]);
