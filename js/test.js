 <script type="text/javascript">
          
        /*document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
            var startDate = new Date("July 19, 2013 8:00:00");  
            var endDate = new Date("July 19, 2013 18:00:00");  
            var notes = "Arrive on time, don't want to miss out (from Android)";  
            var title = "PhoneGap Day";  
            var location = "Portland, OR";  
            var notes = "Arrive on time, don't want to miss out!";  
            var success = function(message) {  
                var button = document.createElement('div');
                button.innerText = "success";
                document.body.appendChild(button);
                alert('success'); 
            };  
            var error = function(message) { 
                var button = document.createElement('div');
                button.innerText = "error";
                document.body.appendChild(button); 
                alert('error');
            };  
            echoPlugin.createEvent(title, location, notes, startDate, endDate, success, error);*/
            /*setTimeout(function(){
                var map = new BMap.Map("main");          // 创建地图实例  
                var point = new BMap.Point(116.404, 39.915);  // 创建点坐标  
                map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别 
            },3000);
            
        }*/
       
      /*  function onSuccess(contacts) {
        // 显示所有联系人的地址信息
            for( var i in contacts){
                console.log(i+" "+contacts[i]);
            }
            
            for (var i=0; i<contacts.length; i++) {
                for (var j=0; j<contacts[i].addresses.length; j++) {
                    alert("Pref: " + contacts[i].addresses[j].pref + "\n" +
                        "Type: " + contacts[i].addresses[j].type + "\n" +
                        "Formatted: " + contacts[i].addresses[j].formatted + "\n" +
                        "Street Address: "  + contacts[i].addresses[j].streetAddress + "\n" +
                        "Locality: "  + contacts[i].addresses[j].locality + "\n" +
                        "Region: "  + contacts[i].addresses[j].region + "\n" +
                        "Postal Code: "  + contacts[i].addresses[j].postalCode + "\n" +
                        "Country: "  + contacts[i].addresses[j].country);
                }
            }
        }
        function onError() {
            alert('onError!');
        }*/
          /*  var pictureSource;      //图片来源
            var destinationType;        //设置返回值的格式
    
    // 等待PhoneGap连接设备
    document.addEventListener("deviceready",onDeviceReady,false);
    
    // PhoneGap准备就绪，可以使用！
    function onDeviceReady() {
        pictureSource=navigator.camera.PictureSourceType;
        destinationType=navigator.camera.DestinationType;
    }
    
    // 当成功获得一张照片的Base64编码数据后被调用
    function onPhotoDataSuccess(imageData) {
    
        // 取消注释以查看Base64编码的图像数据
        // console.log(imageData);
        // 获取图像句柄
        
        var smallImage = document.getElementById('smallImage');
             
        // 取消隐藏的图像元素
        smallImage.style.display = 'block';
        
        // 显示拍摄的照片
        // 使用内嵌CSS规则来缩放图片
        smallImage.src = "data:image/jpeg;base64," + imageData;
    }
    // 当成功得到一张照片的URI后被调用
   function onPhotoURISuccess(imageURI) {
    
        // 取消注释以查看图片文件的URI
        // console.log(imageURI);
        // 获取图片句柄
        if (imageURI.substring(0,21)=="content://com.android") {
          photo_split=imageURI.split("%3A");
          imageURI="content://media/external/images/media/"+photo_split[1];
        }
        alert(imageURI);
        var largeImage = document.getElementById('largeImage');
         
        // 取消隐藏的图像元素
        largeImage.style.display = 'block';
    
        // 显示拍摄的照片
        // 使用内嵌CSS规则来缩放图片
        largeImage.src = imageURI;
    }
       
   // “Capture Photo”按钮点击事件触发函数
   function capturePhoto() {

        // 使用设备上的摄像头拍照，并获得Base64编码字符串格式的图像
        navigator.camera.getPicture(onPhotoDataSuccess, onFail, { 
            quality: 50 ,
            destinationType: Camera.DestinationType.DATA_URL,
            encodingType : Camera.EncodingType.JPEG,
            sourceType : Camera.PictureSourceType.CAMERA
        });
   }
   
   // “Capture Editable Photo”按钮点击事件触发函数
   function capturePhotoEdit() {

        // 使用设备上的摄像头拍照，并获得Base64编码字符串格式的可编辑图像
        navigator.camera.getPicture(onPhotoDataSuccess, onFail, { 
            quality: 20, 
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType : Camera.PictureSourceType.CAMERA,
            encodingType : Camera.EncodingType.JPEG,
            allowEdit: true 
        });
   }
    function getPhoto(source) {
   
        // 从设定的来源处获取图像文件URI
        navigator.camera.getPicture(onPhotoURISuccess, onFail, { 
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: source 
        });
   }
// 当有错误发生时触发此函数
   function onFail(mesage) {
        alert('Failed because: ' + message);
   }
           // function showCount(div){alert($(div).data('counter'));}
           function showCustomHtmlSheet() { $("#afui").actionsheet('<a >Back</a><a onclick="alert(\'hi\');" >Show Alert 3</a><a onclick="alert(\'goodbye\');">Show Alert 4</a>'); }
           function showPopup1() { $("#afui").popup("I'm replacing an alert box"); }
           function showPopup2() { $("#afui").popup({ title: "Alert! Alert!", message: "This is a test of the emergency alert system!! Don't PANIC!", cancelText: "Cancel me", cancelCallback: function () { console.log("cancelled"); }, doneText: "I'm done!", doneCallback: function () { console.log("Done for!"); }, cancelOnly: false }); }
           if (!((window.DocumentTouch && document instanceof DocumentTouch) || 'ontouchstart' in window)) { var script = document.createElement("script"); script.src = "plugins/af.desktopBrowsers.js"; var tag = $("head").append(script); }
//myScroller = $("#main").scroller();
            //myScroller.addPullToRefresh();
            /*var scroller = $("index").scroller({
                verticalScroll:false,
                horizontalScroll:false
            });
            scroller.disable();*/
            