define(function(){
	return {
		indexAction: function(){
			window.initMap = this.initMap;
			require(['http://api.map.baidu.com/api?v=1.5&ak=HERRLhQbQAbGB4RYFCkqdclg&callback=initMap']);
		},
		initMap: function(){
			
			var map = new BMap.Map("map");          // 创建地图实例 
            $('#map').css('position','absolute');

            var point = new BMap.Point(116.404, 39.915);  // 创建点坐标  
            map.centerAndZoom(point, 15);
                        
		}
	}
})