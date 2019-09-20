_dxBlazorInternal.define("cjs-scheduler-dec8ee5a.js",function(t,e,n){var i=t("./cjs-chunk-c27cc8ab.js"),o=t("./cjs-dom-utils-bcbaf851.js"),r=t("./cjs-chunk-103238e5.js"),a={ClearTimer:function(t){return t>-1&&window.clearTimeout(t),-1},ClearInterval:function(t){return t>-1&&window.clearInterval(t),-1},Throttle:function(t,e){var n,i=!1,o=this;function r(){if(i)return n=arguments,o=this,void 0;t.apply(this,arguments),i=!0,setTimeout(function(){i=!1,n&&(r.apply(o,n),n=null)},e)}return r.cancel=function(){clearTimeout(e),e=n=o=null},r}},l={showCallout:!0,showTitle:!1,position:"right",className:"",classNames:{sysClassName:"dx-hint",contentElementClassName:"dxh-content",calloutElementClassName:"arrow",titleElementClassName:"dxh-title"},allowFlip:!0,allowShift:!0,offset:4};function s(t,e,n){n||(n=l),e.style.visibility="hidden",e.style.display="block",function(t,e){var n=o.GetAbsoluteX(t),i=o.GetAbsoluteY(t);o.SetAbsoluteX(e,n),o.SetAbsoluteY(e,i)}(t,e),u.updatePosition(t,e,n),e.style.visibility=""}var u=function(){function t(t){return"bs-popover-"+t.toLowerCase()}function e(e,n,i){var r=f.set(e,n,i);!function(e,n,i){var r=t(n),a=t(i);o.RemoveClassNameFromElement(e,r),o.AddClassNameToElement(e,a)}(n,i.position,r.flipPosition),function(t,e,n){var i=u.getCalloutElement(t,e.classNames);if(i){var o,r=!("left"===(o=e.position)||"right"===o),a=r?t.offsetWidth:t.offsetHeight,l=a/2-(r?n.x:n.y);l=function(t,e){var n={min:15,max:e-15},i=t<n.min,o=t>n.max;return o&&(t=n.max),i&&(t=n.min),t+="px",i&&o&&(t="50%"),t}(l,a),i.style[r?"left":"top"]=l}}(n,i,r.shift)}return{getCalloutElement:function(t,e){return t?t.getElementsByClassName(e.calloutElementClassName)[0]:null},updatePosition:function(t,n,i){var o=10,r=!1;do{var a={w:n.offsetWidth,h:n.offsetHeight};e(t,n,i),r=a.w!==n.offsetWidth||a.h!==n.offsetHeight,o--}while(r&&o>0)}}}();function c(t,e,n){this.targetElement=t,this.hintElement=e,this.options=n,this.position=n.position,this.calloutSize={width:0,height:0};var r=u.getCalloutElement(e,n.classNames);function a(t,e,n,r,a){this.location=0,this.screen={min:0,max:0},this.screen.min=a?o.GetDocumentScrollLeft():o.GetDocumentScrollTop();var l=i.Browser.WebKitTouchUI?window.innerWidth:o.GetDocumentClientWidth();this.screen.max=this.screen.min+(a?l:o.GetDocumentClientHeight()),this.target={min:0,max:0},this.target.min=a?o.GetAbsoluteX(t):o.GetAbsoluteY(t),this.target.max=this.target.min+(a?t.offsetWidth:t.offsetHeight),this.hintSize=a?e.offsetWidth:e.offsetHeight}r&&(this.calloutSize.width=r.offsetWidth,this.calloutSize.height=r.offsetHeight),this.horizontal=new a(t,e,n,this.calloutSize,!0),this.vertical=new a(t,e,n,this.calloutSize,!1)}var f=function(){function t(t,i,o){var r=new c(t,i,o),a=e(r.position);o.allowFlip&&(a.horizontal?r.position=p.flipPositionIfRequired(r.horizontal,r.position):a.vertical&&(r.position=p.flipPositionIfRequired(r.vertical,r.position)));var l=function(t){return n(t.position,{width:t.horizontal.target.max-t.horizontal.target.min,height:t.vertical.target.max-t.vertical.target.min},{width:t.horizontal.hintSize,height:t.vertical.hintSize},t.calloutSize)}(r),s={x:0,y:0};return o.allowShift&&(s.x=h.getShift(r.horizontal,a,l.x,0,!0),s.y=h.getShift(r.vertical,a,l.y,0,!1)),{location:{x:l.x+s.x,y:l.y+s.y},shift:s,flipPosition:r.position}}function e(t){return{vertical:"bottom"===t||"top"===t,horizontal:"right"===t||"left"===t}}function n(t,e,n,i){var o={x:0,y:0};return"top"===t?o.y-=n.height+i.height:"bottom"===t?o.y+=e.height+i.height:"left"===t?o.x-=n.width+i.width:"right"===t&&(o.x+=e.width+i.width),"top"!==t&&"bottom"!==t||(o.x+=e.width/2-n.width/2),"left"!==t&&"right"!==t||(o.y+=e.height/2-n.height/2),o}return{set:function(n,i,r){var a=t(n,i,r),l={x:0,y:0},s=e(a.flipPosition);s.horizontal&&(l.x=r.offset*a.location.x/Math.abs(a.location.x)),s.vertical&&(l.y=r.offset*a.location.y/Math.abs(a.location.y));var u=void 0!==r.x?r.x:o.GetAbsoluteX(n)+a.location.x+l.x,c=void 0!==r.y?r.y:o.GetAbsoluteY(n)+a.location.y+l.y;return o.SetAbsoluteX(i,u),o.SetAbsoluteY(i,c),{flipPosition:a.flipPosition,shift:{x:a.shift.x,y:a.shift.y}}},getNotShiftedOffsetCore:n}}(),p={flipPositionIfRequired:function(t,e){return this.ensureFlipCore(t.screen,t.target,t.hintSize,e)},getFlipPosition:function(t){return"bottom"===t?"top":"top"===t?"bottom":"right"===t?"left":"left"===t?"right":t},ensureFlipCore:function(t,e,n,i){var o="bottom"===i||"right"===i,r="top"===i||"left"===i,a=e.min-n-t.min;e.min-n>t.max&&(a=-1);var l=t.max-(e.max+n);e.max+n<t.min&&(l=-1);var s=a>=0,u=l>=0;if(!s&&!u)return i;if(r&&s)return i;if(o&&u)return i;var c=o&&!u&&l<a;return r&&!s&&a<l?this.getFlipPosition(i):c?this.getFlipPosition(i):i}},h={getShift:function(t,e,n,i,o){var r=0;return!(e.horizontal&&o||e.vertical&&!o)&&(r=this.getShiftCore(t.screen,t.target,t.hintSize,n,i)),r},getShiftCore:function(t,e,n,i,o){if(e.max<t.min+o||e.min>t.max-o)return 0;var r=e.min+i,a=e.min+i+n,l=r<t.min&&a>t.min,s=a>t.max&&r<t.max;return l&&!s?t.min-r:s&&!l?t.max-n-r:0}},m={None:"none",Drag:"drag",ResizeTop:"resizeTop",ResizeBottom:"resizeBottom",ResizeSelection:"resizeSelection"};function d(t,e,n,i,u){if(t&&(t.appointmentToolTipElement&&r.DisposeEvents(t.appointmentToolTipElement),t.dropDownDateNavigatorElement&&r.DisposeEvents(t.dropDownDateNavigatorElement)),t=o.EnsureElement(t)){if(t.dropDownDateNavigatorElement=o.EnsureElement(e),t.appointmentToolTipElement=o.EnsureElement(n),t.appointmentEditForm=o.EnsureElement(i),t.mouseMoveHandlerState||(t.mouseMoveHandlerState=m.None),t.appointmentToolTipElement){var c=v.getSelectedAppointment(t);if(c){var f=function(t,e,n){var i=t.getBoundingClientRect(),r=n.getBoundingClientRect();l.position=o.ElementHasCssClass(e,"dxsc-tooltip")?i.right-r.right>370?"right":r.left-i.left>370?"left":r.top-i.top>370?"top":"bottom":i.right-r.right>450?"right":r.left-i.left>450?"left":"auto";return l}(t,t.appointmentToolTipElement,c);s(c,t.appointmentToolTipElement,f)}}var p=new T(t,"dxbs-sc-all-day-area"),h=new T(t,"dxbs-sc-time-cell"),d=v.getHorizontalAppointments(t),A=v.getVerticalAppointments(t);if(t.appointmentInfos=S.createItems(d,p,h),t.appointmentInfos=t.appointmentInfos.concat(S.createItems(A,p,h)),t.skipCalculateAllAppointments){var C=function(t){for(var e,n=[],i=0;e=t[i];i++)o.ElementHasCssClass(e,"dxbs-apt-edited")&&n.push(e);return n};return d=C(d),A=C(A),D(d,A,!1),Promise.resolve("ok")}return E(),function(t,e,n,i){b.attachEventToElement(t,"mousedown",B),b.attachEventToElement(t,"mouseup",R),b.attachEventToElement(t,"mousemove",W),b.attachLongPressEventToElement(t,G),b.attachEventToElement(t,"touchstart",j),b.attachEventToElement(t,"touchmove",Y),b.attachEventToElement(t,"touchend",U),e&&(e.dateNavigatorLostFocusHandler=function(t){return L(t,e,"OnDropDownDateNavigatorLostFocus",i)},o.AttachEventToElement(document,r.TouchUIHelper.touchMouseDownEventName,e.dateNavigatorLostFocusHandler),r.RegisterDisposableEvents(e,function(){o.DetachEventFromElement(document,r.TouchUIHelper.touchMouseDownEventName,e.dateNavigatorLostFocusHandler)}));n&&(n.toolTipLostFocusHandler=function(t){var e=v.getAppointmentContainer(t.srcElement);if(!e||!y(e))return L(t,n,"OnAppointmentToolTipLostFocus",i)},o.AttachEventToElement(document,r.TouchUIHelper.touchMouseDownEventName,n.toolTipLostFocusHandler),r.RegisterDisposableEvents(n,function(){o.DetachEventFromElement(document,r.TouchUIHelper.touchMouseDownEventName,n.toolTipLostFocusHandler)}));o.subscribeElementContentWidth(t,E)}(t,t.dropDownDateNavigatorElement,t.appointmentToolTipElement,u),Promise.resolve("ok")}function E(){D(d,A,!0),function(t,e){var n=(l=(new Date).getTime(),new Date(l)),i=(a=n,new Date(a.getFullYear(),a.getMonth(),a.getDate())),o=v.getTimeMarkerContainer(t),r=v.getTimeIndicatorContainer(t);var a;var l;if(!r)return;var s=function(t,e){for(var n,i,o=0;i=t[o];o++)e-v.Attr.getStart(i)>=0&&v.Attr.getEnd(i)-e>0&&(n=i);return n}(e,n);if(!s)return o.style.display="none",r.style.display="none",void 0;o.style.display="",r.style.display="";var u=Math.floor(function(t,e,n){var i=function(t,e){var n=t,i=F(e,n),o=Math.abs(i)%864e5;i<0&&(o=864e5-o);return function(t,e){var n=k(t,e),i=6e4*(n.getTimezoneOffset()-t.getTimezoneOffset());return k(n,i)}(n,o)}(n,t),o=v.Attr.getStart(e),r=v.Attr.getEnd(e),a=F(i,o);return e.offsetTop+e.offsetHeight*a/(r-o)}(n,s,i));o.style.top=u-o.offsetHeight/2+"px",o.style.width=s.offsetLeft+o.offsetHeight/2+1+"px",c=r,c&&"none"!==c.style.display&&(r.style.top=u-1+"px",r.style.width=s.offsetWidth+"px",r.style.left=s.offsetLeft+"px");var c}(t,h.getTimeCells())}function D(t,e,n){p.clearObjects(),M(p.getTimeCells(),t),M(h.getTimeCells(),e),function(t){for(var e,n=0;e=t[n];n++)P(e)}(t),n&&function(t){for(var e,n=0,i=0;e=t[i];i++){var o=0;e.intersects.forEach(function(t){o+=t.offsetHeight}),o>n&&(n=o),e.lastAppointmentTop=void 0}t[0].style.height=n+15+"px"}(p.getTimeCells()),function(t){for(var e,n=0;e=t[n];n++)N(e)}(e)}function I(t){t&&u.invokeMethodAsync("OnAppointmentSelect",v.Attr.getAppointmentKey(t))}function q(e){return t.appointmentInfos.filter(function(t){return t.id===e})[0]}function B(e){if(z("TouchStart")||2===e.button)return 2===e.button&&b.preventEventAndBubble(e),void 0;var n=v.getAppointmentContainer(e.srcElement);n?(y(n)||I(n),o.ElementHasCssClass(e.srcElement,"dxsc-top-handle")||function(t){return o.ElementHasCssClass(t,"dxsc-left-handle")}(e.srcElement)?t.mouseMoveHandlerState=m.ResizeTop:function(t){return o.ElementHasCssClass(t,"dxsc-bottom-handle")}(e.srcElement)||function(t){return o.ElementHasCssClass(t,"dxsc-right-handle")}(e.srcElement)?t.mouseMoveHandlerState=m.ResizeBottom:w(function(){t.mouseMoveHandlerState=m.Drag},"drag",50,!0)):t.appointmentToolTipElement||g(e.srcElement)&&(t.cellSelectionHelper=new x(t,u),t.cellSelectionHelper.start(e.srcElement),t.mouseMoveHandlerState=m.ResizeSelection)}function W(e){t.mouseMoveHandlerState!==m.None&&(t.throttledDrag||(t.throttledDrag=a.Throttle(function(e){var n=h.findCellByPos(e.clientX,e.clientY)||p.findCellByPos(e.clientX,e.clientY);if(n)if(t.mouseMoveHandlerState===m.ResizeSelection&&t.cellSelectionHelper)t.cellSelectionHelper.resizeTo(n);else{var i=function(){var e=v.getSelectedAppointment(t);return e?q(v.Attr.getAppointmentKey(e)):null}();i&&(t.mouseMoveHandlerState!==m.Drag&&t.mouseMoveHandlerState!==m.ResizeTop&&t.mouseMoveHandlerState!==m.ResizeBottom||(t.dragHelper||(t.dragHelper=new H(t,u),t.dragHelper.dragStart(i,n)),t.mouseMoveHandlerState===m.Drag?t.dragHelper.drag(n):t.dragHelper.resize(n,t.mouseMoveHandlerState===m.ResizeTop)))}},20)),t.throttledDrag(e))}function R(e){if(z("TouchEnd")||2===e.button)return 2===e.button&&b.preventEventAndBubble(e),void 0;t.dragHelper||t.cellSelectionHelper?t.dragHelper?(t.dragHelper.dragEnd(),t.dragHelper=null):t.cellSelectionHelper&&(t.cellSelectionHelper.end(),t.cellSelectionHelper=null):v.getAppointmentContainer(e.srcElement)&&!z("skipToolTip")&&(u.invokeMethodAsync("ShowAppointmentToolTip"),w(function(){},"skipToolTip",300)),O("drag"),t.mouseMoveHandlerState=m.None}function j(t){w(function(){},"TouchStart",300,!0),I(v.getAppointmentContainer(t.srcElement))}function G(e){var n=v.getAppointmentContainer(e.srcElement);if(n){var i=e.touches[0].clientX,o=e.touches[0].clientY,r=h.findCellByPos(i,o)||p.findCellByPos(i,o),a=q(v.Attr.getAppointmentKey(n));t.dragHelper=new H(t,u),t.dragHelper.dragStart(a,r)}else g(e.srcElement)&&!t.appointmentToolTipElement&&(t.cellSelectionHelper=new x(t,u),t.cellSelectionHelper.start(e.srcElement))}function Y(e){if(t.dragHelper||t.cellSelectionHelper){var n=e.touches[0].clientX,i=e.touches[0].clientY,o=h.findCellByPos(n,i)||p.findCellByPos(n,i);o&&(t.dragHelper?t.dragHelper.drag(o):t.cellSelectionHelper&&t.cellSelectionHelper.resizeTo(o)),b.preventEventAndBubble(e)}}function U(t){R(t),w(function(){},"TouchEnd",300,!0)}}var v={getVerticalAppointmentsContainer:function(t){return t.querySelectorAll(".dxbs-sc-vertical-apts")[0]},getHorizontalAppointmentsContainer:function(t){return t.querySelectorAll(".dxbs-sc-horizontal-apts")[0]},getHorizontalAppointments:function(t){return t.querySelectorAll(".dxbs-sc-horizontal-apt")},getVerticalAppointments:function(t){return t.querySelectorAll(".dxbs-sc-vertical-apt")},getTimeMarkerContainer:function(t){return t.querySelectorAll(".dxbs-sc-time-marker")[0]},getTimeIndicatorContainer:function(t){return t.querySelectorAll(".dxbs-sc-time-indicator")[0]},getAppointmentContainer:function(t){return o.GetParentByClassName(t,"dxbs-sc-apt")},getSelectedAppointment:function(t){return t.querySelectorAll(".dxbs-apt-selected")[0]},getEditedAppointment:function(t){return t.querySelectorAll(".dxbs-apt-edited")[0]},getCellSelectionContainer:function(t){return t.querySelectorAll(".dxsc-cell-selection")[0]},setElementDisplay:function(t,e){t.style.display=e?"":"none"},Attr:{getContainerIndex:function(t){return t.getAttribute("data-container-index")},getAppointmentFirstCellIndex:function(t){return parseInt(t.getAttribute("data-first-cell-index"))},getAppointmentLastCellIndex:function(t){return parseInt(t.getAttribute("data-last-cell-index"))},getAppointmentColumnsCount:function(t){return parseInt(t.getAttribute("data-columns-count"))},setAppointmentColumnsCount:function(t,e){t.setAttribute("data-columns-count",e)},getAppointmentColumn:function(t){return parseInt(t.getAttribute("data-column"))},setAppointmentColumn:function(t,e){t.setAttribute("data-column",e)},getAppointmentKey:function(t){return t.getAttribute("data-key")},getStart:function(t){var e=new Date(parseInt(t.getAttribute("data-start"))),n=e.getTime()+6e4*e.getTimezoneOffset()+0;return new Date(n)},getEnd:function(t){var e=new Date(parseInt(t.getAttribute("data-end"))),n=e.getTime()+6e4*e.getTimezoneOffset()+0;return new Date(n)},getDuration:function(t){return parseInt(t.getAttribute("data-duration"))},getAllDay:function(t){return""===t.getAttribute("data-allday")}}};function g(t){return o.ElementHasCssClass(t,"dxbs-sc-all-day-area")||o.ElementHasCssClass(t,"dxbs-sc-time-cell")}function A(t){return o.ElementHasCssClass(t,"dxbs-sc-all-day-area")}function y(t){return o.ElementHasCssClass(t,"dxbs-apt-selected")}function C(t){var e=v.Attr.getStart(t);return E(e,v.Attr.getEnd(t)-e)}function E(t,e){return{start:t,duration:e,isLongerOrEqualDay:e>=D.DaySpan}}var T=function(t,e){this.element=t,this.cellClassName=e};T.prototype={getContainers:function(){if(!this.containers){var t=this.element.querySelectorAll("."+this.cellClassName);this.containers={};for(var e,n=0;e=t[n];n++){var i=v.Attr.getContainerIndex(e);this.containers[i]||(this.containers[i]={cells:[]}),this.containers[i].cells.push(e)}}return this.containers},clearObjects:function(){for(var t,e=this.getTimeCells(),n=0;t=e[n];n++)this.clearObject(t)},clearObject:function(t){t.lastAppointmentTop=void 0},getTimeCells:function(){return this.timeCells||(this.timeCells=this.element.querySelectorAll("."+this.cellClassName)),this.timeCells},findCell:function(t){var e=this.getContainers();for(var n in e)if(e.hasOwnProperty(n))for(var i,o=0;i=e[n].cells[o];o++){var r=v.Attr.getStart(i),a=v.Attr.getEnd(i);if(r-t<=0&&t-a<0)return i}return null},findStartCell:function(t){var e=this.getContainers();for(var n in e)if(e.hasOwnProperty(n))for(var i,o=0;i=e[n].cells[o];o++){if(t-v.Attr.getStart(i)<=0)return i}return null},findEndCell:function(t){var e=this.getContainers();for(var n in e)if(e.hasOwnProperty(n))for(var i,o=0;i=e[n].cells[o];o++){if(t-v.Attr.getEnd(i)<=0)return i}return null},findCellByPos:function(t,e){for(var n,i=this.getTimeCells(),o=0;n=i[o];o++){var r=n.getBoundingClientRect();if(r.top<=e&&e<r.bottom&&r.left<=t&&t<r.right)return n}}};var S=function(t,e,n,i){this.id=t,this.views=e,this.interval=n,this.allDay=v.Attr.getAllDay(e[0]),this.sourceView=null,this.aptCont=null,this.dateTimeViewLayout=i,this.init()};S.prototype={init:function(){this.sourceView=this.views[0].cloneNode(!0),this.aptCont=this.views[0].parentElement},getStart:function(){return this.interval.start},getDuration:function(){return this.interval.duration},getEnd:function(){return D.DateIncreaseWithUtcOffset(this.getStart(),this.getDuration())},clearViews:function(){this.views.forEach(function(t){t.parentElement.removeChild(t)}),this.views=[]}},S.createItem=function(t,e,n,i){var o=function(t){return E(v.Attr.getStart(t[0]),v.Attr.getDuration(t[0]))}(e);return new S(t,e,o,o.duration>=D.DaySpan?n:i)},S.createItems=function(t,e,n){for(var i,o={},r=0;i=t[r];r++){o[l=v.Attr.getAppointmentKey(i)]||(o[l]=[]),o[l].push(i)}var a=[];for(var l in o)o.hasOwnProperty(l)&&a.push(S.createItem(l,o[l],e,n));return a};var D={HalfHourSpan:18e5,DaySpan:864e5,DateSubsWithTimezone:function(t,e){return t-e+6e4*(e.getTimezoneOffset()-t.getTimezoneOffset())},TruncToDate:function(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate())},CalculateDaysDifference:function(t,e){var n=D.TruncToDate(t),i=D.TruncToDate(e);return D.DateSubsWithTimezone(i,n)/D.DaySpan},DateIncreaseWithUtcOffset:function(t,e){var n=D.DateIncrease(t,e),i=6e4*(n.getTimezoneOffset()-t.getTimezoneOffset());return D.DateIncrease(n,i)},DateIncrease:function(t,e){return new Date(t.valueOf()+e)},AddTimeSpan:function(t,e){return new Date(t.valueOf()+e)},ToDayTime:function(t){return t.valueOf()-D.TruncToDate(t).valueOf()}};function x(t,e){this.scheduler=t,this.dotnetHelper=e,this.interval=null,this.start=function(t){this.interval=C(t);var e=this.interval.start,n=D.DateIncreaseWithUtcOffset(e,this.interval.duration),i=6e4*e.getTimezoneOffset()*-1;this.dotnetHelper.invokeMethodAsync("OnCellSelectionStart",D.AddTimeSpan(e,i),D.AddTimeSpan(n,i),A(t))},this.resizeTo=function(t){var e=C(t),n=e.start-this.interval.start;if(0!==n||this.interval.duration!==e.duration){n<0&&this.interval.duration===e.duration?this.direction="top":n>0&&this.interval.duration===e.duration&&(this.direction="bottom"),"bottom"===this.direction?this.interval.duration=n+e.duration:"top"===this.direction&&(this.interval.start=e.start,this.interval.duration+=-1*n);var i=this.interval.start,o=D.DateIncreaseWithUtcOffset(i,this.interval.duration),r=6e4*i.getTimezoneOffset()*-1;this.dotnetHelper.invokeMethodAsync("OnCellSelectionResize",D.AddTimeSpan(i,r),D.AddTimeSpan(o,r),A(t))}},this.end=function(){this.dotnetHelper.invokeMethodAsync("OnCellSelectionEnd",this.scheduler.offsetWidth<500)}}function H(t,e){this.scheduler=t,this.dotnetHelper=e,this.appointmentInfo=null,this.interval=null,this.dragStart=function(t,e){this.appointmentInfo=t,this.sourceAppointmentInterval=E(t.getStart(),t.getDuration()),this.cellInterval=C(e),this.dateDiff=t.getStart()-this.cellInterval.start,this.dotnetHelper.invokeMethodAsync("OnAppointmentDragStart"),this.scheduler.skipCalculateAllAppointments=!0},this.drag=function(t){if(this.cellInterval){var e=C(t);if(this.cellInterval.start-e.start!=0||this.cellInterval.duration!==e.duration){e.isLongerOrEqualDay?this.sourceAppointmentInterval.isLongerOrEqualDay&&this.cellInterval.isLongerOrEqualDay===e.isLongerOrEqualDay?this.appointmentInfo.interval=E(D.AddTimeSpan(e.start,this.dateDiff),this.appointmentInfo.interval.duration):(this.appointmentInfo.interval=e,this.appointmentInfo.allDay=!0):(this.appointmentInfo.interval.isLongerOrEqualDay&&(this.appointmentInfo.interval.duration=this.sourceAppointmentInterval.isLongerOrEqualDay?e.duration:this.sourceAppointmentInterval.duration),this.appointmentInfo.interval=E(D.AddTimeSpan(e.start,this.dateDiff),this.appointmentInfo.interval.duration),this.appointmentInfo.allDay=!1);var n=6e4*e.start.getTimezoneOffset()*-1;this.dotnetHelper.invokeMethodAsync("OnAppointmentDrag",D.AddTimeSpan(this.appointmentInfo.getStart(),n),D.AddTimeSpan(this.appointmentInfo.getEnd(),n),this.appointmentInfo.allDay),this.cellInterval=e}}},this.resize=function(t,e,n){if(this.cellInterval){var i=C(t);if((this.cellInterval.start-i.start!=0||this.cellInterval.duration!==i.duration)&&this.cellInterval.isLongerOrEqualDay===i.isLongerOrEqualDay){var o=this.cellInterval.start-i.start;e?this.appointmentInfo.interval=E(D.AddTimeSpan(i.start,this.dateDiff),this.appointmentInfo.interval.duration+o):this.appointmentInfo.interval.duration-=o;var r=6e4*i.start.getTimezoneOffset()*-1;this.dotnetHelper.invokeMethodAsync("OnAppointmentDrag",D.AddTimeSpan(this.appointmentInfo.getStart(),r),D.AddTimeSpan(this.appointmentInfo.getEnd(),r),this.appointmentInfo.allDay),this.cellInterval=i}}},this.dragEnd=function(){this.dotnetHelper.invokeMethodAsync("OnAppointmentDragEnd"),this.scheduler.skipCalculateAllAppointments=!1}}var b=function(){var t,e,n=500,i=0;function r(t,e,n){t[n.name]||(t[n.name]=n),o.DetachEventFromElement(t,e,n=t[n.name]),o.AttachEventToElement(t,e,n)}function a(e){u(e)&&(i++,w(function(){!function(e){1===i&&(i=0,t.call(this,e))}(e)},"longPress",n,!0))}function l(t){u(t)&&(i=0,O("longPress"))}function s(t){z("longPress")&&(i=0,O("longPress"))}function u(t){return t.timeStamp!==e&&(e=t.timeStamp,!0)}function c(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,!1}return{attachEventToElement:r,attachLongPressEventToElement:function(e,n){t=n,r(e,"touchstart",a),r(e,"touchend",l),r(e,"touchmove",s)},longTouchTimeout:n,preventEvent:c,preventEventAndBubble:function(t){return c(t),t.stopPropagation&&t.stopPropagation(),t.cancelBubble=!0,!1}}}(),I={};function w(t,e,n,i){i&&z(e)&&O(e),void 0===I[e]&&(I[e]=setTimeout(function(){t(),I[e]=void 0},n))}function z(t){return!!I[t]}function O(t){clearTimeout(I[t]),I[t]=void 0}function M(t,e){for(var n,i={},o=0;n=t[o];o++){n.intersects=[];var r=v.Attr.getContainerIndex(n);i[r]||(i[r]=[]),i[r].push(n)}var a;for(o=0;a=e[o];o++){var l=v.Attr.getContainerIndex(a),s=v.Attr.getAppointmentFirstCellIndex(a),u=v.Attr.getAppointmentLastCellIndex(a);a.firstCell=i[l][s],a.lastCell=i[l][u]}}function P(t){t.style.height="",function(t,e){t.intersects.findIndex(function(t){return v.Attr.getAppointmentKey(t)===v.Attr.getAppointmentKey(e)})<0&&t.intersects.push(e)}(t.firstCell,t),t.style.left=t.firstCell.offsetLeft+"px",t.style.width=t.lastCell===t.firstCell?t.firstCell.offsetWidth+"px":t.lastCell.offsetLeft-t.firstCell.offsetLeft+t.firstCell.offsetWidth+"px",t.firstCell.lastAppointmentTop||(t.firstCell.lastAppointmentTop=t.firstCell.offsetTop),t.style.display="",t.style.top=t.firstCell.lastAppointmentTop+"px",t.firstCell.lastAppointmentTop+=t.offsetHeight}function N(t){var e=v.Attr.getAppointmentColumn(t),n=t.firstCell.offsetWidth/v.Attr.getAppointmentColumnsCount(t);t.style.top=t.firstCell.offsetTop+"px",t.style.left=t.firstCell.offsetLeft+n*e+"px",t.style.width=n-10+"px",t.style.height=t.lastCell.offsetTop+t.lastCell.offsetHeight-t.firstCell.offsetTop+"px",t.style.display=""}function L(t,e,n,i){return function(t,e,n){var i=t.target;for(;i;){if(i===e)return!1;i=i.parentElement}n&&n()}(t,e,function(){e&&"string"!=typeof e&&"none"!==e.style.display&&i.invokeMethodAsync(n)})}function k(t,e){return new Date(t.valueOf()+e)}function F(t,e){return t-e+6e4*(e.getTimezoneOffset()-t.getTimezoneOffset())}function q(t){return(t=o.EnsureElement(t))&&r.DisposeEvents(t),Promise.resolve("ok")}var B={Init:d,Dispose:q};n.Dispose=q,n.Init=d,n.default=B},["cjs-chunk-c27cc8ab.js","cjs-dom-utils-bcbaf851.js","cjs-chunk-103238e5.js"]);
