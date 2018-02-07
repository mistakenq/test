$(function(){
	
	var $topBarshoppingCart=$('#topBarshoppingCart')
	var $shoppingCart=$('#topBarshoppingCart>a')
	var $shoppingsum=$('#shoppingsum')
	//购物车显示隐藏
	$topBarshoppingCart.hover(function(){
		$shoppingsum.css('display','block')
	},function(){
		$shoppingsum.css('display','none')
	})
	
	//导航列的显示隐藏
	$('#link-Nav>ul>li').each(function(){
		$(this).hover(function(){
			$('#item'+($(this).index()+1)).show().animate({height:'300px'})
		},function(){
			$('#item'+($(this).index()+1)).hide().animate({height:'0px'})
		})
	})
	
	//categorylist的显示隐藏
	$('#main-container>#categroy>#categroy-list>li').each(function(){
		$(this).hover(function(){
			$('#tab'+($(this).index()+1)).show()
		},function(){
			$('#tab'+($(this).index()+1)).hide()
		})
	})
	
})