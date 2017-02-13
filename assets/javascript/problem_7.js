		function searchBox(){
			var hidden = document.getElementById("searchBox");
		    hidden.style.display = (hidden.style.display == "none") ? "inline-block" : "none";
		}


		function mobileMenu(){
			var hidden = document.getElementById("mobile-nav");
			var pic = document.getElementById('menu');
			pic.style.width = (pic.style.width == "40px") ? "50px" : "40px";
		    hidden.style.display = (hidden.style.display == "none") ? "block" : "none";
		   
		}
	
		function fun1(){
			document.getElementById('myimage').src='assets/images/img_1.jpg';
			document.getElementById('poster3').style.display="none";
			document.getElementById('poster2').style.display="none";
			document.getElementById('poster1').style.display="block";
		}
		function fun2(){
			document.getElementById('myimage').src='assets/images/img_2.jpg';
			document.getElementById('poster3').style.display="none";
			document.getElementById('poster1').style.display="none";
			document.getElementById('poster2').style.display="block";
			
		}
		function fun3(){
			document.getElementById('myimage').src='assets/images/img_3.jpg';
			document.getElementById('poster2').style.display="none";
			document.getElementById('poster1').style.display="none";
			document.getElementById('poster3').style.display="block";
		}

		var slideIndex = 1;
		showDivs(slideIndex);

		function plusDivs(n) {
		  showDivs(slideIndex += n);
		}

		function showDivs(n) {
		  var i;
		  var x = document.getElementsByClassName("mySlides");
		  if (n > x.length) {slideIndex = 1}    
		  if (n < 1) {slideIndex = x.length}
		  for (i = 0; i < x.length; i++) {
		     x[i].style.display = "none";  
		  }
		  x[slideIndex-1].style.display = "block";  
		}


		var myIndex = 0;
		carousel();

		function carousel() {
		    var i;
		    var k;
		    var x = document.getElementsByClassName("mySlides_2");
		    var y = document.getElementsByClassName("posters");
		    for (i = 0; i < x.length; i++) {
		       x[i].style.display = "none";
		       y[i].style.display = "none"; 
		    }
		    myIndex++;
		    if (myIndex > x.length) {myIndex = 1}    
		    x[myIndex-1].style.display = "block";
		    y[myIndex-1].style.display = "block";
		    setTimeout(carousel, 2000); // Change image every 2 seconds
		}


		$(document).ready(function(){
		    $('.wrapp').hover(function() {
		        $(this).addClass('transition');
		    }, function() {
		        $(this).removeClass('transition');
		    	  
		    });
		});

		$(document).ready(function(){
		    $('.wrapp').hover(function() {
		        $(this).find("+h3").css("color", "grey");
		    }, function() {
		    	$(this).find("+h3").css("color", "white");
		    	  
		    });
		});

