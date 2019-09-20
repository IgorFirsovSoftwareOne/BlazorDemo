import"./esm-chunk-d9927197.js";import{ElementHasCssClass as t,clearStyles as e,toggleCssClass as i,calculateStyles as o,changeDom as n,setStyles as r,GetCurrentStyleSheet as s,GetClassName as l}from"./esm-dom-utils-039553e2.js";import{G as a}from"./esm-chunk-5ae0b2a0.js";var h="show",f="\\s*matrix\\(\\s*"+[0,0,0,0,0,0].map(function(){return"(\\-?\\d+\\.?\\d*)"}).join(",\\s*")+"\\)\\s*";function d(t){var e=0;if(null!=t&&""!=t)try{var i=t.indexOf("px");i>-1&&(e=parseFloat(t.substr(0,i)))}catch(t){}return Math.ceil(e)}function m(t){var e=new RegExp(f).exec(t.transform);return e?{left:parseInt(e[5]),top:parseInt(e[6])}:{left:0,top:0}}function g(t,e,i){t.transform="matrix(1, 0, 0, 1, "+e+", "+i+")"}function c(t,e,i){var o=t.getBoundingClientRect(),n={left:e(o.left),top:e(o.top),right:i(o.right),bottom:i(o.bottom)};return n.width=n.right-n.left,n.height=n.bottom-n.top,n}function u(t){return c(t,Math.floor,Math.ceil)}function p(t){return c(t,Math.ceil,Math.floor)}class w{constructor(t,e){this.key=t,this.info=e}checkMargin(){return!0}allowScroll(){return"height"===this.info.size}canApplyToElement(t){return l(t).indexOf("dxbs-align-"+this.key)>-1}getRange(t){var e=this.getTargetBox(t)[this.info.to],i=e+this.info.sizeM*(t.elementBox[this.info.size]+(this.checkMargin()?t.margin:0));return{from:Math.min(e,i),to:Math.max(e,i),windowOverflow:0}}getTargetBox(t){return null}validate(t,e){var i=e[this.info.size];return t.windowOverflow=Math.abs(Math.min(0,t.from-i.from)+Math.min(0,i.to-t.to)),t.validTo=Math.min(t.to,i.to),t.validFrom=Math.max(t.from,i.from),0===t.windowOverflow}applyRange(t,e){e.appliedModifierKeys[this.info.size]=this.key;var i="width"===this.info.size?"left":"top",o=e.styles,n=t.from;this.allowScroll()&&t.windowOverflow>0&&(e.limitBox.scroll.width||(e.limitBox.scroll.width=!0,e.limitBox.width.to-=a()),e.isScrollable&&(o["max-height"]=e.height-t.windowOverflow+"px",e.width+=a(),e.elementBox.width+=a(),n=t.validFrom)),o.width=e.width+"px",this.checkMargin()&&(n+=Math.max(0,this.info.sizeM)*e.margin),e.elementBox[i]+=n,g(o,e.elementBox.left,e.elementBox.top)}dockElementToTarget(t){var e=this.getRange(t);this.dockElementToTargetInternal(e,t)||this.applyRange(e,t)}dockElementToTargetInternal(t,e){}}class x extends w{constructor(t,e,i){super(t,e,i),this.oppositePointName=i||null}getTargetBox(t){return t.targetBox.outer}getOppositePoint(){return this._oppositePoint||(this._oppositePoint=v.filter(function(t){return t.key===this.oppositePointName}.bind(this))[0])}dockElementToTargetInternal(t,e){if(this.validate(t,e.limitBox))this.applyRange(t,e);else{var i=this.getOppositePoint(),o=i.getRange(e);if(!(i.validate(o,e.limitBox)||o.windowOverflow<t.windowOverflow))return!1;i.applyRange(o,e)}return!0}}class M extends w{checkMargin(){return!1}getTargetBox(t){return t.targetBox.inner}dockElementToTargetInternal(t,e){return this.validate(t,e.limitBox),!1}validate(t,e){var i=Math.min(t.from,Math.max(0,t.to-e[this.info.size].to));return i>0&&(t.from-=i,t.to-=i),super.validate(t,e)}}var v=[new x("above",{to:"top",from:"bottom",size:"height",sizeM:-1},"below"),new x("below",{to:"bottom",from:"top",size:"height",sizeM:1},"above"),new M("top-sides",{to:"top",from:"top",size:"height",sizeM:1}),new M("bottom-sides",{to:"bottom",from:"bottom",size:"height",sizeM:-1}),new x("outside-left",{to:"left",from:"right",size:"width",sizeM:-1},"outside-right"),new x("outside-right",{to:"right",from:"left",size:"width",sizeM:1},"outside-left"),new M("left-sides",{to:"left",from:"left",size:"width",sizeM:1}),new M("right-sides",{to:"right",from:"right",size:"width",sizeM:-1})];function b(e,i,l,a){return o(function(){for(var o=function(e,i,o){var n,r,l,a,h=s(),f=u(e),g=e.ownerDocument.documentElement,c={isScrollable:t(e,"dxbs-scrollable"),specifiedOffsetModifiers:v.filter(function(t){return t.canApplyToElement(e)}),margin:d(h.marginTop),width:o?Math.max(o.width,Math.ceil(e.offsetWidth)):Math.ceil(e.offsetWidth),height:Math.ceil(e.offsetHeight),appliedModifierKeys:{height:null,width:null}},w=m(h);c.elementBox={left:n=w.left-f.left,top:r=w.top-f.top,right:n+(l=f.width),bottom:r+(a=f.height),width:l,height:a},c.targetBox={outer:u(i),inner:p(i)},c.limitBox={scroll:{width:g.clientWidth<window.innerWidth,height:g.clientHeight<window.innerHeight},width:{from:0,to:g.clientWidth},height:{from:0,to:g.clientHeight}},c.styles={};var x=(e.getAttribute("data-popup-align")||o&&o.align).split(/\s+/);return c.offsetModifiers=v.filter(function(t){return x.some(function(e){return t.key===e})}),c}(e,i,l),h=0;h<o.offsetModifiers.length;h++)o.offsetModifiers[h].dockElementToTarget(o);n(function(){a(o)}),r(e,o.styles)}.bind(this))}function z(o){t(o,h)?(o.isDockedElementHidden&&delete o.isDockedElementHidden,e(o),i(o,h,!1)):o.isDockedElementHidden&&delete o.isDockedElementHidden}function k(t,o,n){e(t),i(t,h,!0),b(t,o,{align:n},function(){})}export{z as hide,m as parseTranslateInfo,k as show,g as translatePosition};
