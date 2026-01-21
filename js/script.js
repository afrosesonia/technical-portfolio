// Update footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Simple contact form handling
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  this.reset();
});
