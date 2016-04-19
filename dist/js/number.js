/*! formstone v1.1.0 [number.js] 2016-04-19 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(){u=b.$body}function d(a){var b=parseFloat(this.attr("min")),c=parseFloat(this.attr("max"));a.min=b||0===b?b:!1,a.max=c||0===c?c:!1,a.step=parseFloat(this.attr("step"))||1,a.timer=null,a.digits=n(a.step),a.disabled=this.is(":disabled")||this.is("[readonly]");var d="";d+='<button type="button" class="'+[r.arrow,r.up].join(" ")+'">'+a.labels.up+"</button>",d+='<button type="button" class="'+[r.arrow,r.down].join(" ")+'">'+a.labels.down+"</button>",this.wrap('<div class="'+[r.base,a.theme,a.customClass,a.disabled?r.disabled:""].join(" ")+'"></div>').after(d),a.$container=this.parent(q.base),a.$arrows=a.$container.find(q.arrow),this.on(s.keyPress,a,j).on(s.focus,a,h).on(s.blur,a,i),a.$container.on([s.touchStart,s.mouseDown].join(" "),q.arrow,a,k)}function e(a){a.$arrows.remove(),this.unwrap().off(s.namespace)}function f(a){a.disabled&&(this.prop("disabled",!1),a.$container.removeClass(r.disabled),a.disabled=!1)}function g(a){a.disabled||(this.prop("disabled",!0),a.$container.addClass(r.disabled),a.disabled=!0)}function h(a){a.data.$container.addClass(r.focus)}function i(a){a.data.$container.removeClass(r.focus)}function j(a){var b=a.data;(38===a.keyCode||40===a.keyCode)&&(a.preventDefault(),m(b,38===a.keyCode?b.step:-b.step))}function k(b){t.killEvent(b),l(b);var c=b.data;if(!c.disabled&&b.which<=1){var d=a(b.target).hasClass(r.up)?c.step:-c.step;c.timer=t.startTimer(c.timer,300,function(){c.timer=t.startTimer(c.timer,125,function(){m(c,d,!1)},!0)}),m(c,d),u.on([s.touchEnd,s.mouseUp].join(" "),c,l)}}function l(a){t.killEvent(a);var b=a.data;t.clearTimer(b.timer,!0),u.off(s.namespace)}function m(b,c){var d=parseFloat(b.$el.val()),e=c;"undefined"===a.type(d)||isNaN(d)?e=b.min!==!1?b.min:0:b.min!==!1&&d<b.min?e=b.min:e+=d;var f=(e-b.min)%b.step;0!==f&&(e-=f),b.min!==!1&&e<b.min&&(e=b.min),b.max!==!1&&e>b.max&&(e-=b.step),e!==d&&(e=o(e,b.digits),b.$el.val(e).trigger(s.raw.change))}function n(a){var b=String(a);return b.indexOf(".")>-1?b.length-b.indexOf(".")-1:0}function o(a,b){var c=Math.pow(10,b);return Math.round(a*c)/c}var p=b.Plugin("number",{widget:!0,defaults:{customClass:"",labels:{up:"Up",down:"Down"},theme:"fs-light"},classes:["arrow","up","down","disabled","focus"],methods:{_setup:c,_construct:d,_destruct:e,enable:f,disable:g}}),q=p.classes,r=q.raw,s=p.events,t=p.functions,u=null});