function myFunction() {
    document.getElementById("dropdown1").classList.toggle("show");
    document.getElementById("arrow").classList.toggle("arrow");
    document.getElementById("arrow2").classList.toggle("arrow");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown-rel')) {
      var dropdowns = document.getElementsByClassName("dropdown");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
         
        }
      }
    }
  }
  