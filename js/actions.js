//定义各种hash下对应的操作
'use strict';

define([
	
], function(
	
) {
	var actions = {
		'user': 'js/user/index'
	}
	return {
		getAction: function(action, param){
			//return new actions[action](param);
			require([actions[action]]);
		}
	}
});