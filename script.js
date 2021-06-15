/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load", function () {

   let form = document.querySelector("form");
   form.addEventListener("submit", function (event) {

      // Input validation
      let userInputs = document.querySelectorAll("input");
      let missingInput = false;

      // Check each input for missing value
      userInputs.forEach(function (input) {
         if (input.value === "") {
            missingInput = true;
         }
      });

      // Alert if missing input
      if (missingInput) {
         alert("All fields are required.");
      }

      // Alert if string inputs are not strings
      if (typeof userInputs[0].value === "string" || typeof userInputs[1].value === "string") {
         alert("Please enter a string for Pilot Name and Co-pilot Name.");
      }

      // Alert if number inputs are not numbers
      if (isNaN(userInputs[2].value) || isNaN(userInputs[3].value)) {
         alert("Please enter a number for Fuel Level and Cargo Mass.");
      }

      // Don't submit form yet
      event.preventDefault();
   });
});

