$(document).ready(function () {
    if (screen.width <= 767) {
    	$('.hidegrid').hide();
    		$('.hide-xs-screen').show();
    }
    else {
    	$('.hidegrid').show();
    		$('.hide-xs-screen').hide();
    }

    $(window).resize(function() {
  		if ($(this).width() <= 767) {
    		$('.hidegrid').hide();
    		$('.hide-xs-screen').show();

  		} else {
    		$('.hidegrid').show();
    		$('.hide-xs-screen').hide();
    	}
	});
  $('.nav-button').click(function(){
	$('body').toggleClass('nav-open');
  });
  
  $(document).on("scroll", function(){
		if($(document).scrollTop() > 86){
		  $("#banner").addClass("shrink");
		  $("#banner").addClass("fixed-top");
		  $('#banner').removeClass('bg-transparent');
		}
		else
		{
		$("#banner").removeClass("shrink");
		$("#banner").addClass("fade-out");
		  $("#banner").removeClass("fixed-top");
		 $('#banner').addClass('bg-transparent');
		 // $(".navbar").fadeIn(3000);
		}
	});
  $('.text, .burger').click(function() {
  	$(".text").hide();
  	$(".burger").hide();
  })
  $('.text-menu, .burger2').click(function() {
  	$(".text").show();
  	$(".burger").show();
  });

  $('#click-one').on('click', function() {
  	if ($('#one').hasClass("show")) {
		 $('#fa-one.fa').addClass('fa-plus');
	    $('#fa-one.fa.fa').removeClass('fa-minus');
	}else{
	    $('#fa-one.fa.fa').removeClass('fa-plus');
	    $('#fa-one.fa.fa').addClass('fa-minus');
	     $('#fa-two.fa').addClass('fa-plus');
	    $('#fa-two.fa').removeClass('fa-minus');
	      $('#fa-three.fa').addClass('fa-plus');
	    $('#fa-three.fa').removeClass('fa-minus');
	}
  });
  $('#click-two').on('click', function() {
  	if ($('#two').hasClass("show")) {
		 $('#fa-two.fa').addClass('fa-plus');
	    $('#fa-two.fa').removeClass('fa-minus');
	}else{
	    $('#fa-two.fa').removeClass('fa-plus');
	    $('#fa-two.fa').addClass('fa-minus');
	    $('#fa-one.fa').addClass('fa-plus');
	    $('#fa-one.fa.fa').removeClass('fa-minus');
	     $('#fa-three.fa').addClass('fa-plus');
	    $('#fa-three.fa').removeClass('fa-minus');
	}
  });
  $('#click-three').on('click', function() {
  	if ($('#three').hasClass("show")) {
		 $('#fa-three.fa').addClass('fa-plus');
	    $('#fa-three.fa').removeClass('fa-minus');
	}else{
	    $('#fa-three.fa').removeClass('fa-plus');
	    $('#fa-three.fa').addClass('fa-minus');
	    $('#fa-one.fa').addClass('fa-plus');
	    $('#fa-one.fa.fa').removeClass('fa-minus');
	    $('#fa-two.fa').addClass('fa-plus');
	    $('#fa-two.fa').removeClass('fa-minus');
	}
  });
  $('#click-popular').on('click', function() {
  	if ($('#popular').hasClass("show")) {
		 $('#fa-popular.fa').addClass('fa-plus');
	    $('#fa-popular.fa').removeClass('fa-minus');
	}else{
	     $('#fa-popular.fa').removeClass('fa-plus');
	    $('#fa-popular.fa').addClass('fa-minus');
	}
  });
  if($(document).scrollTop() > 86){
		  $("#banner").addClass("shrink");
		  $("#banner").addClass("fixed-top");
		  $('#banner').removeClass('bg-transparent');
		}
		else
		{
		$("#banner").removeClass("shrink");
		$("#banner").addClass("fade-out");
		  $("#banner").removeClass("fixed-top");
		 $('#banner').addClass('bg-transparent');
		 // $(".navbar").fadeIn(3000);
		}
});