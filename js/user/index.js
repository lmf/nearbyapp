//用户中心首页
'use strict';

$('div.index').css({'margin-top':window.innerHeight-$('div.index').height()-30+'px'/*,'position':'absolute'*/});

$('#login input').bind('focus' , function(e){
                        
    $('div.input-box').css('border-color','#ccc');
    
    $(e.currentTarget).parent().css('border-color','rgba(82,155,234,255)');
});

$('#login .check').on('tap', function(e){
	$.ajax({
		
	})
});