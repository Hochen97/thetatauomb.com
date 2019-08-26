<script>
    $(function(){
      $("#navbar").load("./partials/navbar.html"); 
    });
  
    // $(function(){
    //   $("#eboard").load("./partials/eboard.html"); 
    // });
  
    $(function(){
      $("#footer").load("./partials/footer.html"); 
    });
  </script>
	
	<script>
	// When the user scrolls the page, execute myFunction 
	window.onscroll = function() {myFunction()};
	// Get the navbar
	var navbar = document.getElementById("navbar");
	// Get the offset position of the navbar
	var sticky = 100;
	// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
	function myFunction() {
	  if (window.pageYOffset >= sticky) {
	    navbar.classList.add("fixed")
	  } else {
	    navbar.classList.remove("fixed")
	  }
	}
	</script>
