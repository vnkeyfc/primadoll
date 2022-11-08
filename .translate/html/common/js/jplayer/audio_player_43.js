// JavaScript Document

$(document).ready(function(){

	$("#jquery_jplayer_1").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/43_01.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/43_01.m4a",	/* m4a (AAC) */
				oga: "common/voice/43_01.ogg",	/* oga */
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
                mp3: "common/voice/43_02.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/43_02.m4a",	/* m4a (AAC) */
				oga: "common/voice/43_02.ogg",	/* oga */
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
                mp3: "common/voice/43_03.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/43_03.m4a",	/* m4a (AAC) */
				oga: "common/voice/43_03.ogg",	/* oga */
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
                mp3: "common/voice/43_04.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/43_04.m4a",	/* m4a (AAC) */
				oga: "common/voice/43_04.ogg",	/* oga */
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
                mp3: "common/voice/43_05.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/43_05.m4a",	/* m4a (AAC) */
				oga: "common/voice/43_05.ogg",	/* oga */
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
                mp3: "common/voice/43_06.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/43_06.m4a",	/* m4a (AAC) */
				oga: "common/voice/43_06.ogg",	/* oga */
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
                mp3: "common/voice/43_07.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/43_07.m4a",	/* m4a (AAC) */
				oga: "common/voice/43_07.ogg",	/* oga */
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


});


