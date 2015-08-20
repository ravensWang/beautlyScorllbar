/*******
*By Ravens
*Date 2015-7-23
*美化滚动条
*dependency jQuery,jQuery Mousewheel 3.1.13
*******/
(function($){//
	var methods = {
		init:function(options){
			var settings = $.extend({
				'w':10
			},options);
			return this.each(function(){
				alert(1);
				var dH = $(this).height(),dW = $(this).width();
				var list = $(this).children();
				var lH = list.height();
				if(dH>=lH) return false;
				$(this).css({'width':dW-settings.w,'padding-right':settings.w+'px'});
				if($(this).css('position') == 'static'){
					$(this).css('position','relative');
				}
				var sO = methods.scroll(),sI = methods.scrollbar();
				sO.append(sI);
				sO.height(dH);
				sI.height(dH/lH*dH);
				$(this).append(sO);
				list.css({'overflow':'hidden','height':dH});
				//侦听鼠标滚轮动作
				list.bind('mousewheel', function(event) {
					event.preventDefault();
					var scrollTop = this.scrollTop;
					this.scrollTop = (scrollTop + ((event.deltaY * event.deltaFactor) * -1));
					sI.css('top',this.scrollTop/lH*dH);
				});
				//侦听鼠标拖动动作
				var tuchIt = false;
				var originY=originTop=0;
				sI.mousedown(function(event){
					event.preventDefault();
					originY = event.pageY;
					originTop = sI.css('top')=='auto'?0:parseInt(sI.css('top').replace('px',''));
					tuchIt = true;
				});
				$(document).mouseup(function(event){
					event.preventDefault();
					tuchIt = false;
				}).mousemove(function(event){
					if(tuchIt){
						event.preventDefault();
						var n = event.pageY - originY;
						if(originTop+n<0){
							var x = 0;
						}else if(originTop+n>dH-sI.height()){
							var x = dH-sI.height()
						}else{
							var x = originTop+n
						}
						sI.css('top',x);
						list.scrollTop(x/(dH-sI.height())*lH);
					}
				});
			});
		},
		clear:function(options){
			var me = this;
			return this.each(function(){
				$(this).find('div.scroll').remove();
				$(this).find('div.scrollbar').remove();
				$(this).children().height('auto');
				$(this).width(options.dw);
				$(this).children().unbind();
			});
		},
		scroll:function(){
			return $('<div class="scroll"></div>');
		},
		scrollbar:function(){
			return $('<div class="scrollbar"></div>');
		}
	}
	$.fn.scorllbar = function(method){
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' + method + ' does not exist on jQuery.scorllbar');
		}
	}
})(jQuery);