//程序的初始化任务
'use strict';
define([
	'backbone',
	'js/router'
], 
function(
	Backbone,
	Router
){
	
	return {
		initialize: function(){
			window.nearby = new Router();
			Backbone.history.start();
			//window.initMap = this.initMap;
			//require(['http://api.map.baidu.com/api?v=1.5&ak=HERRLhQbQAbGB4RYFCkqdclg&callback=initMap']);
		},

		
	}
})