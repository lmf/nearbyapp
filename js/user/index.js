//用户中心首页
'use strict';

$('.form-item input').bind('focus' , function(e){
                        
    $('div.input-box').css('border-color','#ccc');
    
    $(e.currentTarget).parent().css('border-color','rgba(82,155,234,255)');
});

/*$('#user ')*/

$('.login').on('tap', function(e){
	var username = $('#login_account').val();
	var pwd = $('#login_password').val();
	$.ajax('http://nearbyman.duapp.com/login', {
		/*url: 'http://my.nearby.com:18080/login',*/
		crossDomain: true,
		/*xhrFields: {  
            withCredentials: true  
        }, */ 
		data: {
			name: username,
			pwd: pwd
		},
		type: 'GET',
		dataType: 'json',
		success: function(data){
			if(data.status === 0){
				location.href="/";
			}else{
				
			}
		}
	});
});