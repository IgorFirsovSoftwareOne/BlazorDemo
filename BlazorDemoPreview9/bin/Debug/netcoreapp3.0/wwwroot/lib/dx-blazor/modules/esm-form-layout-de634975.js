import{B as t}from"./esm-chunk-d9927197.js";import{GetCurrentStyle as o,GetCurrentStyleSheet as n,AddClassNameToElement as r,RemoveClassNameFromElement as d,RetrieveByPredicate as e,GetParentByClassName as l}from"./esm-dom-utils-039553e2.js";var i={BootstrapMode:"Bootstrap4"};i.IsBootstrap3="Bootstrap3"==i.BootstrapMode,i.IsBootstrap4="Bootstrap4"==i.BootstrapMode,i.zIndexCategories={dropdown:1e3,sticky:1020,fixed:1030,modalBackdrop:1040,modal:1050,popover:1060,tooltip:1070};var s=i.IsBootstrap3?"panel":"card",a=i.IsBootstrap3?"control-label":"col-form-label",f=i.IsBootstrap3?"help-block":"form-text",p={};function c(t){!function(t,r,d){var e=p[t]||(p[t]=o(document.body).getPropertyValue(t)||r);if(e){var l=n();l&&l.insertRule("@media (min-width: "+e+") {\n"+d+"\n}\n",l.cssRules.length)}}("--breakpoint-lg","992px",t)}var x="dxbs-fl",b="dxbs-fl-calc",u=/\./g;function m(t){return t.replace(u,"\\$&")}function g(o){var n,i;function p(){return document.getElementById(o)}n=0,i=p(),r(i,b),n=function(o,n){for(var r=0,d=function(t,o){return o?(n=t.querySelectorAll(".dxbs-fl-cpt."+a),r=p(),e(n,function(t){return l(t,x)==r})):t.querySelectorAll("#"+t.id+" > .row > div:not(.dxbs-fl-g):not(.dxbs-fl-gd):not(.dxbs-fl-gt) > .form-group > ."+a+", #"+t.id+".dxbs-fl-gd > ."+s+" > .row > div:not(.dxbs-fl-g):not(.dxbs-fl-gd):not(.dxbs-fl-gt) > .form-group > ."+a+", #"+t.id+".dxbs-fl-gt > .dxbs-tabs > .tab-content > .tab-pane > .row > div:not(.dxbs-fl-g):not(.dxbs-fl-gd):not(.dxbs-fl-gt) > .form-group > ."+a);var n,r}(o,n),i=0;i<d.length;i++){var f=d[i].offsetWidth;f>r&&f<d[i].parentNode.offsetWidth&&(r=f)}return r>0?r+(t.HardwareAcceleration?1:0):0}(i,!0),function(t,n){if(0!==n&&(!t.itemCaptionWidth||n>t.itemCaptionWidth)){t.itemCaptionWidth=n;var r=function(t){var n=p(),r="#"+m(o)+".dxbs-fl.form-horizontal ";t!=n&&(r+="#"+m(t.id)+" ");for(var d=n;d=l(d.parentNode,x);)r="#"+m(d.id)+" "+r;return r}(t),d=r+".form-group > .dxbs-fl-cpt {\n width:"+n+"px;\n}\n";d+=r+".form-group > .dxbs-fl-ctrl:not(img):not(.dxbs-fl-ctrl-nc) {\n width: calc(100% - "+n+"px);\n}\n",d+=r+".form-group > .dxbs-textbox:not(img):not(.dxbs-fl-ctrl-nc) {\n width: calc(100% - "+n+"px);\n}\n",d+=r+".form-group > .dxbs-dropdown-edit:not(img):not(.dxbs-fl-ctrl-nc) {\n width: calc(100% - "+n+"px);\n}\n",d+=r+".form-group > .dxbs-spin-edit:not(img):not(.dxbs-fl-ctrl-nc) {\n width: calc(100% - "+n+"px);\n}\n",c(d+=r+".row > div > ."+f+" {\n margin-left: "+n+"px;\n}\n")}}(p(),n),void d(i,b)}const v={Init:g};export default v;export{g as Init};
