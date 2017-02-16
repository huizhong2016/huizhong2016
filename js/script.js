//导航栏
$('.navigation li,.navigation dd').mouseenter(function(){
	if(this.nodeName=="DD")
	{
		
	}
	$(this).children(".chanpin").show();
});
$('.navigation li,.navigation dd').mouseleave(function(){
	$(this).children(".chanpin").hide();
});
//$('.navigation li,.navigation dd').each(function(){
//	if($(this).children(".chanpin").hasClass(".chanpin"))
//	{
//		$(this).mouseenter(function(){
//			if(this.nodeName=="DD")
//			{
//				$(this).addClass("chanpinCur");
//			}
//			$(this).children(".chanpin").show();
//		})
//		$(this).mouseleave(function(){
//			if(this.nodeName=="DD")
//			{
//				$(this).removeClass("chanpinCur");
//			}
//			$(this).children(".chanpin").hide();
//		});
//	}
//});

//幻灯片
var fadeObj={
	flashNode:$('#flash'),
	lisNode:$("#flash li"),
	spansNode:$("#flash .flash_btn span"),
	leftNode:$('#flash_left'),
	rightNode:$('#flash_right'),
	spanCurString:'#flash .flash_btn .current',
	spanCurName:"current",
	fadeInOut:function(oldPos,curPos){
		fadeObj.spansNode.eq(oldPos).removeClass();
		fadeObj.spansNode.eq(curPos).addClass(fadeObj.spanCurName);
		
		fadeObj.lisNode.eq(oldPos).stop(false,true).fadeOut();
		fadeObj.lisNode.eq(curPos).stop(false,true).fadeIn();
	},
	autoDo:null
};
fadeObj.flashNode.hover(
	function(){//移入
		fadeObj.leftNode.show();
		fadeObj.rightNode.show();
		window.clearInterval(fadeObj.autoDo);
	},
	function(){//移出
		fadeObj.leftNode.hide();
		fadeObj.rightNode.hide();
		fadeObj.autoDo=window.setInterval(function(){
			fadeObj.rightNode.click();
		},3000);
	}
);

fadeObj.spansNode.mouseenter(function(){
	if($(this).is("."+fadeObj.spanCurName))
	{
		return;
	}
	
	var oldPos=$(fadeObj.spanCurString).index();
	var curPos=$(this).index();
	
	fadeObj.fadeInOut(oldPos,curPos);
});

fadeObj.rightNode.click(function(){
	var oldPos=$(fadeObj.spanCurString).index();
	var lastPos=fadeObj.spansNode.length-1;
	var curPos=oldPos==lastPos?0:oldPos+1;
	
	fadeObj.fadeInOut(oldPos,curPos);
});
fadeObj.leftNode.click(function(){
	var oldPos=$(fadeObj.spanCurString).index();
	var lastPos=fadeObj.spansNode.length-1;
	var curPos=oldPos==0?lastPos:oldPos-1;
	
	fadeObj.fadeInOut(oldPos,curPos);
});
fadeObj.autoDo=window.setInterval(function(){
	fadeObj.rightNode.click();
},3000);

//四个球
$(".circle_main li").mouseenter(function(){
	if($(this).hasClass("circle_cur"))
		return;//跳出函数
	
	var oldPos=$(".circle_cur").index();//之前位置
	
	$(this).animate({width:"502px"},300,function(){
		$(this).addClass("circle_cur");
	});
	$(".circle_main li").eq(oldPos).animate({width:"167px"},300,function(){
		$(this).removeClass("circle_cur");
	});
});

//关于汇众
$(".content_left").mouseenter(function(){
	$(this).find("img").stop().animate({width:"580px",margin:"-20px 0 0 -20px"},300);
	$(this).find("p").stop().animate({top:0},300);
});
$(".content_left").mouseleave(function(){
	$(this).find("img").stop().animate({width:"491px",margin:"0px 0 0 0px"},300);
	$(this).find("p").stop().animate({top:'241px'},300);
});

//回到顶部
$(window).scroll(function(){
	var winH=$(window).height();//可视窗口高度//等价document.documentElement.clintHeight
	var scrollTop=$(window).scrollTop();//当前滚去了多少高度//document.documentElement.scrollTop
	if(scrollTop<=winH)
	{
		$('#toTop').hide();
	}
	else
	{
		$('#toTop').show();
	}
});
$('#toTop,.totop').click(function(){
	//$("body").animate({scrollTop:0},100);//支持非IE非FF
	//$("html").animate({scrollTop:0},100);//支持IE和FF
	$("body,html").animate({scrollTop:0},100);
})

//关于汇众左右移动
$('.about_right').click(function(){
	var firstLi=$('.content_right li:first');
	$('.content_right').append(firstLi);
});
$('.about_left').click(function(){
	var lastLi=$('.content_right li:last');
	$('.content_right').prepend(lastLi);
});

//合作伙伴左右移动
var liW=138;
$('.friend_left').click(function(){
	$('.friend_content li:last').css('margin-left',-liW+'px');
	$('.friend_content ul').prepend($('.friend_content li:last'));
	$('.friend_content li:first').animate({marginLeft:'0px'},200);
});
$('.friend_right').click(function(){
	$('.friend_content li:first').animate({marginLeft:-liW+'px'},200,function(){
		   $('.friend_content ul').append($(this));
		   $(this).css('margin-left','0px');
	 });
});

/*产品listlis*/
$(".list_title li").click(function(){
	$(this).addClass("current").siblings(".current").removeClass("current");
	var className=$(this).attr("data");//alert(this.getAttribute("data"));
	if(className=="*")
		$("#listlis ul").children(className).slideDown();
	else
	{
		$("#listlis ul").children(className).slideDown();
		$("#listlis ul").children(className).siblings("li:not("+className+")").slideUp();
	}
});

//$('#listlis').isotope({
//	itemSelector: '#listlis  li'
//});
//
//$('.list_title li').click(function(){
//	$(this).addClass('current').siblings('.current').removeClass('current');
//	var dataValue=$(this).attr('data');
//	$('#listlis').isotope({
//		itemSelector: '#listlis li',
//		filter:dataValue
//	});
//});







