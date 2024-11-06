function showTooltip(event) {
    event.preventDefault(); // Prevents default link behavior
  
    const tooltip = document.getElementById("tooltip");
  
    // Position the tooltip near the click event
    tooltip.style.left = `${event.pageX + 10}px`;
    tooltip.style.top = `${event.pageY + 10}px`;
    
    // Toggle tooltip visibility
    if (tooltip.style.display === "none" || tooltip.style.display === "") {
      tooltip.style.display = "block";
    } else {
      tooltip.style.display = "none";
    }
  }
  
  // Hide tooltip if clicking outside of it
  document.addEventListener("click", (e) => {
    const tooltip = document.getElementById("tooltip");
    if (!e.target.classList.contains("tooltip-link") && tooltip.style.display === "block") {
      tooltip.style.display = "none";
    }
  });
  