$(function () {
	//大图
	

	
    var $container=$('#pic-container')
    var $pointsDiv=$('#carousel-btn>span')
    var $prev=$('#prev')
    var $next=$('#next')
    var $imgCount=$pointsDiv.length
    var index=0//用index来保存图片的下标
    var moving=false//一开始默认不翻页
	


    var pageWidth=1200
    var time=1000//总时间
    var intervalTime=20//间隔时间
	var i=0
	var time

	$("#pic-container .pic").eq(0).show();
	
  	
  	function fad(next){
  		var morepic
  		var lesspic
  		if(next){
  			lesspic=next?i%5:(i+1)%5
  			morepic=next?(i+1)%5:i%5
  		}else{
  			lesspic=next?(i+1)%5:i%5
  			morepic=next?i%5:(i+1)%5
  		}
	    $("#pic-container .pic").eq(lesspic).fadeOut(1000);
	    $("#pic-container .pic").eq(morepic).fadeIn(1000);
	    i++;
	    
	     //更新圆点
        showbuttons(next)
	  };
	  
	  
  	time = setInterval(function(){
  		fad(true)
  	},3000);

    $('#prev').click(function () {
        fad(false)
    })
    $('#next').click(function () {
        fad(true)
    })
    
    
    
    function showbuttons(next) {
    //    定义一个targetIndex
        var targetIndex=0
        
        if(typeof next=="boolean"){
            if(next){
                 targetIndex=index+1
                if(targetIndex==5){
                    targetIndex=0
                }
            }else{
                targetIndex=index-1
                if(targetIndex==-1){
                    targetIndex=4
                }
            }
        }else{
            targetIndex=next
        }
    //    当list的left值改变时，圆点跟随改变，index的值范围为0-4，当targetIndex为5时，则变为0，当targetIndex为负时则变为4
    //    改变index的class和targetIndex的class
        $pointsDiv.eq(index).removeClass('on')
        $pointsDiv.eq(targetIndex).addClass('on')
    //    更新index
        index=targetIndex


    }
    
    //    点击圆点切换图片
    $pointsDiv.click(function () {
        var targetIndex=$(this).index()
        if(targetIndex!=index) {
            animatePic(targetIndex)
        }
    })
//
//  //开启定时器，自动播放图片
// var intervalId=setInterval(function () {
//      animatePic(false)
//  },3000)
//
//  //当鼠标移入时清除定时器
//  $container.hover(function () {
//
//      clearInterval(intervalId)
//  },function () {
//      intervalId=setInterval(animatePic(false),3000)
//
//  })
//





	var imgsWidth=1200
	//stargoods
	var $carouselWrapper=$('#carousel-wrapper')
	var $wrapper=$('.wrapper')
	var $nextBtn=$('#nextBtn')
	var $prevBtn=$('#prevBtn')
	var $moreBtn=$(' #moreBtn')
	var $lessBtn=$('#lessBtn')
	var $recWrapper=$('#rec-wrapper')
	var $imgCount=$('#carousel-wrapper>ul>li>img').length
	var SHOW_COUNT=5,
		moveCount=0
	
	if($imgCount>SHOW_COUNT){
		$moreBtn.attr('class','visited')
		$nextBtn.attr('class','visited')
	}
	
	$nextBtn.click(function(){
		watchMore(true,$wrapper,$(this))
		canMove($(this))
	})
	
	$prevBtn.click(function(){
		watchMore(false,$wrapper,$(this))
		canMove($(this))
	})
	
	$moreBtn.click(function(){
		watchMore(true,$recWrapper,$(this))
		canMove($(this))
	})
	
	$lessBtn.click(function(){
		watchMore(false,$recWrapper,$(this))
		canMove($(this))
	})
	
	
	function watchMore (next,container,that) {
		var offset=0
    	var time=600//总时间
    	var intervalTime=20//间隔时间
		var intervalId
		
		//判断正负
		offset=next?-imgsWidth:imgsWidth
		
		var intervalOffset=offset/(time/intervalTime)
		
		var currentLeft=container.position().left
		//确定目标值
		var targetLeft=currentLeft+offset
		
		intervalId=setInterval(function(){
			currentLeft +=intervalOffset
			if(currentLeft==targetLeft){
				clearInterval(intervalId)
			}
			container.css('left',currentLeft)
			
			//当图片浏览完了就不能再往后浏览
		if(currentLeft<-1200){
			container.css('left',-1200)
		}else if(currentLeft>0){
			container.css('left',0)
		}
		
		},intervalTime)
		
		
		
		
	}
	//判断还能不能往后浏览,从而更改按钮的状态
	function canMove (that) {
		moveCount++	
		if(moveCount=1){
			that.attr('class','more')
			that.siblings('a').attr('class','visited')
			return
		}
	}

})
