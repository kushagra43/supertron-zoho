// document.querySelector("#myForm").addEventListener("submit", function (e) {
//   // Prevent default form submission behavior
//   e.preventDefault();

//   // Show "Thank you" message
//   document.querySelector("#thankYou").style.display = "block";

//   // Remove form
//   this.remove();
// });


              $("#myform").submit(function (e) {
                e.preventDefault(); // avoid to execute the actual submit of the form.
                var form = $(this);
                var url = form.attr("action");
                $.ajax({
                  type: "POST",
                  url: url,
                  data: form.serialize(), // serializes the form's elements.
                  success: function (data) {
                    // Show "Thank you" message
                    document.querySelector("#thankYou").style.display = "block";
                      this.remove();
                  },
                  error: function (data) {
                    alert("Something went wrong, Please try again later.");
                  },
                });
              });
