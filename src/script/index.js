$(function(){
	// 项目轮播
	
	autoplay();
	var li=$('li.item');
	var len=li.length;
	$('div.slide').on("mouseover",function(){
		stopplay();		
	});
	$('div.slide').on("mouseleave",function(){
		autoplay();
	});
	$("li.dot").click(function(){
		scroll($(this).index());		
	});
	$('li.item').click(function(){
			scroll($(this).index());		
	});
	$('div.prev').click(function(){
		var k=$(this).parents("div.slide").
		find("li.banner-active").index();
		if(k==0){
			scroll(len-1);
		}else{
			scroll(k-1);
		};								
	});
	$('div.next').click(function(){
		var j=$(this).parents("div.slide").
		find("li.banner-active").index();
		if(j==len-1){
			scroll(0);
		}else{
			scroll(j+1);
		}								
	});
	function autoplay(){
		clock=setInterval(function(){
			$('div.next').click();
		},3000);
	};
	function stopplay(){
		clearInterval(clock);
	};
	

	// 轮播函数
	function scroll(n){		
		$('li.item').removeClass('banner-active banner-prev banner-next').addClass('banner-hide');

		$('li.item').eq(n).removeClass('banner-hide').addClass('banner-active');
		$('li.dot').removeClass('dot-active').eq(n).addClass('dot-active');
		if(n==0){
			$('li.item').eq(len-1).removeClass('banner-hide').addClass('banner-prev');			
		}else{
			$('li.item').eq(n-1).removeClass('banner-hide').addClass('banner-prev');
		};
		if(n==len-1){
			$('li.item').eq(0).removeClass('banner-hide').addClass('banner-next');
		}else{
			$('li.item').eq(n+1).removeClass('banner-hide').addClass('banner-next');
		};						
	 };


 // 技能进度条
	$("ul").on("mouseover",function(){
		$(this).find("div.inside").addClass("show");
	});

	$("li").click(function(){
		$(this).find('div.inside').removeClass('show');
	});

// 返回头部
$(window).on("scroll",function(){
	returnTop();
});

function returnTop(){
	var $scroll;

	if(document.body.scrollTop){
		$scroll=$('body').scrollTop();

	}else{
		$scroll=document.documentElement.scrollTop;
	};
	if($scroll>200){
		$('#returnTop').show();
	}else{
		$('#returnTop').hide();
	};

	
}




				
});