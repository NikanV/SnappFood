"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[639],{639:function(t,r,e){e(7658);var n=e(3689),o=function(){if(typeof window<"u"){if(window.devicePixelRatio)return window.devicePixelRatio;var t=window.screen;if(t)return(t.deviceXDPI||1)/(t.logicalXDPI||1)}return 1}(),i={toTextLines:function(t){var r,e=[];for(t=[].concat(t);t.length;)r=t.pop(),"string"==typeof r?e.unshift.apply(e,r.split("\n")):Array.isArray(r)?t.push.apply(t,r):(0,n.i)(t)||e.unshift(""+r);return e},textSize:function(t,r,e){var n,o=[].concat(r),i=o.length,a=t.font,l=0;for(t.font=e.string,n=0;n<i;++n)l=Math.max(t.measureText(o[n]).width,l);return t.font=a,{height:i*e.lineHeight,width:l}},bound:function(t,r,e){return Math.max(t,Math.min(r,e))},arrayDiff:function(t,r){var e,n,o,i,a=t.slice(),l=[];for(e=0,o=r.length;e<o;++e)i=r[e],n=a.indexOf(i),-1===n?l.push([i,1]):a.splice(n,1);for(e=0,o=a.length;e<o;++e)l.push([a[e],-1]);return l},rasterize:function(t){return Math.round(t*o)/o}};function a(t,r){var e=r.x,n=r.y;if(null===e)return{x:0,y:-1};if(null===n)return{x:1,y:0};var o=t.x-e,i=t.y-n,a=Math.sqrt(o*o+i*i);return{x:a?o/a:0,y:a?i/a:-1}}function l(t,r,e,n,o){switch(o){case"center":e=n=0;break;case"bottom":e=0,n=1;break;case"right":e=1,n=0;break;case"left":e=-1,n=0;break;case"top":e=0,n=-1;break;case"start":e=-e,n=-n;break;case"end":break;default:o*=Math.PI/180,e=Math.cos(o),n=Math.sin(o);break}return{x:t,y:r,vx:e,vy:n}}var c=0,h=1,u=2,s=4,x=8;function f(t,r,e){var n=c;return t<e.left?n|=h:t>e.right&&(n|=u),r<e.top?n|=x:r>e.bottom&&(n|=s),n}function y(t,r){for(var e,n,o,i=t.x0,a=t.y0,l=t.x1,c=t.y1,y=f(i,a,r),d=f(l,c,r);y|d&&!(y&d);)e=y||d,e&x?(n=i+(l-i)*(r.top-a)/(c-a),o=r.top):e&s?(n=i+(l-i)*(r.bottom-a)/(c-a),o=r.bottom):e&u?(o=a+(c-a)*(r.right-i)/(l-i),n=r.right):e&h&&(o=a+(c-a)*(r.left-i)/(l-i),n=r.left),e===y?(i=n,a=o,y=f(i,a,r)):(l=n,c=o,d=f(l,c,r));return{x0:i,x1:l,y0:a,y1:c}}function d(t,r){var e,n,o=r.anchor,i=t;return r.clamp&&(i=y(i,r.area)),"start"===o?(e=i.x0,n=i.y0):"end"===o?(e=i.x1,n=i.y1):(e=(i.x0+i.x1)/2,n=(i.y0+i.y1)/2),l(e,n,t.vx,t.vy,r.align)}var v={arc:function(t,r){var e=(t.startAngle+t.endAngle)/2,n=Math.cos(e),o=Math.sin(e),i=t.innerRadius,a=t.outerRadius;return d({x0:t.x+n*i,y0:t.y+o*i,x1:t.x+n*a,y1:t.y+o*a,vx:n,vy:o},r)},point:function(t,r){var e=a(t,r.origin),n=e.x*t.options.radius,o=e.y*t.options.radius;return d({x0:t.x-n,y0:t.y-o,x1:t.x+n,y1:t.y+o,vx:e.x,vy:e.y},r)},bar:function(t,r){var e=a(t,r.origin),n=t.x,o=t.y,i=0,l=0;return t.horizontal?(n=Math.min(t.x,t.base),i=Math.abs(t.base-t.x)):(o=Math.min(t.y,t.base),l=Math.abs(t.base-t.y)),d({x0:n,y0:o+l,x1:n+i,y1:o,vx:e.x,vy:e.y},r)},fallback:function(t,r){var e=a(t,r.origin);return d({x0:t.x,y0:t.y,x1:t.x+(t.width||0),y1:t.y+(t.height||0),vx:e.x,vy:e.y},r)}},p=i.rasterize;function g(t){var r=t.borderWidth||0,e=t.padding,n=t.size.height,o=t.size.width,i=-o/2,a=-n/2;return{frame:{x:i-e.left-r,y:a-e.top-r,w:o+e.width+2*r,h:n+e.height+2*r},text:{x:i,y:a,w:o,h:n}}}function m(t,r){var e=r.chart.getDatasetMeta(r.datasetIndex).vScale;if(!e)return null;if(void 0!==e.xCenter&&void 0!==e.yCenter)return{x:e.xCenter,y:e.yCenter};var n=e.getBasePixel();return t.horizontal?{x:n,y:null}:{x:null,y:n}}function b(t){return t instanceof n.A?v.arc:t instanceof n.P?v.point:t instanceof n.B?v.bar:v.fallback}function w(t,r,e,n,o,i){var a=Math.PI/2;if(i){var l=Math.min(i,o/2,n/2),c=r+l,h=e+l,u=r+n-l,s=e+o-l;t.moveTo(r,h),c<u&&h<s?(t.arc(c,h,l,-Math.PI,-a),t.arc(u,h,l,-a,0),t.arc(u,s,l,0,a),t.arc(c,s,l,a,Math.PI)):c<u?(t.moveTo(c,e),t.arc(u,h,l,-a,a),t.arc(c,h,l,a,Math.PI+a)):h<s?(t.arc(c,h,l,-Math.PI,0),t.arc(c,s,l,0,Math.PI)):t.arc(c,h,l,-Math.PI,Math.PI),t.closePath(),t.moveTo(r,e)}else t.rect(r,e,n,o)}function _(t,r,e){var n=e.backgroundColor,o=e.borderColor,i=e.borderWidth;!n&&(!o||!i)||(t.beginPath(),w(t,p(r.x)+i/2,p(r.y)+i/2,p(r.w)-i,p(r.h)-i,e.borderRadius),t.closePath(),n&&(t.fillStyle=n,t.fill()),o&&i&&(t.strokeStyle=o,t.lineWidth=i,t.lineJoin="miter",t.stroke()))}function M(t,r,e){var n=e.lineHeight,o=t.w,i=t.x,a=t.y+n/2;return"center"===r?i+=o/2:("end"===r||"right"===r)&&(i+=o),{h:n,w:o,x:i,y:a}}function k(t,r,e){var n=t.shadowBlur,o=e.stroked,i=p(e.x),a=p(e.y),l=p(e.w);o&&t.strokeText(r,i,a,l),e.filled&&(n&&o&&(t.shadowBlur=0),t.fillText(r,i,a,l),n&&o&&(t.shadowBlur=n))}function S(t,r,e,n){var o,i=n.textAlign,a=n.color,l=!!a,c=n.font,h=r.length,u=n.textStrokeColor,s=n.textStrokeWidth,x=u&&s;if(h&&(l||x))for(e=M(e,i,c),t.font=c.string,t.textAlign=i,t.textBaseline="middle",t.shadowBlur=n.textShadowBlur,t.shadowColor=n.textShadowColor,l&&(t.fillStyle=a),x&&(t.lineJoin="round",t.lineWidth=s,t.strokeStyle=u),o=0,h=r.length;o<h;++o)k(t,r[o],{stroked:x,filled:l,w:e.w,x:e.x,y:e.y+e.h*o})}var P=function(t,r,e,n){var o=this;o._config=t,o._index=n,o._model=null,o._rects=null,o._ctx=r,o._el=e};(0,n.m)(P.prototype,{_modelize:function(t,r,e,o){var a=this,l=a._index,c=(0,n.t)((0,n.r)([e.font,{}],o,l)),h=(0,n.r)([e.color,n.d.color],o,l);return{align:(0,n.r)([e.align,"center"],o,l),anchor:(0,n.r)([e.anchor,"center"],o,l),area:o.chart.chartArea,backgroundColor:(0,n.r)([e.backgroundColor,null],o,l),borderColor:(0,n.r)([e.borderColor,null],o,l),borderRadius:(0,n.r)([e.borderRadius,0],o,l),borderWidth:(0,n.r)([e.borderWidth,0],o,l),clamp:(0,n.r)([e.clamp,!1],o,l),clip:(0,n.r)([e.clip,!1],o,l),color:h,display:t,font:c,lines:r,offset:(0,n.r)([e.offset,4],o,l),opacity:(0,n.r)([e.opacity,1],o,l),origin:m(a._el,o),padding:(0,n.a)((0,n.r)([e.padding,4],o,l)),positioner:b(a._el),rotation:(0,n.r)([e.rotation,0],o,l)*(Math.PI/180),size:i.textSize(a._ctx,r,c),textAlign:(0,n.r)([e.textAlign,"start"],o,l),textShadowBlur:(0,n.r)([e.textShadowBlur,0],o,l),textShadowColor:(0,n.r)([e.textShadowColor,h],o,l),textStrokeColor:(0,n.r)([e.textStrokeColor,h],o,l),textStrokeWidth:(0,n.r)([e.textStrokeWidth,0],o,l)}},update:function(t){var r,e,o,a=this,l=null,c=null,h=a._index,u=a._config,s=(0,n.r)([u.display,!0],t,h);s&&(r=t.dataset.data[h],e=(0,n.v)((0,n.c)(u.formatter,[r,t]),r),o=(0,n.i)(e)?[]:i.toTextLines(e),o.length&&(l=a._modelize(s,o,u,t),c=g(l))),a._model=l,a._rects=c},geometry:function(){return this._rects?this._rects.frame:{}},rotation:function(){return this._model?this._model.rotation:0},visible:function(){return this._model&&this._model.opacity},model:function(){return this._model},draw:function(t,r){var e,n=this,o=t.ctx,a=n._model,l=n._rects;this.visible()&&(o.save(),a.clip&&(e=a.area,o.beginPath(),o.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),o.clip()),o.globalAlpha=i.bound(0,a.opacity,1),o.translate(p(r.x),p(r.y)),o.rotate(a.rotation),_(o,l.frame,a),S(o,a.lines,l.text,a),o.restore())}});var C=Number.MIN_SAFE_INTEGER||-9007199254740991,I=Number.MAX_SAFE_INTEGER||9007199254740991;function A(t,r,e){var n=Math.cos(e),o=Math.sin(e),i=r.x,a=r.y;return{x:i+n*(t.x-i)-o*(t.y-a),y:a+o*(t.x-i)+n*(t.y-a)}}function z(t,r){var e,n,o,i,a,l=I,c=C,h=r.origin;for(e=0;e<t.length;++e)n=t[e],o=n.x-h.x,i=n.y-h.y,a=r.vx*o+r.vy*i,l=Math.min(l,a),c=Math.max(c,a);return{min:l,max:c}}function B(t,r){var e=r.x-t.x,n=r.y-t.y,o=Math.sqrt(e*e+n*n);return{vx:(r.x-t.x)/o,vy:(r.y-t.y)/o,origin:t,ln:o}}var T=function(){this._rotation=0,this._rect={x:0,y:0,w:0,h:0}};(0,n.m)(T.prototype,{center:function(){var t=this._rect;return{x:t.x+t.w/2,y:t.y+t.h/2}},update:function(t,r,e){this._rotation=e,this._rect={x:r.x+t.x,y:r.y+t.y,w:r.w,h:r.h}},contains:function(t){var r=this,e=1,n=r._rect;return t=A(t,r.center(),-r._rotation),!(t.x<n.x-e||t.y<n.y-e||t.x>n.x+n.w+2*e||t.y>n.y+n.h+2*e)},intersects:function(t){var r,e,n,o=this._points(),i=t._points(),a=[B(o[0],o[1]),B(o[0],o[3])];for(this._rotation!==t._rotation&&a.push(B(i[0],i[1]),B(i[0],i[3])),r=0;r<a.length;++r)if(e=z(o,a[r]),n=z(i,a[r]),e.max<n.min||n.max<e.min)return!1;return!0},_points:function(){var t=this,r=t._rect,e=t._rotation,n=t.center();return[A({x:r.x,y:r.y},n,e),A({x:r.x+r.w,y:r.y},n,e),A({x:r.x+r.w,y:r.y+r.h},n,e),A({x:r.x,y:r.y+r.h},n,e)]}})}}]);
//# sourceMappingURL=639.3de56bf9.js.map