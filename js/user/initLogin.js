//检查用户是否已经注册，处于登录状态，信息存在localStorage中
(function(){
	function checkIsLogin(){
		var userInfo = JSON.parse(localStorage['NEARBY_USER'] || '{}');
		if(userInfo && userInfo.uid){
			return true;
		}else{
			return false;
		}
	}
})();