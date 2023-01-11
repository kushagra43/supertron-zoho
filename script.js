document.querySelector("#myForm").addEventListener("submit", function (e) {
  // Prevent default form submission behavior
  e.preventDefault();

  // Show "Thank you" message
  document.querySelector("#thankYou").style.display = "block";

  // Remove form
  this.remove();
});
