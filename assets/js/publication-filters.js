document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    
    // Find all publication blocks
    const publications = document.querySelectorAll(".row");

    let activeFilter = null; // Keeps track of the currently active filter

    // Button click behaviors
    $(".filter-btn").unbind().click(function () {
      console.log('Button clicked!'); // Debugging statement
      $(this).toggleClass('clicked');

      const filter = this.getAttribute("data-filter");
      console.log(filterButtons);
      console.log(filter);
      console.log(publications);
      // Toggle behavior
      if (activeFilter === filter) {
        // If the clicked filter is already active, clear it (reset to all)
        activeFilter = null;
        showAllPublications();
      } else {
        // If it's a new filter, activate it
        activeFilter = filter;
        filterPublications(filter);
      }
    });
  
    function filterPublications(filter) {
      publications.forEach((pub) => {
        const category = pub.getAttribute("data-category");
        if (category === filter) {
          pub.style.display = "block";
        } else {
          pub.style.display = "none";
        }
      });
    }
  
    function showAllPublications() {
      publications.forEach((pub) => {
        pub.style.display = "block";
      });
    }
  });