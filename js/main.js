'use strict';

require.config({
	baseUrl: './',
	/*没有直接放在baseUrl下的module，方便读取*/
	paths: {
		jquery: 'js/lib/jquery/jquery',
		underscore: 'js/lib/underscore/underscore',
		backbone: 'js/lib/backbone/backbone',
		appframework: 'js/lib/jq.appframework',
		appframeworkui: 'js/lib/appframework.ui',
		slidemenu: 'js/plugins/af.slidemenu'
	},

	shim: {
		appframework: {
			deps: [
				'jquery'
			]
		},
		backbone: {
			deps: [
				'jquery',
				'underscore'
			],
			exports: 'Backbone'
		},
		appframeworkui:{
            deps: [
                'appframework'
            ]
        }
	},
});

require(['js/app', 'appframework', 'appframeworkui'], function(app){
	$.ui.launch();
	$.ui.ready(function(){ 
        $("#afui").get(0).className='ios7';      
    });
    app.initialize();
});