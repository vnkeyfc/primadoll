/*
 * ===================================
 *	jquery.layerBoard.js
 *	@auther:kiyoty
 *	@URI:http://www.idea-clippin.com
 *	@create:2012/12/30
 * 	@License:MIT License(X11 License、X License)
 *	@modification:uta
 * ===================================
*/

(function($) {
	$.fn.layerBoard = function(option) {
		var elements = this;
		elements.each(function(){
			option = $.extend({
				delayTime: 200,
				fadeTime : 500,
				alpha : 0.5,
				limitMin : 10,
				easing: 'linear',
				limitCookie : 3	,
				countCookie : 10000
			}, option);

			var limitSec = option.limitMin * 60; //秒数に変換
			// cookieがない場合 --------------------
			if ($.cookie('layerBoardTime') == null || $.cookie('visitCount') == null) {
				LayerBoardFunc ();
				var start = new Date();	// cookieに現在の時間をセット
				$.cookie('layerBoardTime', start.getTime(), { expires: option.limitCookie,path: '/' });
				var visitCount = 1;  //訪問回数を1回に設定
				$.cookie('visitCount', visitCount, { expires: option.limitCookie });
			} else if ($.cookie('visitCount') <= option.countCookie - 1){
			// cookieがある場合 --------------------
				//Cookie"visitCount"の値に1つ足す
				visitCount = $.cookie('visitCount');
				visitCount ++;
				$.cookie('visitCount', visitCount, { expires: option.limitCookie });
				//現在のミリ秒を取得し、秒数に変換
				var now = new Date();
				secDiff = now.getTime() - $.cookie('layerBoardTime');
				secTime = Math.floor( secDiff / 1000);
				//指定時間を経過していた場合は、LayerBoardを表示
				//cookieを削除後、再度cookieに現在のミリ秒をセット
				if (secTime >= limitSec) {
					LayerBoardFunc ();
					$.cookie('layerBoardTime', null, { expires:-1,path: '/' });
					var start = new Date();
					$.cookie('layerBoardTime', start.getTime(), { expires:option.limitCookie,path: '/' });
				}
			}

			// 表示処理 --------------------	
			function LayerBoardFunc () {

			}	
			function LayerBoardFunc () {
				$('#layer_board_area').css('display', 'block');	
				$('.layer_board_bg', elements).show().animate({opacity: 0},0).delay(option.delayTime).animate({opacity: option.alpha},option.fadeTime,function(){
					$('.layer_board', elements).fadeIn(option.fadeTime);			
					//表示した際背景のスクロール禁止
					$('html, body').css('overflow', 'hidden');		
				})				
			}

			// 非表示処理 --------------------
			$('.layer_board_bg', elements).click(function() {			
				$('.layer_board , #layer_board_area', elements).fadeOut(option.fadeTime);
				$(this).fadeOut(option.fadeTime);
				$('#layer_board_area').css('pointer-events', 'none');

				//非表示にした際背景のスクロール許可
				$('html, body').css('overflow', 'auto');
			});

			// .mdl_btn_closeをクリックした時の動作(非表示処理) --------------------
			$('.mdl_btn_close', elements).click(function() {				
				$('.layer_board , #layer_board_area', elements).fadeOut(option.fadeTime);
				$('.layer_board_bg', elements).fadeOut(option.fadeTime);
				$('#layer_board_area').css('pointer-events', 'none');
				
				//非表示にした際背景のスクロール許可
				$('html, body').css('overflow', 'auto');
			});

			// モーダル表示用ボタンの表示処理 --------------------
			$('.layer_board_btn').click(function() {
				$('#layer_board_area').css('display', 'block');			
				$('.layer_board_bg', elements).show().animate({opacity: 0},0).delay(option.delayTime).animate({opacity: option.alpha},option.fadeTime,function(){
					$('.layer_board', elements).fadeIn(option.fadeTime);
					
					//表示した際背景のスクロール禁止
					$('html, body').css('overflow', 'hidden');	

				});
			});

			// 見た目処理(コンテンツが短い場合中央表示) --------------------
			var bg_height = $('.layer_board_bg').outerHeight();
			var layer_bord_height = $('.layer_board').outerHeight();
			if(bg_height + 40 >= layer_bord_height){
				$('.layer_board').addClass('shortLayer');
			}

		});
		return this;	
	};
})( jQuery );
