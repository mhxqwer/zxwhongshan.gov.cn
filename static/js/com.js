// JavaScript Document
$(function(){
	$(".pic_con").slide({titCell:".num li", mainCell:".pic",interTime:4000,effect:"fold", autoPlay:true,trigger:"click"});
        $(".pic_con").slide({titCell:".num li", mainCell:".txt ul",interTime:4000,effect:"fold", autoPlay:true,trigger:"click"});
        $(".hsfc_con").slide({titCell:".num li", mainCell:".pic",effect:"fold", autoPlay:true,trigger:"click",startFun:function(i){$(".hsfc_con .txt li").eq(i).animate({"bottom":0}).siblings().animate({"bottom":-30});}});
	$(".pic_con1").slide({titCell:".num li", mainCell:".pic",effect:"fold", autoPlay:true,trigger:"click",startFun:function(i){$(".pic_con1 .txt li").eq(i).animate({"bottom":0}).siblings().animate({"bottom":-30});}});
	$(".pic_con2").slide({titCell:".num li", mainCell:".pic",effect:"fold", autoPlay:true,trigger:"click"});
	$(".pic_list1").slide({mainCell:"ul",autoPlay:true,effect:"leftMarquee",vis:5,interTime:50,trigger:"click"});
	$(".wsbs_list3").slide({mainCell:"ul",autoPlay:false,effect:"leftLoop",pnLoop:false,vis:5,interTime:50,trigger:"click"});
	//$(".ban").slide({mainCell:".bd ul",autoPage:true,effect:"leftLoop",pnLoop:true,vis:1});
$(".ban").slide({mainCell:".bd ul",autoPage:true,effect:"fold",pnLoop:true,vis:1,autoPlay:true,interTime:4000});
	$(".con1_r").slide({mainCell:".bd ul",autoPlay:true});
        $("#tid0").slide({mainCell:".ulWrap",autoPlay:false,effect:"leftLoop",trigger:"click",prevCell:".prev",nextCell:".next"});
	//$("#tid0").slide({mainCell:".ulWrap",autoPlay:false,effect:"leftLoop",pnLoop:false,trigger:"click"});
	$(".zjhs_list").slide({mainCell:"ul",autoPlay:false,effect:"leftLoop",pnLoop:false,vis:6,interTime:800,trigger:"click"});
	$(".xwzx_con").slide({mainCell:"ul",autoPlay:true,effect:"topMarquee",vis:10,interTime:50,trigger:"click",flag:true,extra:{height:360}});
	$(".zwgk_tit1").slide({mainCell:"ul",autoPlay:false,effect:"leftLoop",pnLoop:false,vis:4,interTime:800,trigger:"click"});
	function b_hover(selector,even){
		even=even?even:'hover';
		$(selector).on(even,function(){
            var index=$(this).index();
			$(this).addClass("on").siblings("li").removeClass("on");
			$(this).parents(".tit_hov,.tit_click").next().children("[tid="+index+"]").stop(true,true).show().siblings().hide();
        });
	}
	b_hover(".tit_hov li");
	b_hover(".tit_click li","click");
	
	function a_more(selector){
		$(selector).hover(function(){
			var str = $(this).attr("href");
			$(this).parent().parent().next().children().attr("href",str);
		});
	}
	a_more(".a_more li a");
	
	$(".sb_list1 li h3").click(function(){
		$(this).next().slideDown();
		$(this).parent().addClass("on").siblings().removeClass("on");
		$(this).parent().siblings().find("ul").slideUp();
	})
	
	$(".sb_list li h3").click(function(){
		//$(this).next().slideDown();
		//$(this).parent().addClass("on").siblings().removeClass("on");
		//$(this).parent().siblings().find(".sb_con1").slideUp();
	})
	$(".ss_list1 li:last-child").css("border-bottom-width",0)
	$(".list2 li").on('mouseover',function(){
		$(this).css('z-index','2');
	 }); 
	 $(".list2 li").on('mouseout',function(){
		 $(this).css('z-index','0');
	 });
	 $(".tcc_tit").on("click",function(){
		 var t_c=$(".tcc_con2").height()/2;
		 $(".tcc_con2").css("margin-top",-t_c).slideToggle();
	})
	$(".close").click(function(){
		$(".tcc_con2").slideToggle();
	})
        $(".list7 li").mouseenter(function(){
		$(".list7 li").removeClass("on");
		$(this).addClass("on");
		var data_link = $(this).attr("data-link");
		$(".list7 img").removeClass("on");
		$(".list7 img[data-link='"+data_link+"']").addClass("on");
	})
})