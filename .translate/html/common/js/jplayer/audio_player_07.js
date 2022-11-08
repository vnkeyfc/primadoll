// JavaScript Document

$(document).ready(function(){

	$("#jquery_jplayer_1").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/07_01.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/07_01.m4a",	/* m4a (AAC) */
				oga: "common/voice/07_01.ogg",	/* oga */
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
                mp3: "common/voice/07_02.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/07_02.m4a",	/* m4a (AAC) */
				oga: "common/voice/07_02.ogg",	/* oga */
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
                mp3: "common/voice/07_03.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/07_03.m4a",	/* m4a (AAC) */
				oga: "common/voice/07_03.ogg",	/* oga */
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
                mp3: "common/voice/07_04.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/07_04.m4a",	/* m4a (AAC) */
				oga: "common/voice/07_04.ogg",	/* oga */
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
                mp3: "common/voice/07_05.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/07_05.m4a",	/* m4a (AAC) */
				oga: "common/voice/07_05.ogg",	/* oga */
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
                mp3: "common/voice/07_06.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/07_06.m4a",	/* m4a (AAC) */
				oga: "common/voice/07_06.ogg",	/* oga */
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
                mp3: "common/voice/07_07.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/07_07.m4a",	/* m4a (AAC) */
				oga: "common/voice/07_07.ogg",	/* oga */
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
                mp3: "common/voice/07_08.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/07_08.m4a",	/* m4a (AAC) */
				oga: "common/voice/07_08.ogg",	/* oga */
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
                mp3: "common/voice/07_09.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/07_09.m4a",	/* m4a (AAC) */
				oga: "common/voice/07_09.ogg",	/* oga */
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
                mp3: "common/voice/07_10.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/07_10.m4a",	/* m4a (AAC) */
				oga: "common/voice/07_10.ogg",	/* oga */
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
                mp3: "common/voice/07_11.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/07_11.m4a",	/* m4a (AAC) */
				oga: "common/voice/07_11.ogg",	/* oga */
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
                mp3: "common/voice/07_12.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/07_12.m4a",	/* m4a (AAC) */
				oga: "common/voice/07_12.ogg",	/* oga */
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
                mp3: "common/voice/07_13.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/07_13.m4a",	/* m4a (AAC) */
				oga: "common/voice/07_13.ogg",	/* oga */
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
                mp3: "common/voice/07_14.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/07_14.m4a",	/* m4a (AAC) */
				oga: "common/voice/07_14.ogg",	/* oga */
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
                mp3: "common/voice/07_15.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/07_15.m4a",	/* m4a (AAC) */
				oga: "common/voice/07_15.ogg",	/* oga */
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




});


