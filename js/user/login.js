/*$('#login').find('a.check').on('tap', function(){
	var username = $('#account').val();
	var pwd = $('#password').val();
	$.ajax({
		//url: 'http://nearbyman.duapp.com/login',
		url: 'http://my.nearby.com:18080/login',
		crossDomain: true,
		xhrFields: {  
            withCredentials: true  
        },  
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
});*/