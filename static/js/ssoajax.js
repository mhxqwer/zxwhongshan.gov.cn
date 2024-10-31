/**  
   刷新页面获取用户信息,已登录则返回用户信息，未登录则放过。
**/
$.refresh=function (){
	$.ajax({
    type: "get",                  
    url: "/SSOAPP/getInfo.do",                   
    dataType: "html",
    xhrFields: {
    	withCredentials: true
    	},
    success: function(result){ 
   	 //alert(result);
   	if(result=="fail"){
        alert("暂不支持该域名!");
    }else if(result!="false"){           	                        	                       	 
            	 var obj = JSON.parse(result); 
            	 if(obj.user_type!=null&& obj.user_type!=""){            		
							if(obj.user_type=="1"){
								 $("#login").html(obj.name);
							}else{
								$("#login").html(obj.legal_name);
							}  
							$("#login").attr("href", "http://zwfw.hubei.gov.cn/s/web/grkj/grkj_index.html");
							$("#zhuce").html('退出');
							$("#zhuce").removeAttr("href");
							
							//点击退出按钮触发退出方法
							$("#zhuce").click(function(){  
								$.logOut();
								//	window.location.reload();
							});
							
						if($("#username").val() == "" || $.trim($("#username").val()).length == 0 || $("#username").val() !=obj.name || $("#username").val() !=obj.legal_name){
							if(obj.user_type=="1"){
								 $("#username").val(obj.name);
							}else{
								$("#username").val(obj.legal_name);	
							}  							
							$("#username").attr("disabled","disabled");
						}
						if($("#phone").val() == "" || $.trim($("#phone").val()).length == 0 || $("#phone").val() !=obj.mobile_phone){
							$("#phone").val(obj.mobile_phone);
							$("#phone").attr("disabled","disabled");
						}
				}	
        }
    }
});
}


/**  
sso登录。如未登录则返回false，然后跳到统一登录页面进行登录，携带appCode和gotoUrl过去。登录成功后返回用户信息即可。
**/

$.ssoLogin=function (){
	$.ajax({
    type: "get",                  
    url: "/SSOAPP/ssologin.do",                  
    dataType: "html",
    //data: $('#form').serialize(),  
    xhrFields: {
    	withCredentials: true
    	},
    success: function(result){ 
          if(result=="false"){ 
        	  //将url中的&符号替换成*号，避免登录完后&符号后的参数被过滤。
        	 var gotoUrl= decodeURIComponent(window.location.href);
        	 var reg = new RegExp("&","g");//g,表示全部替换。
        	 gotoUrl=gotoUrl.replace(reg, "*");
        	 //alert("gotoUrl:===="+gotoUrl);
				window.location.href = '/SSOAPP/uias_login.do?appCode=whzfjyhpt&gotoUrl='+gotoUrl;
             }else if(result=="fail"){
                 alert("暂不支持该域名!");
             }else{      	 
            	 var obj = JSON.parse(result);                          
							if(obj.user_type=="1"){
								 $("#login").html(obj.name);
							
							}else{
								$("#login").html(obj.legal_name);
							}  
							$("#login").attr("href", "http://zwfw.hubei.gov.cn/s/web/grkj/grkj_index.html");
							$("#zhuce").html('退出');
							$("#zhuce").removeAttr("href");
							
							//点击退出按钮触发退出方法
							$("#zhuce").click(function(){  
								$.logOut();
							 //	window.location.reload();
							});
							
						if($("#username").val() == "" || $.trim($("#username").val()).length == 0 || $("#username").val() !=obj.name || $("#username").val() !=obj.legal_name){
						
							if(obj.user_type=="1"){
								 $("#username").val(obj.name);
							}else{
								$("#username").val(obj.legal_name);	
							}  							
							$("#username").attr("disabled","disabled");
						}
						if($("#phone").val() == "" || $.trim($("#phone").val()).length == 0 || $("#phone").val() !=obj.mobile_phone){
						
							$("#phone").val(obj.mobile_phone);
							$("#phone").attr("disabled","disabled");
						}
            }
		},    
		error:function(data,type, err){
		 //console.log("ajax错误类型："+type);
		 //console.log(err);

		}
	});
}

/*
 * 判断是否已登录，返回true则是已登录，反之则未登录。
 */
$.isLogin=function (){
	var isLogin="" ;  
	$.ajax({
		async: false,  //设置同步，让外部方法获取到ajax返回的值。
		type: "get",                  
		url: "/SSOAPP/isLogin.do",
		dataType: "html",
		xhrFields: {
			withCredentials: true
		},
		success: function(result){
			isLogin=result;
		}
	});
	return isLogin;
}

/*
 * 登录退出，返回true则退出成功，反之则失败。
 */
$.logOut=function (){
	$.ajax({
		type: "get",                  
		url: "/SSOAPP/logout.do",                   
		dataType: "html",
		xhrFields: {
			withCredentials: true
    	},    
		success: function(result){ 
			  if(result=="true"){
				 layer.alert("退出成功", function(){
					window.location.reload();
				});
			  }
          },    
          error:function(data,type, err){
			  //console.log("ajax错误类型："+type);
			  //console.log(err);
			  // layer.alert("退出异常!");
		 }
	});
}


/**
 * 添加监听事件，当通过后退按钮返回时刷新页面，获取登录状态。
 */
	window.addEventListener('pageshow', function (event) {
		if (event.persisted || window.performance &&
		window.performance.navigation.type == 2){
			location.reload();
		}
	},false);

//表单提交前判断是否实名认证，实名则判断是否登陆，未登录需要先登录。
function isNeedLogin(){   	
 if( $("#smfk").attr("class")=="fl cxz"){
 	var result=$.isLogin();
 	if(result=="true"){
 		return true;
 	}else{
 		alert("实名反馈需要先登录");
 		return false;
 	}
 }
}

//页面加载时触发
$(function() {
    $.refresh();
})

//点击登录按钮触发登录方法
 $("#login").click(function(){ 
      $.ssoLogin();
});

function setCookie(name, value, days) {
	//Cookie.set(name, value, days);
	var expdate = new Date();   //初始化时间
	expdate.setTime(expdate.getTime() + days * 24 * 60 * 60 * 1000);   //时间
	document.cookie = name + "=" + value + ";expires=" + expdate.toGMTString() + ";path=/;domain=wuhan.gov.cn";
}

function getCookie(cname) {
	// return Cookie.get(cname);
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i].trim();
		if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	}
	return "";
}

function getUUID() { // 获取唯一值
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}