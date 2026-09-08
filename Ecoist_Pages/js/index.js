$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;

	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

  //-------- Active Sticky Js ----------//
  $(".default-header").sticky({topSpacing:0});

 });


 
 setTimeout(showPopUp, 2000);

 function hidePopUp() {
	 document.querySelector('.popUpContainer').classList.add('hidden');
 }
 
 function showPopUp() {
	 document.querySelector('.popUpContainer').classList.remove('hidden');
 } 



 
