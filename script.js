document.querySelector("#myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Collect form data
  let formData = new FormData(this);

  // Send post request to the server
  fetch(
    "https://forms.hubspot.com/uploads/form/v2/23736002/688d8b8a-37c8-4bf1-bd94-9e2e31d4c0d8",
    {
      method: "POST",
      body: formData,
    }
  )
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        // Show success message
        document.querySelector("#thankYou").innerHTML =
          "Thank you for submitting the form!";
        document.querySelector("#thankYou").style.color = "green";
        document.querySelector("#thankYou").style.display = "block";
      } else {
        // Show error message
        document.querySelector("#thankYou").innerHTML =
          "An error occurred while submitting the form. Please try again later.";
        document.querySelector("#thankYou").style.color = "red";
        document.querySelector("#thankYou").style.display = "block";
      }

      // Remove form
      this.remove();
    })
    .catch((error) => {
      console.error(error);
      // Show error message
      document.querySelector("#thankYou").innerHTML =
        "Something went wrong, please try again later.";
      document.querySelector("#thankYou").style.color = "red";
      document.querySelector("#thankYou").style.display = "block";
      // Remove form
      this.remove();
    });
});
