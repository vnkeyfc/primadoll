// JavaScript Document

$(document).ready(function(){

	$("#jquery_jplayer_1").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
                mp3: "common/voice/22_01.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/22_01.m4a",	/* m4a (AAC) */
				oga: "common/voice/22_01.ogg",	/* oga */
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
                mp3: "common/voice/22_02.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/22_02.m4a",	/* m4a (AAC) */
				oga: "common/voice/22_02.ogg",	/* oga */
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
                mp3: "common/voice/22_03.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/22_03.m4a",	/* m4a (AAC) */
				oga: "common/voice/22_03.ogg",	/* oga */
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
                mp3: "common/voice/22_04.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/22_04.m4a",	/* m4a (AAC) */
				oga: "common/voice/22_04.ogg",	/* oga */
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
                mp3: "common/voice/22_05.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/22_05.m4a",	/* m4a (AAC) */
				oga: "common/voice/22_05.ogg",	/* oga */
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
                mp3: "common/voice/22_06.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/22_06.m4a",	/* m4a (AAC) */
				oga: "common/voice/22_06.ogg",	/* oga */
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
                mp3: "common/voice/22_07.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/22_07.m4a",	/* m4a (AAC) */
				oga: "common/voice/22_07.ogg",	/* oga */
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
                mp3: "common/voice/22_08.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/22_08.m4a",	/* m4a (AAC) */
				oga: "common/voice/22_08.ogg",	/* oga */
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
                mp3: "common/voice/22_09.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/22_09.m4a",	/* m4a (AAC) */
				oga: "common/voice/22_09.ogg",	/* oga */
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
                mp3: "common/voice/22_10.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/22_10.m4a",	/* m4a (AAC) */
				oga: "common/voice/22_10.ogg",	/* oga */
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
                mp3: "common/voice/22_11.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/22_11.m4a",	/* m4a (AAC) */
				oga: "common/voice/22_11.ogg",	/* oga */
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
                mp3: "common/voice/22_12.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/22_12.m4a",	/* m4a (AAC) */
				oga: "common/voice/22_12.ogg",	/* oga */
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
                mp3: "common/voice/22_13.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/22_13.m4a",	/* m4a (AAC) */
				oga: "common/voice/22_13.ogg",	/* oga */
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
                mp3: "common/voice/22_14.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/22_14.m4a",	/* m4a (AAC) */
				oga: "common/voice/22_14.ogg",	/* oga */
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
                mp3: "common/voice/22_15.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/22_15.m4a",	/* m4a (AAC) */
				oga: "common/voice/22_15.ogg",	/* oga */
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
                mp3: "common/voice/22_16.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/22_16.m4a",	/* m4a (AAC) */
				oga: "common/voice/22_16.ogg",	/* oga */
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
                mp3: "common/voice/22_17.mp3", // MP3 オーディオ・ファイルへのパス
				m4a: "common/voice/22_17.m4a",	/* m4a (AAC) */
				oga: "common/voice/22_17.ogg",	/* oga */
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



});


