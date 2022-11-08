// JavaScript Document

$(document).ready(function(){

	$("#jquery_jplayer_1").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/11_01.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/11_01.m4a",	/* m4a (AAC) */
				oga: "common/voice/11_01.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		wmode: "window"
	});

	$("#jquery_jplayer_2").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/11_02.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/11_02.m4a",	/* m4a (AAC) */
				oga: "common/voice/11_02.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_2",
		wmode: "window"
	});

	$("#jquery_jplayer_3").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/11_03.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/11_03.m4a",	/* m4a (AAC) */
				oga: "common/voice/11_03.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_3",
		wmode: "window"
	});

	$("#jquery_jplayer_4").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/11_04.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/11_04.m4a",	/* m4a (AAC) */
				oga: "common/voice/11_04.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_4",
		wmode: "window"
	});


	$("#jquery_jplayer_5").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/11_05.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/11_05.m4a",	/* m4a (AAC) */
				oga: "common/voice/11_05.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_5",
		wmode: "window"
	});


	$("#jquery_jplayer_6").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/11_06.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/11_06.m4a",	/* m4a (AAC) */
				oga: "common/voice/11_06.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_6",
		wmode: "window"
	});

	$("#jquery_jplayer_7").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/11_07.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/11_07.m4a",	/* m4a (AAC) */
				oga: "common/voice/11_07.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_7",
		wmode: "window"
	});

	$("#jquery_jplayer_8").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/11_08.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/11_08.m4a",	/* m4a (AAC) */
				oga: "common/voice/11_08.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_8",
		wmode: "window"
	});

	$("#jquery_jplayer_9").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/11_09.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/11_09.m4a",	/* m4a (AAC) */
				oga: "common/voice/11_09.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_9",
		wmode: "window"
	});


	$("#jquery_jplayer_10").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/11_10.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/11_10.m4a",	/* m4a (AAC) */
				oga: "common/voice/11_10.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_10",
		wmode: "window"
	});


	$("#jquery_jplayer_11").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/11_11.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/11_11.m4a",	/* m4a (AAC) */
				oga: "common/voice/11_11.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_11",
		wmode: "window"
	});


	$("#jquery_jplayer_12").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/11_12.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/11_12.m4a",	/* m4a (AAC) */
				oga: "common/voice/11_12.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_12",
		wmode: "window"
	});


	$("#jquery_jplayer_13").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/11_13.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/11_13.m4a",	/* m4a (AAC) */
				oga: "common/voice/11_13.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_13",
		wmode: "window"
	});


	$("#jquery_jplayer_14").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/11_14.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/11_14.m4a",	/* m4a (AAC) */
				oga: "common/voice/11_14.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_14",
		wmode: "window"
	});


	$("#jquery_jplayer_15").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/11_15.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/11_15.m4a",	/* m4a (AAC) */
				oga: "common/voice/11_15.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_15",
		wmode: "window"
	});



	$("#jquery_jplayer_16").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/11_16.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/11_16.m4a",	/* m4a (AAC) */
				oga: "common/voice/11_16.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_16",
		wmode: "window"
	});



	$("#jquery_jplayer_17").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/11_17.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/11_17.m4a",	/* m4a (AAC) */
				oga: "common/voice/11_17.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_17",
		wmode: "window"
	});

	$("#jquery_jplayer_18").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/11_18.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/11_18.m4a",	/* m4a (AAC) */
				oga: "common/voice/11_18.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_18",
		wmode: "window"
	});

	$("#jquery_jplayer_19").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/11_19.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/11_19.m4a",	/* m4a (AAC) */
				oga: "common/voice/11_19.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_19",
		wmode: "window"
	});


	$("#jquery_jplayer_20").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/11_20.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/11_20.m4a",	/* m4a (AAC) */
				oga: "common/voice/11_20.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_20",
		wmode: "window"
	});

	$("#jquery_jplayer_21").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/11_21.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/11_21.m4a",	/* m4a (AAC) */
				oga: "common/voice/11_21.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_21",
		wmode: "window"
	});


	$("#jquery_jplayer_22").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/11_22.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/11_22.m4a",	/* m4a (AAC) */
				oga: "common/voice/11_22.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_22",
		wmode: "window"
	});



	$("#jquery_jplayer_23").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/11_23.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/11_23.m4a",	/* m4a (AAC) */
				oga: "common/voice/11_23.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_23",
		wmode: "window"
	});



	$("#jquery_jplayer_24").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/11_24.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/11_24.m4a",	/* m4a (AAC) */
				oga: "common/voice/11_24.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_24",
		wmode: "window"
	});



	$("#jquery_jplayer_25").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/11_25.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/11_25.m4a",	/* m4a (AAC) */
				oga: "common/voice/11_25.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_25",
		wmode: "window"
	});


	$("#jquery_jplayer_26").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/11_26.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/11_26.m4a",	/* m4a (AAC) */
				oga: "common/voice/11_26.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_26",
		wmode: "window"
	});


	$("#jquery_jplayer_27").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/11_27.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/11_27.m4a",	/* m4a (AAC) */
				oga: "common/voice/11_27.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_27",
		wmode: "window"
	});



	$("#jquery_jplayer_28").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/11_28.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/11_28.m4a",	/* m4a (AAC) */
				oga: "common/voice/11_28.ogg",	/* oga */
			});
		},
		play: function() { // To avoid both jPlayers playing together.
			$(this).jPlayer("pauseOthers");
		},
		repeat: function(event) { // Override the default jPlayer repeat event handler
			if(event.jPlayer.options.loop) {
				$(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
				$(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
					$(this).jPlayer("play");
				});
			} 
		},
		swfPath: "js/jplayer",
		supplied: "mp3, m4a, oga",
		cssSelectorAncestor: "#jp_container_28",
		wmode: "window"
	});



});


