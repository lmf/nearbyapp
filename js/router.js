//定义backbone的路由表
'use strict';

define([
	'backbone',
	'js/index/index'
], function (
	backbone,
	index
) {

	var options = {
		routes : {
			'': 'indexAction',
			'main': 'indexAction',
			'(:action)(/*param)': 'doAction',
			
		},
		doAction: function(action, param){
			var self = this;
			require(['js/actions'], function(actions){
				actions.getAction(action, param);
			});
		},
		indexAction: function(){
			index.indexAction();
		}
		
	};


	return Backbone.Router.extend(options);
})