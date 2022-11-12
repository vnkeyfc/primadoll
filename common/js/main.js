// Custom script
(function (window) {
	
	function unwrapTransTag(){
		var transTags = Object.values(document.getElementsByTagName('trans'));
		
		for (var i = 0; i < transTags.length; i++){
			var trans = transTags[i];
			trans.replaceWith(trans.firstChild);
		}
	}
	
	function init(){
		unwrapTransTag();
	}
	
	
	document.addEventListener("DOMContentLoaded", init);
	
}(window))


//読み込みスクリプト

    $(window).load(function(){
		$('.load_bg').addClass('load_bg_fade');
    });

    $(window).load(function(){
		$('#wrapper').addClass('fade');
    });

    $(window).load(function(){
		$('.contents_teaser_top').addClass('top_movie');
    });

    $(window).load(function(){
		$('.contents_teaser_center').addClass('top_movie');
    });

    $(window).load(function(){
		$('.contents_teaser_bottom').addClass('bottom_movie');
    });



//モーダルウィンドウ
/*
$(function(){
	$('#layer_board_area').layerBoard({
		delayTime: 100,		//表示までの待ち時間
		fadeTime : 600,		//表示開始から表示しきるまでの時間
		alpha : 1,	//背景レイヤーの透明度
		limitMin : 10,		//何分経過後に再度表示するか/分（0で再表示なし）
		easing: 'linear',		//イージング
		limitCookie : 0	,	//cookie保存期間/日（0で開くたび毎回表示される）
		countCookie : 1000	//何回目のアクセスまで適用するか(cookie保存期間でリセット)
	});
})
*/ 

$(window).load(function(){
	$('.white_fadein').addClass('load_bg_fade');
});
	

//桜

$("#wrapper").snowfall({
	flakeCount :2,
	flakeColor :'#ffffff',
	flakeIndex : 99,
	maxSpeed : 5,
	minSpeed : 1,
	maxSize  : 30,
	minSize  : 10,
	image : 'common/image/sakura_hanabira1.png'
});

$("#wrapper").snowfall({
	flakeCount :2,
	flakeColor :'#ffffff',
	flakeIndex : 99,
	maxSpeed : 5,
	minSpeed : 1,
	maxSize  : 30,
	minSize  : 10,
	image : 'common/image/sakura_hanabira2.png'
});

$("#wrapper").snowfall({
	flakeCount :2,
	flakeColor :'#ffffff',
	flakeIndex : 99,
	maxSpeed : 5,
	minSpeed : 1,
	maxSize  : 30,
	minSize  : 10,
	image : 'common/image/sakura_hanabira3.png'
});
	
	
//背景切り替え用
//$(window).load(function(){
//  $(".one").each(function(i, elem){
//    var one = $(elem).offset().top;
//    $(window).on("load scroll resize", function(){
//      var two = $(window).height();
//      var three = $(window).scrollTop();
//      var showClass = "show";
//      var timing = 200; // 500px, add to css
//      if (three >= one - two + timing){
//        $(elem).addClass(showClass);
//      } else {
//        $(elem).removeClass(showClass);
//      }
//    });
//  });
//});